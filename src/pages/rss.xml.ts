import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("posts");

  if (!site) {
    return new Response("Could not generate RSS feed", {
      status: 500,
    });
  }

  return rss({
    title: "Welch Canavan",
    description: "Posts from the personal website of Welch Canavan",
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/posts/${post.data.slug}/`,
    })),
  });
};
