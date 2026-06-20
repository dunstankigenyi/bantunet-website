import type { Metadata } from "next";
import { AppDownload } from "@/components/AppDownload";
import { Container } from "@/components/Container";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.download.seo);

export default function DownloadPage() {
  const { download } = siteContent;

  return (
    <>
      <PageHero {...download.hero} />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow={download.features.eyebrow}
              title={download.features.title}
              body={download.features.body}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {download.features.cards.map((card) => (
                <IconCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AppDownload heading={download.app.heading} subheading={download.app.subheading} />
    </>
  );
}
