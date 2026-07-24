import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { a as CardTitle, i as CardHeader, n as CardDescription, r as CardFooter, t as Card } from "./card-j38Ih5p7.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as CircleCheck, R as BookOpen, _ as LockOpen, k as CircleAlert, s as Sparkles, u as Play } from "../_libs/lucide-react.mjs";
import { i as fetchCourses, o as fetchMyCourses } from "./api-C0X-qdL4.mjs";
import { t as useAuthStore } from "./authStore-C2pVoj2B.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-w8xJ0Iul.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-D2Z6lR36.js
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
	if (loadingMy || loadingAll) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/dashboard.tsx:35:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-8",
			"data-tsd-source": "/src/routes/dashboard.tsx:36:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 w-64 bg-secondary rounded-lg",
				"data-tsd-source": "/src/routes/dashboard.tsx:37:11"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/dashboard.tsx:38:11",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72 bg-secondary rounded-2xl",
					"data-tsd-source": "/src/routes/dashboard.tsx:40:15"
				}, i))
			})]
		})
	});
	if (myError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/dashboard.tsx:50:7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
				className: "mx-auto h-12 w-12 text-destructive opacity-80 mb-4",
				"data-tsd-source": "/src/routes/dashboard.tsx:51:9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-foreground",
				"data-tsd-source": "/src/routes/dashboard.tsx:52:9",
				children: "Could not load dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				"data-tsd-source": "/src/routes/dashboard.tsx:53:9",
				children: "Please try again later."
			})
		]
	});
	const purchasedCourses = myCourses || [];
	const purchasedIds = new Set(purchasedCourses.map((c) => c.id));
	const freeCourses = (allCourses || []).filter((c) => c.isFree && !purchasedIds.has(c.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen",
		"data-tsd-source": "/src/routes/dashboard.tsx:65:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
			"data-tsd-source": "/src/routes/dashboard.tsx:67:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-tsd-source": "/src/routes/dashboard.tsx:68:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl font-bold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/dashboard.tsx:69:11",
					children: ["Welcome back, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						"data-tsd-source": "/src/routes/dashboard.tsx:70:27",
						children: user?.displayName || user?.username || "Learner"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg text-muted-foreground",
					"data-tsd-source": "/src/routes/dashboard.tsx:72:11",
					children: "Ready to crush your next interview? Pick up where you left off."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "rounded-full shadow-sm",
				"data-tsd-source": "/src/routes/dashboard.tsx:76:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					"data-tsd-source": "/src/routes/dashboard.tsx:77:11",
					children: "Browse Catalog"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-16",
			"data-tsd-source": "/src/routes/dashboard.tsx:81:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-tsd-source": "/src/routes/dashboard.tsx:84:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-6",
					"data-tsd-source": "/src/routes/dashboard.tsx:85:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 bg-primary/10 rounded-lg",
						"data-tsd-source": "/src/routes/dashboard.tsx:86:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-6 w-6 text-primary",
							"data-tsd-source": "/src/routes/dashboard.tsx:87:15"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						"data-tsd-source": "/src/routes/dashboard.tsx:89:13",
						children: "Your Enrolled Courses"
					})]
				}), purchasedCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-card/30 border-dashed border-border p-12 text-center rounded-3xl",
					"data-tsd-source": "/src/routes/dashboard.tsx:93:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4",
							"data-tsd-source": "/src/routes/dashboard.tsx:94:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
								className: "h-8 w-8 text-muted-foreground",
								"data-tsd-source": "/src/routes/dashboard.tsx:95:17"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-semibold mb-2",
							"data-tsd-source": "/src/routes/dashboard.tsx:97:15",
							children: "No active enrollments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-6 max-w-md mx-auto",
							"data-tsd-source": "/src/routes/dashboard.tsx:98:15",
							children: "You haven't purchased any premium courses yet. Start your journey by exploring our catalog."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full font-bold",
							"data-tsd-source": "/src/routes/dashboard.tsx:101:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								"data-tsd-source": "/src/routes/dashboard.tsx:102:17",
								children: "Explore Premium Courses"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					"data-tsd-source": "/src/routes/dashboard.tsx:106:13",
					children: purchasedCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
						course,
						type: "purchased",
						"data-tsd-source": "/src/routes/dashboard.tsx:108:17"
					}, course.id))
				})]
			}), freeCourses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-tsd-source": "/src/routes/dashboard.tsx:116:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-6",
					"data-tsd-source": "/src/routes/dashboard.tsx:117:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 bg-success/10 rounded-lg",
						"data-tsd-source": "/src/routes/dashboard.tsx:118:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, {
							className: "h-6 w-6 text-success",
							"data-tsd-source": "/src/routes/dashboard.tsx:119:17"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						"data-tsd-source": "/src/routes/dashboard.tsx:121:15",
						children: "Free Resources For You"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					"data-tsd-source": "/src/routes/dashboard.tsx:123:13",
					children: freeCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
						course,
						type: "free",
						"data-tsd-source": "/src/routes/dashboard.tsx:125:17"
					}, course.id))
				})]
			})]
		})]
	});
}
function CourseCard({ course, type }) {
	const isFree = type === "free";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group flex flex-col overflow-hidden bg-card border-border hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 transition-all duration-300 rounded-2xl h-full relative",
		"data-tsd-source": "/src/routes/dashboard.tsx:140:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 right-4 z-10",
				"data-tsd-source": "/src/routes/dashboard.tsx:143:7",
				children: isFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-3 py-1 bg-success text-success-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md bg-opacity-90 flex items-center gap-1",
					"data-tsd-source": "/src/routes/dashboard.tsx:145:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "w-3 h-3",
						"data-tsd-source": "/src/routes/dashboard.tsx:146:13"
					}), " Free"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md bg-opacity-90",
					"data-tsd-source": "/src/routes/dashboard.tsx:149:11",
					children: "Pro"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-48 w-full overflow-hidden relative bg-muted",
				"data-tsd-source": "/src/routes/dashboard.tsx:156:7",
				children: [course.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.imageUrl,
					alt: course.title,
					className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
					"data-tsd-source": "/src/routes/dashboard.tsx:159:13"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
					"data-tsd-source": "/src/routes/dashboard.tsx:165:13"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-background flex items-center justify-center",
					"data-tsd-source": "/src/routes/dashboard.tsx:168:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						className: "h-12 w-12 text-primary/30",
						"data-tsd-source": "/src/routes/dashboard.tsx:169:13"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
					"data-tsd-source": "/src/routes/dashboard.tsx:174:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 h-14 rounded-full bg-background/90 backdrop-blur shadow-xl flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300",
						"data-tsd-source": "/src/routes/dashboard.tsx:175:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "w-6 h-6 ml-1",
							fill: "currentColor",
							"data-tsd-source": "/src/routes/dashboard.tsx:176:13"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex-1 pb-4 pt-5 px-6",
				"data-tsd-source": "/src/routes/dashboard.tsx:182:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-xl font-bold leading-tight group-hover:text-primary transition-colors",
					"data-tsd-source": "/src/routes/dashboard.tsx:183:9",
					children: course.title
				}), course.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					className: "line-clamp-2 mt-3 text-muted-foreground text-sm leading-relaxed",
					"data-tsd-source": "/src/routes/dashboard.tsx:187:11",
					children: course.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "pt-0 pb-6 px-6",
				"data-tsd-source": "/src/routes/dashboard.tsx:193:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: isFree ? "secondary" : "default",
					className: "w-full font-semibold rounded-xl h-11",
					"data-tsd-source": "/src/routes/dashboard.tsx:194:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/courses",
						search: { courseId: course.id },
						"data-tsd-source": "/src/routes/dashboard.tsx:199:11",
						children: isFree ? "Start Free Course" : "Continue Learning"
					})
				})
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
	"data-tsd-source": "/src/routes/dashboard.tsx:12:5",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPage, { "data-tsd-source": "/src/routes/dashboard.tsx:13:7" })
});
//#endregion
export { SplitComponent as component };
