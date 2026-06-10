"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Respect the user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (videoRef.current) {
        if (e.matches) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[85vh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-red-soft">
            Pittsburgh, Pennsylvania · Est. 2010
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,7vw,5.75rem)] font-light leading-[0.98] tracking-tight text-paper"
          >
            A neighborhood
            <br />
            <em className="font-normal italic text-red-soft">
              worth fighting
            </em>
            <br />
            for.
          </h1>

          <p className="mt-8 max-w-xl font-display text-lg font-light leading-relaxed text-paper/85 md:text-xl">
            For over a century, Hazelwood has been home to steelworkers,
            families, and dreamers. The Greater Hazelwood Community
            Collaborative brings together residents, churches, and organizations
            to shape what comes next — together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            < a
              href="/about"
              className="inline-block rounded-full bg-paper px-7 py-4 font-medium text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-red hover:text-paper"
            >
              Our story
            </a>
            
            < a
              href="/contact"
              className="inline-block rounded-full border-[1.5px] border-paper bg-transparent px-7 py-4 font-medium text-paper no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              Get involved →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}