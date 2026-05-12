import { create } from "zustand";

interface ThemeState {
  theme: string;
  setTheme: (themeId: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "cyberpunk",
  setTheme: (themeId) => {
    document.documentElement.setAttribute("data-theme", themeId);
    set({ theme: themeId });
  },
}));
