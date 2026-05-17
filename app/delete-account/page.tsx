import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.deleteAccount.seo);

export default function DeleteAccountPage() {
  const { deleteAccount } = siteContent;

  return (
    <>
      <PageHero {...deleteAccount.hero} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-bantunet-ink">{deleteAccount.request.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">{deleteAccount.request.body}</p>
              <ul className="mt-5 grid gap-3">
                {deleteAccount.request.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bantunet-green" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${deleteAccount.email}`}
                className="mt-6 inline-flex rounded-lg bg-bantunet-green px-5 py-3 text-sm font-semibold text-bantunet-navy transition hover:bg-bantunet-mint"
              >
                {deleteAccount.request.linkLabel}
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-bantunet-ink">{deleteAccount.retention.title}</h2>
              <ul className="mt-5 grid gap-3">
                {deleteAccount.retention.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bantunet-green" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <CtaSection cta={deleteAccount.cta} />
    </>
  );
}
