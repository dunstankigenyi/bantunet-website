import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { Container } from "@/components/Container";

type Cta = {
  badge?: string;
  title: string;
  body: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
};

type CtaSectionProps = {
  cta: Cta;
};

export function CtaSection({ cta }: CtaSectionProps) {
  return (
    <section className="hero-mesh relative overflow-hidden py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {cta.badge ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bantunet-green/30 bg-bantunet-green/10 px-4 py-1.5">
              <Smartphone className="h-4 w-4 text-bantunet-green" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase text-bantunet-green">{cta.badge}</span>
            </div>
          ) : null}
          <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">{cta.title}</h2>
          <p className="mt-5 text-pretty text-lg leading-7 text-slate-200">{cta.body}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={cta.primaryButton.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-bantunet-green px-6 py-3.5 text-sm font-bold text-bantunet-navy shadow-glow transition hover:bg-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
            >
              {cta.primaryButton.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={cta.secondaryButton.href}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-bantunet-green hover:text-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
            >
              {cta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
