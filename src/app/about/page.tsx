import Link from "next/link";

const subPages = [
    {
        href: "/about/mission",
        label: "Mission",
        description: "Why we exist and the change we're working toward.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        href: "/about/team",
        label: "Team",
        description: "The staff and organizers who keep the work moving forward.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        href: "/about/history",
        label: "History",
        description: "From steel mills to community-led renaissance — our story.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        href: "/about/board",
        label: "Board",
        description: "Community leaders who guide our direction and governance.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const values = [
    {
        title: "Community-Led",
        description: "Decisions are made by the people who live here. Every initiative starts with listening.",
    },
    {
        title: "Equity First",
        description: "Development should benefit existing residents, not displace them.",
    },
    {
        title: "Transparency",
        description: "Open meetings, shared budgets, and honest conversations — always.",
    },
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero section */}
            <section className="bg-ink text-paper">
                <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-red">
                        About Us
                    </p>

                    <h1 className="max-w-4xl font-display text-4xl font-light leading-none tracking-tight md:text-5xl lg:text-6xl">
                        Who we are,{" "}
                        <em className="font-normal italic text-red-soft">
                            why we exist.
                        </em>
                    </h1>

                    <p className="mt-8 max-w-3xl font-display text-xl font-light leading-relaxed text-paper/75 md:text-2xl">
                        The Greater Hazelwood Community Collaborative is a coalition of
                        residents, faith leaders, nonprofits, and businesses working to
                        ensure that Hazelwood&rsquo;s renaissance is shaped by — and benefits —
                        the people who call this neighborhood home.
                    </p>
                </div>
            </section>

            {/* Values section */}
            <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
                    Our Values
                </p>
                <h2 className="mb-14 max-w-2xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
                    The principles that guide{" "}
                    <em className="font-normal italic text-red">everything we do</em>.
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="rounded-2xl border border-paper-edge p-8"
                        >
                            <h3 className="mb-3 font-display text-2xl font-medium tracking-tight text-ink">
                                {value.title}
                            </h3>
                            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sub-page links */}
            <section className="border-t border-paper-edge">
                <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-24">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-mute">
                        Learn More
                    </p>
                    <h2 className="mb-12 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
                        Explore our story.
                    </h2>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {subPages.map((page) => (
                            <Link
                                key={page.href}
                                href={page.href}
                                className="group flex flex-col rounded-2xl border border-paper-edge bg-paper p-7
                                    no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-soft/40 text-red transition-colors duration-300 group-hover:bg-red group-hover:text-paper">
                                    {page.icon}
                                </div>
                                <h3 className="mb-2 font-display text-xl font-medium tracking-tight text-ink">
                                    {page.label}
                                </h3>
                                <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                                    {page.description}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all duration-200 group-hover:gap-2.5">
                                    Explore
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                        <path
                                            d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}