const process = [
  {
  step: "Research",
  description:
  "Understanding formulation requirements, market needs, and product objectives.",
  },
  {
  step: "Development",
  description:
  "Optimizing formulations and manufacturing processes for quality and scalability.",
  },
  {
  step: "Testing",
  description:
  "Comprehensive quality control and analytical evaluations before production.",
  },
  {
  step: "Production",
  description:
  "Manufacturing under controlled processes with strict quality oversight.",
  },
  {
  step: "Packaging",
  description:
  "Customized packaging and labeling solutions aligned with customer requirements.",
  },
  {
  step: "Distribution",
  description:
  "Supporting domestic and international supply chains with reliable logistics.",
  },
  ];
  
  export default function ManufacturingProcess() {
  return (
  <section className="relative overflow-hidden bg-white py-20 lg:py-24">
    {/* Background Glow */}
    <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
    <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[100px]" />
  
    <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
      {/* Header */}
      <div className="max-w-5xl">
        <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Manufacturing Process
          </span>
        </div>
  
        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
          How We Deliver
          <br />
          Pharmaceutical Excellence.
        </h2>
  
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          A structured manufacturing process focused on quality,
          consistency, regulatory compliance, and customer satisfaction
          from concept to delivery.
        </p>
      </div>
  
      {/* Process Grid */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {process.map((item, index) => (
          <div
            key={item.step}
            className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
              <span className="text-sm font-bold text-[var(--primary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
  
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {item.step}
            </h3>
  
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
  
      {/* Bottom Banner */}
      <div className="mt-16 rounded-[32px] bg-slate-900 p-8 text-white md:p-10">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
            End-to-End Manufacturing
          </p>
  
          <h3 className="mt-3 text-3xl font-bold">
            From Formulation Development To Market Delivery
          </h3>
  
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            Every stage of our process is designed to ensure product
            quality, operational efficiency, regulatory alignment,
            and reliable supply for healthcare brands worldwide.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
  }
  









// const process = [
//     "Research",
//     "Development",
//     "Testing",
//     "Production",
//     "Packaging",
//     "Distribution",
//   ];
  
//   export default function ManufacturingProcess() {
//     return (
//       <section className="bg-white py-32">
//         <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//           <div className="max-w-4xl">
//             <span className="text-sm uppercase tracking-[0.25em] text-purple-700">
//               Process
//             </span>
  
//             <h2 className="mt-6 text-6xl font-bold tracking-tight text-slate-900">
//               How We Deliver
//               Pharmaceutical Excellence.
//             </h2>
//           </div>
  
//           <div className="mt-24 grid gap-8 md:grid-cols-3 xl:grid-cols-6">
//             {process.map((step, index) => (
//               <div
//                 key={step}
//                 className="rounded-[28px] border border-slate-200 p-8"
//               >
//                 <span className="text-sm text-purple-600">
//                   0{index + 1}
//                 </span>
  
//                 <h3 className="mt-4 text-2xl font-bold text-slate-900">
//                   {step}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }