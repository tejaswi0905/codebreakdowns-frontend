import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Lock, G as Circle, q as CircleCheck, y as Play } from "../_libs/lucide-react.mjs";
import { o as fetchDashboardStats, r as fetchCoursePlayData } from "./api-BUiRiYXp.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./overview-DbF4Z_LC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-Dh4BUb45.js
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
			className: "text-muted-foreground mt-2",
			children: "Loading roadmap..."
		})]
	});
	const mockChapters = [
		{
			id: "c1",
			title: "Arrays",
			isCompleted: true
		},
		{
			id: "c2",
			title: "Strings",
			isCompleted: true
		},
		{
			id: "c3",
			title: "Hashing",
			isCompleted: true
		},
		{
			id: "c4",
			title: "Linked Lists",
			isCompleted: true
		},
		{
			id: "c5",
			title: "Stacks",
			isCompleted: true
		},
		{
			id: "c6",
			title: "Queues",
			isCompleted: true
		},
		{
			id: "c7",
			title: "Binary Search",
			isCompleted: true
		},
		{
			id: "c8",
			title: "Trees",
			isCompleted: false
		},
		{
			id: "c9",
			title: "BST",
			isCompleted: false
		},
		{
			id: "c10",
			title: "Heap",
			isCompleted: false
		},
		{
			id: "c11",
			title: "Graphs",
			isCompleted: false
		},
		{
			id: "c12",
			title: "Dynamic Programming",
			isCompleted: false
		}
	];
	const courseTitle = realCourse?.title || "Blind 150";
	let chapters = realCourse?.chapters || [];
	let isUsingMock = false;
	if (!chapters || chapters.length === 0) {
		chapters = mockChapters;
		isUsingMock = true;
	}
	let totalProblems = 0;
	let solvedProblems = 0;
	if (isUsingMock) {
		totalProblems = 150;
		solvedProblems = 63;
	} else chapters.forEach((chapter) => {
		chapter.lessons?.forEach((lesson) => {
			if (lesson.isProblem) {
				totalProblems++;
				if (lesson.progress?.[0]?.isCompleted) solvedProblems++;
			}
		});
	});
	if (totalProblems === 0) totalProblems = 1;
	const remainingProblems = totalProblems - solvedProblems;
	const progressPercentage = Math.round(solvedProblems / totalProblems * 100);
	let currentModuleTitle = "Introduction";
	let currentTopicTitle = "Getting Started";
	if (isUsingMock) {
		const firstIncomplete = mockChapters.find((c) => !c.isCompleted);
		currentModuleTitle = firstIncomplete ? firstIncomplete.title : mockChapters[0].title;
		currentTopicTitle = "Binary Search Tree";
	} else for (const chapter of chapters) {
		let isChapterComplete = true;
		for (const lesson of chapter.lessons || []) if (!lesson.progress?.[0]?.isCompleted) {
			isChapterComplete = false;
			currentModuleTitle = chapter.title;
			currentTopicTitle = lesson.title;
			break;
		}
		if (!isChapterComplete) break;
	}
	const radius = 90;
	const strokeWidth = 12;
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - progressPercentage / 100 * circumference;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-[85vh] text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-8 h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4 flex flex-col gap-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-card border-border p-8 flex flex-col items-center shadow-2xl rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-center w-[220px] h-[220px] mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								height: radius * 2,
								width: radius * 2,
								className: "transform -rotate-90 drop-shadow-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									stroke: "rgba(255,255,255,0.05)",
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
										children: "Current Course"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										children: courseTitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center border-b border-border pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Current Module"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										children: currentModuleTitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Current Topic"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-right",
										children: currentTopicTitle
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/25 transition-all",
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "bg-card border-border p-5 flex flex-col rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-success mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold text-foreground",
									children: solvedProblems
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Problems Solved"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "bg-card border-border p-5 flex flex-col rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-blue-400 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "8",
											y1: "6",
											x2: "21",
											y2: "6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "8",
											y1: "12",
											x2: "21",
											y2: "12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "8",
											y1: "18",
											x2: "21",
											y2: "18"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "3",
											y1: "6",
											x2: "3.01",
											y2: "6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "3",
											y1: "12",
											x2: "3.01",
											y2: "12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "3",
											y1: "18",
											x2: "3.01",
											y2: "18"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold text-foreground",
									children: remainingProblems
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Problems Remaining"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "bg-card border-border p-5 flex flex-col rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-orange-400 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "12",
										r: "10"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "12 6 12 12 16 14" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold text-foreground",
									children: statsData?.metrics ? `${statsData.metrics.hoursLearned}h` : isUsingMock ? "48h" : "0h"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Hours Learned"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-card border-border rounded-2xl flex-1 flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "DSA Roadmap"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Your interview prep learning path"
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full border border-muted-foreground" }), " Incomplete"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto p-2",
						children: chapters.map((chapter, index) => {
							let status = "incomplete";
							if (isUsingMock) {
								if (chapter.isCompleted) status = "done";
								else if (index > 0 && mockChapters[index - 1].isCompleted && !chapter.isCompleted) status = "current";
								else if (index === 0 && !chapter.isCompleted) status = "current";
							} else {
								let allComplete = true;
								chapter.lessons?.forEach((l) => {
									if (!l.progress?.[0]?.isCompleted) allComplete = false;
								});
								if (chapter.states?.[0]?.isCompleted || allComplete && chapter.lessons?.length > 0) status = "done";
								else if (chapter.states?.[0]?.isUnlocked === false) status = "locked";
								else if (chapter.title === currentModuleTitle) status = "current";
							}
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-center justify-between p-4 rounded-xl mb-1 transition-colors hover:bg-foreground/5 ${status === "current" ? "bg-primary/5" : ""} ${status === "locked" ? "opacity-60" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-6 h-6 text-success" }) : status === "locked" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-5 h-5 text-muted-foreground" }) : status === "current" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center justify-center w-6 h-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "w-6 h-6 text-primary absolute" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 bg-primary rounded-full" })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "w-6 h-6 text-muted-foreground opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `font-semibold flex items-center gap-1.5 ${status === "incomplete" || status === "locked" ? "text-muted-foreground" : "text-foreground"}`,
										children: [chapter.title, status === "locked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-muted-foreground" })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground font-mono tracking-wider opacity-50",
									children: (index + 1).toString().padStart(2, "0")
								})]
							}, chapter.id);
						})
					})]
				})]
			})]
		})
	});
}
//#endregion
export { CourseOverviewPage as component };
