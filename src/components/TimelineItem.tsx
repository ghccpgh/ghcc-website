import React from "react";
import { TimelineItemData } from "@/types/timeline";

interface TimelineItemProps {
  item: TimelineItemData;
  isReverse: boolean;
}

export default function TimelineItem({ item, isReverse }: TimelineItemProps) {
  return (
    <article 
      className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-12 ${
        isReverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className={`flex flex-col justify-center ${isReverse ? "md:[direction:ltr]" : ""}`}>
        <h3 className="font-display text-2xl font-medium text-ink mb-3">
          {item.title}
        </h3>
        <p className="font-body text-[1.05rem] leading-relaxed text-ink-soft">
          {item.description}
        </p>
      </div>

      <div className="z-10 flex items-center justify-center order-first md:order-none">
        <span className="inline-block rounded-full border border-paper-edge bg-paper px-4 py-2 font-display text-2xl font-normal italic text-red shadow-sm whitespace-nowrap">
          {item.year}
        </span>
      </div>

      <div className="hidden md:block" aria-hidden="true" />
    </article>
  );
}