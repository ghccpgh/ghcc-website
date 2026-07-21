import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-red" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Kicker */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
            Get in Touch
          </p>

          {/* Heading */}
          <h2
            id="contact-cta-heading"
            className="font-display text-3xl font-light tracking-tight text-paper sm:text-4xl md:text-5xl"
          >
            Have a concern or{" "}
            <em className="font-normal italic text-ink">suggestion</em>?
          </h2>

          {/* Supporting copy */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
            We&rsquo;re here to listen. Whether it&rsquo;s feedback, a question,
            or an idea to strengthen our community&mdash;we&rsquo;d love to hear
            from you.
          </p>

          {/* CTA button */}
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 font-semibold text-red transition-all duration-200 hover:bg-ink hover:text-paper hover:shadow-lg active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
          >
            Contact Us
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
