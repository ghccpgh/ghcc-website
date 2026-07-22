import { defineField, defineType } from "sanity";

export const boardMember = defineType({
  name: "boardMember",
  title: "Board Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the board member's full name.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Role / Position",
      type: "string",
      description:
        "Enter the board member's title or position within the organization.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "boardGroup",
      title: "Board Group",
      type: "string",
      description:
        "Choose whether this person is part of the Executive Committee or a Committee Chair.",
      options: {
        list: [
          { title: "Executive Committee", value: "executive" },
          { title: "Committee Chair", value: "chair" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "email",
      description:
        "Enter the board member's email address. This can be displayed on their profile page if desired.",
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description:
        "Enter a short sentence, quote, or introduction that appears on the board member card. Keep this to one or two sentences.",
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 10,
      description:
        "Write the board member's full biography. This will appear on their individual profile page.",
      validation: (Rule) =>
        Rule.max(300).warning("Keep the biography under 300 words."),
    }),

    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      description: "Upload a professional photo of the board member.",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "slug",
      title: "Page URL",
      type: "slug",
      description:
        "This creates the link to the board member's profile page. Click 'Generate' after entering the person's name.",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sortOrder",
      title: "Display Order",
      type: "number",
      description:
        "Choose the order this board member appears on the Board page. Lower numbers appear first.",
      initialValue: 0,
    }),
  ],
});