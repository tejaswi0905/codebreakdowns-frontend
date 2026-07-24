import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronUp, C as ExternalLink, D as CirclePlay, E as Circle, L as Bookmark, M as ChevronDown, N as Check, O as CircleCheck, V as ArrowLeft, k as CircleAlert } from "../_libs/lucide-react.mjs";
import { l as markLessonComplete, o as fetchMyCourses, r as fetchCoursePlayData } from "./api-C0X-qdL4.mjs";
import { t as Route } from "./courses-BBjxE97d.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-w8xJ0Iul.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-C2uWjKJF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
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
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	"data-tsd-source": "/src/components/ui/accordion.tsx:25:3",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
			"data-tsd-source": "/src/components/ui/accordion.tsx:35:7"
		})]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		"data-tsd-source": "/src/components/ui/accordion.tsx:50:5",
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			"data-tsd-source": "/src/components/ui/scroll-area.tsx:15:5",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, { "data-tsd-source": "/src/components/ui/scroll-area.tsx:18:5" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, { "data-tsd-source": "/src/components/ui/scroll-area.tsx:19:5" })
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, {
		className: "relative flex-1 rounded-full bg-border",
		"data-tsd-source": "/src/components/ui/scroll-area.tsx:41:5"
	})
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
function BunnyPlayer({ lessonId, videoUrlOrId, isProblem, explanationEndSeconds }) {
	const iframeRef = (0, import_react.useRef)(null);
	const [maxWatched, setMaxWatched] = (0, import_react.useState)(0);
	const [isCompleted, setIsCompleted] = (0, import_react.useState)(false);
	const [lastSeekWarning, setLastSeekWarning] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setMaxWatched(0);
		setIsCompleted(false);
	}, [lessonId]);
	(0, import_react.useEffect)(() => {
		const handleMessage = (event) => {
			if (event.origin !== "https://iframe.mediadelivery.net") return;
			try {
				const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
				if (data.event === "timeupdate") {
					const currentTime = data.currentTime || data.time || 0;
					if (currentTime > maxWatched) setMaxWatched(currentTime);
					if (isProblem && !isCompleted && explanationEndSeconds && currentTime >= explanationEndSeconds) {
						setIsCompleted(true);
						markLessonComplete(lessonId).then(() => {
							toast.success("Explanation complete! Time to tackle the problem.");
						});
						iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ method: "pause" }), "*");
					}
				}
				if (data.event === "seek") {
					const seekToTime = data.time || data.currentTime || 0;
					if (isProblem && seekToTime > maxWatched + 2) {
						iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
							method: "setCurrentTime",
							value: maxWatched
						}), "*");
						const now = Date.now();
						if (now - lastSeekWarning > 3e3) {
							toast.info("Fast-forwarding is disabled for problem explanations. Please watch the theory first.");
							setLastSeekWarning(now);
						}
					}
				}
			} catch (e) {}
		};
		window.addEventListener("message", handleMessage);
		return () => window.removeEventListener("message", handleMessage);
	}, [
		lessonId,
		maxWatched,
		isProblem,
		explanationEndSeconds,
		isCompleted,
		lastSeekWarning
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl",
		"data-tsd-source": "/src/components/BunnyPlayer.tsx:79:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			ref: iframeRef,
			src: videoUrlOrId.replace("autoplay=true", "autoplay=false"),
			className: "w-full h-full border-0 absolute inset-0",
			allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",
			allowFullScreen: true,
			"data-tsd-source": "/src/components/BunnyPlayer.tsx:80:7"
		})
	});
}
function CoursePlayerPage() {
	const { courseId } = Route.useSearch();
	useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
		"data-tsd-source": "/src/routes/courses.tsx:63:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoursePlayerContent, {
			courseId,
			"data-tsd-source": "/src/routes/courses.tsx:64:7"
		})
	});
}
function CoursePlayerContent({ courseId }) {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!courseId) {
			const lastCourseId = localStorage.getItem("codebreakdowns_last_course");
			if (lastCourseId) navigate({
				to: "/courses",
				search: { courseId: lastCourseId },
				replace: true
			});
			else navigate({
				to: "/dashboard",
				replace: true
			});
		} else localStorage.setItem("codebreakdowns_last_course", courseId);
	}, [courseId, navigate]);
	if (!courseId) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		"data-tsd-source": "/src/routes/courses.tsx:88:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4",
			"data-tsd-source": "/src/routes/courses.tsx:89:9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			"data-tsd-source": "/src/routes/courses.tsx:90:9",
			children: "Loading course..."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoursePlayer, {
		courseId,
		"data-tsd-source": "/src/routes/courses.tsx:95:10"
	});
}
function CoursePlayer({ courseId }) {
	const { data: course, isLoading, error } = useQuery({
		queryKey: ["course-play", courseId],
		queryFn: () => fetchCoursePlayData(courseId),
		retry: 1
	});
	const { data: myCourses } = useQuery({
		queryKey: ["my-courses"],
		queryFn: fetchMyCourses
	});
	const navigate = useNavigate();
	const [lessonId, setLessonId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (course && !lessonId) {
			const savedLessonId = localStorage.getItem(`codebreakdowns_last_lesson_${course.id}`);
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
	}, [course, lessonId]);
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
		"data-tsd-source": "/src/routes/courses.tsx:183:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-[300px] h-full bg-white/5 animate-pulse rounded-xl",
			"data-tsd-source": "/src/routes/courses.tsx:184:9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 h-full bg-white/5 animate-pulse rounded-xl",
			"data-tsd-source": "/src/routes/courses.tsx:185:9"
		})]
	});
	if (error || !course) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		"data-tsd-source": "/src/routes/courses.tsx:192:7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
				className: "h-12 w-12 text-destructive mb-4 opacity-80",
				"data-tsd-source": "/src/routes/courses.tsx:193:9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				"data-tsd-source": "/src/routes/courses.tsx:194:9",
				children: "Access Denied"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 max-w-sm",
				"data-tsd-source": "/src/routes/courses.tsx:195:9",
				children: "We couldn't load this course. You either don't own it, or it doesn't exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				"data-tsd-source": "/src/routes/courses.tsx:198:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					"data-tsd-source": "/src/routes/courses.tsx:199:11",
					children: "Browse Courses"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 h-[calc(100vh-80px)] overflow-hidden",
		"data-tsd-source": "/src/routes/courses.tsx:206:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[minmax(0,22fr)_minmax(0,33fr)_minmax(0,45fr)] h-full",
			"data-tsd-source": "/src/routes/courses.tsx:208:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4 h-full flex flex-col",
					"data-tsd-source": "/src/routes/courses.tsx:211:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 bg-[#0a0a0a] border-white/5 shrink-0",
							"data-tsd-source": "/src/routes/courses.tsx:212:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								"data-tsd-source": "/src/routes/courses.tsx:213:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									asChild: true,
									className: "h-6 w-6",
									"data-tsd-source": "/src/routes/courses.tsx:214:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/dashboard",
										"data-tsd-source": "/src/routes/courses.tsx:215:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
											className: "h-3 w-3",
											"data-tsd-source": "/src/routes/courses.tsx:215:39"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
									"data-tsd-source": "/src/routes/courses.tsx:217:15",
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
								"data-tsd-source": "/src/routes/courses.tsx:222:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-2 h-10 w-full bg-black/40 border-white/10 text-foreground",
									"data-tsd-source": "/src/routes/courses.tsx:228:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										"data-tsd-source": "/src/routes/courses.tsx:229:17",
										children: course.title
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/routes/courses.tsx:231:15",
									children: myCourses?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: c.id,
										"data-tsd-source": "/src/routes/courses.tsx:233:19",
										children: c.title
									}, c.id))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 bg-[#0a0a0a] border-white/5 shrink-0",
							"data-tsd-source": "/src/routes/courses.tsx:241:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between",
									"data-tsd-source": "/src/routes/courses.tsx:242:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
										"data-tsd-source": "/src/routes/courses.tsx:243:15",
										children: "Course Progress"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-lg font-semibold tracking-tight",
										"data-tsd-source": "/src/routes/courses.tsx:246:15",
										children: [pct, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted border border-white/5",
									"data-tsd-source": "/src/routes/courses.tsx:248:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary transition-all",
										style: { width: `${pct}%` },
										"data-tsd-source": "/src/routes/courses.tsx:249:15"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 text-xs text-muted-foreground",
									"data-tsd-source": "/src/routes/courses.tsx:254:13",
									children: [
										progress.completed,
										" / ",
										progress.total,
										" Lessons Completed"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "p-2 bg-[#0a0a0a] border-white/5 flex-1 min-h-0 overflow-hidden",
							"data-tsd-source": "/src/routes/courses.tsx:259:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
								className: "h-full pr-2",
								"data-tsd-source": "/src/routes/courses.tsx:260:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
									type: "single",
									collapsible: true,
									defaultValue: defaultOpenChapter,
									className: "w-full",
									"data-tsd-source": "/src/routes/courses.tsx:261:15",
									children: course.chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: chapter.id,
										className: "border-b border-border/60 last:border-0",
										"data-tsd-source": "/src/routes/courses.tsx:268:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "px-2 py-3 text-sm font-medium hover:no-underline",
											"data-tsd-source": "/src/routes/courses.tsx:273:21",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 text-left",
												"data-tsd-source": "/src/routes/courses.tsx:274:23",
												children: [chapter.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-normal text-muted-foreground ml-2",
													"data-tsd-source": "/src/routes/courses.tsx:276:25",
													children: chapter.lessons.length
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "pb-2",
											"data-tsd-source": "/src/routes/courses.tsx:281:21",
											children: chapter.lessons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "px-2 py-3 text-xs text-muted-foreground",
												"data-tsd-source": "/src/routes/courses.tsx:283:25",
												children: "Lessons coming soon."
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1",
												"data-tsd-source": "/src/routes/courses.tsx:287:25",
												children: chapter.lessons.map((l) => {
													const status = l.progress && l.progress.length > 0 && l.progress[0].isCompleted ? "completed" : lessonId === l.id ? "current" : "todo";
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														"data-tsd-source": "/src/routes/courses.tsx:292:31",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setLessonId(l.id),
															className: cn("group w-full rounded-md px-2 py-2 text-left transition-colors cursor-pointer", lessonId === l.id ? "bg-primary/10 text-foreground border border-primary/20" : "hover:bg-white/5 border border-transparent"),
															"data-tsd-source": "/src/routes/courses.tsx:293:33",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-start gap-2",
																"data-tsd-source": "/src/routes/courses.tsx:303:35",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, {
																	status,
																	"data-tsd-source": "/src/routes/courses.tsx:304:37"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "min-w-0 flex-1",
																	"data-tsd-source": "/src/routes/courses.tsx:305:37",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "truncate text-sm font-medium",
																		"data-tsd-source": "/src/routes/courses.tsx:306:39",
																		children: l.title
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground",
																		"data-tsd-source": "/src/routes/courses.tsx:309:39",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			"data-tsd-source": "/src/routes/courses.tsx:310:41",
																			children: [
																				Math.floor(l.durationSeconds / 60),
																				"m ",
																				l.durationSeconds % 60,
																				"s"
																			]
																		}), l.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			"data-tsd-source": "/src/routes/courses.tsx:313:45",
																			children: "·"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-purple-400",
																			"data-tsd-source": "/src/routes/courses.tsx:314:45",
																			children: "Problem"
																		})] })]
																	})]
																})]
															})
														})
													}, l.id);
												})
											})
										})]
									}, chapter.id))
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "space-y-4 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar pb-10",
					"data-tsd-source": "/src/routes/courses.tsx:335:9",
					children: currentLesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonInfo, {
						lesson: currentLesson,
						"data-tsd-source": "/src/routes/courses.tsx:336:28"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyLesson, { "data-tsd-source": "/src/routes/courses.tsx:336:68" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "space-y-4 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar pb-10",
					"data-tsd-source": "/src/routes/courses.tsx:340:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, {
						lesson: currentLesson,
						courseId,
						"data-tsd-source": "/src/routes/courses.tsx:341:11"
					})
				})
			]
		})
	});
}
function StatusIcon({ status }) {
	if (status === "completed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
		className: "mt-0.5 h-4 w-4 shrink-0 text-green-500",
		"data-tsd-source": "/src/routes/courses.tsx:351:12"
	});
	if (status === "current") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
		className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
		"data-tsd-source": "/src/routes/courses.tsx:353:12"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
		className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60",
		"data-tsd-source": "/src/routes/courses.tsx:355:5"
	});
}
function LessonInfo({ lesson }) {
	let meta = {
		text: lesson.description || "",
		prerequisites: [],
		objectives: [],
		outcome: ""
	};
	if (lesson.description) try {
		const parsed = JSON.parse(lesson.description);
		if (parsed.text !== void 0) meta = parsed;
	} catch (e) {}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 bg-[#0a0a0a] border-white/5",
			"data-tsd-source": "/src/routes/courses.tsx:373:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					"data-tsd-source": "/src/routes/courses.tsx:374:9",
					children: [lesson.isProblem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "bg-purple-500/10 text-purple-400 border-purple-500/20",
						"data-tsd-source": "/src/routes/courses.tsx:376:14",
						children: "Interactive Problem"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
						"data-tsd-source": "/src/routes/courses.tsx:380:14",
						children: "Video Lesson"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "font-normal bg-white/5 text-muted-foreground hover:bg-white/10",
						"data-tsd-source": "/src/routes/courses.tsx:385:11",
						children: [
							Math.floor(lesson.durationSeconds / 60),
							"m ",
							lesson.durationSeconds % 60,
							"s"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-2xl font-semibold tracking-tight",
					"data-tsd-source": "/src/routes/courses.tsx:389:9",
					children: lesson.title
				}),
				meta.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap",
					"data-tsd-source": "/src/routes/courses.tsx:393:11",
					children: meta.text
				})
			]
		}),
		meta.prerequisites && meta.prerequisites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
			title: "Prerequisites",
			"data-tsd-source": "/src/routes/courses.tsx:400:9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				"data-tsd-source": "/src/routes/courses.tsx:401:11",
				children: meta.prerequisites.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "font-normal bg-white/5 border border-white/10 text-foreground hover:bg-white/10",
					"data-tsd-source": "/src/routes/courses.tsx:403:15",
					children: p
				}, p))
			})
		}),
		meta.objectives && meta.objectives.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
			title: "Learning Objectives",
			"data-tsd-source": "/src/routes/courses.tsx:412:9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				"data-tsd-source": "/src/routes/courses.tsx:413:11",
				children: meta.objectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/courses.tsx:415:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
						"data-tsd-source": "/src/routes/courses.tsx:416:17"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-tsd-source": "/src/routes/courses.tsx:417:17",
						children: o
					})]
				}, o))
			})
		}),
		meta.outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
			title: "Expected Outcome",
			"data-tsd-source": "/src/routes/courses.tsx:425:9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				"data-tsd-source": "/src/routes/courses.tsx:426:11",
				children: meta.outcome
			})
		})
	] });
}
function InfoCard({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5 bg-[#0a0a0a] border-white/5",
		"data-tsd-source": "/src/routes/courses.tsx:437:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			"data-tsd-source": "/src/routes/courses.tsx:438:7",
			children: title
		}), children]
	});
}
function EmptyLesson() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex min-h-[400px] flex-col items-center justify-center p-10 text-center bg-[#0a0a0a] border-white/5 h-full",
		"data-tsd-source": "/src/routes/courses.tsx:448:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary",
				"data-tsd-source": "/src/routes/courses.tsx:449:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "h-6 w-6",
					"data-tsd-source": "/src/routes/courses.tsx:450:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-lg font-semibold",
				"data-tsd-source": "/src/routes/courses.tsx:452:7",
				children: "Pick a lesson to begin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/courses.tsx:453:7",
				children: "Expand a section on the left and select a lesson to see its details here."
			})
		]
	});
}
function Workspace({ lesson, courseId }) {
	const [notes, setNotes] = (0, import_react.useState)("");
	const queryClient = useQueryClient();
	if (!lesson) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "overflow-hidden p-0 bg-black border-white/5 relative z-10 shadow-xl shrink-0",
			"data-tsd-source": "/src/routes/courses.tsx:468:7",
			children: lesson.isLocked || !lesson.videoUrlOrId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video w-full bg-gradient-to-br from-black to-black/50",
				"data-tsd-source": "/src/routes/courses.tsx:470:11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center",
					"data-tsd-source": "/src/routes/courses.tsx:471:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-full bg-white/5 text-muted-foreground shadow-md backdrop-blur",
							"data-tsd-source": "/src/routes/courses.tsx:472:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
								className: "h-6 w-6",
								"data-tsd-source": "/src/routes/courses.tsx:473:18"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-foreground mt-4",
							"data-tsd-source": "/src/routes/courses.tsx:475:15",
							children: "Content Locked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground max-w-[250px] text-center",
							"data-tsd-source": "/src/routes/courses.tsx:476:15",
							children: "Purchase this course to unlock this lesson."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							variant: "default",
							"data-tsd-source": "/src/routes/courses.tsx:479:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								"data-tsd-source": "/src/routes/courses.tsx:480:18",
								children: "View Pricing"
							})
						})
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BunnyPlayer, {
				lessonId: lesson.id,
				videoUrlOrId: lesson.videoUrlOrId,
				isProblem: lesson.isProblem,
				explanationEndSeconds: lesson.explanationEndSeconds,
				"data-tsd-source": "/src/routes/courses.tsx:485:11"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 shrink-0",
			"data-tsd-source": "/src/routes/courses.tsx:494:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "gap-2 border-white/10 hover:bg-white/5 text-muted-foreground hover:text-foreground",
					onClick: () => toast.success("Lesson bookmarked"),
					disabled: !lesson,
					"data-tsd-source": "/src/routes/courses.tsx:495:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: "h-4 w-4",
						"data-tsd-source": "/src/routes/courses.tsx:502:11"
					}), " Bookmark"]
				}),
				lesson.isProblem && lesson.problemUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "gap-2 border-primary/20 text-primary hover:bg-primary/10",
					onClick: () => {
						window.open(lesson.problemUrl, "_blank");
					},
					disabled: !lesson,
					"data-tsd-source": "/src/routes/courses.tsx:505:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						className: "h-4 w-4",
						"data-tsd-source": "/src/routes/courses.tsx:514:13"
					}), " Solve on LeetCode"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					className: "ml-auto gap-2 text-primary-foreground bg-primary/90 hover:bg-primary shadow-[0_0_15px_rgba(var(--color-primary),0.3)]",
					onClick: () => {
						import("./api-C0X-qdL4.mjs").then((n) => n.n).then((n) => n.t).then(({ markLessonComplete }) => {
							markLessonComplete(lesson.id).then(() => {
								toast.success("Marked as complete");
								queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
							});
						});
					},
					disabled: !lesson || lesson.isLocked,
					"data-tsd-source": "/src/routes/courses.tsx:517:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "h-4 w-4",
						"data-tsd-source": "/src/routes/courses.tsx:530:11"
					}), " Mark Complete"]
				})
			]
		}),
		lesson.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 bg-[#0a0a0a] border-white/5 flex-1 flex flex-col min-h-[300px]",
			"data-tsd-source": "/src/routes/courses.tsx:535:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between shrink-0",
				"data-tsd-source": "/src/routes/courses.tsx:536:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					"data-tsd-source": "/src/routes/courses.tsx:537:13",
					children: "Hints & Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] text-muted-foreground",
					"data-tsd-source": "/src/routes/courses.tsx:540:13",
					children: [notes.length, " chars"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: notes,
				onChange: (e) => setNotes(e.target.value),
				placeholder: "Jot down key ideas, edge cases, or your own explanation while you learn…",
				className: "flex-1 resize-none bg-black/40 border-white/10 text-sm",
				"data-tsd-source": "/src/routes/courses.tsx:544:11"
			})]
		})
	] });
}
//#endregion
export { CoursePlayerPage as component };
