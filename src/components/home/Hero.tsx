"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HazlewoodDroneShot from "@/../public/hazlewood-droneshot-of-the-neighborhood.png";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => { });
    }
    setIsPlaying(!isPlaying);
  };

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
      {/* Video Banner */}
      <div className="group relative h-[40vh] w-full overflow-hidden bg-ink sm:h-[45vh] md:h-[70vh]">
        {/* Base layer: poster image*/}
        <Image
          src={HazlewoodDroneShot}
          alt="GHCC members at a community meeting in Hazelwood."
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Video layer sits on top, covers the image fully */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/videos/gh-drone-footage.mp4" type="video/mp4" />
          </video>
        )}

        {/* Play / pause toggle */}
        {!prefersReducedMotion && (
          <button
            onClick={toggleVideo}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="group/btn absolute bottom-5 right-5 z-10 flex items-stretch overflow-hidden rounded-md shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100"
          >
            <span className="hidden items-center bg-red px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-paper transition-colors duration-200 group-hover/btn:bg-red-dark sm:flex">
              {isPlaying ? "Pause video" : "Play video"}
            </span>
            <span className="flex items-center justify-center bg-paper px-3 py-3 text-ink transition-colors duration-200 sm:px-4 sm:py-0">
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <rect x="2.5" y="1.5" width="3" height="11" rx="1" />
                  <rect x="8.5" y="1.5" width="3" height="11" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true" className="ml-0.5">
                  <path d="M3 1.5v11l9-5.5z" />
                </svg>
              )}
            </span>
          </button>
        )}
      </div>

      {/* Text content */}
      <div className="border-b border-paper-edge bg-paper">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-12">
          <p className="mb-4 pt-8 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-red sm:mb-6 sm:pt-10 sm:text-xs">
            Pittsburgh, Pennsylvania · Est. 2012
          </p>

          <div className="flex flex-col gap-6 pb-10 sm:gap-8 sm:pb-14 md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 lg:w-[45%]">
              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.25rem,6vw,4rem)] uppercase leading-[0.95] tracking-tight text-ink"
              >
                A Community{" "}
                <em className="italic text-red">worth fighting</em>
                <br />
                for.
              </h1>
            </div>

            <div className="flex flex-col justify-center gap-8 md:w-1/2 md:pt-2 lg:w-[55%]">
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