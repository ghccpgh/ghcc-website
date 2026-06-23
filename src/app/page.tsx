import Image from "next/image";

//components
import Hero from "@/components/home/Hero";
import MissionStrip from "@/components/home/MissionStrip";
import Programs from "@/components/home/Programs";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/home/Testimonials";



export default function Home() {
  return (
    <div>
      <Hero />
      <MissionStrip />
      <Timeline />
      <Testimonials />
    </div>
  );
}
