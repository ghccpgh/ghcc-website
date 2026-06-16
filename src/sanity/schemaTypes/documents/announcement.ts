import { defineField, defineType } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcements',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The main headline — e.g. "Community Meeting on June 15"',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required'),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      description: 'When is this event or deadline?',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' },
      validation: (Rule) => Rule.required().error('Please add a date'),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      description: 'What kind of announcement is this?',
      type: 'string',
      options: {
        list: [
          { title: 'Urgent',   value: 'urgent'   },
          { title: 'Event',    value: 'event'     },
          { title: 'Meeting',  value: 'meeting'   },
          { title: 'Deadline', value: 'deadline'  },
          { title: 'Grant',    value: 'grant'     },
          { title: 'Notice',   value: 'notice'    },
        ],
        layout: 'radio',
      },
      initialValue: 'event',
      validation: (Rule) => Rule.required().error('Please choose a category'),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short paragraph explaining the announcement.',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().error('Please add a description'),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      description: 'Optional — e.g. "Hazelwood Library, 6:30 PM"',
      type: 'string',
    }),

    defineField({
      name: 'buttonText',
      title: 'Button label',
      description: 'Optional — text for the action button, e.g. "Register", "RSVP", "Apply"',
      type: 'string',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button link',
      description: 'Optional — where should the button go? e.g. https://example.com or /contact',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),

    defineField({
      name: 'pinned',
      title: 'Pin to top?',
      description: 'Pinned announcements always show first. Use this for urgent notices.',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'published',
      title: 'Show on website?',
      description: 'Turn this on when you are ready for it to appear on the site.',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title:     'title',
      date:      'date',
      category:  'category',
      published: 'published',
      pinned:    'pinned',
    },
    prepare({ title, date, category, published, pinned }) {
      const status = [
        !published && 'Draft',
        pinned     && 'Pinned',
      ].filter(Boolean).join(' · ')

      return {
        title:    title ?? 'Untitled',
        subtitle: [category, date, status].filter(Boolean).join(' · '),
      }
    },
  },

  orderings: [
    {
      title: 'Pinned first, then newest',
      name:  'pinnedThenNewest',
      by: [
        { field: 'pinned', direction: 'desc' },
        { field: 'date',   direction: 'desc' },
      ],
    },
    {
      title: 'Newest first',
      name:  'newest',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})