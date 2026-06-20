import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { STORE_LINKS } from "@/components/AppDownload";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.download.androidSeo);

export default function DownloadAndroidPage() {
  redirect(STORE_LINKS.android);
}
