import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://xiwcx.github.io",

  env: {
    schema: {
      CLOUDINARY_URL: envField.string({ context: "server", access: "secret" }),
    },
  },

  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },

  integrations: [mdx()],
});
