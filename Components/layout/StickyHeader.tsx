// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Phone } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function StickyHeader() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -100, opacity: 0 }}
//           className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 py-3"
//         >
//           <div className="container-custom flex justify-between items-center">
//             <Link href="/" className="text-xl font-bold">
//               <span className="text-primary">Tripura</span> Infra
//             </Link>
//             <div className="flex gap-3">
//               <Button asChild variant="outline" className="border-primary text-primary">
//                 <Link href="tel:+918790806677">
//                   <Phone className="w-4 h-4 mr-2" /> Call Now
//                 </Link>
//               </Button>
//               <Button asChild className="bg-primary">
//                 <Link href="/contact">Free Consultation</Link>
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Starter",
    subtitle: "Basic Package",
    price: "₹1,400",
    unit: "/ sq ft",
    description: "Ideal for budget-conscious residential builds with essential quality finishes.",
    features: [
      "Standard brick & mortar construction",
      "Basic electrical & plumbing",
      "Standard flooring (tiles)",
      "1-coat exterior paint",
      "Basic door & window frames",
      "6-month post-construction support",
    ],
    notIncluded: ["Premium fittings", "Interior design", "Landscaping"],
    popular: false,
    color: "#2C2C2C",
    accent: "#6b7280",
  },
  {
    name: "Premium",
    subtitle: "Most Popular",
    price: "₹1,850",
    unit: "/ sq ft",
    description: "Our best-selling package combining quality, aesthetics, and value.",
    features: [
      "RCC frame structure with ISI cement",
      "Premium electrical & plumbing",
      "Vitrified tile flooring",
      "2-coat premium paint (interior & exterior)",
      "Branded doors & UPVC windows",
      "Modular kitchen setup",
      "2-year post-construction warranty",
      "Dedicated project manager",
    ],
    notIncluded: ["Full interior design", "Landscaping"],
    popular: true,
    color: "#C0392B",
    accent: "#F4B400",
  },
  {
    name: "Luxury",
    subtitle: "Elite Package",
    price: "₹2,500",
    unit: "/ sq ft",
    description: "Premium end-to-end construction with luxury finishes and full interior design.",
    features: [
      "Premium RCC structure with M30 grade concrete",
      "Smart home electrical systems",
      "Italian marble / hardwood flooring",
      "Designer paint & wall textures",
      "Imported doors & windows",
      "Full modular kitchen & wardrobes",
      "Full interior design included",
      "Landscaping & outdoor design",
      "5-year comprehensive warranty",
    ],
    notIncluded: [],
    popular: false,
    color: "#1a1a1a",
    accent: "#F4B400",
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Red geometric accent */}
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-5">
        <svg viewBox="0 0 200 200" fill="none">
          <polygon points="0,200 200,200 0,0" fill="#C0392B" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-[#C0392B]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C0392B]">Transparent Pricing</span>
            <div className="h-px w-8 bg-[#C0392B]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#2C2C2C]"
          >
            Construction{" "}
            <span style={{ color: "#C0392B" }}>Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-gray-500 max-w-lg mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Choose the right package for your dream build — all prices are transparent with no hidden charges.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative overflow-hidden ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular ribbon */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
                  <div
                    className="px-6 py-1.5 text-xs font-black uppercase tracking-widest text-[#2C2C2C] flex items-center gap-1.5"
                    style={{ background: "#F4B400" }}
                  >
                    <Star size={10} className="fill-current" />
                    Most Popular
                    <Star size={10} className="fill-current" />
                  </div>
                </div>
              )}

              <div
                className={`p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-[#C0392B] pt-12 shadow-xl"
                    : "border-gray-100 hover:border-[#C0392B]/30"
                }`}
                style={{ background: pkg.popular ? "linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)" : "#fff" }}
              >
                {/* Package name */}
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: pkg.accent }}>
                  {pkg.subtitle}
                </div>
                <h3
                  className="text-2xl font-black mb-4"
                  style={{ color: pkg.popular ? "#fff" : "#2C2C2C" }}
                >
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-black" style={{ color: pkg.popular ? "#F4B400" : "#C0392B" }}>
                    {pkg.price}
                  </span>
                  <span
                    className="text-sm font-medium pb-1"
                    style={{ color: pkg.popular ? "rgba(255,255,255,0.5)" : "#9ca3af" }}
                  >
                    {pkg.unit}
                  </span>
                </div>

                <p
                  className="text-xs leading-relaxed mb-6 pb-6 border-b"
                  style={{
                    color: pkg.popular ? "rgba(255,255,255,0.6)" : "#6b7280",
                    borderColor: pkg.popular ? "rgba(255,255,255,0.1)" : "#f3f4f6",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: pkg.popular ? "#F4B400" : "#C0392B" }} />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: pkg.popular ? "rgba(255,255,255,0.8)" : "#374151", fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group w-full py-3.5 font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={
                    pkg.popular
                      ? { background: "linear-gradient(135deg, #C0392B, #8E2B20)", color: "#fff" }
                      : { background: "transparent", color: "#C0392B", border: "2px solid #C0392B" }
                  }
                  onMouseEnter={(e) => {
                    if (!pkg.popular) {
                      (e.currentTarget as HTMLButtonElement).style.background = "#C0392B";
                      (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.popular) {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color = "#C0392B";
                    }
                  }}
                >
                  Get Started
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 mt-8"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          * Prices are indicative and may vary based on site conditions, location, and specifications. Contact us for a precise quote.
        </motion.p>
      </div>
    </section>
  );
}
