import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Github, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { API_BASE_URL } from "../config";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Student Sign In — CodeBreakdowns" },
      {
        name: "description",
        content: "Sign in with your GitHub developer account to access your course roadmaps, coding problems, and interview breakdowns.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleGithubLogin = () => {
    window.location.href = `${API_BASE_URL}/users/auth/github`;
  };

  return (
    <div className="min-h-screen w-full flex bg-background">
      
      {/* Left Panel - Branding & Visuals */}
      <div className="hidden lg:flex w-1/2 relative bg-black flex-col justify-between overflow-hidden p-12 border-r border-white/5">
        
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-background to-background opacity-80" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px]" />
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">CodeBreakdowns</span>
        </Link>

        {/* Engineering Philosophy / Quote */}
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Engineering-First Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Master System Design &amp; Architecture.
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              &ldquo;The modular roadmaps and architectural breakdowns turned vague distributed system concepts into clear intuition I could actually defend in technical rounds.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-sm font-bold">
                AS
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Arjun Sharma</p>
                <p className="text-xs text-muted-foreground">Software Development Engineer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        {/* Mobile Background Orbs */}
        <div className="lg:hidden absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm space-y-8"
        >
          
          <div className="text-center lg:text-left space-y-2">
            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden inline-flex items-center justify-center gap-2 mb-8 hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">CodeBreakdowns</span>
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in with your developer account to access your enrolled courses and roadmaps.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <Button 
              size="lg" 
              className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 font-semibold text-base flex items-center justify-center space-x-3 transition-all hover:scale-[1.01] shadow-md cursor-pointer"
              onClick={handleGithubLogin}
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </Button>

            {/* Developer Authentication Guarantees */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Single Sign-On for Developers</span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1.5 list-none pl-0">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                  <span>Instant 1-click authentication via GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                  <span>Zero passwords to remember or reset</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                  <span>Secure HTTP-only JWT session management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <p className="text-center lg:text-left text-xs text-muted-foreground pt-4 leading-relaxed">
            By signing in, you agree to CodeBreakdowns&apos;s <br className="hidden lg:block"/>
            <Link 
              to="/terms-and-conditions" 
              className="underline text-foreground hover:text-primary transition-colors font-medium"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link 
              to="/privacy-policy" 
              className="underline text-foreground hover:text-primary transition-colors font-medium"
            >
              Privacy Policy
            </Link>.
          </p>

        </motion.div>
      </div>

    </div>
  );
}
