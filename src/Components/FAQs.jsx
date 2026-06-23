"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What pharmaceutical products do you manufacture?",
    answer:
      "We manufacture tablets, capsules, injectables, liquid orals, eye drops, veterinary products, medical devices, and specialty formulations.",
  },
  {
    question: "Do you provide contract manufacturing services?",
    answer:
      "Yes, we offer end-to-end contract manufacturing solutions including formulation support, production, packaging, and regulatory-focused operations.",
  },
  {
    question: "Do you support private labeling and custom packaging?",
    answer:
      "Yes, we provide private label manufacturing, customized branding, packaging design support, and market-ready packaging solutions.",
  },
  {
    question: "Do you offer export services?",
    answer:
      "Yes, we support domestic and international pharmaceutical exports with documentation assistance, compliance support, and logistics coordination.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Our quality systems include dedicated QA/QC laboratories, batch validation, analytical testing, and documentation-driven manufacturing processes.",
  },
  {
    question: "Can you handle flexible batch sizes?",
    answer:
      "Yes, our scalable production infrastructure allows us to support both small and large batch manufacturing requirements.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState(0);

  return (
    <section id="faqs" className="relative overflow-hidden bg-white py-12 pb-20">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  FAQs
                </span>
              </div>

              <h2 className="mt-4 text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
                Frequently Asked
                <br />
                <span className="text-[var(--primary)]">
                Questions.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-slate-600 leading-relaxed">
                Find answers to common questions about our manufacturing
                capabilities, quality systems, certifications, and export
                solutions.
              </p>
            </div>

            {/* Added Bottom Content */}
            <div className="mt-10 rounded-[24px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Quick Highlights
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--primary)]/40 pb-4">
                  <span className="text-sm font-medium text-slate-600">
                    Dosage Forms
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    Multiple Categories
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[var(--primary)]/40 pb-4">
                  <span className="text-sm font-medium text-slate-600">
                    Quality Systems
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    QA / QC Integrated
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Export Support
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    Global Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="divide-y divide-[var(--primary)]/40 rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 overflow-hidden">
            {faqs.map((faq, index) => {
              const isActive = active === index;

              return (
                <div key={index}>
                  <button
                    onClick={() =>
                      setActive(isActive ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200">
                      {isActive ? (
                        <Minus
                          size={18}
                          className="text-[var(--primary)]"
                        />
                      ) : (
                        <Plus
                          size={18}
                          className="text-[var(--primary)]"
                        />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}