import { motion } from "framer-motion";
import { Message } from "../../store/chatStore";
import { AnimeAvatar } from "../shared/AnimeAvatar";
import { cn } from "../../lib/utils";

export function MessageBubble({ message, avatarUrl }: { message: Message; avatarUrl: string }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex w-full gap-4", isUser ? "flex-row-reverse" : "flex-row")}
    >
      <div className="flex-shrink-0 mt-auto">
        <AnimeAvatar src={isUser ? "https://i.pravatar.cc/150?u=user" : avatarUrl} size="sm" />
      </div>

      <div className={cn("flex flex-col max-w-[80%]", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "p-4 rounded-2xl backdrop-blur-sm transition-all relative overflow-hidden group",
            isUser
              ? "bg-gradient-to-br from-primary/80 to-secondary/80 text-primary-foreground rounded-br-none shadow-[0_4px_15px_hsl(var(--primary)/0.3)]"
              : "glass rounded-bl-none border-primary/20 bg-background/60 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          )}
        >
          {!isUser && (
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
          )}
          
          {message.isCode ? (
            <pre className="font-mono text-xs overflow-x-auto text-accent whitespace-pre-wrap">
              <code>{message.text}</code>
            </pre>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap font-sans">{message.text}</p>
          )}
        </div>
        <span className="text-[10px] text-muted-foreground mt-1 mx-2">{message.timestamp}</span>
      </div>
    </motion.div>
  );
}
