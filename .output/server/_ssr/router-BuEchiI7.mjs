import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Circle, N as Check, d as Moon, h as LogOut, j as ChevronRight, o as Sun, p as Menu, r as User, x as GraduationCap, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { t as Route$7 } from "./courses-BBjxE97d.mjs";
import { t as useAuthStore } from "./authStore-C2pVoj2B.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as Route$8 } from "./overview-BNitAT-U.mjs";
import { n as AvatarFallback, t as Avatar } from "./avatar-DpxNuZ9Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BuEchiI7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DVmu--_k.css";
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
		"data-tsd-source": "/src/lib/theme.tsx:39:5",
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
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/dashboard",
		label: "Dashboard"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "#opportunities",
		label: "Opportunities"
	},
	{
		to: "/about",
		label: "About"
	}
];
function Navbar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, isAuthenticated, isLoading, logout } = useAuthStore();
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/50 backdrop-blur-md supports-[backdrop-filter]:bg-background/40",
		"data-tsd-source": "/src/components/Navbar.tsx:50:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
			"data-tsd-source": "/src/components/Navbar.tsx:51:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 font-semibold tracking-tight",
					"data-tsd-source": "/src/components/Navbar.tsx:52:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/20 border border-primary/50 text-primary shadow-sm",
						"data-tsd-source": "/src/components/Navbar.tsx:56:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/components/Navbar.tsx:57:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[15px] text-foreground",
						"data-tsd-source": "/src/components/Navbar.tsx:59:11",
						children: "CodeBreakdowns"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"data-tsd-source": "/src/components/Navbar.tsx:62:9",
					children: [
						{
							to: "/",
							label: "Home"
						},
						{
							to: "/dashboard",
							label: "Dashboard"
						},
						{
							to: "/products",
							label: "Products"
						},
						{
							to: "#opportunities",
							label: "Opportunities"
						},
						{
							to: "/about",
							label: "About"
						}
					].map((l) => {
						const isHash = l.to.startsWith("#");
						const active = isHash ? false : l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
						const className = cn("relative rounded-md px-3 py-2 text-sm font-medium transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent");
						if (isHash) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.to,
							className,
							"data-tsd-source": "/src/components/Navbar.tsx:75:17",
							children: l.label
						}, l.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className,
							"data-tsd-source": "/src/components/Navbar.tsx:82:15",
							children: [l.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--color-primary),1)]",
								"data-tsd-source": "/src/components/Navbar.tsx:89:19"
							})]
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					"data-tsd-source": "/src/components/Navbar.tsx:96:9",
					children: [
						isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-full bg-muted animate-pulse",
							"data-tsd-source": "/src/components/Navbar.tsx:98:13"
						}) : isAuthenticated && user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
							"data-tsd-source": "/src/components/Navbar.tsx:100:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								"data-tsd-source": "/src/components/Navbar.tsx:101:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Account menu",
									className: "rounded-full ring-offset-background transition-all hover:ring-2 hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
									"data-tsd-source": "/src/components/Navbar.tsx:102:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										className: "h-9 w-9 border border-border",
										"data-tsd-source": "/src/components/Navbar.tsx:106:19",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
											className: "bg-primary/10 text-sm font-medium text-primary",
											"data-tsd-source": "/src/components/Navbar.tsx:107:21",
											children: user.displayName?.charAt(0) || user.username?.charAt(0) || "U"
										})
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
								align: "end",
								className: "w-56",
								"data-tsd-source": "/src/components/Navbar.tsx:113:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
										"data-tsd-source": "/src/components/Navbar.tsx:114:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											"data-tsd-source": "/src/components/Navbar.tsx:115:19",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium",
												"data-tsd-source": "/src/components/Navbar.tsx:116:21",
												children: user.displayName || user.username
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground",
												"data-tsd-source": "/src/components/Navbar.tsx:117:21",
												children: ["@", user.username]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/Navbar.tsx:122:17" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										asChild: true,
										"data-tsd-source": "/src/components/Navbar.tsx:123:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/profile",
											className: "cursor-pointer",
											"data-tsd-source": "/src/components/Navbar.tsx:124:19",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
												className: "mr-2 h-4 w-4",
												"data-tsd-source": "/src/components/Navbar.tsx:125:21"
											}), " My Profile"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										asChild: true,
										"data-tsd-source": "/src/components/Navbar.tsx:128:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/dashboard",
											className: "cursor-pointer",
											"data-tsd-source": "/src/components/Navbar.tsx:129:19",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
												className: "mr-2 h-4 w-4",
												"data-tsd-source": "/src/components/Navbar.tsx:130:21"
											}), " My Purchases"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
										"data-tsd-source": "/src/components/Navbar.tsx:133:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
											className: "mr-2 h-4 w-4",
											"data-tsd-source": "/src/components/Navbar.tsx:134:19"
										}), " Help & Support"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/Navbar.tsx:136:17" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
										className: "text-destructive focus:text-destructive cursor-pointer",
										onClick: () => logout(),
										"data-tsd-source": "/src/components/Navbar.tsx:137:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
											className: "mr-2 h-4 w-4",
											"data-tsd-source": "/src/components/Navbar.tsx:141:19"
										}), " Logout"]
									})
								]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "default",
							size: "sm",
							className: "hidden md:flex shadow-sm",
							"data-tsd-source": "/src/components/Navbar.tsx:146:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								"data-tsd-source": "/src/components/Navbar.tsx:147:15",
								children: "Sign In"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: toggle,
							className: "rounded-full text-muted-foreground hover:text-foreground",
							"aria-label": "Toggle theme",
							"data-tsd-source": "/src/components/Navbar.tsx:151:11",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
								className: "h-5 w-5",
								"data-tsd-source": "/src/components/Navbar.tsx:158:33"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
								className: "h-5 w-5",
								"data-tsd-source": "/src/components/Navbar.tsx:158:63"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							onClick: () => setOpen((o) => !o),
							"aria-label": "Menu",
							"data-tsd-source": "/src/components/Navbar.tsx:161:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "h-5 w-5",
								"data-tsd-source": "/src/components/Navbar.tsx:168:13"
							})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border/70 bg-background px-4 py-2 md:hidden",
			"data-tsd-source": "/src/components/Navbar.tsx:174:9",
			children: links.map((l) => {
				const isHash = l.to.startsWith("#");
				const className = cn("block rounded-md px-3 py-2 text-sm font-medium", (isHash ? false : l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground");
				if (isHash) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.to,
					onClick: () => setOpen(false),
					className,
					"data-tsd-source": "/src/components/Navbar.tsx:187:17",
					children: l.label
				}, l.to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className,
					"data-tsd-source": "/src/components/Navbar.tsx:199:15",
					children: l.label
				}, l.to);
			})
		})]
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
		"data-tsd-source": "/src/routes/__root.tsx:21:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:22:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:23:9",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:24:9",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:27:9",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/__root.tsx:30:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:31:11",
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
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:51:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:52:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:53:9",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:56:9",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					"data-tsd-source": "/src/routes/__root.tsx:60:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:61:11",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						"data-tsd-source": "/src/routes/__root.tsx:70:11",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
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
		"data-tsd-source": "/src/routes/__root.tsx:151:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
			"data-tsd-source": "/src/routes/__root.tsx:152:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				dangerouslySetInnerHTML: { __html: themeInitScript },
				"data-tsd-source": "/src/routes/__root.tsx:153:9"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, { "data-tsd-source": "/src/routes/__root.tsx:154:9" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			"data-tsd-source": "/src/routes/__root.tsx:156:7",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, { "data-tsd-source": "/src/routes/__root.tsx:158:9" })]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const checkAuth = useAuthStore((state) => state.checkAuth);
	(0, import_react.useEffect)(() => {
		checkAuth();
	}, [checkAuth]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		"data-tsd-source": "/src/routes/__root.tsx:173:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, {
			"data-tsd-source": "/src/routes/__root.tsx:174:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col bg-background text-foreground",
				"data-tsd-source": "/src/routes/__root.tsx:175:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { "data-tsd-source": "/src/routes/__root.tsx:176:11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					"data-tsd-source": "/src/routes/__root.tsx:177:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, { "data-tsd-source": "/src/routes/__root.tsx:179:13" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { "data-tsd-source": "/src/routes/__root.tsx:182:9" })]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-BqhfcHWX.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./about-CU8kWdu4.mjs");
var Route$4 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard-D2Z6lR36.mjs");
var Route$3 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./login-krRmDAyb.mjs");
var Route$2 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./products-DPahQgAQ.mjs");
var Route$1 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "Products — CodeBreakdowns" }, {
		name: "description",
		content: "Browse and purchase interview prep courses and bundles."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./profile-CjbP7d9O.mjs");
var Route = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "My Profile — CodeBreakdowns" }, {
		name: "description",
		content: "Manage your profile information on CodeBreakdowns."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	CoursesRoute: Route$7.update({
		id: "/courses",
		path: "/courses",
		getParentRoute: () => Route$6
	}),
	DashboardRoute: Route$3.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$6
	}),
	LoginRoute: Route$2.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$6
	}),
	OverviewRoute: Route$8.update({
		id: "/overview",
		path: "/overview",
		getParentRoute: () => Route$6
	}),
	ProductsRoute: Route$1.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$6
	}),
	ProfileRoute: Route.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
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
