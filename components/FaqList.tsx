"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: readonly FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-6"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${index}`}
          >
            <span className="text-base font-semibold text-bantunet-ink">{item.question}</span>
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition duration-200 ${
                openIndex === index
                  ? "border-bantunet-green bg-bantunet-green/10 text-bantunet-green"
                  : "border-slate-200 text-slate-400"
              }`}
              aria-hidden="true"
            >
              {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </span>
          </button>
          {openIndex === index ? (
            <div id={`faq-panel-${index}`} className="bg-slate-50 px-5 pb-5 pt-1 sm:px-6">
              <p className="max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
