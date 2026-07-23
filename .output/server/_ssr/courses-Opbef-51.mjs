import { a as __toESM } from "../_runtime.mjs";
import { l as markLessonComplete, r as fetchCoursePlayData } from "./api-C0X-qdL4.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./courses-DmKfAVIM.mjs";
import { A as ArrowLeft, D as Bookmark, S as ChevronUp, T as Check, b as CircleCheck, m as ExternalLink, v as Circle, w as ChevronDown, x as CircleAlert, y as CirclePlay } from "../_libs/lucide-react.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-DUOgzUW5.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-Opbef-51.js
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
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			ref: iframeRef,
			src: videoUrlOrId,
			className: "w-full h-full border-0 absolute inset-0",
			allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",
			allowFullScreen: true
		})
	});
}
function CoursePlayerPage() {
	const { courseId } = Route.useSearch();
	useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoursePlayerContent, { courseId }) });
}
function CoursePlayerContent({ courseId }) {
	if (!courseId) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-12 w-12 text-muted-foreground mb-4 opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "No Course Selected"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 max-w-sm",
				children: "Please select a course from your dashboard to start learning."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					children: "Go to Dashboard"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoursePlayer, { courseId });
}
function CoursePlayer({ courseId }) {
	const { data: course, isLoading, error } = useQuery({
		queryKey: ["course-play", courseId],
		queryFn: () => fetchCoursePlayData(courseId),
		retry: 1
	});
	const [lessonId, setLessonId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (course && !lessonId) {
			if (course.chapters.length > 0 && course.chapters[0].lessons.length > 0) setLessonId(course.chapters[0].lessons[0].id);
		}
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[300px] h-full bg-white/5 animate-pulse rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-full bg-white/5 animate-pulse rounded-xl" })]
	});
	if (error || !course) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-12 w-12 text-destructive mb-4 opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "Access Denied"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 max-w-sm",
				children: "We couldn't load this course. You either don't own it, or it doesn't exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "Browse Courses"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 h-[calc(100vh-80px)] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[minmax(0,22fr)_minmax(0,33fr)_minmax(0,45fr)] h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4 h-full flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 bg-[#0a0a0a] border-white/5 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									asChild: true,
									className: "h-6 w-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/dashboard",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Current Course"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: course.id,
								disabled: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-2 h-10 w-full bg-black/40 border-white/10 opacity-100 text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: course.title })
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 bg-[#0a0a0a] border-white/5 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Course Progress"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-lg font-semibold tracking-tight",
										children: [pct, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted border border-white/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary transition-all",
										style: { width: `${pct}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 text-xs text-muted-foreground",
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
								className: "h-full pr-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
									type: "single",
									collapsible: true,
									defaultValue: defaultOpenChapter,
									className: "w-full",
									children: course.chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: chapter.id,
										className: "border-b border-border/60 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "px-2 py-3 text-sm font-medium hover:no-underline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 text-left",
												children: [chapter.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-normal text-muted-foreground ml-2",
													children: chapter.lessons.length
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "pb-2",
											children: chapter.lessons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "px-2 py-3 text-xs text-muted-foreground",
												children: "Lessons coming soon."
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1",
												children: chapter.lessons.map((l) => {
													const status = l.progress && l.progress.length > 0 && l.progress[0].isCompleted ? "completed" : lessonId === l.id ? "current" : "todo";
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setLessonId(l.id),
														className: cn("group w-full rounded-md px-2 py-2 text-left transition-colors", lessonId === l.id ? "bg-primary/10 text-foreground border border-primary/20" : "hover:bg-white/5 border border-transparent"),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "min-w-0 flex-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "truncate text-sm font-medium",
																	children: l.title
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
																		Math.floor(l.durationSeconds / 60),
																		"m ",
																		l.durationSeconds % 60,
																		"s"
																	] }), l.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-purple-400",
																		children: "Problem"
																	})] })]
																})]
															})]
														})
													}) }, l.id);
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
					children: currentLesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonInfo, { lesson: currentLesson }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyLesson, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "space-y-4 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar pb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, {
						lesson: currentLesson,
						courseId
					})
				})
			]
		})
	});
}
function StatusIcon({ status }) {
	if (status === "completed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-green-500" });
	if (status === "current") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" });
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
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [lesson.isProblem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "bg-purple-500/10 text-purple-400 border-purple-500/20",
						children: "Interactive Problem"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
						children: "Video Lesson"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "font-normal bg-white/5 text-muted-foreground hover:bg-white/10",
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
					children: lesson.title
				}),
				meta.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap",
					children: meta.text
				})
			]
		}),
		meta.prerequisites && meta.prerequisites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
			title: "Prerequisites",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: meta.prerequisites.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "font-normal bg-white/5 border border-white/10 text-foreground hover:bg-white/10",
					children: p
				}, p))
			})
		}),
		meta.objectives && meta.objectives.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
			title: "Learning Objectives",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: meta.objectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
				}, o))
			})
		}),
		meta.outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
			title: "Expected Outcome",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: meta.outcome
			})
		})
	] });
}
function InfoCard({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5 bg-[#0a0a0a] border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: title
		}), children]
	});
}
function EmptyLesson() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex min-h-[400px] flex-col items-center justify-center p-10 text-center bg-[#0a0a0a] border-white/5 h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-lg font-semibold",
				children: "Pick a lesson to begin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
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
			children: lesson.isLocked || !lesson.videoUrlOrId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video w-full bg-gradient-to-br from-black to-black/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-full bg-white/5 text-muted-foreground shadow-md backdrop-blur",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-foreground mt-4",
							children: "Content Locked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground max-w-[250px] text-center",
							children: "Purchase this course to unlock this lesson."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							variant: "default",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								children: "View Pricing"
							})
						})
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BunnyPlayer, {
				lessonId: lesson.id,
				videoUrlOrId: lesson.videoUrlOrId,
				isProblem: lesson.isProblem,
				explanationEndSeconds: lesson.explanationEndSeconds
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 shrink-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "gap-2 border-white/10 hover:bg-white/5 text-muted-foreground hover:text-foreground",
					onClick: () => toast.success("Lesson bookmarked"),
					disabled: !lesson,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" }), " Bookmark"]
				}),
				lesson.isProblem && lesson.problemUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "gap-2 border-primary/20 text-primary hover:bg-primary/10",
					onClick: () => {
						window.open(lesson.problemUrl, "_blank");
					},
					disabled: !lesson,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Solve on LeetCode"]
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Mark Complete"]
				})
			]
		}),
		lesson.isProblem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 bg-[#0a0a0a] border-white/5 flex-1 flex flex-col min-h-[300px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Hints & Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] text-muted-foreground",
					children: [notes.length, " chars"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: notes,
				onChange: (e) => setNotes(e.target.value),
				placeholder: "Jot down key ideas, edge cases, or your own explanation while you learn…",
				className: "flex-1 resize-none bg-black/40 border-white/10 text-sm"
			})]
		})
	] });
}
//#endregion
export { CoursePlayerPage as component };
