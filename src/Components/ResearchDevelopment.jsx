"use client";

import {
  FlaskConical,
  Microscope,
  Beaker,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const researchItems = [
  {
    icon: FlaskConical,
    title: "Formulation Development",
    description:
      "Customized pharmaceutical formulations designed to meet specific market and therapeutic requirements.",
  },
  {
    icon: Microscope,
    title: "Stability Studies",
    description:
      "Scientific evaluation of product stability, shelf life, and packaging compatibility.",
  },
  {
    icon: Beaker,
    title: "Process Optimization",
    description:
      "Continuous improvements in manufacturing efficiency, consistency, and scalability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Support",
    description:
      "Helping brands develop competitive and future-ready healthcare products.",
  },
];

export default function ResearchDevelopment() {
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
      id="researchdevelopment"
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
              Research & Development
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
            Innovation Through
            <br />
            <span className="text-[var(--primary)]">
              Scientific Precision.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600"
          >
            Our research-driven development process ensures innovative,
            scalable, and market-ready pharmaceutical solutions.
          </motion.p>
        </div>

        {/* Horizontal Process */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-4">
          {researchItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 2}
                whileHover={{ y: -6 }}
                className="relative"
              >
                {/* Connector line */}
                {index !== researchItems.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "calc(100% - 76px)" }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute left-[76px] top-7 hidden h-px bg-[var(--primary)] xl:block"
                  />
                )}

                <div className="relative">
                  {/* Number + Icon */}
                  <div className="relative flex h-14 items-center gap-3 sm:gap-4">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="text-2xl sm:text-3xl font-bold text-[var(--primary)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[var(--primary)] bg-white shrink-0"
                    >
                      <Icon
                        size={20}
                        className="text-[var(--primary)]"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-slate-900">
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
      </div>
    </section>
  );
}








// import {
//   FlaskConical,
//   Microscope,
//   Beaker,
//   Lightbulb,
// } from "lucide-react";

// const researchItems = [
//   {
//     icon: FlaskConical,
//     title: "Formulation Development",
//     description:
//       "Customized pharmaceutical formulations designed to meet specific market and therapeutic requirements.",
//   },
//   {
//     icon: Microscope,
//     title: "Stability Studies",
//     description:
//       "Scientific evaluation of product stability, shelf life, and packaging compatibility.",
//   },
//   {
//     icon: Beaker,
//     title: "Process Optimization",
//     description:
//       "Continuous improvements in manufacturing efficiency, consistency, and scalability.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation Support",
//     description:
//       "Helping brands develop competitive and future-ready healthcare products.",
//   },
// ];

// export default function ResearchDevelopment() {
//   return (
//     <section
//       id="researchdevelopment"
//       className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
//     >
//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//         {/* Header */}
//         <div className="max-w-4xl">
//           <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
//             <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
//               Research & Development
//             </span>
//           </div>

//           <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
//             Innovation Through
//             <br />
//             <span className="text-[var(--primary)]">
//               Scientific Precision.
//             </span>
//           </h2>

//           <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
//             Our research-driven development process ensures innovative,
//             scalable, and market-ready pharmaceutical solutions.
//           </p>
//         </div>

//         {/* Horizontal Process */}
//         <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-4">
//           {researchItems.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div key={item.title} className="relative">
//                 {/* Connector line */}
//                 {index !== researchItems.length - 1 && (
//                   <div className="absolute left-[76px] top-7 hidden h-px w-[calc(100%-76px)] bg-[var(--primary)] xl:block" />
//                 )}

//                 <div className="relative">
//                   {/* Number + Icon */}
//                   <div className="relative flex h-14 items-center gap-3 sm:gap-4">
//                     <span className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[var(--primary)] bg-white shrink-0">
//                       <Icon
//                         size={20}
//                         className="text-[var(--primary)]"
//                       />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-slate-900">
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
//       </div>
//     </section>
//   );
// }