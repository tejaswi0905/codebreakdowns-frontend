import { a as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { i as fetchCourses } from "./api-C0X-qdL4.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CodeXml, a as Server, g as Cpu, h as Database, i as Shield, k as ArrowRight, n as Terminal, r as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CmAjEVea.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fadeUpVariant = {
	hidden: {
		opacity: 0,
		y: 15
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: .3 }
	}
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .05 }
	}
};
function LandingPage() {
	const [courses, setCourses] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		fetchCourses().then(setCourses).catch(console.error).finally(() => setLoading(false));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-screen relative overflow-hidden bg-background bg-grid-white/[0.03]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] opacity-40 pointer-events-none -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: staggerContainer,
						initial: "hidden",
						animate: "visible",
						className: "flex flex-col items-start text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: fadeUpVariant,
								className: "mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.2)] backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next-Gen Engineering Platform" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: fadeUpVariant,
								className: "text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "Architect "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50",
									children: "Better Systems."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeUpVariant,
								className: "text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light",
								children: "Stop watching tutorials. Start building mental models. Deep-dive video breakdowns, interactive architecture diagrams, and real-world system design challenges."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeUpVariant,
								className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									asChild: true,
									className: "rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_25px_rgba(var(--color-primary),0.4)] hover:shadow-[0_0_35px_rgba(var(--color-primary),0.6)] hover:-translate-y-1 transition-all bg-primary text-primary-foreground hover:bg-primary/90 group border-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/courses",
										children: ["Initialize _", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 20,
							rotateY: 5
						},
						animate: {
							opacity: 1,
							x: 0,
							rotateY: 0
						},
						transition: {
							duration: .4,
							ease: "easeOut"
						},
						className: "relative lg:block",
						style: { perspective: "1000px" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-[80px] -z-10 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "overflow-hidden border-white/10 bg-[#0d1117]/80 backdrop-blur-xl shadow-2xl shadow-black/50 transform rotate-1 hover:rotate-0 transition-transform duration-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center px-4 py-3 bg-black/40 border-b border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex space-x-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-green-500/80" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto text-xs text-muted-foreground font-mono",
									children: "system_architecture.ts"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "1"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400",
												children: "import"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-yellow-300",
												children: `{ Cache, Database }`
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400",
												children: "from"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-green-400",
												children: "'@core/infra'"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: ";"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "2"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400",
												children: "class"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-yellow-300",
												children: "DistributedSystem"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: `{`
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground ml-4",
												children: "private"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-blue-400",
												children: "db"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: ": Database;"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "5"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground ml-4",
												children: "private"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-blue-400",
												children: "cache"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: ": Cache;"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "6"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "7"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground ml-4",
												children: "async"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-blue-400",
												children: "resolveQuery"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-foreground",
												children: ["(req: Request): Promise<Response> ", `{`]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "8"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground ml-8",
											children: "// 1. Check ultra-fast Redis cache"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "9"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400 ml-8",
												children: "const"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "cached ="
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400",
												children: "await"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "this.cache.get(req.id);"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "10"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400 ml-8",
												children: "if"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "(cached)"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400",
												children: "return"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "cached;"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "11"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "12"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground ml-8",
											children: "// 2. Fallback to read-replica DB"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "13"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400 ml-8",
												children: "const"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "data ="
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400",
												children: "await"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "this.db.query(req);"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground mr-4",
												children: "14"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-purple-400 ml-8",
												children: "return"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: "data;"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "15"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground ml-4",
											children: `}`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "16"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: `}`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mr-4",
											children: "17"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-5 bg-primary animate-pulse" })]
									})
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-white/5 bg-background/50 backdrop-blur-md overflow-hidden py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tracking-widest text-muted-foreground uppercase",
						children: "Core Technologies Explored"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full flex overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "flex whitespace-nowrap space-x-12 px-6 items-center",
							animate: { x: ["0%", "-50%"] },
							transition: {
								repeat: Infinity,
								ease: "linear",
								duration: 30
							},
							children: [...Array(2)].map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex space-x-16 items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold",
											children: "Node.js"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold",
											children: "PostgreSQL"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold",
											children: "Redis"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold",
											children: "React"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold",
											children: "System Design"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold",
											children: "Go"
										})]
									})
								]
							}, idx))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-24 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .3 },
						viewport: { once: true },
						className: "flex items-center justify-between mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight mb-2",
							children: "Systems Catalog"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground font-mono text-sm",
							children: "Select a module to initialize learning sequence."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							asChild: true,
							className: "hidden sm:inline-flex hover:text-primary hover:bg-primary/10 font-mono",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/courses",
								children: ["cd ./all-courses ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: [
							1,
							2,
							3,
							4
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80 animate-pulse bg-muted/20 rounded-xl border border-white/5" }, i))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: staggerContainer,
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: courses.map((course) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: {
									hidden: {
										opacity: 0,
										scale: .98
									},
									visible: {
										opacity: 1,
										scale: 1,
										transition: { duration: .2 }
									}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "group block h-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.15)] border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl hover:border-primary/50 relative flex flex-col",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-3 z-20",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex space-x-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/30" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/30" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/30" })
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative bg-black/50 border-white/5 flex flex-col justify-end p-6 overflow-hidden pt-12 aspect-[16/9] border-b",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-white/[0.04] bg-[length:16px_16px]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute top-10 right-4 z-20",
														children: course.isFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded shadow-lg border border-success/20",
															children: "STATUS: OPEN"
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono bg-background/80 text-foreground text-[10px] font-bold px-2 py-1 rounded shadow-lg border border-white/10",
															children: "STATUS: LOCKED"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "relative z-20 transform group-hover:scale-110 transition-transform duration-500",
														children: course.title.toLowerCase().includes("backend") || course.title.toLowerCase().includes("dbms") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-12 w-12 text-primary opacity-80" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-12 w-12 text-primary opacity-80" })
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-6 md:pt-8 relative z-10 flex flex-col justify-between flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "font-mono text-xs text-primary/70 mb-2",
														children: ["~/", course.id]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-xl font-bold mb-3 group-hover:text-primary transition-colors tracking-tight",
														children: course.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-muted-foreground text-sm line-clamp-3 leading-relaxed",
														children: course.description || "In-depth architectural breakdown and implementation guide. Master the underlying systems and patterns."
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-6 font-mono text-xs text-muted-foreground border-t border-white/5 pt-4 flex justify-between items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: `> initialize_module()` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "group-hover:translate-x-1 group-hover:text-primary transition-all",
														children: "_"
													})]
												})]
											})
										]
									})
								})
							}, course.id);
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { LandingPage as component };
