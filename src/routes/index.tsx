import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Lock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { landingFeatures, landingStats, landingCourses } from "../data/landing-mock";

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
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      
      {/* Premium Structural Background (No 'AI' Glows) */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-10 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto w-full">
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
              Your Blueprint for Tech Internships & Dev Roles
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
              Crack Your Tech Interviews and <span className="text-primary">Land the Internship.</span>
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Landing a top-tier tech internship isn't about blindly grinding 1,000 random LeetCode problems. We break down the Blind 75 & 150, essential backend concepts, and real-world resume projects into structured playbooks so you build the mental models required to succeed.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="rounded-lg px-8 h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all bg-primary text-primary-foreground">
                <Link to="/courses">
                  Start the Playbook
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Elegant Video Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border bg-card flex items-center justify-center group cursor-pointer"
          >
            {/* Subtle Gradient Background for the placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 z-0"></div>
            
            {/* Mock Player UI */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <p className="font-medium text-foreground">Watch a breakdown</p>
              <p className="text-sm text-muted-foreground">Blind 75: Two Sum Pattern</p>
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
              <div className="text-xs font-mono text-muted-foreground">08:45 / 22:10</div>
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
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Why This Approach Works</h2>
          <p className="text-base text-muted-foreground">
            We focus on structured learning and pattern recognition, bridging the gap between theoretical algorithms and passing the actual interview.
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
                <h3 className="text-lg font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">The Complete Roadmap</h2>
              <p className="text-base text-muted-foreground max-w-xl">
                Everything you need to secure the internship and excel in your first role.
              </p>
            </div>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:text-primary p-0">
              <Link to="/courses" className="flex items-center text-foreground font-medium">
                View all content <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Link key={course.id} to="/courses" className="group h-full">
                  <Card className="h-full flex flex-col overflow-hidden border-border bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg">
                    {/* Minimal Header */}
                    <div className="p-6 pb-0 flex justify-between items-start">
                      <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center border border-border">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="bg-background/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-md border border-border">
                          {course.category}
                        </span>
                        {course.isPremium ? (
                          <span className="flex items-center text-muted-foreground text-xs font-semibold">
                            <Lock className="w-3 h-3 mr-1" /> Premium
                          </span>
                        ) : (
                          <span className="text-success text-xs font-semibold">
                            Free Trial
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-muted-foreground text-xs flex-1 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="mt-6 pt-4 border-t border-border flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Explore module <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      


    </div>
  );
}
