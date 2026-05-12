import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../../store/uiStore";
import { useThemeStore } from "../../store/themeStore";
import { THEMES } from "../../constants/themes";
import { X, Settings, Download, Volume2, Bell, Cpu } from "lucide-react";
import { cn } from "../../lib/utils";
import { Switch } from "../ui/switch";

export function RightPanel() {
  const { rightPanelOpen, toggleRightPanel } = useUIStore();
  const { theme, setTheme } = useThemeStore();

  return (
    <AnimatePresence>
      {rightPanelOpen && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-80 h-full glass border-l flex flex-col z-30 flex-shrink-0"
        >
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              <span className="font-display font-bold tracking-wider">SYSTEM CONFIG</span>
            </div>
            <button onClick={toggleRightPanel} className="text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Theme Selector */}
            <div className="space-y-4">
              <h3 className="text-sm font-display text-muted-foreground uppercase tracking-widest">Visual Matrix</h3>
              <div className="grid grid-cols-5 gap-2">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      "w-10 h-10 rounded-full transition-all duration-300 relative group",
                      theme === t.id ? "scale-110 ring-2 ring-offset-2 ring-offset-background" : "hover:scale-105 opacity-70 hover:opacity-100"
                    )}
                    style={{ 
                      background: `linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`,
                      ringColor: t.colors.primary
                    }}
                    title={t.name}
                  >
                    {theme === t.id && (
                      <motion.div 
                        layoutId="theme-active"
                        className="absolute inset-0 rounded-full shadow-[0_0_15px_currentColor]"
                        style={{ color: t.colors.primary }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Personality */}
            <div className="space-y-4">
              <h3 className="text-sm font-display text-muted-foreground uppercase tracking-widest">AI Core</h3>
              <div className="space-y-2">
                {["Assistant", "Creative", "Technical", "Casual"].map((mode) => (
                  <div key={mode} className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/5 cursor-pointer hover:border-primary/50 transition-colors">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-sm">{mode}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-4">
              <h3 className="text-sm font-display text-muted-foreground uppercase tracking-widest">Preferences</h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Audio Feedback</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Neural Notifications</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-sm mt-8">
              <Download size={16} />
              <span>EXPORT DATALOG</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
