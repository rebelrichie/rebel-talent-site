// Safe addition — Lightweight parallax wrapper using scroll position
import { ReactNode, useRef, useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0.1 = subtle, 0.5 = dramatic
  className?: string;
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  speed = 0.15,
  className = "",
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Skip parallax on mobile for performance
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // How far through the viewport this element is
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const shift = (clampedProgress - 0.5) * speed * 100;
      setOffset(direction === "up" ? -shift : shift);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 50ms linear",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
