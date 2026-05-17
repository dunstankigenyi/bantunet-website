import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { FaqList } from "@/components/FaqList";
import { HeroNetworkVisual } from "@/components/HeroNetworkVisual";
import { IconCard } from "@/components/IconCard";
import { ProcessList } from "@/components/ProcessList";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/siteContent";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(siteContent.home.seo);

export default function HomePage() {
  const { home, faq } = siteContent;

  return (
    <>
      <section className="relative overflow-hidden bg-bantunet-navy text-white">
        <div className="absolute inset-0 bg-[url('/bantunet-map-visual.svg')] bg-cover bg-center opacity-28" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,58,0.98),rgba(7,26,58,0.84)_46%,rgba(7,26,58,0.58))]" />
        <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase text-bantunet-mint">{home.hero.eyebrow}</p>
            <h1 className="text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">{home.hero.title}</h1>
            <p className="mt-5 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {home.hero.headline}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-200 sm:text-lg">
              {home.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={home.hero.primaryButton.href}
                className="inline-flex items-center justify-center rounded-lg bg-bantunet-green px-5 py-3 text-sm font-semibold text-bantunet-navy shadow-glow transition hover:bg-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
              >
                {home.hero.primaryButton.label}
              </Link>
              <Link
                href={home.hero.secondaryButton.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-bantunet-green hover:text-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
              >
                {home.hero.secondaryButton.label}
              </Link>
            </div>
          </div>
          <HeroNetworkVisual visual={home.hero.visual} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow={home.what.eyebrow} title={home.what.title} body={home.what.body} />
            <div className="grid gap-4 sm:grid-cols-3">
              {home.what.cards.map((card) => (
                <IconCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={home.howItWorksPreview.eyebrow}
              title={home.howItWorksPreview.title}
              body={home.howItWorksPreview.body}
            />
            <Link className="text-sm font-semibold text-bantunet-blue hover:text-bantunet-green" href={home.howItWorksPreview.link.href}>
              {home.howItWorksPreview.link.label}
            </Link>
          </div>
          <ProcessList steps={home.howItWorksPreview.steps} variant="timeline" />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={home.userBenefits.eyebrow} title={home.userBenefits.title} align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {home.userBenefits.cards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bantunet-mist py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={home.hostBenefits.eyebrow} title={home.hostBenefits.title} />
            <Link className="text-sm font-semibold text-bantunet-blue hover:text-bantunet-green" href={home.hostBenefits.link.href}>
              {home.hostBenefits.link.label}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {home.hostBenefits.cards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading eyebrow={home.countries.eyebrow} title={home.countries.title} body={home.countries.body} />
            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {home.countries.countries.map((country) => (
                  <div key={country} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-bantunet-ink">
                    {country}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">{home.countries.note}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading eyebrow={home.payments.eyebrow} title={home.payments.title} body={home.payments.body} />
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="grid gap-4">
                {home.payments.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bantunet-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={home.safety.eyebrow} title={home.safety.title} body={home.safety.body} align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {home.safety.cards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection cta={home.cta} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={home.faqPreview.eyebrow} title={home.faqPreview.title} body={home.faqPreview.body} />
            <Link className="text-sm font-semibold text-bantunet-blue hover:text-bantunet-green" href={home.faqPreview.link.href}>
              {home.faqPreview.link.label}
            </Link>
          </div>
          <FaqList items={faq.slice(0, 4)} />
        </Container>
      </section>
    </>
  );
}
