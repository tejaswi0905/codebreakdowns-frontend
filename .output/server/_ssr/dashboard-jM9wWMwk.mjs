import { a as fetchMyCourses } from "./api-Cul2JKM0.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAuthStore } from "./authStore-VMDWpkku.mjs";
import { S as CircleAlert, j as BookOpen, o as Play } from "../_libs/lucide-react.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-Ba6TYVjq.mjs";
import { a as CardTitle, i as CardHeader, n as CardDescription, r as CardFooter, t as Card } from "./card-j38Ih5p7.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-jM9wWMwk.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { user } = useAuthStore();
	const { data: myCourses, isLoading, error } = useQuery({
		queryKey: ["my-courses"],
		queryFn: fetchMyCourses
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/dashboard.tsx:28:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-8",
			"data-tsd-source": "/src/routes/dashboard.tsx:29:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-8 w-48 bg-white/10 rounded",
				"data-tsd-source": "/src/routes/dashboard.tsx:30:11"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/dashboard.tsx:31:11",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-48 bg-white/5 rounded-xl",
					"data-tsd-source": "/src/routes/dashboard.tsx:33:15"
				}, i))
			})]
		})
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/dashboard.tsx:43:7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
				className: "mx-auto h-12 w-12 text-destructive opacity-80 mb-4",
				"data-tsd-source": "/src/routes/dashboard.tsx:44:9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-foreground",
				"data-tsd-source": "/src/routes/dashboard.tsx:45:9",
				children: "Could not load dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				"data-tsd-source": "/src/routes/dashboard.tsx:46:9",
				children: "Please try again later."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/dashboard.tsx:52:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			"data-tsd-source": "/src/routes/dashboard.tsx:53:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-2xl font-semibold tracking-tight sm:text-3xl",
				"data-tsd-source": "/src/routes/dashboard.tsx:54:9",
				children: ["Welcome back, ", user?.displayName || user?.username || "Learner"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/dashboard.tsx:57:9",
				children: "Access your enrolled courses and continue learning."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			"data-tsd-source": "/src/routes/dashboard.tsx:62:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-lg font-semibold flex items-center gap-2",
				"data-tsd-source": "/src/routes/dashboard.tsx:63:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
					className: "h-5 w-5 text-primary",
					"data-tsd-source": "/src/routes/dashboard.tsx:64:11"
				}), " My Purchases"]
			}), !myCourses || myCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bg-black/20 border border-white/5 p-12 text-center",
				"data-tsd-source": "/src/routes/dashboard.tsx:68:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium mb-2",
						"data-tsd-source": "/src/routes/dashboard.tsx:69:13",
						children: "No courses yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-6",
						"data-tsd-source": "/src/routes/dashboard.tsx:70:13",
						children: "Explore our catalog to start your learning journey."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						"data-tsd-source": "/src/routes/dashboard.tsx:71:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							"data-tsd-source": "/src/routes/dashboard.tsx:72:15",
							children: "Browse Products"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/dashboard.tsx:76:11",
				children: myCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
					course,
					"data-tsd-source": "/src/routes/dashboard.tsx:78:15"
				}, course.id))
			})]
		})]
	});
}
function CourseCard({ course }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex flex-col overflow-hidden bg-[#0a0a0a] border-white/10 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all",
		"data-tsd-source": "/src/routes/dashboard.tsx:89:5",
		children: [
			course.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-32 w-full overflow-hidden",
				"data-tsd-source": "/src/routes/dashboard.tsx:91:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.imageUrl,
					alt: course.title,
					className: "w-full h-full object-cover opacity-80",
					"data-tsd-source": "/src/routes/dashboard.tsx:92:11"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-32 w-full bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border-b border-white/5 flex items-center justify-center",
				"data-tsd-source": "/src/routes/dashboard.tsx:95:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
					className: "h-8 w-8 text-indigo-400 opacity-50",
					"data-tsd-source": "/src/routes/dashboard.tsx:96:11"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "pb-2",
				"data-tsd-source": "/src/routes/dashboard.tsx:99:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-lg leading-tight",
					"data-tsd-source": "/src/routes/dashboard.tsx:100:9",
					children: course.title
				}), course.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					className: "line-clamp-2 mt-1",
					"data-tsd-source": "/src/routes/dashboard.tsx:102:11",
					children: course.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "mt-auto pt-4 pb-6 px-6",
				"data-tsd-source": "/src/routes/dashboard.tsx:105:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full gap-2 font-medium",
					"data-tsd-source": "/src/routes/dashboard.tsx:106:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses",
						search: { courseId: course.id },
						"data-tsd-source": "/src/routes/dashboard.tsx:107:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/routes/dashboard.tsx:108:13"
						}), " Start Learning"]
					})
				})
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
	"data-tsd-source": "/src/routes/dashboard.tsx:13:5",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPage, { "data-tsd-source": "/src/routes/dashboard.tsx:14:7" })
});
//#endregion
export { SplitComponent as component };
