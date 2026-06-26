import {groq} from 'next-sanity'

/**
 * Fetches the single Mission page document.
 * [0] = "just give me the one and only mission document".
 *
 * (If your other query files don't import `groq` from 'next-sanity',
 * you can delete the import line above and remove the `groq` word
 * before the backtick — a plain string works the same way.)
 */
export const missionQuery = groq`
  *[_type == "mission"][0]{
    eyebrow,
    headingMain,
    headingEmphasis,
    intro,
    missionTitle,
    missionBody,
    valuesTitle,
    "values": values[]{ title, description },
    howWeWorkTitle,
    howWeWorkBody,
    "stats": stats[]{ number, label }
  }
`