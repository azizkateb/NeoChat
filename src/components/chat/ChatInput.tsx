import { useState } from "react";
import { Mic, Paperclip, Send, Smile } from "lucide-react";
import { NeonButton } from "../shared/NeonButton";
import { useChatStore } from "../../store/chatStore";
import { useUIStore } from "../../store/uiStore";
import { sendMessageStream } from "../../services/chatService";

export function ChatInput() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addMessage, updateMessageText, activeConversationId } = useChatStore();
  const { setTyping } = useUIStore();

  const handleSend = async () => {
    if (!text.trim() || !activeConversationId || isLoading) return;

    const userText = text.trim();
    setText("");
    setError(null);

    addMessage(activeConversationId, {
      text: userText,
      role: "user"
    });

    const assistantId = `assistant-${Date.now()}-${Math.random().toString(36).substring(2)}`;
    addMessage(activeConversationId, {
      id: assistantId,
      text: "",
      role: "assistant"
    });

    let assistantText = "";
    setIsLoading(true);
    setTyping(true);

    try {
      await sendMessageStream(userText, (chunk) => {
        assistantText += chunk;
        updateMessageText(activeConversationId, assistantId, assistantText);
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      assistantText = `Sorry, I couldn't get a reply. ${message}`;
      updateMessageText(activeConversationId, assistantId, assistantText);
      setError("Failed to contact the backend. Please try again.");
    } finally {
      setIsLoading(false);
      setTyping(false);
    }
  };

  return (
    <div className="p-4 bg-background/80 backdrop-blur-md border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto relative flex items-center gap-2">
        <div className="flex items-center gap-2 pl-2">
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-white/5 rounded-full">
            <Paperclip size={20} />
          </button>
        </div>
        
        <div className="flex-1 relative group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Initialize command..."
            className="w-full bg-black/40 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:neon-border transition-all placeholder:text-muted-foreground/50 pr-24 font-sans text-foreground"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="p-2 text-muted-foreground hover:text-secondary transition-colors rounded-full">
              <Smile size={18} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-full">
              <Mic size={18} />
            </button>
          </div>
        </div>
        
        <NeonButton 
          variant="primary" 
          size="sm" 
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center flex-shrink-0"
          onClick={handleSend}
          disabled={isLoading}
        >
          <Send size={18} className="ml-1" />
        </NeonButton>
      </div>
      {error && <p className="px-4 pb-3 text-sm text-destructive">{error}</p>}
    </div>
  );
}
