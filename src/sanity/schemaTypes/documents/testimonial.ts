import { defineField, defineType } from "sanity";

export const testimonial = defineType({
    title: "Testimonials",
    name: "testimonial",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "role",
            title: "Role / Organization",
            type: "string",
        }),

        defineField({
            name: "quote",
            title: "Quote",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "image",
            title: "Photo",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
            initialValue: true,
        }),

        defineField({
            name: "sortOrder",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
});