import { groq } from "next-sanity";

const LEADERSHIP_MEMBER_PROJECTION = `
  _id,
  name,
  "slug": slug.current,
  role,
  "leadershipGroup": leadershipGroup,
  email,
  description,
  bio,
  sortOrder,
  image
`;

export const leadershipMembersQuery = groq`
  *[_type in ["leadershipMember"]]
  | order(sortOrder asc) {
    ${LEADERSHIP_MEMBER_PROJECTION}
  }
`;

export const leadershipMemberQuery = groq`
  *[
    _type in ["leadershipMember"] &&
    slug.current == $slug
  ][0] {
    ${LEADERSHIP_MEMBER_PROJECTION}
  }
`;

export const getAllLeadershipMemberSlugsQuery = groq`
  *[
    _type in ["leadershipMember"] &&
    defined(slug.current)
  ] {
    "slug": slug.current
  }
`;
