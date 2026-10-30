import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseTarget(value: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = value.match(/^([<>$~]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, decimals: 0 };
  const raw = match[2];
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return {
    prefix: match[1],
    number: parseFloat(raw),
    suffix: match[3],
    decimals,
  };
}

function format(prefix: string, number: number, suffix: string, decimals: number) {
  const shown = decimals > 0 ? number.toFixed(decimals) : Math.round(number).toString();
  return `${prefix}${shown}${suffix}`;
}

export default function AnimatedCounter({ value, duration = 900, className = "" }: AnimatedCounterProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.45 });
  const parsed = parseTarget(value);
  const finalText = format(parsed.prefix, parsed.number, parsed.suffix, parsed.decimals);
  const [display, setDisplay] = useState(finalText);
  const armed = useRef(false);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!visible) armed.current = true;
  }, [ref]);

  useEffect(() => {
    if (!isInView || !armed.current || played.current) return;
    played.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || parsed.number === 0) {
      setDisplay(finalText);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(parsed.prefix, parsed.number * eased, parsed.suffix, parsed.decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(finalText);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, duration, finalText, parsed.decimals, parsed.number, parsed.prefix, parsed.suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
