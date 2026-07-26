import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, Zap, Shield, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Plans — CodeBreakdowns" },
      {
        name: "description",
        content: "Transparent, lifetime access pricing for software engineering courses and bundles. No hidden subscriptions.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
          <Sparkles className="h-3.5 w-3.5" /> Transparent Pricing
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
          Invest in Your Engineering Career
        </h1>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          No monthly subscription traps. Buy the individual courses or curated bundles you need once, and own lifetime access with all future updates included.
        </p>
      </div>

      {/* Philosophy Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <Card className="p-6 border border-border bg-card text-card-foreground flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-blue-500/10 text-blue-500 grid place-items-center mb-4">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">Pay Once, Own Forever</h3>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Every purchase grants unlimited lifetime streaming and access to all accompanying code repositories and architecture diagrams.
          </p>
        </Card>

        <Card className="p-6 border border-primary/30 bg-gradient-to-b from-primary/10 to-card text-card-foreground flex flex-col items-center text-center relative overflow-hidden shadow-lg shadow-primary/5">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl uppercase">
            Most Popular
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/20 text-primary grid place-items-center mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">Curated Bundles</h3>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Save up to 40% by purchasing comprehensive mastery tracks (e.g., Backend Architecture & System Design together).
          </p>
        </Card>

        <Card className="p-6 border border-border bg-card text-card-foreground flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 grid place-items-center mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">Secure Razorpay Payments</h3>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            We accept all Indian UPI apps (GPay, PhonePe, Paytm), Netbanking, Credit & Debit Cards with 256-bit SSL encryption.
          </p>
        </Card>
      </div>

      {/* CTA Box to Products */}
      <Card className="max-w-4xl mx-auto p-8 sm:p-12 border border-border bg-card text-card-foreground text-center rounded-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5">
            Live Catalog Available
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Explore Our Course Products
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Browse our full lineup of deep-dive breakdowns. Each product shows exact INR pricing with instant checkout.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="font-semibold px-8 gap-2 shadow-lg shadow-primary/20">
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="font-semibold px-8 border-border bg-background hover:bg-accent">
                Browse Individual Lessons
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <Card className="p-5 border border-border bg-card text-card-foreground">
            <h4 className="font-medium text-foreground text-sm">Do you offer refunds?</h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Yes! Please refer to our detailed <Link to="/refund-policy" className="text-primary hover:underline">Refund & Cancellation Policy</Link>. We aim for 100% student satisfaction.
            </p>
          </Card>
          <Card className="p-5 border border-border bg-card text-card-foreground">
            <h4 className="font-medium text-foreground text-sm">How long do I have access to a purchased course?</h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Once purchased, you get lifetime access to the course content, including any future videos or modules added to that specific product.
            </p>
          </Card>
          <Card className="p-5 border border-border bg-card text-card-foreground">
            <h4 className="font-medium text-foreground text-sm">What payment methods are supported?</h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              We use Razorpay as our official payment gateway, supporting UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit/Debit cards, Netbanking across 50+ Indian banks, and popular wallets.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
