"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MembershipMeeting from "@public/ghcc-membership-meeting-june-2026.png";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (videoRef.current) {
        if (e.matches) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => { });
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section aria-labelledby="hero-heading">

      {/* Image Banner (not full viewport) */}
      <div className="relative w-full h-[45vh] md:h-[58vh] overflow-hidden">
        <Image
          src={MembershipMeeting}
          alt="GHCC members at a community meeting in Hazelwood."
          className="object-cover object-center"
          fill
          sizes="100vw"
          priority
        />
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
      </div>

      {/* Text content — two-column layout below image */}
      <div className="bg-paper border-b border-paper-edge">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">

          {/* Top label */}
          <p className="pt-10 mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-red sm:text-xs">
            Pittsburgh, Pennsylvania · Est. 2012
          </p>

          {/* Two-column: heading left, text + CTA right */}
          <div className="flex flex-col gap-8 pb-14 md:flex-row md:items-start md:gap-16 lg:gap-24">

            {/* Left — large heading */}
            <div className="md:w-1/2 lg:w-[45%]">
              <h1
                id="hero-heading"
                className="font-bebas text-[clamp(3rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink uppercase"
              >
                A Community{" "}
                <em className="italic text-red">worth fighting</em>
                <br />
                for.
              </h1>
            </div>

            {/* Right — paragraph + buttons */}
            <div className="md:w-1/2 lg:w-[55%] flex flex-col justify-center gap-8 md:pt-2">
              <p className="font-body text-base leading-relaxed text-ink-soft sm:text-lg md:text-xl">
                For over a century, Hazelwood has been home to steelworkers,
                families, and dreamers. The{" "}
                <strong className="font-semibold text-ink">
                  Greater Hazelwood Community Collaborative
                </strong>{" "}
                brings together residents, churches, and organizations to shape
                what comes next.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/about"
                  className="inline-block rounded-full bg-red px-7 py-3.5 font-medium text-paper no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-dark"
                >
                  Our story
                </a>
                <a
                  href="/contact"
                  className="inline-block rounded-full border-[1.5px] border-ink bg-transparent px-7 py-3.5 font-medium text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
                >
                  Get involved →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
