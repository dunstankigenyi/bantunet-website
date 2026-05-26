import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata(seo: PageSeo): Metadata {
  const url = new URL(seo.path, siteContent.site.url).toString();
  const image = new URL(siteContent.site.ogImage.path, siteContent.site.url).toString();

  return {
    metadataBase: new URL(siteContent.site.url),
    title: seo.title,
    description: seo.description,
    keywords: [...siteContent.site.keywords],
    authors: [{ name: siteContent.site.author }],
    creator: siteContent.site.author,
    publisher: siteContent.site.author,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteContent.site.name,
      locale: siteContent.site.locale,
      type: "website",
      images: [
        {
          url: image,
          width: siteContent.site.ogImage.width,
          height: siteContent.site.ogImage.height,
          alt: siteContent.site.ogImage.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      site: siteContent.site.twitterSite,
      images: [image]
    },
    icons: {
      icon: "/favicon.svg"
    }
  };
}
