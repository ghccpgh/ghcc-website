import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/queries/testimonials";
import { urlFor } from "@/sanity/lib/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default async function Testimonials() {
  const raw = await client.fetch(testimonialsQuery);

  if (!raw?.length) return null;

  // Resolves image URLs on the server so the client component gets plain strings
  const testimonials = raw.map((t: any) => ({
    _id: t._id,
    quote: t.quote,
    name: t.name,
    role: t.role,
    imageUrl: t.image ? urlFor(t.image).width(160).height(160).url() : null,
  }));

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

        <div className="mt-12">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
