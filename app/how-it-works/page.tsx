import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { ProcessList } from "@/components/ProcessList";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.howItWorks.seo);

export default function HowItWorksPage() {
  const { howItWorks } = siteContent;

  return (
    <>
      <PageHero {...howItWorks.hero} />
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={howItWorks.userFlow.eyebrow} title={howItWorks.userFlow.title} />
          <div className="mt-12">
            <ProcessList steps={howItWorks.userFlow.steps} />
          </div>
        </Container>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={howItWorks.hostFlow.eyebrow} title={howItWorks.hostFlow.title} />
          <div className="mt-12">
            <ProcessList steps={howItWorks.hostFlow.steps} />
          </div>
        </Container>
      </section>
      <CtaSection cta={howItWorks.cta} />
    </>
  );
}
