import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ds-design-studio.vercel.app",
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
  redirects: {
    "/services": "/#services",
    "/our-approach": "/process",
    "/site-benefits": "/services/frontend-development",
    "/about-us": "/about",
  },
  // output: "hybrid",
  integrations: [mdx(), sitemap()],
});
