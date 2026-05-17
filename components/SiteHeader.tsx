"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { SiteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";

type SiteHeaderProps = {
  nav: SiteContent["nav"];
};

export function SiteHeader({ nav }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bantunet-navy/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bantunet-navy"
      >
        {nav.skipLink}
      </a>
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link href="/" aria-label={nav.logoLabel} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-bantunet-green text-bantunet-navy">
              <span className="h-4 w-4 rounded-full border-2 border-current shadow-[0_0_0_6px_rgba(7,26,58,0.16)]" />
            </span>
            <span className="text-lg font-semibold">{nav.brand}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-white/10 text-bantunet-mint" : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={nav.cta.href}
              className="rounded-lg bg-bantunet-green px-4 py-2 text-sm font-semibold text-bantunet-navy transition hover:bg-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
            >
              {nav.cta.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? nav.closeLabel : nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <nav className="border-t border-white/10 py-4 lg:hidden">
            <div className="grid gap-1">
              {nav.links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                      active ? "bg-white/10 text-bantunet-mint" : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-bantunet-green px-4 py-3 text-center text-sm font-semibold text-bantunet-navy"
              >
                {nav.cta.label}
              </Link>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
