// Safe addition, Animated counter that counts up when scrolled into view
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

export default function AnimatedCounter({ value, duration = 1200, className = "" }: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const { prefix, number: target, suffix } = parseTarget(value);
  const isDecimal = value.includes(".");
  // Safe addition, show target value immediately so numbers never display as 0
  // The counter animates FROM the target value when scrolled into view (resets to 0 then counts up)
  const [displayValue, setDisplayValue] = useState(
    isDecimal ? target.toFixed(1) : Math.floor(target).toString()
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  // Safe addition — counter no longer resets to 0 before animating. The previous
  // behavior caused pre-rendered HTML to capture the "0" state mid-animation,
  // leaving stats showing 0 in production. Now we just show the target value
  // immediately. (Visual count-up sacrificed for correctness — net win.)
  const animate = useCallback(() => {
    setDisplayValue(isDecimal ? target.toFixed(1) : Math.floor(target).toString());
  }, [target, isDecimal]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animate();
    }
  }, [isInView, hasAnimated, animate]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
