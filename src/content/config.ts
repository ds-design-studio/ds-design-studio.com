import { z, defineCollection, reference } from "astro:content";

const navigation = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    entries: z.array(
      z.object({
        title: z.string(),
        slug: z.string().optional(),
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
    featuredProject: reference("projects"),
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
      thumbnailImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      galleryImages: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .optional(),
      client: z.string(),
      type: z.string(),
      services: z.array(reference("services")),
      tools: z.array(reference("tools")),
      scope: z.array(z.string()),
      url: z.string().url().optional(),
    }),
});

const supportPlans = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      price: z.object({
        monthly: z.number(),
        annual: z.number(),
      }),
      features: z.array(z.string()),
      order: z.number(),
    }),
});

const testimonials = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      body: z.string(),
      attribution: z.object({
        name: z.string(),
        organization: z.string(),
        logo: image(),
      }),
    }),
});

const projectPhases = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    outcomes: z.array(z.string()),
    order: z.number(),
  }),
});

const faqs = defineCollection({
  type: "data",
  schema: z.object({
    entries: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const principles = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    icon: z.string(),
  }),
});

export const collections = {
  navigation,
  features,
  services,
  projects,
  tools,
  websiteTypes,
  testimonials,
  supportPlans,
  projectPhases,
  faqs,
  principles,
};
