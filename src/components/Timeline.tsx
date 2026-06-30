"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import TimelineItem from "./TimelineItem";
import { timelineData } from "@/data/timelineData";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth"
    });
  }, []);

  // Sync scroll position to active index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const width = container.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }, 50); // small debounce
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  // Autoplay logic
  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % timelineData.length;
      scrollTo(nextIndex);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [activeIndex, isPlaying, scrollTo]);

  const handleNext = () => {
    setIsPlaying(false);
    scrollTo((activeIndex + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    scrollTo((activeIndex - 1 + timelineData.length) % timelineData.length);
  };

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    scrollTo(index);
  };

  return (
    <section 
      className="relative w-full bg-paper py-6 md:py-10 h-[100vh] min-h-[650px] max-h-[1080px] flex flex-col overflow-hidden group" 
      aria-labelledby="history-heading"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Intro Header */}
      <div className="mx-auto max-w-[1680px] w-full px-6 md:px-24 mb-4 md:mb-8 flex-shrink-0">
        <div className="max-w-[720px]">
          <h2 id="history-heading" className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl md:text-5xl">
            The story of <em className="font-normal italic text-red">Hazelwood</em>.
          </h2>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div 
        ref={containerRef}
        className="flex-1 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide flex items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        {timelineData.map((item, index) => (
          <div key={item.year} className="w-full h-full flex-shrink-0 snap-center">
            <TimelineItem 
              item={item} 
              index={index}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Controls (Bottom) */}
      <div className="w-full flex-shrink-0 mt-4 md:mt-8 z-30">
        <div className="mx-auto max-w-[1680px] px-6 md:px-24 flex items-center justify-between md:justify-center gap-8 md:gap-16">
          
          <button 
            onClick={handlePrev}
            className="p-4 text-ink-soft hover:text-ink transition-colors flex-shrink-0"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dash Indicators */}
          <div className="flex items-center gap-3">
            {timelineData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="py-4 cursor-pointer group"
              >
                <div className={`h-[2px] rounded-full transition-all duration-500 ease-out ${
                  activeIndex === idx ? "w-10 bg-ink" : "w-6 bg-ink/20 group-hover:bg-ink/50"
                }`} />
              </button>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-4 text-ink-soft hover:text-ink transition-colors flex-shrink-0"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}