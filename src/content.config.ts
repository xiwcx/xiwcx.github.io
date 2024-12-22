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

export const collections = {
  elsewhere,
};
