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
            name: "role",
            title: "Role / Position",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "image",
            title: "Photo",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: "sortOrder",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
});
