"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";

type SiteHeaderProps = {
  appIcon: SiteContent["site"]["appIcon"];
  nav: SiteContent["nav"];
};

export function SiteHeader({ appIcon, nav }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 text-white transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-bantunet-navy/95 shadow-lg shadow-slate-950/20 backdrop-blur-md"
          : "bg-bantunet-navy/90 backdrop-blur"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bantunet-navy"
      >
        {nav.skipLink}
      </a>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link href="/" aria-label={nav.logoLabel} className="group flex items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-lg ring-1 ring-white/10 transition duration-200 group-hover:scale-105">
              <Image
                src={appIcon.path}
                alt=""
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="text-base font-bold text-white">{nav.brand}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {nav.links.filter((link) => link.desktop !== false).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-white/10 text-bantunet-mint" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={nav.downloadCta.href}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-bantunet-green/50 hover:bg-white/10 hover:text-bantunet-mint"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {nav.downloadCta.label}
            </Link>
            <Link
              href={nav.hostCta.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-bantunet-mint transition hover:bg-white/10 hover:text-white"
            >
              {nav.hostCta.label}
            </Link>
            <Link
              href={nav.cta.href}
              className="rounded-lg bg-bantunet-green px-4 py-2 text-sm font-semibold text-bantunet-navy shadow-glow-sm transition hover:bg-bantunet-mint focus:outline-none focus:ring-2 focus:ring-bantunet-mint focus:ring-offset-2 focus:ring-offset-bantunet-navy"
            >
              {nav.cta.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? nav.closeLabel : nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition hover:border-white/30 hover:bg-white/10 lg:hidden"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <nav className="border-t border-white/10 pb-4 pt-3 lg:hidden" aria-label="Mobile navigation">
            <div className="grid gap-1">
              {nav.links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                      active ? "bg-white/10 text-bantunet-mint" : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
                <Link
                  href={nav.downloadCta.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {nav.downloadCta.label}
                </Link>
                <Link
                  href={nav.hostCta.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  {nav.hostCta.label}
                </Link>
                <Link
                  href={nav.cta.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-bantunet-green px-4 py-2.5 text-center text-sm font-semibold text-bantunet-navy"
                >
                  {nav.cta.label}
                </Link>
              </div>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
