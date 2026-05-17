import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata(seo: PageSeo): Metadata {
  const url = new URL(seo.path, siteContent.site.url).toString();

  return {
    metadataBase: new URL(siteContent.site.url),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteContent.site.name,
      locale: siteContent.site.locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description
    },
    icons: {
      icon: "/favicon.svg"
    }
  };
}
