import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  redirects: {
    "/services": "/#services",
  },
  // integrations: [react(), markdoc(), keystatic()],
  output: "hybrid",
});
