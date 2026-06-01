// Parallax disabled, the scroll-driven translateY was causing a
// "bouncing off the walls" feel as content lagged ~50ms behind the
// scroll position. Component remains as a pass-through wrapper so
// existing call sites don't need to change.
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  className = "",
}: ParallaxSectionProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
