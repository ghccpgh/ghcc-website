import { defineType } from "sanity";

export const blog = defineType({
    title: "Blog",
    name: "blog",
    type: "document",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
             validation: Rule => Rule.required()
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required()
        }
    ]
});