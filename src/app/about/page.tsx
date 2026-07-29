import Link from "next/link";
import Image from "next/image";
import SteelMill from "@/../public/droneshot-of-the-steel-mill.png";
import hazelwoodGarden from "@public/Hazelwood Garden p10.jpg";

const MEMBERSHIP = [
  {
    title: "One organization, one vote",
    body: "Every member organization carries a single, equal voice, whatever its size or budget. No one has a louder seat at the table.",
  },
  {
    title: "Two kinds of members",
    body: "Community-based organizations rooted in the neighborhood, and non-community organizations who have been welcomed in to support its growth.",
  },
  {
    title: "We meet all year",
    body: "The general membership gathers each quarter for strategic decision-making, while committees advance specific projects between sessions.",
  },
  {
    title: "Open to all who serve Hazelwood",
    body: "Nonprofits, community groups, businesses, churches, and institutions dedicated to our neighborhood are invited to apply for membership.",
  },
];

const LEADERSHIP = [
  { role: "Chair", name: "Rev. Benjamin Janssen", org: "Pittsburgh Area Lutheran Ministries" },
  { role: "Vice Chair", name: "Heidi Ward", org: "University of Pittsburgh" },
  { role: "Secretary", name: "Danielle Chaykowsky", org: "Center of Life" },
  { role: "Treasurer", name: "John Figlar", org: "St. Stephen Alumni Association" },
  { role: "Parliamentarian", name: "Deacon Tom Berna", org: "Fishes and Loaves Food Co-Op" },
];

const SUB_PAGES = [
  { href: "/about/mission", label: "Mission", description: "Why we exist and the change we're working toward." },
  { href: "/about/partners", label: "Partners", description: "The organizations and institutions working alongside us." },
  { href: "/about/history", label: "History", description: "From steel mills to a community-led renaissance." },
  { href: "/about/leadership", label: "Leadership", description: "The community leaders who guide our direction." },
];

export const metadata = {
  title: "About | Greater Hazelwood Community Collaborative",
  description:
    "A coalition of residents, faith leaders, nonprofits, and businesses ensuring Hazelwood's future is built with its people, not around them.",
};

export default function AboutPage() {
  return (
    <div>
      {/* HERO  full-bleed image with layered overlay */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden md:min-h-[70vh]">
        <Image
          src={SteelMill}
          alt="Aerial view of the historic steel mill site in Greater Hazelwood, Pittsburgh."
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* base tint */}
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
        {/* grid pattern, fading diagonally */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            backgroundPosition: "top right",
            maskImage:
              "linear-gradient(to bottom left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 75%)",
          }}
        />
        {/* bottom gradient for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 md:px-12 md:pb-20">
          <p className="mb-5 text-lg font-semibold uppercase tracking-[0.28em] text-red-soft">
            About Us
          </p>
          <h1 className="max-w-[20ch] font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-5xl lg:text-[3.75rem]">
            We make sure
Hazelwood's future  
is built with its people. 
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/85 md:text-xl">
            The Greater Hazelwood Community Collaborative is a coalition of
            residents, faith leaders, nonprofits, and businesses working to
            ensure that Hazelwood&rsquo;s renaissance is shaped by, and benefits,
            the people who call this neighborhood home.
          </p>
        </div>
      </section>

      {/* QUICK FACTS strip */}
      <section className="border-b border-paper-edge bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-10 md:px-12">
          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-mute">Founded</dt>
              <dd className="mt-1 font-display text-xl text-ink">2012</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-mute">Where</dt>
              <dd className="mt-1 font-display text-xl text-ink">Pittsburgh&rsquo;s 15th Ward</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-mute">Structure</dt>
              <dd className="mt-1 font-display text-xl text-ink">A coalition of member organizations</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-paper-edge bg-paper-warm">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-24 text-center md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Our mission
          </p>
          <p className="mt-8 max-w-[48ch] text-balance font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-normal leading-snug text-ink">
            We align people, partners, and resources to build a stronger Greater
            Hazelwood, advancing the{" "}
            <em className="italic text-red">economic, social, and physical well-being</em>{" "}
            of every resident who calls this neighborhood home.
          </p>
          <div className="mt-14 grid w-full max-w-3xl gap-8 text-left sm:grid-cols-2">
            <p className="leading-relaxed text-ink-soft">
              The Collaborative is chartered for charitable, educational, social
              service, and business development purposes.
            </p>
            <p className="leading-relaxed text-ink-soft">
              But the work behind those words is simple: bring partners to one
              table, and point shared resources in one direction to ensure
              development happens with the community, never to it.
            </p>
          </div>
        </div>
      </section>

      {/* DEVELOP WITHOUT DISPLACEMENT */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 md:grid-cols-12 md:px-12">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              The promise at the center
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-normal leading-tight tracking-tight text-ink">
              Develop{" "}
                without displacement
            </h2>
          </div>
          <div className="space-y-5 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-ink-soft">
              Greater Hazelwood is changing. The redevelopment of the former
              mill site at Hazelwood Green is drawing new investment, new
              institutions, and new neighbors.
            </p><br/>
            <p className="text-lg leading-relaxed text-ink-soft">
              That change can build a stronger neighborhood, or it can price out
              the families who have held this community together for
              generations. We exist to make sure it is the former: growth that
              happens{" "}
              <span className="font-semibold text-ink">
                with the community and through it, not to it.
              </span>
            </p><br/>
            <p className="text-lg leading-relaxed text-ink-soft">
              We welcome new investment and new neighbors while protecting the
              residents, history, and culture that make Greater Hazelwood home,
              and we hold every plan and partner to that standard.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative isolate overflow-hidden border-y border-paper-edge">
  {/* Full-bleed background image */}
  <Image
    src={hazelwoodGarden}
    alt="Community garden in Greater Hazelwood"
    fill
    className="object-cover"
    sizes="100vw"
    priority={false}
  />
  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />

  <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
    {/* Floating content card — larger, offset to the right */}
    <div className="ml-auto max-w-3xl rounded-lg bg-paper p-10 shadow-2xl md:p-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
        How the Collaborative works
      </p>
      <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-normal leading-tight tracking-tight text-ink">
        A true collaborative, by design
      </h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 md:gap-10">
        {MEMBERSHIP.map((item, i) => (
          <article key={item.title} className="group">
            <span className="font-display text-base font-medium text-red">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1.5 font-display text-xl font-medium leading-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2.5 leading-relaxed text-ink-soft">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PULL QUOTE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12">
          <figure className="relative mx-auto max-w-3xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-16 select-none font-display text-[12rem] leading-none text-red-soft"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-display text-[clamp(1.7rem,3.6vw,2.8rem)] font-normal italic leading-snug text-ink">
              Never let them build around you, and you&rsquo;re not in the center.
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.16em] text-mute">
              Reverend Michael Murray Sr.
              <span className="mt-1 block normal-case tracking-normal text-ink-soft">
                Founding member, Greater Hazelwood resident
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      

      {/* EXPLORE / SUB-PAGES */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper">
              Learn more
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-normal leading-tight tracking-tight text-white">
              Explore our story
            </h2>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden border border-paper-edge bg-paper-edge sm:grid-cols-2 lg:grid-cols-4">
            {SUB_PAGES.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group relative flex h-full flex-col bg-paper p-8 no-underline transition-colors duration-200 hover:bg-paper-warm"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-0 w-[3px] bg-red transition-[height] duration-300 ease-out group-hover:h-full"
                  />
                  <h3 className="font-display text-xl font-medium text-ink">{page.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {page.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all duration-200 group-hover:gap-2.5">
                    Explore
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-warm">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-24 text-center md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-soft">
            Join the table
          </p>
          <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-tight tracking-tight text-ink">
            Bring your organization to the table.
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/70">
            Membership is open to any organization working for the betterment of
            Greater Hazelwood. Come see what the Collaborative is building, and
            help decide where it goes next.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-red px-8 py-4 font-semibold text-paper no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Become a member
            </Link>
            <Link
              href="/announcements"
              className="inline-block rounded-full border-[1.5px] border-paper-ink/60 px-8 py-4 font-semibold text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Visit a meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}