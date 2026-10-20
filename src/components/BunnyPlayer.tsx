import { useEffect, useRef, useState } from "react";
import { markLessonCompletedApi } from "@/services/api";
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
}

// Normalizes any Bunny video link (play URL, embed URL, or raw UUID) into the official responsive iframe embed URL with autoplay disabled
const getNormalizedBunnyUrl = (raw: string): string => {
  if (!raw) return "";
  let url = raw.trim();

  // If the user pasted a raw UUID
  if (/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(url)) {
    return `https://iframe.mediadelivery.net/embed/728335/${url}?autoplay=false&loop=false&muted=false&preload=true`;
  }

  // If the user pasted a share link (player.mediadelivery.net/play/...), convert to embed iframe URL
  url = url.replace("player.mediadelivery.net/play/", "iframe.mediadelivery.net/embed/");

  // Strictly enforce autoplay=false
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("autoplay", "false");
    parsed.searchParams.set("loop", "false");
    return parsed.toString();
  } catch {
    url = url.replace("autoplay=true", "autoplay=false");
    if (!url.includes("autoplay=false")) {
      url += (url.includes("?") ? "&" : "?") + "autoplay=false";
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
  onLessonComplete,
}: BunnyPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Retrieve any locally cached watch position or fallback to backend initialTimestamp
  const getInitialPosition = () => {
    try {
      const cached = localStorage.getItem(`cb_video_pos_${lessonId}`);
      if (cached) {
        const val = parseFloat(cached);
        if (!isNaN(val) && val > 3) return val;
      }
    } catch {}
    return initialTimestamp && initialTimestamp > 3 ? initialTimestamp : 0;
  };

  const [maxWatched, setMaxWatched] = useState(getInitialPosition);
  const [isCompleted, setIsCompleted] = useState(!!isAlreadyCompleted);

  // Integrate 10s & unmount debounced heartbeat syncing to database
  useHeartbeat(lessonId, maxWatched);

  // Reset tracking state when the lesson changes
  useEffect(() => {
    const startPos = getInitialPosition();
    setMaxWatched(startPos);
    setIsCompleted(!!isAlreadyCompleted);
  }, [lessonId, initialTimestamp, isAlreadyCompleted]);

  // Seamlessly resume playback from last watched position without auto-starting playback
  useEffect(() => {
    const resumeTime = getInitialPosition();
    if (!lessonId || resumeTime <= 3) return;

    // Send seek to iframe and ensure it remains paused until user explicitly clicks play
    const timer = setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ method: "setCurrentTime", value: resumeTime }),
        "*"
      );
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ method: "pause" }),
        "*"
      );
    }, 1200);

    return () => clearTimeout(timer);
  }, [lessonId]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is coming from Bunny Stream iframe
      if (event.origin !== "https://iframe.mediadelivery.net") return;

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        
        if (data.event === "timeupdate") {
          const currentTime = data.currentTime || data.time || 0;
          
          if (currentTime > 0) {
            try {
              localStorage.setItem(`cb_video_pos_${lessonId}`, currentTime.toString());
            } catch {}
          }

          if (currentTime > maxWatched) {
            setMaxWatched(currentTime);
          }

          // Rule: Auto-complete when student watches up to or past the explanation timestamp
          if (isProblem && !isCompleted && explanationEndSeconds && currentTime >= explanationEndSeconds) {
            setIsCompleted(true);
            markLessonCompletedApi(lessonId).then((res) => {
              if (res.success) {
                toast.success("Explanation complete! Time to tackle the problem.");
                onLessonComplete?.();
              }
            });
          }
        }

        if (data.event === "seek") {
          const seekToTime = data.time || data.currentTime || 0;
          
          if (seekToTime > 0) {
            try {
              localStorage.setItem(`cb_video_pos_${lessonId}`, seekToTime.toString());
            } catch {}
          }

          if (seekToTime > maxWatched) {
            setMaxWatched(seekToTime);
          }

          // If the student seeks past explanationEndSeconds, immediately unlock completion
          if (isProblem && !isCompleted && explanationEndSeconds && seekToTime >= explanationEndSeconds) {
            setIsCompleted(true);
            markLessonCompletedApi(lessonId).then((res) => {
              if (res.success) {
                toast.success("Explanation complete! Time to tackle the problem.");
                onLessonComplete?.();
              }
            });
          }
        }
      } catch (e) {
        // Ignore JSON parse errors for unrelated messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [lessonId, maxWatched, isProblem, explanationEndSeconds, isCompleted, onLessonComplete]);

  const embedUrl = getNormalizedBunnyUrl(videoUrlOrId);

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
