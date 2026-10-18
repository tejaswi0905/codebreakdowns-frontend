import { useState, useEffect } from "react";
import { 
  Lightbulb, 
  Play, 
  Terminal, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Sparkles,
  Zap,
  Check,
  Copy
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

type StageId = "intuition" | "stepthrough" | "code";

interface StepState {
  index: number;
  val: number;
  seen: number[];
  isDuplicate: boolean;
  explanation: string;
}

export function HowItWorksSection() {
  const [activeStage, setActiveStage] = useState<StageId>("stepthrough");
  const [patternTab, setPatternTab] = useState<"bruteforce" | "hashset">("hashset");
  
  // Interactive Step-Through State
  const sampleArray = [2, 7, 11, 2];
  const steps: StepState[] = [
    {
      index: 0,
      val: 2,
      seen: [2],
      isDuplicate: false,
      explanation: "Pointer at index 0 (val = 2). Hash set is empty. Insert 2 into seen. Continue search."
    },
    {
      index: 1,
      val: 7,
      seen: [2, 7],
      isDuplicate: false,
      explanation: "Pointer at index 1 (val = 7). Check seen.has(7) → false. Insert 7. Set now contains {2, 7}."
    },
    {
      index: 2,
      val: 11,
      seen: [2, 7, 11],
      isDuplicate: false,
      explanation: "Pointer at index 2 (val = 11). Check seen.has(11) → false. Insert 11. Set now contains {2, 7, 11}."
    },
    {
      index: 3,
      val: 2,
      seen: [2, 7, 11],
      isDuplicate: true,
      explanation: "Pointer at index 3 (val = 2). Check seen.has(2) → TRUE! Duplicate found! Early return true."
    }
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLang, setActiveLang] = useState<"ts" | "py" | "go">("ts");
  const [copied, setCopied] = useState(false);

  // Auto-play stepper timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1600);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const currentStep = steps[currentStepIndex];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    ts: `function containsDuplicate(nums: number[]): boolean {
  // Set gives O(1) average lookup time
  const seen = new Set<number>();

  for (const n of nums) {
    if (seen.has(n)) {
      return true; // Early termination: duplicate found
    }
    seen.add(n);
  }

  return false; // All elements unique
}`,
    py: `def containsDuplicate(nums: list[int]) -> bool:
    # Hash set gives O(1) average lookup
    seen = set()

    for n in nums:
        if n in seen:
            return True  # Early termination: duplicate found
        seen.add(n)

    return False  # All elements unique`,
    go: `func containsDuplicate(nums []int) bool {
    // Map used as hash set for O(1) lookups
    seen := make(map[int]struct{}, len(nums))

    for _, n := range nums {
        if _, exists := seen[n]; exists {
            return true // Early return
        }
        seen[n] = struct{}{}
    }

    return false
}`
  };

  const stages = [
    {
      id: "intuition" as StageId,
      step: "01",
      icon: Lightbulb,
      title: "Pattern Intuition",
      shortDesc: "Recognize the core mental model in the first 2 minutes instead of brute-forcing.",
      badge: "Mental Model"
    },
    {
      id: "stepthrough" as StageId,
      step: "02",
      icon: Play,
      title: "Visual Step-Through",
      shortDesc: "Trace pointers, memory mutations, and edge cases frame-by-frame.",
      badge: "Interactive Trace"
    },
    {
      id: "code" as StageId,
      step: "03",
      icon: Terminal,
      title: "Production Implementation",
      shortDesc: "Write clean, idiomatic code with optimal O(1) extra space and zero fluff.",
      badge: "Engineering Bar"
    }
  ];

  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-border">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 mr-2 shrink-0" />
          The CodeBreakdowns Methodology
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
          How It Works: The 3-Stage Breakdown
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Rote memorization fails the moment an interviewer tweaks a constraint. We train your pattern recognition through a proven 3-stage visual architecture.
        </p>
      </div>

      {/* Mobile Stage Selector Tabs (< lg) */}
      <div className="flex lg:hidden gap-2 p-1.5 bg-card border border-border rounded-xl mb-6 overflow-x-auto custom-scrollbar">
        {stages.map((s) => {
          const Icon = s.icon;
          const isActive = activeStage === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStage(s.id)}
              className={cn(
                "flex-1 min-w-[110px] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shrink-0",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{s.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Left Stage Cards, Right Interactive Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: 3 Stage Cards (Desktop list) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={cn(
                  "p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group text-left",
                  isActive 
                    ? "bg-card border-primary/50 shadow-md ring-1 ring-primary/20" 
                    : "bg-card/60 border-border hover:border-border/90 hover:bg-card/90"
                )}
              >
                {/* Active Indicator bar on left */}
                {isActive && (
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary" />
                )}

                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center border text-xs font-bold transition-colors",
                      isActive 
                        ? "bg-primary/15 text-primary border-primary/30" 
                        : "bg-secondary text-muted-foreground border-border group-hover:text-foreground"
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Stage {stage.step}
                    </span>
                  </div>
                  <Badge variant="secondary" className={cn(
                    "text-[10px] font-semibold px-2 py-0.5",
                    isActive ? "bg-primary/10 text-primary border-primary/20" : "text-muted-foreground"
                  )}>
                    {stage.badge}
                  </Badge>
                </div>

                <h3 className={cn(
                  "text-base sm:text-lg font-bold mb-1.5 transition-colors",
                  isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                )}>
                  {stage.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.shortDesc}
                </p>

                <div className="mt-3.5 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore interactive demo</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Sandbox Canvas */}
        <div className="lg:col-span-7 flex">
          <Card className="w-full bg-card border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            
            {/* Top Stage Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Live Interactive Demonstration
                </span>
              </div>
              <div className="text-xs font-mono font-medium text-foreground bg-secondary px-2.5 py-1 rounded-md border border-border">
                Problem: Contains Duplicate (LC #217)
              </div>
            </div>

            {/* STAGE 1 CANVAS: Pattern Intuition (Mental Model Comparison) */}
            {activeStage === "intuition" && (
              <div className="py-6 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
                <div className="flex gap-2 p-1 bg-secondary rounded-xl mb-6 max-w-sm mx-auto w-full">
                  <button
                    onClick={() => setPatternTab("bruteforce")}
                    className={cn(
                      "flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all",
                      patternTab === "bruteforce" 
                        ? "bg-background text-foreground shadow-sm" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Brute Force (Flawed)
                  </button>
                  <button
                    onClick={() => setPatternTab("hashset")}
                    className={cn(
                      "flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all",
                      patternTab === "hashset" 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Hash Set Pattern (Optimal)
                  </button>
                </div>

                {patternTab === "bruteforce" ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-left">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-destructive uppercase tracking-wider">Nested Loops Approach</span>
                        <Badge variant="destructive" className="text-[10px]">O(N²) Time Complexity</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Comparing every element with every other element using two nested loops (<code className="text-foreground font-mono">for i in range(N): for j in range(i+1, N)</code>).
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Comparisons for N = 1,000</span>
                        <span className="text-xl font-extrabold text-destructive font-mono">500,000</span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">Will trigger Time Limit Exceeded (TLE)</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Interview Verdict</span>
                        <span className="text-sm font-bold text-destructive flex items-center gap-1 mt-1">
                          Reject (Fails Scale)
                        </span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">Shows lack of algorithmic intuition</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Pattern Intuition: Hash Set</span>
                        <Badge className="bg-emerald-500 text-white text-[10px]">O(N) Optimal Time</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Trade a small amount of memory ($O(N)$ space) for constant time ($O(1)$) lookups. As we iterate once, we check whether we have already encountered the number.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Comparisons for N = 1,000</span>
                        <span className="text-xl font-extrabold text-emerald-500 font-mono">1,000</span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">500x faster than brute force</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Interview Verdict</span>
                        <span className="text-sm font-bold text-emerald-500 flex items-center gap-1 mt-1">
                          Pass (Strong Hire)
                        </span>
                        <span className="text-[11px] text-muted-foreground block mt-0.5">Optimal mental model identified</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STAGE 2 CANVAS: Visual Step-Through (Interactive Array Stepper) */}
            {activeStage === "stepthrough" && (
              <div className="py-6 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
                <div className="text-left mb-4">
                  <div className="text-xs text-muted-foreground font-medium mb-1">
                    Input Array: <code className="font-mono text-foreground font-bold">[ 2, 7, 11, 2 ]</code>
                  </div>
                </div>

                {/* Array Visualization */}
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-6">
                  {sampleArray.map((val, idx) => {
                    const isCurrent = idx === currentStep.index;
                    const isProcessed = idx < currentStep.index;
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="text-[10px] font-mono text-muted-foreground mb-1">i = {idx}</span>
                        <div className={cn(
                          "w-12 h-14 sm:w-16 sm:h-16 rounded-xl border-2 flex items-center justify-center text-lg sm:text-xl font-bold font-mono transition-all duration-300",
                          isCurrent 
                            ? currentStep.isDuplicate 
                              ? "bg-destructive/15 border-destructive text-destructive scale-105 shadow-md ring-2 ring-destructive/30"
                              : "bg-primary/15 border-primary text-primary scale-105 shadow-md ring-2 ring-primary/30"
                            : isProcessed 
                              ? "bg-secondary/70 border-border text-foreground/80" 
                              : "bg-background border-dashed border-border text-muted-foreground opacity-60"
                        )}>
                          {val}
                        </div>
                        {isCurrent && (
                          <span className={cn(
                            "text-[10px] font-bold mt-1.5 px-1.5 py-0.5 rounded",
                            currentStep.isDuplicate ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                          )}>
                            {currentStep.isDuplicate ? "Duplicate!" : "Current"}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Memory State: Seen Hash Set */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-secondary/40 border border-border mb-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-primary" /> Memory State: Hash Set (<code className="text-foreground font-mono">seen</code>)
                    </span>
                    <span className="text-xs font-mono font-bold text-primary">
                      Size: {currentStep.seen.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-muted-foreground">seen = </span>
                    <div className="flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-lg shadow-inner">
                      {currentStep.seen.length === 0 ? (
                        <span className="text-muted-foreground italic text-xs">&empty; (empty)</span>
                      ) : (
                        currentStep.seen.map((item, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">
                            {item}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Step Commentary Box */}
                <div className="p-3 rounded-lg bg-card border border-border/80 text-left mb-6">
                  <p className="text-xs text-foreground font-medium leading-relaxed">
                    <span className="font-bold text-primary mr-1.5">Step {currentStepIndex + 1} of {steps.length}:</span>
                    {currentStep.explanation}
                  </p>
                </div>

                {/* Stepper Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsPlaying(false);
                        setCurrentStepIndex((prev) => Math.max(0, prev - 1));
                      }}
                      disabled={currentStepIndex === 0}
                      className="rounded-lg text-xs"
                    >
                      ← Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsPlaying(false);
                        setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1));
                      }}
                      disabled={currentStepIndex === steps.length - 1}
                      className="rounded-lg text-xs font-semibold text-primary hover:text-primary"
                    >
                      Next Step →
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        if (currentStepIndex === steps.length - 1) {
                          setCurrentStepIndex(0);
                        }
                        setIsPlaying(!isPlaying);
                      }}
                      className="rounded-lg text-xs"
                    >
                      {isPlaying ? "Pause" : "Auto-Play"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setIsPlaying(false);
                        setCurrentStepIndex(0);
                      }}
                      className="h-8 w-8 rounded-lg"
                      title="Reset trace"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 3 CANVAS: Production Implementation */}
            {activeStage === "code" && (
              <div className="py-4 flex-1 flex flex-col animate-in fade-in duration-300 text-left">
                {/* Language Switcher Tabs */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1.5 bg-secondary p-1 rounded-lg">
                    {(["ts", "py", "go"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        className={cn(
                          "px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors",
                          activeLang === lang 
                            ? "bg-background text-foreground shadow-sm" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {lang === "ts" ? "TypeScript" : lang === "py" ? "Python" : "Go"}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopyCode(codeSnippets[activeLang])}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border bg-card"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Terminal */}
                <div className="rounded-xl border border-border bg-[#121316] text-[#e1e4e8] p-4 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                  <pre>{codeSnippets[activeLang]}</pre>
                </div>

                {/* Complexity & Checklist Callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">Time Complexity</span>
                    <span className="text-xs font-mono font-bold text-emerald-500">O(N) Single Pass</span>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">Space Complexity</span>
                    <span className="text-xs font-mono font-bold text-primary">O(N) Extra Memory</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Stepper Progress Bar */}
            <div className="pt-4 mt-auto border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium">
                Stage {stages.findIndex(s => s.id === activeStage) + 1} of 3
              </span>
              <div className="flex items-center gap-1.5">
                {stages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(s.id)}
                    aria-label={`Jump to stage ${s.title}`}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      activeStage === s.id ? "w-6 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
              </div>
            </div>

          </Card>
        </div>

      </div>

      {/* Bottom Conversion Hook */}
      <div className="mt-12 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground mb-4">
          Experience this structured, visual walkthrough across all <span className="text-foreground font-bold">Blind 75 & 150</span> questions.
        </p>
        <Button size="lg" asChild className="rounded-xl px-7 h-12 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all">
          <Link to="/courses">
            Try A Sample Lesson in the Curriculum
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

    </section>
  );
}
