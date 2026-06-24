// Safe addition — Auto-rotating testimonial carousel with fade transitions
import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import GlowCard from "./GlowCard";

interface Testimonial {
  initials: string;
  name: string;
  title: string;
  text: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 7000,
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length);
  }, [active, testimonials.length, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length);
  }, [active, testimonials.length, goTo]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [next, autoPlayInterval, paused]);

  const t = testimonials[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-rebel-red transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-rebel-red transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Card */}
        <div
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(10px) scale(0.98)" : "translateY(0) scale(1)",
            transition: "opacity 300ms ease-out, transform 300ms ease-out",
          }}
        >
          <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-8 sm:p-10">
            <Quote className="w-10 h-10 text-rebel-red/15 mb-4" />
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 min-h-[120px]">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-base shrink-0 ring-2 ring-rebel-red/40"
                style={{
                  background: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #ea580c 100%)",
                }}
              >
                {t.initials}
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">
                  {t.name}
                </h3>
                <p className="text-zinc-500 text-xs mt-0.5">{t.title}</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="group p-1"
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-rebel-red"
                  : "w-3 bg-zinc-700 group-hover:bg-zinc-500"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
