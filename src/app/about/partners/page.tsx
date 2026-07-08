import CommunityPartners from "@/components/home/CommunityPartners";
import NonCommunityPartners from "@/components/home/NonCommunityPartners";

export const metadata = {
  title: "Partners | Greater Hazelwood Community Collaborative",
  description:
    "The community and institutional partners working alongside GHCC to build a stronger Greater Hazelwood.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-paper pt-32 pb-20">
      {/* Hero */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 pb-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-red">
            Our Partners
          </p>
          <h1 className="max-w-[22ch] font-display text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Building a stronger Hazelwood,{" "}
            <em className="font-normal italic text-red">together</em>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            The Collaborative brings together community-based organizations and
            institutional partners who share a commitment to equitable
            development in Greater Hazelwood.
          </p>
        </div>
      </section>

      {/* Community Partners */}
      <CommunityPartners size="large" />

      {/* Non-Community Partners */}
      <NonCommunityPartners size="large" />
    </main>
  );
}
