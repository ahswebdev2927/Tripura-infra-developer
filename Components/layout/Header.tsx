// 'use client';

// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { motion, AnimatePresence } from 'framer-motion';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/services', label: 'Services' },
//   { href: '/projects', label: 'Projects' },
//   { href: '/contact', label: 'Contact' },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-40">
//       <div className="container-custom py-4 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold">
//           <span className="text-primary">Tripura</span>{' '}
//           <span className="text-dark">Infra</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-gray-700 hover:text-primary font-medium transition"
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Button asChild className="bg-primary hover:bg-primary/90">
//             <Link href="/contact">Get Quote</Link>
//           </Button>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-t"
//           >
//             <div className="container-custom py-4 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-gray-700 hover:text-primary font-medium"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <Button asChild className="bg-primary w-full">
//                 <Link href="/contact">Get Quote</Link>
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed w-full z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-[#05070d]/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
//             : "bg-transparent"
//         }`}
//       >
//         {/* GOLD TOP LINE */}
//         <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

//         <div className="container-custom flex items-center justify-between h-20">
          
//           {/* LOGO */}
//           <Link href="/" className="flex flex-col leading-tight">
//             <span className="text-xl font-bold text-white tracking-wide">
//               Tripura Infra
//             </span>
//             <span className="text-[10px] text-gray-400 tracking-[2px] uppercase">
//               Developers
//             </span>
//           </Link>

//           {/* NAV */}
//           <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
//             {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="relative group"
//               >
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full" />
//               </Link>
//             ))}
//           </nav>

//           {/* CTA */}
//           <div className="hidden md:flex items-center gap-5">
//             <a
//               href="tel:+918790806677"
//               className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
//             >
//               <Phone size={16} />
//               +91 87908 06677
//             </a>

//             <a
//               href="/contact"
//               className="px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black
//               bg-gradient-to-r from-[#f5d97b] to-[#d4af37]
//               shadow-[0_10px_30px_rgba(212,175,55,0.4)]
//               hover:scale-105 transition-all duration-300"
//             >
//               Free Consultation
//             </a>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button onClick={() => setOpen(!open)} className="md:hidden text-white">
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="fixed top-0 left-0 w-full h-screen bg-[#05070d] z-40 flex flex-col items-center justify-center gap-8 text-white text-lg"
//         >
//           {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
//             <Link
//               key={item}
//               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               onClick={() => setOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}

//           <a href="tel:+918790806677" className="btn-primary mt-4">
//             Call Now
//           </a>

//           <a
//             href="https://wa.me/918790806677"
//             target="_blank"
//             className="btn-accent"
//           >
//             WhatsApp
//           </a>
//         </motion.div>
//       )}
//     </>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, Phone, Shield, Star, Clock } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* FIXED WRAPPER – contains both top bar and main header */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         {/* TOP BAR - Trust Signals (always visible on desktop, no animation) */}
//         <div className="hidden lg:block bg-[#05070d]/90 backdrop-blur-sm border-b border-white/5 text-xs text-gray-400">
//           <div className="container-custom py-2 flex justify-between items-center">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
//                 <span>4.9/5 Rating</span>
//                 <span className="text-white/20">|</span>
//                 <span>100+ Happy Clients</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Shield className="w-3 h-3 text-[#d4af37]" />
//                 <span>20+ Years Experience</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-3 h-3 text-[#d4af37]" />
//                 <span>24/7 Emergency Support</span>
//               </div>
//             </div>
//             {/* <div className="flex items-center gap-4">
//               <Link
//                 href="/contact"
//                 className="text-[#d4af37] hover:text-[#f5d97b] transition-colors"
//               >
//                 Get Quote →
//               </Link>
//             </div> */}
//           </div>
//         </div>

//         {/* MAIN HEADER - no longer fixed, sits inside the wrapper */}
//         <header className="bg-[#05070d]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
//           {/* GOLD TOP LINE (always visible) */}
//           <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

//           <div className="container-custom flex items-center justify-between h-20">
//             {/* LOGO with animated hover */}
//             <Link href="/" className="group flex flex-col leading-tight relative">
//               <span className="text-xl font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors">
//                 Tripura Infra
//               </span>
//               <span className="text-[10px] text-gray-400 tracking-[2px] uppercase">
//                 Developers
//               </span>
//               <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#d4af37] group-hover:w-full transition-all duration-500" />
//             </Link>

//             {/* DESKTOP NAVIGATION */}
//             <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
//               {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
//                 <Link
//                   key={item}
//                   href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                   className="relative group"
//                 >
//                   {item}
//                   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full" />
//                 </Link>
//               ))}
//             </nav>

//             {/* DESKTOP CTAS (Premium) */}
//             <div className="hidden md:flex items-center gap-5">
//               <a
//                 href="tel:+918790806677"
//                 className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition group"
//               >
//                 <Phone size={16} className="group-hover:scale-110 transition-transform" />
//                 +91 87908 06677
//               </a>

//               <Link
//                 href="/contact"
//                 className="relative overflow-hidden px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black rounded-md
//                   bg-gradient-to-r from-[#f5d97b] to-[#d4af37]
//                   shadow-[0_10px_30px_rgba(212,175,55,0.4)]
//                   hover:scale-105 transition-all duration-300 group"
//               >
//                 <span className="relative z-10">Free Consultation</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f5d97b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </Link>
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden text-white hover:text-[#d4af37] transition-colors"
//             >
//               {open ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </header>
//       </div>

//       {/* MOBILE MENU (Fullscreen Premium) – animation kept for a smooth opening */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="fixed inset-0 bg-[#05070d] z-40 flex flex-col items-center justify-center gap-8 text-white text-lg overflow-y-auto"
//           >
//             <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
//               {/* Navigation Links */}
//               {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
//                 <Link
//                   key={item}
//                   href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                   onClick={() => setOpen(false)}
//                   className="text-2xl font-light hover:text-[#d4af37] transition-colors"
//                 >
//                   {item}
//                 </Link>
//               ))}

//               <div className="w-20 h-px bg-white/20 my-4" />

//               {/* Trust Badges */}
//               <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
//                 <div className="flex items-center gap-1">
//                   <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
//                   <span>4.9 Rating</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Shield className="w-3 h-3 text-[#d4af37]" />
//                   <span>20+ Years</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock className="w-3 h-3 text-[#d4af37]" />
//                   <span>24/7 Support</span>
//                 </div>
//               </div>

//               {/* Mobile CTAs */}
//               <div className="flex flex-col gap-4 w-full mt-6">
//                 <a
//                   href="tel:+918790806677"
//                   className="btn-primary flex items-center justify-center gap-2 w-full"
//                   onClick={() => setOpen(false)}
//                 >
//                   <Phone size={18} /> Call Now
//                 </a>
//                 <a
//                   href="/contact"
//                   className="btn-accent flex items-center justify-center w-full"
//                   onClick={() => setOpen(false)}
//                 >
//                   Free Consultation
//                 </a>
//                 <a
//                   href="https://wa.me/918790806677"
//                   target="_blank"
//                   className="flex items-center justify-center gap-2 py-3 px-6 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors"
//                   onClick={() => setOpen(false)}
//                 >
//                   <span>WhatsApp</span>
//                 </a>
//               </div>

//               <p className="text-xs text-gray-500 mt-8 text-center">
//                 ⚡ Limited slots available – book your free site visit today
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Star, Shield, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <>
      {/* WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-50">

        {/* TOP BAR */}
        <div className="hidden lg:block bg-[var(--color-bg)]/90 backdrop-blur-sm border-b border-white/5 text-xs text-gray-400">
          <div className="container-custom py-2 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                <span>4.9/5 Rating</span>
                <span className="text-white/20">|</span>
                <span>100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-[var(--color-accent)]" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <header
          className={`transition-all duration-300 border-b ${
            scrolled
              ? "bg-[var(--color-bg)]/95 backdrop-blur-xl shadow-xl border-white/10"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* GOLD LINE */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

          <div className="container-custom flex items-center justify-between h-20 md:h-24">
            {/* LOGO – now bigger and with shadow for depth */}
            <Link href="/" className="flex items-center h-full transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <Image
                  src="/Logo/logo.png"
                  alt="Tripura Infra Developers"
                  width={180}
                  height={80}
                  className="h-16 md:h-24 w-auto object-contain drop-shadow-lg p-1"
                  priority
                />
              </div>
            </Link>

            {/* NAVIGATION – adjusted spacing for larger logo */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              {navItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = pathname === path;

                return (
                  <Link
                    key={item}
                    href={path}
                    className={`relative group transition ${
                      isActive ? "text-[var(--color-accent)]" : "hover:text-white"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--color-accent)] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+918790806677"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Phone size={16} />
                +91 87908 06677
              </a>

              <Link
                href="/contact"
                className="relative px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black rounded-md
                bg-gradient-to-r from-[var(--color-accent-soft)] to-[var(--color-accent)]
                shadow-lg hover:scale-105 transition-all duration-300"
              >
                Free Consultation
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 whitespace-nowrap">
                  Limited slots this month
                </span>
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white hover:text-[var(--color-accent)]"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-bg)] z-40 flex flex-col items-center justify-center gap-8 text-white"
          >
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

              return (
                <Link
                  key={item}
                  href={path}
                  onClick={() => setOpen(false)}
                  className="text-2xl hover:text-[var(--color-accent)]"
                >
                  {item}
                </Link>
              );
            })}

            {/* CTA */}
            <div className="flex flex-col gap-4 w-full max-w-xs mt-6">
              <a
                href="tel:+918790806677"
                className="btn-primary flex justify-center items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Phone size={18} /> Call Now
              </a>

              <Link
                href="/contact"
                className="btn-accent flex justify-center"
                onClick={() => setOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}