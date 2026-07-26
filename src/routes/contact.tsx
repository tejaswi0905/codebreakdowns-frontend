import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, Send, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — CodeBreakdowns" },
      {
        name: "description",
        content: "Get in touch with the CodeBreakdowns team for support, business inquiries, or questions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully! Our team will get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
          <Sparkles className="h-3.5 w-3.5" /> Support & Inquiries
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          Have questions about our courses, payment issues, or enterprise team training? We're here to help you breakdown any obstacle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="p-6 border border-border bg-card text-card-foreground hover:border-primary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Support</h3>
                <p className="text-xs text-muted-foreground mt-1">Our team responds within 24 hours.</p>
                <a href="mailto:codebreakdowns@gmail.com" className="text-sm text-primary font-medium mt-2 inline-block hover:underline">
                  codebreakdowns@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-border bg-card text-card-foreground hover:border-primary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Headquarters</h3>
                <p className="text-xs text-muted-foreground mt-1">Registered Office Address</p>
                <p className="text-sm text-foreground/90 mt-2 leading-relaxed">
                  HITEC City, Madhapur,<br />
                  Hyderabad, Telangana 500081,<br />
                  India
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-border bg-card text-card-foreground hover:border-primary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-amber-500/10 text-amber-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Working Hours</h3>
                <p className="text-xs text-muted-foreground mt-1">When we're active</p>
                <p className="text-sm text-foreground/90 mt-2">
                  Monday – Saturday<br />
                  10:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8 border border-border bg-card text-card-foreground lg:col-span-2 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Send us a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Subject / Topic</label>
              <select
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="" className="bg-background text-foreground">Select a topic...</option>
                <option value="course-support" className="bg-background text-foreground">Course Access / Technical Support</option>
                <option value="billing" className="bg-background text-foreground">Billing / Payment / Refund Issue</option>
                <option value="partnership" className="bg-background text-foreground">Business / Partnership Inquiry</option>
                <option value="other" className="bg-background text-foreground">Other Question</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={5}
                placeholder="How can we help you today? Please provide details such as your registered email or transaction ID if applicable."
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <Button type="submit" className="w-full sm:w-auto px-8 font-medium flex items-center gap-2" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
