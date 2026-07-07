// "use client";

// import { motion } from "framer-motion";
// import { CheckCircle, Star, ArrowRight } from "lucide-react";

// // Your original package data, slightly adapted to fit the new card layout
// const packages = [
//   {
//     name: "Essential Home Package",
//     subtitle: "Essential",
//     price: "₹1,790",
//     unit: "/sq ft",
//     description:
//       "Perfect for budget-conscious homeowners wanting quality construction.",
//     features: [
//       "RCC frame structure",
//       "Basic finishing (cement plaster, flooring)",
//       "Standard electrical & plumbing",
//       "12 months warranty",
//       "Project management included",
//     ],
//     popular: false,
//     accent: "#C0392B", // used for subtitle color
//   },
//   {
//     name: "Smart Choice Package",
//     subtitle: "Smart Choice",
//     price: "₹2,190",
//     unit: "/sq ft",
//     description:
//       "Luxury finishes and premium materials for your dream home.",
//     features: [
//       "Earthquake-resistant design",
//       "Premium tiles, modular kitchen, false ceiling",
//       "Smart home pre-wiring",
//       "Landscaping & compound wall",
//       "24 months warranty",
//       "Interior design consultation",
//     ],
//     popular: true,
//     accent: "#F4B400",
//   },
//   {
//     name: "Elite Living Package",
//     subtitle: "Elite Living",
//     price: "Custom",
//     unit: "Quote",
//     description:
//       "Tailored solutions for offices, retail, and hospitality spaces.",
//     features: [
//       "Space planning & approvals",
//       "High-end finishes & branding integration",
//       "HVAC, fire safety, IT cabling",
//       "Furniture & partition works",
//       "Fast-track execution",
//       "Post-handover support",
//     ],
//     popular: false,
//     accent: "#C0392B",
//   },
// ];

// export default function Packages() {
//   return (
//     <section
//       className="py-24 bg-white relative overflow-hidden"
//       style={{ fontFamily: "'Montserrat', sans-serif" }}
//     >
//       {/* Background pattern (grid) */}
//       <div
//         className="absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Red geometric accent (bottom-left triangle) */}
//       <div className="absolute bottom-0 left-0 w-72 h-72 opacity-5">
//         <svg viewBox="0 0 200 200" fill="none">
//           <polygon points="0,200 200,200 0,0" fill="#C0392B" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 mb-4"
//           >
//             <div className="h-px w-8 bg-[#C0392B]" />
//             <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C0392B]">
//               Transparent Pricing
//             </span>
//             <div className="h-px w-8 bg-[#C0392B]" />
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-black text-[#2C2C2C]"
//           >
//             Construction{" "}
//             <span style={{ color: "#C0392B" }}>Packages</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mt-4 text-sm text-gray-500 max-w-lg mx-auto"
//             style={{ fontFamily: "'Open Sans', sans-serif" }}
//           >
//             Choose the right package for your dream build — all prices are
//             transparent with no hidden charges.
//           </motion.p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//           {packages.map((pkg, idx) => (
//             <motion.div
//               key={pkg.name}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.15 }}
//               className={`relative overflow-hidden ${
//                 pkg.popular ? "md:-mt-4 md:mb-4" : ""
//               }`}
//             >
//               {/* Popular ribbon (full width, top) */}
//               {pkg.popular && (
//                 <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
//                   <div
//                     className="px-6 py-1.5 text-xs font-black uppercase tracking-widest text-[#2C2C2C] flex items-center gap-1.5"
//                     style={{ background: "#F4B400" }}
//                   >
//                     <Star size={10} className="fill-current" />
//                     Most Popular
//                     <Star size={10} className="fill-current" />
//                   </div>
//                 </div>
//               )}

//               {/* Card body */}
//               <div
//                 className={`p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl ${
//                   pkg.popular
//                     ? "border-[#C0392B] pt-12 shadow-xl"
//                     : "border-gray-100 hover:border-[#C0392B]/30"
//                 }`}
//                 style={{
//                   background: pkg.popular
//                     ? "linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)"
//                     : "#fff",
//                 }}
//               >
//                 {/* Subtitle (accent color) */}
//                 <div
//                   className="mb-1 text-xs font-bold uppercase tracking-[0.25em]"
//                   style={{ color: pkg.accent }}
//                 >
//                   {pkg.subtitle}
//                 </div>

//                 {/* Title */}
//                 <h3
//                   className="text-2xl font-black mb-4"
//                   style={{ color: pkg.popular ? "#fff" : "#2C2C2C" }}
//                 >
//                   {pkg.name}
//                 </h3>

//                 {/* Price + unit */}
//                 <div className="flex items-end gap-1 mb-4">
//                   <span
//                     className="text-4xl font-black"
//                     style={{ color: pkg.popular ? "#F4B400" : "#C0392B" }}
//                   >
//                     {pkg.price}
//                   </span>
//                   <span
//                     className="text-sm font-medium pb-1"
//                     style={{
//                       color: pkg.popular
//                         ? "rgba(255,255,255,0.5)"
//                         : "#9ca3af",
//                     }}
//                   >
//                     {pkg.unit}
//                   </span>
//                 </div>

//                 {/* Description */}
//                 <p
//                   className="text-xs leading-relaxed mb-6 pb-6 border-b"
//                   style={{
//                     color: pkg.popular
//                       ? "rgba(255,255,255,0.6)"
//                       : "#6b7280",
//                     borderColor: pkg.popular
//                       ? "rgba(255,255,255,0.1)"
//                       : "#f3f4f6",
//                     fontFamily: "'Open Sans', sans-serif",
//                   }}
//                 >
//                   {pkg.description}
//                 </p>

//                 {/* Features list */}
//                 <ul className="space-y-3 mb-8">
//                   {pkg.features.map((feature) => (
//                     <li key={feature} className="flex items-start gap-2.5">
//                       <CheckCircle
//                         size={14}
//                         className="flex-shrink-0 mt-0.5"
//                         style={{
//                           color: pkg.popular ? "#F4B400" : "#C0392B",
//                         }}
//                       />
//                       <span
//                         className="text-xs leading-relaxed"
//                         style={{
//                           color: pkg.popular
//                             ? "rgba(255,255,255,0.8)"
//                             : "#374151",
//                           fontFamily: "'Open Sans', sans-serif",
//                         }}
//                       >
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA Button */}
//                 <button
//                   onClick={() =>
//                     document.getElementById("contact")?.scrollIntoView({
//                       behavior: "smooth",
//                     })
//                   }
//                   className="group w-full py-3.5 font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
//                   style={
//                     pkg.popular
//                       ? {
//                           background: "linear-gradient(135deg, #C0392B, #8E2B20)",
//                           color: "#fff",
//                         }
//                       : {
//                           background: "transparent",
//                           color: "#C0392B",
//                           border: "2px solid #C0392B",
//                         }
//                   }
//                   onMouseEnter={(e) => {
//                     if (!pkg.popular) {
//                       (e.currentTarget as HTMLButtonElement).style.background =
//                         "#C0392B";
//                       (e.currentTarget as HTMLButtonElement).style.color =
//                         "#fff";
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!pkg.popular) {
//                       (e.currentTarget as HTMLButtonElement).style.background =
//                         "transparent";
//                       (e.currentTarget as HTMLButtonElement).style.color =
//                         "#C0392B";
//                     }
//                   }}
//                 >
//                   Get Quote
//                   <ArrowRight
//                     size={14}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Disclaimer note */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center text-xs text-gray-400 mt-8"
//           style={{ fontFamily: "'Open Sans', sans-serif" }}
//         >
//           * Prices are indicative and may vary based on site conditions,
//           location, and specifications. Contact us for a precise quote.
//         </motion.p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // 👈 import router

// const packages = [
//   {
//     name: "Value Package",
//     subtitle: "Essential",
//     price: "₹1,790",
//     unit: "/sq ft",
//     description:
//       "Perfect for budget-conscious homeowners wanting quality construction.",
//     features: [
//       "RCC frame structure",
//       "Basic finishing (cement plaster, flooring)",
//       "Standard electrical & plumbing",
//       "12 months warranty",
//       "Project management included",
//     ],
//     popular: false,
//     accent: "#C0392B",
//   },
//   {
//     name: "Smart Choice Package",
//     subtitle: "Smart Choice",
//     price: "₹2,190",
//     unit: "/sq ft",
//     description:
//       "Luxury finishes and premium materials for your dream home.",
//     features: [
//       "Earthquake-resistant design",
//       "Premium tiles, modular kitchen, false ceiling",
//       "Smart home pre-wiring",
//       "Landscaping & compound wall",
//       "24 months warranty",
//       "Interior design consultation",
//     ],
//     popular: true,
//     accent: "#F4B400",
//   },
//   {
//     name: "Elite Living Package",
//     subtitle: "Elite Living",
//     price: "Custom",
//     unit: "Quote",
//     description:
//       "Tailored solutions for offices, retail, and hospitality spaces.",
//     features: [
//       "Space planning & approvals",
//       "High-end finishes & branding integration",
//       "HVAC, fire safety, IT cabling",
//       "Furniture & partition works",
//       "Fast-track execution",
//       "Post-handover support",
//     ],
//     popular: false,
//     accent: "#C0392B",
//   },
// ];

const packages = [
  {
    name: "Value Plus",
    subtitle: "Essential",
    price: "₹1,790",
    unit: "/sq ft",
    description:
      "Perfect for budget-conscious homeowners wanting quality construction.",
    features: [
      'Better tile selection',
      'Branded electricals and plumbing',
      'Improved doors & fittings',
      'Standard elevation finish',
      'Quality-focused specifications',
      "25 Years Structural Warranty",
      "3 Years Electrical & Plumbing Warranty",
      "Project Management Included",
    ],
    popular: false,
    accent: "#C0392B",
  },
  {
    name: "Smart Choice Package",
    subtitle: "Smart Choice",
    price: "₹1,990",
    unit: "/sq ft",
    description:
      "Luxury finishes and premium materials for your dream home.",
    features: [
      "Earthquake-Resistant Design",
      'Better sanitary fittings',
      'Enhanced elevation design',
      'Improved finishes',
      'Built for modern living',
      "Premium Tiles, Modular Kitchen & False Ceiling",
      "25 Years Structural Warranty",
      "3 Years Electrical & Plumbing Warranty",
      "Interior Design Consultation",
    ],
    popular: true,
    accent: "#F4B400",
  },
  {
    name: "Elite Living Package",
    subtitle: "Elite Living",
    price: "₹2,290",
    unit: "/sq ft",
    description:
      "A complete solution for premium villas and luxury residences.",
    features: [
      "Space Planning & Approvals",
      "High-End Finishes & Premium Brand Integration",
      'Designer elevation concepts',
      "Enhanced Lighting Provision",
      "Fast-Track Execution",
      "Post-Handover Support",
      "Premium False Ceiling",
      "Modular Kitchen",
      "Bedroom Wardrobes & TV Unit",
      'Style with durability',
      "25 Years Structural Warranty",
      "3 Years Electrical & Plumbing Warranty",
    ],
    popular: false,
    accent: "#C0392B",
  },
];
export default function Packages() {
  const router = useRouter(); // 👈 initialize router
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (pkgName: string) => {
    setExpanded((prev) => ({
      ...prev,
      [pkgName]: !prev[pkgName],
    }));
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Background pattern & accent – same as before */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
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
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C0392B]">
              Transparent Pricing
            </span>
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
            Choose the right package for your dream build — all prices are
            transparent with no hidden charges.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative overflow-hidden h-full flex flex-col ${pkg.popular ? "md:-mt-4 md:mb-4" : ""
                }`}
            >
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
                className={`p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${pkg.popular
                  ? "border-[#C0392B] pt-12 shadow-xl"
                  : "border-gray-100 hover:border-[#C0392B]/30"
                  }`}
                style={{
                  background: pkg.popular
                    ? "linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)"
                    : "#fff",
                }}
              >
                <div className="flex-grow flex flex-col">
                  <div
                    className="mb-1 text-xs font-bold uppercase tracking-[0.25em]"
                    style={{ color: pkg.accent }}
                  >
                    {pkg.subtitle}
                  </div>
                  <h3
                    className="text-2xl font-black mb-4"
                    style={{ color: pkg.popular ? "#fff" : "#2C2C2C" }}
                  >
                    {pkg.name}
                  </h3>

                  <div className="flex items-end gap-1 mb-4">
                    <span
                      className="text-4xl font-black"
                      style={{ color: pkg.popular ? "#F4B400" : "#C0392B" }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-sm font-medium pb-1"
                      style={{
                        color: pkg.popular
                          ? "rgba(255,255,255,0.5)"
                          : "#9ca3af",
                      }}
                    >
                      {pkg.unit}
                    </span>
                  </div>

                  <p
                    className="text-xs leading-relaxed mb-6 pb-6 border-b"
                    style={{
                      color: pkg.popular
                        ? "rgba(255,255,255,0.6)"
                        : "#6b7280",
                      borderColor: pkg.popular
                        ? "rgba(255,255,255,0.1)"
                        : "#f3f4f6",
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {(() => {
                      const limit = 5;
                      const hasMore = pkg.features.length > limit;
                      const isExpanded = !!expanded[pkg.name];
                      const displayedFeatures = isExpanded ? pkg.features : pkg.features.slice(0, limit);

                      return (
                        <>
                          {displayedFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5">
                              <CheckCircle
                                size={14}
                                className="flex-shrink-0 mt-0.5"
                                style={{
                                  color: pkg.popular ? "#F4B400" : "#C0392B",
                                }}
                              />
                              <span
                                className="text-xs leading-relaxed"
                                style={{
                                  color: pkg.popular
                                    ? "rgba(255,255,255,0.8)"
                                    : "#374151",
                                  fontFamily: "'Open Sans', sans-serif",
                                }}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                          {hasMore && (
                            <button
                              onClick={() => toggleExpand(pkg.name)}
                              className="mt-3 text-xs font-bold uppercase tracking-wider hover:underline focus:outline-none flex items-center gap-1 cursor-pointer transition-colors duration-200"
                              style={{ color: pkg.popular ? "#F4B400" : "#C0392B" }}
                            >
                              {isExpanded ? "- View Less" : `+ View More (${pkg.features.length - limit} more)`}
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </ul>
                </div>

                {/* BUTTON – now redirects to /contact */}
                <button
                  onClick={() => router.push("/contact")} // 👈 changed here
                  className="group w-full py-3.5 font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-6"
                  style={
                    pkg.popular
                      ? {
                        background: "linear-gradient(135deg, #C0392B, #8E2B20)",
                        color: "#fff",
                      }
                      : {
                        background: "transparent",
                        color: "#C0392B",
                        border: "2px solid #C0392B",
                      }
                  }
                  onMouseEnter={(e) => {
                    if (!pkg.popular) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#C0392B";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.popular) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#C0392B";
                    }
                  }}
                >
                  Get Quote {/* You can also use pkg.cta if you prefer */}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 mt-8"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          * Prices are indicative and may vary based on site conditions,
          location, and specifications. Contact us for a precise quote.
        </motion.p>
      </div>
    </section>
  );
}