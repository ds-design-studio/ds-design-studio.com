import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const config = {
  runtime: "edge",
};

export async function GET() {
  // const fontData = await fetch(
  //   "https://ds-design-studio.com/fonts/Body-Grotesque-Fit-Extrabold.ttf"
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
            children: "My title here",
          },
        },
      ],
    },
  };
  // return new Response("hello world");
  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    // fonts: [
    //   {
    //     name: "Body Grotesque Fit",
    //     data: fontData,
    //     style: "normal",
    //     weight: 800,
    //   },
    // ],
  });
}
