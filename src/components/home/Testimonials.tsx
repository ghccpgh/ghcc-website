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

        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((t: any) => (
            <article
              key={t._id}
              className="flex flex-col sm:flex-row items-stretch rounded-2xl bg-paper shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Side */}
              <div className="relative w-full sm:w-[40%] h-64 sm:h-auto flex-shrink-0 bg-paper-edge">
                {t.image && (
                  <Image
                    src={urlFor(t.image).width(600).height(800).url()}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                )}
              </div>

              {/* Quote Side */}
              <div className="flex flex-col flex-1 p-8 md:p-10">
                {/* Quote Icon */}
                <svg
                  aria-hidden="true"
                  width="36"
                  height="36"
                  viewBox="0 0 32 32"
                  className="mb-6 flex-shrink-0 text-red/30"
                >
                  <path
                    d="M6 18H2C2 11.373 7.373 6 14 6v4c-4.418 0-8 3.582-8 8zm18 0h-4c0-6.627 5.373-12 12-12v4c-4.418 0-8 3.582-8 8z"
                    fill="currentColor"
                  />
                </svg>

                <blockquote className="flex-1 text-[1.1rem] leading-relaxed text-ink-soft mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-auto border-t border-paper-edge pt-6">
                  <p className="font-semibold text-lg text-ink">
                    {t.name}
                  </p>
                  <p className="text-sm text-mute mt-1">
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
