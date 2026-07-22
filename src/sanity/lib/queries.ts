import { defineQuery } from "next-sanity";

export const GET_BLOGS_QUERY = defineQuery(`*[_type == "blog"]{
    _id,
    title,
    photo,
    body,
    date
    }`);