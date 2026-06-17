import Image from "next/image";


//components
import Hero from "@/components/home/Hero";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
// import MissionStrip from "@/components/home/MissionStrip";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <MissionStrip /> */}
      <Timeline />
      < Testimonials />
      
    </div>
  );
}
