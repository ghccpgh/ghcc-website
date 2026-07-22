export type AnnouncementCategory =
  | 'urgent'
  | 'event'
  | 'meeting'
  | 'deadline'
  | 'grant'
  | 'notice'

export interface Announcement {
  _id:         string
  title:       string
  date:        string   // "YYYY-MM-DD"
  category:    AnnouncementCategory
  description: string
  location?:   string | null
  buttonText?: string | null
  buttonLink?: string | null
  pinned:      boolean
}