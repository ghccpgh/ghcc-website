import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { getPostBySlugQuery, getAllPostSlugsQuery } from '@/sanity/queries/post'
import type { BlogPost } from '@/types/sanity'

export const revalidate = 60

// Pre-generate known slugs at build time
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(getAllPostSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: BlogPost | null = await client.fetch(getPostBySlugQuery, { slug })
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt ?? '',
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: BlogPost | null = await client.fetch(getPostBySlugQuery, { slug })
  if (!post) notFound()

  return (
    <main className="mx-auto max-w-[780px] px-6 py-24 md:px-12 md:py-32">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-red hover:underline"
      >
        ← Back to The Hazelwood Journal
      </Link>

      {/* Hero image */}
      {post.heroImage?.asset?.url && (
        <div className="mb-10 aspect-[16/9] overflow-hidden rounded-xl bg-paper-warm">
          <Image
            src={post.heroImage.asset.url}
            alt={post.heroImage.alt ?? ''}
            width={1200}
            height={675}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      )}

      {/* Meta */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
        {new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-tight text-ink">
        {post.title}
      </h1>

      {post.author && (
        <p className="mt-4 text-sm text-mute">By {post.author}</p>
      )}

      {/* Body */}
      <div className="prose prose-lg mt-10 max-w-none text-ink-soft">
        {typeof post.body === 'string'
          ? post.body.split('\n').map((para, i) =>
              para.trim() ? <p key={i}>{para}</p> : null
            )
          : null}
      </div>
    </main>
  )
}
