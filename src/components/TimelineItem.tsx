import React from "react";
import Image from "next/image";
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
      {/* Mobile layout: year badge → image → text (stacked, unambiguous) */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="flex items-center">
          <span className="inline-block rounded-full border border-paper-edge bg-paper px-4 py-2 font-display text-xl font-normal italic text-red shadow-sm whitespace-nowrap">
            {item.year}
          </span>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {item.image.caption && (
          <p className="text-center font-body text-xs italic text-ink-soft/70">
            {item.image.caption}
          </p>
        )}
      </div>

      {/* Desktop: text column (left or right depending on isReverse) */}
      <div
        className={`hidden md:flex flex-col justify-center ${
          isReverse ? "md:[direction:ltr]" : ""
        }`}
      />
      <div className={`flex flex-col justify-center ${isReverse ? "md:[direction:ltr]" : ""}`}>
        <h3 className="font-display text-2xl font-medium text-ink mb-3">
          {item.title}
        </h3>
        <p className="font-body text-[1.05rem] leading-relaxed text-ink-soft">
          {item.description}
        </p>
      </div>

      {/* Desktop: year badge — center column, always visible on md+ */}
      <div className="z-10 hidden md:flex items-center justify-center"/>
      <div className="z-10 flex items-center justify-center order-first md:order-none">
        <span className="inline-block rounded-full border border-paper-edge bg-paper px-4 py-2 font-display text-2xl font-normal italic text-red shadow-sm whitespace-nowrap">
          {item.year}
        </span>
      </div>

      {/* Desktop: image column (alternates sides with isReverse) */}
      <div
        className={`hidden md:block ${isReverse ? "md:[direction:ltr]" : ""}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 40vw, 600px"
          />
        </div>
        {item.image.caption && (
          <p className="mt-2 text-center font-body text-xs italic text-ink-soft/70">
            {item.image.caption}
          </p>
        )}
      </div>

      {/* Mobile: text (shown below the image, no heading duplication) */}
      <div className="flex flex-col justify-center md:hidden">
        <h3 className="font-display text-xl font-medium text-ink mb-2">
          {item.title}
        </h3>
        <p className="font-body text-[0.95rem] leading-relaxed text-ink-soft">
          {item.description}
        </p>
      </div>
      <div className="hidden md:block" aria-hidden="true" />
    </article>
  );
}