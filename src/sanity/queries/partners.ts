import { groq } from "next-sanity";

export const communityPartnersQuery = groq`
  *[_type == "partner" && partnerType == "community"] | order(order asc, name asc) {
    _id,
    name,
    description,
    image
  }
`;

export const nonCommunityPartnersQuery = groq`
  *[_type == "partner" && partnerType == "nonCommunity"] | order(order asc, name asc) {
    _id,
    name,
    description,
    image
  }
`;
