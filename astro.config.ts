import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://xiwcx.github.io",
  vite: { ssr: { noExternal: ["@mobily/ts-belt"] } },
});
