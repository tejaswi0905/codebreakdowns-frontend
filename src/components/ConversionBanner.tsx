import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConversionBanner() {
  const perks = [
    "Instant 1-Click Access",
    "No Monthly Subscriptions",
    "Lifetime Updates Included",
    "Real-World Production Code",
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-gradient-to-br from-card via-card/95 to-primary/10 p-8 sm:p-14 shadow-2xl text-center">
        
        {/* Ambient Decorative Lighting */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        
        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 mr-2 shrink-0" />
            Lifetime Access • Zero Subscriptions
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-[1.15]">
            Stop Grinding Blindly. <br className="hidden sm:inline" />
            <span className="text-primary">Start Building Mental Models.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Gain the structured intuition needed to crack the Blind 75, design distributed backend systems, and stand out in tier-1 technical interview loops. Pay once, own it forever.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
            <Button 
              size="lg" 
              asChild 
              className="w-full sm:w-auto rounded-xl px-8 h-12 sm:h-14 font-semibold text-sm sm:text-base shadow-xl bg-primary text-primary-foreground hover:shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              <Link to="/products" className="flex items-center justify-center">
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Unlock Full Access
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="w-full sm:w-auto rounded-xl px-7 h-12 sm:h-14 font-semibold text-sm sm:text-base hover:bg-foreground/5 transition-all"
            >
              <Link to="/courses" className="flex items-center justify-center">
                Browse Curriculum Syllabus
              </Link>
            </Button>
          </div>

          {/* Trust Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-border/60 w-full text-xs text-muted-foreground font-medium">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
