import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowRight, S as Github, T as CodeXml } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as API_BASE_URL } from "./api-C0X-qdL4.mjs";
import { t as useAuthStore } from "./authStore-C2pVoj2B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-krRmDAyb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { isAuthenticated } = useAuthStore();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (isAuthenticated) navigate({
			to: "/dashboard",
			replace: true
		});
	}, [isAuthenticated, navigate]);
	const handleGithubLogin = () => {
		window.location.href = `${API_BASE_URL}/users/auth/github`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full flex bg-background",
		"data-tsd-source": "/src/routes/login.tsx:29:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex w-1/2 relative bg-black flex-col justify-between overflow-hidden p-12 border-r border-white/5",
			"data-tsd-source": "/src/routes/login.tsx:32:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					"data-tsd-source": "/src/routes/login.tsx:35:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-background to-background opacity-80",
							"data-tsd-source": "/src/routes/login.tsx:36:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px]",
							"data-tsd-source": "/src/routes/login.tsx:37:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-grid-white/[0.02]",
							"data-tsd-source": "/src/routes/login.tsx:40:11"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex items-center gap-2",
					"data-tsd-source": "/src/routes/login.tsx:44:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]",
						"data-tsd-source": "/src/routes/login.tsx:45:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {
							className: "w-5 h-5 text-white",
							"data-tsd-source": "/src/routes/login.tsx:46:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-xl tracking-tight text-white",
						"data-tsd-source": "/src/routes/login.tsx:48:11",
						children: "CodeBreakdowns"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 max-w-md",
					"data-tsd-source": "/src/routes/login.tsx:52:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .2 },
						"data-tsd-source": "/src/routes/login.tsx:53:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-bold tracking-tight text-white mb-6",
								"data-tsd-source": "/src/routes/login.tsx:58:13",
								children: "Master System Design & Architecture."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground font-light leading-relaxed",
								"data-tsd-source": "/src/routes/login.tsx:61:13",
								children: "\"This platform completely changed how I think about large-scale applications. The interactive breakdowns are incredible.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								"data-tsd-source": "/src/routes/login.tsx:64:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold border border-white/20",
									"data-tsd-source": "/src/routes/login.tsx:65:15",
									children: "JD"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/login.tsx:68:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-white",
										"data-tsd-source": "/src/routes/login.tsx:69:17",
										children: "John Doe"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										"data-tsd-source": "/src/routes/login.tsx:70:17",
										children: "Senior Software Engineer"
									})]
								})]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full lg:w-1/2 flex items-center justify-center p-8 relative",
			"data-tsd-source": "/src/routes/login.tsx:78:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden absolute inset-0 -z-10",
				"data-tsd-source": "/src/routes/login.tsx:80:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]",
					"data-tsd-source": "/src/routes/login.tsx:81:11"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .4 },
				className: "w-full max-w-sm space-y-8",
				"data-tsd-source": "/src/routes/login.tsx:84:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center lg:text-left space-y-2",
						"data-tsd-source": "/src/routes/login.tsx:91:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:hidden flex items-center justify-center gap-2 mb-8",
								"data-tsd-source": "/src/routes/login.tsx:93:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]",
									"data-tsd-source": "/src/routes/login.tsx:94:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {
										className: "w-5 h-5 text-white",
										"data-tsd-source": "/src/routes/login.tsx:95:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-xl tracking-tight text-white",
									"data-tsd-source": "/src/routes/login.tsx:97:15",
									children: "CodeBreakdowns"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-bold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/login.tsx:100:13",
								children: "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/login.tsx:101:13",
								children: "Sign in to your account to continue your learning journey."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 pt-4",
						"data-tsd-source": "/src/routes/login.tsx:106:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "w-full bg-white text-black hover:bg-neutral-200 h-14 font-semibold text-base flex items-center justify-center space-x-3 transition-transform hover:scale-[1.02] shadow-lg",
								onClick: handleGithubLogin,
								"data-tsd-source": "/src/routes/login.tsx:107:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
									className: "w-5 h-5",
									"data-tsd-source": "/src/routes/login.tsx:112:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-tsd-source": "/src/routes/login.tsx:113:15",
									children: "Continue with GitHub"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative py-4",
								"data-tsd-source": "/src/routes/login.tsx:116:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center",
									"data-tsd-source": "/src/routes/login.tsx:117:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-full border-t border-white/10",
										"data-tsd-source": "/src/routes/login.tsx:118:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex justify-center text-xs uppercase",
									"data-tsd-source": "/src/routes/login.tsx:120:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-background px-2 text-muted-foreground font-mono",
										"data-tsd-source": "/src/routes/login.tsx:121:17",
										children: "Or secure local login"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								className: "w-full h-14 border-white/10 hover:bg-white/5 font-semibold group flex items-center justify-between px-6",
								disabled: true,
								"data-tsd-source": "/src/routes/login.tsx:126:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"data-tsd-source": "/src/routes/login.tsx:132:15",
									children: "Email login (Coming Soon)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "w-4 h-4 text-muted-foreground opacity-50 group-hover:translate-x-1 transition-transform",
									"data-tsd-source": "/src/routes/login.tsx:133:15"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center lg:text-left text-xs text-muted-foreground pt-8",
						"data-tsd-source": "/src/routes/login.tsx:137:11",
						children: [
							"By clicking continue, you agree to our ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {
								className: "hidden lg:block",
								"data-tsd-source": "/src/routes/login.tsx:138:52"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "underline hover:text-white transition-colors",
								"data-tsd-source": "/src/routes/login.tsx:139:13",
								children: "Terms of Service"
							}),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "underline hover:text-white transition-colors",
								"data-tsd-source": "/src/routes/login.tsx:139:107",
								children: "Privacy Policy"
							}),
							"."
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { LoginPage as component };
