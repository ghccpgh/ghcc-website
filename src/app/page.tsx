import Image from "next/image";

//components
import Hero from "@/components/home/Hero";
import MissionStrip from "@/components/home/MissionStrip";
import Testimonials from "@/components/home/Testimonials";
import CommunityPartners from "@/components/home/CommunityPartners";
import NonCommunityPartners from "@/components/home/NonCommunityPartners";
import Newsletter from "@/components/home/Newsletter";
import ContactCTA from "@/components/home/ContactCTA";

export const revalidate = 60

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
