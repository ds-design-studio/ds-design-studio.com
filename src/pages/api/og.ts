import { ImageResponse } from "@vercel/og";
// import type { APIRoute } from "astro";

// export const prerender = false;

// export const config = {
//   runtime: "edge",
// };

export async function GET({ request }: { request: Request }) {
  const defaultTitle = "DS Design Studio";
  const defaultSubtitle =
    "DS Design is the independent studio of web designer and developer Daniel Saunders.";

  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const hasSubtitle = searchParams.has("subtitle");
    const title = hasTitle ? searchParams.get("title") : defaultTitle;
    const subtitle = hasSubtitle
      ? searchParams.get("subtitle")
      : defaultSubtitle;

    const headerFontData = await fetch(
      "https://ds-design-studio.com/fonts/Body-Grotesque-Fit-Extrabold.ttf"
    ).then((res) => res.arrayBuffer());
    const bodyFontData = await fetch(
      "https://ds-design-studio.com/fonts/Body-Text-Fit-Regular.ttf"
    ).then((res) => res.arrayBuffer());
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
              src: "https://ds-design-studio.com/svg/shape-pattern-1.svg",
              width: 300,
              height: 630,
              style: {
                position: "absolute",
                // zIndex: 0,
                top: "8rem",
                right: "-12rem",
                objectFit: "contain",
                width: "45%",
                opacity: "0.75",
                transform: "scale(1.4)",
                // height: "100%",
              },
            },
          },
          {
            type: "img",
            props: {
              src: "https://ds-design-studio.com/svg/web-logo.svg",
              width: 60,
              height: 60,
              style: {
                position: "absolute",
                top: "3rem",
                // zIndex: "5", zIndex doesn't work, auto converts to px
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: "56px",
                fontFamily: "Body Grotesque Fit",
                position: "relative",
              },
              children: title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: "24px",
                lineHeight: 1.4,
                maxWidth: "60%",
                marginTop: "2rem",
                fontFamily: "Body Text Fit",
                position: "relative",
              },
              children: subtitle,
            },
          },
        ],
      },
    };

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
        {
          name: "Body Text Fit",
          data: bodyFontData,
          style: "normal",
          weight: 400,
        },
      ],
    });
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response("Failed to generate the OG image", {
      status: 500,
    });
  }
}
