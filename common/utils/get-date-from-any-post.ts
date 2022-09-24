import { parseISO } from "date-fns";
import { AnyPost, isAstroPost } from "../shapes/posts";

export const getDateFromAnyPost = (p: AnyPost) =>
  parseISO(isAstroPost(p) ? p.frontmatter.date : p.date);
