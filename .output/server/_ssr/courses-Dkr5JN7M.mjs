import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Lock, G as Circle, J as CircleAlert, Q as Check, Y as ChevronUp, Z as ChevronDown, ct as ArrowLeft, q as CircleCheck, rt as Bookmark, u as Sparkles, y as Play, z as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as recordHeartbeat, f as toggleBookmarkApi, i as fetchCourses, r as fetchCoursePlayData, s as fetchMyCourses, u as markLessonCompletedApi } from "./api-BUiRiYXp.mjs";
import { t as useAuthStore } from "./authStore-CaRoAg4M.mjs";
import { t as Route } from "./courses-rGA_26I7.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-Dkr5JN7M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
/**
* Custom hook to manage debounced/throttled video heartbeat synchronization.
* 
* Rules enforced:
* 1. Syncs strictly every 10 seconds of active playback progression.
* 2. Syncs upon component unmount or browser window unload (tab close / refresh).
* 3. Does NOT sync on video pause.
*/
function useHeartbeat(lessonId, currentTime) {
	const lastSyncedTimeRef = (0, import_react.useRef)(0);
	const currentTimeRef = (0, import_react.useRef)(currentTime);
	(0, import_react.useEffect)(() => {
		currentTimeRef.current = currentTime;
	}, [currentTime]);
	(0, import_react.useEffect)(() => {
		lastSyncedTimeRef.current = 0;
	}, [lessonId]);
	const syncHeartbeat = (0, import_react.useCallback)(async (timeToSync) => {
		if (!lessonId || timeToSync <= 0) return;
		if (Math.abs(timeToSync - lastSyncedTimeRef.current) < 2) return;
		lastSyncedTimeRef.current = timeToSync;
		await recordHeartbeat(lessonId, Math.floor(timeToSync));
	}, [lessonId]);
	(0, import_react.useEffect)(() => {
		if (currentTime - lastSyncedTimeRef.current >= 10) syncHeartbeat(currentTime);
	}, [currentTime, syncHeartbeat]);
	(0, import_react.useEffect)(() => {
		const handleBeforeUnload = () => {
			const time = currentTimeRef.current;
			if (time > 0 && Math.abs(time - lastSyncedTimeRef.current) >= 2) {
				lastSyncedTimeRef.current = time;
				recordHeartbeat(lessonId, Math.floor(time));
			}
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
			const time = currentTimeRef.current;
			if (time > 0 && Math.abs(time - lastSyncedTimeRef.current) >= 2) syncHeartbeat(time);
		};
	}, [lessonId, syncHeartbeat]);
}
function loadPlayerJs() {
	if (typeof window === "undefined") return Promise.reject();
	if (window.playerjs) return Promise.resolve(window.playerjs);
	return new Promise((resolve, reject) => {
		const existing = document.querySelector("script[src*=\"player-0.1.0.min.js\"]");
		if (existing) {
			if (window.playerjs) return resolve(window.playerjs);
			existing.addEventListener("load", () => resolve(window.playerjs));
			existing.addEventListener("error", reject);
			return;
		}
		const script = document.createElement("script");
		script.src = "https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js";
		script.async = true;
		script.onload = () => resolve(window.playerjs);
		script.onerror = reject;
		document.head.appendChild(script);
	});
}
var getNormalizedBunnyUrl = (raw, startSeconds) => {
	if (!raw) return "";
	let url = raw.trim();
	if (/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(url)) url = `https://iframe.mediadelivery.net/embed/728335/${url}`;
	else url = url.replace("player.mediadelivery.net/play/", "iframe.mediadelivery.net/embed/");
	try {
		const parsed = new URL(url);
		parsed.searchParams.set("autoplay", "false");
		parsed.searchParams.set("loop", "false");
		parsed.searchParams.set("muted", "false");
		parsed.searchParams.set("preload", "true");
		if (startSeconds && startSeconds > 2) parsed.searchParams.set("t", `${Math.floor(startSeconds)}`);
		return parsed.toString();
	} catch {
		url = url.replace("autoplay=true", "autoplay=false");
		if (!url.includes("autoplay=false")) url += (url.includes("?") ? "&" : "?") + "autoplay=false";
		if (startSeconds && startSeconds > 2 && !url.includes("t=")) url += `&t=${Math.floor(startSeconds)}`;
		return url;
	}
};
function BunnyPlayer({ lessonId, videoUrlOrId, isProblem, explanationEndSeconds, initialTimestamp, isAlreadyCompleted, onProgress }) {
	const iframeRef = (0, import_react.useRef)(null);
	const playerInstanceRef = (0, import_react.useRef)(null);
	const explanationNotifiedRef = (0, import_react.useRef)(false);
	const initialPosition = (0, import_react.useMemo)(() => {
		try {
			const cached = localStorage.getItem(`cb_video_pos_${lessonId}`);
			if (cached) {
				const val = parseFloat(cached);
				if (!isNaN(val) && val > 2) return val;
			}
		} catch {}
		return initialTimestamp && initialTimestamp > 2 ? initialTimestamp : 0;
	}, [lessonId, initialTimestamp]);
	const [currentTime, setCurrentTime] = (0, import_react.useState)(initialPosition);
	const [maxWatched, setMaxWatched] = (0, import_react.useState)(initialPosition);
	useHeartbeat(lessonId, maxWatched);
	const handleTimeUpdate = (seconds) => {
		if (typeof seconds !== "number" || isNaN(seconds) || seconds < 0) return;
		setCurrentTime(seconds);
		if (seconds > 0) try {
			localStorage.setItem(`cb_video_pos_${lessonId}`, seconds.toString());
		} catch {}
		setMaxWatched((prevMax) => {
			const newMax = Math.max(prevMax, seconds);
			onProgress?.(seconds, newMax);
			return newMax;
		});
		if (isProblem && explanationEndSeconds && seconds >= explanationEndSeconds && !explanationNotifiedRef.current && !isAlreadyCompleted) {
			explanationNotifiedRef.current = true;
			toast.success("Explanation complete! 'Mark as Complete' is now unlocked.", { id: `explanation-unlocked-${lessonId}` });
		}
	};
	const postToIframe = (method, value) => {
		try {
			if (iframeRef.current?.contentWindow) iframeRef.current.contentWindow.postMessage(JSON.stringify({
				context: "player.js",
				version: "0.0.11",
				method,
				value
			}), "*");
		} catch {}
	};
	(0, import_react.useEffect)(() => {
		explanationNotifiedRef.current = false;
		setCurrentTime(initialPosition);
		setMaxWatched(initialPosition);
		onProgress?.(initialPosition, initialPosition);
	}, [lessonId, initialPosition]);
	(0, import_react.useEffect)(() => {
		let isCancelled = false;
		loadPlayerJs().then((playerjs) => {
			if (isCancelled || !iframeRef.current) return;
			try {
				if (playerInstanceRef.current) try {
					playerInstanceRef.current.off("ready");
					playerInstanceRef.current.off("timeupdate");
					playerInstanceRef.current.off("seeked");
					playerInstanceRef.current.off("pause");
				} catch {}
				const player = new playerjs.Player(iframeRef.current);
				playerInstanceRef.current = player;
				player.on("ready", () => {
					if (initialPosition > 2) player.setCurrentTime(initialPosition);
				});
				player.on("timeupdate", (data) => {
					const secs = typeof data === "object" && typeof data?.seconds === "number" ? data.seconds : typeof data === "number" ? data : 0;
					handleTimeUpdate(secs);
				});
				player.on("seeked", (data) => {
					const secs = typeof data === "object" && typeof data?.seconds === "number" ? data.seconds : typeof data === "number" ? data : 0;
					if (secs > 0) handleTimeUpdate(secs);
					else player.getCurrentTime((t) => {
						if (typeof t === "number") handleTimeUpdate(t);
					});
				});
				player.on("pause", () => {
					player.getCurrentTime((t) => {
						if (typeof t === "number") handleTimeUpdate(t);
					});
				});
			} catch (err) {
				console.warn("[BunnyPlayer] Player.js initialization fallback:", err);
			}
		}).catch(() => {});
		return () => {
			isCancelled = true;
		};
	}, [lessonId, initialPosition]);
	(0, import_react.useEffect)(() => {
		const handleMessage = (event) => {
			if (typeof event.origin === "string" && !event.origin.includes("mediadelivery.net")) return;
			try {
				const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
				if (!data || typeof data !== "object") return;
				if (data.event === "ready") {
					postToIframe("addEventListener", "timeupdate");
					postToIframe("addEventListener", "seeked");
					postToIframe("addEventListener", "pause");
					if (initialPosition > 2) postToIframe("setCurrentTime", initialPosition);
				}
				if (data.event === "timeupdate" || data.event === "seeked") {
					let timeVal = null;
					if (typeof data.value === "object" && data.value !== null && typeof data.value.seconds === "number") timeVal = data.value.seconds;
					else if (typeof data.value === "number") timeVal = data.value;
					else if (typeof data.seconds === "number") timeVal = data.seconds;
					if (timeVal !== null && !isNaN(timeVal) && timeVal >= 0) handleTimeUpdate(timeVal);
				}
			} catch {}
		};
		window.addEventListener("message", handleMessage);
		return () => window.removeEventListener("message", handleMessage);
	}, [lessonId, initialPosition]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			ref: iframeRef,
			src: (0, import_react.useMemo)(() => {
				return getNormalizedBunnyUrl(videoUrlOrId, initialPosition);
			}, [videoUrlOrId, initialPosition]),
			onLoad: () => {
				postToIframe("addEventListener", "ready");
				postToIframe("addEventListener", "timeupdate");
				postToIframe("addEventListener", "seeked");
				postToIframe("addEventListener", "pause");
				if (initialPosition > 2) postToIframe("setCurrentTime", initialPosition);
			},
			className: "w-full h-full border-0 absolute inset-0",
			allow: "accelerometer; gyroscope; encrypted-media; picture-in-picture;",
			allowFullScreen: true
		})
	});
}
function CoursePlayerPage() {
	const { courseId, lessonId } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoursePlayerContent, {
		courseId,
		initialLessonId: lessonId
	});
}
function CoursePlayerContent({ courseId, initialLessonId }) {
	const navigate = useNavigate();
	const { data: allCourses, isLoading: loadingCourses } = useQuery({
		queryKey: ["all-courses"],
		queryFn: fetchCourses
	});
	(0, import_react.useEffect)(() => {
		if (!courseId) {
			const lastCourseId = localStorage.getItem("codebreakdowns_last_course");
			if (lastCourseId) navigate({
				to: "/courses",
				search: { courseId: lastCourseId },
				replace: true
			});
			else if (allCourses && allCourses.length > 0) navigate({
				to: "/courses",
				search: { courseId: allCourses[0].id },
				replace: true
			});
		} else localStorage.setItem("codebreakdowns_last_course", courseId);
	}, [
		courseId,
		allCourses,
		navigate
	]);
	if (!courseId) {
		if (loadingCourses) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Loading courses..."
			})]
		});
		if (!allCourses || allCourses.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-12 w-12 text-muted-foreground mb-4 opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "No Courses Available"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2 max-w-sm text-sm",
					children: "Our course catalog is currently being updated. Please check back soon or browse our products!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Browse Bundles"
					})
				})
			]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Opening curriculum..."
			})]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoursePlayer, {
		courseId,
		initialLessonId
	});
}
function CoursePlayer({ courseId, initialLessonId }) {
	const { data: course, isLoading, error } = useQuery({
		queryKey: ["course-play", courseId],
		queryFn: () => fetchCoursePlayData(courseId),
		retry: 1,
		refetchOnWindowFocus: false
	});
	const { data: myCourses } = useQuery({
		queryKey: ["my-courses"],
		queryFn: fetchMyCourses
	});
	const { data: allCourses } = useQuery({
		queryKey: ["all-courses"],
		queryFn: fetchCourses
	});
	const navigate = useNavigate();
	const [lessonId, setLessonId] = (0, import_react.useState)(initialLessonId || null);
	(0, import_react.useEffect)(() => {
		if (initialLessonId) setLessonId(initialLessonId);
	}, [initialLessonId]);
	(0, import_react.useEffect)(() => {
		if (course && !lessonId) {
			const savedLessonId = initialLessonId || localStorage.getItem(`codebreakdowns_last_lesson_${course.id}`);
			let lessonExists = false;
			if (savedLessonId) {
				for (const chapter of course.chapters) if (chapter.lessons.some((l) => l.id === savedLessonId)) {
					lessonExists = true;
					break;
				}
			}
			if (lessonExists && savedLessonId) setLessonId(savedLessonId);
			else if (course.chapters.length > 0 && course.chapters[0].lessons.length > 0) setLessonId(course.chapters[0].lessons[0].id);
		}
	}, [
		course,
		lessonId,
		initialLessonId
	]);
	(0, import_react.useEffect)(() => {
		if (course && lessonId) localStorage.setItem(`codebreakdowns_last_lesson_${course.id}`, lessonId);
	}, [course, lessonId]);
	const currentLesson = (0, import_react.useMemo)(() => {
		if (!lessonId || !course) return null;
		for (const chapter of course.chapters) {
			const found = chapter.lessons.find((l) => l.id === lessonId);
			if (found) return found;
		}
		return null;
	}, [course, lessonId]);
	const previewLessonId = (0, import_react.useMemo)(() => {
		if (!course) return void 0;
		for (const ch of course.chapters) {
			const prev = ch.lessons.find((l) => l.isPreview);
			if (prev) return prev.id;
		}
	}, [course]);
	const defaultOpenChapter = (0, import_react.useMemo)(() => {
		if (!course) return void 0;
		if (!lessonId) return course.chapters[0]?.id;
		for (const chapter of course.chapters) if (chapter.lessons.some((l) => l.id === lessonId)) return chapter.id;
		return course.chapters[0]?.id;
	}, [course, lessonId]);
	const progress = (0, import_react.useMemo)(() => {
		if (!course) return {
			completed: 0,
			total: 0
		};
		let completed = 0;
		let total = 0;
		for (const chapter of course.chapters) for (const lesson of chapter.lessons) {
			total++;
			if (lesson.progress && lesson.progress.length > 0 && lesson.progress[0].isCompleted) completed++;
		}
		return {
			completed,
			total
		};
	}, [course]);
	const pct = progress.total ? Math.round(progress.completed / progress.total * 100) : 0;
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 h-screen flex gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[320px] h-full bg-card animate-pulse rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-full bg-card animate-pulse rounded-2xl" })]
	});
	if (error || !course) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-12 w-12 text-destructive mb-4 opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "Course Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 max-w-sm text-sm",
				children: "We couldn't load this course. It may be unpublished or does not exist yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "Browse All Courses"
				})
			})
		]
	});
	const courseList = allCourses && allCourses.length > 0 ? allCourses : myCourses || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8 py-4 sm:py-6 min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-[320px_1fr_1fr] xl:grid-cols-[320px_minmax(350px,1.2fr)_minmax(500px,1.5fr)] gap-6 lg:h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 order-2 lg:order-1 lg:h-full lg:overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-4 bg-card border-border shrink-0 rounded-2xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								asChild: true,
								className: "h-6 w-6 -ml-1 hover:bg-foreground/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/overview",
									search: { courseId },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
								children: "Current Course"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: course.id,
							onValueChange: (val) => {
								navigate({
									to: "/courses",
									search: { courseId: val }
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-full bg-background border-border shadow-sm h-10 rounded-xl text-sm font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: course.title })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								className: "rounded-xl",
								children: courseList.map((c) => {
									const isEnrolled = myCourses?.some((m) => m.id === c.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: c.id,
										className: "rounded-lg text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between w-full gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.title }), isEnrolled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20",
												children: "Enrolled"
											})]
										})
									}, c.id);
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 bg-card border-border shrink-0 rounded-2xl shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
									children: "Course Progress"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xl font-bold leading-none",
									children: [pct, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 w-full bg-background rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-primary transition-all duration-700 ease-out rounded-full",
									style: { width: `${pct}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 text-xs text-muted-foreground font-medium flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									progress.completed,
									" / ",
									progress.total,
									" Lessons Completed"
								] }), !course.isPurchased && !course.isFree && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-semibold",
									children: "Preview Mode"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "bg-card border-border overflow-hidden rounded-2xl flex flex-col shadow-sm max-h-[380px] lg:max-h-none lg:flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
								type: "multiple",
								defaultValue: defaultOpenChapter ? [defaultOpenChapter] : [],
								className: "w-full",
								children: course.chapters.map((chapter) => {
									const isChapterLocked = course.enforceLinearProgress && chapter.states && chapter.states.length > 0 && chapter.states[0].isUnlocked === false;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: chapter.id,
										className: "border-b border-border last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "px-5 py-4 hover:no-underline hover:bg-foreground/5 transition-colors group",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full pr-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-semibold text-sm group-hover:text-foreground text-foreground/90 transition-colors text-left flex items-center gap-1.5",
													children: [chapter.title, isChapterLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-muted-foreground" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-muted-foreground font-medium",
													children: chapter.lessons.length
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "pb-3 px-3 pt-1",
											children: chapter.lessons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-muted-foreground italic px-2 py-2",
												children: "No lessons in this module yet."
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-1",
												children: chapter.lessons.map((l) => {
													const isCompleted = l.progress && l.progress.length > 0 && l.progress[0].isCompleted;
													const isBookmarked = l.progress && l.progress.length > 0 && l.progress[0].isBookmarked;
													const isSelected = lessonId === l.id;
													const isLessonLocked = l.isLocked || !course.isPurchased && !course.isFree && !l.isPreview;
													let status = "todo";
													if (isCompleted) status = "completed";
													else if (isSelected) status = "current";
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => {
															if (isChapterLocked) {
																toast.info("Please complete previous modules to unlock this chapter.");
																return;
															}
															setLessonId(l.id);
														},
														className: cn("w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 group relative", isSelected ? "bg-primary/10 border border-primary/20" : "hover:bg-foreground/5 border border-transparent", isChapterLocked && "opacity-60 cursor-not-allowed"),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-0.5 shrink-0",
															children: status === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }) : isChapterLocked || isLessonLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-muted-foreground/50" }) : status === "current" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-4 w-4 rounded-full border-2 border-primary flex items-center justify-center",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" })
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: cn("text-sm font-medium truncate transition-colors", isSelected ? "text-primary font-bold" : "text-foreground/90 group-hover:text-foreground"),
																	children: l.title
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-1.5 shrink-0",
																	children: [l.isPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
																		children: "Preview"
																	}), isBookmarked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5 text-amber-500 fill-amber-500" })]
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2 mt-1 text-[11px] font-medium text-muted-foreground",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
																	Math.floor(l.durationSeconds / 60),
																	"m ",
																	l.durationSeconds % 60,
																	"s"
																] }), l.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "opacity-50",
																	children: "•"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-success",
																	children: "Problem"
																})] })]
															})]
														})]
													}, l.id);
												})
											})
										})]
									}, chapter.id);
								})
							})
						})
					})
				]
			}), currentLesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, {
				lesson: currentLesson,
				courseId,
				courseTitle: course.title,
				courseIsPurchased: course.isPurchased || course.isFree,
				previewLessonId,
				onSelectLesson: setLessonId,
				enforceLinearProgress: course.enforceLinearProgress
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 lg:order-2 lg:col-span-2 h-full flex flex-col justify-center items-center py-6 lg:py-0 lg:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col items-center justify-center p-12 text-center bg-card border-border rounded-2xl max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Select a lesson to begin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-2",
							children: "Choose a module from the left sidebar to start exploring."
						})
					]
				})
			})]
		})
	});
}
function LockedLessonCard({ lessonTitle, courseTitle, previewLessonId, onSelectPreview }) {
	const { isAuthenticated } = useAuthStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-video w-full rounded-2xl bg-gradient-to-br from-card via-card/95 to-primary/10 flex flex-col items-center justify-center text-center p-6 sm:p-8 border border-border/80 shadow-inner overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center max-w-md w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary border border-primary/30 shadow-md mb-4 animate-in fade-in zoom-in duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm mb-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: courseTitle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-40",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-bold",
								children: "Premium Lesson"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg sm:text-xl font-bold tracking-tight text-foreground line-clamp-1 mb-2",
						children: lessonTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6",
						children: "This lesson is locked. Enroll in the course or bundle to unlock full video breakdowns, multi-language solutions, and interview playbooks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-3 w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "default",
							className: "rounded-xl px-5 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), " Unlock Course"]
							})
						}), !isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "default",
							className: "rounded-xl px-4 text-xs font-medium",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: "Already own it? Sign In"
							})
						}) : previewLessonId && onSelectPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "default",
							onClick: () => onSelectPreview(previewLessonId),
							className: "rounded-xl px-4 text-xs text-muted-foreground hover:text-foreground",
							children: "Watch Free Sample Lesson →"
						})]
					})
				]
			})
		]
	});
}
var formatTime = (totalSeconds) => {
	const m = Math.floor(totalSeconds / 60);
	const s = Math.floor(totalSeconds % 60);
	return `${m}:${s < 10 ? "0" : ""}${s}`;
};
function Workspace({ lesson, courseId, courseTitle, courseIsPurchased, previewLessonId, onSelectLesson, enforceLinearProgress }) {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthStore();
	const [completeLoading, setCompleteLoading] = (0, import_react.useState)(false);
	const isBookmarked = lesson.progress?.[0]?.isBookmarked || false;
	const isCompleted = lesson.progress?.[0]?.isCompleted || false;
	const initialTimestamp = lesson.progress?.[0]?.highestTimestampSecs || 0;
	const [playerMaxWatched, setPlayerMaxWatched] = (0, import_react.useState)(() => {
		try {
			const cached = localStorage.getItem(`cb_video_pos_${lesson.id}`);
			if (cached) {
				const val = parseFloat(cached);
				if (!isNaN(val)) return Math.max(val, initialTimestamp);
			}
		} catch {}
		return initialTimestamp;
	});
	(0, import_react.useEffect)(() => {
		let startVal = initialTimestamp;
		try {
			const cached = localStorage.getItem(`cb_video_pos_${lesson.id}`);
			if (cached) {
				const val = parseFloat(cached);
				if (!isNaN(val)) startVal = Math.max(val, initialTimestamp);
			}
		} catch {}
		setPlayerMaxWatched(startVal);
	}, [lesson.id, initialTimestamp]);
	const isLocked = lesson.isLocked || !courseIsPurchased && !lesson.isPreview;
	const explanationEnd = lesson.explanationEndSeconds;
	const hasWatchedExplanation = !(lesson.isProblem && typeof explanationEnd === "number" && explanationEnd > 0) || isCompleted || playerMaxWatched >= explanationEnd;
	const bookmarkMutation = useMutation({
		mutationFn: (newVal) => toggleBookmarkApi(lesson.id, newVal),
		onMutate: async (newVal) => {
			await queryClient.cancelQueries({ queryKey: ["course-play", courseId] });
			const previousCourse = queryClient.getQueryData(["course-play", courseId]);
			queryClient.setQueryData(["course-play", courseId], (old) => {
				if (!old) return old;
				const newChapters = old.chapters.map((ch) => ({
					...ch,
					lessons: ch.lessons.map((l) => {
						if (l.id === lesson.id) {
							const prog = l.progress ? [...l.progress] : [{}];
							prog[0] = {
								...prog[0],
								isBookmarked: newVal
							};
							return {
								...l,
								progress: prog
							};
						}
						return l;
					})
				}));
				return {
					...old,
					chapters: newChapters
				};
			});
			return { previousCourse };
		},
		onError: (err, newVal, context) => {
			if (context?.previousCourse) queryClient.setQueryData(["course-play", courseId], context.previousCourse);
			toast.error("Failed to update bookmark");
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
			queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
		}
	});
	if (!lesson) return null;
	let meta = {
		text: lesson.description || "",
		prerequisites: ["Arrays", "Basic greedy intuition"],
		objectives: [
			"Track the minimum price seen so far",
			"Maintain a running maximum profit",
			"Solve in a single pass with O(1) space"
		],
		outcome: "You'll master the min-so-far pattern and understand how it generalises to more complex stock problems."
	};
	if (lesson.description) try {
		const parsed = JSON.parse(lesson.description);
		if (parsed.text !== void 0) meta = parsed;
	} catch (e) {
		meta.text = lesson.description;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 order-3 lg:order-2 lg:h-full lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-2 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 bg-card border-border rounded-2xl shadow-sm shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border",
								children: lesson.isProblem ? "Problem Breakdown" : "Concept Lesson"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground font-medium",
								children: [
									"Duration: ",
									Math.floor(lesson.durationSeconds / 60),
									" mins"
								]
							}),
							lesson.isPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",
								children: "Free Preview"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight text-foreground mb-3",
						children: lesson.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-line",
						children: meta.text || "Learn how to tackle this question using an optimal mental model, identifying the underlying pattern and writing clean code."
					})
				]
			}),
			meta.prerequisites && meta.prerequisites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 bg-card border-border rounded-2xl shadow-sm shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
					children: "Prerequisites"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: meta.prerequisites.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "bg-background border-border text-muted-foreground hover:bg-foreground/5 rounded-md shadow-sm font-medium",
						children: p
					}, p))
				})]
			}),
			meta.objectives && meta.objectives.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 bg-card border-border rounded-2xl shadow-sm shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
					children: "Learning Objectives"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: meta.objectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm text-foreground/90 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
					}, o))
				})]
			}),
			meta.outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 bg-card border-border rounded-2xl shadow-sm shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
					children: "Expected Outcome"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: meta.outcome
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 order-1 lg:order-3 lg:h-full lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-2 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden p-0 bg-background border-border relative z-10 shadow-lg shrink-0 rounded-2xl",
				children: isLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockedLessonCard, {
					lessonTitle: lesson.title,
					courseTitle,
					previewLessonId,
					onSelectPreview: onSelectLesson
				}) : !lesson.videoUrlOrId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video w-full rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 ml-0.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold text-foreground",
							children: "Video Processing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-1 max-w-xs",
							children: [
								"The video stream for “",
								lesson.title,
								"” is being processed. Please check back shortly."
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BunnyPlayer, {
					lessonId: lesson.id,
					videoUrlOrId: lesson.videoUrlOrId,
					isProblem: lesson.isProblem,
					explanationEndSeconds: lesson.explanationEndSeconds,
					initialTimestamp,
					isAlreadyCompleted: isCompleted,
					onProgress: (_curr, max) => {
						setPlayerMaxWatched((prev) => Math.max(prev, max));
					},
					onLessonComplete: () => {
						queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
						queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 w-full bg-card border border-border p-3 rounded-xl shadow-sm shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: isBookmarked ? "default" : "outline",
						size: "sm",
						className: cn("gap-2 h-9 rounded-lg font-medium shadow-sm transition-all duration-200", isBookmarked ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-500" : "hover:bg-foreground/5 text-muted-foreground hover:text-foreground"),
						onClick: () => {
							if (!isAuthenticated) {
								toast.info("Please sign in to bookmark lessons and save your progress.", { action: {
									label: "Sign In",
									onClick: () => navigate({ to: "/login" })
								} });
								return;
							}
							const nextVal = !isBookmarked;
							bookmarkMutation.mutate(nextVal);
							toast.success(nextVal ? "Lesson bookmarked!" : "Bookmark removed");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("h-4 w-4", isBookmarked && "fill-current") }), isBookmarked ? "Bookmarked" : "Bookmark"]
					}),
					lesson.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-2 h-9 rounded-lg font-medium shadow-sm hover:bg-foreground/5 text-muted-foreground hover:text-foreground",
						onClick: () => {
							if (lesson.problemUrl) window.open(lesson.problemUrl, "_blank");
							else toast.info("LeetCode link coming soon");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Solve on LeetCode"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
					isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						className: "gap-2 h-9 rounded-lg font-bold shadow-sm bg-success/15 text-success hover:bg-success/20 cursor-default",
						disabled: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }), " Completed"]
					}) : isLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "gap-2 h-9 rounded-lg font-semibold shadow-sm opacity-60 cursor-not-allowed",
						disabled: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " Locked"]
					}) : !hasWatchedExplanation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "gap-2 h-9 rounded-lg font-medium shadow-sm opacity-70 cursor-not-allowed bg-muted/40 border-dashed text-muted-foreground select-none",
						disabled: true,
						title: `Watch explanation up to ${formatTime(explanationEnd)} to complete`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Watch to Complete (",
							formatTime(Math.min(playerMaxWatched, explanationEnd)),
							" / ",
							formatTime(explanationEnd),
							")"
						] })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "gap-2 h-9 rounded-lg font-bold shadow-sm transition-all duration-200 animate-in fade-in",
						onClick: async () => {
							if (!isAuthenticated) {
								toast.info("Please sign in to track completed lessons.", { action: {
									label: "Sign In",
									onClick: () => navigate({ to: "/login" })
								} });
								return;
							}
							setCompleteLoading(true);
							try {
								if (playerMaxWatched > 0) await recordHeartbeat(lesson.id, Math.floor(playerMaxWatched));
								const res = await markLessonCompletedApi(lesson.id);
								if (res.success) {
									toast.success("Lesson marked as complete! 🎉");
									queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
									queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
								} else toast.error(res.error || "Could not complete lesson");
							} catch (err) {
								toast.error(err?.message || "Failed to mark lesson complete");
							} finally {
								setCompleteLoading(false);
							}
						},
						disabled: completeLoading,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
							" ",
							completeLoading ? "Saving..." : "Mark as Complete"
						]
					})
				]
			}),
			lesson.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 bg-card border-border rounded-2xl shadow-sm mt-2 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
					children: "Hints"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground italic",
					children: "No hints available for this problem yet."
				})]
			})
		]
	})] });
}
//#endregion
export { CoursePlayerPage as component };
