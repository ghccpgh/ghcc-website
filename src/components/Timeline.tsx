import React from "react";
import TimelineItem from "./TimelineItem";
import { timelineData } from "@/data/timelineData";

export default function Timeline() {
  return (
    <section
      className="mx-auto max-w-[1680px] px-6 py-12 md:px-12 md:py-24"
      aria-labelledby="history-heading"
    >
      <div className="mb-12 max-w-[720px] md:mb-16">
        <p className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-red mb-6">
          Chapter One
        </p>
        <h2
          id="history-heading"
          className="font-display text-4xl font-light tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          The story of{" "}
          <em className="font-normal italic text-red">Hazelwood</em>.
        </h2>
        <p className="mt-5 font-display text-xl font-light leading-relaxed text-ink-soft max-w-[56ch]">
          From a 19th-century river town to one of Pittsburgh's most storied
          working neighborhoods — a place where steel built families, and
          families built community.
        </p>
      </div>

      <div className="relative flex flex-col gap-12 md:gap-20">
        <div
          className="absolute top-0 bottom-0 left-[26px] w-[1px] bg-paper-edge md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />

        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.year}
            item={item}
            isReverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}