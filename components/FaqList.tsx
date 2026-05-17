type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: readonly FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
      {items.map((item) => (
        <details key={item.question} className="group p-5 open:bg-slate-50 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-bantunet-ink">
            <span>{item.question}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-bantunet-green transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
