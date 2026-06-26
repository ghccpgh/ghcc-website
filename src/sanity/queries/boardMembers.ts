import { groq } from "next-sanity";

export const boardMembersQuery = groq`
  *[_type == "boardMember"] | order(sortOrder asc) {
    _id,
    name,
    role,
    bio,
    image
  }
`;
