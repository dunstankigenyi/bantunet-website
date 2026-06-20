import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AppDownload } from "@/components/AppDownload";
import type { SiteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";

type SiteFooterProps = {
  footer: SiteContent["footer"];
  nav: SiteContent["nav"];
};

export function SiteFooter({ footer, nav }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="border-b border-white/10 py-10">
          <div className="grid gap-6 rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">{footer.cta.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{footer.cta.body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href={footer.cta.primaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-bantunet-green px-5 py-3 text-sm font-bold text-bantunet-navy transition hover:bg-bantunet-mint"
              >
                {footer.cta.primaryButton.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={footer.cta.secondaryButton.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-bantunet-green hover:text-bantunet-mint"
              >
                {footer.cta.secondaryButton.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="text-xl font-bold">{footer.brand}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">{footer.tagline}</p>
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-bantunet-mint hover:text-white" href={`mailto:${footer.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {footer.emailLabel}
            </a>
            <div className="mt-6">
              <AppDownload variant="inline" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-slate-400">{footer.linksTitle}</p>
            <div className="mt-4 grid gap-3">
              {nav.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-slate-400">{footer.countriesTitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {footer.countries.map((country) => (
                <span key={country} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-slate-400">{footer.legalTitle}</p>
            <div className="mt-4 grid gap-3">
              <Link href="/privacy" className="text-sm text-slate-300 hover:text-white">
                {footer.privacyLabel}
              </Link>
              <Link href="/delete-account" className="text-sm text-slate-300 hover:text-white">
                {footer.deleteAccountLabel}
              </Link>
              <p className="text-sm text-slate-400">{footer.termsPlaceholder}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-sm text-slate-400">
          {footer.copyrightLabel} {year} {footer.brand}. {footer.rightsText}
        </div>
      </Container>
    </footer>
  );
}
