import Image from "next/image";


//components
import Hero from "@/components/home/Hero";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Timeline />
    </div>
  );
}
