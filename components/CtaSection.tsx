import Link from "next/link";
import { Container } from "@/components/Container";

type Cta = {
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
    <section className="bg-bantunet-navy py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{cta.title}</h2>
            <p className="mt-4 text-pretty text-base leading-7 text-slate-200">{cta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href={cta.primaryButton.href}
              className="inline-flex items-center justify-center rounded-lg bg-bantunet-green px-5 py-3 text-sm font-semibold text-bantunet-navy shadow-glow transition hover:bg-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
            >
              {cta.primaryButton.label}
            </Link>
            <Link
              href={cta.secondaryButton.href}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-bantunet-green hover:text-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
            >
              {cta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
