import Image from "next/image";

//components
import Hero from "@/components/home/Hero";
import MissionStrip from "@/components/home/MissionStrip";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/home/Testimonials";
import CommunityPartners from "@/components/home/CommunityPartners";
import NonCommunityPartners from "@/components/home/NonCommunityPartners";
import Newsletter from "@/components/home/Newsletter";

export const revalidate = 60

export default function Home() {
  return (
    <div>
      <Hero />
      <MissionStrip />
      {/* <Timeline /> */}
      <CommunityPartners />
      <NonCommunityPartners />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
