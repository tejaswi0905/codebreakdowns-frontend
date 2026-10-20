import { useEffect, useRef, useState, useMemo } from "react";
import { useHeartbeat } from "@/hooks/useHeartbeat";
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

  // If the user pasted a raw UUID
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

  // Integrate 10s & unmount debounced heartbeat syncing to database
  useHeartbeat(lessonId, maxWatched);

  // Update position and trigger side effects
  const handleTimeUpdate = (seconds: number) => {
    if (typeof seconds !== "number" || isNaN(seconds) || seconds < 0) return;

    setCurrentTime(seconds);

    // Save to localStorage for seamless refresh recovery
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
  };

  // Safe Player.js command sender with required protocol headers
  const postToIframe = (method: string, value?: any) => {
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
  };

  // Reset state when active lesson changes
  useEffect(() => {
    explanationNotifiedRef.current = false;
    setCurrentTime(initialPosition);
    setMaxWatched(initialPosition);
    onProgress?.(initialPosition, initialPosition);
  }, [lessonId, initialPosition]);

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
            } catch {}
          }

          const player = new playerjs.Player(iframeRef.current);
          playerInstanceRef.current = player;

          player.on("ready", () => {
            if (initialPosition > 2) {
              player.setCurrentTime(initialPosition);
            }
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
      .catch(() => {});

    return () => {
      isCancelled = true;
    };
  }, [lessonId, initialPosition]);

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
          // Send subscriptions with Player.js context
          postToIframe("addEventListener", "timeupdate");
          postToIframe("addEventListener", "seeked");
          postToIframe("addEventListener", "pause");
          if (initialPosition > 2) {
            postToIframe("setCurrentTime", initialPosition);
          }
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
  }, [lessonId, initialPosition]);

  const embedUrl = useMemo(() => {
    return getNormalizedBunnyUrl(videoUrlOrId, initialPosition);
  }, [videoUrlOrId, initialPosition]);

  return (
    <div className="w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        onLoad={() => {
          // Send handshake registrations with Player.js context immediately when iframe loads
          postToIframe("addEventListener", "ready");
          postToIframe("addEventListener", "timeupdate");
          postToIframe("addEventListener", "seeked");
          postToIframe("addEventListener", "pause");
          if (initialPosition > 2) {
            postToIframe("setCurrentTime", initialPosition);
          }
        }}
        className="w-full h-full border-0 absolute inset-0"
        allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}
