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
      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-bantunet-green/25 to-transparent lg:block"
          aria-hidden="true"
        />
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="group relative rounded-lg border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-bantunet-green/40 hover:shadow-soft"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-bantunet-navy text-sm font-bold text-white ring-4 ring-bantunet-navy/10 transition duration-300 group-hover:bg-bantunet-green group-hover:text-bantunet-navy group-hover:ring-bantunet-green/20">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-base font-bold text-bantunet-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="group rounded-lg border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-bantunet-green/40 hover:shadow-soft"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-bantunet-green/10 text-bantunet-green ring-1 ring-bantunet-green/15 transition duration-300 group-hover:bg-bantunet-green/15">
              {step.icon ? <Icon name={step.icon} className="h-5 w-5" /> : String(index + 1).padStart(2, "0")}
            </div>
            <span className="text-xs font-bold uppercase text-slate-400">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-base font-bold text-bantunet-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
