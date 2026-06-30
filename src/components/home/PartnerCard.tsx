import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PartnerProps {
  name: string;
  description: string;
  image?: any;
}

export default function PartnerCard({ name, description, image }: PartnerProps) {
  return (
    <article className="flex items-center gap-4 rounded-xl bg-paper p-4 shadow-sm transition-all hover:shadow-md border border-paper-edge hover:border-red/20">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-paper-edge flex items-center justify-center">
        {image ? (
          <Image
            src={typeof image === 'string' ? image : urlFor(image).width(200).height(200).url()}
            alt={name}
            fill
            className="object-cover"
            sizes="64px"
          />
        ) : (
          <span className="text-xs text-mute font-medium">Logo</span>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-ink leading-tight mb-1">{name}</h3>
        <p className="text-xs text-ink-soft line-clamp-2">{description}</p>
      </div>
    </article>
  );
}
