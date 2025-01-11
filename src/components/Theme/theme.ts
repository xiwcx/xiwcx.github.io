import { z } from "astro:content";

export const themeSchema = z
  .enum(["system", "light", "dark"])
  .default("system");

export type Theme = z.infer<typeof themeSchema>;
