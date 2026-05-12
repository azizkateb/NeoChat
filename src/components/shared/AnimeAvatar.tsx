import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface AnimeAvatarProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy";
  className?: string;
}

export function AnimeAvatar({ src, alt = "Avatar", size = "md", status, className }: AnimeAvatarProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const statusColor = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    busy: "bg-red-500",
  };

  return (
    <div className={cn("relative rounded-full inline-block", sizeMap[size], className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-4px] rounded-full border border-primary/30 border-t-primary border-b-secondary opacity-50"
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full object-cover border-2 border-background z-10 relative"
      />
      {status && (
        <motion.div
          animate={status === "online" ? { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn(
            "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background z-20",
            statusColor[status]
          )}
        />
      )}
    </div>
  );
}
