import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { a as CardTitle, i as CardHeader, n as CardDescription, r as CardFooter, t as Card } from "./card-CM_IL3Hu.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as CircleAlert, O as LockOpen, W as Clock, it as BookOpen, q as CircleCheck, rt as Bookmark, u as Sparkles, y as Play } from "../_libs/lucide-react.mjs";
import { i as fetchCourses, o as fetchDashboardStats, s as fetchMyCourses } from "./api-BUiRiYXp.mjs";
import { t as useAuthStore } from "./authStore-CaRoAg4M.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-eFTmDLL2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CYiF-pxP.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { user } = useAuthStore();
	const { data: myCourses, isLoading: loadingMy, error: myError } = useQuery({
		queryKey: ["my-courses"],
		queryFn: fetchMyCourses
	});
	const { data: allCourses, isLoading: loadingAll } = useQuery({
		queryKey: ["all-courses"],
		queryFn: fetchCourses
	});
	const { data: statsData } = useQuery({
		queryKey: ["dashboard-stats"],
		queryFn: fetchDashboardStats
	});
	if (loadingMy || loadingAll) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-64 bg-secondary rounded-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 bg-secondary rounded-2xl" }, i))
			})]
		})
	});
	if (myError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mx-auto h-12 w-12 text-destructive opacity-80 mb-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-foreground",
				children: "Could not load dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Please try again later."
			})
		]
	});
	const purchasedCourses = myCourses || [];
	const purchasedIds = new Set(purchasedCourses.map((c) => c.id));
	const freeCourses = (allCourses || []).filter((c) => c.isFree && !purchasedIds.has(c.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl font-bold tracking-tight text-foreground",
					children: ["Welcome back, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: user?.displayName || user?.username || "Learner"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base text-muted-foreground",
					children: "Ready to crush your next interview? Pick up where you left off."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					className: "rounded-full shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Browse Catalog"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-4 h-4 text-primary" }), " Enrolled Courses"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-foreground",
							children: purchasedCourses.length
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-success" }), " Lessons Completed"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-success",
							children: statsData?.metrics?.lessonsCompleted || 0
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-orange-400" }), " Hours Learned"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-3xl font-extrabold mt-2 text-orange-400",
							children: [statsData?.metrics?.hoursLearned || 0, "h"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "w-4 h-4 text-amber-500 fill-amber-500" }), " Bookmarked"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-amber-500",
							children: statsData?.metrics?.bookmarksCount || 0
						})]
					})
				]
			}),
			statsData?.resumePoint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "bg-gradient-to-r from-primary/15 via-primary/5 to-background border-primary/30 p-6 rounded-2xl mb-10 shadow-lg relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Continue Where You Left Off"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl md:text-2xl font-extrabold text-foreground",
							children: statsData.resumePoint.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: [
								"Jump right back into your video at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-foreground font-bold bg-foreground/10 px-1.5 py-0.5 rounded",
									children: [
										Math.floor(statsData.resumePoint.timestamp / 60),
										"m ",
										statsData.resumePoint.timestamp % 60,
										"s"
									]
								}),
								"."
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "rounded-xl font-bold shadow-md shrink-0 h-12 px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							search: {
								courseId: statsData.resumePoint.courseId || void 0,
								lessonId: statsData.resumePoint.lessonId
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "w-5 h-5 mr-2",
								fill: "currentColor"
							}), " Resume Learning"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-1.5 bg-primary/10 rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: "Your Enrolled Courses"
					})]
				}), purchasedCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-card/30 border-dashed border-border p-8 text-center rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-6 w-6 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold mb-2",
							children: "No active enrollments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-4 max-w-sm mx-auto text-sm",
							children: "You haven't purchased any premium courses yet. Start your journey by exploring our catalog."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "rounded-full font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								children: "Explore Premium Courses"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3 lg:grid-cols-4",
					children: purchasedCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
						course,
						type: "purchased"
					}, course.id))
				})] }), freeCourses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-1.5 bg-success/10 rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "h-5 w-5 text-success" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: "Free Resources For You"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3 lg:grid-cols-4",
					children: freeCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
						course,
						type: "free"
					}, course.id))
				})] })]
			})
		]
	});
}
function CourseCard({ course, type }) {
	const isFree = type === "free";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group flex flex-col overflow-hidden bg-card border-border hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 transition-all duration-300 rounded-xl h-full relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 right-4 z-10",
				children: isFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-3 py-1 bg-success text-success-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md bg-opacity-90 flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " Free"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md bg-opacity-90",
					children: "Pro"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-40 w-full overflow-hidden relative bg-muted",
				children: [course.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.imageUrl,
					alt: course.title,
					className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-background flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-10 w-10 text-primary/30" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-full bg-background/90 backdrop-blur shadow-xl flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "w-5 h-5 ml-1",
							fill: "currentColor"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex-1 pb-4 pt-4 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-lg font-bold leading-tight group-hover:text-primary transition-colors",
						children: course.title
					}),
					course.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "line-clamp-2 mt-2 text-muted-foreground text-xs leading-relaxed",
						children: course.description
					}),
					!isFree && course.totalLessons !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center text-xs font-semibold mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									course.completedLessons || 0,
									"/",
									course.totalLessons,
									" Lessons"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary font-bold",
								children: [course.progressPercentage || 0, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full bg-secondary h-2 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-primary h-full rounded-full transition-all duration-500",
								style: { width: `${course.progressPercentage || 0}%` }
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "pt-0 pb-5 px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: isFree ? "secondary" : "default",
					className: "w-full font-semibold rounded-lg h-10 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/overview",
						search: { courseId: course.id },
						children: isFree ? "Start Free Course" : "Continue Learning"
					})
				})
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPage, {}) });
//#endregion
export { SplitComponent as component };
