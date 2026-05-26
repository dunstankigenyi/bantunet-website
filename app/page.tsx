import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Download, Globe2, Smartphone, TrendingUp } from "lucide-react";
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
      <section className="hero-mesh relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/bantunet-map-visual.svg')] bg-cover bg-center opacity-[0.07]" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20 lg:py-28">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="min-w-0 max-w-[21.5rem] sm:max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bantunet-green/30 bg-bantunet-green/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-bantunet-green" aria-hidden="true" />
                <span className="text-xs font-bold uppercase text-bantunet-green">{home.hero.eyebrow}</span>
              </div>
              <h1 className="text-5xl font-extrabold leading-none sm:text-6xl lg:text-7xl">
                {home.hero.title}
              </h1>
              <p className="mt-5 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="gradient-text">{home.hero.headline}</span>
              </p>
              <p className="mt-6 max-w-2xl break-words text-pretty text-base leading-7 text-slate-200 sm:text-lg">
                {home.hero.subheadline}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {home.hero.trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-bantunet-green" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3 sm:inline-grid sm:grid-cols-[auto_auto]">
                <Link
                  href={home.hero.primaryButton.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-bantunet-green px-6 py-3.5 text-sm font-bold text-bantunet-navy shadow-glow transition hover:bg-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
                >
                  {home.hero.primaryButton.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={home.hero.secondaryButton.href}
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-bantunet-green hover:text-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
                >
                  {home.hero.secondaryButton.label}
                </Link>
                <Link
                  href={home.hero.tertiaryButton.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-bantunet-mint transition hover:text-white sm:col-span-2 sm:justify-start"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {home.hero.tertiaryButton.label}
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-8 sm:flex sm:flex-wrap sm:gap-6">
                {home.hero.stats.map((stat) => (
                  <div key={stat.label} className="min-w-0">
                    <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-[11px] leading-4 text-slate-300 sm:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 animate-fade-in">
              <HeroNetworkVisual visual={home.hero.visual} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading eyebrow={home.what.eyebrow} title={home.what.title} body={home.what.body} />
            <div className="grid gap-4 sm:grid-cols-3">
              {home.what.cards.map((card) => (
                <IconCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bantunet-mist py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading eyebrow={home.packageModel.eyebrow} title={home.packageModel.title} body={home.packageModel.body} />
            <div className="grid gap-4 md:grid-cols-3">
              {home.packageModel.cards.map((card) => (
                <IconCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={home.howItWorksPreview.eyebrow}
              title={home.howItWorksPreview.title}
              body={home.howItWorksPreview.body}
            />
            <Link className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-bantunet-blue transition hover:text-bantunet-green" href={home.howItWorksPreview.link.href}>
              {home.howItWorksPreview.link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ProcessList steps={home.howItWorksPreview.steps} variant="timeline" />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={home.userBenefits.eyebrow} title={home.userBenefits.title} align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {home.userBenefits.cards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="hero-mesh relative overflow-hidden py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[url('/bantunet-map-visual.svg')] bg-cover bg-center opacity-[0.05]" aria-hidden="true" />
        <Container className="relative">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={home.hostBenefits.eyebrow} title={home.hostBenefits.title} tone="dark" />
            <Link className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-bantunet-mint transition hover:text-white" href={home.hostBenefits.link.href}>
              {home.hostBenefits.link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {home.hostBenefits.cards.map((card) => (
              <IconCard key={card.title} {...card} variant="dark" />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-bantunet-green/20 bg-bantunet-green/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-base font-bold text-white">
                <TrendingUp className="h-4 w-4 text-bantunet-green" aria-hidden="true" />
                {home.hostBenefits.conversion.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{home.hostBenefits.conversion.body}</p>
            </div>
            <Link
              href={home.hostBenefits.conversion.button.href}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-bantunet-green px-5 py-2.5 text-sm font-bold text-bantunet-navy shadow-glow-sm transition hover:bg-bantunet-mint"
            >
              {home.hostBenefits.conversion.button.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading eyebrow={home.countries.eyebrow} title={home.countries.title} body={home.countries.body} />
            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {home.countries.countries.map((country) => (
                  <div key={country} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-bantunet-mist px-4 py-3 shadow-card transition hover:border-bantunet-green/40 hover:bg-white">
                    <Globe2 className="h-4 w-4 shrink-0 text-bantunet-green" aria-hidden="true" />
                    <span className="text-sm font-semibold text-bantunet-ink">{country}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">{home.countries.note}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading eyebrow={home.payments.eyebrow} title={home.payments.title} body={home.payments.body} />
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
              <div className="border-b border-slate-100 bg-bantunet-mist px-6 py-4">
                <p className="text-xs font-bold uppercase text-slate-500">{home.payments.panelLabel}</p>
              </div>
              <ul className="grid divide-y divide-slate-100 px-2">
                {home.payments.points.map((point) => (
                  <li key={point} className="flex gap-3 px-4 py-4 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bantunet-green" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <SectionHeading eyebrow={home.download.eyebrow} title={home.download.title} body={home.download.body} size="large" />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {home.download.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-bantunet-green" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={home.download.primaryButton.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-bantunet-green px-6 py-3.5 text-sm font-bold text-bantunet-navy shadow-glow-sm transition hover:bg-bantunet-mint"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {home.download.primaryButton.label}
                </Link>
                <Link
                  href={home.download.secondaryButton.href}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3.5 text-sm font-bold text-bantunet-blue transition hover:border-bantunet-green hover:text-bantunet-green"
                >
                  {home.download.secondaryButton.label}
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-bantunet-navy p-4 shadow-soft">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-bantunet-green">{home.download.visualLabel}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{home.download.statusLabel}</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-bantunet-green text-bantunet-navy">
                    <Smartphone className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-3">
                  {home.download.checklist.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bantunet-green/15 text-xs font-bold text-bantunet-green">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bantunet-mist py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={home.safety.eyebrow} title={home.safety.title} body={home.safety.body} align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {home.safety.cards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection cta={home.cta} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={home.faqPreview.eyebrow} title={home.faqPreview.title} body={home.faqPreview.body} />
            <Link className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-bantunet-blue transition hover:text-bantunet-green" href={home.faqPreview.link.href}>
              {home.faqPreview.link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <FaqList items={faq.slice(0, 4)} />
        </Container>
      </section>
    </>
  );
}
