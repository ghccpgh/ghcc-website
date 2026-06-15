import { defineType, defineField } from "sanity";

export const post = defineType({
    title: "Blog Post",
    name: "post",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().max(120)
        }),
        defineField({
            name: 'slug',
            title: 'URL slug',
            description: 'The part of the URL that identifies this post. Click "Generate" to auto-create from the title.',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featured',
            title: 'Featured Post',
            description: 'Pin this post to the Featured section at the top of the blog index.',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            description: 'A short summary shown in blog cards (max 200 characters).',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'photo',
            title: 'Cover Photo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    description: 'Describe the image for screen readers.',
                })
            ]
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'date',
            title: 'Publish Date',
            type: 'date',
            validation: (Rule) => Rule.required()
        })
    ],
    // Sort newest first in the Studio list view
    orderings: [
        {
            title: 'Publish Date, Newest First',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'photo',
            featured: 'featured',
        },
        prepare({ title, author, media, featured }) {
            return {
                title: featured ? `⭐ ${title}` : title,
                subtitle: author ? `By ${author}` : '',
                media,
            }
        }
    }
});