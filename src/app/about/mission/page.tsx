import Link from 'next/link';

export const metadata = {
  title: "Our Mission | GHCC",
  description: "Development that happens with the community, never to it.",
};

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-paper pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-paper text-ink">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 pb-20 text-center">
          <p className="font-mono text-xs tracking-[0.22em] uppercase text-red mb-6 rise">Our Mission</p>
          <h1 className="font-display font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-[20ch] mx-auto mb-8 rise d1">
            Development that happens <em className="italic text-red">with</em> the community, never <em className="italic text-red">to</em> it.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-mute mb-10 rise d2">
            We align people, partners, and resources to build a stronger Greater Hazelwood, advancing the economic, social, and physical well-being of every resident and stakeholder who calls this neighborhood home.
          </p>
          <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.12em] uppercase text-mute rise d3">
            <span className="w-6 h-[1px] bg-paper-edge"></span>
            Adopted in the GHCC Bylaws
            <span className="w-6 h-[1px] bg-paper-edge"></span>
          </div>
        </div>
      </section>

      {/* Principle Section */}
      <section className="py-24 bg-paper-warm">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-start">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] uppercase text-red mb-4">The promise at the center</p>
              <h2 className="font-display font-normal text-3xl md:text-4xl lg:text-[2.7rem] leading-[1.1] tracking-tight text-ink">
                Develop <span className="bg-gradient-to-t from-red-soft/40 to-transparent bg-no-repeat bg-[length:100%_45%] bg-bottom px-1">without displacement</span>
              </h2>
            </div>
            <div className="text-lg text-ink-soft space-y-5">
              <p>Greater Hazelwood is changing. New investment is arriving, much of it drawn by the redevelopment of the former mill site at Hazelwood Green. That change can build a stronger neighborhood, or it can push out the very people who have held this community together for generations.</p>
              <p>The Collaborative exists to make sure it is the former. We bring the neighborhood's organizations together so that growth happens <strong className="text-ink font-semibold">with us and through us, not to us</strong>. We welcome new investment and new neighbors while protecting the residents, history, and culture that make this place home.</p>
              <p>That is what we mean by <strong className="text-ink font-semibold">develop without displacement</strong>, and it is the standard we hold every plan, partner, and project to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-paper border-y border-paper-edge">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-[46ch] mb-12 text-center md:text-left">
            <p className="font-mono text-xs tracking-[0.22em] uppercase text-red mb-3">In practice</p>
            <h2 className="font-display font-normal text-3xl md:text-4xl leading-[1.12] text-ink">What the mission asks of us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-paper-edge border border-paper-edge">
            <article className="bg-paper-warm p-8 md:p-10 relative group">
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-red transition-all duration-350 ease-out group-hover:h-full"></div>
              <span className="font-mono text-xs text-red tracking-[0.1em]">01</span>
              <h3 className="font-display font-normal text-2xl text-ink mt-4 mb-3 leading-tight">Align resources</h3>
              <p className="text-base text-mute">Bring member organizations to one table so that effort and funding pull in the same direction, instead of competing for the same dollars.</p>
            </article>
            <article className="bg-paper-warm p-8 md:p-10 relative group">
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-red transition-all duration-350 ease-out group-hover:h-full"></div>
              <span className="font-mono text-xs text-red tracking-[0.1em]">02</span>
              <h3 className="font-display font-normal text-2xl text-ink mt-4 mb-3 leading-tight">Keep watch as gatekeepers</h3>
              <p className="text-base text-mute">Hold developers and decision-makers accountable to the community's own neighborhood plan, <em className="italic text-ink">Our Hands, Our Plan</em>.</p>
            </article>
            <article className="bg-paper-warm p-8 md:p-10 relative group">
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-red transition-all duration-350 ease-out group-hover:h-full"></div>
              <span className="font-mono text-xs text-red tracking-[0.1em]">03</span>
              <h3 className="font-display font-normal text-2xl text-ink mt-4 mb-3 leading-tight">Represent one Greater Hazelwood</h3>
              <p className="text-base text-mute">Speak for the whole neighborhood, Hazelwood and Glen Hazel alike, as a single community rather than divided turf. That is why we are <em className="italic text-ink">Greater</em> Hazelwood.</p>
            </article>
            <article className="bg-paper-warm p-8 md:p-10 relative group">
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-red transition-all duration-350 ease-out group-hover:h-full"></div>
              <span className="font-mono text-xs text-red tracking-[0.1em]">04</span>
              <h3 className="font-display font-normal text-2xl text-ink mt-4 mb-3 leading-tight">Put people first</h3>
              <p className="text-base text-mute">Advocate for affordable housing, good local jobs, accessible streets, and healthy parks, so families can stay in the community and thrive.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-paper-warm text-ink relative overflow-hidden">
        <span className="absolute font-display text-[22rem] leading-none text-red/5 -top-12 -left-4 pointer-events-none select-none" aria-hidden="true">&ldquo;</span>
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
          <blockquote className="font-display font-normal italic text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.22] tracking-tight max-w-[20ch]">
            Never let them build around you, and you&rsquo;re not in the center.
            <cite className="block mt-8 not-italic font-mono text-[0.78rem] tracking-[0.12em] uppercase text-red">
              Reverend Michael Murray Sr.
              <span className="block mt-1 text-mute tracking-[0.08em] normal-case font-body">Founding member, Greater Hazelwood resident</span>
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-paper border-t border-paper-edge">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
          <p className="font-mono text-xs tracking-[0.22em] uppercase text-red mb-4 inline-block">Join the table</p>
          <h2 className="font-display font-normal text-3xl md:text-4xl lg:text-[3rem] leading-[1.08] mb-8 text-ink">
            This work belongs to all of us.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-center text-mute mb-10">
            Membership is open to nonprofits, community groups, businesses, churches, and institutions working for the betterment of Greater Hazelwood. Come to a meeting, or bring your organization into the Collaborative.
          </p>
          <Link href="/contact" className="inline-block rounded-full bg-red px-8 py-4 font-semibold text-paper transition-all duration-200 hover:bg-red-dark hover:shadow-lg active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red">
            Get involved
          </Link>
        </div>
      </section>
    </main>
  );
}