"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Manufacturing", href: "#manufacturingcapabilities" },
    { label: "Quality", href: "#qualitycompliance" },
    { label: "Export", href: "#exportservices" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Overlay */}
      <motion.div
        onClick={() => setMenuOpen(false)}
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
        }}
        className={`fixed inset-0 z-[998] transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 w-full flex justify-center z-[100] py-0 transition-all duration-300 ${
          scrolled || menuOpen
            ? "lg:py-0 bg-white shadow-[0_4px_32px_rgba(1,1,1,0.25)]"
            : "lg:py-2"
        }`}
      >
        <div className="mx-auto w-full lg:max-w-[1440px] h-[10vh] px-0 lg:px-4">
          {/* Main Header */}
          <div
            className={`relative h-[10vh] bg-white z-[1] flex h-full items-center justify-between rounded-none lg:rounded-[40px] p-4 transition-all duration-300 ease-in-out
              ${menuOpen ? "border-b border-gray-200" : ""}
              ${
                scrolled || menuOpen
                  ? ""
                  : "shadow-[0_4px_32px_rgba(1,1,1,0.2)]"
              }`}
          >
            {/* Logo */}
            <div
            >
              <Link href="/" className="shrink-0">
                <Image
                  src="/logo-header-purple-temp-01.png"
                  alt="Redson Pharmaceuticals Pvt. Ltd."
                  width={180}
                  height={60}
                  priority
                  className="h-auto w-[160px] lg:w-[180px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center gap-5 xl:gap-8"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium tracking-wide text-black transition-colors duration-300 hover:text-black/60"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Desktop CTA */}
            <motion.a
              href="tel:+918866003844"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="hidden lg:block rounded-[37px] border border-[#7C5993] px-6 xl:px-8 py-3 text-sm xl:text-base font-semibold text-[#7C5993] transition-all duration-300 hover:bg-[#7C5993] hover:text-white"
            >
              Enquire Now
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden flex items-center justify-center text-[#7C5993]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="lg:hidden overflow-hidden shadow-[0_50px_64px_rgba(1,1,1,0.2)]"
              >
                <div className="bg-white p-5 border-b-2 border-gray-600">
                  <motion.nav
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col"
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        variants={itemVariants}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`group flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition-all duration-300 hover:text-[#7C5993] ${
                            index !== navItems.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <span>{item.label}</span>

                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3,
                    }}
                  >
                    <a
                      href="tel:+918866003844"
                      className="mt-6 w-full flex items-center justify-center rounded-full bg-[#7C5993] py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      Enquire Now
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}








// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "About", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Manufacturing", href: "#manufacturingcapabilities" },
//     { label: "Quality", href: "#quality" },
//     { label: "Export", href: "#export" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//   <>
//     <div
//     onClick={() => setMenuOpen(false)}
//     className={`fixed inset-0 z-[998] transition-opacity duration-300
//       ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//     />


//     <header
//       className={`fixed top-0 left-0 w-full flex justify-center z-[100] py-0 transition-all duration-300 ${
//         scrolled || menuOpen
//           ? "lg:py-0 bg-white shadow-[0_4px_32px_rgba(1,1,1,0.25)]"
//           : "lg:py-2"
//       }`}
//     >
//       <div className="mx-auto w-full lg:max-w-[1440px] h-[10vh] px-0 lg:px-4">
//         {/* Main Header */}
//         <div
//           className={`relative h-[10vh] bg-white z-[1] flex h-full items-center justify-between rounded-none lg:rounded-[40px] p-4 transition-all duration-300 ease-in-out
//             ${
//               menuOpen
//                 ? "border-b border-gray-200"
//                 : ""
//             }
//             ${
//               scrolled || menuOpen
//                 ? ""
//                 : "shadow-[0_4px_32px_rgba(1,1,1,0.2)]"
//             }
//           `}
//         >
//           {/* Logo */}
//           <Link href="/" className="shrink-0">
//             <Image
//               src="/logo-header-purple-temp-01.png"
//               alt="Ziora Pharmaceutical"
//               width={180}
//               height={60}
//               priority
//               className="h-auto w-[160px] lg:w-[180px]"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-sm font-medium tracking-wide text-black transition-colors duration-300 hover:text-black/60"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop CTA */}
//           <a 
//           href="tel:+918866003844"
//           className="hidden lg:block rounded-[37px] border border-[#7C5993] px-6 xl:px-8 py-3 text-sm xl:text-base font-semibold text-[#7C5993] transition-all duration-300 hover:bg-[#7C5993] hover:text-white">
//             Enquire Now
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex items-center justify-center text-[#7C5993]"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-[900ms] ease-in-out ${
//             menuOpen
//               ? "max-h-[600px] opacity-100 translate-y-0 shadow-[0_50px_64px_rgba(1,1,1,0.2)]"
//               : "max-h-0 opacity-0 -translate-y-4"
//           }`}
//         >
//           <div className="bg-white p-5 border-b-2 border-gray-600">
//             <nav className="flex flex-col">
//               {navItems.map((item, index) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setMenuOpen(false)}
//                   className={`group flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition-all duration-300 hover:text-[#7C5993] ${
//                     index !== navItems.length - 1
//                       ? "border-b border-gray-100"
//                       : ""
//                   }`}
//                 >
//                   <span>{item.label}</span>

//                   <svg
//                     className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </Link>
//               ))}
//             </nav>

//             <div>
//               <a
//               href="tel:+918866003844"
//               className="mt-6 w-full flex items-center justify-center rounded-full bg-[#7C5993] py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
//                 Enquire Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   </>
//   );
// }