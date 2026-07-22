"use client";

import { useState } from "react";
import Image from "next/image";

type Item = {
  _id: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string | null;
};

const PER_VIEW = 3;

export default function TestimonialsCarousel({ testimonials }: { testimonials: Item[] }) {
  const [startIndex, setStartIndex] = useState(0);

  const maxStart = Math.max(0, testimonials.length - PER_VIEW);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStart;

  const goPrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const goNext = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  const visible = testimonials.slice(startIndex, startIndex + PER_VIEW);

  const showArrows = testimonials.length > PER_VIEW;

  return (
    <div>
      <ul
        className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        aria-live="polite"
      >
        {visible.map((t) => (
          <li key={t._id} className="relative mt-10">
            <article className="flex h-full flex-col items-center rounded-lg bg-paper px-6 pb-8 pt-14 text-center md:px-8">
              {/* Avatar — half submerged through the top edge */}
              <div className="absolute -top-16 left-1/2 h-[98px] w-[98px] -translate-x-1/2 overflow-hidden rounded-full ring-[3px] ring-paper-edge">
                {t.imageUrl ? (
                  <Image
                    src={t.imageUrl}
                    alt={`Portrait of ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="72px"
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
          </li>
        ))}
        </ul>

      {/* Prev / Next arrows */}
      {showArrows && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/50 text-paper/70 transition-colors duration-200 hover:border-paper/60 hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
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