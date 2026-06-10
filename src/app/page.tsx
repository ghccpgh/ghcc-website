import Image from "next/image";


//components
import Header from "../components/layout/Header";
import Hero from "@/components/home/Hero";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="">
      <main>
        <Header />
        <Hero />
        <Timeline />
        
      </main>
    </div>
  );
}
