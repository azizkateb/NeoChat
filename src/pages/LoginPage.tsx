import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedInput } from "../components/shared/AnimatedInput";
import { NeonButton } from "../components/shared/NeonButton";
import { GlassCard } from "../components/shared/GlassCard";
import { CyberGrid } from "../components/effects/CyberGrid";
import { Zap } from "lucide-react";

export default function LoginPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background flex"
    >
      <CyberGrid />
      
      {/* Left Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="absolute top-8 left-8">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl tracking-widest">NEOCHAT</span>
            </div>
          </Link>
        </div>

        <GlassCard variant="primary" className="w-full max-w-md p-10">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-display font-bold text-white mb-2">SYSTEM LOGIN</h1>
            <p className="text-muted-foreground text-sm">Authenticate your neural link to continue</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <AnimatedInput label="Uplink ID / Email" type="email" />
            <AnimatedInput label="Passcode" type="password" />
            
            <div className="flex justify-between items-center text-xs">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer hover:text-white transition-colors">
                <input type="checkbox" className="accent-primary rounded bg-black border-white/20" />
                Remember Node
              </label>
              <a href="#" className="text-primary hover:text-secondary transition-colors">Forgot Passcode?</a>
            </div>

            <Link href="/chat">
              <NeonButton type="button" variant="primary" className="w-full mt-4">
                AUTHENTICATE
              </NeonButton>
            </Link>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-muted-foreground mb-4">OR CONNECT VIA</p>
            <div className="flex gap-4 justify-center">
              <button className="w-12 h-12 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all flex items-center justify-center glass">
                G
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 hover:border-secondary hover:text-secondary transition-all flex items-center justify-center glass">
                A
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            No active node?{" "}
            <Link href="/register" className="text-primary hover:text-secondary transition-colors font-bold">
              Initialize a new connection
            </Link>
          </div>
        </GlassCard>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
        <motion.div
          animate={{ scale: [1, 1.05, 1], filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute bottom-20 right-20 z-20 text-right">
          <h2 className="text-4xl font-display font-black text-white mix-blend-overlay opacity-50">Welcome back,<br/>Netrunner.</h2>
        </div>
      </div>
    </motion.div>
  );
}
