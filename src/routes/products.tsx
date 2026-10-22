import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Check,
  Sparkles,
  BookOpen,
  Layers,
  Database,
  Server,
  Code2,
  Play,
  ChevronRight,
  Crown,
  Search,
  Flame,
  CheckCircle2,
  Briefcase,
  Star,
  Eye
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  fetchProducts,
  fetchMyCourses,
  fetchCurrentUser,
  createCheckoutOrder,
  verifyPayment,
  type ApiProduct,
} from "@/services/api";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Career Bundles — CodeBreakdowns" },
      {
        name: "description",
        content:
          "Browse curated interview prep bundles, individual courses, and the All-Access Lifetime Career Pass.",
      },
    ],
  }),
  component: ProductsPage,
});

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

// Helper to assign icons/colors based on title
const getVisualsForProduct = (title: string): { icon: LucideIcon; tint: string } => {
  const lower = title.toLowerCase();
  if (lower.includes("ai") || lower.includes("agentic")) {
    return { icon: Sparkles, tint: "from-purple-500/20 via-primary/10 to-transparent" };
  }
  if (lower.includes("backend") || lower.includes("system") || lower.includes("architect")) {
    return { icon: Server, tint: "from-emerald-500/20 via-emerald-500/5 to-transparent" };
  }
  if (lower.includes("sql") || lower.includes("database")) {
    return { icon: Database, tint: "from-amber-500/20 via-amber-500/5 to-transparent" };
  }
  if (lower.includes("blind") || lower.includes("dsa") || lower.includes("cracker")) {
    return { icon: Code2, tint: "from-blue-500/20 via-blue-500/5 to-transparent" };
  }
  if (lower.includes("pass") || lower.includes("lifetime") || lower.includes("bundle")) {
    return { icon: Crown, tint: "from-primary/25 via-indigo-500/15 to-transparent" };
  }
  return { icon: Layers, tint: "from-indigo-500/15 to-transparent" };
};

// Course highlights map for component symmetry across all cards
const courseHighlightsMap: Record<string, { label: string; topic1: string; topic2: string }> = {
  "blind 75": {
    label: "75 Patterns",
    topic1: "Two Pointers, Sliding Window & Trees",
    topic2: "Dynamic Programming & Graph Traversal",
  },
  "the sde interview cracker": {
    label: "5-in-1 Track",
    topic1: "Blind 75 & Blind 150 Core Patterns",
    topic2: "System Design & SQL Blind 25",
  },
  "python beginner to expert": {
    label: "Core Python",
    topic1: "OOP, Decorators, Generators & Typing",
    topic2: "AsyncIO, Memory Models & Patterns",
  },
  "javascript beginner to expert": {
    label: "Core JS Engine",
    topic1: "Closures, Prototypes & Event Loop",
    topic2: "Promises, Async/Await & Architecture",
  },
  "blind 150": {
    label: "Hard DSA",
    topic1: "Advanced Graphs, DP & Tries",
    topic2: "Hard Sliding Window & Backtracking",
  },
  "system design for interviews": {
    label: "High Scale",
    topic1: "Load Balancing, Caching & Sharding",
    topic2: "Rate Limiting & Microservices",
  },
  "sql blind 25": {
    label: "25 Patterns",
    topic1: "Window Functions & CTE Queries",
    topic2: "Execution Plans & Index Optimization",
  },
  "sql beginner to expert": {
    label: "DB Foundation",
    topic1: "Schema Design & Normalization",
    topic2: "B-Tree Indexing & ACID Transactions",
  },
  "node.js for interviews": {
    label: "Runtime Internals",
    topic1: "Event Loop, Streams & Buffers",
    topic2: "Clustering & Production Express",
  },
  "advanced backend for interviews (node.js)": {
    label: "Distributed Scale",
    topic1: "Redis Caching & Message Queues",
    topic2: "Idempotency & Rate Limiting",
  },
  "django for interviews": {
    label: "Django Framework",
    topic1: "ORM Optimization & Raw Queries",
    topic2: "REST Framework & Auth Security",
  },
  "advanced backend for interviews (python)": {
    label: "Python Systems",
    topic1: "AsyncIO, Celery & Background Workers",
    topic2: "Database Pooling & Performance",
  },
  "portfolio project 1": {
    label: "Resume Project",
    topic1: "Real-Time Collaboration System",
    topic2: "WebSockets, CRDTs & Docker Deploy",
  },
  "portfolio project 2": {
    label: "Resume Project",
    topic1: "Distributed Task Processing Queue",
    topic2: "PostgreSQL, Redis & Observability",
  },
  "agentic ai development with project": {
    label: "Modern AI",
    topic1: "LLM Agentic Loops & Tool Calling",
    topic2: "RAG Vector Retrieval & Pipelines",
  },
  "important developer skills for interviews": {
    label: "Practical Skills",
    topic1: "Git Workflows & Terminal Mastery",
    topic2: "HTTP/DNS & Linux Debugging",
  },
};

const getHighlightsForProduct = (title: string) => {
  const lower = title.toLowerCase().trim();
  for (const [key, val] of Object.entries(courseHighlightsMap)) {
    if (lower.includes(key)) return val;
  }
  return {
    label: "Core Modules",
    topic1: "Intuition & pattern trade-offs",
    topic2: "Optimal code implementation",
  };
};

// Category tagging helper for individual courses
const getCourseCategory = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes("blind 75") || t.includes("blind 150") || t.includes("dsa")) return "dsa";
  if (t.includes("system design")) return "system-design";
  if (t.includes("node") || t.includes("python") || t.includes("django") || t.includes("backend") || t.includes("javascript")) return "backend";
  if (t.includes("sql") || t.includes("database")) return "database";
  if (t.includes("project") || t.includes("agentic") || t.includes("ai")) return "projects";
  return "foundations";
};

// Dynamic SDK loader for Razorpay
function loadScript(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function ProductsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [selectedBundle, setSelectedBundle] = useState<ApiProduct | null>(null);
  const [courseCategoryFilter, setCourseCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data: myCourses } = useQuery({
    queryKey: ["my-courses"],
    queryFn: fetchMyCourses,
  });

  const { data: user } = useQuery({
    queryKey: ["current-user"],
    queryFn: fetchCurrentUser,
  });

  const myCourseIds = useMemo(() => new Set((myCourses || []).map((c) => c.id)), [myCourses]);

  // Clean categorization into: 1. Bundles, 2. Individual Courses, 3. All-Access Pass
  const { allAccessProduct, bundleProducts, individualProducts } = useMemo(() => {
    if (!products) return { allAccessProduct: null, bundleProducts: [], individualProducts: [] };

    let allAccess: ApiProduct | null = null;
    const bundles: ApiProduct[] = [];
    const individuals: ApiProduct[] = [];

    for (const p of products) {
      const count = p.courses?.length || 0;
      const titleLower = p.title.toLowerCase();

      if (
        count >= 10 ||
        titleLower.includes("lifetime") ||
        titleLower.includes("all access") ||
        titleLower.includes("access lifetime")
      ) {
        allAccess = p;
      } else if (count > 1) {
        bundles.push(p);
      } else {
        individuals.push(p);
      }
    }

    // Sort bundles: Cracker first, then Node, Python, AI
    bundles.sort((a, b) => {
      const order = ["cracker", "node", "python", "capstone", "ai"];
      const aIdx = order.findIndex((k) => a.title.toLowerCase().includes(k));
      const bIdx = order.findIndex((k) => b.title.toLowerCase().includes(k));
      return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
    });

    return { allAccessProduct: allAccess, bundleProducts: bundles, individualProducts: individuals };
  }, [products]);

  // Section 1: Top 4 Most Popular Starting Points
  const popularProducts = useMemo(() => {
    if (!products) return [];
    const targetKeywords = [
      "blind 75",
      "sde interview cracker",
      "python beginner to expert",
      "javascript beginner to expert",
    ];

    const results: ApiProduct[] = [];
    for (const kw of targetKeywords) {
      const match = products.find((p) => p.title.toLowerCase().includes(kw));
      if (match && !results.some((r) => r.id === match.id)) {
        results.push(match);
      }
    }
    return results;
  }, [products]);

  // Filter individual courses
  const filteredIndividualCourses = useMemo(() => {
    return individualProducts.filter((p) => {
      const matchesCategory =
        courseCategoryFilter === "all" || getCourseCategory(p.title) === courseCategoryFilter;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [individualProducts, courseCategoryFilter, searchQuery]);

  const handlePurchase = async (product: ApiProduct) => {
    if (!user) {
      toast.error("Please login to purchase courses");
      navigate({ to: "/login" });
      return;
    }

    toast.loading("Loading Razorpay checkout...", { id: "rzp-checkout" });
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?", { id: "rzp-checkout" });
      return;
    }

    try {
      const orderData = await createCheckoutOrder(product.id);
      toast.dismiss("rzp-checkout");

      const rzpKeyId = orderData.keyId || import.meta.env.VITE_RAZORPAY_KEY_ID || "";
      if (!rzpKeyId) {
        toast.error("Razorpay Key ID is missing in environment variables.");
        return;
      }

      const options = {
        key: rzpKeyId,
        amount: orderData.amount, // in paise
        currency: orderData.currency,
        name: "CodeBreakdowns",
        description: product.title,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          toast.loading("Verifying payment security signature...", { id: "rzp-verify" });
          try {
            await verifyPayment({
              productId: product.id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            toast.success("Payment successful! You now own this course 🎉", { id: "rzp-verify" });
            queryClient.invalidateQueries({ queryKey: ["my-courses"] });
            queryClient.invalidateQueries({ queryKey: ["products"] });
            navigate({ to: "/dashboard" });
          } catch (err: any) {
            toast.error(err.message || "Payment verification failed", { id: "rzp-verify" });
          }
        },
        prefill: {
          name: user.name || "Student",
          email: user.email || "",
        },
        theme: {
          color: "#3b82f6",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (resp: any) {
        toast.error(resp.error?.description || "Payment failed or cancelled.");
      });
      rzp.open();
    } catch (err: any) {
      toast.error(err.message || "Failed to initiate checkout", { id: "rzp-checkout" });
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-9 w-64 bg-muted rounded-xl"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-72 bg-muted/60 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !products) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Could not load products</h2>
        <p className="text-muted-foreground mt-2">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* Background subtle grid lighting */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:py-6 sm:px-6 lg:px-8 space-y-7 sm:space-y-10">
        
        {/* Streamlined Compact Header (Saves ~60px of vertical space for above-the-fold CTA) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border/60 pb-3.5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Structured Interview Catalog
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight">
              Products & Learning Pathways
            </h1>
          </div>

          {/* Jump Navigation Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <a
              href="#popular"
              className="px-3 py-1 rounded-lg border border-border bg-card/80 hover:bg-muted text-foreground transition-all flex items-center gap-1.5 shadow-sm text-[11px]"
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Most Popular
            </a>
            <a
              href="#bundles"
              className="px-3 py-1 rounded-lg border border-border bg-card/80 hover:bg-muted text-foreground transition-all flex items-center gap-1.5 shadow-sm text-[11px]"
            >
              <Flame className="w-3 h-3 text-amber-500" /> Career Bundles
            </a>
            <a
              href="#individual-courses"
              className="px-3 py-1 rounded-lg border border-border bg-card/80 hover:bg-muted text-foreground transition-all flex items-center gap-1.5 shadow-sm text-[11px]"
            >
              <BookOpen className="w-3 h-3 text-primary" /> Single Modules
            </a>
            <a
              href="#all-access"
              className="px-3 py-1 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary transition-all flex items-center gap-1.5 shadow-sm text-[11px]"
            >
              <Crown className="w-3 h-3 text-primary" /> All-Access Pass
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1: ⭐ MOST POPULAR STARTING POINTS (ABOVE THE FOLD) */}
        {/* ------------------------------------------------------------- */}
        {popularProducts.length > 0 && (
          <section id="popular" className="scroll-mt-16 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Student Favorites • High Demand
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                  Most Popular Starting Points
                </h2>
              </div>
              <span className="hidden sm:inline-block text-xs text-muted-foreground font-medium">
                Chosen by 80% of students
              </span>
            </div>

            {/* Symmetrical 4-Card Grid with Above-the-Fold CRO */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularProducts.map((product) => {
                const isBundle = (product.courses?.length || 0) > 1;
                const isPurchased =
                  product.courses?.length &&
                  product.courses.every((c) => myCourseIds.has(c.course.id));

                return isBundle ? (
                  <SymmetricalBundleCard
                    key={`pop-${product.id}`}
                    bundle={product}
                    isPurchased={!!isPurchased}
                    onPurchase={() => handlePurchase(product)}
                    onViewSyllabus={() => setSelectedBundle(product)}
                  />
                ) : (
                  <SymmetricalCourseCard
                    key={`pop-${product.id}`}
                    product={product}
                    isPurchased={!!isPurchased}
                    onPurchase={() => handlePurchase(product)}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SECTION 2: ⚡ CAREER & INTERVIEW BUNDLES (WITH NARRATIVE) */}
        {/* ------------------------------------------------------------- */}
        <section id="bundles" className="scroll-mt-16 space-y-3 border-t border-border/60 pt-6 sm:pt-8">
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 fill-amber-500" /> Complete Pathways • Save Up to 50%
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
              Career & Interview Bundles
            </h2>
          </div>

          {/* Narrative Banner: WHY these bundles were created together */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-foreground">
                  Why Were These Bundles Created Together?
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed max-w-3xl">
                  Top tech companies test across multiple disciplines: algorithms (DSA), system architecture, and framework depth. These bundles unite the foundational theory, system design, and resume code-along projects into a single unified track at up to 50% discount.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bundleProducts.map((bundle) => {
              const bundleCourseIds = bundle.courses?.map((c) => c.course.id) || [];
              const isPurchased =
                bundleCourseIds.length > 0 &&
                bundleCourseIds.every((id) => myCourseIds.has(id));

              return (
                <SymmetricalBundleCard
                  key={bundle.id}
                  bundle={bundle}
                  isPurchased={isPurchased}
                  onPurchase={() => handlePurchase(bundle)}
                  onViewSyllabus={() => setSelectedBundle(bundle)}
                />
              );
            })}
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 3: 📚 INDIVIDUAL COURSES (A LA CARTE) */}
        {/* ------------------------------------------------------------- */}
        <section id="individual-courses" className="scroll-mt-16 space-y-3 border-t border-border/60 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-primary uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" /> A La Carte Modules
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                All Individual Courses & Deep Dives
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search 15 courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 rounded-lg bg-card border-border shadow-sm text-xs h-8"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {[
              { id: "all", label: "All Courses" },
              { id: "dsa", label: "DSA & Algorithms" },
              { id: "system-design", label: "System Design" },
              { id: "backend", label: "Backend Engineering" },
              { id: "database", label: "Database & SQL" },
              { id: "projects", label: "Projects & AI" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCourseCategoryFilter(cat.id)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all border",
                  courseCategoryFilter === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card/70 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Individual Courses Grid */}
          {filteredIndividualCourses.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-border rounded-xl bg-card/40">
              <BookOpen className="w-7 h-7 mx-auto text-muted-foreground/60 mb-1.5" />
              <p className="font-semibold text-foreground text-xs">No courses found</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Try adjusting your search query or filter.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredIndividualCourses.map((product) => {
                const courseId = product.courses?.[0]?.course?.id;
                const isPurchased = courseId ? myCourseIds.has(courseId) : false;

                return (
                  <SymmetricalCourseCard
                    key={product.id}
                    product={product}
                    isPurchased={isPurchased}
                    onPurchase={() => handlePurchase(product)}
                  />
                );
              })}
            </div>
          )}
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 4: 👑 ALL-ACCESS LIFETIME CAREER PASS (FLAGSHIP) */}
        {/* ------------------------------------------------------------- */}
        {allAccessProduct && (
          <section id="all-access" className="scroll-mt-16 border-t border-border/60 pt-6 sm:pt-8 pb-6">
            <AllAccessMasterBanner
              product={allAccessProduct}
              isPurchased={
                allAccessProduct.courses?.length
                  ? allAccessProduct.courses.every((c) => myCourseIds.has(c.course.id))
                  : false
              }
              onPurchase={() => handlePurchase(allAccessProduct)}
              onViewSyllabus={() => setSelectedBundle(allAccessProduct)}
            />
          </section>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* REUSABLE INCLUDED COURSES MODAL */}
      {/* ------------------------------------------------------------- */}
      <IncludedCoursesModal
        bundle={selectedBundle}
        isOpen={!!selectedBundle}
        onClose={() => setSelectedBundle(null)}
        onPurchase={(bundle) => {
          setSelectedBundle(null);
          handlePurchase(bundle);
        }}
        myCourseIds={myCourseIds}
      />
    </div>
  );
}

// -----------------------------------------------------------------------
// SYMMETRICAL BUNDLE CARD (Balanced Height & Above-the-Fold CRO)
// -----------------------------------------------------------------------
function SymmetricalBundleCard({
  bundle,
  isPurchased,
  onPurchase,
  onViewSyllabus,
}: {
  bundle: ApiProduct;
  isPurchased: boolean;
  onPurchase: () => void;
  onViewSyllabus: () => void;
}) {
  const { icon: Icon, tint } = getVisualsForProduct(bundle.title);
  const courses = bundle.courses || [];
  const primaryCourseId = courses[0]?.course?.id;
  const highlights = getHighlightsForProduct(bundle.title);
  const discountPercent =
    bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr
      ? Math.round(((bundle.compareAtPriceInr - bundle.priceInr) / bundle.compareAtPriceInr) * 100)
      : null;

  return (
    <Card className="group flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border bg-card text-card-foreground rounded-xl">
      
      {/* 100% Unobstructed Clean 16:9 Thumbnail */}
      <div 
        onClick={onViewSyllabus}
        className="relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border/60 cursor-pointer"
        title="Click to view full curriculum syllabus"
      >
        {bundle.imageUrl ? (
          <img
            src={bundle.imageUrl}
            alt={bundle.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", tint)}>
            <Icon className="h-8 w-8 text-primary/70" />
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Badges Micro-bar */}
          <div className="flex items-center justify-between gap-1.5 mb-1.5">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] font-bold px-1.5 py-0.5">
              <Layers className="w-3 h-3 mr-1" /> {courses.length} Modules
            </Badge>
            <div className="flex items-center gap-1">
              {discountPercent && (
                <Badge className="bg-amber-500 text-white font-extrabold text-[10px] px-1.5 py-0.2 shadow-sm">
                  Save {discountPercent}%
                </Badge>
              )}
              {isPurchased && (
                <Badge className="bg-emerald-600 text-white font-bold text-[10px] px-1.5 py-0.2 shadow-sm">
                  <Check className="w-3 h-3 mr-0.5" /> Owned
                </Badge>
              )}
            </div>
          </div>

          {/* Clickable Title with Full Text on Hover */}
          <button
            onClick={onViewSyllabus}
            title={bundle.title}
            className="text-left w-full group/title focus:outline-none mb-1"
          >
            <h3 className="font-bold text-xs sm:text-sm leading-snug text-foreground group-hover/title:text-primary transition-colors line-clamp-1 group-hover:line-clamp-none">
              {bundle.title}
            </h3>
          </button>

          <p className="text-[11px] text-muted-foreground line-clamp-1 mb-2">
            {bundle.description || "Comprehensive multi-course career track designed for interview success."}
          </p>

          {/* Symmetrical Mini-Box (~46px) */}
          <div className="bg-muted/40 border border-border/60 p-2 rounded-lg mb-2.5 text-[11px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center justify-between">
              <span>Included Topics</span>
              <span className="text-primary font-mono">{highlights.label}</span>
            </div>
            <div className="space-y-0.5 text-[10px] text-foreground/90">
              <div className="flex items-center gap-1.5 truncate">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate">{highlights.topic1}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate">{highlights.topic2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Horizontal Footer: Price on Left, Buy Button on Right */}
        <div className="pt-2 border-t border-border/60">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div>
              <div className="text-base font-extrabold text-foreground leading-none">{fmt(bundle.priceInr)}</div>
              {bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr && (
                <div className="text-[10px] text-muted-foreground line-through font-medium mt-0.5">
                  {fmt(bundle.compareAtPriceInr)}
                </div>
              )}
            </div>

            {isPurchased ? (
              primaryCourseId ? (
                <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-8 px-3 text-xs font-semibold shadow-sm">
                  <Link to="/courses" search={{ courseId: primaryCourseId }}>
                    <Play className="mr-1 h-3 w-3 fill-current" /> Open
                  </Link>
                </Button>
              ) : (
                <Button disabled size="sm" className="rounded-lg h-8 px-2.5 text-xs font-medium">Owned</Button>
              )
            ) : (
              <Button
                size="sm"
                onClick={onPurchase}
                className="rounded-lg shadow-sm bg-primary text-primary-foreground hover:shadow-md transition-all h-8 px-3 text-xs font-bold"
              >
                Enroll Now
              </Button>
            )}
          </div>

          {/* Symmetrical Micro-Action Line */}
          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40">
            <span className="text-emerald-500 font-medium">Lifetime Access</span>
            <button
              onClick={onViewSyllabus}
              className="text-primary font-semibold hover:underline flex items-center gap-0.5"
            >
              View {courses.length} Courses <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

// -----------------------------------------------------------------------
// SYMMETRICAL COURSE CARD (Exact Same Height & Cadence as Bundle Card)
// -----------------------------------------------------------------------
function SymmetricalCourseCard({
  product,
  isPurchased,
  onPurchase,
}: {
  product: ApiProduct;
  isPurchased: boolean;
  onPurchase: () => void;
}) {
  const { icon: Icon, tint } = getVisualsForProduct(product.title);
  const primaryCourseId = product.courses?.[0]?.course?.id;
  const highlights = getHighlightsForProduct(product.title);

  return (
    <Card className="group flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border bg-card text-card-foreground rounded-xl">
      
      {/* 100% Unobstructed Clean 16:9 Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border/60">
        {primaryCourseId ? (
          <Link
            to="/courses"
            search={{ courseId: primaryCourseId }}
            className="block w-full h-full cursor-pointer"
            title="Click to preview course curriculum"
          >
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", tint)}>
                <Icon className="h-8 w-8 text-primary/70" />
              </div>
            )}
          </Link>
        ) : (
          product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", tint)}>
              <Icon className="h-8 w-8 text-primary/70" />
            </div>
          )
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Badges Micro-bar (Above title, outside image) */}
          <div className="flex items-center justify-between gap-1.5 mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Single Module
            </span>
            {isPurchased && (
              <Badge className="bg-emerald-600 text-white font-bold text-[10px] px-1.5 py-0.2 shadow-sm border-0">
                <Check className="w-3 h-3 mr-0.5" /> Owned
              </Badge>
            )}
          </div>

          {/* Clickable Title with Full Text on Hover */}
          {primaryCourseId ? (
            <Link
              to="/courses"
              search={{ courseId: primaryCourseId }}
              title={product.title}
              className="block group/title mb-1"
            >
              <h3 className="font-bold text-xs sm:text-sm leading-snug text-foreground group-hover/title:text-primary transition-colors line-clamp-1 group-hover:line-clamp-none">
                {product.title}
              </h3>
            </Link>
          ) : (
            <h3
              title={product.title}
              className="font-bold text-xs sm:text-sm leading-snug text-foreground line-clamp-1 group-hover:line-clamp-none mb-1"
            >
              {product.title}
            </h3>
          )}

          <p className="text-[11px] text-muted-foreground line-clamp-1 mb-2">
            {product.description || "Master these concepts with visual breakdowns and code solutions."}
          </p>

          {/* Symmetrical Mini-Box (~46px - EXACT SAME HEIGHT AS BUNDLE!) */}
          <div className="bg-muted/40 border border-border/60 p-2 rounded-lg mb-2.5 text-[11px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center justify-between">
              <span>Core Topics</span>
              <span className="text-primary font-mono">{highlights.label}</span>
            </div>
            <div className="space-y-0.5 text-[10px] text-foreground/90">
              <div className="flex items-center gap-1.5 truncate">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate">{highlights.topic1}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate">{highlights.topic2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Horizontal Footer: Price on Left, Buy Button on Right */}
        <div className="pt-2 border-t border-border/60">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div>
              <div className="text-base font-extrabold text-foreground leading-none">{fmt(product.priceInr)}</div>
              <div className="text-[10px] text-emerald-500 font-medium mt-0.5">Lifetime Access</div>
            </div>

            {isPurchased ? (
              primaryCourseId ? (
                <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-8 px-3 text-xs font-semibold shadow-sm">
                  <Link to="/courses" search={{ courseId: primaryCourseId }}>
                    <Play className="mr-1 h-3 w-3 fill-current" /> Open
                  </Link>
                </Button>
              ) : (
                <Button disabled size="sm" className="rounded-lg h-8 px-2.5 text-xs font-medium">Owned</Button>
              )
            ) : (
              <Button
                size="sm"
                onClick={onPurchase}
                className="rounded-lg shadow-sm bg-primary text-primary-foreground hover:shadow-md transition-all h-8 px-3 text-xs font-bold"
              >
                Buy Now
              </Button>
            )}
          </div>

          {/* Symmetrical Micro-Action Line */}
          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40">
            <span className="text-muted-foreground">Self-Paced</span>
            {primaryCourseId && (
              <Link
                to="/courses"
                search={{ courseId: primaryCourseId }}
                className="text-primary font-semibold hover:underline flex items-center gap-0.5"
              >
                Preview Syllabus <ChevronRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

// -----------------------------------------------------------------------
// MASTER ALL-ACCESS BANNER (The Flagship Anchor at the Bottom)
// -----------------------------------------------------------------------
function AllAccessMasterBanner({
  product,
  isPurchased,
  onPurchase,
  onViewSyllabus,
}: {
  product: ApiProduct;
  isPurchased: boolean;
  onPurchase: () => void;
  onViewSyllabus: () => void;
}) {
  const coursesCount = product.courses?.length || 15;
  const discountPercent =
    product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr
      ? Math.round(((product.compareAtPriceInr - product.priceInr) / product.compareAtPriceInr) * 100)
      : 50;

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-primary/40 bg-gradient-to-br from-card via-card/95 to-primary/10 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
      {/* Ambient Radial Lights */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/30 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left Col: The Pitch */}
        <div className="lg:col-span-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-0.5 text-xs font-bold text-primary shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            The Ultimate Engineering Arsenal • All 15 Courses
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight">
            All-Access Lifetime Career Pass
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Unlock the entire CodeBreakdowns library for life — including the Blind 75, Blind 150, System Design, SQL, Node.js, Python/Django, modern Agentic AI, and both production capstone projects, plus all future updates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs font-medium text-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Instant Lifetime Access to All 15 Courses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>All Future Updates & Modules Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Full Source Code Repositories & Blueprints</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Priority Corporate Hiring Pilot Waitlist Access</span>
            </div>
          </div>

          <div className="pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={onViewSyllabus}
              className="rounded-lg border-border hover:bg-muted text-xs font-semibold h-8"
            >
              <Eye className="w-3.5 h-3.5 mr-1.5 text-primary" /> Browse All {coursesCount} Included Modules →
            </Button>
          </div>
        </div>

        {/* Right Col: Price Box & CTA */}
        <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
          <Card className="w-full max-w-md p-4 sm:p-5 border border-primary/30 bg-background/90 backdrop-blur-md rounded-xl shadow-xl flex flex-col text-center">
            {product.imageUrl && (
              <div 
                onClick={onViewSyllabus}
                className="mb-2.5 aspect-[16/9] w-full rounded-lg overflow-hidden border border-border/60 shadow-md cursor-pointer group/pass"
                title="Click to view all included modules"
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover/pass:scale-105 transition-transform duration-300" 
                />
              </div>
            )}

            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Special Launch Pass
            </span>
            <div className="mt-0.5 flex items-baseline justify-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {fmt(product.priceInr)}
              </span>
              {product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && (
                <span className="text-sm text-muted-foreground line-through font-semibold">
                  {fmt(product.compareAtPriceInr)}
                </span>
              )}
            </div>

            <div className="mt-0.5 mb-3">
              <span className="inline-block text-[10px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Save {discountPercent}% • Lifetime Access
              </span>
            </div>

            {isPurchased ? (
              <Button asChild size="sm" className="w-full font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-md h-9 text-xs">
                <Link to="/courses">
                  <Play className="mr-1.5 h-3.5 w-3.5 fill-current" /> Go to My Curriculum
                </Link>
              </Button>
            ) : (
              <Button
                onClick={onPurchase}
                size="sm"
                className="w-full font-bold rounded-lg shadow-lg bg-primary text-primary-foreground hover:shadow-primary/25 hover:scale-[1.02] transition-all text-xs h-9"
              >
                Get All-Access Pass • {fmt(product.priceInr)}
              </Button>
            )}

            <p className="text-[10px] text-muted-foreground mt-1.5">
              One-time payment • No subscription • 100% secure Razorpay checkout
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------
// INCLUDED COURSES MODAL (Full Syllabus Viewer for any Bundle)
// -----------------------------------------------------------------------
function IncludedCoursesModal({
  bundle,
  isOpen,
  onClose,
  onPurchase,
  myCourseIds,
}: {
  bundle: ApiProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (bundle: ApiProduct) => void;
  myCourseIds: Set<string>;
}) {
  if (!bundle) return null;

  const courses = bundle.courses || [];
  const isPurchased =
    courses.length > 0 && courses.every((c) => myCourseIds.has(c.course.id));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0 bg-background border-border rounded-2xl shadow-2xl">
        <DialogHeader className="p-4 sm:p-5 pb-3 border-b border-border bg-card/60">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] font-semibold">
              <Layers className="w-3 h-3 mr-1" /> {courses.length} Courses Included
            </Badge>
            {bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr && (
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] font-bold">
                Save {fmt(bundle.compareAtPriceInr - bundle.priceInr)}
              </Badge>
            )}
          </div>
          <DialogTitle className="text-lg sm:text-xl font-extrabold text-foreground">
            {bundle.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground mt-0.5">
            {bundle.description}
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Course List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
            <span>Syllabus Breakdown</span>
            <span>{courses.length} Modules</span>
          </div>

          {courses.map(({ course }, idx) => {
            const isCourseOwned = myCourseIds.has(course.id);
            return (
              <div
                key={course.id}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg border border-border bg-card/70 hover:border-primary/40 transition-all gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {course.imageUrl ? (
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-11 h-7 rounded-md object-cover border border-border/60 shrink-0"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm text-foreground truncate">
                      {course.title}
                    </p>
                    <span className="text-[10px] text-muted-foreground">Full curriculum & video breakdowns</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {isCourseOwned && (
                    <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                      Owned
                    </span>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="h-7 px-2 text-[11px] font-semibold text-primary hover:bg-primary/10 rounded-md"
                  >
                    <Link to="/courses" search={{ courseId: course.id }} onClick={onClose}>
                      Preview <ChevronRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer with Purchase CTA */}
        <DialogFooter className="p-3 sm:p-4 border-t border-border bg-card/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="flex items-baseline gap-2 text-left">
            <span className="text-xl font-extrabold text-foreground">{fmt(bundle.priceInr)}</span>
            {bundle.compareAtPriceInr && bundle.compareAtPriceInr > bundle.priceInr && (
              <span className="text-xs text-muted-foreground line-through">
                {fmt(bundle.compareAtPriceInr)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onClose} className="rounded-lg text-xs h-8">
              Close
            </Button>
            {isPurchased ? (
              <Button asChild size="sm" className="rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs h-8">
                <Link to="/courses" onClick={onClose}>
                  Go to Courses →
                </Link>
              </Button>
            ) : (
              <Button
                onClick={() => onPurchase(bundle)}
                size="sm"
                className="rounded-lg bg-primary text-primary-foreground font-semibold shadow-md text-xs h-8"
              >
                Buy Bundle • {fmt(bundle.priceInr)}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
