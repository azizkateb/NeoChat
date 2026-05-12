import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex w-full gap-4"
    >
      <div className="flex-shrink-0 mt-auto">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
      
      <div className="glass p-4 rounded-2xl rounded-bl-none flex items-center gap-3 w-full max-w-xs">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">typing...</span>
      </div>
    </motion.div>
  );
}
