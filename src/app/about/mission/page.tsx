import {client} from '@/sanity/lib/client'
import {missionQuery} from '@/sanity/queries/mission'

// Re-check Sanity for edits every 60 seconds, so published changes
// show up on the live site without a redeploy.
export const revalidate = 60

type ValueItem = {title: string; description: string}
type Stat = {number: string; label: string}

type Mission = {
  eyebrow?: string
  headingMain?: string
  headingEmphasis?: string
  intro?: string
  missionTitle?: string
  missionBody?: string
  valuesTitle?: string
  values?: ValueItem[]
  howWeWorkTitle?: string
  howWeWorkBody?: string
  stats?: Stat[]
}

export default async function MissionPage() {
  const data: Mission | null = await client.fetch(missionQuery)

  // Friendly placeholder shown only if no content has been added yet.
  if (!data) {
    return (
      <section className="page" id="mission">
        <div className="page-header">
          <p className="eyebrow">About Us</p>
          <h1 className="display">
            Mission content <em>coming soon</em>.
          </h1>
          <p className="lede">
            Add content in the Studio under &ldquo;Mission Page&rdquo;, then hit Publish.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="page" id="mission" aria-labelledby="mission-heading">
      <div className="page-header">
        <p className="eyebrow">{data.eyebrow}</p>
        <h1 id="mission-heading" className="display">
          {data.headingMain}{' '}
          {data.headingEmphasis ? <em>{data.headingEmphasis}</em> : null}
        </h1>
      </div>

      <div className="prose-grid">
        <div className="prose-main">
          {data.intro ? <p className="lede">{data.intro}</p> : null}

          {data.missionTitle ? <h2>{data.missionTitle}</h2> : null}
          {data.missionBody ? <p>{data.missionBody}</p> : null}

          {data.values && data.values.length > 0 ? (
            <>
              {data.valuesTitle ? <h2>{data.valuesTitle}</h2> : null}
              <ul className="values-list">
                {data.values.map((v, i) => (
                  <li key={i}>
                    <strong>{v.title}.</strong> {v.description}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {data.howWeWorkTitle ? <h2>{data.howWeWorkTitle}</h2> : null}
          {data.howWeWorkBody ? <p>{data.howWeWorkBody}</p> : null}
        </div>

        {data.stats && data.stats.length > 0 ? (
          <aside className="prose-side">
            {data.stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <p className="stat-number">{s.number}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </aside>
        ) : null}
      </div>
    </section>
  )
}