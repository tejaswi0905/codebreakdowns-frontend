import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Circle, O as CircleCheck, u as Play } from "../_libs/lucide-react.mjs";
import { r as fetchCoursePlayData } from "./api-C0X-qdL4.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-w8xJ0Iul.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./overview-BNitAT-U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-j9wqbxsY.js
var import_jsx_runtime = require_jsx_runtime();
function CourseOverviewPage() {
	const { courseId } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
		"data-tsd-source": "/src/routes/overview.tsx:22:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseOverviewContent, {
			courseId,
			"data-tsd-source": "/src/routes/overview.tsx:23:7"
		})
	});
}
function CourseOverviewContent({ courseId }) {
	const navigate = useNavigate();
	const { data: realCourse, isLoading, error } = useQuery({
		queryKey: ["course-play", courseId],
		queryFn: () => fetchCoursePlayData(courseId),
		retry: 1
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] text-center px-4",
		"data-tsd-source": "/src/routes/overview.tsx:39:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4",
			"data-tsd-source": "/src/routes/overview.tsx:40:9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			"data-tsd-source": "/src/routes/overview.tsx:41:9",
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
		"data-tsd-source": "/src/routes/overview.tsx:134:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-8 h-full",
			"data-tsd-source": "/src/routes/overview.tsx:135:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4 flex flex-col gap-6",
				"data-tsd-source": "/src/routes/overview.tsx:138:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-[#111113] border-white/5 p-8 flex flex-col items-center shadow-2xl rounded-2xl",
					"data-tsd-source": "/src/routes/overview.tsx:139:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-center w-[220px] h-[220px] mb-8",
							"data-tsd-source": "/src/routes/overview.tsx:142:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								height: radius * 2,
								width: radius * 2,
								className: "transform -rotate-90 drop-shadow-2xl",
								"data-tsd-source": "/src/routes/overview.tsx:143:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									stroke: "rgba(255,255,255,0.05)",
									fill: "transparent",
									strokeWidth,
									r: normalizedRadius,
									cx: radius,
									cy: radius,
									"data-tsd-source": "/src/routes/overview.tsx:145:17"
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
									className: "transition-all duration-1000 ease-out",
									"data-tsd-source": "/src/routes/overview.tsx:154:17"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute flex flex-col items-center justify-center",
								"data-tsd-source": "/src/routes/overview.tsx:168:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold tracking-tight",
									"data-tsd-source": "/src/routes/overview.tsx:169:17",
									children: [progressPercentage, "%"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-widest text-muted-foreground uppercase mt-1",
									"data-tsd-source": "/src/routes/overview.tsx:170:17",
									children: "Complete"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full space-y-4 mb-8",
							"data-tsd-source": "/src/routes/overview.tsx:175:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center border-b border-white/5 pb-3",
									"data-tsd-source": "/src/routes/overview.tsx:176:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										"data-tsd-source": "/src/routes/overview.tsx:177:17",
										children: "Current Course"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/routes/overview.tsx:178:17",
										children: courseTitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center border-b border-white/5 pb-3",
									"data-tsd-source": "/src/routes/overview.tsx:180:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										"data-tsd-source": "/src/routes/overview.tsx:181:17",
										children: "Current Module"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/routes/overview.tsx:182:17",
										children: currentModuleTitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pb-1",
									"data-tsd-source": "/src/routes/overview.tsx:184:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										"data-tsd-source": "/src/routes/overview.tsx:185:17",
										children: "Current Topic"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-right",
										"data-tsd-source": "/src/routes/overview.tsx:186:17",
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
							"data-tsd-source": "/src/routes/overview.tsx:190:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "w-5 h-5 mr-2",
								fill: "currentColor",
								"data-tsd-source": "/src/routes/overview.tsx:194:15"
							}), "Continue Learning"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-8 flex flex-col gap-6",
				"data-tsd-source": "/src/routes/overview.tsx:201:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					"data-tsd-source": "/src/routes/overview.tsx:204:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "bg-[#111113] border-white/5 p-5 flex flex-col rounded-2xl",
							"data-tsd-source": "/src/routes/overview.tsx:205:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-success mb-2",
								"data-tsd-source": "/src/routes/overview.tsx:206:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "w-4 h-4",
									"data-tsd-source": "/src/routes/overview.tsx:207:17"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold text-foreground",
									"data-tsd-source": "/src/routes/overview.tsx:208:17",
									children: solvedProblems
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/overview.tsx:210:15",
								children: "Problems Solved"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "bg-[#111113] border-white/5 p-5 flex flex-col rounded-2xl",
							"data-tsd-source": "/src/routes/overview.tsx:213:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-blue-400 mb-2",
								"data-tsd-source": "/src/routes/overview.tsx:214:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"data-tsd-source": "/src/routes/overview.tsx:215:17",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "8",
											y1: "6",
											x2: "21",
											y2: "6",
											"data-tsd-source": "/src/routes/overview.tsx:215:160"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "8",
											y1: "12",
											x2: "21",
											y2: "12",
											"data-tsd-source": "/src/routes/overview.tsx:215:202"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "8",
											y1: "18",
											x2: "21",
											y2: "18",
											"data-tsd-source": "/src/routes/overview.tsx:215:246"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "3",
											y1: "6",
											x2: "3.01",
											y2: "6",
											"data-tsd-source": "/src/routes/overview.tsx:215:290"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "3",
											y1: "12",
											x2: "3.01",
											y2: "12",
											"data-tsd-source": "/src/routes/overview.tsx:215:334"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "3",
											y1: "18",
											x2: "3.01",
											y2: "18",
											"data-tsd-source": "/src/routes/overview.tsx:215:380"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold text-foreground",
									"data-tsd-source": "/src/routes/overview.tsx:216:17",
									children: remainingProblems
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/overview.tsx:218:15",
								children: "Problems Remaining"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "bg-[#111113] border-white/5 p-5 flex flex-col rounded-2xl",
							"data-tsd-source": "/src/routes/overview.tsx:221:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-orange-400 mb-2",
								"data-tsd-source": "/src/routes/overview.tsx:222:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"data-tsd-source": "/src/routes/overview.tsx:223:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "12",
										r: "10",
										"data-tsd-source": "/src/routes/overview.tsx:223:160"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
										points: "12 6 12 12 16 14",
										"data-tsd-source": "/src/routes/overview.tsx:223:200"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold text-foreground",
									"data-tsd-source": "/src/routes/overview.tsx:224:17",
									children: isUsingMock ? "48h" : "0h"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/overview.tsx:226:15",
								children: "Hours Learned"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-[#111113] border-white/5 rounded-2xl flex-1 flex flex-col",
					"data-tsd-source": "/src/routes/overview.tsx:231:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
						"data-tsd-source": "/src/routes/overview.tsx:232:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/overview.tsx:233:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								"data-tsd-source": "/src/routes/overview.tsx:234:17",
								children: "DSA Roadmap"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1",
								"data-tsd-source": "/src/routes/overview.tsx:235:17",
								children: "Your interview prep learning path"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-xs font-medium text-muted-foreground",
							"data-tsd-source": "/src/routes/overview.tsx:239:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									"data-tsd-source": "/src/routes/overview.tsx:240:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-2 h-2 rounded-full bg-success",
										"data-tsd-source": "/src/routes/overview.tsx:240:60"
									}), " Done"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									"data-tsd-source": "/src/routes/overview.tsx:241:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-2 h-2 rounded-full bg-primary",
										"data-tsd-source": "/src/routes/overview.tsx:241:60"
									}), " Current"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									"data-tsd-source": "/src/routes/overview.tsx:242:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-2 h-2 rounded-full border border-muted-foreground",
										"data-tsd-source": "/src/routes/overview.tsx:242:60"
									}), " Incomplete"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto p-2",
						"data-tsd-source": "/src/routes/overview.tsx:246:13",
						children: chapters.map((chapter, index) => {
							let status = "incomplete";
							if (isUsingMock) {
								if (chapter.isCompleted) status = "done";
								else if (index > 0 && mockChapters[index - 1].isCompleted && !chapter.isCompleted) status = "current";
								else if (index === 0 && !chapter.isCompleted) status = "current";
							} else {
								let allComplete = true;
								chapter.lessons?.forEach((l) => {
									if (l.progress?.[0]?.isCompleted) {} else allComplete = false;
								});
								if (allComplete && chapter.lessons?.length > 0) status = "done";
								else if (chapter.title === currentModuleTitle) status = "current";
							}
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-center justify-between p-4 rounded-xl mb-1 transition-colors hover:bg-white/[0.02] ${status === "current" ? "bg-primary/5" : ""}`,
								"data-tsd-source": "/src/routes/overview.tsx:274:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									"data-tsd-source": "/src/routes/overview.tsx:278:21",
									children: [status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "w-6 h-6 text-success",
										"data-tsd-source": "/src/routes/overview.tsx:280:25"
									}) : status === "current" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center justify-center w-6 h-6",
										"data-tsd-source": "/src/routes/overview.tsx:282:25",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
											className: "w-6 h-6 text-primary absolute",
											"data-tsd-source": "/src/routes/overview.tsx:283:27"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-3 h-3 bg-primary rounded-full",
											"data-tsd-source": "/src/routes/overview.tsx:284:27"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
										className: "w-6 h-6 text-muted-foreground opacity-50",
										"data-tsd-source": "/src/routes/overview.tsx:287:25"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-semibold ${status === "incomplete" ? "text-muted-foreground" : "text-foreground"}`,
										"data-tsd-source": "/src/routes/overview.tsx:290:23",
										children: chapter.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground font-mono tracking-wider opacity-50",
									"data-tsd-source": "/src/routes/overview.tsx:294:21",
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
