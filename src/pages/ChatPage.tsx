import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CyberSidebar } from "../components/layout/CyberSidebar";
import { RightPanel } from "../components/layout/RightPanel";
import { ChatHeader } from "../components/chat/ChatHeader";
import { ChatInput } from "../components/chat/ChatInput";
import { MessageBubble } from "../components/chat/MessageBubble";
import { TypingIndicator } from "../components/chat/TypingIndicator";
import { SuggestedReplies } from "../components/chat/SuggestedReplies";
import { useChatStore } from "../store/chatStore";
import { useUIStore } from "../store/uiStore";

export default function ChatPage() {
  const { messages, activeConversationId, conversations } = useChatStore();
  const { isTyping } = useUIStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeMessages = activeConversationId ? messages[activeConversationId] || [] : [];
  const activeConv = conversations.find(c => c.id === activeConversationId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeMessages, isTyping]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-background flex overflow-hidden font-sans"
    >
      <CyberSidebar />
      
      <div className="flex-1 flex flex-col relative min-w-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-screen pointer-events-none" />
        
        <ChatHeader />
        
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none z-10 pb-32">
          {activeMessages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} avatarUrl={activeConv?.avatarUrl || ""} />
          ))}
          
          {isTyping && <TypingIndicator />}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-gradient-to-t from-background via-background/80 to-transparent pt-10">
            {activeMessages.length < 5 && <SuggestedReplies />}
            <ChatInput />
          </div>
        </div>
      </div>
      
      <RightPanel />
    </motion.div>
  );
}
