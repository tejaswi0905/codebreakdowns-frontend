import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Clock, N as Layers, O as Lock, X as CircleAlert, Y as CircleCheck, at as BookOpen, b as Play, lt as ArrowLeft, q as Circle, u as Sparkles } from "../_libs/lucide-react.mjs";
import { o as fetchDashboardStats, r as fetchCoursePlayData } from "./api-DgzOPn4j.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./overview-iSResiOj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-DR0DzkkB.js
var import_jsx_runtime = require_jsx_runtime();
function CourseOverviewPage() {
	const { courseId } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseOverviewContent, { courseId });
}
function CourseOverviewContent({ courseId }) {
	const navigate = useNavigate();
	const { data: realCourse, isLoading, error } = useQuery({
		queryKey: ["course-play", courseId],
		queryFn: () => fetchCoursePlayData(courseId),
		retry: 1
	});
	const { data: statsData } = useQuery({
		queryKey: ["dashboard-stats"],
		queryFn: fetchDashboardStats
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2 text-sm",
			children: "Loading course roadmap..."
		})]
	});
	if (error || !realCourse) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 min-h-[70vh] flex flex-col items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4 border border-destructive/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-8 w-8" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold tracking-tight text-foreground",
				children: "Course Roadmap Unavailable"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
				children: "We could not load the curriculum for this course. You may not be enrolled, or the course ID is invalid."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), " Back to Dashboard"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Browse Course Catalog"
					})
				})]
			})
		]
	});
	const chapters = realCourse.chapters || [];
	if (chapters.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 min-h-[70vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard",
				className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back to Dashboard"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "border border-border p-8 sm:p-14 text-center rounded-2xl shadow-sm bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 border border-primary/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-foreground sm:text-3xl",
					children: realCourse.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground mt-3 mb-4 border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-primary" }), " Curriculum in Preparation"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-lg mx-auto text-sm text-muted-foreground leading-relaxed",
					children: "The curriculum modules and lesson roadmaps for this course are currently being finalized. Once published, your lesson progression and interactive challenges will automatically appear here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							children: "Back to My Courses"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: "Explore Catalog"
						})
					})]
				})
			]
		})]
	});
	let totalLessons = 0;
	let completedLessons = 0;
	let totalProblems = 0;
	let solvedProblems = 0;
	chapters.forEach((chapter) => {
		(chapter.lessons || []).forEach((lesson) => {
			totalLessons++;
			const isCompleted = Boolean(lesson.progress?.[0]?.isCompleted);
			if (isCompleted) completedLessons++;
			if (lesson.isProblem) {
				totalProblems++;
				if (isCompleted) solvedProblems++;
			}
		});
	});
	const hasProblems = totalProblems > 0;
	const progressPercentage = totalLessons > 0 ? Math.round(completedLessons / totalLessons * 100) : 0;
	let currentModuleTitle = "All Modules Finished 🎉";
	let currentTopicTitle = "Course Completed";
	let foundActiveMilestone = false;
	for (const chapter of chapters) {
		for (const lesson of chapter.lessons || []) if (!Boolean(lesson.progress?.[0]?.isCompleted)) {
			currentModuleTitle = chapter.title;
			currentTopicTitle = lesson.title;
			foundActiveMilestone = true;
			break;
		}
		if (foundActiveMilestone) break;
	}
	const radius = 90;
	const strokeWidth = 12;
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - progressPercentage / 100 * circumference;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-[85vh] text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard",
				className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back to Dashboard"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold",
				children: [
					chapters.length,
					" ",
					chapters.length === 1 ? "Module" : "Modules",
					" • ",
					totalLessons,
					" Lessons"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-8 h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4 flex flex-col gap-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-card border-border p-8 flex flex-col items-center shadow-lg rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-center w-[220px] h-[220px] mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								height: radius * 2,
								width: radius * 2,
								className: "transform -rotate-90 drop-shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									stroke: "rgba(255,255,255,0.06)",
									fill: "transparent",
									strokeWidth,
									r: normalizedRadius,
									cx: radius,
									cy: radius
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									stroke: "hsl(var(--primary))",
									fill: "transparent",
									strokeWidth,
									strokeDasharray: circumference + " " + circumference,
									style: { strokeDashoffset },
									strokeLinecap: "round",
									r: normalizedRadius,
									cx: radius,
									cy: radius,
									className: "transition-all duration-1000 ease-out"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold tracking-tight",
									children: [progressPercentage, "%"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-widest text-muted-foreground uppercase mt-1",
									children: "Complete"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full space-y-4 mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center border-b border-border pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Course"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold truncate max-w-[180px] text-right",
										title: realCourse.title,
										children: realCourse.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center border-b border-border pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Current Module"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold truncate max-w-[180px] text-right",
										title: currentModuleTitle,
										children: currentModuleTitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Next Milestone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold truncate max-w-[180px] text-right text-primary",
										title: currentTopicTitle,
										children: currentTopicTitle
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full py-6 text-base font-bold rounded-xl shadow-md hover:shadow-primary/25 transition-all",
							onClick: () => navigate({
								to: "/courses",
								search: { courseId }
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "w-5 h-5 mr-2",
								fill: "currentColor"
							}), "Continue Learning"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-8 flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					children: [hasProblems ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-success mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-extrabold text-foreground",
								children: solvedProblems
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: "Problems Solved"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-primary mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-extrabold text-foreground",
								children: totalProblems - solvedProblems
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: "Problems Remaining"
						})]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-success mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-extrabold text-foreground",
								children: completedLessons
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: "Lessons Completed"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-primary mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-extrabold text-foreground",
								children: totalLessons - completedLessons
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: "Lessons Remaining"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-amber-500 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-extrabold text-foreground",
								children: statsData?.metrics ? `${statsData.metrics.hoursLearned}h` : "0h"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: "Platform Hours Learned"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-card border-border rounded-2xl flex-1 flex flex-col shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xl font-bold tracking-tight text-foreground",
							children: [realCourse.title, " Roadmap"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "Structured learning path & milestone checklist"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-xs font-medium text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-success" }), " Done"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-primary" }), " Current"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full border border-muted-foreground/60" }), " Incomplete"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto p-4 space-y-2",
						children: chapters.map((chapter, index) => {
							const chapterLessons = chapter.lessons || [];
							const allLessonsComplete = chapterLessons.length > 0 && chapterLessons.every((l) => Boolean(l.progress?.[0]?.isCompleted));
							const isExplicitlyLocked = chapter.states?.[0]?.isUnlocked === false;
							let status = "incomplete";
							if (isExplicitlyLocked) status = "locked";
							else if (chapter.states?.[0]?.isCompleted || allLessonsComplete) status = "done";
							else if (chapter.title === currentModuleTitle) status = "current";
							const completedInChapter = chapterLessons.filter((l) => Boolean(l.progress?.[0]?.isCompleted)).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => navigate({
									to: "/courses",
									search: { courseId }
								}),
								className: `flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer border ${status === "current" ? "bg-primary/5 border-primary/30 shadow-sm" : status === "done" ? "bg-muted/20 border-border/60 hover:bg-muted/40" : status === "locked" ? "opacity-60 border-border/40 cursor-not-allowed" : "border-border/40 hover:bg-muted/30"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-success shrink-0" }) : status === "locked" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-5 h-5 text-muted-foreground shrink-0" }) : status === "current" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center justify-center w-5 h-5 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "w-5 h-5 text-primary absolute animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 bg-primary rounded-full" })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "w-5 h-5 text-muted-foreground/40 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `text-sm font-semibold flex items-center gap-2 ${status === "incomplete" || status === "locked" ? "text-muted-foreground" : "text-foreground"}`,
										children: [chapter.title, status === "locked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-semibold bg-muted px-2 py-0.5 rounded text-muted-foreground",
											children: "Locked"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: [
											completedInChapter,
											" of ",
											chapterLessons.length,
											" lessons completed"
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground font-mono tracking-wider opacity-60",
									children: (index + 1).toString().padStart(2, "0")
								})]
							}, chapter.id);
						})
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { CourseOverviewPage as component };
