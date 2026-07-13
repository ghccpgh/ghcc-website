import { defineField, defineType } from "sanity";

export const boardMember = defineType({
    name: "boardMember",
    title: "Board Members",
    type: "document",

    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "role",
            title: "Role / Position",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "boardGroup",
            title: "Board Group",
            type: "string",
            options: {
                list: [
                    {
                        title: "Executive Committee",
                        value: "executive",
                    },
                    {
                        title: "Committee Chair",
                        value: "chair",
                    },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "bio",
            title: "Biography",
            type: "text",
            rows: 10,
            validation: (Rule) =>
                Rule.custom((value) => {
                    if (!value) return true;

                    const words = value.trim().split(/\s+/);

                    return (
                        words.length <= 300 ||
                        "Biography cannot exceed 300 words."
                    );
                }),
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
            name: "excerpt",
            title: "Short Description",
            type: "text",
            rows: 3,
            description: "Appears on the board page.",
            validation: (Rule) =>
                Rule.required()
                    .max(180)
                    .error("Summary cannot exceed 180 characters."),
        }),

        defineField({
            name: "sortOrder",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],

    preview: {
        select: {
            title: "name",
            subtitle: "role",
            media: "image",
        },
    },
});