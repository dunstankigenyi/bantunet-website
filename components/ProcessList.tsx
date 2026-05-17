import type { IconName } from "@/content/siteContent";
import { Icon } from "@/components/Icon";

type PlainStep = {
  title: string;
  body: string;
};

type IconStep = PlainStep & {
  icon?: IconName;
};

type ProcessListProps = {
  steps: readonly IconStep[];
  variant?: "cards" | "timeline";
};

export function ProcessList({ steps, variant = "cards" }: ProcessListProps) {
  if (variant === "timeline") {
    return (
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-bantunet-navy text-sm font-semibold text-white">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-base font-semibold text-bantunet-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-bantunet-green/10 text-bantunet-green">
              {step.icon ? <Icon name={step.icon} className="h-5 w-5" /> : String(index + 1).padStart(2, "0")}
            </div>
            <span className="text-xs font-semibold uppercase text-slate-400">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-bantunet-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
