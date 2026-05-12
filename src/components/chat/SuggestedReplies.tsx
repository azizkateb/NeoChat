import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function SuggestedReplies() {
  const suggestions = ["Run Diagnostics", "Analyze Code", "Bypass Firewall"];

  return (
    <div className="flex flex-wrap gap-2 mt-4 px-4 pb-4">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={suggestion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full text-xs font-medium border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-colors flex items-center gap-1.5 backdrop-blur-sm bg-background/40"
        >
          <Zap size={12} />
          {suggestion}
        </motion.button>
      ))}
    </div>
  );
}
