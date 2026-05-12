import { motion } from "framer-motion";
import { Link } from "wouter";
import { FloatingParticles } from "../components/effects/FloatingParticles";
import { AIOrbAnimation } from "../components/effects/AIOrbAnimation";
import { CyberGrid } from "../components/effects/CyberGrid";
import { HolographicNavbar } from "../components/layout/HolographicNavbar";
import { NeonButton } from "../components/shared/NeonButton";
import { GlassCard } from "../components/shared/GlassCard";
import { Shield, Zap, Code, Globe, Database, Cpu, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

function FeatureCard({ icon: Icon, title, desc, delay }: any) {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
    >
      <GlassCard variant="primary" className="h-full flex flex-col gap-4 group">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:neon-glow transition-all">
          <Icon size={24} />
        </div>
        <h3 className="font-display font-bold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </GlassCard>
    </motion.div>
  );
}

export default function LandingPage() {
  const { ref: previewRef, controls: previewControls } = useScrollAnimation();
  const { ref: pricingRef, controls: pricingControls } = useScrollAnimation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
    >
      <FloatingParticles />
      <CyberGrid />
      <HolographicNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10">
          <AIOrbAnimation className="mb-12 scale-75 md:scale-100" />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-6 gradient-text"
          >
            NEOCHAT_2099
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 tracking-wide font-light"
          >
            The ultimate neural-linked communication interface. Pilot your data, hack the noise, and experience the future of conversation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="/register">
              <NeonButton size="lg" variant="primary" className="w-full sm:w-auto">
                INITIALIZE SEQUENCE
              </NeonButton>
            </Link>
            <Link href="/chat">
              <NeonButton size="lg" variant="secondary" className="w-full sm:w-auto">
                ENTER MATRIX
              </NeonButton>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-primary uppercase tracking-[0.3em]">Scroll Down</span>
          <ArrowRight className="w-4 h-4 text-primary rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">CORE DIRECTIVES</h2>
            <div className="w-24 h-1 bg-primary mx-auto neon-glow" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard delay={0.1} icon={Cpu} title="Neural Processing" desc="Advanced AI models that predict your thoughts before you type. Latency approaches zero." />
            <FeatureCard delay={0.2} icon={Shield} title="Quantum Encryption" desc="Military-grade security protocols. Your data remains locked behind dynamic algorithmic walls." />
            <FeatureCard delay={0.3} icon={Zap} title="Hyper-Responsive" desc="Built for speed. The interface reacts instantly to your inputs, powered by next-gen rendering tech." />
            <FeatureCard delay={0.4} icon={Code} title="Terminal Integration" desc="Execute scripts directly within the chat. Full syntax highlighting and native compilation support." />
            <FeatureCard delay={0.5} icon={Globe} title="Global Uplink" desc="Connect to server nodes worldwide instantly. Bypass geographic restrictions seamlessly." />
            <FeatureCard delay={0.6} icon={Database} title="Memory Persistence" desc="The AI remembers everything. Context carries over across sessions, days, and devices." />
          </div>
        </div>
      </section>

      {/* Interface Preview */}
      <section className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">VISUAL INTERFACE</h2>
            <div className="w-24 h-1 bg-secondary mx-auto neon-glow-secondary" />
          </div>
          
          <motion.div 
            ref={previewRef}
            initial={{ opacity: 0, y: 100, rotateX: 10 }}
            animate={previewControls}
            variants={{
              visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, type: "spring" } }
            }}
            style={{ perspective: 1000 }}
            className="relative rounded-2xl border border-primary/30 p-2 bg-black/60 backdrop-blur-xl shadow-[0_0_50px_hsl(var(--primary)/0.2)]"
          >
            <div className="absolute top-0 left-10 w-32 h-1 bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            <div className="absolute bottom-0 right-10 w-32 h-1 bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]" />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
              alt="Interface Preview" 
              className="w-full h-auto rounded-xl opacity-50 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 relative z-10 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">ACCESS TIERS</h2>
            <div className="w-24 h-1 bg-accent mx-auto neon-glow-accent" />
          </div>
          
          <motion.div 
            ref={pricingRef}
            initial="hidden"
            animate={pricingControls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            {[
              { title: "GHOST", price: "FREE", color: "white", features: ["Basic Uplink", "Standard AI Core", "24hr Memory"] },
              { title: "NETRUNNER", price: "$15/mo", color: "primary", featured: true, features: ["Quantum Encryption", "Advanced AI Models", "Infinite Memory", "Terminal Access"] },
              { title: "CORPORATE", price: "$99/mo", color: "secondary", features: ["Dedicated Server Node", "Custom AI Training", "API Access", "Priority Routing"] }
            ].map((tier, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <GlassCard 
                  variant={tier.featured ? "primary" : "default"} 
                  className={cn(
                    "flex flex-col items-center text-center p-8", 
                    tier.featured && "scale-105 neon-glow bg-primary/10 py-12"
                  )}
                >
                  <h3 className="font-display font-bold text-2xl tracking-widest mb-2">{tier.title}</h3>
                  <p className="text-4xl font-bold mb-8 text-white">{tier.price}</p>
                  <ul className="space-y-4 mb-8 text-sm text-muted-foreground w-full">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-center justify-center gap-2">
                        <Zap size={14} className={`text-${tier.color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <NeonButton variant={tier.featured ? "primary" : "accent"} className="w-full">
                    SELECT TIER
                  </NeonButton>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 gradient-text">READY TO PLUG IN?</h2>
          <Link href="/register">
            <NeonButton size="lg" variant="secondary" className="px-12">
              START YOUR FREE TRIAL
            </NeonButton>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
