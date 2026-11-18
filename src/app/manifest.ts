import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Red Apple Mobile Repair",
    short_name: "Red Apple",
    description:
      "Premium Apple repair in Halasuru, Bengaluru. iPhone, iPad, MacBook and Apple Watch repairs with transparent pricing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
