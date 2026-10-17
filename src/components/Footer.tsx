import { Link } from "@tanstack/react-router";
import { Code2, Github, Twitter, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-white/10 bg-background dark:bg-[#070709] text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 text-foreground font-bold tracking-tight text-lg">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary border border-primary/30">
                <Code2 className="h-5 w-5" />
              </div>
              <span>CodeBreakdowns</span>
            </Link>
            <p className="text-sm max-w-sm text-muted-foreground leading-relaxed">
              Master real-world software engineering, systems design, and full-stack architecture with production-grade course breakdowns.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm pt-2">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground/80 shrink-0">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Hyderabad, India
              </span>
              <a href="mailto:codebreakdowns@gmail.com" className="flex items-center gap-1.5 text-xs hover:text-foreground transition-colors shrink-0">
                <Mail className="h-3.5 w-3.5 text-primary" /> codebreakdowns@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-foreground transition-colors">All Courses</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Bundles & Products</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-foreground transition-colors">Refund & Cancellation</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/tejaswi0905" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/60 gap-4">
          <p>© {currentYear} CodeBreakdowns. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> for engineers, by engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}
