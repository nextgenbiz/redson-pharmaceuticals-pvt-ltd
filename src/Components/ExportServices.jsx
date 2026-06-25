"use client";

import Link from "next/link";
import {
  Globe,
  FileCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const exportItems = [
  {
    icon: Globe,
    title: "International Reach",
    description:
      "Serving pharmaceutical partners with export-ready manufacturing support for domestic and international markets.",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    description:
      "Complete export documentation, compliance paperwork, and shipment readiness assistance for smooth operations.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Coordinated delivery systems designed for efficient, secure, and timely supply chain movement worldwide.",
  },
];

export default function ExportServices() {
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
      id="exportservices"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
              Export Services
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]"
          >
            Global Supply,
            <br />
            <span className="text-[var(--primary)]">
              Delivered With Confidence.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600"
          >
            Supporting pharmaceutical businesses with export-ready
            manufacturing, compliance documentation, and logistics
            coordination for seamless international delivery.
          </motion.p>
        </div>

        {/* Export Flow */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-8 sm:gap-10 md:grid-cols-3">
          {exportItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 2}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {/* Connector Line */}
                {index !== exportItems.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "calc(100% - 80px)" }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute left-[56px] top-6 hidden h-px bg-[var(--primary)] md:block"
                  />
                )}

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[var(--primary)] bg-slate-50 transition-all duration-300"
                  >
                    <Icon
                      size={20}
                      className="text-[var(--primary)]"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          className="mt-8 sm:mt-10 inline-flex min-h-[48px] w-full sm:w-fit items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-5 sm:px-6 py-3 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:gap-3 active:scale-[0.98]"
        >
          Get Quote On Export Solutions
          <ArrowRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}








// import Link from "next/link";
// import {
//   Globe,
//   FileCheck,
//   Truck,
//   ArrowRight,
// } from "lucide-react";

// const exportItems = [
//   {
//     icon: Globe,
//     title: "International Reach",
//     description:
//       "Serving pharmaceutical partners with export-ready manufacturing support for domestic and international markets.",
//   },
//   {
//     icon: FileCheck,
//     title: "Documentation Support",
//     description:
//       "Complete export documentation, compliance paperwork, and shipment readiness assistance for smooth operations.",
//   },
//   {
//     icon: Truck,
//     title: "Reliable Logistics",
//     description:
//       "Coordinated delivery systems designed for efficient, secure, and timely supply chain movement worldwide.",
//   },
// ];

// export default function ExportServices() {
//   return (
//     <section
//       id="exportservices"
//       className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
//     >
//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//         {/* Header */}
//         <div className="max-w-4xl">
//           <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
//             <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
//               Export Services
//             </span>
//           </div>

//           <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
//             Global Supply,
//             <br />
//             <span className="text-[var(--primary)]">
//               Delivered With Confidence.
//             </span>
//           </h2>

//           <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
//             Supporting pharmaceutical businesses with export-ready
//             manufacturing, compliance documentation, and logistics
//             coordination for seamless international delivery.
//           </p>
//         </div>

//         {/* Export Flow */}
//         <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-8 sm:gap-10 md:grid-cols-3">
//           {exportItems.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div key={item.title} className="relative">
//                 {/* Connector Line */}
//                 {index !== exportItems.length && (
//                   <div className="absolute left-[56px] top-6 hidden h-px w-[calc(100%-80px)] bg-[var(--primary)] md:block" />
//                 )}

//                 <div className="relative">
//                   {/* Icon */}
//                   <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[var(--primary)] bg-slate-50 transition-all duration-300">
//                     <Icon
//                       size={20}
//                       className="text-[var(--primary)]"
//                     />
//                   </div>

//                   {/* Content */}
//                   <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <a
//           href="#contact"
//           className="mt-8 sm:mt-10 inline-flex min-h-[48px] w-full sm:w-fit items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-5 sm:px-6 py-3 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:gap-3 active:scale-[0.98]"
//         >
//           Get Quote On Export Solutions
//           <ArrowRight size={16} />
//         </a>
//       </div>
//     </section>
//   );
// }