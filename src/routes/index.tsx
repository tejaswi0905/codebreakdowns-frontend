import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  Github 
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
import { landingFeatures, landingStats, landingCourses } from "../data/landing-mock";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
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
      
      {/* Premium Structural Background (No 'AI' Glows) */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-6 pb-12 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left lg:pr-8"
          >
            <motion.div variants={fadeUpVariant} className="mb-4 sm:mb-6 inline-flex max-w-full items-center rounded-full border border-border bg-card/50 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shrink-0"></span>
              <span className="truncate">Your Blueprint for Tech Internships & Dev Roles</span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 text-foreground leading-[1.15] break-words">
              Crack Your Tech Interviews and <span className="text-primary">Land the Internship.</span>
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-sm sm:text-base text-muted-foreground max-w-xl mb-6 sm:mb-10 leading-relaxed">
              Landing a top-tier tech internship isn't about blindly grinding 1,000 random LeetCode problems. We break down the Blind 75 & 150, essential backend concepts, and real-world resume projects into structured playbooks so you build the mental models required to succeed.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="w-full sm:w-auto rounded-xl px-7 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all bg-primary text-primary-foreground">
                <Link to="/courses" className="flex items-center justify-center">
                  Start the Playbook
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Video Breakdown Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            onClick={() => setIsVideoModalOpen(true)}
            className="relative w-full min-h-[260px] sm:min-h-0 sm:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-card flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-primary/10"
          >
            {/* Subtle Gradient Background for the placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-background z-0"></div>
            
            {/* Top pill badge */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-2">
              <Badge variant="secondary" className="bg-background/90 text-primary border-primary/20 backdrop-blur text-[10px] sm:text-[11px] font-semibold shadow-sm">
                <Sparkles className="mr-1 h-3 w-3" /> Free Sample Breakdown
              </Badge>
              <Badge variant="outline" className="bg-background/60 text-[10px] backdrop-blur border-border hidden sm:inline-flex">
                Problem #1
              </Badge>
            </div>

            {/* Mock Player UI */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 sm:py-0">
              <div className="relative mb-2.5 sm:mb-3">
                <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md group-hover:bg-primary/40 transition-all duration-300 animate-pulse"></div>
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground ml-0.5 sm:ml-1" fill="currentColor" />
                </div>
              </div>
              <p className="font-bold text-sm sm:text-base md:text-lg text-foreground">Contains Duplicate</p>
              <p className="text-[11px] sm:text-sm text-muted-foreground mt-0.5">Blind 75: Hash Set Pattern • 19 mins</p>
            </div>
            
            {/* Decorative Mock UI Elements */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 h-10 sm:h-12 bg-background/90 backdrop-blur-md rounded-xl border border-border flex items-center px-3 sm:px-4 space-x-2.5 sm:space-x-3 shadow-sm">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-2/5 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-medium text-foreground shrink-0">Click to Watch →</div>
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

      {/* Features Section */}
      <section id="features" className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">Why This Approach Works</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We focus on structured learning and pattern recognition, bridging the gap between theoretical algorithms and passing the actual interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {landingFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="p-6 sm:p-8 border-border bg-card hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 border border-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2.5 text-foreground">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-foreground">The Complete Roadmap</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                Everything you need to secure the internship and excel in your first role.
              </p>
            </div>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:text-primary p-0 self-start sm:self-auto">
              <Link to="/courses" className="flex items-center text-foreground font-medium text-sm">
                View all content <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {landingCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Link key={course.id} to="/courses" className="group h-full">
                  <Card className="h-full flex flex-col overflow-hidden border-border bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg rounded-2xl">
                    {/* Minimal Header */}
                    <div className="p-5 sm:p-6 pb-0 flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center border border-border">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="bg-background/90 text-foreground text-[11px] font-semibold px-2 py-0.5 rounded-md border border-border">
                          {course.category}
                        </span>
                        {course.isPremium ? (
                          <span className="flex items-center text-muted-foreground text-[11px] font-semibold">
                            <Lock className="w-3 h-3 mr-1" /> Premium
                          </span>
                        ) : (
                          <span className="text-emerald-500 text-[11px] font-semibold">
                            Free Trial
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-muted-foreground text-xs flex-1 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="mt-5 pt-3.5 border-t border-border flex items-center text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Explore module <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
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
