import { z } from "zod";
import type { MarkdownInstance } from "astro";
import { G } from "@mobily/ts-belt";

export const postSchema = z.object({
  description: z.string().optional(),
  heroAlt: z.string().optional(),
  title: z.string(),
  date: z.string(),
});

export type Post = z.infer<typeof postSchema>;

export const externalPostSchema = z.object({
  frontmatter: z.undefined(),
  description: z.string().optional(),
  title: z.string(),
  date: z.string(),
  url: z.string(),
});

export type ExternalPost = z.infer<typeof externalPostSchema>;

export type AstroPost = MarkdownInstance<Post>;
export const isAstroPost = (p: AnyPost): p is AstroPost =>
  G.isObject(p.frontmatter);

export type AnyPost = AstroPost | ExternalPost;
