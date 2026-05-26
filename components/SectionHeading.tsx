type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  size = "default",
  tone = "light"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleSize = size === "large" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";
  const titleColor = tone === "dark" ? "text-white" : "text-bantunet-ink";
  const bodyColor = tone === "dark" ? "text-slate-300" : "text-slate-600";
  const eyebrowColor = tone === "dark" ? "text-bantunet-mint" : "text-bantunet-green";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase ${eyebrowColor}`}>
          <span className={`h-px w-4 ${tone === "dark" ? "bg-bantunet-mint" : "bg-bantunet-green"}`} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance ${titleSize} font-bold leading-tight ${titleColor}`}>
        {title}
      </h2>
      {body ? <p className={`mt-4 text-pretty text-base leading-7 sm:text-lg ${bodyColor}`}>{body}</p> : null}
    </div>
  );
}
