import { Code2, Video, Blocks, Layout, Zap, Users } from "lucide-react";

export const landingFeatures = [
  {
    title: "Deep-Dive Video Breakdowns",
    description: "Don't just look at code. Watch experienced engineers break down the reasoning, architecture, and edge cases line by line.",
    icon: Video,
  },
  {
    title: "Interactive System Design",
    description: "Build mental models of complex systems. Explore architectures from the database layer all the way to the frontend UI.",
    icon: Blocks,
  },
  {
    title: "Real-World Engineering",
    description: "No more 'todo app' tutorials. Learn how to structure scalable, production-ready applications using modern patterns.",
    icon: Code2,
  },
];

export const landingStats = [
  { value: "10k+", label: "Engineers Upskilled" },
  { value: "50+", label: "Deep-Dive Breakdowns" },
  { value: "4.9/5", label: "Average Rating" },
];

export const landingCourses = [
  {
    id: "frontend-architecture",
    title: "Advanced Frontend Architecture",
    description: "Master React, state management, and large-scale component design. Build UIs that scale effortlessly.",
    isPremium: true,
    category: "Architecture",
  },
  {
    id: "system-design-basics",
    title: "Practical System Design",
    description: "Learn how to design scalable backend systems, databases, and APIs without the theoretical fluff.",
    isPremium: false,
    category: "Backend",
  },
  {
    id: "modern-css-patterns",
    title: "Modern CSS & UI Patterns",
    description: "Stop wrestling with CSS. Learn the systematic approach to building beautiful, accessible user interfaces.",
    isPremium: true,
    category: "UI/UX",
  },
];
