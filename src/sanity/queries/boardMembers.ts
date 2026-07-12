import { groq } from "next-sanity";


const BOARD_MEMBER_PROJECTION = `
  _id,
  name,
  "slug": slug.current,
  role,
  boardGroup,
  excerpt,
  bio,
  sortOrder,
  image
`;

export const boardMembersQuery = groq`
  *[_type == "boardMember"]
  | order(sortOrder asc) {
    ${BOARD_MEMBER_PROJECTION}
  }
`;

export const boardMemberQuery = groq`
  *[
    _type == "boardMember" &&
    slug.current == $slug
  ][0] {
    ${BOARD_MEMBER_PROJECTION}
  }
`;

export const getAllBoardMemberSlugsQuery = groq`
  *[
    _type == "boardMember" &&
    defined(slug.current)
  ] {
    "slug": slug.current
  }
`;