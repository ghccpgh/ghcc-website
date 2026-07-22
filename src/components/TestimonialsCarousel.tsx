"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

type Item = {
  _id: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string | null;
};

const AUTO_PLAY_INTERVAL = 3000; // 3 secs
const GAP = 20; // px gap between cards

/** Returns how many cards to show based on viewport width */
function getPerView(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 768) return 3;  // md+
  if (window.innerWidth >= 640) return 2;  // sm
  return 1;                                 // mobile
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Item[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Track responsive breakpoint changes
  useEffect(() => {
    const update = () => {
      const next = getPerView();
      setPerView(next);
      // Reset index if it would overflow at new breakpoint
      setCurrentIndex((prev) => {
        const max = Math.max(0, testimonials.length - next);
        return Math.min(prev, max);
      });
    };

    update(); // set initial value
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [testimonials.length]);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));

  // auto slide every 3 seconds and pause on hover
  useEffect(() => {
    if (paused || testimonials.length <= perView) return;

    const timer = setInterval(goNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, goNext, testimonials.length, perView]);

  const showArrows = testimonials.length > perView;

  // Calculate the width percentage for each card
  // Each card takes (100% - total_gaps) / perView
  // translateX shifts by (cardWidth + gap) * currentIndex
  const cardWidthPercent = `calc((100% - ${GAP * (perView - 1)}px) / ${perView})`;
  const translateX = `calc(-${currentIndex} * (((100% - ${GAP * (perView - 1)}px) / ${perView}) + ${GAP}px))`;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Overflow container */}
      <div className="overflow-hidden pt-14">
        {/* Sliding track */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${translateX})`,
          }}
          aria-live="polite"
        >
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="relative flex-shrink-0"
              style={{ width: cardWidthPercent }}
            >
              <article className="flex h-full flex-col items-center rounded-lg bg-paper px-6 pb-8 pt-14 text-center md:px-8">
                {/* Avatar — half submerged through the top edge */}
                <div className="absolute -top-12 left-1/2 h-[98px] w-[98px] -translate-x-1/2 overflow-hidden rounded-full ring-[3px] ring-paper-edge">
                  {t.imageUrl ? (
                    <Image
                      src={t.imageUrl}
                      alt={`Portrait of ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="98px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-paper-warm font-display text-lg font-medium text-ink">
                      {t.name?.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Quote — flex-1 keeps cards equal height */}
                <blockquote className="flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>

                {/* Attribution */}
                <div className="mt-6">
                  <p className="text-md font-bold text-ink">{t.name},</p>
                  <p className="text-sm text-ink">{t.role}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      {showArrows && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            aria-label="Previous testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/50 text-paper/70 transition-colors duration-200 hover:border-paper/60 hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5 px-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-red"
                    : "w-1.5 bg-paper/30 hover:bg-paper/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/30 text-paper/70 transition-colors duration-200 hover:border-paper/60 hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}