import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { a as CardTitle, i as CardHeader, n as CardDescription, r as CardFooter, t as Card } from "./card-CM_IL3Hu.mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as GraduationCap, K as Clock, L as Flame, N as Layers, W as Compass, X as CircleAlert, Y as CircleCheck, at as BookOpen, b as Play, ct as ArrowRight, it as Bookmark, k as LockOpen, u as Sparkles } from "../_libs/lucide-react.mjs";
import { i as fetchCourses, o as fetchDashboardStats, s as fetchMyCourses } from "./api-DgzOPn4j.mjs";
import { t as useAuthStore } from "./authStore-iwCKHJq-.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-CjFyEbHi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-S5cP40Kd.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { user } = useAuthStore();
	useNavigate();
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
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-64 bg-secondary rounded-lg" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-secondary rounded-xl" }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-44 bg-secondary rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 bg-secondary rounded-2xl" }, i))
				})
			]
		})
	});
	if (myError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto h-14 w-14 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-4 border border-destructive/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-foreground",
				children: "Could not load dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 max-w-md mx-auto text-sm",
				children: "We encountered an issue synchronizing your enrolled courses. Please refresh or try again in a few moments."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => window.location.reload(),
				className: "mt-6 font-semibold",
				children: "Refresh Dashboard"
			})
		]
	});
	const purchasedCourses = myCourses || [];
	const purchasedIds = new Set(purchasedCourses.map((c) => c.id));
	const freeCourses = (allCourses || []).filter((c) => c.isFree && !purchasedIds.has(c.id));
	const isFirstTimeStudent = purchasedCourses.length === 0;
	const resumePoint = statsData?.resumePoint;
	const firstPurchasedCourse = purchasedCourses[0];
	const firstFreeCourse = freeCourses[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
					children: [
						"Welcome back, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: user?.name || "Learner"
						}),
						" 👋"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: isFirstTimeStudent ? "Kickstart your technical interview preparation with structured roadmaps and playbooks." : "Ready to crush your next interview? Pick up right where you left off."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						className: "rounded-xl shadow-sm font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "mr-2 h-4 w-4" }), " Browse Catalog"]
						})
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-foreground",
							children: purchasedCourses.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: purchasedCourses.length === 0 ? "Explore free modules" : "Active roadmaps"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-success" }), " Lessons Completed"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-success",
							children: statsData?.metrics?.lessonsCompleted || 0
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: statsData?.metrics?.lessonsCompleted ? "Continuous progress" : "First milestone awaits"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-amber-500" }), " Hours Learned"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-foreground",
							children: statsData?.metrics ? `${statsData.metrics.hoursLearned}h` : "0h"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: "Time invested in mastery"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "w-4 h-4 text-primary fill-primary" }), " Bookmarked"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-extrabold mt-2 text-primary",
							children: statsData?.metrics?.bookmarksCount || 0
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: "Saved for interview review"
						})] })]
					})
				]
			}),
			resumePoint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "bg-gradient-to-r from-primary/15 via-primary/5 to-card border-primary/30 p-6 sm:p-7 rounded-2xl mb-10 shadow-lg relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Continue Where You Left Off"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl md:text-2xl font-extrabold text-foreground tracking-tight",
							children: resumePoint.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: [
								"Jump straight back into your lesson at",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-foreground font-semibold bg-muted px-2 py-0.5 rounded border border-border",
									children: [
										Math.floor(resumePoint.timestamp / 60),
										"m ",
										resumePoint.timestamp % 60,
										"s"
									]
								}),
								". Zero friction, resume instantly."
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "rounded-xl font-bold shadow-md shrink-0 h-12 px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							search: {
								courseId: resumePoint.courseId || void 0,
								lessonId: resumePoint.lessonId
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "w-5 h-5 mr-2",
								fill: "currentColor"
							}), " Resume Lesson"]
						})
					})]
				})
			}) : !isFirstTimeStudent && firstPurchasedCourse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "bg-gradient-to-r from-primary/10 via-primary/5 to-card border-primary/20 p-6 sm:p-7 rounded-2xl mb-10 shadow-md relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Start Your Enrolled Track"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl md:text-2xl font-extrabold text-foreground tracking-tight",
							children: firstPurchasedCourse.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Your curriculum is unlocked and ready. Start Chapter 1 today and build real interview intuition."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "rounded-xl font-bold shadow-md shrink-0 h-12 px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/overview",
							search: { courseId: firstPurchasedCourse.id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "w-5 h-5 mr-2",
								fill: "currentColor"
							}), " Begin Course"]
						})
					})]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "bg-gradient-to-r from-primary/10 via-background to-secondary/30 border-primary/20 p-6 sm:p-8 rounded-2xl mb-10 shadow-sm relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " First-Time Student Onboarding"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl sm:text-2xl font-extrabold text-foreground tracking-tight",
								children: "Ready to break into tech internships & software roles?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1.5 leading-relaxed",
								children: "CodeBreakdowns replaces rote LeetCode grinding with deep mental models. Start with our free foundation modules below or unlock the complete Blind 75 and System Design bundles."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 shrink-0",
						children: [firstFreeCourse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-xl font-bold shadow-md h-11 px-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/overview",
								search: { courseId: firstFreeCourse.id },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
									className: "w-4 h-4 mr-2",
									fill: "currentColor"
								}), " Start Free Module"]
							})
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "rounded-xl font-semibold h-11 px-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								children: "Browse All Bundles"
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-1.5 bg-primary/10 text-primary rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold tracking-tight",
							children: "Your Enrolled Courses"
						})]
					}), purchasedCourses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground font-semibold",
						children: [
							purchasedCourses.length,
							" ",
							purchasedCourses.length === 1 ? "Course" : "Courses"
						]
					})]
				}), purchasedCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border border-border/70 p-6 sm:p-8 rounded-2xl bg-card/60 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-foreground",
								children: "Recommended Starting Paths"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Choose a track based on where you are in your career preparation:"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-xl border border-border bg-background/60 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-5 h-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm text-foreground group-hover:text-primary transition-colors",
											children: "Blind 75 & 150 Mastery"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
											children: "Master the 75 algorithmic patterns tested at top tech companies. Step-by-step video breakdowns without memorization."
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "sm",
										className: "mt-4 w-full font-semibold rounded-lg text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/products",
											children: ["Explore Track ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 w-3.5 h-3.5" })]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-xl border border-primary/30 bg-primary/5 flex flex-col justify-between hover:border-primary/60 hover:shadow-md transition-all group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm text-foreground group-hover:text-primary transition-colors",
											children: "Free Foundation Modules"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
											children: "Test-drive our video breakdown player, mental models, and interactive problem sets with zero upfront cost."
										})
									] }), firstFreeCourse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										className: "mt-4 w-full font-semibold rounded-lg text-xs shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/overview",
											search: { courseId: firstFreeCourse.id },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
												className: "mr-1.5 w-3.5 h-3.5",
												fill: "currentColor"
											}), " Start Free Lesson"]
										})
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										className: "mt-4 w-full font-semibold rounded-lg text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/products",
											children: "View Free Catalog"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-xl border border-border bg-background/60 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-5 h-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm text-foreground group-hover:text-primary transition-colors",
											children: "System Design & Architecture"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
											children: "High-scale distributed systems, database sharding, microservices, and architectural trade-off frameworks."
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "sm",
										className: "mt-4 w-full font-semibold rounded-lg text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/products",
											children: ["Explore Track ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 w-3.5 h-3.5" })]
										})
									})]
								})
							]
						})]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3 lg:grid-cols-4",
					children: purchasedCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
						course,
						type: "purchased"
					}, course.id))
				})] }), freeCourses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-1.5 bg-success/10 text-success rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold tracking-tight",
							children: "Free Starter Resources"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "100% free courses available to all students"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/20",
						children: [
							freeCourses.length,
							" Free ",
							freeCourses.length === 1 ? "Track" : "Tracks"
						]
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
		className: "group flex flex-col overflow-hidden bg-card border-border hover:-translate-y-1 hover:shadow-md hover:border-primary/40 transition-all duration-300 rounded-xl h-full relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3.5 right-3.5 z-10",
				children: isFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-2.5 py-1 bg-success text-success-foreground text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-md flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " Free"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-md",
					children: "Enrolled"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-40 w-full overflow-hidden relative bg-muted",
				children: [course.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.imageUrl,
					alt: course.title,
					className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-background flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-10 w-10 text-primary/30" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-full bg-background/90 backdrop-blur shadow-xl flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "w-5 h-5 ml-0.5",
							fill: "currentColor"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex-1 pb-3 pt-4 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-1",
						children: course.title
					}),
					course.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "line-clamp-2 mt-1.5 text-muted-foreground text-xs leading-relaxed",
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
							className: "w-full bg-secondary h-1.5 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-primary h-full rounded-full transition-all duration-500",
								style: { width: `${course.progressPercentage || 0}%` }
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "pt-0 pb-4 px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: isFree ? "secondary" : "default",
					className: "w-full font-semibold rounded-lg h-9 text-xs",
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
