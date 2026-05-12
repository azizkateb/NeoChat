import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function AnimatedInput({ label, className, ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value !== undefined && props.value !== "";

  return (
    <div className="relative w-full">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -24 : 12,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 pointer-events-none origin-left font-sans"
      >
        {label}
      </motion.label>
      <input
        {...props}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        className={cn(
          "w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-transparent focus:outline-none focus:neon-border transition-shadow glass",
          className
        )}
        placeholder={label}
      />
    </div>
  );
}
