type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-bantunet-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-bantunet-ink sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{body}</p> : null}
    </div>
  );
}
