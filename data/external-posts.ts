import { z } from "zod";

const externalPost = z.object({
  frontmatter: z.undefined(),
  description: z.string().optional(),
  title: z.string(),
  date: z.string(),
  url: z.string(),
});

export type ExternalPost = z.infer<typeof externalPost>;

export const externalPosts: ExternalPost[] = [
  {
    url: "https://shipshape.io/blog/simple-docker-postgresql/",
    title: "The Simplest Possible Docker Setup For Postgresql",
    date: "2020-11-30",
  },
];
