import { motion, AnimatePresence } from "framer-motion";
import { AnimeAvatar } from "../shared/AnimeAvatar";
import { useChatStore } from "../../store/chatStore";
import { useUIStore } from "../../store/uiStore";
import { cn } from "../../lib/utils";
import { Search, Plus, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { AnimatedInput } from "../shared/AnimatedInput";
import { NeonButton } from "../shared/NeonButton";

export function CyberSidebar() {
  const { conversations, activeConversationId, setActiveConversation } = useChatStore();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <motion.div
      animate={{ width: sidebarCollapsed ? "80px" : "320px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-full glass border-r flex flex-col z-20 relative overflow-hidden flex-shrink-0"
    >
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <AnimatePresence>
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <AnimeAvatar src="https://i.pravatar.cc/150?u=user" size="sm" status="online" />
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-wider">GHOST_USER</span>
                <span className="text-xs text-primary">Connected</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-md text-muted-foreground hover:text-foreground transition-colors mx-auto">
          {sidebarCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>
      </div>

      {!sidebarCollapsed && (
        <div className="p-4 border-b border-white/5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search databanks..."
              className="w-full bg-black/40 border border-white/10 rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:neon-border transition-all placeholder:text-muted-foreground/50"
            />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto scrollbar-none py-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setActiveConversation(conv.id)}
            className={cn(
              "flex items-center gap-3 p-4 cursor-pointer transition-all duration-300 relative group",
              activeConversationId === conv.id ? "bg-primary/10 border-l-2 border-primary" : "hover:bg-white/5 border-l-2 border-transparent"
            )}
          >
            {activeConversationId === conv.id && (
              <motion.div
                layoutId="active-indicator"
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
              />
            )}
            
            <AnimeAvatar src={conv.avatarUrl} size="sm" status={conv.status} />
            
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <span className={cn(
                    "font-display text-sm truncate",
                    activeConversationId === conv.id ? "text-primary font-bold" : "text-foreground font-medium"
                  )}>{conv.name}</span>
                  <span className="text-[10px] text-muted-foreground">{conv.timestamp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground truncate max-w-[180px]">{conv.lastMessage}</p>
                  {conv.unreadCount > 0 && (
                    <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-secondary-foreground shadow-[0_0_5px_hsl(var(--secondary))]">
                      {conv.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!sidebarCollapsed && (
        <div className="p-4 border-t border-white/5">
          <NeonButton variant="primary" className="w-full flex items-center justify-center gap-2">
            <Plus size={16} />
            <span>NEW LINK</span>
          </NeonButton>
        </div>
      )}
    </motion.div>
  );
}
