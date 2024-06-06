import type { ImageMetadata } from "astro";

export type PageMetadata = {
  seo?: {
    title?: string;
    description?: string;
  };
  openGraph?: {
    title?: string;
    image?: string | ImageMetadata | Promise<{ default: ImageMetadata }>;
    imageAlt?: string;
    description?: string;
  };
};
