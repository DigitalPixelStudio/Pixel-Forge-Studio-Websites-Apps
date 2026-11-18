import type { MetadataRoute } from "next";
import { seoConfig } from "@/businessConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
