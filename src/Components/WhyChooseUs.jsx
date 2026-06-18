import {
  Factory,
  ShieldCheck,
  Globe,
  FlaskConical,
  PackageCheck,
  Users,
  } from "lucide-react";
  
  const features = [
  {
  icon: Factory,
  title: "Advanced Infrastructure",
  description:
  "Modern manufacturing facilities designed for scalable pharmaceutical production across multiple dosage forms.",
  },
  {
  icon: ShieldCheck,
  title: "Quality Assurance",
  description:
  "Integrated quality systems focused on consistency, compliance, safety, and product reliability.",
  },
  {
  icon: FlaskConical,
  title: "Research & Development",
  description:
  "Continuous innovation and formulation support to help customers develop competitive healthcare products.",
  },
  {
  icon: PackageCheck,
  title: "Private Label Solutions",
  description:
  "Customized branding, packaging, and labeling services tailored to market-specific requirements.",
  },
  {
  icon: Globe,
  title: "Export Support",
  description:
  "Comprehensive export assistance and documentation support for domestic and international markets.",
  },
  {
  icon: Users,
  title: "Customer Focused",
  description:
  "Collaborative partnerships built around responsiveness, transparency, and long-term business growth.",
  },
  ];
  
  export default function WhyChooseUs() {
  return (
  <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">
    {/* Background Glow */}
    <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[var(--primary)]/10 blur-[140px]" />
    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/5 blur-[140px]" />
  
    <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Why Choose REDSON
          </span>
        </div>
  
        <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-[64px]">
          Built Around
          <br />
          Quality & Trust.
        </h2>
  
        <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
          Combining manufacturing expertise, quality systems,
          innovation, and customer-focused services to support
          pharmaceutical brands at every stage of growth.
        </p>
      </div>
  
      {/* Features Grid */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
  
          return (
            <div
              key={feature.title}
              className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
                <Icon
                  size={24}
                  className="text-[var(--primary)]"
                />
              </div>
  
              <h3 className="mt-5 text-xl font-bold text-white">
                {feature.title}
              </h3>
  
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
  
      {/* Bottom Trust Banner */}
      <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
            Trusted Manufacturing Partner
          </p>
  
          <h3 className="mt-3 text-3xl font-bold text-white">
            Delivering Quality, Reliability & Long-Term Value
          </h3>
  
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
            REDSON Pharmaceuticals supports healthcare companies with
            advanced manufacturing capabilities, quality-driven
            processes, regulatory-focused operations, and dependable
            customer service.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
  }
  









// import {
//     Factory,
//     ShieldCheck,
//     Globe,
//     FlaskConical,
//     PackageCheck,
//     Users,
//   } from "lucide-react";
  
//   const features = [
//     {
//       icon: Factory,
//       title: "Advanced Infrastructure",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Quality Assurance",
//     },
//     {
//       icon: FlaskConical,
//       title: "Research & Development",
//     },
//     {
//       icon: PackageCheck,
//       title: "Private Label Solutions",
//     },
//     {
//       icon: Globe,
//       title: "Export Support",
//     },
//     {
//       icon: Users,
//       title: "Customer Focused",
//     },
//   ];
  
//   export default function WhyChooseUs() {
//     return (
//       <section className="bg-slate-950 py-32">
//         <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//           <div className="text-center">
//             <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
//               Why Choose REDSON
//             </span>
  
//             <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] text-white md:text-7xl">
//               Built Around
//               <br />
//               Quality & Trust.
//             </h2>
//           </div>
  
//           <div className="mx-auto mt-24 grid max-w-6xl gap-8 md:grid-cols-3">
//             {features.map((feature) => {
//               const Icon = feature.icon;
  
//               return (
//                 <div
//                   key={feature.title}
//                   className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
//                     <Icon className="text-purple-300" />
//                   </div>
  
//                   <h3 className="mt-6 text-2xl font-bold text-white">
//                     {feature.title}
//                   </h3>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     );
//   }