import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Check,
  Sparkles,
  BookOpen,
  Layers,
  Database,
  Server,
  Code2,
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
      { title: "Products — CodeBreakdowns" },
      {
        name: "description",
        content: "Browse and purchase interview prep courses and bundles.",
      },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ProductsPage />
    </ProtectedRoute>
  ),
});

import { ProtectedRoute } from "@/components/ProtectedRoute";

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
          <div className="h-8 w-48 bg-white/10 rounded"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-white/5 rounded-xl"></div>
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
          <div className="text-center py-12 border border-white/5 rounded-xl bg-black/20">
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

  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-all hover:-translate-y-0.5 hover:shadow-md border border-white/10 bg-[#0a0a0a]">
      <div className={cn("relative h-28 bg-gradient-to-br", tint)}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover opacity-80" />
        ) : (
          <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-background/80 text-primary shadow-sm backdrop-blur">
            <Icon className="h-5 w-5" />
          </div>
        )}
        
        {isPurchased && (
          <div className="absolute right-4 top-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur">
              <Check className="mr-1 h-3 w-3 text-success" /> Owned
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold leading-tight">{product.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
          {product.description || "Learn and master these concepts."}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{fmt(product.priceInr)}</span>
            {product.compareAtPriceInr && product.compareAtPriceInr > product.priceInr && (
              <span className="text-xs text-muted-foreground line-through">
                {fmt(product.compareAtPriceInr)}
              </span>
            )}
          </div>
          <Button
            className="mt-4 w-full font-medium"
            variant={isPurchased ? "outline" : "default"}
            onClick={onPurchase}
            disabled={isPurchased}
          >
            {isPurchased ? "Purchased" : "Buy Now"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

