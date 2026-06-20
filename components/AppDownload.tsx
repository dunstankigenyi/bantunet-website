import Link from "next/link";
import Image from "next/image";
import { Apple, Play } from "lucide-react";
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
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-slate-900 bg-slate-950 px-4 py-2.5 text-white shadow-card transition hover:-translate-y-0.5 hover:bg-bantunet-ink focus:outline-none focus:ring-2 focus:ring-bantunet-green focus:ring-offset-2 ${className}`}
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
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-slate-900 bg-slate-950 px-4 py-2.5 text-white shadow-card transition hover:-translate-y-0.5 hover:bg-bantunet-ink focus:outline-none focus:ring-2 focus:ring-bantunet-green focus:ring-offset-2 ${className}`}
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
  const { appIcon } = siteContent.site;
  const { choiceBody, choiceLabel } = siteContent.download.app;

  if (variant === "inline") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <GooglePlayBadge className="w-full" />
        <AppStoreBadge className="w-full" />
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white shadow-soft sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-center gap-4">
          <Image
            src={appIcon.path}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10"
          />
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{subheading}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:mt-0">
          <GooglePlayBadge className="w-full border-white/10" />
          <AppStoreBadge className="w-full border-white/10" />
        </div>
      </div>
    );
  }

  return (
    <section className="bg-bantunet-mist py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-bantunet-navy p-6 text-white sm:p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <Image
                  src={appIcon.path}
                  alt={appIcon.alt}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-lg object-cover ring-1 ring-white/10"
                />
                <div>
                  <p className="text-xs font-bold uppercase text-bantunet-green">{choiceLabel}</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{heading}</h2>
                </div>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{subheading}</p>
            </div>
            <div className="grid content-center gap-5 p-6 sm:p-8 lg:p-10">
              <div>
                <p className="text-sm font-bold uppercase text-bantunet-blue">{choiceLabel}</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{choiceBody}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <GooglePlayBadge className="w-full" />
                <AppStoreBadge className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
