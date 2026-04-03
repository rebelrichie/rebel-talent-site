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
}

const baseStyles: Record<Variant, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(30px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    hidden: { opacity: 0, transform: "translateY(-30px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(-40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  scale: {
    hidden: { opacity: 0, transform: "scale(0.9)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)", transform: "translateY(10px)" },
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
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ triggerOnce: once });
  const styles = baseStyles[variant];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(isInView ? styles.visible : styles.hidden),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
