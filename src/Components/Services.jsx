import { ArrowRight } from "lucide-react";

const services = [
{
title: "Contract Manufacturing",
description:
"End-to-end pharmaceutical manufacturing solutions with scalable production capabilities and quality-focused processes.",
},
{
title: "Third Party Manufacturing",
description:
"Reliable manufacturing partnerships designed to support product expansion, market growth, and operational efficiency.",
},
{
title: "Private Label Manufacturing",
description:
"Customized product branding, packaging, and labeling solutions tailored to your business requirements.",
},
{
title: "Custom Packaging",
description:
"Flexible packaging formats, artwork support, and market-ready solutions for domestic and export markets.",
},
];

export default function Services() {
return (
  <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 text-white">
    {/* Background Glow */}
    <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[var(--primary)]/10 blur-[140px]" />
    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/5 blur-[140px]" />

  <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
    {/* Header */}
    <div className="max-w-5xl">
      <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Services
        </span>
      </div>

      <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-[64px]">
        Manufacturing Solutions
        <br />
        Built Around Your Brand.
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
        Flexible pharmaceutical manufacturing services designed to
        support product development, production, branding, packaging,
        and global market expansion.
      </p>
    </div>

    {/* Services List */}
    <div className="mt-16">
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`group border-white/10 transition-all duration-300 hover:border-[var(--primary)]/30 ${
            index !== services.length - 1
              ? "border-b"
              : ""
          }`}
        >
          <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                {service.description}
              </p>
            </div>

            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all group-hover:gap-3">
              Learn More

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
            Partnership Driven Manufacturing
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            Scale Pharmaceutical Products With Confidence
          </h3>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
            From formulation support and manufacturing to packaging
            and export assistance, REDSON Pharmaceuticals helps
            healthcare brands bring products to market efficiently.
          </p>
        </div>

        <button className="rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
          Request Consultation
        </button>
      </div>
    </div>
  </div>
</section>

);
}










// import { ArrowRight } from "lucide-react";

// const services = [
//   "Contract Manufacturing",
//   "Third Party Manufacturing",
//   "Private Label Manufacturing",
//   "Custom Packaging",
// ];

// export default function Services() {
//   return (
//     <section className="bg-slate-950 py-32 text-white">
//       <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//         <span className="text-sm uppercase tracking-[0.25em] text-purple-300">
//           Services
//         </span>

//         <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] md:text-7xl">
//           Manufacturing Solutions
//           <br />
//           Built Around Your Brand.
//         </h2>

//         <div className="mt-20">
//           {services.map((service) => (
//             <div
//               key={service}
//               className="group flex items-center justify-between border-b border-white/10 py-10"
//             >
//               <h3 className="text-3xl font-semibold md:text-5xl">
//                 {service}
//               </h3>

//               <ArrowRight className="transition group-hover:translate-x-2" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }