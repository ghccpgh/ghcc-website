import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function BoardCard({ member }: { member: any }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-paper-warm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link
        href={`/about/board/${member.slug}`}
        className="group relative aspect-square w-full overflow-hidden bg-paper-edge"
      >
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
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link
          href={`/about/board/${member.slug}`}
          className="no-underline"
        >
          <h3 className="text-xl font-medium text-ink transition-colors hover:text-red">
            {member.name}
          </h3>
        </Link>

        <p className="mt-1 mb-3 text-sm font-semibold uppercase tracking-wider text-red">
          {member.role}
        </p>

        {member.description && (
          <p className="flex-1 text-sm leading-relaxed text-ink-soft line-clamp-3">
            {member.description}
          </p>
        )}

        <div className="mt-4 flex flex-col gap-2">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-sm font-medium text-red hover:underline"
            >
              {member.email}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}