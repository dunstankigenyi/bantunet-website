import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { STORE_LINKS } from "@/components/AppDownload";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.download.iosSeo);

export default function DownloadIosPage() {
  redirect(STORE_LINKS.ios);
}
