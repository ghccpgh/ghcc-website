import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  boardMemberQuery,
  getAllBoardMemberSlugsQuery,
} from "@/sanity/queries/boardMembers";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    getAllBoardMemberSlugsQuery
  );

  return slugs.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = await client.fetch(boardMemberQuery, {
    slug,
  });

  if (!member) return {};

  return {
    title: member.name,
    description: member.bio ?? "",
  };
}

export default async function BoardMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = await client.fetch(boardMemberQuery, {
    slug,
  });

  if (!member) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[900px] px-6 py-24 md:px-12 md:py-32">


      <Link
        href="/about/board"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-red hover:underline"
      >
        ← Back to Board
      </Link>



      <header className="mb-12">

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red">
          {member.boardGroup === "executive"
            ? "Executive Committee"
            : "Committee Chair"}
        </p>

        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-tight tracking-tight text-ink">
          {member.name}
        </h1>

        <p className="mt-4 text-xl text-mute">
          {member.role}
        </p>

      </header>



      <section className="grid gap-10 md:grid-cols-[300px_1fr] md:items-start">


        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-paper-warm">
          {member.image && (
            <Image
              src={urlFor(member.image)
                .width(700)
                .height(875)
                .url()}
              alt={member.name}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>



        <div className="text-lg leading-relaxed text-ink-soft">

          <h2 className="mb-5 font-display text-3xl text-ink">
            Biography
          </h2>

          <p className="whitespace-pre-line">
            {member.bio}
          </p>

        </div>

      </section>

    </main>
  );
}