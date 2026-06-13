import Link from "next/link";

export default function AboutPage() {
    return (
        <main>
            <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">

                <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-red">
                    About Us
                </p>

                <h1 className="font-display text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl">
                    Who we are,{" "}
                    <span className="text-red italic">
                        why we exist.
                    </span>
                </h1>


                <div className="mt-12 max-w-3xl">
                    <p className="font-display text-xl leading-relaxed text-ink-soft md:text-2xl">
                        The Greater Hazelwood Community Collaborative is a coalition of
                        residents, faith leaders, nonprofits, and businesses working to
                        ensure that Hazelwood's renaissance is shaped by — and benefits —
                        the people who call this neighborhood home.
                    </p>
                </div>


                <div className="mt-20 border-t border-paper-edge pt-10">
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-mute">
                        Learn More
                    </p>

                    <div className="flex flex-col gap-4 md:flex-row md:gap-10">

                        <Link
                            href="/mission"
                            className="font-display text-2xl no-underline transition-colors hover:text-red"
                        >
                            Mission
                        </Link>

                        <Link
                            href="/history"
                            className="font-display text-2xl no-underline transition-colors hover:text-red"
                        >
                            Team
                        </Link>

                        <Link
                            href="/board"
                            className="font-display text-2xl no-underline transition-colors hover:text-red"
                        >
                            History
                        </Link>

                        <Link
                            href="/team"
                            className="font-display text-2xl no-underline transition-colors hover:text-red"
                        >
                            Board
                        </Link>

                    </div>
                </div>

            </section>
        </main>
    );
}