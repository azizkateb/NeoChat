import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function AIOrbAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center w-64 h-64", className)}>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary/20 rounded-full blur-[50px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-8 bg-secondary/30 rounded-full blur-[30px]"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border border-accent/40 rounded-full border-t-transparent border-b-transparent"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 border border-primary/50 rounded-full border-l-transparent border-r-transparent"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-[0_0_40px_rgba(0,0,0,0.8)] flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-primary animate-pulse blur-[2px]" />
        </div>
      </motion.div>
    </div>
  );
}
