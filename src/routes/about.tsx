import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, Variants } from "framer-motion";
import { Github, MapPin, Code2, Users, GraduationCap, Quote, ArrowRight, Play, BookOpen, MonitorPlay, MessageSquare, Twitter, Youtube, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { GlobeMap, calculateDistanceKm } from "../components/GlobeMap";

const HQ_LOCATION = { lat: 17.4480, lng: 78.3812, city: "Hyderabad" };

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AboutPage() {
  const [distance, setDistance] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [userCity, setUserCity] = useState<string | null>(null);

  const calculateDistance = async () => {
    setIsCalculating(true);
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (!res.ok) throw new Error("Failed to fetch location");
      const data = await res.json();
      
      if (data.latitude && data.longitude) {
        setUserLocation({ lat: data.latitude, lng: data.longitude });
        setUserCity(data.city || data.country_name || "your location");
        const dist = calculateDistanceKm(
          HQ_LOCATION.lat,
          HQ_LOCATION.lng,
          data.latitude,
          data.longitude
        );
        setDistance(dist);
      }
    } catch (error) {
      console.error("Geolocation failed:", error);
      // Fallback if adblockers block ipapi
      setDistance(8420);
      setUserCity("a mysterious land");
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Built by engineers, <br/>
            <span className="text-primary">for future engineers.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We believe the traditional way of preparing for tech interviews is broken. We're here to fix it with structured, pattern-based playbooks.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Box 1: Career Change (Span 2 cols on tablet/desktop) */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2">
            <Card className="h-full relative overflow-hidden border-border bg-card group p-8 flex flex-col justify-center min-h-[250px] shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-48 h-48 text-primary -mr-8 -mt-8 rotate-12" />
              </div>
              <div className="relative z-10 max-w-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <MonitorPlay className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                  We left our software jobs <br/> for full-time teaching.
                </h2>
                <p className="text-muted-foreground text-lg">
                  We've been through the grind, built production systems, and sat on both sides of the interview table. Now, we're dedicated 100% to helping you do the same.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Box 2: Quote Box */}
          <motion.div variants={fadeUpVariant} className="col-span-1">
            <Card className="h-full border-border bg-primary/5 group p-8 flex flex-col justify-between shadow-sm hover:border-primary/30 transition-colors min-h-[250px]">
              <Quote className="w-10 h-10 text-primary/40 mb-4 group-hover:scale-110 transition-transform origin-top-left" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                  "You miss 100% of the shots you don't take."
                </h2>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-primary/50"></div>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Start Building</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Box 3: Interactive Map */}
          <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-2 lg:col-span-1">
            <Card className="h-full overflow-hidden border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col group min-h-[300px]">
              {/* Map Visual Area */}
              <div className="flex-1 bg-secondary/10 relative flex items-center justify-center overflow-hidden min-h-[300px]">
                <GlobeMap userLocation={userLocation} hqLocation={HQ_LOCATION} />
              </div>
              
              {/* Map Interaction Area */}
              <div className="p-6 bg-card border-t border-border z-10 relative">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" /> HQ: {HQ_LOCATION.city}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {distance === null 
                        ? "Calculate distance from your browser to our servers." 
                        : `You are approximately ${distance.toLocaleString()} km away in ${userCity}!`}
                    </p>
                  </div>
                </div>
                {!distance && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4" 
                    onClick={calculateDistance}
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Calculating..." : "Ping HQ"}
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Box 4: Coaching History */}
          <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-2 lg:col-span-2">
            <Card className="h-full border-border bg-card p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                  We've coached hundreds offline.<br/> Now we're moving online.
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  For years, we've helped students crack technical interviews through intensive, in-person bootcamps. We are taking those exact, proven frameworks and making them accessible to developers globally.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    <GraduationCap className="w-4 h-4 mr-2" /> 500+ Offline Students
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    <BookOpen className="w-4 h-4 mr-2" /> Proven Curriculum
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </main>

      {/* Massive Bottom CTA */}
      <section className="bg-card/50 border-y border-border py-24 md:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Ready to stop grinding <br/> and start learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the best learning platform for modern developers. Master the Blind 75, ace your system design rounds, and land the internship.
          </p>
          <Button size="lg" className="rounded-full px-8 h-16 text-lg font-bold shadow-xl hover:shadow-2xl transition-all bg-foreground text-background hover:bg-foreground/90 group" asChild>
            <Link to="/login">
              <GithubIcon className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              Sign up with GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Structured Footer */}
      <footer className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <span className="font-bold text-foreground text-2xl tracking-tight block mb-4">Codebreakdowns.</span>
            <p className="text-muted-foreground max-w-xs mb-6">
              The blueprint for tech internships and developer roles. Built by engineers, for engineers.
            </p>
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Courses</h4>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Blind 75 Breakdown</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Blind 150 Extension</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Blind SQL 25</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Backend Essentials</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Resume Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-4 h-4 mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-4 h-4 mr-2" /> YouTube
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}
