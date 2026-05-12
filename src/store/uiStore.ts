import { create } from "zustand";

interface UIState {
  sidebarCollapsed: boolean;
  rightPanelOpen: boolean;
  isTyping: boolean;
  toggleSidebar: () => void;
  toggleRightPanel: () => void;
  setTyping: (isTyping: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  rightPanelOpen: false,
  isTyping: false,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  toggleRightPanel: () => set((state) => ({ rightPanelOpen: !state.rightPanelOpen })),
  setTyping: (isTyping) => set({ isTyping }),
}));
