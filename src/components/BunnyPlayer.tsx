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
  const [maxWatched, setMaxWatched] = useState(initialTimestamp || 0);
  const [isCompleted, setIsCompleted] = useState(!!isAlreadyCompleted);
  const [lastSeekWarning, setLastSeekWarning] = useState(0);

  // Integrate 10s & unmount debounced heartbeat syncing
  useHeartbeat(lessonId, maxWatched);

  useEffect(() => {
    // Reset tracking state when the lesson changes
    const initial = initialTimestamp || 0;
    setMaxWatched(initial);
    setIsCompleted(!!isAlreadyCompleted);
  }, [lessonId, initialTimestamp, isAlreadyCompleted]);

  // Resume playback from initialTimestamp if previously watched (> 5 seconds)
  useEffect(() => {
    if (!lessonId || !initialTimestamp || initialTimestamp <= 5) return;
    const timer = setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ method: "setCurrentTime", value: initialTimestamp }),
        "*"
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [lessonId, initialTimestamp]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is coming from Bunny Stream iframe
      if (event.origin !== "https://iframe.mediadelivery.net") return;

      try {
        // Bunny uses JSON stringified messages
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        
        if (data.event === "timeupdate") {
          const currentTime = data.currentTime || data.time || 0; // Depends on Bunny API version
          
          if (currentTime > maxWatched) {
            setMaxWatched(currentTime);
          }

          // Rule: Auto-complete problem explanations
          if (isProblem && !isCompleted && explanationEndSeconds && currentTime >= explanationEndSeconds) {
            setIsCompleted(true);
            markLessonCompletedApi(lessonId).then((res) => {
              if (res.success) {
                toast.success("Explanation complete! Time to tackle the problem.");
                onLessonComplete?.();
              }
            });
            // Auto-pause the video so they jump into the coding environment
            iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ method: "pause" }), "*");
          }
        }

        if (data.event === "seek") {
          const seekToTime = data.time || data.currentTime || 0;
          
          // Rule: No Fast-Forwarding for problems
          if (isProblem && seekToTime > maxWatched + 2) {
             iframeRef.current?.contentWindow?.postMessage(
               JSON.stringify({ method: "setCurrentTime", value: maxWatched }),
               "*"
             );
             
             // Debounce the toast so it doesn't spam
             const now = Date.now();
             if (now - lastSeekWarning > 3000) {
               toast.info("Fast-forwarding is disabled for problem explanations. Please watch the theory first.");
               setLastSeekWarning(now);
             }
          }
        }
      } catch (e) {
        // Ignore JSON parse errors for unrelated messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [lessonId, maxWatched, isProblem, explanationEndSeconds, isCompleted, lastSeekWarning]);

  return (
    <div className="w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl">
      <iframe
        ref={iframeRef}
        src={videoUrlOrId.replace("autoplay=true", "autoplay=false")}
        className="w-full h-full border-0 absolute inset-0"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}
