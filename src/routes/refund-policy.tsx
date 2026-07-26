import { createFileRoute } from "@tanstack/react-router";
import { RefreshCcw, ShieldCheck, Clock, AlertTriangle, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — CodeBreakdowns" },
      {
        name: "description",
        content: "Review CodeBreakdowns' cancellation and refund terms for digital educational courses and product bundles.",
      },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  const lastUpdated = "July 26, 2026";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
          <RefreshCcw className="h-3.5 w-3.5" /> Satisfaction Guarantee
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Cancellation & Refund Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last Updated: {lastUpdated} • Effective Date: {lastUpdated}
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">1</span>
            Our Refund Commitment
          </h2>
          <p>
            At <strong className="text-foreground">CodeBreakdowns</strong>, we take immense pride in the technical depth and production quality of our software engineering courses. We want you to feel confident in investing in your career. Because our offerings are digital educational goods with immediate streaming access upon checkout, we have established a fair, transparent refund framework compliant with Indian consumer protection and Razorpay guidelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">2</span>
            Eligibility for Refunds
          </h2>
          <Card className="p-5 border border-border bg-card text-card-foreground space-y-3 mt-2">
            <p className="text-xs">
              We offer a <strong className="text-foreground">7-Day Refund Window</strong> from the date and time of your original purchase, subject to the following fair-use conditions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs mt-2">
              <li>
                <strong className="text-foreground">Time Limit:</strong> Your refund request must be submitted via email within exactly seven (7) calendar days of the transaction timestamp.
              </li>
              <li>
                <strong className="text-foreground">Consumption Limit:</strong> To protect our intellectual property from abuse or piracy, refunds are only granted if you have streamed or viewed <strong className="text-foreground">less than 20%</strong> of the total video duration or lessons in the purchased course/bundle.
              </li>
              <li>
                <strong className="text-foreground">No Policy Abuse:</strong> Students who engage in serial purchasing and refunding, or who attempt to scrape/download source code repositories before requesting a refund, will be deemed ineligible.
              </li>
            </ul>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">3</span>
            How to Request a Refund
          </h2>
          <p>
            To initiate a refund request, please send an email from your registered account email address to our support team with the following details:
          </p>
          <Card className="p-5 border border-border bg-card text-card-foreground font-mono text-xs space-y-1 bg-muted/40">
            <p className="text-primary font-bold mb-2">// Send email to: codebreakdowns@gmail.com</p>
            <p>Subject: Refund Request - [Your Course / Bundle Title]</p>
            <p>1. Registered Email Address:</p>
            <p>2. Razorpay Payment ID / Order ID (found in receipt):</p>
            <p>3. Reason for Refund (helps us improve):</p>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">4</span>
            Refund Processing Timeline & Method
          </h2>
          <p>
            Once our support team receives your request and verifies that your account meets the eligibility criteria (within 7 days and &lt; 20% consumption), we will initiate the refund through our payment gateway, <strong className="text-foreground">Razorpay</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-foreground">Approval Time:</strong> We review and respond to all refund requests within 24–48 business hours.
            </li>
            <li>
              <strong className="text-foreground">Bank Processing Time:</strong> Approved refunds are credited back to the original payment source (UPI bank account, Credit Card, Debit Card, or Netbanking account) within <strong className="text-foreground">5 to 7 business days</strong> as per standard Indian banking cycles.
            </li>
            <li>
              <strong className="text-foreground">Access Termination:</strong> Upon processing the refund, lifetime access to the refunded course/bundle will be automatically revoked from your user dashboard.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">5</span>
            Cancellation Policy
          </h2>
          <p>
            Because CodeBreakdowns operates on a <strong className="text-foreground">one-time payment, lifetime ownership</strong> model rather than recurring recurring subscriptions, there are no monthly subscription renewals to cancel. Once you purchase a course, you never have to worry about unwanted monthly charges or cancellation penalties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">6</span>
            Contact & Support
          </h2>
          <p>
            If you have any questions about your transaction or need assistance with a refund, we are always here to help:
          </p>
          <Card className="p-4 border border-border bg-card text-card-foreground inline-block">
            <p className="text-xs text-foreground font-medium">CodeBreakdowns Billing & Support</p>
            <p className="text-xs text-primary mt-0.5">Email: codebreakdowns@gmail.com</p>
            <p className="text-[11px] text-muted-foreground mt-1">Working Hours: Mon–Sat, 10:00 AM – 7:00 PM IST</p>
          </Card>
        </section>
      </div>
    </div>
  );
}
