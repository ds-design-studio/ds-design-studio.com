import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

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
            cssMinify: "esbuild",
        },
    },

    redirects: {
        // "/services": "/#services",
        "/our-approach": "/process",
        "/site-benefits": "/services/frontend-development",
        "/about-us": "/about",
    },

    integrations: [mdx(), sitemap()],
    adapter: cloudflare(),
});
