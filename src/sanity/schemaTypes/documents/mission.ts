import {defineType, defineField, defineArrayMember} from 'sanity'

export const mission = defineType({
  name: 'mission',
  title: 'Mission Page',
  type: 'document',

  // Tabs across the top of the editing screen, so a non-technical
  // editor isn't faced with one long wall of fields.
  groups: [
    {name: 'header', title: 'Page header', default: true},
    {name: 'mission', title: 'Mission'},
    {name: 'values', title: 'Values'},
    {name: 'work', title: 'How we work'},
    {name: 'stats', title: 'Stats (side cards)'},
  ],

  fields: [
    // ---------- PAGE HEADER ----------
    defineField({
      name: 'eyebrow',
      title: 'Small label (above the title)',
      type: 'string',
      group: 'header',
      description: 'The little line of text that sits above the big heading. Example: "About Us".',
      initialValue: 'About Us',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'headingMain',
      title: 'Heading — normal part',
      type: 'string',
      group: 'header',
      description: 'The first part of the big title, in normal style. Example: "Who we are,"',
      initialValue: 'Who we are,',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headingEmphasis',
      title: 'Heading — emphasized part',
      type: 'string',
      group: 'header',
      description:
        'The part of the title shown in the red/italic emphasis style. Example: "why we exist". Leave blank if you don\'t want an emphasized part.',
      initialValue: 'why we exist',
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
      group: 'header',
      description: 'The large opening paragraph shown under the title.',
      validation: (Rule) => Rule.required(),
    }),

    // ---------- MISSION ----------
    defineField({
      name: 'missionTitle',
      title: 'Section heading',
      type: 'string',
      group: 'mission',
      initialValue: 'Our mission',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'missionBody',
      title: 'Mission text',
      type: 'text',
      rows: 5,
      group: 'mission',
      validation: (Rule) => Rule.required(),
    }),

    // ---------- VALUES ----------
    defineField({
      name: 'valuesTitle',
      title: 'Section heading',
      type: 'string',
      group: 'values',
      initialValue: 'Our values',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      group: 'values',
      description:
        'Each value shows as a bullet with a bold name and a short explanation. Use "Add item" to add one, the trash icon to remove, and drag to reorder.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'value',
          fields: [
            defineField({
              name: 'title',
              title: 'Name (the bold part)',
              type: 'string',
              description: 'Example: "Resident-led"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Explanation',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
      validation: (Rule) => Rule.min(1).max(8),
    }),

    // ---------- HOW WE WORK ----------
    defineField({
      name: 'howWeWorkTitle',
      title: 'Section heading',
      type: 'string',
      group: 'work',
      initialValue: 'How we work',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'howWeWorkBody',
      title: 'How we work text',
      type: 'text',
      rows: 5,
      group: 'work',
      validation: (Rule) => Rule.required(),
    }),

    // ---------- STATS ----------
    defineField({
      name: 'stats',
      title: 'Stats (the colored number cards)',
      type: 'array',
      group: 'stats',
      description:
        'The colored cards on the side. Keep each one short: a big number and a short label. Drag to reorder.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({
              name: 'number',
              title: 'Big number',
              type: 'string',
              description: 'Example: "14", "40+", "4,800", "100%"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label under the number',
              type: 'string',
              description: 'Example: "years organizing"',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'number', subtitle: 'label'},
          },
        }),
      ],
      validation: (Rule) => Rule.max(6),
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Mission Page'}
    },
  },
})