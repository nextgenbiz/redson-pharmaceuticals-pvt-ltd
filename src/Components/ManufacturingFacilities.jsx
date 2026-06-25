"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Pill,
  Syringe,
  FlaskConical,
  Eye,
  ShieldPlus,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Tablet Manufacturing",
    subtitle: "Precision Solid Dosage Forms",
    image: "/manufacturing-capabilities/tablet-manufacturing.jpg",
    description:
      "Comprehensive manufacturing of coated, chewable, dispersible, and sustained-release tablets with scalable production capacity.",
    features: [
      "Film Coated",
      "Dispersible",
      "Chewable",
      "Sustained Release",
    ],
  },
  {
    title: "Capsule Manufacturing",
    subtitle: "Reliable Capsule Production",
    image: "/manufacturing-capabilities/capsule-manufacturing.jpg",
    description:
      "High-quality hard gelatin capsule manufacturing supported by batch consistency and customized formulations.",
    features: [
      "Hard Gelatin",
      "Pellet Capsules",
      "Combination Products",
      "Custom Formulations",
    ],
  },
  {
    title: "Injectable Manufacturing",
    subtitle: "Sterile & Critical Care Solutions",
    image: "/manufacturing-capabilities/injectables-manufacturing.jpg",
    description:
      "Sterile injectable manufacturing with advanced filling systems and critical care production support.",
    features: [
      "Dry Powder",
      "Liquid Injections",
      "Sterile Filling",
      "QC Tested",
    ],
  },
  {
    title: "Liquid Oral Manufacturing",
    subtitle: "Pediatric & Adult Formulations",
    image: "/manufacturing-capabilities/liquid-oral-manufacturing.jpg",
    description:
      "Manufacturing solutions for syrups, suspensions, oral liquids, and nutraceutical formulations.",
    features: [
      "Syrups",
      "Suspensions",
      "Oral Solutions",
      "Nutraceuticals",
    ],
  },
  {
    title: "Eye Drops Manufacturing",
    subtitle: "Specialized Ophthalmic Solutions",
    image: "/manufacturing-capabilities/eye-drop-manufacturing.jpg",
    description:
      "Sterile ophthalmic manufacturing backed by advanced quality systems and regulatory support.",
    features: [
      "Ophthalmic Solutions",
      "Sterile Processing",
      "Quality Assurance",
      "Regulatory Support",
    ],
  },
  {
    title: "Veterinary Products",
    subtitle: "Animal Healthcare Solutions",
    image: "/manufacturing-capabilities/veternery-products-manufacturing.jpg",
    description:
      "Dedicated manufacturing support for veterinary formulations and private-label healthcare products.",
    features: [
      "Veterinary Formulations",
      "Private Label",
      "Custom Packaging",
      "Export Ready",
    ],
  },
];

const icons = [
  Pill,
  Pill,
  Syringe,
  FlaskConical,
  Eye,
  ShieldPlus,
];

export default function ManufacturingFacilities() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
      },
    }),
  };

  return (
    <section
      id="manufacturingcapabilities"
      className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
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
              Manufacturing Capabilities
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-4 sm:mt-5 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]"
          >
            Built Across
            <br />
            Multiple
            <span className="text-[var(--primary)]">
              {" "}Dosage Forms.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Comprehensive pharmaceutical manufacturing capabilities
            supported by advanced infrastructure, stringent quality
            systems, and scalable production solutions.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 2}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-white shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[var(--primary)]/30"
              >
                <div className="grid md:grid-cols-[0.4fr_0.6fr]">

                  {/* Image */}
                  <div className="relative h-[220px] sm:h-[260px] md:h-full overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-4 sm:p-5 md:p-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 shrink-0">
                          <Icon
                            size={18}
                            className="text-[var(--primary)]"
                          />
                        </div>

                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[var(--primary)]">
                          {item.subtitle}
                        </p>
                      </div>

                      <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.features.map((feature, i) => (
                          <motion.span
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08 }}
                            className="rounded-full border border-slate-200 px-3 py-1 text-[10px] sm:text-[11px] text-slate-600"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="mt-5 sm:mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:gap-3"
                    >
                      Explore Capability
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-slate-50 p-5 sm:p-6 md:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-slate-500">
                Integrated Pharmaceutical Manufacturing
              </p>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-slate-900">
                Contract Manufacturing, Third-Party Production & Export
                Solutions Under One Trusted Partner
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Advanced manufacturing infrastructure, regulatory
                support, customized packaging, quality assurance
                systems, and scalable production capabilities.
              </p>
            </div>

            <a
              href="#contact"
              className="group flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Now
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








// import Image from "next/image";
// import Link from "next/link";
// import {
//   Pill,
//   Syringe,
//   FlaskConical,
//   Eye,
//   ShieldPlus,
//   ArrowRight,
// } from "lucide-react";

// const capabilities = [
//   {
//     title: "Tablet Manufacturing",
//     subtitle: "Precision Solid Dosage Forms",
//     image: "/manufacturing-capabilities/tablet-manufacturing.jpg",
//     description:
//       "Comprehensive manufacturing of coated, chewable, dispersible, and sustained-release tablets with scalable production capacity.",
//     features: [
//       "Film Coated",
//       "Dispersible",
//       "Chewable",
//       "Sustained Release",
//     ],
//   },
//   {
//     title: "Capsule Manufacturing",
//     subtitle: "Reliable Capsule Production",
//     image: "/manufacturing-capabilities/capsule-manufacturing.jpg",
//     description:
//       "High-quality hard gelatin capsule manufacturing supported by batch consistency and customized formulations.",
//     features: [
//       "Hard Gelatin",
//       "Pellet Capsules",
//       "Combination Products",
//       "Custom Formulations",
//     ],
//   },
//   {
//     title: "Injectable Manufacturing",
//     subtitle: "Sterile & Critical Care Solutions",
//     image: "/manufacturing-capabilities/injectables-manufacturing.jpg",
//     description:
//       "Sterile injectable manufacturing with advanced filling systems and critical care production support.",
//     features: [
//       "Dry Powder",
//       "Liquid Injections",
//       "Sterile Filling",
//       "QC Tested",
//     ],
//   },
//   {
//     title: "Liquid Oral Manufacturing",
//     subtitle: "Pediatric & Adult Formulations",
//     image: "/manufacturing-capabilities/liquid-oral-manufacturing.jpg",
//     description:
//       "Manufacturing solutions for syrups, suspensions, oral liquids, and nutraceutical formulations.",
//     features: [
//       "Syrups",
//       "Suspensions",
//       "Oral Solutions",
//       "Nutraceuticals",
//     ],
//   },
//   {
//     title: "Eye Drops Manufacturing",
//     subtitle: "Specialized Ophthalmic Solutions",
//     image: "/manufacturing-capabilities/eye-drop-manufacturing.jpg",
//     description:
//       "Sterile ophthalmic manufacturing backed by advanced quality systems and regulatory support.",
//     features: [
//       "Ophthalmic Solutions",
//       "Sterile Processing",
//       "Quality Assurance",
//       "Regulatory Support",
//     ],
//   },
//   {
//     title: "Veterinary Products",
//     subtitle: "Animal Healthcare Solutions",
//     image: "/manufacturing-capabilities/veternery-products-manufacturing.jpg",
//     description:
//       "Dedicated manufacturing support for veterinary formulations and private-label healthcare products.",
//     features: [
//       "Veterinary Formulations",
//       "Private Label",
//       "Custom Packaging",
//       "Export Ready",
//     ],
//   },
// ];

// const icons = [
//   Pill,
//   Pill,
//   Syringe,
//   FlaskConical,
//   Eye,
//   ShieldPlus,
// ];

// export default function ManufacturingFacilities() {
//   return (
//     <section
//       id="manufacturingcapabilities"
//       className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
//     >
//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//         {/* Header */}
//         <div className="max-w-4xl">
//           <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
//             <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
//               Manufacturing Capabilities
//             </span>
//           </div>

//           <h2 className="mt-4 sm:mt-5 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
//             Built Across
//             <br />
//             Multiple
//             <span className="text-[var(--primary)]">
//               {" "}
//               Dosage Forms.
//             </span>
//           </h2>

//           <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg">
//             Comprehensive pharmaceutical manufacturing capabilities
//             supported by advanced infrastructure, stringent quality
//             systems, and scalable production solutions.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-5 sm:gap-6 lg:grid-cols-2">
//           {capabilities.map((item, index) => {
//             const Icon = icons[index];

//             return (
//               <div
//                 key={item.title}
//                 className="group overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-white shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[var(--primary)]/30"
//               >
//                 <div className="grid md:grid-cols-[0.4fr_0.6fr]">
//                   {/* Image */}
//                   <div className="relative h-[220px] sm:h-[260px] md:h-full overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover transition duration-700 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col justify-between p-4 sm:p-5 md:p-6">
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 shrink-0">
//                           <Icon
//                             size={18}
//                             className="text-[var(--primary)]"
//                           />
//                         </div>

//                         <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[var(--primary)]">
//                           {item.subtitle}
//                         </p>
//                       </div>

//                       <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         {item.description}
//                       </p>

//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {item.features.map((feature) => (
//                           <span
//                             key={feature}
//                             className="rounded-full border border-slate-200 px-3 py-1 text-[10px] sm:text-[11px] text-slate-600"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <a
//                       href="#contact"
//                       className="mt-5 sm:mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:gap-3"
//                     >
//                       Explore Capability
//                       <ArrowRight size={15} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Strip */}
//         <div className="mt-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-slate-50 p-5 sm:p-6 md:p-8">
//           <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
//             <div>
//               <p className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-slate-500">
//                 Integrated Pharmaceutical Manufacturing
//               </p>

//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-slate-900">
//                 Contract Manufacturing, Third-Party Production & Export
//                 Solutions Under One Trusted Partner
//               </h3>

//               <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
//                 Advanced manufacturing infrastructure, regulatory
//                 support, customized packaging, quality assurance
//                 systems, and scalable production capabilities.
//               </p>
//             </div>

//             <a
//               href="#contact"
//               className="group flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
//             >
//               Contact Now
//               <ArrowRight
//                 size={15} 
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }