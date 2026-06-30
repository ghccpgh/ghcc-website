import { defineField, defineType } from "sanity";

export const partner = defineType({
    name: "partner",
    title: "Partner",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "image",
            title: "Logo / Picture",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "partnerType",
            title: "Partner Type",
            type: "string",
            options: {
                list: [
                    { title: "Community", value: "community" },
                    { title: "Non-Community", value: "nonCommunity" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "partnerType",
            media: "image",
        },
    },
});
