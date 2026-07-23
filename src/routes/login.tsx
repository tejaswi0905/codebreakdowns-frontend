import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Github, Code2, ArrowRight } from "lucide-react";
import { API_BASE_URL } from "../config";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
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
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">CodeBreakdowns</span>
        </div>

        {/* Testimonial / Copy */}
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Master System Design & Architecture.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              "This platform completely changed how I think about large-scale applications. The interactive breakdowns are incredible."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold border border-white/20">
                JD
              </div>
              <div>
                <p className="text-sm font-semibold text-white">John Doe</p>
                <p className="text-xs text-muted-foreground">Senior Software Engineer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        {/* Mobile Background Orbs */}
        <div className="lg:hidden absolute inset-0 -z-10">
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
            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">CodeBreakdowns</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue your learning journey.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <Button 
              size="lg" 
              className="w-full bg-white text-black hover:bg-neutral-200 h-14 font-semibold text-base flex items-center justify-center space-x-3 transition-transform hover:scale-[1.02] shadow-lg"
              onClick={handleGithubLogin}
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-mono">Or secure local login</span>
              </div>
            </div>

            {/* Placeholder for future email login if needed */}
            <Button 
              size="lg" 
              variant="outline"
              className="w-full h-14 border-white/10 hover:bg-white/5 font-semibold group flex items-center justify-between px-6"
              disabled
            >
              <span className="text-muted-foreground">Email login (Coming Soon)</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-50 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-center lg:text-left text-xs text-muted-foreground pt-8">
            By clicking continue, you agree to our <br className="hidden lg:block"/>
            <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> and <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
          </p>

        </motion.div>
      </div>

    </div>
  );
}
