import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useHeartbeat } from "@/hooks/useHeartbeat";
import { Button } from "@/components/ui/button";
import { WifiOff, RotateCw, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface BunnyPlayerProps {
  lessonId: string;
  videoUrlOrId: string;
  isProblem: boolean;
  explanationEndSeconds: number | null;
  initialTimestamp?: number;
  isAlreadyCompleted?: boolean;
  onLessonComplete?: () => void;
  onProgress?: (currentTime: number, maxWatched: number) => void;
}

const formatSeconds = (totalSeconds: number): string => {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

// Dynamically loads the official Player.js library hosted by Bunny.net
function loadPlayerJs(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject();
  if ((window as any).playerjs) return Promise.resolve((window as any).playerjs);

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="player-0.1.0.min.js"]');
    if (existing) {
      if ((window as any).playerjs) return resolve((window as any).playerjs);
      existing.addEventListener("load", () => resolve((window as any).playerjs));
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js";
    script.async = true;
    script.onload = () => resolve((window as any).playerjs);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Normalizes any Bunny video link into the official responsive iframe embed URL
const getNormalizedBunnyUrl = (raw: string, startSeconds?: number): string => {
  if (!raw) return "";
  let url = raw.trim();

  // If raw UUID
  if (/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(url)) {
    url = `https://iframe.mediadelivery.net/embed/728335/${url}`;
  } else {
    // Convert share link to embed iframe URL
    url = url.replace("player.mediadelivery.net/play/", "iframe.mediadelivery.net/embed/");
  }

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("autoplay", "false");
    parsed.searchParams.set("loop", "false");
    parsed.searchParams.set("muted", "false");
    parsed.searchParams.set("preload", "true");
    if (startSeconds && startSeconds > 2) {
      parsed.searchParams.set("t", `${Math.floor(startSeconds)}`);
    }
    return parsed.toString();
  } catch {
    url = url.replace("autoplay=true", "autoplay=false");
    if (!url.includes("autoplay=false")) {
      url += (url.includes("?") ? "&" : "?") + "autoplay=false";
    }
    if (startSeconds && startSeconds > 2 && !url.includes("t=")) {
      url += `&t=${Math.floor(startSeconds)}`;
    }
    return url;
  }
};

export function BunnyPlayer({ 
  lessonId, 
  videoUrlOrId, 
  isProblem, 
  explanationEndSeconds,
  initialTimestamp,
  isAlreadyCompleted,
  onProgress,
}: BunnyPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerInstanceRef = useRef<any>(null);
  const explanationNotifiedRef = useRef<boolean>(false);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Network and Stream State
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  });
  const [streamError, setStreamError] = useState<string | null>(null);
  const [isLoadingStream, setIsLoadingStream] = useState<boolean>(true);
  const [reconnectKey, setReconnectKey] = useState<number>(0);
  const [retryAttempts, setRetryAttempts] = useState<number>(0);

  // Retrieve any locally cached watch position or fallback to backend initialTimestamp
  const initialPosition = useMemo(() => {
    try {
      const cached = localStorage.getItem(`cb_video_pos_${lessonId}`);
      if (cached) {
        const val = parseFloat(cached);
        if (!isNaN(val) && val > 2) return val;
      }
    } catch {}
    return initialTimestamp && initialTimestamp > 2 ? initialTimestamp : 0;
  }, [lessonId, initialTimestamp]);

  const [currentTime, setCurrentTime] = useState<number>(initialPosition);
  const [maxWatched, setMaxWatched] = useState<number>(initialPosition);

  // Sync latest playback point to heartbeat hook
  useHeartbeat(lessonId, maxWatched);

  // Safe Player.js command sender with required protocol headers
  const postToIframe = useCallback((method: string, value?: any) => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            context: "player.js",
            version: "0.0.11",
            method,
            value,
          }),
          "*"
        );
      }
    } catch {}
  }, []);

  // Manual & Automated Reconnection handler
  const handleReconnect = useCallback((isAuto = false) => {
    setStreamError(null);
    setIsLoadingStream(true);
    setRetryAttempts((prev) => prev + 1);
    setReconnectKey((prev) => prev + 1);

    if (isAuto) {
      toast.info("Connection restored. Reconnecting video stream...", {
        id: `auto-reconnect-${lessonId}`,
      });
    } else {
      toast.loading("Reconnecting stream...", {
        id: `manual-reconnect-${lessonId}`,
        duration: 1500,
      });
    }
  }, [lessonId]);

  // Network connectivity event listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Auto-reconnect if player was in an error state or stream was interrupted
      handleReconnect(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setStreamError("Network connection lost. Video stream may pause.");
      toast.warning("Network connection lost. Waiting for connection...", {
        id: "network-offline-warning",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleReconnect]);

  // Update position and trigger side effects
  const handleTimeUpdate = useCallback((seconds: number) => {
    if (typeof seconds !== "number" || isNaN(seconds) || seconds < 0) return;

    // Stream is actively progressing -> clear any loading or error state
    setIsLoadingStream(false);
    setStreamError(null);
    setCurrentTime(seconds);

    // Save to localStorage for seamless refresh/reconnection recovery
    if (seconds > 0) {
      try {
        localStorage.setItem(`cb_video_pos_${lessonId}`, seconds.toString());
      } catch {}
    }

    // Advance highest watched milestone
    setMaxWatched((prevMax) => {
      const newMax = Math.max(prevMax, seconds);
      onProgress?.(seconds, newMax);
      return newMax;
    });

    // Notify student when explanation threshold is crossed
    if (
      isProblem &&
      explanationEndSeconds &&
      seconds >= explanationEndSeconds &&
      !explanationNotifiedRef.current &&
      !isAlreadyCompleted
    ) {
      explanationNotifiedRef.current = true;
      toast.success("Explanation complete! 'Mark as Complete' is now unlocked.", {
        id: `explanation-unlocked-${lessonId}`,
      });
    }
  }, [lessonId, isProblem, explanationEndSeconds, isAlreadyCompleted, onProgress]);

  // Reset state when active lesson changes
  useEffect(() => {
    explanationNotifiedRef.current = false;
    setCurrentTime(initialPosition);
    setMaxWatched(initialPosition);
    setStreamError(null);
    setIsLoadingStream(true);
    setRetryAttempts(0);
    onProgress?.(initialPosition, initialPosition);
  }, [lessonId, initialPosition, onProgress]);

  // Timeout guard for slow/unresponsive initial connection on mobile
  useEffect(() => {
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);

    loadTimeoutRef.current = setTimeout(() => {
      if (isLoadingStream && !currentTime) {
        // Did not start playing within 12s
        if (!navigator.onLine) {
          setStreamError("You appear to be offline. Reconnect your network to resume.");
        }
      }
    }, 12000);

    return () => {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    };
  }, [isLoadingStream, currentTime, reconnectKey]);

  // Primary Integration: Official Player.js Wrapper
  useEffect(() => {
    let isCancelled = false;

    loadPlayerJs()
      .then((playerjs) => {
        if (isCancelled || !iframeRef.current) return;

        try {
          // Dispose any previous instance
          if (playerInstanceRef.current) {
            try {
              playerInstanceRef.current.off("ready");
              playerInstanceRef.current.off("timeupdate");
              playerInstanceRef.current.off("seeked");
              playerInstanceRef.current.off("pause");
              playerInstanceRef.current.off("error");
            } catch {}
          }

          const player = new playerjs.Player(iframeRef.current);
          playerInstanceRef.current = player;

          player.on("ready", () => {
            setIsLoadingStream(false);
            setStreamError(null);
            const resumePoint = Math.max(currentTime, initialPosition);
            if (resumePoint > 2) {
              player.setCurrentTime(resumePoint);
            }
          });

          player.on("error", (err: any) => {
            console.warn("[BunnyPlayer] Player.js stream error:", err);
            setIsLoadingStream(false);
            setStreamError("Playback interrupted by network instability or video stream timeout.");
          });

          player.on("timeupdate", (data: any) => {
            const secs = typeof data === "object" && typeof data?.seconds === "number"
              ? data.seconds
              : typeof data === "number" ? data : 0;
            handleTimeUpdate(secs);
          });

          player.on("seeked", (data: any) => {
            const secs = typeof data === "object" && typeof data?.seconds === "number"
              ? data.seconds
              : typeof data === "number" ? data : 0;
            if (secs > 0) {
              handleTimeUpdate(secs);
            } else {
              player.getCurrentTime((t: number) => {
                if (typeof t === "number") handleTimeUpdate(t);
              });
            }
          });

          player.on("pause", () => {
            player.getCurrentTime((t: number) => {
              if (typeof t === "number") handleTimeUpdate(t);
            });
          });
        } catch (err) {
          console.warn("[BunnyPlayer] Player.js initialization fallback:", err);
        }
      })
      .catch((loadErr) => {
        console.warn("[BunnyPlayer] Script load error, falling back to postMessage:", loadErr);
      });

    return () => {
      isCancelled = true;
    };
  }, [lessonId, initialPosition, reconnectKey, handleTimeUpdate]);

  // Secondary Integration (Fallback Layer): Raw window message listener
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.origin === "string" && !event.origin.includes("mediadelivery.net")) {
        return;
      }

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (!data || typeof data !== "object") return;

        if (data.event === "ready") {
          setIsLoadingStream(false);
          setStreamError(null);
          postToIframe("addEventListener", "timeupdate");
          postToIframe("addEventListener", "seeked");
          postToIframe("addEventListener", "pause");
          postToIframe("addEventListener", "error");
          const resumePoint = Math.max(currentTime, initialPosition);
          if (resumePoint > 2) {
            postToIframe("setCurrentTime", resumePoint);
          }
        }

        if (data.event === "error") {
          setIsLoadingStream(false);
          setStreamError("Stream playback error detected. Check connection.");
        }

        if (data.event === "timeupdate" || data.event === "seeked") {
          let timeVal: number | null = null;
          if (typeof data.value === "object" && data.value !== null && typeof data.value.seconds === "number") {
            timeVal = data.value.seconds;
          } else if (typeof data.value === "number") {
            timeVal = data.value;
          } else if (typeof data.seconds === "number") {
            timeVal = data.seconds;
          }
          if (timeVal !== null && !isNaN(timeVal) && timeVal >= 0) {
            handleTimeUpdate(timeVal);
          }
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [lessonId, initialPosition, reconnectKey, postToIframe, handleTimeUpdate]);

  // Resume timestamp used in iframe source
  const resumeTimestamp = useMemo(() => {
    return Math.max(currentTime, initialPosition);
  }, [currentTime, initialPosition]);

  const embedUrl = useMemo(() => {
    return getNormalizedBunnyUrl(videoUrlOrId, resumeTimestamp);
  }, [videoUrlOrId, resumeTimestamp, reconnectKey]);

  return (
    <div className="w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl group select-none">
      {/* Offline Status Badge */}
      {!isOnline && (
        <div className="absolute top-3 right-3 z-30 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/90 text-white text-xs font-semibold backdrop-blur-md shadow-lg animate-in fade-in duration-200">
          <WifiOff className="h-3.5 w-3.5 animate-pulse" />
          <span>Offline — Reconnecting when available</span>
        </div>
      )}

      {/* Stream Interruption / Connection Error Overlay */}
      {streamError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-black/90 backdrop-blur-md text-center animate-in fade-in duration-300">
          <div className="h-12 w-12 rounded-2xl bg-destructive/15 text-destructive border border-destructive/30 flex items-center justify-center mb-3">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h4 className="text-base font-bold text-white">Video Stream Interrupted</h4>
          <p className="text-xs text-white/70 mt-1.5 max-w-sm leading-relaxed">
            {streamError}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <Button 
              size="sm" 
              onClick={() => handleReconnect(false)} 
              className="gap-2 font-semibold shadow-md rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <RotateCw className="h-3.5 w-3.5" /> Reconnect Stream
            </Button>
          </div>
          {resumeTimestamp > 2 && (
            <p className="text-[11px] text-white/50 mt-2 font-mono">
              Resumes automatically at {formatSeconds(resumeTimestamp)}
            </p>
          )}
          {retryAttempts > 0 && (
            <span className="text-[10px] text-white/40 mt-1">
              Reconnect attempts: {retryAttempts}
            </span>
          )}
        </div>
      )}

      {/* Initial Connecting Loader Overlay */}
      {isLoadingStream && !streamError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/75 backdrop-blur-xs transition-opacity duration-300 pointer-events-none">
          <Loader2 className="h-8 w-8 text-primary animate-spin mb-2.5 opacity-90" />
          <span className="text-xs font-medium text-white/80">Connecting to secure stream...</span>
          {resumeTimestamp > 2 && (
            <span className="text-[10px] text-white/50 mt-1">
              Resuming from {formatSeconds(resumeTimestamp)}
            </span>
          )}
        </div>
      )}

      {/* Bunny Embed Iframe */}
      <iframe
        key={`bunny-frame-${lessonId}-${reconnectKey}`}
        ref={iframeRef}
        src={embedUrl}
        onLoad={() => {
          // Handshake registrations with Player.js context immediately when iframe loads
          postToIframe("addEventListener", "ready");
          postToIframe("addEventListener", "timeupdate");
          postToIframe("addEventListener", "seeked");
          postToIframe("addEventListener", "pause");
          postToIframe("addEventListener", "error");
          if (resumeTimestamp > 2) {
            postToIframe("setCurrentTime", resumeTimestamp);
          }
        }}
        className="w-full h-full border-0 absolute inset-0"
        allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
        allowFullScreen
        title="Lesson Video Stream"
      />
    </div>
  );
}
