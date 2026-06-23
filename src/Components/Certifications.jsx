import {
  BadgeCheck,
  ShieldCheck,
  FileCheck,
  Award,
} from "lucide-react";

const certifications = [
  {
    title: "WHO-GMP Certified",
    description:
      "Manufacturing aligned with Good Manufacturing Practices for quality and safety.",
  },
  {
    title: "ISO Certified",
    description:
      "Structured systems ensuring consistency, documentation, and process excellence.",
  },
  {
    title: "Quality Compliance",
    description:
      "Integrated quality assurance and control protocols across every production stage.",
  },
  {
    title: "Export Documentation Ready",
    description:
      "Complete documentation support for domestic supply and international exports.",
  },
];

const icons = [
  BadgeCheck,
  ShieldCheck,
  FileCheck,
  Award,
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div>
          <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
              Our Certifications
            </span>
          </div>

          <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
            Certified For
            <br />
            <span className="text-[var(--primary)]">
              Quality & Compliance.
            </span>
          </h2>
        </div>

        {/* Trust Wall */}
        <div className="mt-10 sm:mt-12 lg:mt-14 divide-y divide-[var(--primary)]/40 rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-slate-50 shadow-sm">
          {certifications.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="group flex flex-col gap-4 sm:gap-5 px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300 hover:bg-white md:flex-row md:items-center md:justify-between"
              >
                {/* Left */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 transition-all duration-300 group-hover:bg-[var(--primary)]">
                    <Icon
                      size={20}
                      className="text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 sm:leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)] md:shrink-0">
                  Verified
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}