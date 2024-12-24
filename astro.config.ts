import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      CLOUDINARY_URL: envField.string({ context: "server", access: "secret" }),
    },
  },
});
