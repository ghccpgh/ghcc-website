import Image, { StaticImageData } from "next/image";
import { TimelineItemData } from "@/types/timeline";

// To be replaced with real pictures when we have them
import img1870s from "@public/timeline-images/1870s.png";
import imgRiver from "@public/timeline-images/The river and the mill.png";
import imgBirdsEye from "@public/timeline-images/Hazelwood birds eye view.png";
import imgDemolition from "@public/timeline-images/Steel mill demolition.jpeg";
import imgToday from "@public/timeline-images/Steel mill today.jpg";

// Cycle through available images in order (to be updated too)
const placeholders: StaticImageData[] = [
  imgRiver,
  img1870s,
  imgDemolition,
  imgToday,
];

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  isActive?: boolean;
}

export default function TimelineItem({ item, index, isActive }: TimelineItemProps) {
  const photo = placeholders[index % placeholders.length];

  return (
    <article className="relative flex items-center justify-center w-full h-full overflow-hidden">
      
      

      {/* Continuous Squiggly Timeline Line */}
      <div 
        className="absolute top-[25%] left-0 w-full h-[20px] z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 20 0, 40 10 T 80 10' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x'
        }}
      />

      {/* Year Pill & Dot on the Line */}
      <div className="absolute top-[25%] left-6 md:left-24 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="absolute bottom-full mb-4 bg-ink text-paper text-sm md:text-base font-display py-1 px-4 rounded-full shadow-sm whitespace-nowrap transition-all duration-700 delay-100" style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(10px)' }}>
          {item.year}
        </div>
        <div className={`w-4 h-4 rounded-full border-[3px] border-ink bg-paper shadow-sm transition-all duration-700 ${isActive ? 'scale-125 bg-ink' : ''}`} />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16 md:pt-24">
        
        {/* Text Content (Left) */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h3 className="font-display text-4xl md:text-5xl font-medium text-ink mb-6 leading-tight transition-all duration-700 delay-200" style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(20px)' }}>
            {item.title}
          </h3>
          <p className="font-body text-lg md:text-xl leading-relaxed text-ink-soft max-w-[45ch] transition-all duration-700 delay-300" style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(20px)' }}>
            {item.description}
          </p>
        </div>

        {/* Larger Non-Circular Image (Center/Right) */}
        <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
          <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-paper transition-transform duration-1000 ease-out" style={{ transform: isActive ? 'scale(1)' : 'scale(0.95)' }}>
            <Image 
              src={photo}
              alt={item.image.alt}
              fill
              className={`object-cover transition-transform duration-[2000ms] ease-out ${
                isActive ? "scale-100" : "scale-105"
              }`}
              sizes="(max-width: 768px) 100vw, 600px"
            />
            {/* Overlay to fade image slightly when not active */}
            <div className="absolute inset-0 bg-paper/20 mix-blend-overlay transition-opacity duration-700" style={{ opacity: isActive ? 0 : 1 }} />
            {item.image.caption && (
              <p className="absolute bottom-0 w-full border-t border-paper-edge bg-paper-warm/90 px-3 py-1.5 font-body text-[11px] italic text-mute/90 z-10 backdrop-blur-sm transition-opacity duration-700" style={{ opacity: isActive ? 1 : 0 }}>
                {item.image.caption}
              </p>
            )}
          </div>
        </div>
        
      </div>
    </article>
  );
}
