import { t as motion } from "../_libs/framer-motion.mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as Blocks, N as ArrowRight, O as Briefcase, _ as Database, k as BrainCircuit, n as Terminal, o as Play, u as Lock, v as CodeXml, w as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Drb_NJJW.js
var import_jsx_runtime = require_jsx_runtime();
var landingFeatures = [
	{
		title: "Master the Core Patterns (Blind 75 & 150)",
		description: "Don't grind 1,000 random problems. Learn the underlying frameworks that solve 90% of technical interview questions.",
		icon: BrainCircuit
	},
	{
		title: "Standout Resume Projects",
		description: "Build actual, end-to-end production systems that recruiters look for, rather than generic to-do apps.",
		icon: Briefcase
	},
	{
		title: "Backend & Systems Depth",
		description: "From essential SQL queries to modern Agentic Development, gain the deep technical knowledge required for top-tier internships.",
		icon: Database
	}
];
var landingStats = [
	{
		value: "10k+",
		label: "Internships Landed"
	},
	{
		value: "Blind 75",
		label: "Core Patterns Covered"
	},
	{
		value: "4.9/5",
		label: "Average Rating"
	}
];
var landingCourses = [
	{
		id: "blind-75",
		title: "Blind 75 Breakdown",
		description: "The absolute foundation. Master the core problem-solving frameworks required for every technical interview.",
		isPremium: false,
		category: "DSA / Interviews",
		icon: Blocks
	},
	{
		id: "blind-150",
		title: "Blind 150 Extension",
		description: "Ready for FAANG? Expand your pattern recognition to tackle the hardest, most complex edge cases.",
		isPremium: true,
		category: "Advanced DSA",
		icon: BrainCircuit
	},
	{
		id: "sql-25",
		title: "Blind SQL 25",
		description: "The 25 critical SQL patterns you must know. From basic aggregations to complex window functions.",
		isPremium: true,
		category: "Backend / Database",
		icon: Database
	},
	{
		id: "backend-essentials",
		title: "Backend Essentials for Interviews",
		description: "Understand the end-to-end flow. Learn APIs, caching, databases, and system design basics.",
		isPremium: true,
		category: "Backend",
		icon: Terminal
	},
	{
		id: "resume-project-1",
		title: "Resume Project: Real-Time Collab",
		description: "Build a production-ready real-time collaboration tool to anchor your resume and impress recruiters.",
		isPremium: true,
		category: "Resume Project",
		icon: CodeXml
	},
	{
		id: "agentic-dev",
		title: "Modern Agentic Development",
		description: "Stay ahead of the curve. Learn how to build and integrate AI agents into modern software systems.",
		isPremium: true,
		category: "Advanced Tech",
		icon: BrainCircuit
	}
];
var fadeUpVariant = {
	hidden: {
		opacity: 0,
		y: 15
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			ease: "easeOut"
		}
	}
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 max-w-7xl mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: staggerContainer,
						initial: "hidden",
						animate: "visible",
						className: "flex flex-col items-start text-left lg:pr-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: fadeUpVariant,
								className: "mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" }), "Your Blueprint for Tech Internships & Dev Roles"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: fadeUpVariant,
								className: "text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]",
								children: ["Crack Your Tech Interviews and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Land the Internship."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeUpVariant,
								className: "text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed",
								children: "Landing a top-tier tech internship isn't about blindly grinding 1,000 random LeetCode problems. We break down the Blind 75 & 150, essential backend concepts, and real-world resume projects into structured playbooks so you build the mental models required to succeed."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeUpVariant,
								className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									asChild: true,
									className: "rounded-lg px-8 h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/courses",
										children: ["Start the Playbook", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-5 w-5" })]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .2,
							ease: "easeOut"
						},
						className: "relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border bg-card flex items-center justify-center group cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex flex-col items-center justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
												className: "w-6 h-6 text-primary-foreground ml-1",
												fill: "currentColor"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-foreground",
										children: "Watch a breakdown"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Blind 75: Two Sum Pattern"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4 h-12 bg-background/80 backdrop-blur-sm rounded-lg border border-border flex items-center px-4 space-x-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 space-y-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1.5 w-full bg-border rounded-full overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-1/3 bg-primary rounded-full" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-mono text-muted-foreground",
										children: "08:45 / 22:10"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto px-6 py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center",
						children: landingStats.map((stat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl font-extrabold text-foreground",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-muted-foreground uppercase tracking-wider",
								children: stat.label
							})]
						}, idx))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-24 px-6 max-w-7xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16 max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold mb-4 text-foreground",
						children: "Why This Approach Works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground",
						children: "We focus on structured learning and pattern recognition, bridging the gap between theoretical algorithms and passing the actual interview."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8",
					children: landingFeatures.map((feature, idx) => {
						const Icon = feature.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-8 border-border bg-card hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold mb-3 text-foreground",
									children: feature.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed",
									children: feature.description
								})
							]
						}, idx);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 px-6 bg-card/30 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold mb-4 text-foreground",
							children: "The Complete Roadmap"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground max-w-xl",
							children: "Everything you need to secure the internship and excel in your first role."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							asChild: true,
							className: "hover:bg-transparent hover:text-primary p-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/courses",
								className: "flex items-center text-foreground font-medium",
								children: ["View all content ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 w-4 h-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: landingCourses.map((course) => {
							const Icon = course.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								className: "group h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "h-full flex flex-col overflow-hidden border-border bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 pb-0 flex justify-between items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-md bg-secondary flex items-center justify-center border border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-muted-foreground" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-end gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "bg-background/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-md border border-border",
												children: course.category
											}), course.isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center text-muted-foreground text-xs font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3 mr-1" }), " Premium"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-success text-xs font-semibold",
												children: "Free Trial"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 flex flex-col flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors",
												children: course.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-sm flex-1 leading-relaxed",
												children: course.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 pt-4 border-t border-border flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors",
												children: ["Explore module ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 w-4 h-4" })]
											})
										]
									})]
								})
							}, course.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-background border-t border-border py-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center mb-4 md:mb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-foreground text-lg mr-2",
							children: "Codebreakdowns."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" All rights reserved."
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex space-x-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-foreground transition-colors",
								children: "Twitter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-foreground transition-colors",
								children: "YouTube"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-foreground transition-colors",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-foreground transition-colors",
								children: "Privacy"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { LandingPage as component };
