import Link from "next/link";
import type { SiteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";

type SiteFooterProps = {
  footer: SiteContent["footer"];
  nav: SiteContent["nav"];
};

export function SiteFooter({ footer, nav }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-semibold">{footer.brand}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">{footer.tagline}</p>
            <a className="mt-5 inline-flex text-sm font-semibold text-bantunet-mint hover:text-white" href={`mailto:${footer.email}`}>
              {footer.emailLabel}
            </a>
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
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          {footer.copyrightLabel} {year} {footer.brand}. {footer.rightsText}
        </div>
      </Container>
    </footer>
  );
}
