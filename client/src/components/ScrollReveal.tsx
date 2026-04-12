// Safe addition — Scroll-triggered reveal wrapper with multiple animation variants
import { ReactNode, CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

type Variant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  /** Safe addition — if true, content starts visible (for above-fold hero sections) */
  immediate?: boolean;
}

// Safe addition — opacity floor at 0.15 so content is never fully invisible during fast scroll
const OPACITY_FLOOR = 0.15;

const baseStyles: Record<Variant, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: OPACITY_FLOOR, transform: "translateY(20px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    hidden: { opacity: OPACITY_FLOOR, transform: "translateY(-20px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: OPACITY_FLOOR, transform: "translateX(-30px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: OPACITY_FLOOR, transform: "translateX(30px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  scale: {
    hidden: { opacity: OPACITY_FLOOR, transform: "scale(0.92)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  blur: {
    hidden: { opacity: OPACITY_FLOOR, filter: "blur(4px)", transform: "translateY(8px)" },
    visible: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  style,
  once = true,
  immediate = false,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ triggerOnce: once });
  const styles = baseStyles[variant];

  // Safe addition — immediate mode shows content on first paint (above-fold)
  const isVisible = immediate || isInView;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(isVisible ? styles.visible : styles.hidden),
        transition: immediate && !isInView
          ? "none"
          : `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
