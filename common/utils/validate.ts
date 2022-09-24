import {
  AstroPost,
  ExternalPost,
  externalPostSchema,
  postSchema,
} from "../shapes/posts";

export const validateAstroPosts = (astroPosts: AstroPost[]) =>
  astroPosts.forEach((astroPost) => postSchema.parse(astroPost.frontmatter));

export const validateExternalPosts = (posts: ExternalPost[]) =>
  posts.forEach((p) => externalPostSchema.parse(p));
