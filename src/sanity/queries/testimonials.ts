import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const testimonialsQuery = groq`
  *[_type == "testimonial" && featured == true]
  | order(sortOrder asc)[0...10] {
    _id,
    name,
    role,
    quote,
    image
  }
`;

