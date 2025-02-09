import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://welchcanavan.com",

  env: {
    schema: {
      CLOUDINARY_URL: envField.string({ context: "server", access: "secret" }),
    },
  },

  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          headingProperties: {
            className: ["anchor"],
          },
          // properties: {
          //   className: ["anchor-link"],
          // },
        },
      ],
    ],
    shikiConfig: {
      theme: "dracula",
    },
  },

  integrations: [mdx()],
});
