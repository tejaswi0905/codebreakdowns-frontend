import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { S as useRouter, _ as createFileRoute, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Menu, E as LogOut, F as Github, G as Circle, N as Heart, P as GraduationCap, Q as Check, T as Mail, U as CodeXml, X as ChevronRight, a as User, b as Moon, c as Sun, j as LifeBuoy, o as Twitter, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as useAuthStore } from "./authStore-CaRoAg4M.mjs";
import { t as Route$12 } from "./courses-rGA_26I7.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Route$13 } from "./overview-DbF4Z_LC.mjs";
import { n as AvatarFallback, t as Avatar } from "./avatar-CiQwCJNR.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CHjPcNYO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C7MRBium.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var ThemeCtx = (0, import_react.createContext)({
	theme: "light",
	toggle: () => {},
	setTheme: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const initial = (typeof window !== "undefined" && localStorage.getItem("theme")) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setThemeState(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const setTheme = (t) => {
		setThemeState(t);
		localStorage.setItem("theme", t);
		document.documentElement.classList.toggle("dark", t === "dark");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			theme,
			toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
			setTheme
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeCtx);
var themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function Navbar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, isAuthenticated, isLoading, logout } = useAuthStore();
	const { theme, toggle } = useTheme();
	const activeLinks = [
		{
			to: "/",
			label: "Home"
		},
		...isAuthenticated ? [{
			to: "/dashboard",
			label: "Dashboard"
		}] : [],
		{
			to: "/products",
			label: "Products"
		},
		{
			to: "/#opportunities",
			label: "Opportunities",
			badge: "Soon"
		},
		{
			to: "/about",
			label: "About"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/50 backdrop-blur-md supports-[backdrop-filter]:bg-background/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 font-semibold tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/20 border border-primary/50 text-primary shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[15px] text-foreground",
						children: "CodeBreakdowns"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: activeLinks.map((l) => {
						const isHash = l.to.includes("#");
						const active = isHash ? false : l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
						const className = cn("relative rounded-md px-3 py-2 text-sm font-medium transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent");
						if (isHash) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.to,
							onClick: (e) => {
								if (pathname === "/") {
									e.preventDefault();
									const targetId = l.to.split("#")[1];
									const el = document.getElementById(targetId);
									if (el) {
										const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 76;
										window.scrollTo({
											top: offsetPosition,
											behavior: "smooth"
										});
									}
								}
							},
							className: cn(className, "inline-flex items-center gap-1.5"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }), l.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary border border-primary/20",
								children: l.badge
							})]
						}, l.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className,
							children: [l.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--color-primary),1)]" })]
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-9 h-9 rounded-full bg-muted animate-pulse" }) : isAuthenticated && user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Account menu",
								className: "rounded-full ring-offset-background transition-all hover:ring-2 hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									className: "h-9 w-9 border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
										className: "bg-primary/10 text-sm font-medium text-primary",
										children: user.displayName?.charAt(0) || user.username?.charAt(0) || "U"
									})
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: user.displayName || user.username
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: ["@", user.username]
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/profile",
										className: "cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }), " My Profile"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/dashboard",
										className: "cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mr-2 h-4 w-4" }), " My Purchases"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "mr-2 h-4 w-4" }), " Help & Support"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "text-destructive focus:text-destructive cursor-pointer",
									onClick: () => logout(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), " Logout"]
								})
							]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "default",
							size: "sm",
							className: "hidden md:flex shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: "Sign In"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: toggle,
							className: "rounded-full text-muted-foreground hover:text-foreground",
							"aria-label": "Toggle theme",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							onClick: () => setOpen((o) => !o),
							"aria-label": "Menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "border-t border-border/70 bg-background px-4 py-3 md:hidden space-y-1",
			children: [activeLinks.map((l) => {
				const isHash = l.to.includes("#");
				const className = cn("flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium", (isHash ? false : l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground");
				if (isHash) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: l.to,
					onClick: (e) => {
						setOpen(false);
						if (pathname === "/") {
							e.preventDefault();
							const targetId = l.to.split("#")[1];
							setTimeout(() => {
								const el = document.getElementById(targetId);
								if (el) {
									const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 76;
									window.scrollTo({
										top: offsetPosition,
										behavior: "smooth"
									});
								}
							}, 120);
						}
					},
					className,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }), l.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary border border-primary/20",
						children: l.badge
					})]
				}, l.to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className,
					children: l.label
				}, l.to);
			}), !isAuthenticated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-2 border-t border-border/50 mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "default",
					size: "sm",
					className: "w-full shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						onClick: () => setOpen(false),
						children: "Sign In"
					})
				})
			})]
		})]
	});
}
function Footer() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border dark:border-white/10 bg-background dark:bg-[#070709] text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2 text-foreground font-bold tracking-tight text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary border border-primary/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CodeBreakdowns" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm max-w-sm text-muted-foreground leading-relaxed",
								children: "Master real-world software engineering, systems design, and full-stack architecture with production-grade course breakdowns."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-xs text-muted-foreground/80 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), " Hyderabad, India"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:codebreakdowns@gmail.com",
									className: "flex items-center gap-1.5 text-xs hover:text-foreground transition-colors shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-primary" }), " codebreakdowns@gmail.com"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold text-foreground tracking-wider uppercase",
							children: "Platform"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-foreground transition-colors",
									children: "Home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "hover:text-foreground transition-colors",
									children: "All Courses"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "hover:text-foreground transition-colors",
									children: "Bundles & Products"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "hover:text-foreground transition-colors",
									children: "Pricing"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-foreground transition-colors",
									children: "About Us"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold text-foreground tracking-wider uppercase",
							children: "Legal & Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-foreground transition-colors",
									children: "Contact Us"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy-policy",
									className: "hover:text-foreground transition-colors",
									children: "Privacy Policy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms-and-conditions",
									className: "hover:text-foreground transition-colors",
									children: "Terms & Conditions"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/refund-policy",
									className: "hover:text-foreground transition-colors",
									children: "Refund & Cancellation"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold text-foreground tracking-wider uppercase",
							children: "Community"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/tejaswi0905",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-2 hover:text-foreground transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " GitHub"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://twitter.com",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-2 hover:text-foreground transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-4 w-4" }), " Twitter"]
							}) })]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border-t border-border dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/60 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					currentYear,
					" CodeBreakdowns. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1",
					children: [
						"Built with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 text-red-500 fill-red-500" }),
						" for engineers, by engineers."
					]
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (error instanceof Error) reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CodeBreakdowns — Interview Prep Learning Platform" },
			{
				name: "description",
				content: "Track your interview prep journey, access purchased courses, and stay on top of your learning progress."
			},
			{
				name: "author",
				content: "CodeBreakdowns"
			},
			{
				property: "og:title",
				content: "CodeBreakdowns — Interview Prep Learning Platform"
			},
			{
				property: "og:description",
				content: "Track your interview prep journey, access purchased courses, and stay on top of your learning progress."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "CodeBreakdowns — Interview Prep Learning Platform"
			},
			{
				name: "twitter:description",
				content: "Track your interview prep journey, access purchased courses, and stay on top of your learning progress."
			},
			{
				property: "og:image",
				content: "/og-image.png"
			},
			{
				name: "twitter:image",
				content: "/og-image.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon-v2.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeInitScript } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				src: "https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js",
				async: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	const checkAuth = useAuthStore((state) => state.checkAuth);
	(0, import_react.useEffect)(() => {
		checkAuth();
	}, [checkAuth]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$10 = () => import("./routes-BAnqHATz.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CodeBreakdowns — Crack Tech Interviews & Land Internships" },
		{
			name: "description",
			content: "Master the Blind 75, System Design, SQL, and modern AI engineering patterns with interactive visual breakdowns, step-by-step intuition, and real-world playbooks."
		},
		{
			name: "keywords",
			content: "tech internships, interview preparation, Blind 75, data structures, algorithms, system design, software engineering, leetcode visualizer, software engineer interview prep"
		},
		{
			property: "og:title",
			content: "CodeBreakdowns — Crack Tech Interviews & Land Internships"
		},
		{
			property: "og:description",
			content: "Stop grinding random LeetCode questions. Learn the underlying problem-solving frameworks and mental models required for top tech companies."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: "https://codebreakdowns.in"
		},
		{
			property: "og:image",
			content: "/og-image.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "CodeBreakdowns — Crack Tech Interviews & Land Internships"
		},
		{
			name: "twitter:description",
			content: "Stop grinding random LeetCode questions. Learn the underlying problem-solving frameworks and mental models required for top tech companies."
		},
		{
			name: "twitter:image",
			content: "/og-image.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-CovZs9tx.mjs");
var Route$9 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./contact-CMlm_u2Q.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us — CodeBreakdowns" }, {
		name: "description",
		content: "Get in touch with the CodeBreakdowns team for support, business inquiries, or questions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard-CYiF-pxP.mjs");
var Route$7 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./login-BAzfPNcu.mjs");
var Route$6 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./pricing-DMNuhMh1.mjs");
var Route$5 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing & Plans — CodeBreakdowns" }, {
		name: "description",
		content: "Transparent, lifetime access pricing for software engineering courses and bundles. No hidden subscriptions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-policy-2jPfNlKK.mjs");
var Route$4 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: "Privacy Policy — CodeBreakdowns" }, {
		name: "description",
		content: "Learn how CodeBreakdowns collects, uses, and protects your personal and payment data."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-Dy1ZsKjO.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "Products & Career Bundles — CodeBreakdowns" }, {
		name: "description",
		content: "Browse curated interview prep bundles, individual courses, and the All-Access Lifetime Career Pass."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./profile-DbsV-X-z.mjs");
var Route$2 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "My Profile — CodeBreakdowns" }, {
		name: "description",
		content: "Manage your profile information on CodeBreakdowns."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./refund-policy-3T_qoyzF.mjs");
var Route$1 = createFileRoute("/refund-policy")({
	head: () => ({ meta: [{ title: "Refund & Cancellation Policy — CodeBreakdowns" }, {
		name: "description",
		content: "Review CodeBreakdowns' cancellation and refund terms for digital educational courses and product bundles."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-and-conditions-CNs9PSE2.mjs");
var Route = createFileRoute("/terms-and-conditions")({
	head: () => ({ meta: [{ title: "Terms & Conditions — CodeBreakdowns" }, {
		name: "description",
		content: "Read the Terms and Conditions governing your use of the CodeBreakdowns platform and course content."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute: Route$9.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	CoursesRoute: Route$12.update({
		id: "/courses",
		path: "/courses",
		getParentRoute: () => Route$11
	}),
	DashboardRoute: Route$7.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$11
	}),
	LoginRoute: Route$6.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$11
	}),
	OverviewRoute: Route$13.update({
		id: "/overview",
		path: "/overview",
		getParentRoute: () => Route$11
	}),
	PricingRoute: Route$5.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$11
	}),
	PrivacyPolicyRoute: Route$4.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$11
	}),
	ProductsRoute: Route$3.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$11
	}),
	ProfileRoute: Route$2.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$11
	}),
	RefundPolicyRoute: Route$1.update({
		id: "/refund-policy",
		path: "/refund-policy",
		getParentRoute: () => Route$11
	}),
	TermsAndConditionsRoute: Route.update({
		id: "/terms-and-conditions",
		path: "/terms-and-conditions",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
