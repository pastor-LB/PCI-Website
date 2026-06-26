"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-brand-gray/20">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="py-4">
            <button
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between text-left font-semibold text-brand-charcoal"
            >
              {item.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {open ? <p className="mt-2 text-sm text-brand-gray">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
