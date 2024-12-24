import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const elsewhereSchema = z.object({
  title: z.string(),
  url: z.string(),
  hero: z.string(),
});

const elsewhere = defineCollection({
  schema: elsewhereSchema,
  loader: glob({ pattern: "**/*.md", base: "./src/content/elsewhere" }),
});

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.coerce.date(),
  hero_cloudinary_id: z.string(),
});

const posts = defineCollection({
  schema: postSchema,
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
});

export const collections = {
  elsewhere,
  posts,
};
