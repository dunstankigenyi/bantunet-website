import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    siteContent.home.seo.path,
    siteContent.about.seo.path,
    siteContent.howItWorks.seo.path,
    siteContent.hosts.seo.path,
    siteContent.download.seo.path,
    siteContent.download.iosSeo.path,
    siteContent.support.seo.path,
    siteContent.privacy.seo.path,
    siteContent.deleteAccount.seo.path
  ];

  return paths.map((path) => ({
    url: new URL(path, siteContent.site.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8
  }));
}
