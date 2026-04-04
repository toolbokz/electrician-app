"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

export function FAQItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open}
            >
                <span className="text-base font-medium text-white">{question}</span>
                <ChevronDownIcon
                    size={18}
                    className={`shrink-0 text-white/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-white/60">{answer}</p>
                </div>
            </div>
        </div>
    );
}
