import type { IconName } from "@/content/siteContent";
import { Icon } from "@/components/Icon";

type IconCardProps = {
  icon: IconName;
  title: string;
  body: string;
  variant?: "default" | "dark";
};

export function IconCard({ icon, title, body, variant = "default" }: IconCardProps) {
  if (variant === "dark") {
    return (
      <article className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-bantunet-green/40 hover:bg-white/10">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-bantunet-green/0 to-transparent transition duration-300 group-hover:via-bantunet-green/60" />
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-bantunet-green/15 text-bantunet-green ring-1 ring-bantunet-green/20">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
      </article>
    );
  }

  return (
    <article className="group relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-bantunet-green/40 hover:shadow-soft">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-bantunet-green/0 to-transparent transition duration-300 group-hover:via-bantunet-green/60" />
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-bantunet-green/10 text-bantunet-green ring-1 ring-bantunet-green/15 transition duration-300 group-hover:bg-bantunet-green/15">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-bantunet-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}
