import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  // redirects: {
  //   "/services": "/#services",
  // },
  // integrations: [react(), markdoc(), keystatic()],
  // output: "hybrid",
  integrations: [mdx()],
});
