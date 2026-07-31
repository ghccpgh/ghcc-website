import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PartnerProps {
  name: string;
  description: string;
  image?: any;
  link?: string;
  size?: "default" | "large";
  cardBgColor?: string; 
}

export default function PartnerCard({ name, description, image, link, size = "default", cardBgColor }: PartnerProps) {
  const isLarge = size === "large";

  const card = (
    <article
      className={[
        "flex",
        "items-center",
        "rounded-xl",
        cardBgColor || "bg-paper",
        "shadow-sm",
        "transition-all",
        "border",
        "border-paper-edge",
        link ? "cursor-pointer hover:shadow-md hover:border-red/20" : "",
        isLarge ? "gap-5 p-6 w-full" : "gap-4 p-4"
      ].filter(Boolean).join(" ")}
    >
      <div
        className={`relative flex-shrink-0 overflow-hidden bg-paper-edge flex items-center justify-center ${
          isLarge ? "h-20 w-20 rounded-lg" : "h-16 w-16 rounded-md"
        }`}
      >
        {image ? (
          <Image
            src={typeof image === 'string' ? image : urlFor(image).width(isLarge ? 300 : 200).height(isLarge ? 300 : 200).url()}
            alt={name}
            fill
            className="object-contain"
            sizes={isLarge ? "80px" : "64px"}
          />
        ) : (
          <span className={`text-mute font-medium ${isLarge ? "text-sm" : "text-xs"}`}>Logo</span>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className={`font-semibold text-ink leading-tight ${isLarge ? "text-base mb-1.5" : "text-sm mb-1"}`}>{name}</h3>
        <p className={`text-ink-soft ${isLarge ? "text-sm" : "line-clamp-2 text-xs"}`}>{description}</p>
      </div>
    </article>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
}
