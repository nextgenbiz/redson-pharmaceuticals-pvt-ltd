import { ArrowRight, ShieldCheck, Globe, Factory } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Quality Focused",
  },
  {
    icon: Factory,
    label: "Manufacturing Expertise",
  },
  {
    icon: Globe,
    label: "Export Support",
  },
];

export default function CTA() {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[40px] bg-slate-950 px-8 py-14 text-center text-white md:px-12 md:py-16">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[var(--primary)]/15 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />

        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Let's Work Together
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-[64px]">
            Looking for a Reliable
            <br />
            Pharmaceutical Manufacturing Partner?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            Partner with REDSON Pharmaceuticals for quality-driven
            manufacturing, private labeling, packaging solutions,
            regulatory support, and scalable production capabilities
            designed for growing healthcare brands.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90">
              Request Manufacturing Quote

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Our Team
            </button>
          </div>

          {/* Trust Row */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)]/10">
                    <Icon
                      size={16}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <span className="text-sm font-medium text-slate-300">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}









// export default function CTA() {
//     return (
//       <section className="px-6 py-20 lg:px-10">
//         <div className="mx-auto max-w-[1440px] rounded-[48px] bg-slate-950 px-12 py-20 text-center text-white">
//           <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
//             Looking for a Reliable
//             <br />
//             Pharmaceutical Manufacturing Partner?
//           </h2>
  
//           <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
//             Let's build healthcare solutions together through quality,
//             innovation, and scalable manufacturing.
//           </p>
  
//           <button className="mt-10 rounded-full bg-purple-600 px-8 py-5 font-semibold text-white hover:bg-purple-500">
//             Request Manufacturing Quote
//           </button>
//         </div>
//       </section>
//     );
//   }