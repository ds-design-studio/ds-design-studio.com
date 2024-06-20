import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

const defaultTitle = "DS Design Studio";
const defaultDescription =
  "DS Design is the independent studio of web designer and developer Daniel Saunders.";

export const prerender = false;

export const config = {
  runtime: "edge",
};

export async function GET({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : defaultTitle;

  const headerFontData = await fetch(
    "https://ds-design-studio.com/fonts/Body-Grotesque-Fit-Extrabold.ttf"
  ).then((res) => res.arrayBuffer());
  // const bodyFontData = await fetch(
  //   "https://ds-design-studio.com/fonts/Body-Text-Fit-Regular.ttf"
  // ).then((res) => res.arrayBuffer());
  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom right, #0a0c10, #303d50)",
        color: "#f5f7f9",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      },
      children: [
        {
          type: "img",
          props: {
            src: "https://ds-design-studio.com/svg/web-logo.svg",
            width: 60,
            height: 60,
            style: {
              position: "absolute",
              top: "3rem",
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              fontSize: "48px",
              fontFamily: "Body Grotesque Fit",
            },
            children: title,
          },
        },
        {
          type: "div",
          props: {
            style: {
              fontSize: "20px",
              maxWidth: "600px",
              marginTop: "2rem",
              // fontFamily: "Body Text Fit",
            },
            children: defaultDescription,
          },
        },
      ],
    },
  };
  // return new Response("hello world");
  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Body Grotesque Fit",
        data: headerFontData,
        style: "normal",
        weight: 800,
      },
      // {
      //   name: "Body Text Fit",
      //   data: bodyFontData,
      //   style: "normal",
      //   weight: 400,
      // },
    ],
  });
}
