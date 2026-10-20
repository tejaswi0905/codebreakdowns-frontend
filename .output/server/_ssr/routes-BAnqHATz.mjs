import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Lightbulb, B as Database, D as Lock, F as Github, H as Copy, K as CircleQuestionMark, M as Layers, Q as Check, U as CodeXml, W as Clock, X as ChevronRight, at as Blocks, et as Building2, f as ShieldCheck, g as RotateCcw, i as Users, it as BookOpen, nt as BrainCircuit, ot as Bell, p as Server, q as CircleCheck, s as Terminal, st as ArrowRight, t as Zap, tt as Briefcase, u as Sparkles, y as Play } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as fetchCourses } from "./api-BUiRiYXp.mjs";
import { t as useAuthStore } from "./authStore-CaRoAg4M.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CwLzEEob.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BAnqHATz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var landingStats = [
	{
		value: "Curated",
		label: "Structured Course Playbooks"
	},
	{
		value: "Blind 75 & 150",
		label: "Core Patterns Covered"
	},
	{
		value: "4.9/5",
		label: "Average Student Rating"
	}
];
var landingCourses = [
	{
		id: "blind-75",
		title: "Blind 75 Breakdown",
		description: "The absolute foundation. Master the core problem-solving frameworks required for every technical interview.",
		isPremium: false,
		category: "DSA / Interviews",
		icon: Blocks,
		difficulty: "Beginner",
		lessonsCount: "75 Lessons",
		durationHours: "18h video",
		tags: [
			"Two Pointers",
			"Sliding Window",
			"Trees",
			"Binary Search"
		]
	},
	{
		id: "blind-150",
		title: "Blind 150 Extension",
		description: "Ready for FAANG? Expand your pattern recognition to tackle the hardest, most complex edge cases.",
		isPremium: true,
		category: "Advanced DSA",
		icon: BrainCircuit,
		difficulty: "Advanced",
		lessonsCount: "75 Extra Patterns",
		durationHours: "22h video",
		tags: [
			"Graphs",
			"DP State Machines",
			"Tries",
			"Backtracking"
		]
	},
	{
		id: "sql-25",
		title: "Blind SQL 25",
		description: "The 25 critical SQL patterns you must know. From basic aggregations to complex window functions.",
		isPremium: true,
		category: "Backend / Database",
		icon: Database,
		difficulty: "Intermediate",
		lessonsCount: "25 Deep Dives",
		durationHours: "6h video",
		tags: [
			"Window Functions",
			"CTEs",
			"B-Tree Indexes",
			"Execution Plans"
		]
	},
	{
		id: "backend-essentials",
		title: "Backend Essentials for Interviews",
		description: "Understand the end-to-end flow. Learn APIs, caching, databases, and system design basics.",
		isPremium: true,
		category: "Backend",
		icon: Terminal,
		difficulty: "Intermediate",
		lessonsCount: "16 System Modules",
		durationHours: "12h video",
		tags: [
			"REST/gRPC",
			"Redis Caching",
			"Idempotency",
			"Rate Limiting"
		]
	},
	{
		id: "resume-project-1",
		title: "Resume Project: Real-Time Collab",
		description: "Build a production-ready real-time collaboration tool to anchor your resume and impress recruiters.",
		isPremium: true,
		category: "Resume Project",
		icon: CodeXml,
		difficulty: "Advanced",
		lessonsCount: "Full Architecture",
		durationHours: "15h project",
		tags: [
			"WebSockets",
			"CRDTs",
			"Postgres",
			"Docker"
		]
	},
	{
		id: "agentic-dev",
		title: "Modern Agentic Development",
		description: "Stay ahead of the curve. Learn how to build and integrate AI agents into modern software systems.",
		isPremium: true,
		category: "Advanced Tech",
		icon: BrainCircuit,
		difficulty: "Advanced",
		lessonsCount: "6 Agent Pipelines",
		durationHours: "10h video",
		tags: [
			"RAG",
			"Vector Search",
			"Tool Calling",
			"Token Budgets"
		]
	}
];
function GoogleLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
				fill: "#4285F4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
				fill: "#34A853"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z",
				fill: "#FBBC05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z",
				fill: "#EA4335"
			})
		]
	});
}
function MetaLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 4.35c-2.3 0-4.32 1.05-5.65 2.68C4.7 4.95 2.5 4.35 1 4.35 0 4.35 0 5.5 0 6.15c0 3.65 2.65 8.7 6.1 8.7 2.2 0 4.15-1.45 5.9-3.7 1.75 2.25 3.7 3.7 5.9 3.7 3.45 0 6.1-5.05 6.1-8.7 0-.65 0-1.8-1-1.8-1.5 0-3.7.6-5.35 2.68C16.32 5.4 14.3 4.35 12 4.35zm0 2.2c1.7 0 3.25 1.1 4.3 2.85-1.2 1.95-2.6 3.75-4.3 5.4-1.7-1.65-3.1-3.45-4.3-5.4 1.05-1.75 2.6-2.85 4.3-2.85zm-7.25.75c.95 0 2.05.5 3.05 1.6-1.15 1.9-2.2 3.8-3.05 5.55-1.95 0-3.35-3.1-3.35-5.5 0-.85.35-1.65 1.4-1.65h1.95zm14.5 0c1.05 0 1.4.8 1.4 1.65 0 2.4-1.4 5.5-3.35 5.5-.85-1.75-1.9-3.65-3.05-5.55 1-1.1 2.1-1.6 3.05-1.6h1.95z",
			fill: "#0081FB"
		})
	});
}
function MicrosoftLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "10.5",
				height: "10.5",
				fill: "#F25022"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12.5",
				y: "1",
				width: "10.5",
				height: "10.5",
				fill: "#7FBA00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "12.5",
				width: "10.5",
				height: "10.5",
				fill: "#00A4EF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12.5",
				y: "12.5",
				width: "10.5",
				height: "10.5",
				fill: "#FFB900"
			})
		]
	});
}
function AmazonLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13.84 14.53c-1.8 1.34-4.35 2.05-6.62 2.05-3.18 0-6.05-1.23-8.22-3.29-.17-.16-.02-.38.19-.26 2.34 1.34 5.2 2.14 8.16 2.14 2.02 0 4.24-.55 6.27-1.69.31-.17.54.12.22.35v.7z",
				fill: "#FF9900"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14.97 13.56c-.23-.29-1.5-.14-2.07-.07-.17.02-.2-.12-.05-.22 1-.72 2.65-.51 2.85-.26.2.25-.05 1.91-.98 2.73-.14.12-.28.06-.21-.1.22-.52.69-1.79.46-2.08z",
				fill: "#FF9900"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.9 6.25c-.24 1.37-.12 2.67.29 3.97.09.28-.08.41-.31.25-.97-.68-1.54-1.73-1.69-2.91-.25-1.92.74-3.56 2.47-4.14 1.45-.48 2.86-.06 3.65 1.15.54.83.63 1.87.35 2.84-.52 1.83-2.12 3.09-4.01 3.14-.32.01-.44-.22-.24-.39 1.15-.99 1.81-2.26 1.74-3.8-.07-1.59-1.04-2.43-2.25-2.11-1.03.27-1.6 1.19-1.35 2.45l1.35-.44z" })
		]
	});
}
function AppleLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.02.63-2.66 1.39-.57.66-.99 1.76-.85 2.81 1.03.08 2.02-.53 2.57-1.27z" })
	});
}
function NetflixLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5.398 0v24c1.073-.24 2.148-.48 3.223-.68V8.783L15.378 24c1.07-.16 2.14-.3 3.224-.4V0h-3.224v15.217L8.621 0H5.398z",
			fill: "#E50914"
		})
	});
}
function UberLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-extrabold tracking-tighter text-lg font-sans",
		children: "Uber"
	});
}
function StripeLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-extrabold tracking-tight text-lg italic font-sans text-[#635BFF]",
		children: "stripe"
	});
}
function AtlassianLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11.69 13.07c-.43.51-.78 1.22-1.01 2.05-.59 2.11-.27 4.54.89 6.88H5.2c-.41 0-.69-.43-.51-.8 1.63-3.32 3.8-6.19 7-8.13z",
			fill: "#0052CC"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12.44 2.88c-.41-.53-1.23-.27-1.27.4-.18 3.21 1.13 6.39 3.75 9.17 1.57 1.67 3.65 3.32 6.13 4.88.45.28.95-.16.82-.67-1.12-4.52-4.37-9.52-9.43-13.78z",
			fill: "#2684FF"
		})]
	});
}
function TargetEmployersSection() {
	const employers = [
		{
			name: "Google",
			component: GoogleLogo,
			tag: "DSA + Systems"
		},
		{
			name: "Meta",
			component: MetaLogo,
			tag: "E4/E5 Bar"
		},
		{
			name: "Microsoft",
			component: MicrosoftLogo,
			tag: "Cloud & Microservices"
		},
		{
			name: "Amazon",
			component: AmazonLogo,
			tag: "LP + Distributed Design"
		},
		{
			name: "Apple",
			component: AppleLogo,
			tag: "Core Systems"
		},
		{
			name: "Netflix",
			component: NetflixLogo,
			tag: "High Concurrency"
		},
		{
			name: "Uber",
			component: UberLogo,
			tag: "Real-Time Arch"
		},
		{
			name: "Stripe",
			component: StripeLogo,
			tag: "API & Reliability"
		},
		{
			name: "Atlassian",
			component: AtlassianLogo,
			tag: "Enterprise Scale"
		}
	];
	const pillars = [
		{
			step: "01",
			badge: "The Screening Gate",
			title: "Data Structures & Algorithms",
			subtitle: "Pattern Intuition Over Memorization",
			accent: "text-primary border-primary/30 bg-primary/10",
			icon: CodeXml,
			whyItMatters: "Every MAANG screening begins with a 45-minute live coding round. Interviewers reject candidates who write slow O(N²) brute-force solutions or get paralyzed by edge cases.",
			whatWeDeliver: [
				"Blind 75 & 150 Core Patterns (Two Pointers, Sliding Window, Monotonic Deques)",
				"Instant pattern recognition: identify the underlying mental model in 3 minutes",
				"Bug-free coding cadence under pressure with optimal O(1) extra space"
			],
			outcome: "Clears technical phone screens and algorithmic screening bars consistently."
		},
		{
			step: "02",
			badge: "The Engineering Bar",
			title: "System Design & Distributed Backends",
			subtitle: "Proving You Can Build at Real Scale",
			accent: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
			icon: Server,
			whyItMatters: "Anyone can reverse a linked list, but can you design a resilient multi-tenant backend? Top companies evaluate whether you grasp database indexing, caching strategies, and concurrency locks.",
			whatWeDeliver: [
				"Distributed backend architecture (APIs, Redis caching, message streaming)",
				"SQL 25 mastery: window functions, ACID isolation levels, query execution plans",
				"Resume-ready collaborative systems (WebSockets, CRDTs, optimistic UI updates)"
			],
			outcome: "Proves senior engineering maturity and eliminates the 'junior developer' stigma."
		},
		{
			step: "03",
			badge: "The 2026 Competitive Moat",
			title: "AI Application Knowledge",
			subtitle: "The Modern Multiplier Top Teams Demand",
			accent: "text-amber-500 border-amber-500/30 bg-amber-500/10",
			icon: Sparkles,
			whyItMatters: "The industry has fundamentally transformed. Modern tech firms are aggressively injecting AI into their pipelines. Candidates who understand RAG, embeddings, and autonomous agent loops stand out from 99% of applicants.",
			whatWeDeliver: [
				"Hands-on Agentic Development: Tool calling, stateful agents, memory loops",
				"Vector embeddings, semantic search, and hybrid vector/SQL retrieval",
				"Production AI engineering: latency budgets, fallback retries, token economics"
			],
			outcome: "Positions you as a forward-thinking engineer ready to build modern software."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-16 sm:py-24 border-b border-border bg-gradient-to-b from-card/30 via-background to-card/20 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3.5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 mr-2 shrink-0" }), "Target Hiring Standards • MAANG & High-Growth Tech"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight",
							children: "Crack MAANG & Tier-1 Tech Interviews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: [
								"The interview bar at companies like Google, Meta, Microsoft, and Amazon has evolved. Hiring committees don't just look for LeetCode memorizers—they look for engineers who master the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "DSA + System Design + AI Application"
								}),
								" triad."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-16 sm:mb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-widest text-muted-foreground/80",
							children: "Students preparing for engineering bars at"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-marquee flex items-center gap-6 sm:gap-10",
							children: [...employers, ...employers].map((emp, index) => {
								const LogoComp = emp.component;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 bg-card/80 border border-border/80 hover:border-primary/40 px-5 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md shrink-0 group backdrop-blur-sm cursor-default",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform duration-200",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoComp, { className: "w-6 h-6 sm:w-7 sm:h-7" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs sm:text-sm font-bold text-foreground tracking-tight",
											children: emp.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground font-medium",
											children: emp.tag
										})]
									})]
								}, `${emp.name}-${index}`);
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10 sm:mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-primary" }), " The Modern Interview Trifecta"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl sm:text-3xl font-extrabold text-foreground tracking-tight",
							children: "Why You Need All Three To Stand Out"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed",
							children: "Grinding only algorithms leaves you stranded in architecture rounds. Learning only backend leaves you failing the initial screening. Here is how our curriculum covers the complete spectrum."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8",
					children: pillars.map((pillar) => {
						const Icon = pillar.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "relative flex flex-col justify-between p-6 sm:p-8 bg-card border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl group overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 right-4 text-4xl sm:text-5xl font-black text-muted/20 select-none pointer-events-none group-hover:text-primary/10 transition-colors",
									children: pillar.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm ${pillar.accent}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground block",
											children: pillar.badge
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-foreground/80",
											children: pillar.subtitle
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-lg sm:text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors",
										children: pillar.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-xl bg-secondary/50 border border-border/70 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-bold text-foreground block mb-1 uppercase tracking-wider flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-primary" }), " Why Top Tech Tests This:"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: pillar.whyItMatters
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2.5 mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-foreground block uppercase tracking-wider",
											children: "What CodeBreakdowns Builds:"
										}), pillar.whatWeDeliver.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, idx))]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-normal",
										children: "Target Outcome:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-right text-[11px] text-primary",
										children: pillar.outcome
									})]
								})
							]
						}, pillar.step);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						asChild: true,
						className: "rounded-xl px-7 h-12 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							children: ["Explore The Complete Curriculum", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						asChild: true,
						className: "rounded-xl px-6 h-12 font-semibold w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: "View Available Bundles"
						})
					})]
				})
			]
		})]
	});
}
function HowItWorksSection() {
	const [activeStage, setActiveStage] = (0, import_react.useState)("stepthrough");
	const [patternTab, setPatternTab] = (0, import_react.useState)("hashset");
	const sampleArray = [
		2,
		7,
		11,
		2
	];
	const steps = [
		{
			index: 0,
			val: 2,
			seen: [2],
			isDuplicate: false,
			explanation: "Pointer at index 0 (val = 2). Hash set is empty. Insert 2 into seen. Continue search."
		},
		{
			index: 1,
			val: 7,
			seen: [2, 7],
			isDuplicate: false,
			explanation: "Pointer at index 1 (val = 7). Check seen.has(7) → false. Insert 7. Set now contains {2, 7}."
		},
		{
			index: 2,
			val: 11,
			seen: [
				2,
				7,
				11
			],
			isDuplicate: false,
			explanation: "Pointer at index 2 (val = 11). Check seen.has(11) → false. Insert 11. Set now contains {2, 7, 11}."
		},
		{
			index: 3,
			val: 2,
			seen: [
				2,
				7,
				11
			],
			isDuplicate: true,
			explanation: "Pointer at index 3 (val = 2). Check seen.has(2) → TRUE! Duplicate found! Early return true."
		}
	];
	const [currentStepIndex, setCurrentStepIndex] = (0, import_react.useState)(0);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [activeLang, setActiveLang] = (0, import_react.useState)("ts");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let timer;
		if (isPlaying) timer = setInterval(() => {
			setCurrentStepIndex((prev) => {
				if (prev >= steps.length - 1) {
					setIsPlaying(false);
					return prev;
				}
				return prev + 1;
			});
		}, 1600);
		return () => clearInterval(timer);
	}, [isPlaying, steps.length]);
	const currentStep = steps[currentStepIndex];
	const handleCopyCode = (text) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const codeSnippets = {
		ts: `function containsDuplicate(nums: number[]): boolean {
  // Set gives O(1) average lookup time
  const seen = new Set<number>();

  for (const n of nums) {
    if (seen.has(n)) {
      return true; // Early termination: duplicate found
    }
    seen.add(n);
  }

  return false; // All elements unique
}`,
		py: `def containsDuplicate(nums: list[int]) -> bool:
    # Hash set gives O(1) average lookup
    seen = set()

    for n in nums:
        if n in seen:
            return True  # Early termination: duplicate found
        seen.add(n)

    return False  # All elements unique`,
		go: `func containsDuplicate(nums []int) bool {
    // Map used as hash set for O(1) lookups
    seen := make(map[int]struct{}, len(nums))

    for _, n := range nums {
        if _, exists := seen[n]; exists {
            return true // Early return
        }
        seen[n] = struct{}{}
    }

    return false
}`
	};
	const stages = [
		{
			id: "intuition",
			step: "01",
			icon: Lightbulb,
			title: "Pattern Intuition",
			shortDesc: "Recognize the core mental model in the first 2 minutes instead of brute-forcing.",
			badge: "Mental Model"
		},
		{
			id: "stepthrough",
			step: "02",
			icon: Play,
			title: "Visual Step-Through",
			shortDesc: "Trace pointers, memory mutations, and edge cases frame-by-frame.",
			badge: "Interactive Trace"
		},
		{
			id: "code",
			step: "03",
			icon: Terminal,
			title: "Production Implementation",
			shortDesc: "Write clean, idiomatic code with optimal O(1) extra space and zero fluff.",
			badge: "Engineering Bar"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3.5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-2 shrink-0" }), "The CodeBreakdowns Methodology"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight",
						children: "How It Works: The 3-Stage Breakdown"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Rote memorization fails the moment an interviewer tweaks a constraint. We train your pattern recognition through a proven 3-stage visual architecture."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex lg:hidden gap-2 p-1.5 bg-card border border-border rounded-xl mb-6 overflow-x-auto custom-scrollbar",
				children: stages.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveStage(s.id),
						className: cn("flex-1 min-w-[110px] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shrink-0", activeStage === s.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.title.split(" ")[0] })]
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 flex flex-col gap-4",
					children: stages.map((stage) => {
						const Icon = stage.icon;
						const isActive = activeStage === stage.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setActiveStage(stage.id),
							className: cn("p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group text-left", isActive ? "bg-card border-primary/50 shadow-md ring-1 ring-primary/20" : "bg-card/60 border-border hover:border-border/90 hover:bg-card/90"),
							children: [
								isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 bottom-0 w-1.5 bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("w-8 h-8 rounded-lg flex items-center justify-center border text-xs font-bold transition-colors", isActive ? "bg-primary/15 text-primary border-primary/30" : "bg-secondary text-muted-foreground border-border group-hover:text-foreground"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: ["Stage ", stage.step]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: cn("text-[10px] font-semibold px-2 py-0.5", isActive ? "bg-primary/10 text-primary border-primary/20" : "text-muted-foreground"),
										children: stage.badge
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: cn("text-base sm:text-lg font-bold mb-1.5 transition-colors", isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"),
									children: stage.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: stage.shortDesc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3.5 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore interactive demo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5 ml-1" })]
								})
							]
						}, stage.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7 flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "w-full bg-card border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
										children: "Live Interactive Demonstration"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-mono font-medium text-foreground bg-secondary px-2.5 py-1 rounded-md border border-border",
									children: "Problem: Contains Duplicate (LC #217)"
								})]
							}),
							activeStage === "intuition" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-6 flex-1 flex flex-col justify-center animate-in fade-in duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 p-1 bg-secondary rounded-xl mb-6 max-w-sm mx-auto w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setPatternTab("bruteforce"),
										className: cn("flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all", patternTab === "bruteforce" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
										children: "Brute Force (Flawed)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setPatternTab("hashset"),
										className: cn("flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all", patternTab === "hashset" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
										children: "Hash Set Pattern (Optimal)"
									})]
								}), patternTab === "bruteforce" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-destructive uppercase tracking-wider",
												children: "Nested Loops Approach"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "destructive",
												className: "text-[10px]",
												children: "O(N²) Time Complexity"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: [
												"Comparing every element with every other element using two nested loops (",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "text-foreground font-mono",
													children: "for i in range(N): for j in range(i+1, N)"
												}),
												")."
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl bg-secondary/50 border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground uppercase font-bold block mb-1",
													children: "Comparisons for N = 1,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-extrabold text-destructive font-mono",
													children: "500,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block mt-0.5",
													children: "Will trigger Time Limit Exceeded (TLE)"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl bg-secondary/50 border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground uppercase font-bold block mb-1",
													children: "Interview Verdict"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-destructive flex items-center gap-1 mt-1",
													children: "Reject (Fails Scale)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block mt-0.5",
													children: "Shows lack of algorithmic intuition"
												})
											]
										})]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-emerald-500 uppercase tracking-wider",
												children: "Pattern Intuition: Hash Set"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-emerald-500 text-white text-[10px]",
												children: "O(N) Optimal Time"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: "Trade a small amount of memory ($O(N)$ space) for constant time ($O(1)$) lookups. As we iterate once, we check whether we have already encountered the number."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl bg-secondary/50 border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground uppercase font-bold block mb-1",
													children: "Comparisons for N = 1,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-extrabold text-emerald-500 font-mono",
													children: "1,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block mt-0.5",
													children: "500x faster than brute force"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5 rounded-xl bg-secondary/50 border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground uppercase font-bold block mb-1",
													children: "Interview Verdict"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-emerald-500 flex items-center gap-1 mt-1",
													children: "Pass (Strong Hire)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block mt-0.5",
													children: "Optimal mental model identified"
												})
											]
										})]
									})]
								})]
							}),
							activeStage === "stepthrough" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-6 flex-1 flex flex-col justify-center animate-in fade-in duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-left mb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground font-medium mb-1",
											children: ["Input Array: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
												className: "font-mono text-foreground font-bold",
												children: "[ 2, 7, 11, 2 ]"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center gap-2.5 sm:gap-4 mb-6",
										children: sampleArray.map((val, idx) => {
											const isCurrent = idx === currentStep.index;
											const isProcessed = idx < currentStep.index;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-mono text-muted-foreground mb-1",
														children: ["i = ", idx]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: cn("w-12 h-14 sm:w-16 sm:h-16 rounded-xl border-2 flex items-center justify-center text-lg sm:text-xl font-bold font-mono transition-all duration-300", isCurrent ? currentStep.isDuplicate ? "bg-destructive/15 border-destructive text-destructive scale-105 shadow-md ring-2 ring-destructive/30" : "bg-primary/15 border-primary text-primary scale-105 shadow-md ring-2 ring-primary/30" : isProcessed ? "bg-secondary/70 border-border text-foreground/80" : "bg-background border-dashed border-border text-muted-foreground opacity-60"),
														children: val
													}),
													isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("text-[10px] font-bold mt-1.5 px-1.5 py-0.5 rounded", currentStep.isDuplicate ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"),
														children: currentStep.isDuplicate ? "Duplicate!" : "Current"
													})
												]
											}, idx);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 sm:p-4 rounded-xl bg-secondary/40 border border-border mb-4 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-3.5 h-3.5 text-primary" }),
													" Memory State: Hash Set (",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
														className: "text-foreground font-mono",
														children: "seen"
													}),
													")"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-mono font-bold text-primary",
												children: ["Size: ", currentStep.seen.length]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "seen = "
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-lg shadow-inner",
												children: currentStep.seen.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground italic text-xs",
													children: "∅ (empty)"
												}) : currentStep.seen.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-primary/10 text-primary px-2 py-0.5 rounded font-bold",
													children: item
												}, idx))
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 rounded-lg bg-card border border-border/80 text-left mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-foreground font-medium leading-relaxed",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-primary mr-1.5",
												children: [
													"Step ",
													currentStepIndex + 1,
													" of ",
													steps.length,
													":"
												]
											}), currentStep.explanation]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												onClick: () => {
													setIsPlaying(false);
													setCurrentStepIndex((prev) => Math.max(0, prev - 1));
												},
												disabled: currentStepIndex === 0,
												className: "rounded-lg text-xs",
												children: "← Previous"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												onClick: () => {
													setIsPlaying(false);
													setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1));
												},
												disabled: currentStepIndex === steps.length - 1,
												className: "rounded-lg text-xs font-semibold text-primary hover:text-primary",
												children: "Next Step →"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => {
													if (currentStepIndex === steps.length - 1) setCurrentStepIndex(0);
													setIsPlaying(!isPlaying);
												},
												className: "rounded-lg text-xs",
												children: isPlaying ? "Pause" : "Auto-Play"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												onClick: () => {
													setIsPlaying(false);
													setCurrentStepIndex(0);
												},
												className: "h-8 w-8 rounded-lg",
												title: "Reset trace",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3.5 h-3.5" })
											})]
										})]
									})
								]
							}),
							activeStage === "code" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-4 flex-1 flex flex-col animate-in fade-in duration-300 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1.5 bg-secondary p-1 rounded-lg",
											children: [
												"ts",
												"py",
												"go"
											].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveLang(lang),
												className: cn("px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors", activeLang === lang ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
												children: lang === "ts" ? "TypeScript" : lang === "py" ? "Python" : "Go"
											}, lang))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleCopyCode(codeSnippets[activeLang]),
											className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border bg-card",
											children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-emerald-500 font-medium",
												children: "Copied"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })] })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-border bg-[#121316] text-[#e1e4e8] p-4 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: codeSnippets[activeLang] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground font-medium",
												children: "Time Complexity"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono font-bold text-emerald-500",
												children: "O(N) Single Pass"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground font-medium",
												children: "Space Complexity"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono font-bold text-primary",
												children: "O(N) Extra Memory"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 mt-auto border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium",
									children: [
										"Stage ",
										stages.findIndex((s) => s.id === activeStage) + 1,
										" of 3"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5",
									children: stages.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveStage(s.id),
										"aria-label": `Jump to stage ${s.title}`,
										className: cn("w-2.5 h-2.5 rounded-full transition-all", activeStage === s.id ? "w-6 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60")
									}, s.id))
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs sm:text-sm text-muted-foreground mb-4",
					children: [
						"Experience this structured, visual walkthrough across all ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-bold",
							children: "Blind 75 & 150"
						}),
						" questions."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					className: "rounded-xl px-7 h-12 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses",
						children: ["Try A Sample Lesson in the Curriculum", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
					})
				})]
			})
		]
	});
}
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3.5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "w-3.5 h-3.5 mr-2 shrink-0" }), "Got Questions? We've Got Answers"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3 leading-tight",
						children: "Frequently Asked Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Everything you need to know about our curriculum, lifetime access, supported languages, and technical interview preparation."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-card border border-border rounded-2xl p-4 sm:p-8 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					defaultValue: "faq-1",
					className: "w-full space-y-2",
					children: [
						{
							id: "faq-1",
							question: "How is CodeBreakdowns different from grinding LeetCode directly?",
							answer: "LeetCode gives you problem statements and isolated discussion threads, but doesn't teach you the mental models needed when an interviewer modifies constraints. CodeBreakdowns deconstructs problems into core structural patterns (Two Pointers, Sliding Window, Monotonic Stacks, DP state machines). Instead of memorizing 1,000 disconnected questions, you master the underlying blueprints that solve 90% of interview loops, combined with distributed system design and real-world backend depth."
						},
						{
							id: "faq-2",
							question: "Do I get lifetime access to the courses and future updates?",
							answer: "Yes! Every course or bundle purchase includes full lifetime access. You pay once and own the material permanently. You will automatically receive all future problem breakdowns, revised pattern playbooks, and newly released lessons at zero additional cost—no recurring monthly subscriptions."
						},
						{
							id: "faq-3",
							question: "What programming languages are supported in the breakdowns?",
							answer: "Our visual walkthroughs focus on language-agnostic mental models and spatial intuition. For implementations, we provide clean, production-grade solutions in TypeScript/JavaScript, Python, and Go/Java. Each code breakdown includes optimal time/space complexity analysis and highlights language-specific nuances (like hash set operations, memory layout, and slicing overhead)."
						},
						{
							id: "faq-4",
							question: "What are the prerequisites for the backend and system design courses?",
							answer: "Basic proficiency in any programming language (variables, loops, basic functions) is all you need. We start with foundational principles—HTTP protocols, database tables, and REST contracts—before progressively advancing into production topics like Redis caching, WebSockets, ACID transaction locks, and modern AI agent pipelines."
						},
						{
							id: "faq-5",
							question: "Can I explore the curriculum before purchasing?",
							answer: "Absolutely! Our complete curriculum tree (courses, chapters, and lesson outlines) is 100% public and open for guests to browse. You can review every topic, read prerequisites and learning objectives, and watch free sample lessons (such as Contains Duplicate in Blind 75) before deciding to purchase."
						},
						{
							id: "faq-6",
							question: "What is your refund and support policy?",
							answer: "We are committed to helping you succeed in your technical interviews. If you encounter any technical issues or find that the material isn't suited to your current learning stage, reach out to our team at codebreakdowns@gmail.com within 7 days of purchase, and we will happily review your request per our refund policy."
						}
					].map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: faq.id,
						className: "border border-border/80 rounded-xl px-4 sm:px-6 bg-background/50 hover:bg-background/80 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-bold text-sm sm:text-base text-foreground py-4 hover:no-underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pr-4",
								children: faq.question
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4",
							children: faq.answer
						})]
					}, faq.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs sm:text-sm text-muted-foreground",
					children: [
						"Still have questions? Reach out to our team at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:codebreakdowns@gmail.com",
							className: "text-primary hover:underline font-semibold",
							children: "codebreakdowns@gmail.com"
						})
					]
				})
			})
		]
	});
}
function ConversionBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-3xl overflow-hidden border border-border/80 bg-gradient-to-br from-card via-card/95 to-primary/10 p-8 sm:p-14 shadow-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 mr-2 shrink-0" }), "Lifetime Access • Zero Subscriptions"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-[1.15]",
							children: [
								"Stop Grinding Blindly. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:inline" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Start Building Mental Models."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed",
							children: "Gain the structured intuition needed to crack the Blind 75, design distributed backend systems, and stand out in tier-1 technical interview loops. Pay once, own it forever."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								className: "w-full sm:w-auto rounded-xl px-8 h-12 sm:h-14 font-semibold text-sm sm:text-base shadow-xl bg-primary text-primary-foreground hover:shadow-primary/20 hover:scale-[1.02] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products",
									className: "flex items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4 sm:h-5 sm:w-5" }),
										"Unlock Full Access",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 sm:h-5 sm:w-5" })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								className: "w-full sm:w-auto rounded-xl px-7 h-12 sm:h-14 font-semibold text-sm sm:text-base hover:bg-foreground/5 transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "flex items-center justify-center",
									children: "Browse Curriculum Syllabus"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-border/60 w-full text-xs text-muted-foreground font-medium",
							children: [
								"Instant 1-Click Access",
								"No Monthly Subscriptions",
								"Lifetime Updates Included",
								"Real-World Production Code"
							].map((perk, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: perk })]
							}, idx))
						})
					]
				})
			]
		})
	});
}
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
	const [isVideoModalOpen, setIsVideoModalOpen] = (0, import_react.useState)(false);
	const { data: dbCourses, isLoading: isCoursesLoading } = useQuery({
		queryKey: ["public-courses"],
		queryFn: fetchCourses,
		staleTime: 300 * 1e3
	});
	const coursesList = (0, import_react.useMemo)(() => {
		if (!dbCourses || dbCourses.length === 0) return landingCourses;
		return landingCourses.map((mockCourse) => {
			const matched = dbCourses.find((c) => c.id === mockCourse.id || mockCourse.id === "blind-75" && c.title.toLowerCase().includes("test course") || c.title.toLowerCase().includes(mockCourse.title.toLowerCase().slice(0, 8)));
			if (matched) return {
				...mockCourse,
				dbId: matched.id,
				title: matched.title || mockCourse.title,
				description: matched.description || mockCourse.description
			};
			return mockCourse;
		});
	}, [dbCourses]);
	(0, import_react.useEffect)(() => {
		if (window.location.hash) {
			const targetId = window.location.hash.replace("#", "");
			const el = document.getElementById(targetId);
			if (el) setTimeout(() => {
				const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 76;
				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth"
				});
			}, 150);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-4 sm:px-6 pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: staggerContainer,
							initial: "hidden",
							animate: "visible",
							className: "flex flex-col items-start text-left lg:pr-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: fadeUpVariant,
									className: "mb-5 sm:mb-6 inline-flex max-w-full items-center rounded-full border border-border bg-card/70 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground shadow-sm backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2 mr-2.5 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-semibold tracking-wide",
										children: "Your Blueprint for Tech Internships & Dev Roles"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
									variants: fadeUpVariant,
									className: "text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 sm:mb-6 text-foreground leading-[1.08] break-words",
									children: [
										"Crack Your Tech Interviews and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-gradient-to-r from-primary via-indigo-500 to-sky-400 bg-clip-text text-transparent",
											children: "Land the Internship."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeUpVariant,
									className: "text-base sm:text-lg text-muted-foreground max-w-xl mb-7 sm:mb-10 leading-relaxed font-normal",
									children: "Landing a top-tier tech internship isn't about blindly grinding 1,000 random LeetCode problems. We break down the Blind 75, backend systems, and production projects into structured visual playbooks so you build the mental models that interviewers actually test for."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: fadeUpVariant,
									className: "flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										asChild: true,
										className: "w-full sm:w-auto rounded-xl px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all bg-primary text-primary-foreground hover:scale-[1.02]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/courses",
											className: "flex items-center justify-center",
											children: ["Start the Playbook", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 sm:h-5 sm:w-5" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "lg",
										onClick: () => setIsVideoModalOpen(true),
										className: "w-full sm:w-auto rounded-xl px-6 h-12 sm:h-14 text-sm sm:text-base font-semibold border-border hover:bg-card/80 transition-all text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-2 h-4 w-4 fill-primary text-primary" }), "Watch Breakdown Preview"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							className: "relative group w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-primary/30 via-indigo-500/25 to-sky-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => setIsVideoModalOpen(true),
								className: "relative rounded-2xl overflow-hidden border border-border/80 bg-card/95 shadow-2xl backdrop-blur-xl cursor-pointer hover:border-primary/60 transition-all duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-9 sm:h-10 bg-muted/70 border-b border-border/70 px-3.5 sm:px-4 flex items-center justify-between text-xs select-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-sm" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-sm" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-sm" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-muted-foreground font-mono text-[11px] sm:text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground/80 font-medium",
													children: "blind-75"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary font-semibold",
													children: "contains-duplicate.ts"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Ready to Play"]
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative min-h-[270px] sm:aspect-video w-full bg-[#0b0f17] flex items-center justify-center overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 p-5 font-mono text-[11px] sm:text-xs text-zinc-600/30 select-none pointer-events-none overflow-hidden leading-relaxed",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-primary/40",
													children: "// Pattern: Optimal Hash Set Tradeoff"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "function containsDuplicate(nums: number[]): boolean {" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "pl-4",
													children: "const seen = new Set<number>();"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "pl-4",
													children: "for (const num of nums) {"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "pl-8",
													children: "if (seen.has(num)) return true; // Early exit O(1)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "pl-8",
													children: "seen.add(num);"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "pl-4",
													children: "}"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "pl-4",
													children: "return false; // Time O(N), Space O(N)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "}" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 z-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												className: "bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 shadow-md",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1 h-3 w-3" }), " Free Video Breakdown"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "bg-black/60 text-white/90 border-white/20 text-[10px] sm:text-xs backdrop-blur-sm hidden sm:inline-flex",
												children: "19:24 Full Duration"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative z-10 flex flex-col items-center justify-center text-center px-4 py-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative mb-3 group-hover:scale-110 transition-transform duration-300",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-full bg-primary/30 blur-md animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl text-primary-foreground group-hover:bg-primary/95 transition-colors",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
															className: "w-6 h-6 sm:w-8 sm:h-8 ml-1",
															fill: "currentColor"
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-bold text-base sm:text-xl text-white tracking-tight drop-shadow-sm",
													children: "Contains Duplicate"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs sm:text-sm text-zinc-300 mt-1 max-w-xs drop-shadow-sm",
													children: "Watch the complete pattern intuition, $O(N^2) \\rightarrow O(N)$ refactor, and dry run"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 h-11 sm:h-12 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center px-3.5 sm:px-4 space-x-3 shadow-lg z-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/30",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5 fill-current ml-0.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-1.5 w-full bg-white/20 rounded-full overflow-hidden",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/5 bg-primary rounded-full" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between text-[10px] font-mono text-zinc-400",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "07:42" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "19:24" })]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] sm:text-xs font-mono font-medium text-white/90 bg-white/10 px-2.5 py-1 rounded-md border border-white/10 shrink-0 group-hover:border-primary/40 group-hover:text-primary transition-colors",
													children: "Watch Now →"
												})
											]
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
							open: isVideoModalOpen,
							onOpenChange: setIsVideoModalOpen,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "max-w-4xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 bg-background border-border rounded-2xl shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 sm:p-5 border-b border-border bg-card/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pr-12",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2 mb-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "secondary",
														className: "bg-primary/10 text-primary border-primary/20 text-xs font-semibold",
														children: "Free Sample Breakdown"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "text-xs font-medium",
														children: "Blind 75 • LeetCode #217"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-muted-foreground font-medium",
														children: "19 mins"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
												className: "text-base sm:text-xl font-bold text-foreground",
												children: "Contains Duplicate — Pattern & Implementation Breakdown"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
												className: "text-xs sm:text-sm text-muted-foreground mt-0.5",
												children: "Step-by-step intuition, brute force vs sorting vs hash set tradeoffs, and optimal implementation."
											})
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative aspect-video w-full bg-black",
										children: isVideoModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											src: "https://iframe.mediadelivery.net/embed/728335/83faebaf-4ac3-4aa2-9233-ae6448e1461e?autoplay=true&loop=false&muted=false&preload=true",
											loading: "lazy",
											className: "w-full h-full border-0 absolute inset-0",
											allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",
											allowFullScreen: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 sm:p-5 bg-card/60 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs sm:text-sm font-semibold text-foreground",
												children: "Ready to master the rest of Blind 75?"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] sm:text-xs text-muted-foreground",
												children: "Get instant lifetime access to all 75 visual breakdowns and interview playbooks."
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												className: "rounded-xl px-4 sm:px-5 font-semibold bg-primary text-primary-foreground shadow-md w-full sm:w-auto",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/products",
													onClick: () => setIsVideoModalOpen(false),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" }), " Unlock All 75 Problems"]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "outline",
												size: "sm",
												className: "rounded-xl text-xs w-full sm:w-auto",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/courses",
													onClick: () => setIsVideoModalOpen(false),
													children: "Browse Syllabus →"
												})
											})]
										})]
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card/40 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border/60 text-center",
						children: landingStats.map((stat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-5 sm:py-0 sm:px-6 flex flex-col items-center justify-center space-y-1 sm:space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider",
								children: stat.label
							})]
						}, idx))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetEmployersSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorksSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 bg-card/30 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-3.5 h-3.5" }), "Curriculum Breakdown"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight",
								children: "The Complete Roadmap"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base text-muted-foreground max-w-xl mt-2 leading-relaxed",
								children: "Structured playbooks covering algorithms, high-concurrency systems, and portfolio projects that top tech teams look for."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							asChild: true,
							className: "hover:bg-transparent hover:text-primary p-0 self-start sm:self-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/courses",
								className: "flex items-center text-foreground font-semibold text-sm",
								children: ["View full curriculum syllabus ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 w-4 h-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
						children: coursesList.map((course) => {
							const Icon = course.icon;
							const difficultyBadgeClass = course.difficulty === "Beginner" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" : course.difficulty === "Intermediate" ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								search: course.dbId ? { courseId: course.dbId } : void 0,
								className: "group h-full flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "h-full w-full flex flex-col justify-between overflow-hidden border-border bg-card/90 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 rounded-2xl relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6 pb-4 flex justify-between items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-end gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border", difficultyBadgeClass),
													children: course.difficulty
												}), course.isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center text-muted-foreground text-[11px] font-medium",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3 mr-1" }), " Premium"]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-emerald-500 text-[11px] font-semibold flex items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 mr-1" }), " Free Access"]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "px-6 py-2 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-2 mb-2 text-xs text-muted-foreground font-mono",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground/75 font-medium",
														children: course.category
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug",
													children: course.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-4",
													children: course.description
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap gap-1.5 mb-4",
													children: course.tags.map((tag, tIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-mono bg-muted/70 text-muted-foreground border border-border/70 px-2 py-0.5 rounded-md",
														children: tag
													}, tIdx))
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "px-6 pb-6 pt-3 border-t border-border/70 flex flex-col gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 font-medium",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5 text-primary" }),
														" ",
														course.lessonsCount
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 font-medium",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5 text-muted-foreground" }),
														" ",
														course.durationHours
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs font-semibold text-primary pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore module" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
											})]
										})
									]
								})
							}, course.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunitiesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversionBanner, {})
		]
	});
}
function OpportunitiesSection() {
	const { user, isAuthenticated } = useAuthStore();
	const [notified, setNotified] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isAuthenticated && user) {
			const key = `codebreakdowns_opps_notified_${user.username || user._id}`;
			if (localStorage.getItem(key) === "true") setNotified(true);
		}
	}, [isAuthenticated, user]);
	const handleNotifyMe = () => {
		if (!isAuthenticated || !user) return;
		const key = `codebreakdowns_opps_notified_${user.username || user._id}`;
		localStorage.setItem(key, "true");
		setNotified(true);
		toast.success("You're on the priority hiring waitlist! 🎉", { description: "We will notify your registered account as soon as the first corporate partner roles open up." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "opportunities",
		className: "scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 border-t border-border bg-gradient-to-b from-background via-card/25 to-background relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3 sm:mb-4 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-3.5 h-3.5 mr-2 shrink-0" }), "Partner Network • Active Corporate Pilots"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3 sm:mb-4 leading-tight",
							children: ["Direct Introductions to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Engineering Teams"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: "We are actively finalizing direct hiring partnerships with high-growth startups and tech companies. CodeBreakdowns students who complete our core playbooks get fast-tracked into real interview loops."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16",
					children: [
						{
							icon: Users,
							title: "Warm Referral Fast-Track",
							description: "Skip the automated ATS resume black hole. Our partner engineers and vetted alumni refer top students directly to engineering hiring managers."
						},
						{
							icon: Building2,
							title: "Curated Candidate Showcases",
							description: "Partner companies review student project implementations, code breakdowns, and problem streaks directly on platform."
						},
						{
							icon: Sparkles,
							title: "Senior Code & Resume Audits",
							description: "Get your GitHub repositories, system architectures, and resumes critiqued by engineers who have interviewed candidates at top tech companies."
						}
					].map((pillar, idx) => {
						const Icon = pillar.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "p-6 sm:p-8 border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-5 sm:mb-6 shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base sm:text-lg font-bold mb-2.5 text-foreground",
									children: pillar.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
									children: pillar.description
								})
							] })
						}, idx);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "max-w-2xl mx-auto p-6 sm:p-10 border-border bg-card/60 backdrop-blur-md shadow-xl rounded-2xl text-center relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" }), isAuthenticated ? notified ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg sm:text-xl font-bold text-foreground mb-1",
								children: "You're On The Priority Waitlist"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground max-w-md mb-5 leading-relaxed",
								children: [
									"We have registered your account (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground",
										children: ["@", user?.username]
									}),
									"). As soon as partner company openings drop, you'll be among the first to receive invitation links and referral passes."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), " Notification Active"]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg sm:text-xl font-bold text-foreground mb-2",
								children: "Be Notified When Openings Drop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed",
								children: [
									"You're signed in as ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground",
										children: ["@", user?.username]
									}),
									". Click below to add yourself to the priority notification queue with one click."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleNotifyMe,
								size: "lg",
								className: "w-full sm:w-auto rounded-xl px-6 sm:px-8 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mr-2 h-4 w-4" }), " Notify Me When Partner Roles Open"]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg sm:text-xl font-bold text-foreground mb-2",
								children: "Priority Access for Registered Students"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed",
								children: "Partner companies will hire directly from our registered student cohort. Sign in with GitHub to claim your spot on the priority early-access notification list."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "w-full sm:w-auto rounded-xl px-6 sm:px-8 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/login",
									className: "flex items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" }),
										" Sign In to Get Priority Access ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 shrink-0" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-4",
								children: "Instant 1-click GitHub authentication • No spam, ever."
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { LandingPage as component };
