import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteContent.site.name,
    short_name: siteContent.site.name,
    description: siteContent.home.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#071a3a",
    theme_color: "#22c55e",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
