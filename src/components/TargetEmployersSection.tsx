import { 
  Code2, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

// SVG Logos for Target Employers & MAANG
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

function MetaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4.35c-2.3 0-4.32 1.05-5.65 2.68C4.7 4.95 2.5 4.35 1 4.35 0 4.35 0 5.5 0 6.15c0 3.65 2.65 8.7 6.1 8.7 2.2 0 4.15-1.45 5.9-3.7 1.75 2.25 3.7 3.7 5.9 3.7 3.45 0 6.1-5.05 6.1-8.7 0-.65 0-1.8-1-1.8-1.5 0-3.7.6-5.35 2.68C16.32 5.4 14.3 4.35 12 4.35zm0 2.2c1.7 0 3.25 1.1 4.3 2.85-1.2 1.95-2.6 3.75-4.3 5.4-1.7-1.65-3.1-3.45-4.3-5.4 1.05-1.75 2.6-2.85 4.3-2.85zm-7.25.75c.95 0 2.05.5 3.05 1.6-1.15 1.9-2.2 3.8-3.05 5.55-1.95 0-3.35-3.1-3.35-5.5 0-.85.35-1.65 1.4-1.65h1.95zm14.5 0c1.05 0 1.4.8 1.4 1.65 0 2.4-1.4 5.5-3.35 5.5-.85-1.75-1.9-3.65-3.05-5.55 1-1.1 2.1-1.6 3.05-1.6h1.95z" fill="#0081FB"/>
    </svg>
  );
}

function MicrosoftLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"/>
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"/>
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
    </svg>
  );
}

function AmazonLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.84 14.53c-1.8 1.34-4.35 2.05-6.62 2.05-3.18 0-6.05-1.23-8.22-3.29-.17-.16-.02-.38.19-.26 2.34 1.34 5.2 2.14 8.16 2.14 2.02 0 4.24-.55 6.27-1.69.31-.17.54.12.22.35v.7z" fill="#FF9900"/>
      <path d="M14.97 13.56c-.23-.29-1.5-.14-2.07-.07-.17.02-.2-.12-.05-.22 1-.72 2.65-.51 2.85-.26.2.25-.05 1.91-.98 2.73-.14.12-.28.06-.21-.1.22-.52.69-1.79.46-2.08z" fill="#FF9900"/>
      <path d="M12.9 6.25c-.24 1.37-.12 2.67.29 3.97.09.28-.08.41-.31.25-.97-.68-1.54-1.73-1.69-2.91-.25-1.92.74-3.56 2.47-4.14 1.45-.48 2.86-.06 3.65 1.15.54.83.63 1.87.35 2.84-.52 1.83-2.12 3.09-4.01 3.14-.32.01-.44-.22-.24-.39 1.15-.99 1.81-2.26 1.74-3.8-.07-1.59-1.04-2.43-2.25-2.11-1.03.27-1.6 1.19-1.35 2.45l1.35-.44z"/>
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.02.63-2.66 1.39-.57.66-.99 1.76-.85 2.81 1.03.08 2.02-.53 2.57-1.27z"/>
    </svg>
  );
}

function NetflixLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.398 0v24c1.073-.24 2.148-.48 3.223-.68V8.783L15.378 24c1.07-.16 2.14-.3 3.224-.4V0h-3.224v15.217L8.621 0H5.398z" fill="#E50914"/>
    </svg>
  );
}

function UberLogo({ className }: { className?: string }) {
  return (
    <span className="font-extrabold tracking-tighter text-lg font-sans">
      Uber
    </span>
  );
}

function StripeLogo({ className }: { className?: string }) {
  return (
    <span className="font-extrabold tracking-tight text-lg italic font-sans text-[#635BFF]">
      stripe
    </span>
  );
}

function AtlassianLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.69 13.07c-.43.51-.78 1.22-1.01 2.05-.59 2.11-.27 4.54.89 6.88H5.2c-.41 0-.69-.43-.51-.8 1.63-3.32 3.8-6.19 7-8.13z" fill="#0052CC"/>
      <path d="M12.44 2.88c-.41-.53-1.23-.27-1.27.4-.18 3.21 1.13 6.39 3.75 9.17 1.57 1.67 3.65 3.32 6.13 4.88.45.28.95-.16.82-.67-1.12-4.52-4.37-9.52-9.43-13.78z" fill="#2684FF"/>
    </svg>
  );
}

export function TargetEmployersSection() {
  const employers = [
    { name: "Google", component: GoogleLogo, tag: "DSA + Systems" },
    { name: "Meta", component: MetaLogo, tag: "E4/E5 Bar" },
    { name: "Microsoft", component: MicrosoftLogo, tag: "Cloud & Microservices" },
    { name: "Amazon", component: AmazonLogo, tag: "LP + Distributed Design" },
    { name: "Apple", component: AppleLogo, tag: "Core Systems" },
    { name: "Netflix", component: NetflixLogo, tag: "High Concurrency" },
    { name: "Uber", component: UberLogo, tag: "Real-Time Arch" },
    { name: "Stripe", component: StripeLogo, tag: "API & Reliability" },
    { name: "Atlassian", component: AtlassianLogo, tag: "Enterprise Scale" },
  ];

  // Triad Pillars Data
  const pillars = [
    {
      step: "01",
      badge: "The Screening Gate",
      title: "Data Structures & Algorithms",
      subtitle: "Pattern Intuition Over Memorization",
      accent: "text-primary border-primary/30 bg-primary/10",
      icon: Code2,
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

  return (
    <section className="py-16 sm:py-24 border-b border-border bg-gradient-to-b from-card/30 via-background to-card/20 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 mr-2 shrink-0" />
            Target Hiring Standards • MAANG & High-Growth Tech
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            Crack MAANG & Tier-1 Tech Interviews
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The interview bar at companies like Google, Meta, Microsoft, and Amazon has evolved. Hiring committees don&apos;t just look for LeetCode memorizers—they look for engineers who master the <span className="text-foreground font-semibold">DSA + System Design + AI Application</span> triad.
          </p>
        </div>

        {/* Marquee Showcase */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
              Students preparing for engineering bars at
            </span>
          </div>

          {/* Marquee Container with Masked Fade Edges */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-2">
            <div className="animate-marquee flex items-center gap-6 sm:gap-10">
              {/* Duplicate array twice for seamless continuous scroll */}
              {[...employers, ...employers].map((emp, index) => {
                const LogoComp = emp.component;
                return (
                  <div
                    key={`${emp.name}-${index}`}
                    className="flex items-center gap-3 bg-card/80 border border-border/80 hover:border-primary/40 px-5 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md shrink-0 group backdrop-blur-sm cursor-default"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform duration-200">
                      <LogoComp className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight">
                        {emp.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {emp.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* The Triad: Why DSA + System Design + AI Application is Super Important */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            <Layers className="w-4 h-4 text-primary" /> The Modern Interview Trifecta
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Why You Need All Three To Stand Out
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
            Grinding only algorithms leaves you stranded in architecture rounds. Learning only backend leaves you failing the initial screening. Here is how our curriculum covers the complete spectrum.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={pillar.step}
                className="relative flex flex-col justify-between p-6 sm:p-8 bg-card border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl group overflow-hidden"
              >
                {/* Top Step Number Watermark */}
                <div className="absolute top-4 right-4 text-4xl sm:text-5xl font-black text-muted/20 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                  {pillar.step}
                </div>

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm ${pillar.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                        {pillar.badge}
                      </span>
                      <span className="text-xs font-semibold text-foreground/80">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h4>

                  {/* Why It Matters */}
                  <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/70 mb-5">
                    <span className="text-[11px] font-bold text-foreground block mb-1 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Why Top Tech Tests This:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.whyItMatters}
                    </p>
                  </div>

                  {/* What We Deliver */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold text-foreground block uppercase tracking-wider">
                      What CodeBreakdowns Builds:
                    </span>
                    {pillar.whatWeDeliver.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome Footer */}
                <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-foreground">
                  <span className="text-muted-foreground font-normal">Target Outcome:</span>
                  <span className="text-right text-[11px] text-primary">{pillar.outcome}</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Curriculum Hook CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button size="lg" asChild className="rounded-xl px-7 h-12 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all w-full sm:w-auto">
            <Link to="/courses">
              Explore The Complete Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-xl px-6 h-12 font-semibold w-full sm:w-auto">
            <Link to="/products">
              View Available Bundles
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
