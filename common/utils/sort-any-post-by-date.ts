import type { AnyPost } from "../shapes/posts";
import { getDateFromAnyPost } from "./get-date-from-any-post";
import { sortByDateAscending } from "./sort-by-date-ascending";
import { A } from "@mobily/ts-belt";

export const sortAnyPostByDate = (posts: AnyPost[]) =>
  A.sort(posts, (current, next) =>
    sortByDateAscending(getDateFromAnyPost(current), getDateFromAnyPost(next))
  );
