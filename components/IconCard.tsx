import type { IconName } from "@/content/siteContent";
import { Icon } from "@/components/Icon";

type IconCardProps = {
  icon: IconName;
  title: string;
  body: string;
};

export function IconCard({ icon, title, body }: IconCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-bantunet-green/50 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-bantunet-green/10 text-bantunet-green">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-bantunet-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}
