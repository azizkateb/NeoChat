import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
}

export function GlassCard({ children, className, variant = "default", ...props }: GlassCardProps) {
  const borderClass = {
    default: "border-white/10 hover:border-white/20",
    primary: "border-primary/30 hover:border-primary/60",
    secondary: "border-secondary/30 hover:border-secondary/60",
    accent: "border-accent/30 hover:border-accent/60",
  }[variant];

  return (
    <motion.div
      className={cn(
        "glass rounded-xl p-6 transition-colors duration-500",
        borderClass,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
