import TimelineItem from "./TimelineItem";
import { timelineData } from "@/data/timelineData";

export default function Timeline() {
  return (
    <section
      className="mx-auto max-w-[1000px] px-6 py-16 md:px-12 md:py-24"
      aria-labelledby="history-heading"
    >
      {/* Section header */}
      <div className="mb-14">
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-red">
          Chapter One
        </p>
        <h2
          id="history-heading"
          className="font-display text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.08] tracking-tight text-ink"
        >
          The story of{" "}
          <em className="font-normal italic text-red">Hazelwood</em>.
        </h2>
        <p className="mt-4 max-w-[54ch] font-body text-base leading-relaxed text-mute md:text-lg">
          From a 19th-century river town to one of Pittsburgh's most storied
          working neighborhoods — a place where steel built families, and
          families built community.
        </p>
      </div>

      {/* Timeline list */}
      <ul className="list-none p-0 m-0">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.year}
            item={item}
            index={index}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </ul>
    </section>
  );
}