import { s as fetchProducts } from "./api-C0X-qdL4.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { _ as CodeXml, a as Server, d as Layers, h as Database, r as Sparkles } from "../_libs/lucide-react.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-DUOgzUW5.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Bu4m71UV.js
var import_jsx_runtime = require_jsx_runtime();
var fmt = (n) => `₹${n.toLocaleString("en-IN")}`;
var getVisualsForProduct = (title) => {
	const lower = title.toLowerCase();
	if (lower.includes("backend") || lower.includes("system")) return {
		icon: Server,
		tint: "from-emerald-500/15 to-emerald-500/5"
	};
	if (lower.includes("dbms") || lower.includes("database") || lower.includes("sql")) return {
		icon: Database,
		tint: "from-amber-500/15 to-amber-500/5"
	};
	if (lower.includes("150") || lower.includes("advanced") || lower.includes("bundle")) return {
		icon: Layers,
		tint: "from-indigo-500/15 to-indigo-500/5"
	};
	return {
		icon: CodeXml,
		tint: "from-blue-500/15 to-blue-500/5"
	};
};
function ProductsPage() {
	const { data: products, isLoading, error } = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts
	});
	const handlePurchase = (productId) => {
		toast("Checkout flow initializing...");
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 bg-white/10 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 bg-white/5 rounded-xl" }, i))
			})]
		})
	});
	if (error || !products) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold text-foreground",
			children: "Could not load products"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			children: "Please try again later."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight sm:text-3xl",
				children: "Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Browse individual courses and curated bundles."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), " Available Offerings"]
		}), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-12 border border-white/5 rounded-xl bg-black/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-medium",
				children: "Coming Soon"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm mt-1",
				children: "We are actively building our catalog."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				onPurchase: () => handlePurchase(p.id)
			}, p.id))
		})] })]
	});
}
function ProductCard({ product, onPurchase }) {
	const { icon: Icon, tint } = getVisualsForProduct(product.title);
	const isPurchased = false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group flex flex-col overflow-hidden p-0 transition-all hover:-translate-y-0.5 hover:shadow-md border border-white/10 bg-[#0a0a0a]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative h-28 bg-gradient-to-br", tint),
			children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.imageUrl,
				alt: product.title,
				className: "w-full h-full object-cover opacity-80"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-background/80 text-primary shadow-sm backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}), isPurchased]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold leading-tight",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-xs text-muted-foreground",
					children: product.description || "Learn and master these concepts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold",
							children: fmt(product.priceInr)
						}), product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground line-through",
							children: fmt(product.compareAtPriceInr)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4 w-full font-medium",
						variant: "default",
						onClick: onPurchase,
						disabled: isPurchased,
						children: "Buy Now"
					})]
				})
			]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsPage, {}) });
//#endregion
export { SplitComponent as component };
