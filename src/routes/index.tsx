import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { landingFeatures, landingStats, landingCourses } from "../data/landing-mock";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left lg:pr-8"
          >
            <motion.div variants={fadeUpVariant} className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              The New Standard for Engineering Education
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
              Master Frontend Engineering through <span className="text-primary">Real-World</span> Breakdowns.
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Stop watching generic tutorials. Build deep mental models by watching experienced engineers break down the reasoning, architecture, and edge cases of production-grade systems.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="rounded-lg px-8 h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all bg-primary text-primary-foreground">
                <Link to="/login">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-lg px-8 h-14 text-base font-semibold border-border hover:bg-secondary/50">
                <Link to="/courses">
                  View Curriculum
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Elegant UI Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border bg-card flex items-center justify-center group cursor-pointer"
          >
            {/* Subtle Gradient Background for the placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20 z-0"></div>
            
            {/* Mock Player UI */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <p className="font-medium text-foreground">Watch a breakdown</p>
              <p className="text-sm text-muted-foreground">React Architecture Patterns</p>
            </div>
            
            {/* Decorative Mock UI Elements */}
            <div className="absolute bottom-4 left-4 right-4 h-12 bg-background/80 backdrop-blur-sm rounded-lg border border-border flex items-center px-4 space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground">12:45 / 38:20</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {landingStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <span className="text-4xl font-extrabold text-foreground">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Codebreakdowns?</h2>
          <p className="text-lg text-muted-foreground">
            We focus on the "why" and "how" of software engineering, bridging the gap between beginner tutorials and senior-level architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="p-8 border-border bg-card hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-24 px-6 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Curriculum</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Structured learning paths designed to take you from competent coder to architectural thinker.
              </p>
            </div>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:text-primary p-0">
              <Link to="/courses" className="flex items-center text-foreground font-medium">
                View all courses <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {landingCourses.map((course) => (
              <Link key={course.id} to="/courses" className="group h-full">
                <Card className="h-full flex flex-col overflow-hidden border-border bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg">
                  {/* Card Image Placeholder */}
                  <div className="aspect-video bg-muted relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-background opacity-50"></div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                       <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1 rounded-md border border-border shadow-sm">
                         {course.category}
                       </span>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      {course.isPremium ? (
                        <span className="flex items-center bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1 rounded-md border border-border shadow-sm">
                          <Lock className="w-3 h-3 mr-1" /> Premium
                        </span>
                      ) : (
                        <span className="flex items-center bg-success/10 text-success text-xs font-semibold px-2.5 py-1 rounded-md border border-success/20 shadow-sm">
                          Free
                        </span>
                      )}
                    </div>
                    {/* Icon placeholder for course */}
                    <Code2 className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      View Syllabus <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-bold text-foreground text-lg mr-2">Codebreakdowns.</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link to="/" className="hover:text-foreground transition-colors">YouTube</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
