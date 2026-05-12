export type Theme = {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const THEMES: Theme[] = [
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    colors: {
      primary: "#7C3AED",
      secondary: "#EC4899",
      accent: "#06B6D4",
    },
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    colors: {
      primary: "#FF2D55",
      secondary: "#00E5FF",
      accent: "#B026FF",
    },
  },
  {
    id: "purple-galaxy",
    name: "Purple Galaxy",
    colors: {
      primary: "#8B5CF6",
      secondary: "#C4B5FD",
      accent: "#D946EF",
    },
  },
  {
    id: "blue-hologram",
    name: "Blue Hologram",
    colors: {
      primary: "#3B82F6",
      secondary: "#22D3EE",
      accent: "#7DD3FC",
    },
  },
  {
    id: "anime-sunset",
    name: "Anime Sunset",
    colors: {
      primary: "#FF6B6B",
      secondary: "#FFD93D",
      accent: "#FF922B",
    },
  },
];
