import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function BoardCard({ member }: { member: any }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-paper-warm shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative aspect-square w-full overflow-hidden bg-paper-edge">
        {member.image ? (
          <Image
            src={urlFor(member.image).width(600).height(600).url()}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-medium text-ink">{member.name}</h3>
        <p className="text-sm font-semibold uppercase tracking-wider text-red mt-1 mb-3">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-ink-soft text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}
