"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export function AccordionFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full py-5 flex justify-between items-center text-left gap-4"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <span className="text-gray-400 flex-shrink-0 text-xl leading-none">
              {openIndex === index ? "\u2212" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
            }`}
          >
            <div className="text-gray-600 leading-relaxed">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
