import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Code2 } from "lucide-react";
import { API_BASE_URL } from "../config";
import { motion } from "framer-motion";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const handleGithubLogin = () => {
    // Redirect to backend OAuth endpoint
    window.location.href = `${API_BASE_URL}/users/auth/github`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background bg-grid-white/[0.03]">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] opacity-40 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-primary/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Terminal Header */}
          <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-3 z-20">
            <div className="flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="mx-auto font-mono text-[10px] text-muted-foreground">~/auth/login</div>
          </div>

          <CardHeader className="text-center pt-16 pb-6 relative z-10">
            <div className="mx-auto w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Initialize Session</CardTitle>
            <CardDescription className="text-muted-foreground font-mono mt-2">
              Authenticate via GitHub to access the system.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pb-10 relative z-10 px-8">
            <Button 
              size="lg" 
              className="w-full bg-white text-black hover:bg-neutral-200 h-12 font-semibold font-mono flex items-center space-x-3 transition-transform hover:scale-[1.02]"
              onClick={handleGithubLogin}
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </Button>
            
            <div className="mt-8 text-center text-xs text-muted-foreground font-mono">
              <p>v1.0.0-auth</p>
              <p className="mt-1 opacity-50">System encrypted and secure.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
