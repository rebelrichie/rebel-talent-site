// Safe addition — Typewriter text effect with blinking cursor
import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export default function TypedText({
  text,
  speed = 45,
  delay = 0,
  className = "",
  cursor = true,
  onComplete,
}: TypedTextProps) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || started) return;
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(delayTimer);
  }, [isInView, delay, started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && !done && started && (
        <span className="animate-pulse ml-0.5 text-rebel-red">|</span>
      )}
      {/* Invisible full text for SEO / screen readers */}
      {!done && <span className="sr-only">{text}</span>}
    </span>
  );
}
