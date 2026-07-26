import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CodeBreakdowns" },
      {
        name: "description",
        content: "Learn how CodeBreakdowns collects, uses, and protects your personal and payment data.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const lastUpdated = "July 26, 2026";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
          <Shield className="h-3.5 w-3.5" /> Data Security & Privacy
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last Updated: {lastUpdated} • Effective Date: {lastUpdated}
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">1</span>
            Introduction
          </h2>
          <p>
            Welcome to <strong className="text-foreground">CodeBreakdowns</strong> ("we," "our," or "us"), an online educational platform dedicated to software engineering and systems design instruction, operated out of Hyderabad, India. We respect your privacy and are committed to protecting the personal information you share with us when you access our website (<code className="text-primary">https://www.codebreakdowns.in</code>) and use our learning services.
          </p>
          <p>
            This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in accordance with the Information Technology Act, 2000 and applicable data protection regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">2</span>
            Information We Collect
          </h2>
          <Card className="p-5 border border-border bg-card text-card-foreground space-y-3 mt-2">
            <div>
              <h4 className="font-medium text-foreground text-xs uppercase tracking-wider">A. Personal Information Provided by You</h4>
              <p className="text-xs mt-1">
                When you register or log in using GitHub OAuth, we receive basic authentication details such as your GitHub username, display name, public avatar URL, and email address. When you contact support, we collect the contents of your messages and any contact details provided.
              </p>
            </div>
            <div className="border-t border-white/5 pt-3">
              <h4 className="font-medium text-foreground text-xs uppercase tracking-wider">B. Payment & Transaction Information</h4>
              <p className="text-xs mt-1">
                All financial transactions and course purchases are processed securely through our authorized payment gateway partner, <strong className="text-foreground">Razorpay Software Private Limited</strong>. We do <strong className="text-foreground">not</strong> store, process, or transmit your raw credit card numbers, debit card details, UPI PINs, or banking credentials on our servers. Razorpay handles all payment data in compliance with PCI-DSS standards and RBI regulations. We only retain transaction metadata (such as Razorpay Order ID, Payment ID, amount paid, and timestamp) to unlock course access in your user dashboard.
              </p>
            </div>
            <div className="border-t border-white/5 pt-3">
              <h4 className="font-medium text-foreground text-xs uppercase tracking-wider">C. Usage & Learning Progress Data</h4>
              <p className="text-xs mt-1">
                To provide a seamless learning experience, we automatically track your course completion status, video playback progress, bookmarked lessons, and quiz results.
              </p>
            </div>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">3</span>
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To authenticate your identity and maintain your secure user account.</li>
            <li>To grant and verify lifetime access to purchased courses, bundles, and learning resources.</li>
            <li>To process transactions, generate payment receipts, and resolve billing inquiries.</li>
            <li>To synchronize video streaming progress across your devices.</li>
            <li>To send important service announcements, security notices, or technical updates (we do not send spam).</li>
            <li>To detect and prevent fraudulent activities, copyright infringement, or account sharing.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">4</span>
            Data Sharing & Third-Party Services
          </h2>
          <p>
            We never sell, rent, or trade your personal data to advertisers or third-party marketing firms. We only share necessary data with trusted service providers who assist us in operating our platform:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-md border border-white/5 bg-white/[0.02]">
              <span className="font-semibold text-foreground block text-xs">Razorpay (Payment Gateway)</span>
              <span className="text-[11px] text-muted-foreground">For processing INR payments, UPI transactions, and fraud verification.</span>
            </div>
            <div className="p-3 rounded-md border border-white/5 bg-white/[0.02]">
              <span className="font-semibold text-foreground block text-xs">GitHub (Authentication)</span>
              <span className="text-[11px] text-muted-foreground">For secure OAuth login without storing passwords.</span>
            </div>
            <div className="p-3 rounded-md border border-white/5 bg-white/[0.02]">
              <span className="font-semibold text-foreground block text-xs">Cloud Hosting Providers</span>
              <span className="text-[11px] text-muted-foreground">Render & Vercel for hosting encrypted databases and frontend assets.</span>
            </div>
            <div className="p-3 rounded-md border border-white/5 bg-white/[0.02]">
              <span className="font-semibold text-foreground block text-xs">Legal & Compliance</span>
              <span className="text-[11px] text-muted-foreground">When required by Indian law enforcement or judicial order.</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">5</span>
            Data Security
          </h2>
          <p>
            We implement industry-standard administrative, technical, and physical security measures, including HTTPS encryption (SSL/TLS), HTTP-only secure JWT cookies, and role-based database access controls, to safeguard your personal data from unauthorized access or disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">6</span>
            Your Rights & Contact Information
          </h2>
          <p>
            You have the right to request access to, correction of, or deletion of your account and personal data stored on our platform. To exercise your privacy rights or ask questions regarding this policy, please contact our Data Protection Officer at:
          </p>
          <Card className="p-4 border border-border bg-card text-card-foreground inline-block">
            <p className="text-xs text-foreground font-medium">CodeBreakdowns Support Team</p>
            <p className="text-xs text-primary mt-0.5">Email: codebreakdowns@gmail.com</p>
            <p className="text-[11px] text-muted-foreground mt-1">Location: Hyderabad, Telangana, India</p>
          </Card>
        </section>
      </div>
    </div>
  );
}
