import missionImage from "@public/ghcc-membership-meeting-june-2026.png"
import Image from "next/image";
import Link from 'next/link'


export default function MissionStrip() {
  const stats = [
    { value: "10+", label: "Years serving Hazelwood" },
    { value: "500+", label: "Families supported" },
    { value: "30+", label: "Community partners" },
  ];

  return (
    <section aria-labelledby="mission-strip-heading">
      {/* Split-color two-column layout */}
      <div className="grid md:grid-cols-2">

       {/* Image side (left) */}
        <div className="relative bg-paper-warm">
          <div className="flex h-full items-center justify-center p-0 md:p-0 lg:p-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden ">
              <Image 
                src={missionImage} 
                alt="Mission" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text side (right) */}
        <div className="bg-ink text-paper">
          <div className="flex h-full flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Our Mission
            </p>
            <h2
              id="mission-strip-heading"
              className="font-display text-xl font-light leading-[1.3] tracking-tight text-paper sm:text-2xl md:text-[1.75rem]"
            >
              We align people, partners, and resources to build a{" "}
              <em className="font-normal italic text-red-soft">
                stronger Greater Hazelwood
              </em>
              , advancing economic, social, and physical well-being for every
              resident and stakeholder who calls this neighborhood home.
            </h2>

            {/* Link to the full Mission page */}
            <Link
              href="/about/mission"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-red transition-colors hover:text-red-soft"
            >
              Read our mission
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

      </div>

      {/* Impact stats */}
      <div className="bg-ink">
        <div className="mx-auto max-w-[1280px] px-6 pb-20 md:px-12 md:pb-28">
          <div className="grid grid-cols-1 gap-8 border-t border-paper/10 pt-12 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-light tracking-tight text-red sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-paper/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
