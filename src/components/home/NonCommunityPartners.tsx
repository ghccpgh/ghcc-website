import { client } from "@/sanity/lib/client";
import { nonCommunityPartnersQuery } from "@/sanity/queries/partners";
import PartnerCard from "./PartnerCard";

export default async function NonCommunityPartners({ size = "default" }: { size?: "default" | "large" }) {
  const partners = await client.fetch(nonCommunityPartnersQuery);

  if (!partners || partners.length === 0) return null;

  return (
    <section className="bg-paper py-16" aria-labelledby="non-community-partners-heading">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-10 text-center md:text-left">
          <h2
            id="non-community-partners-heading"
            className="font-display text-2xl font-light tracking-tight text-ink sm:text-3xl md:text-4xl"
          >
            Our <span className="italic text-red">Non-Community</span> Partners
          </h2>
          <p className="mt-2 text-sm text-ink-soft max-w-2xl mx-auto md:mx-0">
            Valued partners from outside the immediate neighborhood supporting our mission.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${size === "large" ? "gap-5 lg:grid-cols-3" : "gap-4 lg:grid-cols-3 xl:grid-cols-4"}`}>
          {partners.map((partner: any) => (
            <PartnerCard
              key={partner._id}
              name={partner.name}
              description={partner.description || ""}
              image={partner.image}
              size={size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
