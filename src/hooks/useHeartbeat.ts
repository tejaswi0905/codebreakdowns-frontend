import { useEffect, useRef, useCallback } from "react";
import { recordHeartbeat } from "@/services/api";

/**
 * Custom hook to manage debounced/throttled video heartbeat synchronization.
 * 
 * Rules enforced:
 * 1. Syncs strictly every 10 seconds of active playback progression.
 * 2. Syncs upon component unmount or browser window unload (tab close / refresh).
 * 3. Does NOT sync on video pause.
 */
export function useHeartbeat(lessonId: string, currentTime: number) {
  const lastSyncedTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(currentTime);

  // Keep ref in sync with current time without triggering re-renders or effects
  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  // Reset synced time when switching lessons
  useEffect(() => {
    lastSyncedTimeRef.current = 0;
  }, [lessonId]);

  const syncHeartbeat = useCallback(async (timeToSync: number) => {
    if (!lessonId || timeToSync <= 0) return;
    
    // Avoid redundant calls for negligible time differences (< 2 seconds)
    if (Math.abs(timeToSync - lastSyncedTimeRef.current) < 2) return;

    lastSyncedTimeRef.current = timeToSync;
    await recordHeartbeat(lessonId, Math.floor(timeToSync));
  }, [lessonId]);

  // 1. Threshold check during active playback (every 10s of progression)
  useEffect(() => {
    if (currentTime - lastSyncedTimeRef.current >= 10) {
      syncHeartbeat(currentTime);
    }
  }, [currentTime, syncHeartbeat]);

  // 2. Unmount and beforeunload synchronization
  useEffect(() => {
    const handleBeforeUnload = () => {
      const time = currentTimeRef.current;
      if (time > 0 && Math.abs(time - lastSyncedTimeRef.current) >= 2) {
        // Use sendBeacon if possible or sync call on page unload
        lastSyncedTimeRef.current = time;
        recordHeartbeat(lessonId, Math.floor(time));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // Component unmount (switching lessons or navigating away)
      const time = currentTimeRef.current;
      if (time > 0 && Math.abs(time - lastSyncedTimeRef.current) >= 2) {
        syncHeartbeat(time);
      }
    };
  }, [lessonId, syncHeartbeat]);
}
