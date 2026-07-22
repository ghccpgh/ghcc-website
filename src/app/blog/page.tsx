import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { getAllPostsQuery, getFeaturedPostsQuery } from '@/sanity/queries/post'
import type { BlogPostListItem } from '@/types/sanity'

export const revalidate = 60

export const metadata = {
  title: 'The Hazelwood Journal',
  description:
    'Stories, essays, and reporting from the Greater Hazelwood Community Collaborative.',
}

// helpers 
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// sub-components 

/** Compact featured card (all featured posts share this design in a 3-col grid) */
function FeaturedCard({ post, priority = false }: { post: BlogPostListItem; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-paper-edge bg-white no-underline transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      id={`featured-card-${post._id}`}
    >
      {/* Image */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-paper-warm">
        {post.heroImage?.asset?.url ? (
          <Image
            src={post.heroImage.asset.url}
            alt={post.heroImage.alt ?? ''}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-red-soft to-paper-warm" />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-red px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
          Featured
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-red">
          {formatDate(post.publishedAt)}
        </p>
        <h3 className="font-display text-base font-medium leading-snug text-ink transition-colors group-hover:text-red">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-mute">
            {post.excerpt}
          </p>
        )}
        {post.author && (
          <p className="mt-auto pt-3 text-xs text-mute">By {post.author}</p>
        )}
      </div>
    </Link>
  )
}

/** Horizontal list-row card */
function PostListRow({ post }: { post: BlogPostListItem }) {
  return (
    <li className="group" id={`post-row-${post._id}`}>
      <Link
        href={`/blog/${post.slug}`}
        className="flex items-start gap-5 py-6 no-underline"
      >
        {/* Thumbnail */}
        <div className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-lg bg-paper-warm sm:h-[100px] sm:w-[150px]">
          {post.heroImage?.asset?.url ? (
            <Image
              src={post.heroImage.asset.url}
              alt={post.heroImage.alt ?? ''}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="150px"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-red-soft to-paper-warm" />
          )}
        </div>

        {/* Text */}
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-red">
            {formatDate(post.publishedAt)}
          </p>
          <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-red sm:text-xl">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-mute">
              {post.excerpt}
            </p>
          )}
          {post.author && (
            <p className="mt-2 text-xs text-mute/70">By {post.author}</p>
          )}
        </div>
      </Link>
      {/* Divider */}
      <div className="h-px bg-paper-edge" />
    </li>
  )
}

// page

export default async function BlogIndexPage() {
  const [featured, all]: [BlogPostListItem[], BlogPostListItem[]] =
    await Promise.all([
      client.fetch(getFeaturedPostsQuery),
      client.fetch(getAllPostsQuery),
    ])

  // Exclude featured posts from the general list to avoid duplication
  const featuredIds = new Set(featured.map((p) => p._id))
  const regularPosts = all.filter((p) => !featuredIds.has(p._id))

  return (
    <div className="bg-paper min-h-screen">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">

        {/*Page header */}
        <header className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
            The Hazelwood Journal
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-ink">
            Stories from{' '}
            <em className="font-normal italic text-red">the neighborhood</em>.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">
            Essays, oral histories, and reporting from residents, organizers,
            and friends of Hazelwood.
          </p>
        </header>

        {/* Featured section — uniform 3-col grid */}
        {featured.length > 0 && (
          <section className="mb-20" aria-label="Featured posts">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
                Featured Stories
              </span>
              <div className="h-px flex-1 bg-paper-edge" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p, i) => (
                <FeaturedCard key={p._id} post={p} priority={i === 0} />
              ))}
            </div>
          </section>
        )}

        {/* All posts list */}
        <section aria-label="All posts">
          {featured.length > 0 && (
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
                {regularPosts.length > 0 ? 'All Stories' : 'More Stories'}
              </span>
              <div className="h-px flex-1 bg-paper-edge" />
            </div>
          )}

          {regularPosts.length === 0 && featured.length === 0 ? (
            <p className="py-16 text-center text-mute">
              New stories coming soon.
            </p>
          ) : regularPosts.length === 0 ? null : (
            <div className="mx-auto max-w-[760px]">
              {/* top divider */}
              <div className="h-px bg-paper-edge" />
              <ul className="list-none p-0 m-0">
                {regularPosts.map((post) => (
                  <PostListRow key={post._id} post={post} />
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}