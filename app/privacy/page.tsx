import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.privacy.seo);

export default function PrivacyPage() {
  const { privacy } = siteContent;

  return (
    <>
      <PageHero {...privacy.hero} />
      <article className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-bantunet-blue">
              {privacy.updatedLabel}: {privacy.updatedDate}
            </p>
            <p className="mt-5 text-base leading-7 text-slate-700">{privacy.intro}</p>
          </div>

          <div className="mt-8 grid gap-6">
            {privacy.sections.map((section) => (
              <section key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold text-bantunet-ink">{section.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">{section.body}</p>
                {"bullets" in section && section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bantunet-green" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
