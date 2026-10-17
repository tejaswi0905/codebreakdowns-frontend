import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      { title: "Products & Bundles — CodeBreakdowns" },
      {
        name: "description",
        content: "Browse and purchase interview prep courses and bundles.",
      },
    ],
  }),
  component: ProductsPage,
});

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

// Helper to assign icons/colors based on title for a premium look
const getVisualsForProduct = (title: string): { icon: LucideIcon, tint: string } => {
  const lower = title.toLowerCase();
  if (lower.includes("backend") || lower.includes("system")) {
    return { icon: Server, tint: "from-emerald-500/15 to-emerald-500/5" };
  }
  if (lower.includes("dbms") || lower.includes("database") || lower.includes("sql")) {
    return { icon: Database, tint: "from-amber-500/15 to-amber-500/5" };
  }
  if (lower.includes("150") || lower.includes("advanced") || lower.includes("bundle")) {
    return { icon: Layers, tint: "from-indigo-500/15 to-indigo-500/5" };
  }
  return { icon: Code2, tint: "from-blue-500/15 to-blue-500/5" };
};

// Dynamic SDK loader to keep initial bundle size small
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

  const myCourseIds = new Set((myCourses || []).map((c) => c.id));

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
          name: user.displayName || user.username || "Student",
          email: "",
        },
        theme: {
          color: "#3b82f6", // Brand primary color
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
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-48 bg-muted rounded"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-muted rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !products) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Could not load products</h2>
        <p className="text-muted-foreground mt-2">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Products
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse individual courses and curated bundles.
        </p>
      </div>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" /> Available Offerings
        </h2>
        {products.length === 0 ? (
          <div className="text-center py-12 border border-border rounded-xl bg-muted/30">
            <h3 className="text-lg font-medium">Coming Soon</h3>
            <p className="text-muted-foreground text-sm mt-1">We are actively building our catalog.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => {
              const productCourseIds = p.courses?.map((c) => c.course.id) || [];
              const isPurchased =
                productCourseIds.length > 0 &&
                productCourseIds.every((id) => myCourseIds.has(id));

              return (
                <ProductCard
                  key={p.id}
                  product={p}
                  isPurchased={isPurchased}
                  onPurchase={() => handlePurchase(p)}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

function ProductCard({
  product,
  isPurchased,
  onPurchase,
}: {
  product: ApiProduct;
  isPurchased: boolean;
  onPurchase: () => void;
}) {
  const { icon: Icon, tint } = getVisualsForProduct(product.title);
  const courses = product.courses || [];
  const primaryCourseId = courses[0]?.course?.id;
  const isBundle = courses.length > 1;

  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-border bg-card text-card-foreground rounded-2xl">
      {/* Header Banner */}
      <div className={cn("relative h-32 bg-gradient-to-br", tint)}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover opacity-80" />
        ) : (
          <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-background/80 text-primary shadow-sm backdrop-blur">
            <Icon className="h-5 w-5" />
          </div>
        )}

        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          {isBundle && (
            <Badge variant="secondary" className="bg-background/90 backdrop-blur text-[11px] font-semibold border border-border">
              Bundle ({courses.length})
            </Badge>
          )}
          {isPurchased && (
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 backdrop-blur text-[11px] font-semibold">
              <Check className="mr-1 h-3 w-3" /> Owned
            </Badge>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description || "Master these concepts with visual breakdowns and code solutions."}
        </p>

        {/* Included Courses Preview */}
        {courses.length > 0 && (
          <div className="mt-4 pt-3 border-t border-border/60 flex-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
              <span>{isBundle ? `Included Courses (${courses.length})` : "Course Content"}</span>
            </div>
            <div className="space-y-1.5">
              {courses.map(({ course }) => (
                <Link
                  key={course.id}
                  to="/courses"
                  search={{ courseId: course.id }}
                  className="flex items-center justify-between rounded-lg bg-secondary/40 hover:bg-secondary px-3 py-2 text-xs font-medium text-foreground transition-all group/item border border-transparent hover:border-border"
                >
                  <span className="truncate group-hover/item:text-primary transition-colors">
                    {course.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground group-hover/item:text-primary flex items-center gap-0.5 ml-2 shrink-0 font-medium">
                    Preview <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-5 pt-4 border-t border-border/60">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-foreground">{fmt(product.priceInr)}</span>
              {product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && (
                <span className="text-xs text-muted-foreground line-through">
                  {fmt(product.compareAtPriceInr)}
                </span>
              )}
            </div>
            {product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && (
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Save {Math.round(((product.compareAtPriceInr - product.priceInr) / product.compareAtPriceInr) * 100)}%
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {isPurchased ? (
              primaryCourseId ? (
                <Button asChild className="w-full font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm">
                  <Link to="/courses" search={{ courseId: primaryCourseId }}>
                    <Play className="mr-1.5 h-4 w-4 fill-current" /> Start Learning
                  </Link>
                </Button>
              ) : (
                <Button disabled className="w-full font-medium rounded-xl">Owned</Button>
              )
            ) : (
              <>
                <Button
                  className="w-full font-semibold rounded-xl shadow-sm bg-primary text-primary-foreground hover:shadow-md transition-all"
                  onClick={onPurchase}
                >
                  Buy Now • {fmt(product.priceInr)}
                </Button>
                {primaryCourseId && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full rounded-xl text-xs font-medium hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
                  >
                    <Link to="/courses" search={{ courseId: primaryCourseId }}>
                      <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Explore Chapters & Lessons
                    </Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

