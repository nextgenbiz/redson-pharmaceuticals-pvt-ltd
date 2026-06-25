"use client";

import {
  ShieldCheck,
  FlaskConical,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const qualityItems = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive quality assurance systems integrated throughout every stage of manufacturing to ensure consistency, safety, and reliability.",
  },
  {
    icon: FlaskConical,
    title: "Quality Control",
    description:
      "Dedicated testing protocols, analytical evaluations, and batch validation processes maintain strict pharmaceutical quality standards.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Documentation-driven manufacturing practices designed to support regulatory requirements and customer confidence.",
  },
];

export default function QualityCompliance() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
  };

  return (
    <section
      id="qualitycompliance"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px] rounded-full bg-[var(--primary)]/5 blur-[110px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-0 bottom-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px] rounded-full bg-blue-100/40 blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              custom={1}
              className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5"
            >
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
                Quality & Compliance
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={2}
              className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]"
            >
              Quality Built
              <br />
              <span className="text-[var(--primary)]">
                Into Every Batch.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg"
            >
              At REDSON Pharmaceuticals, quality is integrated into every
              stage of manufacturing. From raw material evaluation to final
              product release, our systems are designed to maintain
              consistency, safety, and regulatory compliance.
            </motion.p>

            <motion.a
              variants={fadeUp}
              custom={4}
              href="#contact"
              className="group mt-6 flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Now
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* Right Compliance Rail */}
          <div className="relative">
            <div className="relative pb-8">

              {/* Animated Rail */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-5 sm:left-6 top-0 w-px bg-[var(--primary)]"
              />

              <div className="space-y-8 sm:space-y-10">
                {qualityItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.6,
                      }}
                      className="relative flex gap-4 sm:gap-6"
                    >
                      {/* Icon Node */}
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg"
                      >
                        <Icon size={18} />
                      </motion.div>

                      {/* Content */}
                      <div className="pb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 sm:mt-3 max-w-xl text-sm leading-6 sm:leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="rounded-2xl border border-[var(--primary)] bg-slate-50 p-4 sm:p-6"
            >
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)]">
                Process Driven Quality Systems
              </p>

              <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
                Every batch undergoes structured quality checkpoints,
                analytical testing, and documentation review to maintain
                manufacturing consistency and product integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}








// import {
//   ShieldCheck,
//   FlaskConical,
//   FileCheck,
//   ArrowRight,
// } from "lucide-react";

// const qualityItems = [
//   {
//     icon: ShieldCheck,
//     title: "Quality Assurance",
//     description:
//       "Comprehensive quality assurance systems integrated throughout every stage of manufacturing to ensure consistency, safety, and reliability.",
//   },
//   {
//     icon: FlaskConical,
//     title: "Quality Control",
//     description:
//       "Dedicated testing protocols, analytical evaluations, and batch validation processes maintain strict pharmaceutical quality standards.",
//   },
//   {
//     icon: FileCheck,
//     title: "Regulatory Compliance",
//     description:
//       "Documentation-driven manufacturing practices designed to support regulatory requirements and customer confidence.",
//   },
// ];

// export default function QualityCompliance() {
//   return (
//     <section
//       id="qualitycompliance"
//       className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
//     >
//       {/* Background Effects */}
//       <div className="absolute left-0 top-0 h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px] rounded-full bg-[var(--primary)]/5 blur-[110px]" />
//       <div className="absolute right-0 bottom-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px] rounded-full bg-blue-100/40 blur-[90px]" />

//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//         <div className="grid items-start gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          
//           {/* Left Content */}
//           <div>
//             <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
//               <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
//                 Quality & Compliance
//               </span>
//             </div>

//             <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
//               Quality Built
//               <br />
//               <span className="text-[var(--primary)]">
//                 Into Every Batch.
//               </span>
//             </h2>

//             <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg">
//               At REDSON Pharmaceuticals, quality is integrated into every
//               stage of manufacturing. From raw material evaluation to final
//               product release, our systems are designed to maintain
//               consistency, safety, and regulatory compliance.
//             </p>

//             <a
//               href="#contact"
//               className="group mt-6 flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
//             >
//               Contact Now
//               <ArrowRight
//                 size={15} 
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>
//           </div>

//           {/* Right Compliance Rail */}
//           <div className="relative">
//             <div className="relative pb-8">
//               <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-[var(--primary)]" />

//               <div className="space-y-8 sm:space-y-10">
//                 {qualityItems.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.title}
//                       className="relative flex gap-4 sm:gap-6"
//                     >
//                       {/* Icon Node */}
//                       <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
//                         <Icon size={18} />
//                       </div>

//                       {/* Content */}
//                       <div className="pb-2">
//                         <h3 className="text-lg sm:text-xl font-bold text-slate-900">
//                           {item.title}
//                         </h3>

//                         <p className="mt-2 sm:mt-3 max-w-xl text-sm leading-6 sm:leading-7 text-slate-600">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Bottom Highlight */}
//             <div className=" rounded-2xl border border-[var(--primary)] bg-slate-50 p-4 sm:p-6">
//               <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)]">
//                 Process Driven Quality Systems
//               </p>

//               <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
//                 Every batch undergoes structured quality checkpoints,
//                 analytical testing, and documentation review to maintain
//                 manufacturing consistency and product integrity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }