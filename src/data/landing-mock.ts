import { Code2, Briefcase, Database, BrainCircuit, Blocks, Terminal } from "lucide-react";

export const landingFeatures = [
  {
    title: "Master the Core Patterns (Blind 75 & 150)",
    description: "Don't grind 1,000 random problems. Learn the underlying frameworks that solve 90% of technical interview questions.",
    icon: BrainCircuit,
  },
  {
    title: "Standout Resume Projects",
    description: "Build actual, end-to-end production systems that recruiters look for, rather than generic to-do apps.",
    icon: Briefcase,
  },
  {
    title: "Backend & Systems Depth",
    description: "From essential SQL queries to modern Agentic Development, gain the deep technical knowledge required for top-tier internships.",
    icon: Database,
  },
];

export const landingStats = [
  { value: "10k+", label: "Internships Landed" },
  { value: "Blind 75", label: "Core Patterns Covered" },
  { value: "4.9/5", label: "Average Rating" },
];

export const landingCourses = [
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
    icon: Code2
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
