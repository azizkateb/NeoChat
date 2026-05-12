import { Phone, Video, MoreVertical, PanelRightOpen, PanelRightClose } from "lucide-react";
import { AnimeAvatar } from "../shared/AnimeAvatar";
import { useUIStore } from "../../store/uiStore";
import { useChatStore } from "../../store/chatStore";

export function ChatHeader() {
  const { toggleRightPanel, rightPanelOpen } = useUIStore();
  const { conversations, activeConversationId } = useChatStore();
  
  const activeConv = conversations.find(c => c.id === activeConversationId);
  
  if (!activeConv) return null;

  return (
    <div className="h-20 border-b border-white/5 glass flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4">
        <AnimeAvatar src={activeConv.avatarUrl} size="md" status={activeConv.status} />
        <div>
          <h2 className="font-display font-bold text-lg tracking-wider text-primary">{activeConv.name}</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">{activeConv.status}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors">
          <Phone size={20} />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
          <Video size={20} />
        </button>
        <div className="w-px h-6 bg-white/10 mx-2" />
        <button 
          onClick={toggleRightPanel}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${rightPanelOpen ? 'text-primary bg-primary/10 neon-glow' : 'text-muted-foreground hover:text-primary hover:bg-primary/10'}`}
        >
          {rightPanelOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
        </button>
      </div>
    </div>
  );
}
