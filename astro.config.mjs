import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://ds-design-studio.com",
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
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
  integrations: [mdx(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
});
