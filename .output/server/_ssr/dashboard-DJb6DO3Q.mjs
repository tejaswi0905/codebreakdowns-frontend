import { o as fetchMyCourses } from "./api-C0X-qdL4.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAuthStore } from "./authStore-C2pVoj2B.mjs";
import { O as BookOpen, o as Play, x as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-DUOgzUW5.mjs";
import { a as CardTitle, i as CardHeader, n as CardDescription, r as CardFooter, t as Card } from "./card-j38Ih5p7.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DJb6DO3Q.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { user } = useAuthStore();
	const { data: myCourses, isLoading, error } = useQuery({
		queryKey: ["my-courses"],
		queryFn: fetchMyCourses
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 bg-white/10 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-48 bg-white/5 rounded-xl" }, i))
			})]
		})
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-2xl font-semibold tracking-tight sm:text-3xl",
				children: ["Welcome back, ", user?.displayName || user?.username || "Learner"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Access your enrolled courses and continue learning."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-lg font-semibold flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-primary" }), " My Purchases"]
			}), !myCourses || myCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bg-black/20 border border-white/5 p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-medium mb-2",
						children: "No courses yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-6",
						children: "Explore our catalog to start your learning journey."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: "Browse Products"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: myCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course }, course.id))
			})]
		})]
	});
}
function CourseCard({ course }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex flex-col overflow-hidden bg-[#0a0a0a] border-white/10 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all",
		children: [
			course.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-32 w-full overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.imageUrl,
					alt: course.title,
					className: "w-full h-full object-cover opacity-80"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-32 w-full bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border-b border-white/5 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-8 w-8 text-indigo-400 opacity-50" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-lg leading-tight",
					children: course.title
				}), course.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					className: "line-clamp-2 mt-1",
					children: course.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "mt-auto pt-4 pb-6 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full gap-2 font-medium",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses",
						search: { courseId: course.id },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Start Learning"]
					})
				})
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPage, {}) });
//#endregion
export { SplitComponent as component };
