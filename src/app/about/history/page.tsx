import Link from "next/link";
import Image from "next/image";

import birdsEye from "@public/timeline-images/Hazelwood birds eye view.png";
import eraPhoto from "@public/timeline-images/1870s.png";
import riverMill from "@public/timeline-images/The river and the mill.png";
import hazPeak from "@public/timeline-images/Hazlewood at its peak.jpeg";
import steelDemolition from "@public/timeline-images/Steel mill demolition.jpeg";
import steelMillToday from "@public/timeline-images/Steel mill today.jpg";
import historicHaz from "@public/Historic HAZ p23.png";
import droneshot from "@public/droneshot.png";
import hazelwoodGarden from "@public/Hazelwood Garden p10.jpg";
import communityMtg from "@public/Community_Mtg_2.png";
import membersMeeting from "@public/ghcc-membership-meeting-june-2026.png";

export const metadata = {
  title: "History | Greater Hazelwood Community Collaborative",
  description:
    "From the hazelnut groves along the Monongahela to the founding of the GHCC: the story of a neighborhood made and remade by the people who stayed.",
};

/*
 * Each chapter is a data object so the page template stays clean.
 * Images are mapped to the chapters where they belong.
 */

const CHAPTERS = [
  {
    number: "01",
    era: "Before European settlement",
    title: "The river and the hazelnut groves",
    body: [
      "Long before Pittsburgh had a name, people lived along this stretch of the Monongahela. The northern bank, about four miles southeast of the Point, was home to Native peoples whose burial mounds were later reported near what is now Second Avenue. Hazelnut trees lined the riverfront in thick groves, and their presence would eventually give the neighborhood its name.",
      "In the mid-1700s, rights to a large tract of woodland that included present-day Hazelwood and Greenfield were transferred from Native Americans through a Stanwix treaty for roughly $10,000. The transaction opened the land to European settlement, but the river had been drawing people to this valley for centuries before any deed was signed.",
    ],
    image: birdsEye,
    imageAlt: "Historical bird's-eye view of the Monongahela Valley and early Hazelwood.",
    layout: "right" as const,
  },
  {
    number: "02",
    era: "1780s to 1860s",
    title: "Scotch Bottom and the oldest house in Pittsburgh",
    body: [
      "The earliest European settlers were Scottish families who farmed the lowland tract they called Scotch Bottom, stretching from Four Mile Run to Six Mile Ferry. Colonel George Woods laid out Pittsburgh's Golden Triangle in 1784; his son John Woods, a lawyer, Federalist, and state senator, drafted the plan that shaped the city's core.",
      "Around 1792 the Woods family quarried stone from the hillside and built a house at what is now 4604 Monongahela Street. They named their hilltop \"Hazel Hill\" for the groves, then joined \"Hazel\" to the family name to form Hazelwood. That stone house is considered the oldest house in Pittsburgh. It survived the Great Fire of 1845 and the 1936 flood, sat vacant and condemned for decades, was saved by community effort and the Urban Redevelopment Authority, and today operates as The Woods House pub.",
      "Through the mid-1800s Hazelwood remained a quiet, wooded suburb of rural estates. It would not stay quiet for long.",
    ],
    image: eraPhoto,
    imageAlt: "Hazelwood in the 1870s, showing early settlement along the river.",
    layout: "left" as const,
  },
  {
    number: "03",
    era: "1859 to 1918",
    title: "The mill town rises",
    body: [
      "In 1859, James Laughlin built the Eliza blast furnaces and beehive coke ovens on the Hazelwood riverfront. He soon partnered with B. F. Jones to form Jones and Laughlin Steel, known locally as J&L. Jones built the first rail line, the Pittsburgh and Connellsville, routing it inland to preserve the riverfront's appearance. The tracks split the neighborhood in two and gave rise to a term residents still use: \"below the tracks.\"",
      "Hazelwood was absorbed into the City of Pittsburgh in the late 1860s as the old 23rd Ward (today it sits in the 15th). In 1877 J&L built a span to carry molten iron across the Monongahela. It survives as the Hot Metal Bridge.",
      "By 1906 Hazelwood held the largest concentration of beehive coke ovens in the world: about 1,500, vented by fifteen stacks ninety feet tall. A modern byproduct coke plant replaced the beehive ovens in 1918. The mill had rewritten the neighborhood in less than sixty years.",
    ],
    image: riverMill,
    imageAlt: "The river and the J&L steel mill, showing the industrial riverfront.",
    layout: "right" as const,
    wide: true,
  },
  {
    number: "04",
    era: "1900s to 1950s",
    title: "A city within a city",
    body: [
      "The mill drew wave after wave of newcomers. After the Scottish came Hungarian, Italian, Slovak, Carpatho-Rusin, Polish, and Irish families who built the churches, clubs, and shops that filled daily life. The Hungarian community was especially vibrant. It founded the first Hungarian Reformed Church in Pittsburgh; local industry even contributed to church building funds.",
      "By the 1950s the business district on and around Second Avenue held more than 200 businesses. At its height, around 1950, the broader ward was home to more than 33,000 people, a largely self-contained place where most mill workers lived within walking distance of their jobs. In June 1952, J&L workers in Hazelwood joined a national United Steelworkers strike that lasted 53 days before winning better wages.",
      "Through the 1950s and 1960s, African American families displaced from the Lower Hill District by urban renewal (the construction of the Civic Arena uprooted roughly 8,000 residents and more than 400 businesses) made Hazelwood their home. That migration deepened a diversity that still defines the neighborhood. Glen Hazel, originally built as defense-worker housing in the 1940s, was later redeveloped as public housing by the Housing Authority of the City of Pittsburgh.",
      "The neighborhood's racial history, and the mistrust it bred between long-standing communities, went largely unspoken for decades. That silence would have to be broken before any collaborative work could begin.",
    ],
    image: hazPeak,
    imageAlt: "Hazelwood at its peak, a bustling neighborhood around the steel mills.",
    secondImage: historicHaz,
    secondImageAlt: "Historic Hazelwood street scene from the mid-twentieth century.",
    layout: "left" as const,
  },
  {
    number: "05",
    era: "1960 to 1998",
    title: "The mill falls silent",
    body: [
      "Steel peaked around 1960. The decline was slow through the 1960s and 1970s, then sudden. In 1974 J&L sold the Hazelwood works to LTV Steel; by then the workforce had already fallen to about 3,600. The Hazelwood Coke Works, the last operating steel mill within the city of Pittsburgh, shut down in the late 1990s.",
      "The aftermath was sharp: population loss, disinvestment, shuttered businesses. The last full-service grocery, Dimperio's Market, closed in 2008. But a core of residents stayed.",
      "Losing the mill cost Hazelwood its jobs and much of its population. The people who stayed organized anyway, and began to ask a question the neighborhood had never had to ask: what comes after steel?",
    ],
    image: steelDemolition,
    imageAlt: "The steel mill site during demolition.",
    layout: "right" as const,
  },
  {
    number: "06",
    era: "2001 to 2018",
    title: "Land banked for a new century",
    body: [
      "In 2001 a Riverlife Task Force vision for Pittsburgh's riverfronts set the stage. The following year, four foundations (the Claude Worthington Benedum Foundation, The Heinz Endowments, the Richard King Mellon Foundation, and the McCune Foundation) formed Almono LP and bought the 178-acre vacant brownfield from bankrupt LTV for $10 million, land-banking it for a careful, long-term redevelopment.",
      "A proposed Mon-Fayette Expressway extension threatened for over a decade to cut through the site and remove 35 to 40 acres before it was defeated. The 2008 recession then shifted the vision from mostly housing toward an employment and innovation hub.",
      "The Preliminary Land Development Plan was approved in 2018 and new SP-10 zoning in early 2019, registered to LEED for Neighborhood Development standards. Meanwhile, residents and community groups organized to reinvest in Second Avenue and stabilize housing. The question was no longer whether something would be built. It was who it would be built for.",
    ],
    image: steelMillToday,
    imageAlt: "The remediated mill site, prepared for redevelopment.",
    layout: "left" as const,
  },
  {
    number: "07",
    era: "2019 to today",
    title: "Hazelwood Green, and the question at its center",
    body: [
      "The former J&L site is being reborn as Hazelwood Green, master-developed by Tishman Speyer and billed as a center for science, engineering, and entrepreneurship. Mill 19 was rebuilt inside the original steel mill exoskeleton, a deliberate nod to the past. It opened in 2019 with Carnegie Mellon's Manufacturing Futures Institute and the Advanced Robotics for Manufacturing (ARM) Institute as anchor tenants, alongside the Catalyst Connection workforce program.",
      "Carnegie Mellon's $100 million Robotics Innovation Center (150,000 square feet) opened in the mid-2020s. The University of Pittsburgh's BioForge, a cell and gene therapy plant anchored by ElevateBio, aims to turn \"Steel Valley\" into \"Bio Valley.\" Plans call for thousands of mixed-income homes, green and recreational space, a multi-sport facility, and new retail on Second Avenue and the site.",
      "The unresolved question is the point. Residents have voiced both hope and worry about whether this future will serve them or price them out. This is precisely the tension the GHCC was built to hold.",
    ],
    image: droneshot,
    imageAlt: "Aerial view of the Hazelwood Green development site along the Monongahela.",
    layout: "right" as const,
    wide: true,
  },
  {
    number: "08",
    era: "2012 to present",
    title: "The community writes the next chapter",
    body: [
      "The GHCC grew out of resident-led advocacy and an earlier effort, the Hazelwood-Duquesne Partnership. Participants dropped \"Duquesne\" because they wanted a Hazelwood-led effort. With support from an early grant, the community hired a facilitator to work through years of mistrust and unspoken racial history between organizations and residents. The meetings were tense. But they built the respect the work required.",
      "Out of that process came the decision to form a collaborative of organizations where every member gets a single, equal vote. The name \"Greater\" Hazelwood was chosen deliberately, to unite Hazelwood and Glen Hazel as one community rather than divided turf. Members describe the organization's role as \"gatekeepers\" for the neighborhood, making sure development happens with the community and through it, not to it.",
      "The crowning achievement to date is the neighborhood plan, Our Hands, Our Plan: a community-authored document that gives Greater Hazelwood real leverage to hold development accountable. Few neighborhoods have anything like it.",
    ],
    image: membersMeeting,
    imageAlt: "GHCC membership meeting, community members gathered around tables.",
    layout: "left" as const,
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-paper">
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden md:min-h-[65vh]">
        <Image
          src={hazelwoodGarden}
          alt="Hazelwood community garden, a green space built by residents."
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 md:px-12 md:pb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-red-soft">
            Our History
          </p>
          <h1 className="max-w-[22ch] font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-5xl lg:text-[3.75rem]">
            Made and remade by the people who{" "}
            <em className="font-normal italic text-red-soft">stayed</em>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/85 md:text-xl">
            Hazelwood has been shaped by rivers, rails, steel, and the families
            who held on through every transformation. This is the story of a
            neighborhood that keeps building itself.
          </p>
        </div>
      </section>

      {/* CHAPTERS */}
      {CHAPTERS.map((chapter, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-paper" : "bg-paper-warm";

        return (
          <section
            key={chapter.number}
            className={`${bgClass} ${index > 0 ? "border-t border-paper-edge" : ""}`}
          >
            {/* Wide image chapters get a full-bleed image above the text */}
            {chapter.wide ? (
              <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden md:h-[50vh]">
                <Image
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"
                  aria-hidden="true"
                />
              </div>
            ) : null}

            <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
              <div
                className={`grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 ${
                  !chapter.wide ? "items-center" : ""
                }`}
              >
                {/* IMAGE COLUMN (non-wide chapters) */}
                {!chapter.wide && chapter.layout === "left" && (
                  <div className="md:col-span-6">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={chapter.image}
                        alt={chapter.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {chapter.secondImage && (
                      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={chapter.secondImage}
                          alt={chapter.secondImageAlt || ""}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* TEXT COLUMN */}
                <div
                  className={`${
                    chapter.wide
                      ? "md:col-span-8 md:col-start-1"
                      : chapter.layout === "left"
                      ? "md:col-span-6 md:col-start-7"
                      : "md:col-span-6 md:col-start-1"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-sm text-red tracking-[0.1em]">
                      {chapter.number}
                    </span>
                    <span className="h-[1px] w-8 bg-paper-edge" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.18em] text-mute">
                      {chapter.era}
                    </span>
                  </div>
                  <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-normal leading-tight tracking-tight text-ink">
                    {chapter.title}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {chapter.body.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-lg leading-relaxed text-ink-soft"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* IMAGE COLUMN (non-wide, right side) */}
                {!chapter.wide && chapter.layout === "right" && (
                  <div className="md:col-span-6 md:col-start-7">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={chapter.image}
                        alt={chapter.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* PULL QUOTE */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12">
          <figure className="relative mx-auto max-w-3xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-16 select-none font-display text-[12rem] leading-none text-red-soft/20"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-display text-[clamp(1.7rem,3.6vw,2.8rem)] font-normal italic leading-snug text-paper">
              Never let them build around you, and you&rsquo;re not in the center.
            </blockquote>
            <figcaption className="mt-8 text-sm uppercase tracking-[0.16em] text-red-soft">
              Reverend Michael Murray Sr.
              <span className="mt-1 block normal-case tracking-normal text-paper/60">
                Founding member, Greater Hazelwood resident
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-paper-edge bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                What comes next
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-normal leading-tight tracking-tight text-ink">
                This story is not finished.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Every chapter of Hazelwood&rsquo;s history was written by people
                who decided to stay and build. The next chapter is being written
                now, at meeting tables, on Second Avenue, and in the plans that
                will shape what the old mill site becomes. If your organization
                works in Greater Hazelwood, there is a seat at that table.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-red px-8 py-4 font-semibold text-paper no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                >
                  Get involved
                </Link>
                <Link
                  href="/about/mission"
                  className="inline-block rounded-full border-[1.5px] border-ink/30 px-8 py-4 font-semibold text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  Read our mission
                </Link>
              </div>
            </div>
            <div className="relative md:col-span-4 md:col-start-9">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={communityMtg}
                  alt="Community members at a GHCC meeting."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
