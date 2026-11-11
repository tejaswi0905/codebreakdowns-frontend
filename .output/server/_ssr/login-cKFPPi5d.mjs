import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as CodeXml, I as Github, Y as CircleCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as API_BASE_URL } from "./api-DgzOPn4j.mjs";
import { t as useAuthStore } from "./authStore-iwCKHJq-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-cKFPPi5d.js
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex w-1/2 relative bg-black flex-col justify-between overflow-hidden p-12 border-r border-white/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-background to-background opacity-80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-white/[0.02]" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "relative z-10 flex items-center gap-2 hover:opacity-90 transition-opacity",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-5 h-5 text-white" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-xl tracking-tight text-white",
						children: "CodeBreakdowns"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 max-w-md",
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
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-primary" }), " Engineering-First Curriculum"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight",
								children: "Master System Design & Architecture."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base text-muted-foreground font-light leading-relaxed",
								children: "“The modular roadmaps and architectural breakdowns turned vague distributed system concepts into clear intuition I could actually defend in technical rounds.”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-sm font-bold",
									children: "AS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-white",
									children: "Arjun Sharma"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Software Development Engineer"
								})] })]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full lg:w-1/2 flex items-center justify-center p-8 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden absolute inset-0 -z-10 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]" })
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
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center lg:text-left space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "lg:hidden inline-flex items-center justify-center gap-2 mb-8 hover:opacity-90 transition-opacity",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-5 h-5 text-white" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-xl tracking-tight text-foreground",
									children: "CodeBreakdowns"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-bold tracking-tight text-foreground",
								children: "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Sign in with your developer account to access your enrolled courses and roadmaps."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "w-full bg-foreground text-background hover:bg-foreground/90 h-14 font-semibold text-base flex items-center justify-center space-x-3 transition-all hover:scale-[1.01] shadow-md cursor-pointer",
							onClick: handleGithubLogin,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Continue with GitHub" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 bg-muted/30 p-4 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Single Sign-On for Developers" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "text-xs text-muted-foreground space-y-1.5 list-none pl-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-success shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant 1-click authentication via GitHub" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-success shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Zero passwords to remember or reset" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-success shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Secure HTTP-only JWT session management" })]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center lg:text-left text-xs text-muted-foreground pt-4 leading-relaxed",
						children: [
							"By signing in, you agree to CodeBreakdowns's ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden lg:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms-and-conditions",
								className: "underline text-foreground hover:text-primary transition-colors font-medium",
								children: "Terms of Service"
							}),
							" ",
							"and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: "underline text-foreground hover:text-primary transition-colors font-medium",
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
