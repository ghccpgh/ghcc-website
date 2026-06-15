import type { PortableTextBlock } from '@portabletext/types'

export type BlogPostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  author?: string
  featured?: boolean
  heroImage?: {
    asset: { _id: string; url: string }
    alt?: string
  }
}

export type BlogPost = BlogPostListItem & {
  body: PortableTextBlock[] | string
}