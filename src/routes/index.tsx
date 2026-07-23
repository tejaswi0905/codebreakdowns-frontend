import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Code2, Database, Terminal, Cpu, Server, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetchCourses, ApiCourse } from "../services/api";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const fadeUpVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

function LandingPage() {
  const [courses, setCourses] = useState<ApiCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background bg-grid-white/[0.03]">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] opacity-40 pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      {/* Hero Section (2-Column) */}
      <section className="relative px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={fadeUpVariant} className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.2)] backdrop-blur-md">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Next-Gen Engineering Platform</span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              <span className="text-foreground">Architect </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">
                Better Systems.
              </span>
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
              Stop watching tutorials. Start building mental models. Deep-dive video breakdowns, interactive architecture diagrams, and real-world system design challenges.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_25px_rgba(var(--color-primary),0.4)] hover:shadow-[0_0_35px_rgba(var(--color-primary),0.6)] hover:-translate-y-1 transition-all bg-primary text-primary-foreground hover:bg-primary/90 group border-none">
                <Link to="/courses">
                  Initialize _
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating IDE Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20, rotateY: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative lg:block"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-[80px] -z-10 rounded-full" />
            
            <Card className="overflow-hidden border-white/10 bg-[#0d1117]/80 backdrop-blur-xl shadow-2xl shadow-black/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* IDE Header */}
              <div className="flex items-center px-4 py-3 bg-black/40 border-b border-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-muted-foreground font-mono">system_architecture.ts</div>
              </div>
              {/* IDE Body */}
              <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                <div className="flex"><span className="text-muted-foreground mr-4">1</span><span className="text-purple-400">import</span> <span className="text-yellow-300">{`{ Cache, Database }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@core/infra'</span><span className="text-foreground">;</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">2</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">3</span><span className="text-purple-400">class</span> <span className="text-yellow-300">DistributedSystem</span> <span className="text-foreground">{`{`}</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">4</span><span className="text-foreground ml-4">private</span> <span className="text-blue-400">db</span><span className="text-foreground">: Database;</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">5</span><span className="text-foreground ml-4">private</span> <span className="text-blue-400">cache</span><span className="text-foreground">: Cache;</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">6</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">7</span><span className="text-foreground ml-4">async</span> <span className="text-blue-400">resolveQuery</span><span className="text-foreground">(req: Request): Promise&lt;Response&gt; {`{`}</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">8</span><span className="text-muted-foreground ml-8">// 1. Check ultra-fast Redis cache</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">9</span><span className="text-purple-400 ml-8">const</span> <span className="text-foreground">cached =</span> <span className="text-purple-400">await</span> <span className="text-foreground">this.cache.get(req.id);</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">10</span><span className="text-purple-400 ml-8">if</span> <span className="text-foreground">(cached)</span> <span className="text-purple-400">return</span> <span className="text-foreground">cached;</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">11</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">12</span><span className="text-muted-foreground ml-8">// 2. Fallback to read-replica DB</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">13</span><span className="text-purple-400 ml-8">const</span> <span className="text-foreground">data =</span> <span className="text-purple-400">await</span> <span className="text-foreground">this.db.query(req);</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">14</span><span className="text-purple-400 ml-8">return</span> <span className="text-foreground">data;</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">15</span><span className="text-foreground ml-4">{`}`}</span></div>
                <div className="flex"><span className="text-muted-foreground mr-4">16</span><span className="text-foreground">{`}`}</span></div>
                {/* Blinking cursor */}
                <div className="flex mt-2"><span className="text-muted-foreground mr-4">17</span><span className="w-2 h-5 bg-primary animate-pulse" /></div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Infinite Scrolling Marquee */}
      <section className="border-y border-white/5 bg-background/50 backdrop-blur-md overflow-hidden py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Core Technologies Explored</p>
          <div className="relative w-full flex overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap space-x-12 px-6 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex space-x-16 items-center">
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"><Server className="w-6 h-6" /><span className="text-lg font-bold">Node.js</span></div>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"><Database className="w-6 h-6" /><span className="text-lg font-bold">PostgreSQL</span></div>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"><Cpu className="w-6 h-6" /><span className="text-lg font-bold">Redis</span></div>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"><Code2 className="w-6 h-6" /><span className="text-lg font-bold">React</span></div>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"><Shield className="w-6 h-6" /><span className="text-lg font-bold">System Design</span></div>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"><Terminal className="w-6 h-6" /><span className="text-lg font-bold">Go</span></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Box Course Catalog */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Systems Catalog</h2>
              <p className="text-muted-foreground font-mono text-sm">Select a module to initialize learning sequence.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex hover:text-primary hover:bg-primary/10 font-mono">
              <Link to="/courses">cd ./all-courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-80 animate-pulse bg-muted/20 rounded-xl border border-white/5" />
              ))}
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {courses.map((course) => {
                return (
                  <motion.div 
                    key={course.id} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.98 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
                    }}
                  >
                    <Link to="/courses" className="group block h-full">
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.15)] border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl hover:border-primary/50 relative flex flex-col">
                        
                        {/* Terminal Header for Card */}
                        <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-3 z-20">
                          <div className="flex space-x-1.5">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                          </div>
                        </div>

                        {/* Graphic Area */}
                        <div className="relative bg-black/50 border-white/5 flex flex-col justify-end p-6 overflow-hidden pt-12 aspect-[16/9] border-b">
                          <div className="absolute inset-0 bg-grid-white/[0.04] bg-[length:16px_16px]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                          
                          <div className="absolute top-10 right-4 z-20">
                            {course.isFree ? (
                              <span className="font-mono bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded shadow-lg border border-success/20">STATUS: OPEN</span>
                            ) : (
                              <span className="font-mono bg-background/80 text-foreground text-[10px] font-bold px-2 py-1 rounded shadow-lg border border-white/10">STATUS: LOCKED</span>
                            )}
                          </div>
                          
                          <div className="relative z-20 transform group-hover:scale-110 transition-transform duration-500">
                            {course.title.toLowerCase().includes('backend') || course.title.toLowerCase().includes('dbms') ? (
                              <Server className="h-12 w-12 text-primary opacity-80" />
                            ) : (
                              <Terminal className="h-12 w-12 text-primary opacity-80" />
                            )}
                          </div>
                        </div>
                        
                        {/* Content Area */}
                        <div className="p-6 md:pt-8 relative z-10 flex flex-col justify-between flex-1">
                          <div>
                            <div className="font-mono text-xs text-primary/70 mb-2">~/{course.id}</div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors tracking-tight">{course.title}</h3>
                            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                              {course.description || "In-depth architectural breakdown and implementation guide. Master the underlying systems and patterns."}
                            </p>
                          </div>
                          
                          <div className="mt-6 font-mono text-xs text-muted-foreground border-t border-white/5 pt-4 flex justify-between items-center">
                            <span>{`> initialize_module()`}</span>
                            <span className="group-hover:translate-x-1 group-hover:text-primary transition-all">_</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
