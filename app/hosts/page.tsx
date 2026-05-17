import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.hosts.seo);

export default function HostsPage() {
  const { hosts } = siteContent;

  return (
    <>
      <PageHero {...hosts.hero} />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={hosts.overview.eyebrow} title={hosts.overview.title} body={hosts.overview.body} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hosts.sections.map((section) => (
              <IconCard key={section.title} {...section} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-bantunet-ink sm:text-4xl">
              {hosts.packages.title}
            </h2>
            <ul className="grid gap-4">
              {hosts.packages.points.map((point) => (
                <li key={point} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CtaSection cta={hosts.cta} />
    </>
  );
}
