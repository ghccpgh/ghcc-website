import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/queries/testimonials";
import { urlFor } from "@/sanity/lib/image";

export default async function Testimonials() {
  const testimonials = await client.fetch(testimonialsQuery);

  return (
    <section
      className="bg-ink"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
          Testimonials
        </p>

        <h2
          id="testimonials-heading"
          className="font-display text-2xl font-light tracking-tight text-paper sm:text-3xl md:text-4xl"
        >
          From our <em className="italic text-red">community</em>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t: any) => (
            <article
              key={t._id}
              className="flex flex-col justify-between rounded-lg bg-paper p-8"
            >
              <blockquote className="text-[0.95rem] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                {t.image && (
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={urlFor(t.image).width(80).height(80).url()}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  {t.role && (
                    <p className="text-xs text-mute">{t.role}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

