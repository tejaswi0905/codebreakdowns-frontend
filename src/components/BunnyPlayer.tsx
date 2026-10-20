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

// Normalizes any Bunny video link (play URL, embed URL, or raw UUID) into the official responsive iframe embed URL with autoplay disabled and start timestamp
const getNormalizedBunnyUrl = (raw: string, startSeconds?: number): string => {
  if (!raw) return "";
  let url = raw.trim();

  // If the user pasted a raw UUID
  if (/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(url)) {
    url = `https://iframe.mediadelivery.net/embed/728335/${url}`;
  } else {
    // If the user pasted a share link (player.mediadelivery.net/play/...), convert to embed iframe URL
    url = url.replace("player.mediadelivery.net/play/", "iframe.mediadelivery.net/embed/");
  }

  // Strictly enforce autoplay=false, loop=false, and start timestamp if > 2s
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("autoplay", "false");
    parsed.searchParams.set("loop", "false");
    parsed.searchParams.set("muted", "false");
    parsed.searchParams.set("preload", "true");
    if (startSeconds && startSeconds > 2) {
      parsed.searchParams.set("t", `${Math.floor(startSeconds)}s`);
    }
    return parsed.toString();
  } catch {
    url = url.replace("autoplay=true", "autoplay=false");
    if (!url.includes("autoplay=false")) {
      url += (url.includes("?") ? "&" : "?") + "autoplay=false";
    }
    if (startSeconds && startSeconds > 2 && !url.includes("t=")) {
      url += `&t=${Math.floor(startSeconds)}s`;
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

  // Helper to post Player.js messages to Bunny iframe safely
  const postToIframe = (method: string, value?: any) => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method, value }),
          "*"
        );
      }
    } catch {}
  };

  // Reset tracking state and notify parent whenever lessonId changes
  useEffect(() => {
    explanationNotifiedRef.current = false;
    setCurrentTime(initialPosition);
    setMaxWatched(initialPosition);
    onProgress?.(initialPosition, initialPosition);
  }, [lessonId, initialPosition]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is coming from Bunny Stream iframe
      if (typeof event.origin === "string" && !event.origin.includes("mediadelivery.net")) {
        return;
      }

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (!data || typeof data !== "object") return;

        // 1. Handshake: Player is initialized and ready
        if (data.event === "ready") {
          // Subscribe to essential Player.js events
          postToIframe("addEventListener", "timeupdate");
          postToIframe("addEventListener", "seek");
          postToIframe("addEventListener", "play");
          postToIframe("addEventListener", "pause");
          postToIframe("addEventListener", "ended");

          // Redundant seek safeguard in case iframe did not honor URL t parameter
          if (initialPosition > 2) {
            postToIframe("setCurrentTime", initialPosition);
            postToIframe("pause");
          }
        }

        // 2. Playback progression or user seek
        if (data.event === "timeupdate" || data.event === "seek") {
          let timeVal: number | null = null;
          
          // Player.js spec stores seconds in data.value.seconds or data.seconds
          if (typeof data.value === "object" && data.value !== null && typeof data.value.seconds === "number") {
            timeVal = data.value.seconds;
          } else if (typeof data.value === "number") {
            timeVal = data.value;
          } else if (typeof data.seconds === "number") {
            timeVal = data.seconds;
          } else if (typeof data.currentTime === "number") {
            timeVal = data.currentTime;
          } else if (typeof data.time === "number") {
            timeVal = data.time;
          }

          if (timeVal !== null && !isNaN(timeVal) && timeVal >= 0) {
            setCurrentTime(timeVal);

            // Persist locally for instant resume on refresh
            if (timeVal > 0) {
              try {
                localStorage.setItem(`cb_video_pos_${lessonId}`, timeVal.toString());
              } catch {}
            }

            // Update highest watched time and notify parent
            setMaxWatched((prevMax) => {
              const newMax = Math.max(prevMax, timeVal);
              onProgress?.(timeVal, newMax);
              return newMax;
            });

            // Unlock notice when student crosses explanationEndSeconds
            if (
              isProblem &&
              explanationEndSeconds &&
              timeVal >= explanationEndSeconds &&
              !explanationNotifiedRef.current &&
              !isAlreadyCompleted
            ) {
              explanationNotifiedRef.current = true;
              toast.success("Explanation complete! 'Mark as Complete' is now unlocked.", {
                id: `explanation-unlocked-${lessonId}`,
              });
            }
          }
        }
      } catch {
        // Ignore non-JSON messages from other extensions or browser tools
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [lessonId, initialPosition, isProblem, explanationEndSeconds, isAlreadyCompleted, onProgress]);

  const embedUrl = useMemo(() => {
    return getNormalizedBunnyUrl(videoUrlOrId, initialPosition);
  }, [videoUrlOrId, initialPosition]);

  return (
    <div className="w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        className="w-full h-full border-0 absolute inset-0"
        allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}
