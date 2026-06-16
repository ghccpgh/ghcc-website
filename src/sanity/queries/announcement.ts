import { groq } from 'next-sanity'

// All published announcements — pinned first, then newest
export const getAllAnnouncementsQuery = groq`
  *[_type == "announcement" && published == true]
  | order(pinned desc, date desc) {
    _id,
    title,
    date,
    category,
    description,
    location,
    buttonText,
    buttonLink,
    pinned,
  }
`

// Just the pinned ones — useful for a homepage banner
export const getPinnedAnnouncementsQuery = groq`
  *[_type == "announcement" && published == true && pinned == true]
  | order(date desc) {
    _id,
    title,
    date,
    category,
    description,
    location,
    buttonText,
    buttonLink,
  }
`