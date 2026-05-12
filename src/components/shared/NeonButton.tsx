import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

export function NeonButton({ children, className, variant = "primary", size = "md", ...props }: NeonButtonProps) {
  const glowClass = {
    primary: "hover:neon-glow border-primary text-primary hover:text-primary-foreground hover:bg-primary/20",
    secondary: "hover:neon-glow-secondary border-secondary text-secondary hover:text-secondary-foreground hover:bg-secondary/20",
    accent: "hover:neon-glow-accent border-accent text-accent hover:text-accent-foreground hover:bg-accent/20",
  }[variant];

  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  }[size];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative rounded-md border backdrop-blur-sm transition-all duration-300 font-display tracking-wider uppercase",
        glowClass,
        sizeClass,
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
