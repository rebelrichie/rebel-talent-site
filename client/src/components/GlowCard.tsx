import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return <div className={className}>{children}</div>;
}
