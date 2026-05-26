import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
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
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={hosts.overview.eyebrow} title={hosts.overview.title} body={hosts.overview.body} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hosts.sections.map((section) => (
              <IconCard key={section.title} {...section} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase text-bantunet-green">
                <span className="h-px w-4 bg-bantunet-green" aria-hidden="true" />
                {hosts.packages.eyebrow}
              </p>
              <h2 className="text-balance text-3xl font-bold leading-tight text-bantunet-ink sm:text-4xl">
                {hosts.packages.title}
              </h2>
            </div>
            <ul className="grid gap-3">
              {hosts.packages.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-bantunet-mist p-5 text-sm leading-6 text-slate-700 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bantunet-green" aria-hidden="true" />
                  <span>{point}</span>
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
