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

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, Phone, ChevronRight, Building2, Award, Clock } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = ["Home", "About", "Services", "Projects", "Contact"];

//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50">
//         {/* OPTIONAL TOP BAR – streamlined, only visible on large screens */}
//         <div
//           className="hidden lg:block text-xs backdrop-blur-sm transition-all duration-300"
//           style={{
//             backgroundColor: scrolled ? "rgba(5, 7, 13, 0.6)" : "rgba(5, 7, 13, 0.8)",
//             borderBottom: "1px solid rgba(255,255,255,0.06)",
//             color: "#9ca3af",
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex justify-between items-center">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <Award className="w-3 h-3" style={{ color: "#fbbf24" }} />
//                 <span>20+ Years Excellence</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Building2 className="w-3 h-3" style={{ color: "#fbbf24" }} />
//                 <span>100+ Projects</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-3 h-3" style={{ color: "#fbbf24" }} />
//                 <span>24/7 Support</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <span>⭐ 4.9/5 Rating</span>
//               <span className="w-px h-3 bg-white/20"></span>
//               <a href="mailto:info@tripurainfradevelopers.com" className="hover:text-white transition">info@tripurainfradevelopers.com</a>
//             </div>
//           </div>
//         </div>

//         {/* MAIN HEADER – glass morphic + dynamic shadow */}
//         <header
//           className={`transition-all duration-500 ${
//             scrolled
//               ? "bg-[#05070d]/80 backdrop-blur-xl shadow-2xl"
//               : "bg-transparent"
//           }`}
//           style={{
//             borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
//           }}
//         >
//           {/* Animated gold gradient bar – more dynamic */}
//           <div
//             className="h-[2px] w-full"
//             style={{
//               background: "linear-gradient(90deg, #fbbf24 0%, #d84315 50%, #fbbf24 100%)",
//               transformOrigin: "left",
//               animation: "glowShift 8s ease infinite",
//             }}
//           />

//           <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
//             {/* LOGO with subtle glow */}
//             <Link href="/" className="relative group">
//               <div className="relative transition-transform duration-500 group-hover:scale-105">
//                 <Image
//                   src="/Logo/logo.png"
//                   alt="Tripura Infra Developers"
//                   width={180}
//                   height={80}
//                   className="h-14 md:h-20 w-auto object-contain drop-shadow-xl"
//                   priority
//                 />
//                 <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ background: "#fbbf24" }} />
//               </div>
//             </Link>

//             {/* DESKTOP NAVIGATION – modern with slide-up underline */}
//             <nav className="hidden md:flex items-center gap-8">
//               {navItems.map((item) => {
//                 const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//                 const isActive = pathname === path;

//                 return (
//                   <Link
//                     key={item}
//                     href={path}
//                     className="relative text-sm font-medium tracking-wide transition-all duration-300 py-2"
//                     style={{
//                       color: isActive ? "#fbbf24" : "#e5e7eb",
//                     }}
//                     onMouseEnter={(e) => {
//                       if (!isActive) e.currentTarget.style.color = "#ffffff";
//                     }}
//                     onMouseLeave={(e) => {
//                       if (!isActive) e.currentTarget.style.color = "#e5e7eb";
//                     }}
//                   >
//                     {item}
//                     {/* New underline style – slide from center */}
//                     <span
//                       className={`absolute bottom-0 left-1/2 h-[2px] transition-all duration-300 ${
//                         isActive ? "w-6 -translate-x-1/2" : "w-0 -translate-x-1/2 group-hover:w-6"
//                       }`}
//                       style={{ backgroundColor: "#fbbf24" }}
//                     />
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* RIGHT SIDE – CTA group */}
//             <div className="hidden md:flex items-center gap-6">
//               <a
//                 href="tel:+918790806677"
//                 className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105"
//                 style={{ color: "#fbbf24" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#fde68a")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "#fbbf24")}
//               >
//                 <Phone size={16} />
//                 +91 87908 06677
//               </a>
//               <Link
//                 href="/contact"
//                 className="group relative overflow-hidden px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
//                 style={{
//                   background: "linear-gradient(135deg, #d84315, #f4511e)",
//                   color: "#ffffff",
//                   boxShadow: "0 4px 15px rgba(216,67,21,0.3)",
//                 }}
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Free Quote
//                   <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#fde68a] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
//               </Link>
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-all"
//               style={{
//                 backgroundColor: open ? "#fbbf24" : "rgba(255,255,255,0.05)",
//                 border: "1px solid rgba(255,255,255,0.2)",
//               }}
//             >
//               {open ? (
//                 <X size={20} style={{ color: "#05070d" }} />
//               ) : (
//                 <Menu size={20} style={{ color: "#fbbf24" }} />
//               )}
//             </button>
//           </div>
//         </header>
//       </div>

//       {/* MODERN FULLSCREEN MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//             className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
//             style={{
//               backgroundColor: "#05070d",
//               backdropFilter: "blur(20px)",
//               backgroundImage: "radial-gradient(circle at 20% 30%, rgba(251,191,36,0.05), transparent 70%)",
//             }}
//           >
//             {/* Decorative gold line */}
//             <div className="absolute top-24 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent" />

//             <div className="flex flex-col items-center gap-6">
//               {navItems.map((item, idx) => {
//                 const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//                 return (
//                   <motion.div
//                     key={item}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.08 }}
//                   >
//                     <Link
//                       href={path}
//                       onClick={() => setOpen(false)}
//                       className="text-3xl font-semibold tracking-wide transition-all duration-300 hover:tracking-wider"
//                       style={{ color: "#ffffff" }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
//                     >
//                       {item}
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Mobile CTAs */}
//             <div className="flex flex-col gap-4 w-64 mt-8">
//               <a
//                 href="tel:+918790806677"
//                 className="flex justify-center items-center gap-2 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105"
//                 style={{
//                   background: "linear-gradient(135deg, #f4511e, #d84315)",
//                   color: "#ffffff",
//                   boxShadow: "0 8px 20px rgba(216,67,21,0.3)",
//                 }}
//                 onClick={() => setOpen(false)}
//               >
//                 <Phone size={16} /> Call Now
//               </a>
//               <Link
//                 href="/contact"
//                 className="flex justify-center items-center gap-2 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105"
//                 style={{
//                   background: "linear-gradient(135deg, #fde68a, #fbbf24)",
//                   color: "#000000",
//                 }}
//                 onClick={() => setOpen(false)}
//               >
//                 Free Consultation <ChevronRight size={16} />
//               </Link>
//             </div>

//             {/* Trust badge (optional) */}
//             <div className="absolute bottom-10 left-0 right-0 text-center text-xs" style={{ color: "#6b7280" }}>
//               ⭐ 4.9/5 Rating · 20+ Years Excellence
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Keyframe animation for the gold gradient line */}
//       <style jsx global>{`
//         @keyframes glowShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-glowShift {
//           animation: glowShift 8s ease infinite;
//           background-size: 200% 100%;
//         }
//       `}</style>
//     </>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import {
//   Menu,
//   X,
//   Phone,
//   ChevronRight,
//   Building2,
//   Award,
//   Clock,
//   Star,
//   Mail,
//   ArrowRight,
//   HardHat,
//   Zap,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHover, setActiveHover] = useState<string | null>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [pathname]);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [mobileMenuOpen]);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const topBarStats = [
//     { icon: Award, text: "20+ Years Excellence" },
//     { icon: Building2, text: "500+ Projects Delivered" },
//     { icon: Clock, text: "24/7 Dedicated Support" },
//   ];

//   const isActive = (path: string) => {
//     if (path === "/") return pathname === path;
//     return pathname.startsWith(path);
//   };

//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50">

//         {/* ── TOP ANNOUNCEMENT BAR ── */}
//         <motion.div
//           animate={{
//             height: scrolled ? 0 : "auto",
//             opacity: scrolled ? 0 : 1,
//           }}
//           transition={{ duration: 0.35, ease: "easeInOut" }}
//           className="hidden lg:block overflow-hidden"
//           style={{
//             background: "linear-gradient(110deg, #1a0a08 0%, #2C0E09 50%, #1a0a08 100%)",
//             borderBottom: "1px solid rgba(192,57,43,0.3)",
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex justify-between items-center">
//             {/* Left Stats */}
//             <div className="flex items-center gap-6">
//               {topBarStats.map((stat, i) => (
//                 <div key={i} className="flex items-center gap-2 group">
//                   {i > 0 && (
//                     <div
//                       className="w-px h-3 mx-1"
//                       style={{ backgroundColor: "rgba(192,57,43,0.3)" }}
//                     />
//                   )}
//                   <div
//                     className="w-5 h-5 flex items-center justify-center flex-shrink-0"
//                     style={{ backgroundColor: "rgba(192,57,43,0.2)" }}
//                   >
//                     <stat.icon className="w-3 h-3" style={{ color: "#F4B400" }} />
//                   </div>
//                   <span
//                     className="text-xs font-medium tracking-wide"
//                     style={{ color: "rgba(255,255,255,0.7)" }}
//                   >
//                     {stat.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Right: Rating + Email */}
//             <div className="flex items-center gap-5">
//               {/* Stars Rating */}
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-3 h-3 fill-[#F4B400] text-[#F4B400]"
//                     />
//                   ))}
//                 </div>
//                 <span className="text-xs font-bold" style={{ color: "#F4B400" }}>
//                   4.9
//                 </span>
//                 <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
//                   (150+ reviews)
//                 </span>
//               </div>

//               <div
//                 className="w-px h-4"
//                 style={{ backgroundColor: "rgba(192,57,43,0.3)" }}
//               />

//               {/* Email */}
//               <a
//                 href="mailto:info@tripurainfradevelopers.com"
//                 className="flex items-center gap-1.5 text-xs font-medium group transition-all duration-300"
//                 style={{ color: "rgba(255,255,255,0.6)" }}
//                 onMouseEnter={(e) =>
//                   ((e.currentTarget as HTMLElement).style.color = "#F4B400")
//                 }
//                 onMouseLeave={(e) =>
//                   ((e.currentTarget as HTMLElement).style.color =
//                     "rgba(255,255,255,0.6)")
//                 }
//               >
//                 <Mail className="w-3.5 h-3.5" style={{ color: "#C0392B" }} />
//                 info@tripurainfradevelopers.com
//                 <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//               </a>

//               {/* Quick Call Pill */}
//               <a
//                 href="tel:+918790806677"
//                 className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
//                 style={{
//                   backgroundColor: "#C0392B",
//                   color: "#ffffff",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor =
//                     "#F4B400";
//                   (e.currentTarget as HTMLElement).style.color = "#2C2C2C";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor =
//                     "#C0392B";
//                   (e.currentTarget as HTMLElement).style.color = "#ffffff";
//                 }}
//               >
//                 <Phone className="w-3 h-3" />
//                 Call Now
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* ── MAIN HEADER ── */}
//         <header
//           className="transition-all duration-500"
//           style={{
//             backgroundColor: scrolled
//               ? "rgba(255,255,255,0.98)"
//               : "#ffffff",
//             backdropFilter: scrolled ? "blur(20px)" : "none",
//             boxShadow: scrolled
//               ? "0 4px 30px rgba(192,57,43,0.12), 0 1px 0 rgba(192,57,43,0.08)"
//               : "0 2px 20px rgba(0,0,0,0.06)",
//             borderBottom: scrolled
//               ? "1px solid rgba(192,57,43,0.12)"
//               : "1px solid rgba(0,0,0,0.05)",
//           }}
//         >
//           {/* Animated top accent line */}
//           <div className="h-[3px] w-full overflow-hidden">
//             <div
//               className="h-full w-full"
//               style={{
//                 background:
//                   "linear-gradient(90deg, #C0392B 0%, #F4B400 25%, #C0392B 50%, #F4B400 75%, #C0392B 100%)",
//                 backgroundSize: "300% 100%",
//                 animation: "gradientShift 5s ease infinite",
//               }}
//             />
//           </div>

//           <div className="max-w-7xl mx-auto px-6 lg:px-10">
//             <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 h-20 md:h-[88px]">

//               {/* ── LEFT: Logo ── */}
//               <Link href="/" className="group relative flex-shrink-0">
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 20 }}
//                   className="relative"
//                 >
//                   <Image
//                     src="/Logo/logo.png"
//                     alt="Infra Developers"
//                     width={210}
//                     height={90}
//                     className="h-14 md:h-[72px] w-auto object-contain"
//                     priority
//                   />
//                   {/* Red underline on hover */}
//                   <div className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
//                     style={{
//                       background: "linear-gradient(90deg, #C0392B, #F4B400)",
//                     }}
//                   />
//                 </motion.div>
//               </Link>

//               {/* ── CENTER: Desktop Nav ── */}
//               <nav className="hidden md:flex items-center justify-center gap-0.5">
//                 {navItems.map((item) => {
//                   const active = isActive(item.path);
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.path}
//                       onMouseEnter={() => setActiveHover(item.name)}
//                       onMouseLeave={() => setActiveHover(null)}
//                       className="relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 group"
//                       style={{
//                         color: active ? "#C0392B" : "#2C2C2C",
//                         fontFamily: "'Montserrat', sans-serif",
//                       }}
//                     >
//                       {/* Hover background */}
//                       {activeHover === item.name && !active && (
//                         <motion.div
//                           layoutId="hoverBg"
//                           className="absolute inset-0"
//                           style={{ backgroundColor: "rgba(192,57,43,0.05)" }}
//                           initial={false}
//                           transition={{
//                             type: "spring",
//                             stiffness: 500,
//                             damping: 35,
//                           }}
//                         />
//                       )}

//                       {/* Active background */}
//                       {active && (
//                         <motion.div
//                           layoutId="activeBg"
//                           className="absolute inset-0"
//                           style={{ backgroundColor: "rgba(192,57,43,0.08)" }}
//                           transition={{
//                             type: "spring",
//                             stiffness: 400,
//                             damping: 30,
//                           }}
//                         />
//                       )}

//                       <span className="relative z-10">{item.name}</span>

//                       {/* Active bottom bar */}
//                       {active && (
//                         <motion.div
//                           layoutId="activeBar"
//                           className="absolute bottom-0 left-3 right-3 h-[2px]"
//                           style={{ backgroundColor: "#C0392B" }}
//                           transition={{
//                             type: "spring",
//                             stiffness: 400,
//                             damping: 30,
//                           }}
//                         />
//                       )}

//                       {/* Hover bottom bar */}
//                       {!active && (
//                         <div
//                           className="absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
//                           style={{ backgroundColor: "#F4B400" }}
//                         />
//                       )}
//                     </Link>
//                   );
//                 })}
//               </nav>

//               {/* ── RIGHT: CTA Group ── */}
//               <div className="hidden md:flex items-center gap-4">

//                 {/* Phone */}
//                 <a
//                   href="tel:+918790806677"
//                   className="group flex items-center gap-2.5 transition-all duration-300"
//                 >
//                   <div
//                     className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       backgroundColor: "rgba(192,57,43,0.08)",
//                       border: "1px solid rgba(192,57,43,0.15)",
//                     }}
//                     onMouseEnter={(e) => {
//                       (e.currentTarget as HTMLElement).style.backgroundColor =
//                         "#C0392B";
//                     }}
//                     onMouseLeave={(e) => {
//                       (e.currentTarget as HTMLElement).style.backgroundColor =
//                         "rgba(192,57,43,0.08)";
//                     }}
//                   >
//                     <Phone
//                       size={14}
//                       style={{ color: "#C0392B" }}
//                       className="group-hover:text-white transition-colors duration-300"
//                     />
//                   </div>
//                   <div>
//                     <p
//                       className="text-[9px] uppercase tracking-widest font-bold"
//                       style={{ color: "rgba(44,44,44,0.45)" }}
//                     >
//                       Call Us
//                     </p>
//                     <p
//                       className="text-sm font-black tracking-wide leading-none transition-colors duration-300 group-hover:text-[#C0392B]"
//                       style={{
//                         color: "#2C2C2C",
//                         fontFamily: "'Montserrat', sans-serif",
//                       }}
//                     >
//                       +91 87908 06677
//                     </p>
//                   </div>
//                 </a>

//                 {/* Divider */}
//                 <div
//                   className="w-px h-10 self-center"
//                   style={{
//                     background:
//                       "linear-gradient(to bottom, transparent, rgba(192,57,43,0.2), transparent)",
//                   }}
//                 />

//                 {/* Get Quote Button — premium with diagonal shine */}
//                 <Link href="/contact" className="group relative overflow-hidden">
//                   <motion.div
//                     whileHover={{ scale: 1.04 }}
//                     whileTap={{ scale: 0.97 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 20 }}
//                     className="relative flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest overflow-hidden"
//                     style={{
//                       backgroundColor: "#C0392B",
//                       color: "#ffffff",
//                       fontFamily: "'Montserrat', sans-serif",
//                       clipPath:
//                         "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
//                       boxShadow: "4px 4px 0px #8E1B0E",
//                     }}
//                   >
//                     {/* Shine sweep */}
//                     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none" />

//                     <HardHat size={13} className="flex-shrink-0" />
//                     <span>Free Quote</span>
//                     <ChevronRight
//                       size={12}
//                       className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
//                     />
//                   </motion.div>
//                   {/* Gold shadow on hover */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                     style={{
//                       boxShadow: "0 8px 25px rgba(192,57,43,0.4)",
//                     }}
//                   />
//                 </Link>
//               </div>

//               {/* ── MOBILE: Hamburger ── */}
//               <motion.button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="md:hidden relative z-50 w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300 focus:outline-none"
//                 whileTap={{ scale: 0.92 }}
//                 style={{
//                   backgroundColor: mobileMenuOpen ? "#C0392B" : "transparent",
//                   border: `1.5px solid ${mobileMenuOpen ? "#C0392B" : "rgba(192,57,43,0.3)"}`,
//                 }}
//               >
//                 <AnimatePresence mode="wait">
//                   {mobileMenuOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.18 }}
//                     >
//                       <X size={18} color="#ffffff" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="open"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.18 }}
//                     >
//                       <Menu size={18} color="#C0392B" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>

//             </div>
//           </div>
//         </header>
//       </div>

//       {/* ── MOBILE MENU OVERLAY ── */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="fixed inset-0 z-30"
//               style={{ backgroundColor: "rgba(0,0,0,0.5)", top: "72px" }}
//               onClick={() => setMobileMenuOpen(false)}
//             />

//             {/* Slide-in panel */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 320, damping: 32 }}
//               className="fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-sm flex flex-col"
//               style={{
//                 backgroundColor: "#ffffff",
//                 top: "72px",
//                 borderLeft: "3px solid #C0392B",
//               }}
//             >
//               {/* Panel header accent */}
//               <div
//                 className="h-[3px] w-full"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #C0392B 0%, #F4B400 50%, #C0392B 100%)",
//                 }}
//               />

//               {/* Brand strip */}
//               <div
//                 className="px-6 py-5 flex items-center gap-3"
//                 style={{
//                   backgroundColor: "#1a0a08",
//                   borderBottom: "1px solid rgba(192,57,43,0.2)",
//                 }}
//               >
//                 <div
//                   className="w-9 h-9 flex items-center justify-center flex-shrink-0"
//                   style={{ backgroundColor: "#C0392B" }}
//                 >
//                   <Building2 size={16} color="#ffffff" />
//                 </div>
//                 <div>
//                   <p
//                     className="text-sm font-black uppercase tracking-widest"
//                     style={{
//                       color: "#ffffff",
//                       fontFamily: "'Montserrat', sans-serif",
//                     }}
//                   >
//                     Infra Developers
//                   </p>
//                   <p
//                     className="text-[9px] uppercase tracking-[3px]"
//                     style={{ color: "#F4B400" }}
//                   >
//                     Building the Future
//                   </p>
//                 </div>
//                 {/* Live badge */}
//                 <div className="ml-auto flex items-center gap-1">
//                   <div
//                     className="w-1.5 h-1.5 rounded-full animate-pulse"
//                     style={{ backgroundColor: "#22c55e" }}
//                   />
//                   <span
//                     className="text-[9px] uppercase tracking-widest"
//                     style={{ color: "rgba(255,255,255,0.4)" }}
//                   >
//                     Open
//                   </span>
//                 </div>
//               </div>

//               {/* Nav Links */}
//               <div className="flex-1 overflow-y-auto py-4">
//                 {navItems.map((item, idx) => {
//                   const active = isActive(item.path);
//                   return (
//                     <motion.div
//                       key={item.name}
//                       initial={{ opacity: 0, x: 30 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: idx * 0.07, type: "spring", stiffness: 300, damping: 24 }}
//                     >
//                       <Link
//                         href={item.path}
//                         className="flex items-center justify-between px-6 py-4 transition-all duration-200 group"
//                         style={{
//                           backgroundColor: active
//                             ? "rgba(192,57,43,0.06)"
//                             : "transparent",
//                           borderLeft: active
//                             ? "3px solid #C0392B"
//                             : "3px solid transparent",
//                         }}
//                         onMouseEnter={(e) => {
//                           if (!active) {
//                             (e.currentTarget as HTMLElement).style.backgroundColor =
//                               "rgba(192,57,43,0.03)";
//                           }
//                         }}
//                         onMouseLeave={(e) => {
//                           if (!active) {
//                             (e.currentTarget as HTMLElement).style.backgroundColor =
//                               "transparent";
//                           }
//                         }}
//                       >
//                         <span
//                           className="text-base font-bold tracking-wide"
//                           style={{
//                             color: active ? "#C0392B" : "#2C2C2C",
//                             fontFamily: "'Montserrat', sans-serif",
//                           }}
//                         >
//                           {item.name}
//                         </span>
//                         <div className="flex items-center gap-2">
//                           {active && (
//                             <span
//                               className="text-[9px] uppercase tracking-widest px-2 py-0.5 font-bold"
//                               style={{
//                                 backgroundColor: "#C0392B",
//                                 color: "#ffffff",
//                               }}
//                             >
//                               Active
//                             </span>
//                           )}
//                           <ChevronRight
//                             size={14}
//                             style={{
//                               color: active
//                                 ? "#C0392B"
//                                 : "rgba(44,44,44,0.3)",
//                             }}
//                             className="transition-transform duration-200 group-hover:translate-x-1"
//                           />
//                         </div>
//                       </Link>

//                       {/* Thin separator */}
//                       <div
//                         className="mx-6 h-px"
//                         style={{
//                           backgroundColor: "rgba(0,0,0,0.05)",
//                         }}
//                       />
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Bottom CTA Section */}
//               <div
//                 className="p-5 space-y-3"
//                 style={{
//                   borderTop: "1px solid rgba(192,57,43,0.12)",
//                   backgroundColor: "#fafafa",
//                 }}
//               >
//                 {/* Call Button */}
//                 <motion.a
//                   href="tel:+918790806677"
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.35 }}
//                   className="flex items-center justify-between w-full px-5 py-4 font-bold transition-all duration-300 active:scale-95"
//                   style={{
//                     backgroundColor: "#C0392B",
//                     color: "#ffffff",
//                     fontFamily: "'Montserrat', sans-serif",
//                   }}
//                   whileHover={{ backgroundColor: "#a93226" } as any}
//                 >
//                   <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
//                     <Phone size={16} />
//                     Call Now
//                   </span>
//                   <span className="text-sm font-medium opacity-80">
//                     87908 06677
//                   </span>
//                 </motion.a>

//                 {/* Free Quote */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.42 }}
//                 >
//                   <Link
//                     href="/contact"
//                     className="flex items-center justify-between w-full px-5 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-95"
//                     style={{
//                       border: "2px solid #C0392B",
//                       color: "#C0392B",
//                       fontFamily: "'Montserrat', sans-serif",
//                     }}
//                     onMouseEnter={(e) => {
//                       (e.currentTarget as HTMLElement).style.backgroundColor =
//                         "#C0392B";
//                       (e.currentTarget as HTMLElement).style.color = "#ffffff";
//                     }}
//                     onMouseLeave={(e) => {
//                       (e.currentTarget as HTMLElement).style.backgroundColor =
//                         "transparent";
//                       (e.currentTarget as HTMLElement).style.color = "#C0392B";
//                     }}
//                   >
//                     <span className="flex items-center gap-3">
//                       <Zap size={16} />
//                       Free Quote
//                     </span>
//                     <ArrowRight size={16} />
//                   </Link>
//                 </motion.div>

//                 {/* Trust badges */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="flex justify-between items-center pt-2"
//                 >
//                   <div className="flex items-center gap-1.5">
//                     <div className="flex gap-0.5">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="w-3 h-3 fill-[#F4B400] text-[#F4B400]"
//                         />
//                       ))}
//                     </div>
//                     <span
//                       className="text-xs font-bold"
//                       style={{ color: "#2C2C2C" }}
//                     >
//                       4.9/5
//                     </span>
//                   </div>
//                   <div
//                     className="w-px h-3"
//                     style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
//                   />
//                   <span
//                     className="text-xs font-medium"
//                     style={{ color: "rgba(44,44,44,0.5)" }}
//                   >
//                     20+ Yrs Experience
//                   </span>
//                   <div
//                     className="w-px h-3"
//                     style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
//                   />
//                   <span
//                     className="text-xs font-medium"
//                     style={{ color: "rgba(44,44,44,0.5)" }}
//                   >
//                     500+ Projects
//                   </span>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <style jsx global>{`
//         @keyframes gradientShift {
//           0%   { background-position: 0% 50%; }
//           50%  { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  ChevronDown,
  Building2,
  Award,
  Clock,
  Star,
  Mail,
  ArrowRight,
  HardHat,
  Zap,
  Wrench,
  Home,
  Layers,
  Hammer,
  Truck,
  Shield,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ── Service items for dropdown ──
const serviceItems = [
  {
    name: "Residential Construction",
    path: "/services/residential-construction",
    icon: Home,
    desc: "Custom homes & apartments",
  },
  {
    name: "Commercial Construction",   // changed from "Commercial Projects"
    path: "/services/commercial-construction",
    icon: Building2,
    desc: "Offices, malls & complexes",
  },
  {
    name: "Industrial Construction",
    path: "/services/industrial-construction",
    icon: Wrench,
    desc: "Warehouses, factories & plants",
  },
  {
    name: "Luxury Villas",             // changed from "Infrastructure Works"
    path: "/services/luxury-villas",
    icon: Layers,
    desc: "Roads, bridges & utilities",
  },
  {
    name: "Renovation",                // changed from "Renovation & Fit-Out"
    path: "/services/renovation",
    icon: Hammer,
    desc: "Interior & exterior upgrades",
  },
  {
    name: "Interior Design",           // changed from "Heavy Equipment"
    path: "/services/interior-design",
    icon: Truck,
    desc: "Machinery hire & operation",
  },
  {
    name: "Project Management",
    path: "/services/project-management",
    icon: Shield,
    desc: "End-to-end project oversight",
  },
  {
    name: "Home Automation",
    path: "/services/home-automation",
    icon: Cpu,
    desc: "Smart homes & intelligent living",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const topBarStats = [
    { icon: Award, text: "20+ Years Excellence" },
    { icon: Building2, text: "150+ Projects Delivered" },
    { icon: Clock, text: "24/7 Dedicated Support" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* ── TOP ANNOUNCEMENT BAR ── */}
        <motion.div
          animate={{
            height: scrolled ? 0 : "auto",
            opacity: scrolled ? 0 : 1,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="hidden lg:block overflow-hidden"
          style={{
            background:
              "linear-gradient(110deg, #1a0a08 0%, #2C0E09 50%, #1a0a08 100%)",
            borderBottom: "1px solid rgba(192,57,43,0.3)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex justify-between items-center">
            <div className="flex items-center gap-6">
              {topBarStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  {i > 0 && (
                    <div
                      className="w-px h-3 mx-1"
                      style={{ backgroundColor: "rgba(192,57,43,0.3)" }}
                    />
                  )}
                  <div
                    className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(192,57,43,0.2)" }}
                  >
                    <stat.icon
                      className="w-3 h-3"
                      style={{ color: "#F4B400" }}
                    />
                  </div>
                  <span
                    className="text-xs font-medium tracking-wide"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#F4B400] text-[#F4B400]"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold" style={{ color: "#F4B400" }}>
                  4.9
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  (150+ reviews)
                </span>
              </div>

              <div
                className="w-px h-4"
                style={{ backgroundColor: "rgba(192,57,43,0.3)" }}
              />

              <a
                href="mailto:info@tripurainfradevelopers.com"
                className="flex items-center gap-1.5 text-xs font-medium group transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#F4B400")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)")
                }
              >
                <Mail className="w-3.5 h-3.5" style={{ color: "#C0392B" }} />
                info@tripurainfradevelopers.com
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>

              <a
                href="tel:+918790806677"
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#C0392B", color: "#ffffff" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#F4B400";
                  (e.currentTarget as HTMLElement).style.color = "#2C2C2C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#C0392B";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
              >
                <Phone className="w-3 h-3" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── MAIN HEADER ── */}
        <header
          className="transition-all duration-500"
          style={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "#ffffff",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            boxShadow: scrolled
              ? "0 4px 30px rgba(192,57,43,0.12), 0 1px 0 rgba(192,57,43,0.08)"
              : "0 2px 20px rgba(0,0,0,0.06)",
            borderBottom: scrolled
              ? "1px solid rgba(192,57,43,0.12)"
              : "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* Animated top accent line */}
          <div className="h-[3px] w-full overflow-hidden">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, #C0392B 0%, #F4B400 25%, #C0392B 50%, #F4B400 75%, #C0392B 100%)",
                backgroundSize: "300% 100%",
                animation: "gradientShift 5s ease infinite",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 h-20 md:h-[88px]">

              {/* ── Logo ── */}
              <Link href="/" className="group relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative"
                >
                  <Image
                    src="/Logo/logo.png"
                    alt="Infra Developers"
                    width={210}
                    height={90}
                    className="h-14 md:h-[72px] w-auto object-contain"
                    priority
                  />
                  <div
                    className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                    style={{
                      background: "linear-gradient(90deg, #C0392B, #F4B400)",
                    }}
                  />
                </motion.div>
              </Link>

              {/* ── Desktop Nav ── */}
              <nav className="hidden md:flex items-center justify-center gap-0.5">
                {navItems.map((item) => {
                  const active = isActive(item.path);

                  // ── Services item with dropdown ──
                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.name}
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={() => {
                          setServicesOpen(true);
                          setActiveHover(item.name);
                        }}
                        onMouseLeave={() => {
                          setServicesOpen(false);
                          setActiveHover(null);
                        }}
                      >
                        {/* Services trigger — also navigates to /services */}
                        <Link
                          href={item.path}
                          className="relative flex items-center gap-1 px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 group"
                          style={{
                            color: active ? "#C0392B" : "#2C2C2C",
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                          onClick={() => setServicesOpen(false)}
                        >
                          {/* Hover bg */}
                          {activeHover === item.name && !active && (
                            <motion.div
                              layoutId="hoverBg"
                              className="absolute inset-0"
                              style={{
                                backgroundColor: "rgba(192,57,43,0.05)",
                              }}
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 35,
                              }}
                            />
                          )}
                          {/* Active bg */}
                          {active && (
                            <motion.div
                              layoutId="activeBg"
                              className="absolute inset-0"
                              style={{
                                backgroundColor: "rgba(192,57,43,0.08)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}

                          <span className="relative z-10">{item.name}</span>

                          {/* Animated chevron */}
                          <motion.div
                            className="relative z-10"
                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown
                              size={14}
                              style={{
                                color: active ? "#C0392B" : "#2C2C2C",
                              }}
                            />
                          </motion.div>

                          {/* Active bottom bar */}
                          {active && (
                            <motion.div
                              layoutId="activeBar"
                              className="absolute bottom-0 left-3 right-3 h-[2px]"
                              style={{ backgroundColor: "#C0392B" }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}
                          {/* Hover bottom bar */}
                          {!active && (
                            <div
                              className="absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                              style={{ backgroundColor: "#F4B400" }}
                            />
                          )}
                        </Link>

                        {/* ── Dropdown Panel ── */}
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.97 }}
                              transition={{
                                duration: 0.2,
                                ease: "easeOut",
                              }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] z-50"
                              style={{
                                filter:
                                  "drop-shadow(0 20px 40px rgba(192,57,43,0.15))",
                              }}
                            >
                              {/* Arrow pointer */}
                              <div
                                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                                style={{
                                  backgroundColor: "#ffffff",
                                  border: "1px solid rgba(192,57,43,0.15)",
                                  borderBottom: "none",
                                  borderRight: "none",
                                }}
                              />

                              <div
                                className="relative overflow-hidden"
                                style={{
                                  backgroundColor: "#ffffff",
                                  border: "1px solid rgba(192,57,43,0.15)",
                                  boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(192,57,43,0.1)",
                                }}
                              >
                                {/* Dropdown header */}
                                <div
                                  className="px-5 py-3 flex items-center justify-between"
                                  style={{
                                    background:
                                      "linear-gradient(110deg, #1a0a08 0%, #2C0E09 100%)",
                                    borderBottom:
                                      "2px solid #C0392B",
                                  }}
                                >
                                  <div className="flex items-center gap-2">
                                    <Wrench
                                      size={14}
                                      style={{ color: "#F4B400" }}
                                    />
                                    <span
                                      className="text-xs font-black uppercase tracking-widest"
                                      style={{ color: "#ffffff" }}
                                    >
                                      Our Services
                                    </span>
                                  </div>
                                  <Link
                                    href="/services"
                                    className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 hover:gap-2"
                                    style={{ color: "#F4B400" }}
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    View All
                                    <ArrowRight size={10} />
                                  </Link>
                                </div>

                                {/* Service grid */}
                                <div className="grid grid-cols-2 gap-0">
                                  {serviceItems.map((service, idx) => {
                                    const ServiceIcon = service.icon;
                                    const serviceActive = pathname.startsWith(
                                      service.path
                                    );
                                    return (
                                      <Link
                                        key={idx}
                                        href={service.path}
                                        onClick={() => setServicesOpen(false)}
                                        className="flex items-start gap-3 px-4 py-3.5 group/item transition-all duration-200 relative"
                                        style={{
                                          backgroundColor: serviceActive
                                            ? "rgba(192,57,43,0.06)"
                                            : "transparent",
                                          borderLeft: serviceActive
                                            ? "2px solid #C0392B"
                                            : "2px solid transparent",
                                        }}
                                        onMouseEnter={(e) => {
                                          if (!serviceActive)
                                            (
                                              e.currentTarget as HTMLElement
                                            ).style.backgroundColor =
                                              "rgba(192,57,43,0.04)";
                                        }}
                                        onMouseLeave={(e) => {
                                          if (!serviceActive)
                                            (
                                              e.currentTarget as HTMLElement
                                            ).style.backgroundColor =
                                              "transparent";
                                        }}
                                      >
                                        {/* Thin separator lines */}
                                        {idx % 2 === 0 && idx !== 0 && (
                                          <div
                                            className="absolute top-0 left-0 right-0 h-px"
                                            style={{
                                              backgroundColor:
                                                "rgba(0,0,0,0.05)",
                                            }}
                                          />
                                        )}
                                        {idx % 2 !== 0 && (
                                          <div
                                            className="absolute top-0 left-0 right-0 h-px"
                                            style={{
                                              backgroundColor:
                                                "rgba(0,0,0,0.05)",
                                            }}
                                          />
                                        )}

                                        {/* Icon box */}
                                        <div
                                          className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover/item:scale-110"
                                          style={{
                                            backgroundColor: serviceActive
                                              ? "rgba(192,57,43,0.12)"
                                              : "rgba(192,57,43,0.07)",
                                          }}
                                        >
                                          <ServiceIcon
                                            size={14}
                                            style={{
                                              color: serviceActive
                                                ? "#C0392B"
                                                : "#C0392B",
                                            }}
                                          />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                          <p
                                            className="text-sm font-bold leading-tight truncate transition-colors duration-200 group-hover/item:text-[#C0392B]"
                                            style={{
                                              color: serviceActive
                                                ? "#C0392B"
                                                : "#2C2C2C",
                                              fontFamily:
                                                "'Montserrat', sans-serif",
                                            }}
                                          >
                                            {service.name}
                                          </p>
                                          <p
                                            className="text-[11px] mt-0.5 truncate"
                                            style={{
                                              color: "rgba(44,44,44,0.5)",
                                            }}
                                          >
                                            {service.desc}
                                          </p>
                                        </div>

                                        <ChevronRight
                                          size={12}
                                          className="flex-shrink-0 mt-1 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-200"
                                          style={{ color: "#C0392B" }}
                                        />
                                      </Link>
                                    );
                                  })}
                                </div>

                                {/* Dropdown footer CTA */}
                                <div
                                  className="px-5 py-3 flex items-center justify-between"
                                  style={{
                                    backgroundColor: "rgba(192,57,43,0.04)",
                                    borderTop:
                                      "1px solid rgba(192,57,43,0.1)",
                                  }}
                                >
                                  <p
                                    className="text-xs"
                                    style={{
                                      color: "rgba(44,44,44,0.5)",
                                    }}
                                  >
                                    Not sure what you need?
                                  </p>
                                  <Link
                                    href="/contact"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
                                    style={{
                                      backgroundColor: "#C0392B",
                                      color: "#ffffff",
                                    }}
                                    onMouseEnter={(e) => {
                                      (
                                        e.currentTarget as HTMLElement
                                      ).style.backgroundColor = "#F4B400";
                                      (
                                        e.currentTarget as HTMLElement
                                      ).style.color = "#2C2C2C";
                                    }}
                                    onMouseLeave={(e) => {
                                      (
                                        e.currentTarget as HTMLElement
                                      ).style.backgroundColor = "#C0392B";
                                      (
                                        e.currentTarget as HTMLElement
                                      ).style.color = "#ffffff";
                                    }}
                                  >
                                    <HardHat size={10} />
                                    Free Consultation
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // ── Regular nav item ──
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onMouseEnter={() => setActiveHover(item.name)}
                      onMouseLeave={() => setActiveHover(null)}
                      className="relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 group"
                      style={{
                        color: active ? "#C0392B" : "#2C2C2C",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {activeHover === item.name && !active && (
                        <motion.div
                          layoutId="hoverBg"
                          className="absolute inset-0"
                          style={{ backgroundColor: "rgba(192,57,43,0.05)" }}
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}
                      {active && (
                        <motion.div
                          layoutId="activeBg"
                          className="absolute inset-0"
                          style={{ backgroundColor: "rgba(192,57,43,0.08)" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                      {active && (
                        <motion.div
                          layoutId="activeBar"
                          className="absolute bottom-0 left-3 right-3 h-[2px]"
                          style={{ backgroundColor: "#C0392B" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      {!active && (
                        <div
                          className="absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                          style={{ backgroundColor: "#F4B400" }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* ── RIGHT: CTA Group ── */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="tel:+918790806677"
                  className="group flex items-center gap-2.5 transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(192,57,43,0.08)",
                      border: "1px solid rgba(192,57,43,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#C0392B";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "rgba(192,57,43,0.08)";
                    }}
                  >
                    <Phone
                      size={14}
                      style={{ color: "#C0392B" }}
                      className="group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-widest font-bold"
                      style={{ color: "rgba(44,44,44,0.45)" }}
                    >
                      Call Us
                    </p>
                    <p
                      className="text-sm font-black tracking-wide leading-none transition-colors duration-300 group-hover:text-[#C0392B]"
                      style={{
                        color: "#2C2C2C",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      +91 87908 06677
                    </p>
                  </div>
                </a>

                <div
                  className="w-px h-10 self-center"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(192,57,43,0.2), transparent)",
                  }}
                />

                <Link href="/contact" className="group relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest overflow-hidden"
                    style={{
                      backgroundColor: "#C0392B",
                      color: "#ffffff",
                      fontFamily: "'Montserrat', sans-serif",
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      boxShadow: "4px 4px 0px #8E1B0E",
                    }}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none" />
                    <HardHat size={13} className="flex-shrink-0" />
                    <span>Free Quote</span>
                    <ChevronRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: "0 8px 25px rgba(192,57,43,0.4)" }}
                  />
                </Link>
              </div>

              {/* ── Mobile Hamburger ── */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative z-50 w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300 focus:outline-none"
                whileTap={{ scale: 0.92 }}
                style={{
                  backgroundColor: mobileMenuOpen ? "#C0392B" : "transparent",
                  border: `1.5px solid ${
                    mobileMenuOpen ? "#C0392B" : "rgba(192,57,43,0.3)"
                  }`,
                }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={18} color="#ffffff" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={18} color="#C0392B" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </header>
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-30"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", top: "72px" }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-sm flex flex-col"
              style={{
                backgroundColor: "#ffffff",
                top: "72px",
                borderLeft: "3px solid #C0392B",
              }}
            >
              <div
                className="h-[3px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #C0392B 0%, #F4B400 50%, #C0392B 100%)",
                }}
              />

              {/* Brand strip */}
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{
                  backgroundColor: "#1a0a08",
                  borderBottom: "1px solid rgba(192,57,43,0.2)",
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#C0392B" }}
                >
                  <Building2 size={16} color="#ffffff" />
                </div>
                <div>
                  <p
                    className="text-sm font-black uppercase tracking-widest"
                    style={{
                      color: "#ffffff",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Infra Developers
                  </p>
                  <p
                    className="text-[9px] uppercase tracking-[3px]"
                    style={{ color: "#F4B400" }}
                  >
                    Building the Future
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span
                    className="text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Open
                  </span>
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto py-4">
                {navItems.map((item, idx) => {
                  const active = isActive(item.path);

                  // ── Services with accordion ──
                  if (item.hasDropdown) {
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.07,
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                      >
                        {/* Services row */}
                        <div
                          className="flex items-center"
                          style={{
                            backgroundColor: active
                              ? "rgba(192,57,43,0.06)"
                              : "transparent",
                            borderLeft: active
                              ? "3px solid #C0392B"
                              : "3px solid transparent",
                          }}
                        >
                          {/* Navigate to /services */}
                          <Link
                            href={item.path}
                            className="flex-1 px-6 py-4 transition-all duration-200"
                          >
                            <span
                              className="text-base font-bold tracking-wide"
                              style={{
                                color: active ? "#C0392B" : "#2C2C2C",
                                fontFamily: "'Montserrat', sans-serif",
                              }}
                            >
                              {item.name}
                            </span>
                          </Link>

                          {/* Toggle accordion */}
                          <button
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                            className="px-4 py-4 flex items-center justify-center transition-all duration-200"
                            style={{
                              borderLeft:
                                "1px solid rgba(192,57,43,0.12)",
                            }}
                          >
                            <motion.div
                              animate={{
                                rotate: mobileServicesOpen ? 180 : 0,
                              }}
                              transition={{ duration: 0.25 }}
                            >
                              <ChevronDown
                                size={16}
                                style={{
                                  color: active ? "#C0392B" : "#2C2C2C",
                                }}
                              />
                            </motion.div>
                          </button>
                        </div>

                        {/* Accordion sub-items */}
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeInOut" }}
                              className="overflow-hidden"
                              style={{
                                backgroundColor: "rgba(192,57,43,0.02)",
                                borderLeft: "3px solid rgba(192,57,43,0.15)",
                              }}
                            >
                              {/* Sub-header */}
                              <div
                                className="flex items-center justify-between px-6 py-2"
                                style={{
                                  borderBottom:
                                    "1px solid rgba(192,57,43,0.08)",
                                }}
                              >
                                <span
                                  className="text-[9px] uppercase tracking-widest font-bold"
                                  style={{ color: "rgba(44,44,44,0.4)" }}
                                >
                                  All Services
                                </span>
                                <Link
                                  href="/services"
                                  className="text-[9px] uppercase tracking-widest font-bold flex items-center gap-1"
                                  style={{ color: "#C0392B" }}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  View All
                                  <ArrowRight size={9} />
                                </Link>
                              </div>

                              {serviceItems.map((service, sIdx) => {
                                const ServiceIcon = service.icon;
                                const serviceActive = pathname.startsWith(
                                  service.path
                                );
                                return (
                                  <Link
                                    key={sIdx}
                                    href={service.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-3 transition-all duration-200"
                                    style={{
                                      backgroundColor: serviceActive
                                        ? "rgba(192,57,43,0.06)"
                                        : "transparent",
                                      borderBottom:
                                        "1px solid rgba(0,0,0,0.04)",
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!serviceActive)
                                        (
                                          e.currentTarget as HTMLElement
                                        ).style.backgroundColor =
                                          "rgba(192,57,43,0.04)";
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!serviceActive)
                                        (
                                          e.currentTarget as HTMLElement
                                        ).style.backgroundColor = "transparent";
                                    }}
                                  >
                                    <div
                                      className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                                      style={{
                                        backgroundColor: "rgba(192,57,43,0.08)",
                                      }}
                                    >
                                      <ServiceIcon
                                        size={12}
                                        style={{ color: "#C0392B" }}
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p
                                        className="text-sm font-semibold leading-tight"
                                        style={{
                                          color: serviceActive
                                            ? "#C0392B"
                                            : "#2C2C2C",
                                          fontFamily: "'Montserrat', sans-serif",
                                        }}
                                      >
                                        {service.name}
                                      </p>
                                      <p
                                        className="text-[10px] mt-0.5"
                                        style={{
                                          color: "rgba(44,44,44,0.45)",
                                        }}
                                      >
                                        {service.desc}
                                      </p>
                                    </div>
                                    <ChevronRight
                                      size={12}
                                      style={{
                                        color: serviceActive
                                          ? "#C0392B"
                                          : "rgba(44,44,44,0.25)",
                                      }}
                                    />
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div
                          className="mx-6 h-px"
                          style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                        />
                      </motion.div>
                    );
                  }

                  // ── Regular mobile nav item ──
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.07,
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                    >
                      <Link
                        href={item.path}
                        className="flex items-center justify-between px-6 py-4 transition-all duration-200 group"
                        style={{
                          backgroundColor: active
                            ? "rgba(192,57,43,0.06)"
                            : "transparent",
                          borderLeft: active
                            ? "3px solid #C0392B"
                            : "3px solid transparent",
                        }}
                        onMouseEnter={(e) => {
                          if (!active)
                            (
                              e.currentTarget as HTMLElement
                            ).style.backgroundColor = "rgba(192,57,43,0.03)";
                        }}
                        onMouseLeave={(e) => {
                          if (!active)
                            (
                              e.currentTarget as HTMLElement
                            ).style.backgroundColor = "transparent";
                        }}
                      >
                        <span
                          className="text-base font-bold tracking-wide"
                          style={{
                            color: active ? "#C0392B" : "#2C2C2C",
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {active && (
                            <span
                              className="text-[9px] uppercase tracking-widest px-2 py-0.5 font-bold"
                              style={{
                                backgroundColor: "#C0392B",
                                color: "#ffffff",
                              }}
                            >
                              Active
                            </span>
                          )}
                          <ChevronRight
                            size={14}
                            style={{
                              color: active
                                ? "#C0392B"
                                : "rgba(44,44,44,0.3)",
                            }}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </div>
                      </Link>
                      <div
                        className="mx-6 h-px"
                        style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA Section */}
              <div
                className="p-5 space-y-3"
                style={{
                  borderTop: "1px solid rgba(192,57,43,0.12)",
                  backgroundColor: "#fafafa",
                }}
              >
                <motion.a
                  href="tel:+918790806677"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center justify-between w-full px-5 py-4 font-bold transition-all duration-300 active:scale-95"
                  style={{
                    backgroundColor: "#C0392B",
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
                    <Phone size={16} />
                    Call Now
                  </span>
                  <span className="text-sm font-medium opacity-80">
                    87908 06677
                  </span>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-between w-full px-5 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-95"
                    style={{
                      border: "2px solid #C0392B",
                      color: "#C0392B",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#C0392B";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#C0392B";
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Zap size={16} />
                      Free Quote
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-between items-center pt-2"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-[#F4B400] text-[#F4B400]"
                        />
                      ))}
                    </div>
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#2C2C2C" }}
                    >
                      4.9/5
                    </span>
                  </div>
                  <div
                    className="w-px h-3"
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(44,44,44,0.5)" }}
                  >
                    20+ Yrs Experience
                  </span>
                  <div
                    className="w-px h-3"
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(44,44,44,0.5)" }}
                  >
                    150+ Projects
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}