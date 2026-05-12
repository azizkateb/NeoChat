import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { NeonButton } from "../shared/NeonButton";
import { Zap } from "lucide-react";

export function HolographicNavbar() {
  const [location] = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Zap className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
            <span className="font-display font-bold text-2xl tracking-widest text-foreground group-hover:neon-glow transition-all">
              NEO<span className="text-primary group-hover:text-secondary transition-colors">CHAT</span>
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <span className={`text-sm font-medium hover:text-primary transition-colors cursor-pointer ${location === '/' ? 'text-primary neon-glow' : 'text-muted-foreground'}`}>
              SYSTEM
            </span>
          </Link>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">FEATURES</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">PRICING</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/login">
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer hidden sm:block">
              LOGIN
            </span>
          </Link>
          <Link href="/register">
            <NeonButton size="sm" variant="primary">INITIALIZE</NeonButton>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
