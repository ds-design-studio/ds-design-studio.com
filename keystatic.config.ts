// import { config, fields, collection } from "@keystatic/core";

// export default config({
//   storage: {
//     kind: "local",
//   },
//   collections: {
//     // projects: collection({
//     //   label: "Projects",
//     //   slugField: "title",
//     //   path: "src/content/projects/*",
//     //   format: { contentField: "content" },
//     //   schema: {
//     //     title: fields.slug({ name: { label: "Title" } }),
//     //     summary: fields.text({ label: "Summary", multiline: true }),
//     //     client: fields.text({ label: "Client" }),
//     //     type: fields.text({ label: "Type" }),
//     //     featuredImage: fields.object({
//     //       src: fields.image({ label: "Featured Image" }),
//     //       alt: fields.text({ label: "Image Alt" }),
//     //     }),
//     //     scope: fields.array(fields.text({ label: "Scope" })),
//     //     url: fields.url({ label: "URL" }),
//     //     content: fields.document({
//     //       label: "Content",
//     //       formatting: true,
//     //       dividers: true,
//     //       links: true,
//     //       images: true,
//     //     }),
//     //   },
//     // }),
//     posts: collection({
//       label: "Posts",
//       slugField: "title",
//       path: "src/content/posts/*",
//       format: { contentField: "content" },
//       schema: {
//         title: fields.slug({ name: { label: "Title" } }),
//         summary: fields.text({ label: "Summary", multiline: true }),
//         category: fields.text({ label: "Type" }),
//         featuredImage: fields.object({
//           src: fields.image({ label: "Featured Image" }),
//           alt: fields.text({ label: "Image Alt" }),
//         }),
//         content: fields.document({
//           label: "Content",
//           formatting: true,
//           dividers: true,
//           links: true,
//           images: true,
//         }),
//       },
//     }),
//   },
// });
