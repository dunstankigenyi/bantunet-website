import Link from "next/link";
import { Apple, Play, Smartphone } from "lucide-react";
import { Container } from "@/components/Container";
import { siteContent } from "@/content/siteContent";

export const STORE_LINKS = {
  android: "https://play.google.com/store/apps/details?id=com.bantunet.app",
  ios: "https://apps.apple.com/us/app/bantunet/id6769730191"
} as const;

type BadgeProps = {
  className?: string;
};

export function GooglePlayBadge({ className = "" }: BadgeProps) {
  const { androidLabel, androidName, androidPrefix } = siteContent.download.app;

  return (
    <Link
      href={STORE_LINKS.android}
      aria-label={androidLabel}
      className={`inline-flex min-h-14 items-center gap-3 rounded-lg border border-slate-900 bg-slate-950 px-4 py-2.5 text-white shadow-card transition hover:-translate-y-0.5 hover:bg-bantunet-ink focus:outline-none focus:ring-2 focus:ring-bantunet-green focus:ring-offset-2 ${className}`}
    >
      <Play className="h-6 w-6 fill-current" aria-hidden="true" />
      <span className="grid text-left leading-none">
        <span className="text-[10px] font-semibold uppercase text-slate-300">{androidPrefix}</span>
        <span className="text-base font-bold">{androidName}</span>
      </span>
    </Link>
  );
}

export function AppStoreBadge({ className = "" }: BadgeProps) {
  const { iosLabel, iosName, iosPrefix } = siteContent.download.app;

  return (
    <Link
      href={STORE_LINKS.ios}
      aria-label={iosLabel}
      className={`inline-flex min-h-14 items-center gap-3 rounded-lg border border-slate-900 bg-slate-950 px-4 py-2.5 text-white shadow-card transition hover:-translate-y-0.5 hover:bg-bantunet-ink focus:outline-none focus:ring-2 focus:ring-bantunet-green focus:ring-offset-2 ${className}`}
    >
      <Apple className="h-6 w-6 fill-current" aria-hidden="true" />
      <span className="grid text-left leading-none">
        <span className="text-[10px] font-semibold uppercase text-slate-300">{iosPrefix}</span>
        <span className="text-base font-bold">{iosName}</span>
      </span>
    </Link>
  );
}

type AppDownloadProps = {
  heading?: string;
  subheading?: string;
  variant?: "section" | "banner" | "inline";
};

export function AppDownload({
  heading = siteContent.download.app.heading,
  subheading = siteContent.download.app.subheading,
  variant = "section"
}: AppDownloadProps) {
  if (variant === "inline") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <GooglePlayBadge />
        <AppStoreBadge />
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-xl font-bold">{heading}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{subheading}</p>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:flex-row">
          <GooglePlayBadge className="border-white/10" />
          <AppStoreBadge className="border-white/10" />
        </div>
      </div>
    );
  }

  return (
    <section className="bg-bantunet-mist py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-5">
            <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-lg bg-bantunet-green/10 text-bantunet-green ring-1 ring-bantunet-green/15 sm:grid">
              <Smartphone className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-bantunet-ink sm:text-4xl">{heading}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{subheading}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>
        </div>
      </Container>
    </section>
  );
}
