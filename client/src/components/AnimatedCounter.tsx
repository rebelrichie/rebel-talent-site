// Safe addition — Animated counter that counts up when scrolled into view
import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: string; // e.g. "350%+", "$178K", "14+", "<30", "90%"
  duration?: number;
  className?: string;
}

function parseTarget(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([<>$~]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

export default function AnimatedCounter({ value, duration = 1800, className = "" }: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [displayValue, setDisplayValue] = useState("0");
  const { prefix, number: target, suffix } = parseTarget(value);
  const isDecimal = value.includes(".");

  const animate = useCallback(() => {
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplayValue(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, isDecimal]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
