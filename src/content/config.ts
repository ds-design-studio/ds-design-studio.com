import { z, defineCollection, reference } from "astro:content";

const navigation = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    entries: z.array(
      z.object({
        title: z.string(),
        slug: z.string(),
        children: z
          .array(
            z.object({
              title: z.string(),
              slug: z.string(),
              icon: z.string().optional(),
              tagline: z.string().optional(),
            })
          )
          .optional(),
      })
    ),
  }),
});

const features = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tagline: z.string().optional(),
    order: z.number().optional(),
    icon: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tagline: z.string().optional(),
    features: z.array(reference("features")),
    order: z.number(),
    icon: z.string().optional(),
  }),
});

const tools = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().optional(),
      logo: image(),
      order: z.number(),
    }),
});

const websiteTypes = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      featuredImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      client: z.string(),
      type: z.string(),
      scope: z.array(z.string()),
      url: z.string().url(),
    }),
});

export const collections = {
  navigation,
  features,
  services,
  projects,
  tools,
  websiteTypes,
};
