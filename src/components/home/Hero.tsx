"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Droneshot from "@public/droneshot.png";

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
          videoRef.current.play().catch(() => {});
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-svh items-center overflow-hidden md:min-h-[85vh]"
      aria-labelledby="hero-heading"
    >
      {/* Video background */}
      {/* <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="@/public/video/hero.webm" type="video/webm" />
        <source src="@/public/video/hero.mp4" type="video/mp4" />
      </video> */}

      <Image
        src={Droneshot}
        alt="A drone shot of the Hazelwood neighborhood, showing a mix of residential and industrial buildings with greenery in the background."
        className="object-cover"
        fill
        sizes="100vw"
        priority
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/55"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-red-soft sm:mb-6 sm:text-xs">
            Pittsburgh, Pennsylvania · Est. 2010
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-tight text-paper"
          >
            A Community
            <br />
            <em className="font-normal italic text-red-soft">
              worth fighting
            </em>
            <br />
            for.
          </h1>

          <p className="mt-5 max-w-xl font-body text-base font-normal leading-relaxed text-paper/90 sm:mt-8 sm:text-lg md:text-xl">
            For over a century, Hazelwood has been home to steelworkers,
            families, and dreamers. The Greater Hazelwood Community
            Collaborative brings together residents, churches, and organizations
            to shape what comes next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            < a
              href="/about"
              className="inline-block rounded-full bg-red px-7 py-3.5 text-center font-medium text-paper no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink sm:py-4 sm:text-left"
            >
              Our story
            </a>
            
            < a
              href="/contact"
              className="inline-block rounded-full border-[1.5px] border-paper bg-transparent px-7 py-3.5 text-center font-medium text-paper no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink sm:py-4 sm:text-left"
            >
              Get involved →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}