import { groq } from 'next-sanity'

// Shared projection used in all list queries
const POST_LIST_PROJECTION = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "publishedAt": date,
  featured,
  author,
  "heroImage": photo {
    asset-> {
      _id, url
    },
    "alt": alt
  }
`

// All published blog posts, ordered by publish date
export const getAllPostsQuery = groq`
  *[_type == "post" && defined(date)] 
  | order(date desc) {
    ${POST_LIST_PROJECTION}
  }
`

// Featured posts only (pinned at the top of the blog index)
export const getFeaturedPostsQuery = groq`
  *[_type == "post" && defined(date) && featured == true]
  | order(date desc) [0...3] {
    ${POST_LIST_PROJECTION}
  }
`

// One blog post, by slug for the detail page
export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": date,
    featured,
    author,
    "heroImage": photo {
      asset-> {
        _id, url
      },
      "alt": alt
    },
    body
  }
`

// Just the slugs, for static path generation
export const getAllPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`