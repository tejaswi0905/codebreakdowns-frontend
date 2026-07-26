import { createFileRoute } from "@tanstack/react-router";
import { FileText, AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — CodeBreakdowns" },
      {
        name: "description",
        content: "Read the Terms and Conditions governing your use of the CodeBreakdowns platform and course content.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const lastUpdated = "July 26, 2026";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
          <FileText className="h-3.5 w-3.5" /> Legal Agreement
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last Updated: {lastUpdated} • Effective Date: {lastUpdated}
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">1</span>
            Acceptance of Terms
          </h2>
          <p>
            By accessing, browsing, registering an account, or purchasing educational content on <strong className="text-foreground">CodeBreakdowns</strong> (<code className="text-primary">https://www.codebreakdowns.in</code>), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue using our website and services immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">2</span>
            User Account & Responsibilities
          </h2>
          <p>
            To access our paid courses and learning dashboards, you must authenticate via GitHub OAuth. You agree to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Provide accurate and current information during onboarding and payment checkout.</li>
            <li>Maintain the confidentiality of your authentication credentials and account access.</li>
            <li>Never share, lease, sell, or distribute your account credentials to third parties. Our platform utilizes concurrent login monitoring and automated DRM protection; account sharing or unauthorized redistribution will result in immediate permanent suspension without refund.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">3</span>
            Intellectual Property & License to Use
          </h2>
          <Card className="p-5 border border-border bg-card text-card-foreground space-y-3 mt-2">
            <p className="text-xs">
              All materials hosted on CodeBreakdowns—including video lectures, source code breakdowns, system design schematics, architectural diagrams, text lessons, and graphics—are the exclusive intellectual property of CodeBreakdowns and are protected by international copyright and trade secret laws.
            </p>
            <div className="border-t border-white/5 pt-3">
              <h4 className="font-medium text-foreground text-xs uppercase tracking-wider">Limited License Granted</h4>
              <p className="text-xs mt-1">
                Upon purchasing a course or product bundle, we grant you a limited, non-exclusive, non-transferable, revocable license to stream video lectures and review source code solely for your personal, non-commercial educational use. You are strictly prohibited from downloading (except where explicitly permitted), screen-recording, ripping, mirroring, or republishing any course materials on YouTube, Telegram, Google Drive, or any public/private server.
              </p>
            </div>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">4</span>
            Pricing & Payments
          </h2>
          <p>
            All prices listed on our platform are stated in Indian Rupees (INR) unless otherwise indicated. We reserve the right to modify course prices or promotional discounts at any time without prior notice; however, price changes will not affect previously completed purchases.
          </p>
          <p>
            Payments are processed securely via our payment partner, <strong className="text-foreground">Razorpay</strong>. By submitting payment information, you represent and warrant that you are authorized to use the designated payment method (UPI, Netbanking, Credit/Debit Card) and authorize Razorpay to charge the full order amount.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">5</span>
            Disclaimer of Warranties & Limitation of Liability
          </h2>
          <p>
            Our courses are designed to teach software engineering concepts and technical problem-solving. While we strive for technical accuracy and excellence, CodeBreakdowns makes no guarantee or representation that completion of our courses will result in employment, job promotion, specific compensation increases, or passing specific third-party company technical interviews.
          </p>
          <p>
            To the fullest extent permitted by law, CodeBreakdowns shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use our educational services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">6</span>
            Governing Law & Dispute Resolution
          </h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal dispute, controversy, or claim arising out of or relating to these terms or your use of CodeBreakdowns shall be subject to the exclusive jurisdiction of the competent courts situated in <strong className="text-foreground">Hyderabad, Telangana, India</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary font-bold">7</span>
            Contact Information
          </h2>
          <p>
            For any questions, clarifications, or notices concerning these Terms and Conditions, please reach out to us at:
          </p>
          <Card className="p-4 border border-border bg-card text-card-foreground inline-block">
            <p className="text-xs text-foreground font-medium">CodeBreakdowns Legal Team</p>
            <p className="text-xs text-primary mt-0.5">Email: codebreakdowns@gmail.com</p>
            <p className="text-[11px] text-muted-foreground mt-1">Location: Hyderabad, Telangana, India</p>
          </Card>
        </section>
      </div>
    </div>
  );
}
