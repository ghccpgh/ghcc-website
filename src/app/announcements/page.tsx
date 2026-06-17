import { client } from '@/sanity/lib/client'
import { getAllAnnouncementsQuery } from '@/sanity/queries/announcement'
import type { Announcement, AnnouncementCategory } from '@/types/announcement'

export const revalidate = 60

export const metadata = {
  title: "What's Happening | Greater Hazelwood Community Collaborative",
  description: 'Meetings, events, deadlines, and notices for the Hazelwood community.',
}

// ── helpers ────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
}

const CATEGORY_STYLES: Record<AnnouncementCategory, { label: string; classes: string }> = {
  urgent:   { label: 'Urgent',   classes: 'bg-red text-white' },
  event:    { label: 'Event',    classes: 'bg-ink text-paper' },
  meeting:  { label: 'Meeting',  classes: 'bg-ink text-paper' },
  deadline: { label: 'Deadline', classes: 'bg-ink text-paper' },
  grant:    { label: 'Grant',    classes: 'bg-ink text-paper' },
  notice:   { label: 'Notice',   classes: 'bg-ink text-paper' },
}

// ── components ─────────────────────────────────────────────────

function Badge({ category }: { category: AnnouncementCategory }) {
  const { label, classes } = CATEGORY_STYLES[category] ?? { label: category, classes: 'bg-ink text-paper' }
  return (
    <span className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${classes}`}>
      {label}
    </span>
  )
}

function AnnouncementCard({ ann }: { ann: Announcement }) {
  const urgent = ann.category === 'urgent'
  return (
    <article className={`rounded-xl border p-6 md:p-8 ${urgent ? 'border-red/40 bg-red/5' : 'border-paper-edge bg-white'}`}>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Badge category={ann.category} />
        <time dateTime={ann.date} className="text-[11px] font-medium text-mute">
          {formatDate(ann.date)}
        </time>
      </div>

      <h2 className={`font-display text-xl font-medium leading-snug md:text-2xl ${urgent ? 'text-red' : 'text-ink'}`}>
        {ann.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-mute">{ann.description}</p>

      {ann.location && (
        <p className="mt-3 text-sm text-ink">
          <strong>Where:</strong> {ann.location}
        </p>
      )}

      {ann.buttonText && ann.buttonLink && (
        <a
          href={ann.buttonLink}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-red no-underline hover:opacity-70 transition-opacity"
        >
          {ann.buttonText} →
        </a>
      )}
    </article>
  )
}

// ── page ───────────────────────────────────────────────────────

export default async function AnnouncementsPage() {
  const announcements: Announcement[] = await client.fetch(getAllAnnouncementsQuery)

  const pinned  = announcements.filter((a) => a.pinned)
  const regular = announcements.filter((a) => !a.pinned)

  return (
    <div className="bg-paper min-h-screen">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">

        <header className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Announcements
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-ink">
            What&apos;s <em className="font-normal italic text-red">happening</em>.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">
            Meetings, events, deadlines, and notices for the Hazelwood community.
          </p>
        </header>

        {announcements.length === 0 ? (
          <p className="py-16 text-center text-mute">No announcements right now — check back soon.</p>
        ) : (
          <div className="space-y-16">

            {pinned.length > 0 && (
              <section aria-label="Pinned announcements">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">Pinned</span>
                  <div className="h-px flex-1 bg-paper-edge" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pinned.map((ann) => <AnnouncementCard key={ann._id} ann={ann} />)}
                </div>
              </section>
            )}

            {regular.length > 0 && (
              <section aria-label="All announcements">
                {pinned.length > 0 && (
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">All Announcements</span>
                    <div className="h-px flex-1 bg-paper-edge" />
                  </div>
                )}
                <div className="mx-auto max-w-[760px] space-y-5">
                  {regular.map((ann) => <AnnouncementCard key={ann._id} ann={ann} />)}
                </div>
              </section>
            )}

          </div>
        )}

      </div>
    </div>
  )
}