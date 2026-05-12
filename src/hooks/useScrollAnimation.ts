import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
}
