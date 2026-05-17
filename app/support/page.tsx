import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.support.seo);

export default function SupportPage() {
  const { support, faq } = siteContent;

  return (
    <>
      <PageHero {...support.hero} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-bantunet-ink">{support.contact.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{support.contact.body}</p>
              <a
                href={`mailto:${support.contact.email}`}
                className="mt-5 inline-flex rounded-lg bg-bantunet-green px-5 py-3 text-sm font-semibold text-bantunet-navy transition hover:bg-bantunet-mint"
              >
                {support.contact.linkLabel}
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-bantunet-ink">{support.links.title}</h2>
              <div className="mt-5 grid gap-3">
                {support.links.items.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-bantunet-blue hover:border-bantunet-green hover:text-bantunet-green">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={support.helpTopics.eyebrow} title={support.helpTopics.title} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {support.helpTopics.topics.map((topic) => (
              <IconCard key={topic.title} {...topic} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={support.faq.eyebrow} title={support.faq.title} />
          <div className="mt-10">
            <FaqList items={faq} />
          </div>
        </Container>
      </section>
    </>
  );
}
