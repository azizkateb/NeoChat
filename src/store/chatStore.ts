import { create } from "zustand";

export interface Message {
  id: string;
  text: string;
  role: "user" | "assistant";
  timestamp: string;
  isCode?: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  unreadCount: number;
  timestamp: string;
  status: "online" | "offline" | "busy";
}

interface ChatState {
  conversations: Conversation[];
  activeConversationId: string | null;
  messages: Record<string, Message[]>;
  setActiveConversation: (id: string) => void;
  addMessage: (conversationId: string, message: Omit<Message, "timestamp"> & { id?: string }) => void;
  updateMessageText: (conversationId: string, messageId: string, text: string) => void;
}

import { MOCK_CONVERSATIONS, MOCK_MESSAGES } from "../constants/mockData";

export const useChatStore = create<ChatState>((set) => ({
  conversations: MOCK_CONVERSATIONS,
  activeConversationId: MOCK_CONVERSATIONS[0].id,
  messages: MOCK_MESSAGES,
  
  setActiveConversation: (id) => set({ activeConversationId: id }),
  
  addMessage: (conversationId, msg) => set((state) => {
    const newMessage: Message = {
      ...msg,
      id: msg.id ?? Math.random().toString(36).substring(7),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    const existingMessages = state.messages[conversationId] || [];
    
    // Update last message in conversation
    const updatedConversations = state.conversations.map(conv => 
      conv.id === conversationId 
        ? { ...conv, lastMessage: newMessage.text, timestamp: newMessage.timestamp }
        : conv
    );
    
    return {
      messages: {
        ...state.messages,
        [conversationId]: [...existingMessages, newMessage]
      },
      conversations: updatedConversations
    };
  }),
  updateMessageText: (conversationId, messageId, text) => set((state) => {
    const existingMessages = state.messages[conversationId] || [];
    const updatedMessages = existingMessages.map((msg) =>
      msg.id === messageId ? { ...msg, text } : msg
    );

    const updatedConversations = state.conversations.map((conv) =>
      conv.id === conversationId ? { ...conv, lastMessage: text } : conv
    );

    return {
      messages: {
        ...state.messages,
        [conversationId]: updatedMessages,
      },
      conversations: updatedConversations,
    };
  }),
}));
