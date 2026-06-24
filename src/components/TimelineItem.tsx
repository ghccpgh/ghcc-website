import Image, { StaticImageData } from "next/image";
import { TimelineItemData } from "@/types/timeline";

// To be replaced with real pictures when we have them
import img1870s from "@public/timeline-images/1870s.png";
import imgRiver from "@public/timeline-images/The river and the mill.png";
import imgBirdsEye from "@public/timeline-images/Hazelwood birds eye view.png";
import imgDemolition from "@public/timeline-images/Steel mill demolition.jpeg";
import imgToday from "@public/timeline-images/Steel mill today.jpg";

// Cycle through available images in order (to be updated too)
const placeholders: StaticImageData[] = [
  imgRiver,
  img1870s,
  imgDemolition,
  imgToday,
];

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({
  item,
  index,
  isLast,
}: TimelineItemProps) {
  const photo = placeholders[index];

  return (
    <li className="relative flex gap-8 md:gap-12">
      {/* Left rail (dot + vertical line) */}
      <div className="relative flex flex-col items-center" aria-hidden="true">
        {/* dot */}
        <div className="z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-red ring-4 ring-paper" />
        {/* line below dot */}
        {!isLast && <div className="mt-2 w-px flex-1 bg-paper-edge" />}
      </div>

      {/* Content */}
      <div className={`pb-14 ${isLast ? "pb-0" : ""}`}>
        {/* Year chip */}
        <span className="mb-3 inline-block rounded-full border border-red/20 bg-red/5 px-3 py-0.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-red">
          {item.year}
        </span>

        {/* Title */}
        <h3 className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
          {item.title}
        </h3>

        {/* Body */}
        <p className="mt-2 max-w-[68ch] font-body text-[0.95rem] leading-relaxed text-mute">
          {item.description}
        </p>

        {/* Photo */}
        <div className="mt-5 overflow-hidden rounded-lg border border-paper-edge">
          <div className="relative aspect-[16/9] w-full max-w-[420px] md:max-w-[560px]">
            <Image
              src={photo}
              alt={item.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 420px, 560px"
            />
          </div>
          {item.image.caption && (
            <p className="border-t border-paper-edge bg-paper-warm px-3 py-1.5 font-body text-[11px] italic text-mute/70">
              {item.image.caption}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}