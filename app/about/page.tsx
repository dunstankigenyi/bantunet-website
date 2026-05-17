import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.about.seo);

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <PageHero {...about.hero} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {about.sections.map((section) => (
              <IconCard key={section.title} {...section} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-bantunet-ink sm:text-4xl">
              {about.closing.title}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-8 text-slate-600">{about.closing.body}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
