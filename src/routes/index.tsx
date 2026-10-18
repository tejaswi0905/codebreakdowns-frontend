import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  ArrowRight, 
  ChevronRight, 
  Lock, 
  Play, 
  Briefcase, 
  Users, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Bell, 
  Github,
  Clock,
  BookOpen,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion, Variants } from "framer-motion";
import { landingStats, landingCourses, type LandingCourseItem } from "../data/landing-mock";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { fetchCourses, type ApiCourse } from "@/services/api";
import { TargetEmployersSection } from "@/components/TargetEmployersSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FaqSection } from "@/components/FaqSection";
import { ConversionBanner } from "@/components/ConversionBanner";

// Item 14: Route-Specific SEO Head Tags
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CodeBreakdowns — Crack Tech Interviews & Land Internships",
      },
      {
        name: "description",
        content:
          "Master the Blind 75, System Design, SQL, and modern AI engineering patterns with interactive visual breakdowns, step-by-step intuition, and real-world playbooks.",
      },
      {
        name: "keywords",
        content:
          "tech internships, interview preparation, Blind 75, data structures, algorithms, system design, software engineering, leetcode visualizer, software engineer interview prep",
      },
      // OpenGraph
      {
        property: "og:title",
        content: "CodeBreakdowns — Crack Tech Interviews & Land Internships",
      },
      {
        property: "og:description",
        content:
          "Stop grinding random LeetCode questions. Learn the underlying problem-solving frameworks and mental models required for top tech companies.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://codebreakdowns.in",
      },
      {
        property: "og:image",
        content: "/og-image.png",
      },
      // Twitter Card
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "CodeBreakdowns — Crack Tech Interviews & Land Internships",
      },
      {
        name: "twitter:description",
        content:
          "Stop grinding random LeetCode questions. Learn the underlying problem-solving frameworks and mental models required for top tech companies.",
      },
      {
        name: "twitter:image",
        content: "/og-image.png",
      },
    ],
  }),
  component: LandingPage,
});

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function LandingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Item 13: Backend Data Synchronization with Graceful Fallback
  const { data: dbCourses, isLoading: isCoursesLoading } = useQuery<ApiCourse[]>({
    queryKey: ["public-courses"],
    queryFn: fetchCourses,
    staleTime: 5 * 60 * 1000,
  });

  // Merge backend data with rich mock metadata
  const coursesList: LandingCourseItem[] = useMemo(() => {
    if (!dbCourses || dbCourses.length === 0) {
      return landingCourses;
    }
    return landingCourses.map((mockCourse) => {
      const matched = dbCourses.find(
        (c) =>
          c.id === mockCourse.id ||
          (mockCourse.id === "blind-75" && c.title.toLowerCase().includes("test course")) ||
          c.title.toLowerCase().includes(mockCourse.title.toLowerCase().slice(0, 8))
      );
      if (matched) {
        return {
          ...mockCourse,
          dbId: matched.id,
          title: matched.title || mockCourse.title,
          description: matched.description || mockCourse.description,
        };
      }
      return mockCourse;
    });
  }, [dbCourses]);

  useEffect(() => {
    // Handle sticky navbar offset when landing with a hash anchor (e.g. #opportunities)
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          const navOffset = 76;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      
      {/* Structural Subtle Grid Background */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Item 10: Left Column — Command SaaS Typography Hierarchy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left lg:pr-4"
          >
            {/* Top Pill / Trust Tag */}
            <motion.div variants={fadeUpVariant} className="mb-5 sm:mb-6 inline-flex max-w-full items-center rounded-full border border-border bg-card/70 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 mr-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="truncate font-semibold tracking-wide">Your Blueprint for Tech Internships & Dev Roles</span>
            </motion.div>

            {/* Item 10: High-Impact H1 Typography */}
            <motion.h1 
              variants={fadeUpVariant} 
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 sm:mb-6 text-foreground leading-[1.08] break-words"
            >
              Crack Your Tech Interviews and{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-400 bg-clip-text text-transparent">
                Land the Internship.
              </span>
            </motion.h1>

            {/* Subtitle with proper line-height & weight */}
            <motion.p 
              variants={fadeUpVariant} 
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-7 sm:mb-10 leading-relaxed font-normal"
            >
              Landing a top-tier tech internship isn't about blindly grinding 1,000 random LeetCode problems. We break down the Blind 75, backend systems, and production projects into structured visual playbooks so you build the mental models that interviewers actually test for.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="w-full sm:w-auto rounded-xl px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all bg-primary text-primary-foreground hover:scale-[1.02]">
                <Link to="/courses" className="flex items-center justify-center">
                  Start the Playbook
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto rounded-xl px-6 h-12 sm:h-14 text-sm sm:text-base font-semibold border-border hover:bg-card/80 transition-all text-foreground"
              >
                <Play className="mr-2 h-4 w-4 fill-primary text-primary" />
                Watch Breakdown Preview
              </Button>
            </motion.div>
          </motion.div>

          {/* Item 11: Right Column — Multi-Layered Glowing macOS IDE & Video Canvas */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative group w-full"
          >
            {/* Ambient Multi-Dimensional Glow */}
            <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-primary/30 via-indigo-500/25 to-sky-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            {/* Main IDE Window Container */}
            <div 
              onClick={() => setIsVideoModalOpen(true)}
              className="relative rounded-2xl overflow-hidden border border-border/80 bg-card/95 shadow-2xl backdrop-blur-xl cursor-pointer hover:border-primary/60 transition-all duration-300"
            >
              {/* macOS Window Titlebar */}
              <div className="h-9 sm:h-10 bg-muted/70 border-b border-border/70 px-3.5 sm:px-4 flex items-center justify-between text-xs select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-[11px] sm:text-xs">
                  <span className="text-foreground/80 font-medium">blind-75</span>
                  <span>/</span>
                  <span className="text-primary font-semibold">contains-duplicate.ts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Ready to Play
                  </span>
                </div>
              </div>

              {/* High-Contrast Dark Video Canvas with Watermark */}
              <div className="relative min-h-[270px] sm:aspect-video w-full bg-[#0b0f17] flex items-center justify-center overflow-hidden">
                {/* Code Background Watermark */}
                <div className="absolute inset-0 p-5 font-mono text-[11px] sm:text-xs text-zinc-600/30 select-none pointer-events-none overflow-hidden leading-relaxed">
                  <p className="text-primary/40">// Pattern: Optimal Hash Set Tradeoff</p>
                  <p>function containsDuplicate(nums: number[]): boolean &#123;</p>
                  <p className="pl-4">const seen = new Set&lt;number&gt;();</p>
                  <p className="pl-4">for (const num of nums) &#123;</p>
                  <p className="pl-8">if (seen.has(num)) return true; // Early exit O(1)</p>
                  <p className="pl-8">seen.add(num);</p>
                  <p className="pl-4">&#125;</p>
                  <p className="pl-4">return false; // Time O(N), Space O(N)</p>
                  <p>&#125;</p>
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 z-0" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2">
                  <Badge className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 shadow-md">
                    <Sparkles className="mr-1 h-3 w-3" /> Free Video Breakdown
                  </Badge>
                  <Badge variant="outline" className="bg-black/60 text-white/90 border-white/20 text-[10px] sm:text-xs backdrop-blur-sm hidden sm:inline-flex">
                    19:24 Full Duration
                  </Badge>
                </div>

                {/* Center Animated Play Button with Radiating Pulse */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-6">
                  <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute -inset-3 rounded-full bg-primary/30 blur-md animate-pulse" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl text-primary-foreground group-hover:bg-primary/95 transition-colors">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <h3 className="font-bold text-base sm:text-xl text-white tracking-tight drop-shadow-sm">
                    Contains Duplicate
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xs drop-shadow-sm">
                    Watch the complete pattern intuition, $O(N^2) \rightarrow O(N)$ refactor, and dry run
                  </p>
                </div>

                {/* Bottom Interactive Control Bar Scrubber */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 h-11 sm:h-12 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center px-3.5 sm:px-4 space-x-3 shadow-lg z-10">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/30">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-primary rounded-full" />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                      <span>07:42</span>
                      <span>19:24</span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-medium text-white/90 bg-white/10 px-2.5 py-1 rounded-md border border-white/10 shrink-0 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    Watch Now →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Lightbox Video Modal */}
          <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
            <DialogContent className="max-w-4xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 bg-background border-border rounded-2xl shadow-2xl">
              <div className="p-4 sm:p-5 border-b border-border bg-card/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pr-12">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold">
                      Free Sample Breakdown
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium">
                      Blind 75 • LeetCode #217
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">
                      19 mins
                    </span>
                  </div>
                  <DialogTitle className="text-base sm:text-xl font-bold text-foreground">
                    Contains Duplicate — Pattern & Implementation Breakdown
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Step-by-step intuition, brute force vs sorting vs hash set tradeoffs, and optimal implementation.
                  </DialogDescription>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                {isVideoModalOpen && (
                  <iframe
                    src="https://iframe.mediadelivery.net/embed/728335/83faebaf-4ac3-4aa2-9233-ae6448e1461e?autoplay=true&loop=false&muted=false&preload=true"
                    loading="lazy"
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Footer CTA & Insights */}
              <div className="p-4 sm:p-5 bg-card/60 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Ready to master the rest of Blind 75?</span>
                  <span className="text-[11px] sm:text-xs text-muted-foreground">Get instant lifetime access to all 75 visual breakdowns and interview playbooks.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto shrink-0">
                  <Button asChild size="sm" className="rounded-xl px-4 sm:px-5 font-semibold bg-primary text-primary-foreground shadow-md w-full sm:w-auto">
                    <Link to="/products" onClick={() => setIsVideoModalOpen(false)}>
                      <Sparkles className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Unlock All 75 Problems
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-xl text-xs w-full sm:w-auto">
                    <Link to="/courses" onClick={() => setIsVideoModalOpen(false)}>
                      Browse Syllabus →
                    </Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="border-y border-border bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border/60 text-center">
            {landingStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="py-5 sm:py-0 sm:px-6 flex flex-col items-center justify-center space-y-1 sm:space-y-1.5"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">{stat.value}</span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Item 5: Crack MAANG Target Employers Marquee & The DSA + System Design + AI Triad */}
      <TargetEmployersSection />

      {/* Item 6: Interactive "How It Works" 3-Stage Deep Dive */}
      <HowItWorksSection />

      {/* Item 12: Upgraded Course Roadmap Cards with Item 13 Backend Data Sync */}
      <section className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                Curriculum Breakdown
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                The Complete Roadmap
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mt-2 leading-relaxed">
                Structured playbooks covering algorithms, high-concurrency systems, and portfolio projects that top tech teams look for.
              </p>
            </div>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:text-primary p-0 self-start sm:self-auto">
              <Link to="/courses" className="flex items-center text-foreground font-semibold text-sm">
                View full curriculum syllabus <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coursesList.map((course) => {
              const Icon = course.icon;
              
              // Difficulty Badges Styling (Emerald / Amber / Purple)
              const difficultyBadgeClass = 
                course.difficulty === "Beginner" 
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                  : course.difficulty === "Intermediate"
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                  : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";

              return (
                <Link 
                  key={course.id} 
                  to="/courses" 
                  search={course.dbId ? { courseId: course.dbId } : undefined}
                  className="group h-full flex"
                >
                  <Card className="h-full w-full flex flex-col justify-between overflow-hidden border-border bg-card/90 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 rounded-2xl relative">
                    
                    {/* Top ambient hover gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Card Header */}
                      <div className="p-6 pb-4 flex justify-between items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        <div className="flex flex-col items-end gap-1.5">
                          <span className={cn("text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border", difficultyBadgeClass)}>
                            {course.difficulty}
                          </span>
                          {course.isPremium ? (
                            <span className="flex items-center text-muted-foreground text-[11px] font-medium">
                              <Lock className="w-3 h-3 mr-1" /> Premium
                            </span>
                          ) : (
                            <span className="text-emerald-500 text-[11px] font-semibold flex items-center">
                              <Sparkles className="w-3 h-3 mr-1" /> Free Access
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Card Body */}
                      <div className="px-6 py-2 flex flex-col">
                        <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground font-mono">
                          <span className="text-foreground/75 font-medium">{course.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                          {course.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-4">
                          {course.description}
                        </p>

                        {/* Topic Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {course.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[10px] font-mono bg-muted/70 text-muted-foreground border border-border/70 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Metadata (Lessons, Duration) & CTA */}
                    <div className="px-6 pb-6 pt-3 border-t border-border/70 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 font-medium">
                          <BookOpen className="w-3.5 h-3.5 text-primary" /> {course.lessonsCount}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-muted-foreground" /> {course.durationHours}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-semibold text-primary pt-1">
                        <span>Explore module</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* Item 8: Frequently Asked Questions */}
      <FaqSection />

      {/* Item 9: Bottom High-Impact Conversion Banner */}
      <ConversionBanner />
    </div>
  );
}

function OpportunitiesSection() {
  const { user, isAuthenticated } = useAuthStore();
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      const key = `codebreakdowns_opps_notified_${user.username || user._id}`;
      const stored = localStorage.getItem(key);
      if (stored === "true") {
        setNotified(true);
      }
    }
  }, [isAuthenticated, user]);

  const handleNotifyMe = () => {
    if (!isAuthenticated || !user) return;
    const key = `codebreakdowns_opps_notified_${user.username || user._id}`;
    localStorage.setItem(key, "true");
    setNotified(true);
    toast.success("You're on the priority hiring waitlist! 🎉", {
      description: "We will notify your registered account as soon as the first corporate partner roles open up.",
    });
  };

  const opportunitiesPillars = [
    {
      icon: Users,
      title: "Warm Referral Fast-Track",
      description: "Skip the automated ATS resume black hole. Our partner engineers and vetted alumni refer top students directly to engineering hiring managers.",
    },
    {
      icon: Building2,
      title: "Curated Candidate Showcases",
      description: "Partner companies review student project implementations, code breakdowns, and problem streaks directly on platform.",
    },
    {
      icon: Sparkles,
      title: "Senior Code & Resume Audits",
      description: "Get your GitHub repositories, system architectures, and resumes critiqued by engineers who have interviewed candidates at top tech companies.",
    },
  ];

  return (
    <section 
      id="opportunities" 
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 border-t border-border bg-gradient-to-b from-background via-card/25 to-background relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3 sm:mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 mr-2 shrink-0" />
            Partner Network • Active Corporate Pilots
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3 sm:mb-4 leading-tight">
            Direct Introductions to <span className="text-primary">Engineering Teams</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We are actively finalizing direct hiring partnerships with high-growth startups and tech companies. CodeBreakdowns students who complete our core playbooks get fast-tracked into real interview loops.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {opportunitiesPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={idx} 
                className="p-6 sm:p-8 border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2.5 text-foreground">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Dynamic Waitlist & Notification Box */}
        <Card className="max-w-2xl mx-auto p-6 sm:p-10 border-border bg-card/60 backdrop-blur-md shadow-xl rounded-2xl text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

          {isAuthenticated ? (
            notified ? (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">You&apos;re On The Priority Waitlist</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mb-5 leading-relaxed">
                  We have registered your account (<span className="font-semibold text-foreground">@{user?.username}</span>). As soon as partner company openings drop, you&apos;ll be among the first to receive invitation links and referral passes.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Notification Active
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Be Notified When Openings Drop</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
                  You&apos;re signed in as <span className="font-semibold text-foreground">@{user?.username}</span>. Click below to add yourself to the priority notification queue with one click.
                </p>
                <Button 
                  onClick={handleNotifyMe} 
                  size="lg" 
                  className="w-full sm:w-auto rounded-xl px-6 sm:px-8 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all"
                >
                  <Bell className="mr-2 h-4 w-4" /> Notify Me When Partner Roles Open
                </Button>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Priority Access for Registered Students</h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
                Partner companies will hire directly from our registered student cohort. Sign in with GitHub to claim your spot on the priority early-access notification list.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto rounded-xl px-6 sm:px-8 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all"
              >
                <Link to="/login" className="flex items-center justify-center">
                  <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> Sign In to Get Priority Access <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Instant 1-click GitHub authentication • No spam, ever.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
