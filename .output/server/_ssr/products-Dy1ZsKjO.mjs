import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Database, I as Flame, M as Layers, Q as Check, R as Eye, U as CodeXml, V as Crown, X as ChevronRight, h as Search, it as BookOpen, l as Star, p as Server, q as CircleCheck, tt as Briefcase, u as Sparkles, y as Play } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as fetchCurrentUser, c as fetchProducts, n as createCheckoutOrder, p as verifyPayment, s as fetchMyCourses } from "./api-BUiRiYXp.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CwLzEEob.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Dy1ZsKjO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fmt = (n) => `₹${n.toLocaleString("en-IN")}`;
var getVisualsForProduct = (title) => {
	const lower = title.toLowerCase();
	if (lower.includes("ai") || lower.includes("agentic")) return {
		icon: Sparkles,
		tint: "from-purple-500/20 via-primary/10 to-transparent"
	};
	if (lower.includes("backend") || lower.includes("system") || lower.includes("architect")) return {
		icon: Server,
		tint: "from-emerald-500/20 via-emerald-500/5 to-transparent"
	};
	if (lower.includes("sql") || lower.includes("database")) return {
		icon: Database,
		tint: "from-amber-500/20 via-amber-500/5 to-transparent"
	};
	if (lower.includes("blind") || lower.includes("dsa") || lower.includes("cracker")) return {
		icon: CodeXml,
		tint: "from-blue-500/20 via-blue-500/5 to-transparent"
	};
	if (lower.includes("pass") || lower.includes("lifetime") || lower.includes("bundle")) return {
		icon: Crown,
		tint: "from-primary/25 via-indigo-500/15 to-transparent"
	};
	return {
		icon: Layers,
		tint: "from-indigo-500/15 to-transparent"
	};
};
var courseHighlightsMap = {
	"blind 75": {
		label: "75 Patterns",
		topic1: "Two Pointers, Sliding Window & Trees",
		topic2: "Dynamic Programming & Graph Traversal"
	},
	"the sde interview cracker": {
		label: "5-in-1 Track",
		topic1: "Blind 75 & Blind 150 Core Patterns",
		topic2: "System Design & SQL Blind 25"
	},
	"python beginner to expert": {
		label: "Core Python",
		topic1: "OOP, Decorators, Generators & Typing",
		topic2: "AsyncIO, Memory Models & Patterns"
	},
	"javascript beginner to expert": {
		label: "Core JS Engine",
		topic1: "Closures, Prototypes & Event Loop",
		topic2: "Promises, Async/Await & Architecture"
	},
	"blind 150": {
		label: "Hard DSA",
		topic1: "Advanced Graphs, DP & Tries",
		topic2: "Hard Sliding Window & Backtracking"
	},
	"system design for interviews": {
		label: "High Scale",
		topic1: "Load Balancing, Caching & Sharding",
		topic2: "Rate Limiting & Microservices"
	},
	"sql blind 25": {
		label: "25 Patterns",
		topic1: "Window Functions & CTE Queries",
		topic2: "Execution Plans & Index Optimization"
	},
	"sql beginner to expert": {
		label: "DB Foundation",
		topic1: "Schema Design & Normalization",
		topic2: "B-Tree Indexing & ACID Transactions"
	},
	"node.js for interviews": {
		label: "Runtime Internals",
		topic1: "Event Loop, Streams & Buffers",
		topic2: "Clustering & Production Express"
	},
	"advanced backend for interviews (node.js)": {
		label: "Distributed Scale",
		topic1: "Redis Caching & Message Queues",
		topic2: "Idempotency & Rate Limiting"
	},
	"django for interviews": {
		label: "Django Framework",
		topic1: "ORM Optimization & Raw Queries",
		topic2: "REST Framework & Auth Security"
	},
	"advanced backend for interviews (python)": {
		label: "Python Systems",
		topic1: "AsyncIO, Celery & Background Workers",
		topic2: "Database Pooling & Performance"
	},
	"portfolio project 1": {
		label: "Resume Project",
		topic1: "Real-Time Collaboration System",
		topic2: "WebSockets, CRDTs & Docker Deploy"
	},
	"portfolio project 2": {
		label: "Resume Project",
		topic1: "Distributed Task Processing Queue",
		topic2: "PostgreSQL, Redis & Observability"
	},
	"agentic ai development with project": {
		label: "Modern AI",
		topic1: "LLM Agentic Loops & Tool Calling",
		topic2: "RAG Vector Retrieval & Pipelines"
	},
	"important developer skills for interviews": {
		label: "Practical Skills",
		topic1: "Git Workflows & Terminal Mastery",
		topic2: "HTTP/DNS & Linux Debugging"
	}
};
var getHighlightsForProduct = (title) => {
	const lower = title.toLowerCase().trim();
	for (const [key, val] of Object.entries(courseHighlightsMap)) if (lower.includes(key)) return val;
	return {
		label: "Core Modules",
		topic1: "Intuition & pattern trade-offs",
		topic2: "Optimal code implementation"
	};
};
var getCourseCategory = (title) => {
	const t = title.toLowerCase();
	if (t.includes("blind 75") || t.includes("blind 150") || t.includes("dsa")) return "dsa";
	if (t.includes("system design")) return "system-design";
	if (t.includes("node") || t.includes("python") || t.includes("django") || t.includes("backend") || t.includes("javascript")) return "backend";
	if (t.includes("sql") || t.includes("database")) return "database";
	if (t.includes("project") || t.includes("agentic") || t.includes("ai")) return "projects";
	return "foundations";
};
function loadScript(src) {
	return new Promise((resolve) => {
		if (document.querySelector(`script[src="${src}"]`)) {
			resolve(true);
			return;
		}
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => resolve(true);
		script.onerror = () => resolve(false);
		document.body.appendChild(script);
	});
}
function ProductsPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [selectedBundle, setSelectedBundle] = (0, import_react.useState)(null);
	const [courseCategoryFilter, setCourseCategoryFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const { data: products, isLoading, error } = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts
	});
	const { data: myCourses } = useQuery({
		queryKey: ["my-courses"],
		queryFn: fetchMyCourses
	});
	const { data: user } = useQuery({
		queryKey: ["current-user"],
		queryFn: fetchCurrentUser
	});
	const myCourseIds = (0, import_react.useMemo)(() => new Set((myCourses || []).map((c) => c.id)), [myCourses]);
	const { allAccessProduct, bundleProducts, individualProducts } = (0, import_react.useMemo)(() => {
		if (!products) return {
			allAccessProduct: null,
			bundleProducts: [],
			individualProducts: []
		};
		let allAccess = null;
		const bundles = [];
		const individuals = [];
		for (const p of products) {
			const count = p.courses?.length || 0;
			const titleLower = p.title.toLowerCase();
			if (count >= 10 || titleLower.includes("lifetime") || titleLower.includes("all access") || titleLower.includes("access lifetime")) allAccess = p;
			else if (count > 1) bundles.push(p);
			else individuals.push(p);
		}
		bundles.sort((a, b) => {
			const order = [
				"cracker",
				"node",
				"python",
				"capstone",
				"ai"
			];
			const aIdx = order.findIndex((k) => a.title.toLowerCase().includes(k));
			const bIdx = order.findIndex((k) => b.title.toLowerCase().includes(k));
			return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
		});
		return {
			allAccessProduct: allAccess,
			bundleProducts: bundles,
			individualProducts: individuals
		};
	}, [products]);
	const popularProducts = (0, import_react.useMemo)(() => {
		if (!products) return [];
		const targetKeywords = [
			"blind 75",
			"sde interview cracker",
			"python beginner to expert",
			"javascript beginner to expert"
		];
		const results = [];
		for (const kw of targetKeywords) {
			const match = products.find((p) => p.title.toLowerCase().includes(kw));
			if (match && !results.some((r) => r.id === match.id)) results.push(match);
		}
		return results;
	}, [products]);
	const filteredIndividualCourses = (0, import_react.useMemo)(() => {
		return individualProducts.filter((p) => {
			const matchesCategory = courseCategoryFilter === "all" || getCourseCategory(p.title) === courseCategoryFilter;
			const matchesSearch = searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		});
	}, [
		individualProducts,
		courseCategoryFilter,
		searchQuery
	]);
	const handlePurchase = async (product) => {
		if (!user) {
			toast.error("Please login to purchase courses");
			navigate({ to: "/login" });
			return;
		}
		toast.loading("Loading Razorpay checkout...", { id: "rzp-checkout" });
		if (!await loadScript("https://checkout.razorpay.com/v1/checkout.js")) {
			toast.error("Razorpay SDK failed to load. Are you online?", { id: "rzp-checkout" });
			return;
		}
		try {
			const orderData = await createCheckoutOrder(product.id);
			toast.dismiss("rzp-checkout");
			const rzpKeyId = orderData.keyId || "7skfGY650mEv0IGbvV22SsoI";
			if (!rzpKeyId) {
				toast.error("Razorpay Key ID is missing in environment variables.");
				return;
			}
			const options = {
				key: rzpKeyId,
				amount: orderData.amount,
				currency: orderData.currency,
				name: "CodeBreakdowns",
				description: product.title,
				order_id: orderData.orderId,
				handler: async function(response) {
					toast.loading("Verifying payment security signature...", { id: "rzp-verify" });
					try {
						await verifyPayment({
							productId: product.id,
							razorpay_order_id: response.razorpay_order_id,
							razorpay_payment_id: response.razorpay_payment_id,
							razorpay_signature: response.razorpay_signature
						});
						toast.success("Payment successful! You now own this course 🎉", { id: "rzp-verify" });
						queryClient.invalidateQueries({ queryKey: ["my-courses"] });
						queryClient.invalidateQueries({ queryKey: ["products"] });
						navigate({ to: "/dashboard" });
					} catch (err) {
						toast.error(err.message || "Payment verification failed", { id: "rzp-verify" });
					}
				},
				prefill: {
					name: user.displayName || user.username || "Student",
					email: ""
				},
				theme: { color: "#3b82f6" }
			};
			const rzp = new window.Razorpay(options);
			rzp.on("payment.failed", function(resp) {
				toast.error(resp.error?.description || "Payment failed or cancelled.");
			});
			rzp.open();
		} catch (err) {
			toast.error(err.message || "Failed to initiate checkout", { id: "rzp-checkout" });
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-9 w-64 bg-muted rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 bg-muted/60 rounded-2xl" }, i))
			})]
		})
	});
	if (error || !products) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold text-foreground",
			children: "Could not load products"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			children: "Please try again later."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background selection:bg-primary/20 selection:text-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-4 sm:py-6 sm:px-6 lg:px-8 space-y-7 sm:space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border/60 pb-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Structured Interview Catalog"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight",
							children: "Products & Learning Pathways"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5 text-xs font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#popular",
									className: "px-3 py-1 rounded-lg border border-border bg-card/80 hover:bg-muted text-foreground transition-all flex items-center gap-1.5 shadow-sm text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 text-amber-500 fill-amber-500" }), " Most Popular"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#bundles",
									className: "px-3 py-1 rounded-lg border border-border bg-card/80 hover:bg-muted text-foreground transition-all flex items-center gap-1.5 shadow-sm text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3 h-3 text-amber-500" }), " Career Bundles"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#individual-courses",
									className: "px-3 py-1 rounded-lg border border-border bg-card/80 hover:bg-muted text-foreground transition-all flex items-center gap-1.5 shadow-sm text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3 h-3 text-primary" }), " Single Modules"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#all-access",
									className: "px-3 py-1 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary transition-all flex items-center gap-1.5 shadow-sm text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3 h-3 text-primary" }), " All-Access Pass"]
								})
							]
						})]
					}),
					popularProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "popular",
						className: "scroll-mt-16 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-500 text-amber-500" }), " Student Favorites • High Demand"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg sm:text-xl font-extrabold text-foreground tracking-tight",
								children: "Most Popular Starting Points"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline-block text-xs text-muted-foreground font-medium",
								children: "Chosen by 80% of students"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: popularProducts.map((product) => {
								const isBundle = (product.courses?.length || 0) > 1;
								const isPurchased = product.courses?.length && product.courses.every((c) => myCourseIds.has(c.course.id));
								return isBundle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymmetricalBundleCard, {
									bundle: product,
									isPurchased: !!isPurchased,
									onPurchase: () => handlePurchase(product),
									onViewSyllabus: () => setSelectedBundle(product)
								}, `pop-${product.id}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymmetricalCourseCard, {
									product,
									isPurchased: !!isPurchased,
									onPurchase: () => handlePurchase(product)
								}, `pop-${product.id}`);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "bundles",
						className: "scroll-mt-16 space-y-3 border-t border-border/60 pt-6 sm:pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3.5 h-3.5 fill-amber-500" }), " Complete Pathways • Save Up to 50%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg sm:text-xl font-extrabold text-foreground tracking-tight",
								children: "Career & Interview Bundles"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3.5 sm:p-4 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs sm:text-sm font-bold text-foreground",
										children: "Why Were These Bundles Created Together?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed max-w-3xl",
										children: "Top tech companies test across multiple disciplines: algorithms (DSA), system architecture, and framework depth. These bundles unite the foundational theory, system design, and resume code-along projects into a single unified track at up to 50% discount."
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								children: bundleProducts.map((bundle) => {
									const bundleCourseIds = bundle.courses?.map((c) => c.course.id) || [];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymmetricalBundleCard, {
										bundle,
										isPurchased: bundleCourseIds.length > 0 && bundleCourseIds.every((id) => myCourseIds.has(id)),
										onPurchase: () => handlePurchase(bundle),
										onViewSyllabus: () => setSelectedBundle(bundle)
									}, bundle.id);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "individual-courses",
						className: "scroll-mt-16 space-y-3 border-t border-border/60 pt-6 sm:pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row md:items-end justify-between gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1 text-[11px] font-bold text-primary uppercase tracking-wider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5" }), " A La Carte Modules"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg sm:text-xl font-extrabold text-foreground tracking-tight",
									children: "All Individual Courses & Deep Dives"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full md:w-64",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Search 15 courses...",
										value: searchQuery,
										onChange: (e) => setSearchQuery(e.target.value),
										className: "pl-8 rounded-lg bg-card border-border shadow-sm text-xs h-8"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-1.5 pt-0.5",
								children: [
									{
										id: "all",
										label: "All Courses"
									},
									{
										id: "dsa",
										label: "DSA & Algorithms"
									},
									{
										id: "system-design",
										label: "System Design"
									},
									{
										id: "backend",
										label: "Backend Engineering"
									},
									{
										id: "database",
										label: "Database & SQL"
									},
									{
										id: "projects",
										label: "Projects & AI"
									}
								].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setCourseCategoryFilter(cat.id),
									className: cn("px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all border", courseCategoryFilter === cat.id ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card/70 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"),
									children: cat.label
								}, cat.id))
							}),
							filteredIndividualCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-10 border border-dashed border-border rounded-xl bg-card/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-7 h-7 mx-auto text-muted-foreground/60 mb-1.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground text-xs",
										children: "No courses found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: "Try adjusting your search query or filter."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
								children: filteredIndividualCourses.map((product) => {
									const courseId = product.courses?.[0]?.course?.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymmetricalCourseCard, {
										product,
										isPurchased: courseId ? myCourseIds.has(courseId) : false,
										onPurchase: () => handlePurchase(product)
									}, product.id);
								})
							})
						]
					}),
					allAccessProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "all-access",
						className: "scroll-mt-16 border-t border-border/60 pt-6 sm:pt-8 pb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllAccessMasterBanner, {
							product: allAccessProduct,
							isPurchased: allAccessProduct.courses?.length ? allAccessProduct.courses.every((c) => myCourseIds.has(c.course.id)) : false,
							onPurchase: () => handlePurchase(allAccessProduct),
							onViewSyllabus: () => setSelectedBundle(allAccessProduct)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncludedCoursesModal, {
				bundle: selectedBundle,
				isOpen: !!selectedBundle,
				onClose: () => setSelectedBundle(null),
				onPurchase: (bundle) => {
					setSelectedBundle(null);
					handlePurchase(bundle);
				},
				myCourseIds
			})
		]
	});
}
function SymmetricalBundleCard({ bundle, isPurchased, onPurchase, onViewSyllabus }) {
	const { icon: Icon, tint } = getVisualsForProduct(bundle.title);
	const courses = bundle.courses || [];
	const primaryCourseId = courses[0]?.course?.id;
	const highlights = getHighlightsForProduct(bundle.title);
	const discountPercent = bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr ? Math.round((bundle.compareAtPriceInr - bundle.priceInr) / bundle.compareAtPriceInr * 100) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border bg-card text-card-foreground rounded-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: onViewSyllabus,
			className: "relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border/60 cursor-pointer",
			title: "Click to view full curriculum syllabus",
			children: bundle.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bundle.imageUrl,
				alt: bundle.title,
				className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
				loading: "lazy"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("w-full h-full bg-gradient-to-br flex items-center justify-center", tint),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-primary/70" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3.5 flex-1 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-1.5 mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "bg-primary/10 text-primary border-primary/20 text-[10px] font-bold px-1.5 py-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-3 h-3 mr-1" }),
							" ",
							courses.length,
							" Modules"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [discountPercent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							className: "bg-amber-500 text-white font-extrabold text-[10px] px-1.5 py-0.2 shadow-sm",
							children: [
								"Save ",
								discountPercent,
								"%"
							]
						}), isPurchased && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							className: "bg-emerald-600 text-white font-bold text-[10px] px-1.5 py-0.2 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 mr-0.5" }), " Owned"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onViewSyllabus,
					title: bundle.title,
					className: "text-left w-full group/title focus:outline-none mb-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-xs sm:text-sm leading-snug text-foreground group-hover/title:text-primary transition-colors line-clamp-1 group-hover:line-clamp-none",
						children: bundle.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground line-clamp-1 mb-2",
					children: bundle.description || "Comprehensive multi-course career track designed for interview success."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-muted/40 border border-border/60 p-2 rounded-lg mb-2.5 text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Included Topics" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary font-mono",
							children: highlights.label
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0.5 text-[10px] text-foreground/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: highlights.topic1
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: highlights.topic2
							})]
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2 border-t border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-extrabold text-foreground leading-none",
						children: fmt(bundle.priceInr)
					}), bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-muted-foreground line-through font-medium mt-0.5",
						children: fmt(bundle.compareAtPriceInr)
					})] }), isPurchased ? primaryCourseId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-8 px-3 text-xs font-semibold shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							search: { courseId: primaryCourseId },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1 h-3 w-3 fill-current" }), " Open"]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: true,
						size: "sm",
						className: "rounded-lg h-8 px-2.5 text-xs font-medium",
						children: "Owned"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: onPurchase,
						className: "rounded-lg shadow-sm bg-primary text-primary-foreground hover:shadow-md transition-all h-8 px-3 text-xs font-bold",
						children: "Enroll Now"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-emerald-500 font-medium",
						children: "Lifetime Access"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onViewSyllabus,
						className: "text-primary font-semibold hover:underline flex items-center gap-0.5",
						children: [
							"View ",
							courses.length,
							" Courses ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" })
						]
					})]
				})]
			})]
		})]
	});
}
function SymmetricalCourseCard({ product, isPurchased, onPurchase }) {
	const { icon: Icon, tint } = getVisualsForProduct(product.title);
	const primaryCourseId = product.courses?.[0]?.course?.id;
	const highlights = getHighlightsForProduct(product.title);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border bg-card text-card-foreground rounded-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border/60",
			children: primaryCourseId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/courses",
				search: { courseId: primaryCourseId },
				className: "block w-full h-full cursor-pointer",
				title: "Click to preview course curriculum",
				children: product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.imageUrl,
					alt: product.title,
					className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
					loading: "lazy"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("w-full h-full bg-gradient-to-br flex items-center justify-center", tint),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-primary/70" })
				})
			}) : product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.imageUrl,
				alt: product.title,
				className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
				loading: "lazy"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("w-full h-full bg-gradient-to-br flex items-center justify-center", tint),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-primary/70" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3.5 flex-1 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-1.5 mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold",
						children: "Single Module"
					}), isPurchased && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "bg-emerald-600 text-white font-bold text-[10px] px-1.5 py-0.2 shadow-sm border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 mr-0.5" }), " Owned"]
					})]
				}),
				primaryCourseId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/courses",
					search: { courseId: primaryCourseId },
					title: product.title,
					className: "block group/title mb-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-xs sm:text-sm leading-snug text-foreground group-hover/title:text-primary transition-colors line-clamp-1 group-hover:line-clamp-none",
						children: product.title
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					title: product.title,
					className: "font-bold text-xs sm:text-sm leading-snug text-foreground line-clamp-1 group-hover:line-clamp-none mb-1",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground line-clamp-1 mb-2",
					children: product.description || "Master these concepts with visual breakdowns and code solutions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-muted/40 border border-border/60 p-2 rounded-lg mb-2.5 text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Core Topics" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary font-mono",
							children: highlights.label
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0.5 text-[10px] text-foreground/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: highlights.topic1
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: highlights.topic2
							})]
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2 border-t border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-extrabold text-foreground leading-none",
						children: fmt(product.priceInr)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-emerald-500 font-medium mt-0.5",
						children: "Lifetime Access"
					})] }), isPurchased ? primaryCourseId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-8 px-3 text-xs font-semibold shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							search: { courseId: primaryCourseId },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1 h-3 w-3 fill-current" }), " Open"]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: true,
						size: "sm",
						className: "rounded-lg h-8 px-2.5 text-xs font-medium",
						children: "Owned"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: onPurchase,
						className: "rounded-lg shadow-sm bg-primary text-primary-foreground hover:shadow-md transition-all h-8 px-3 text-xs font-bold",
						children: "Buy Now"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Self-Paced"
					}), primaryCourseId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses",
						search: { courseId: primaryCourseId },
						className: "text-primary font-semibold hover:underline flex items-center gap-0.5",
						children: ["Preview Syllabus ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" })]
					})]
				})]
			})]
		})]
	});
}
function AllAccessMasterBanner({ product, isPurchased, onPurchase, onViewSyllabus }) {
	const coursesCount = product.courses?.length || 15;
	const discountPercent = product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr ? Math.round((product.compareAtPriceInr - product.priceInr) / product.compareAtPriceInr * 100) : 50;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative group rounded-2xl overflow-hidden border border-primary/40 bg-gradient-to-br from-card via-card/95 to-primary/10 p-5 sm:p-7 shadow-2xl backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/30 transition-all duration-700" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8 space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-0.5 text-xs font-bold text-primary shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3.5 h-3.5 text-amber-500 fill-amber-500" }), "The Ultimate Engineering Arsenal • All 15 Courses"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight",
							children: "All-Access Lifetime Career Pass"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed",
							children: "Unlock the entire CodeBreakdowns library for life — including the Blind 75, Blind 150, System Design, SQL, Node.js, Python/Django, modern Agentic AI, and both production capstone projects, plus all future updates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs font-medium text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant Lifetime Access to All 15 Courses" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All Future Updates & Modules Included" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Source Code Repositories & Blueprints" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Priority Corporate Hiring Pilot Waitlist Access" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: onViewSyllabus,
								className: "rounded-lg border-border hover:bg-muted text-xs font-semibold h-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5 mr-1.5 text-primary" }),
									" Browse All ",
									coursesCount,
									" Included Modules →"
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "w-full max-w-md p-4 sm:p-5 border border-primary/30 bg-background/90 backdrop-blur-md rounded-xl shadow-xl flex flex-col text-center",
						children: [
							product.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onClick: onViewSyllabus,
								className: "mb-2.5 aspect-[16/9] w-full rounded-lg overflow-hidden border border-border/60 shadow-md cursor-pointer group/pass",
								title: "Click to view all included modules",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.imageUrl,
									alt: product.title,
									className: "w-full h-full object-cover group-hover/pass:scale-105 transition-transform duration-300"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
								children: "Special Launch Pass"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 flex items-baseline justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight",
									children: fmt(product.priceInr)
								}), product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground line-through font-semibold",
									children: fmt(product.compareAtPriceInr)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-block text-[10px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20",
									children: [
										"Save ",
										discountPercent,
										"% • Lifetime Access"
									]
								})
							}),
							isPurchased ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "w-full font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-md h-9 text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/courses",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1.5 h-3.5 w-3.5 fill-current" }), " Go to My Curriculum"]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: onPurchase,
								size: "sm",
								className: "w-full font-bold rounded-lg shadow-lg bg-primary text-primary-foreground hover:shadow-primary/25 hover:scale-[1.02] transition-all text-xs h-9",
								children: ["Get All-Access Pass • ", fmt(product.priceInr)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground mt-1.5",
								children: "One-time payment • No subscription • 100% secure Razorpay checkout"
							})
						]
					})
				})]
			})
		]
	});
}
function IncludedCoursesModal({ bundle, isOpen, onClose, onPurchase, myCourseIds }) {
	if (!bundle) return null;
	const courses = bundle.courses || [];
	const isPurchased = courses.length > 0 && courses.every((c) => myCourseIds.has(c.course.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-2xl max-h-[85vh] flex flex-col p-0 bg-background border-border rounded-2xl shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "p-4 sm:p-5 pb-3 border-b border-border bg-card/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "bg-primary/10 text-primary border-primary/20 text-[10px] font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-3 h-3 mr-1" }),
									" ",
									courses.length,
									" Courses Included"
								]
							}), bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] font-bold",
								children: ["Save ", fmt(bundle.compareAtPriceInr - bundle.priceInr)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg sm:text-xl font-extrabold text-foreground",
							children: bundle.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-xs text-muted-foreground mt-0.5",
							children: bundle.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 sm:p-5 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Syllabus Breakdown" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [courses.length, " Modules"] })]
					}), courses.map(({ course }, idx) => {
						const isCourseOwned = myCourseIds.has(course.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-2.5 sm:p-3 rounded-lg border border-border bg-card/70 hover:border-primary/40 transition-all gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 min-w-0",
								children: [course.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: course.imageUrl,
									alt: course.title,
									className: "w-11 h-7 rounded-md object-cover border border-border/60 shrink-0"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0",
									children: idx + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-xs sm:text-sm text-foreground truncate",
										children: course.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Full curriculum & video breakdowns"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 shrink-0",
								children: [isCourseOwned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20",
									children: "Owned"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									asChild: true,
									className: "h-7 px-2 text-[11px] font-semibold text-primary hover:bg-primary/10 rounded-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/courses",
										search: { courseId: course.id },
										onClick: onClose,
										children: ["Preview ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3 ml-0.5" })]
									})
								})]
							})]
						}, course.id);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "p-3 sm:p-4 border-t border-border bg-card/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-extrabold text-foreground",
							children: fmt(bundle.priceInr)
						}), bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground line-through",
							children: fmt(bundle.compareAtPriceInr)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: onClose,
							className: "rounded-lg text-xs h-8",
							children: "Close"
						}), isPurchased ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs h-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								onClick: onClose,
								children: "Go to Courses →"
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => onPurchase(bundle),
							size: "sm",
							className: "rounded-lg bg-primary text-primary-foreground font-semibold shadow-md text-xs h-8",
							children: ["Buy Bundle • ", fmt(bundle.priceInr)]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { ProductsPage as component };
