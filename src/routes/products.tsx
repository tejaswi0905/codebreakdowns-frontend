import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
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
import { fetchProducts, type ApiProduct } from "@/services/api";

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

function ProductsPage() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handlePurchase = (productId: string) => {
    toast("Checkout flow initializing...");
    // Future: Call Stripe / Razorpay checkout session here
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
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onPurchase={() => handlePurchase(p.id)} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ProductCard({ product, onPurchase }: { product: ApiProduct, onPurchase: () => void }) {
  const { icon: Icon, tint } = getVisualsForProduct(product.title);
  // We assume purchased logic comes from user state, 
  // but for now, we just display the buy button.
  const isPurchased = false; 

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
