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
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Voices of Hazelwood
          </p>

          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-light tracking-tight text-paper sm:text-4xl md:text-5xl"
          >
            The people who make this{" "}
            <em className="font-normal italic text-red">community</em>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t: any) => (
            <article
              key={t._id}
              className="flex flex-col rounded-2xl bg-paper p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Quote Icon */}
              <svg
                aria-hidden="true"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="mb-4 flex-shrink-0 text-red/30"
              >
                <path
                  d="M6 18H2C2 11.373 7.373 6 14 6v4c-4.418 0-8 3.582-8 8zm18 0h-4c0-6.627 5.373-12 12-12v4c-4.418 0-8 3.582-8 8z"
                  fill="currentColor"
                />
              </svg>

              <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-paper-edge pt-6">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                  {t.image && (
                    <Image
                      src={urlFor(t.image).width(200).height(200).url()}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  )}
                </div>

                <div>
                  <p className="font-medium text-ink">
                    {t.name}
                  </p>

                  <p className="text-sm text-mute">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
