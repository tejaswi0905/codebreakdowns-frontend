import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { T as CodeXml, b as Layers, c as Server, s as Sparkles, w as Database } from "../_libs/lucide-react.mjs";
import { s as fetchProducts } from "./api-C0X-qdL4.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-w8xJ0Iul.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DPahQgAQ.js
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
		"data-tsd-source": "/src/routes/products.tsx:69:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-8",
			"data-tsd-source": "/src/routes/products.tsx:70:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-8 w-48 bg-white/10 rounded",
				"data-tsd-source": "/src/routes/products.tsx:71:11"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				"data-tsd-source": "/src/routes/products.tsx:72:11",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64 bg-white/5 rounded-xl",
					"data-tsd-source": "/src/routes/products.tsx:74:15"
				}, i))
			})]
		})
	});
	if (error || !products) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/products.tsx:84:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold text-foreground",
			"data-tsd-source": "/src/routes/products.tsx:85:9",
			children: "Could not load products"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			"data-tsd-source": "/src/routes/products.tsx:86:9",
			children: "Please try again later."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		"data-tsd-source": "/src/routes/products.tsx:92:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			"data-tsd-source": "/src/routes/products.tsx:93:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight sm:text-3xl",
				"data-tsd-source": "/src/routes/products.tsx:94:9",
				children: "Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/products.tsx:97:9",
				children: "Browse individual courses and curated bundles."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"data-tsd-source": "/src/routes/products.tsx:102:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2",
				"data-tsd-source": "/src/routes/products.tsx:103:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					className: "h-4 w-4 text-primary",
					"data-tsd-source": "/src/routes/products.tsx:104:11"
				}), " Available Offerings"]
			}), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-12 border border-white/5 rounded-xl bg-black/20",
				"data-tsd-source": "/src/routes/products.tsx:107:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-medium",
					"data-tsd-source": "/src/routes/products.tsx:108:13",
					children: "Coming Soon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					"data-tsd-source": "/src/routes/products.tsx:109:13",
					children: "We are actively building our catalog."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				"data-tsd-source": "/src/routes/products.tsx:112:11",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					onPurchase: () => handlePurchase(p.id),
					"data-tsd-source": "/src/routes/products.tsx:114:15"
				}, p.id))
			})]
		})]
	});
}
function ProductCard({ product, onPurchase }) {
	const { icon: Icon, tint } = getVisualsForProduct(product.title);
	const isPurchased = false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group flex flex-col overflow-hidden p-0 transition-all hover:-translate-y-0.5 hover:shadow-md border border-white/10 bg-[#0a0a0a]",
		"data-tsd-source": "/src/routes/products.tsx:130:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative h-28 bg-gradient-to-br", tint),
			"data-tsd-source": "/src/routes/products.tsx:131:7",
			children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.imageUrl,
				alt: product.title,
				className: "w-full h-full object-cover opacity-80",
				"data-tsd-source": "/src/routes/products.tsx:133:11"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-background/80 text-primary shadow-sm backdrop-blur",
				"data-tsd-source": "/src/routes/products.tsx:135:11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5",
					"data-tsd-source": "/src/routes/products.tsx:136:13"
				})
			}), isPurchased]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			"data-tsd-source": "/src/routes/products.tsx:149:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold leading-tight",
					"data-tsd-source": "/src/routes/products.tsx:150:9",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-xs text-muted-foreground",
					"data-tsd-source": "/src/routes/products.tsx:151:9",
					children: product.description || "Learn and master these concepts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pt-6",
					"data-tsd-source": "/src/routes/products.tsx:155:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						"data-tsd-source": "/src/routes/products.tsx:156:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold",
							"data-tsd-source": "/src/routes/products.tsx:157:13",
							children: fmt(product.priceInr)
						}), product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground line-through",
							"data-tsd-source": "/src/routes/products.tsx:159:15",
							children: fmt(product.compareAtPriceInr)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4 w-full font-medium",
						variant: "default",
						onClick: onPurchase,
						disabled: isPurchased,
						"data-tsd-source": "/src/routes/products.tsx:164:11",
						children: "Buy Now"
					})]
				})
			]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
	"data-tsd-source": "/src/routes/products.tsx:31:5",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsPage, { "data-tsd-source": "/src/routes/products.tsx:32:7" })
});
//#endregion
export { SplitComponent as component };
