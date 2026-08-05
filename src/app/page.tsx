//components
import Hero from "@/components/home/Hero";
import MissionStrip from "@/components/home/MissionStrip";
import Testimonials from "@/components/home/Testimonials";
import CommunityPartners from "@/components/home/CommunityPartners";
import NonCommunityPartners from "@/components/home/NonCommunityPartners";
import Newsletter from "@/components/home/Newsletter";
import ContactCTA from "@/components/home/ContactCTA";

export const revalidate = 60

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Greater Hazelwood Community Collaborative",
  url: "https://ghccpgh.org",
  logo: "https://ghccpgh.org/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pittsburgh",
    addressRegion: "PA",
    postalCode: "15207",
    addressCountry: "US",
  },
  email: "hello@hazelwoodcollab.org",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <MissionStrip />
      <CommunityPartners />
      <NonCommunityPartners />
      <Testimonials />
      <ContactCTA />
      {/* <Newsletter /> */}
    </div>
  );
}
