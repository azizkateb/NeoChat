import { cn } from "../../lib/utils";

export function CyberGrid({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none cyber-grid opacity-30", className)} />
  );
}
