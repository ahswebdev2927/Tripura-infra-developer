

// "use client";

// import Link from "next/link";
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   Linkedin,
//   ArrowUp
// } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function Footer() {
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* Back to Top Button – uses primary gradient with gold hover accent */}
//       {showBackToTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
//           style={{
//             background: "linear-gradient(135deg, #f4511e, #d84315)",
//             color: "#ffffff",
//             boxShadow: "0 10px 25px rgba(216,67,21,0.4)",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "linear-gradient(135deg, #fde68a, #fbbf24)";
//             e.currentTarget.style.color = "#000000";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "linear-gradient(135deg, #f4511e, #d84315)";
//             e.currentTarget.style.color = "#ffffff";
//           }}
//           aria-label="Back to top"
//         >
//           <ArrowUp size={24} />
//         </button>
//       )}

//       <footer
//         style={{
//           backgroundColor: "#05070d",
//           borderTop: "1px solid rgba(255,255,255,0.08)",
//         }}
//       >
//         {/* Gold Gradient Top Border – using accent */}
//         <div
//           className="h-[2px] w-full"
//           style={{
//             background: "linear-gradient(to right, transparent, #fbbf24, transparent)",
//           }}
//         />

//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 md:py-16">
//           {/* Main Footer Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
//             {/* Company Info */}
//             <div className="space-y-4">
//               <Link href="/" className="group inline-block">
//                 <h3
//                   className="text-xl font-bold tracking-wide transition-colors group-hover:text-[#fbbf24]"
//                   style={{ color: "#ffffff" }}
//                 >
//                   Tripura Infra
//                 </h3>
//                 <span
//                   className="text-[10px] tracking-[2px] uppercase block mt-1"
//                   style={{ color: "#9ca3af" }}
//                 >
//                   Developers
//                 </span>
//               </Link>
//               <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
//                 Building dreams with precision and excellence. Over 20 years of delivering premium construction solutions across India.
//               </p>
//               <div className="flex space-x-4 pt-2">
//                 {[
//                   { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
//                   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//                   { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
//                   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//                 ].map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="transition-colors"
//                     style={{ color: "#9ca3af" }}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
//                     aria-label={social.label}
//                   >
//                     <social.icon size={18} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
//                 Quick Links
//                 <span
//                   className="absolute -bottom-2 left-0 w-8 h-[2px]"
//                   style={{ backgroundColor: "#fbbf24" }}
//                 />
//               </h4>
//               <ul className="space-y-3">
//                 {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
//                   <li key={item}>
//                     <Link
//                       href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                       className="text-sm flex items-center group"
//                       style={{ color: "#9ca3af" }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
//                     >
//                       <span
//                         className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
//                         style={{ color: "#fbbf24" }}
//                       >
//                         →
//                       </span>
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
//                 Our Services
//                 <span
//                   className="absolute -bottom-2 left-0 w-8 h-[2px]"
//                   style={{ backgroundColor: "#fbbf24" }}
//                 />
//               </h4>
//               <ul className="space-y-3">
//                 {[
//                   "Residential Construction",
//                   "Commercial Buildings",
//                   "Interior Design",
//                   "Renovation & Remodeling",
//                   "Project Management",
//                   "Consultation"
//                 ].map((service) => (
//                   <li key={service}>
//                     <Link
//                       href="/services"
//                       className="text-sm flex items-center group"
//                       style={{ color: "#9ca3af" }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
//                     >
//                       <span
//                         className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
//                         style={{ color: "#fbbf24" }}
//                       >
//                         →
//                       </span>
//                       {service}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
//                 Get in Touch
//                 <span
//                   className="absolute -bottom-2 left-0 w-8 h-[2px]"
//                   style={{ backgroundColor: "#fbbf24" }}
//                 />
//               </h4>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3 text-sm" style={{ color: "#9ca3af" }}>
//                   <Phone size={16} className="shrink-0 mt-0.5" style={{ color: "#fbbf24" }} />
//                   <a
//                     href="tel:+918790806677"
//                     className="hover:text-white transition-colors"
//                     style={{ color: "#9ca3af" }}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
//                   >
//                     +91 87908 06677
//                   </a>
//                 </li>
//                 <li className="flex items-start gap-3 text-sm" style={{ color: "#9ca3af" }}>
//                   <Mail size={16} className="shrink-0 mt-0.5" style={{ color: "#fbbf24" }} />
//                   <a
//                     href="mailto:info@tripurainfradevelopers.com"
//                     className="hover:text-white transition-colors"
//                     style={{ color: "#9ca3af" }}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
//                   >
//                     info@tripurainfradevelopers.com
//                   </a>
//                 </li>
//                 <li className="flex items-start gap-3 text-sm" style={{ color: "#9ca3af" }}>
//                   <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#fbbf24" }} />
//                   <span>
//                     Tripura Infra Developers Pvt. Ltd.<br />
//                     Agartala, Tripura, India
//                   </span>
//                 </li>
//               </ul>

//               {/* CTA – uses primary red-orange gradient for emphasis */}
//               <div className="mt-6">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 text-sm font-medium transition-colors group"
//                   style={{ color: "#fbbf24" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#fde68a")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "#fbbf24")}
//                 >
//                   Get a Free Quote
//                   <span className="group-hover:translate-x-1 transition-transform">→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div
//             className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
//             style={{
//               borderTopColor: "rgba(255,255,255,0.08)",
//               color: "#6b7280",
//             }}
//           >
//             <p>
//               &copy; {new Date().getFullYear()} Tripura Infra Developers. All rights reserved.
//             </p>
//             <div className="flex gap-6">
//               {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
//                 <Link
//                   key={link}
//                   href={`/${link.toLowerCase().replace(/ /g, "-")}`}
//                   className="transition-colors"
//                   style={{ color: "#6b7280" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Send,
  Building2,
  HardHat,
  Home,
  Layers,
  Hammer,
  Truck,
  Shield,
  Wrench,
  Cpu
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };
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

  return (
    <>
      {/* ── Back to Top ── */}
      {/* {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          style={{
            backgroundColor: "#C0392B",
            color: "#ffffff",
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
            boxShadow: "0 8px 24px rgba(192,57,43,0.45)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F4B400";
            e.currentTarget.style.color = "#2C2C2C";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(244,180,0,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#C0392B";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(192,57,43,0.45)";
          }}
          aria-label="Back to top"
        >
          <ArrowUp
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      )} */}

      <footer
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {/* ── Diagonal Red Accent Strip ── */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(192,57,43,0.06) 0%, transparent 50%)",
          }}
        />

        {/* ── Top Border: Red → Gold → Red ── */}
        <div
          className="h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #C0392B 0%, #F4B400 50%, #C0392B 100%)",
          }}
        />

        {/* ── Blueprint Grid Overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(244,180,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(244,180,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Brand Banner Strip ── */}
        <div
          className="relative z-10 py-8 px-5 sm:px-8 lg:px-12"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo Block */}
            <Link href="/" className="group flex items-center gap-3">
              {/* <div
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: "#C0392B" }}
              >
                <Building2 size={20} color="#ffffff" />
              </div> */}
              <Image
                src="/Logo/logo.png"
                alt="Infra Developers"
                width={210}
                height={90}
                className="h-14 md:h-[72px] w-auto object-contain"
                priority
              />
              <div>
                <span
                  className="block text-lg font-black tracking-widest uppercase transition-colors duration-300 group-hover:text-[#F4B400]"
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "0.15em",
                  }}
                >
                  Tripura Infra
                </span>
                <span
                  className="block text-[9px] tracking-[4px] uppercase -mt-1"
                  style={{ color: "#F4B400" }}
                >
                  Developers
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p
              className="text-sm italic text-center md:text-right"
              style={{ color: "rgba(255,255,255,0.4)", maxWidth: "340px" }}
            >
              "Building Strong Foundations for the Future"
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex-shrink-0 px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#C0392B",
                color: "#ffffff",
                fontFamily: "'Montserrat', sans-serif",
              }}
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
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* ── Column 1: About ── */}
            <div className="space-y-5">
              <div>
                <h4
                  className="text-base font-black uppercase tracking-widest mb-1"
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Who We Are
                </h4>
                {/* Red underline with gold dot */}
                <div className="flex items-center gap-1">
                  <div
                    className="h-[2px] w-10"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                  <div
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ backgroundColor: "#F4B400" }}
                  />
                </div>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Established in{" "}
                <span style={{ color: "#F4B400" }} className="font-semibold">
                  2024
                </span>{" "}
                and backed by over{" "}
                <span style={{ color: "#F4B400" }} className="font-semibold">
                  20+ years
                </span>{" "}
                of rich industry expertise, <strong>Tripura Infra Developers</strong> delivers premium residential, commercial, and industrial construction solutions across Hyderabad.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {[
                  { num: "150+", label: "Projects" },
                  { num: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="px-3 py-2.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderLeft: "2px solid #C0392B",
                    }}
                  >
                    <span
                      className="block text-lg font-black"
                      style={{
                        color: "#F4B400",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {stat.num}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-1">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/tripurainfra", label: "Facebook" },
                  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Instagram, href: "https://www.instagram.com/tripura_infra/", label: "Instagram" },
                  // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#C0392B";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "#C0392B";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Column 2: Quick Links ── */}
            <div>
              <div className="mb-6">
                <h4
                  className="text-base font-black uppercase tracking-widest mb-1"
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Quick Links
                </h4>
                <div className="flex items-center gap-1">
                  <div
                    className="h-[2px] w-10"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                  <div
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ backgroundColor: "#F4B400" }}
                  />
                </div>
              </div>

              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Company Profile", href: "/company-profile" },
                  { label: "Services", href: "/services" },
                  { label: "Projects", href: "/projects" },
                  { label: "Careers", href: "/career" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2.5 text-sm transition-all duration-300"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#ffffff";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.5)";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "0px";
                      }}
                    >
                      <span
                        className="w-1 h-1 rotate-45 flex-shrink-0 transition-all duration-300 group-hover:w-2"
                        style={{ backgroundColor: "#C0392B" }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Services ── */}
            <div>
              <div className="mb-6">
                <h4
                  className="text-base font-black uppercase tracking-widest mb-1"
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Our Services
                </h4>
                <div className="flex items-center gap-1">
                  <div
                    className="h-[2px] w-10"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                  <div
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ backgroundColor: "#F4B400" }}
                  />
                </div>
              </div>

              {/* <ul className="space-y-2.5">
                {[
                  "Residential Construction",
                  "Commercial Buildings",
                  "Interior Design",
                  "Renovation & Remodeling",
                  "Project Management",
                  "Free Consultation",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="group flex items-center gap-2.5 text-sm transition-all duration-300"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#ffffff";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.5)";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "0px";
                      }}
                    >
                      <span
                        className="w-1 h-1 rotate-45 flex-shrink-0 transition-all duration-300 group-hover:w-2"
                        style={{ backgroundColor: "#F4B400" }}
                      />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul> */}
              <ul className="space-y-2.5">
                {serviceItems.map((service) => (
                  <li key={service.path}>
                    <Link
                      href={service.path}  // ✅ uses the actual path from data
                      className="group flex items-center gap-2.5 text-sm transition-all duration-300"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#ffffff";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                      }}
                    >
                      <span
                        className="w-1 h-1 rotate-45 flex-shrink-0 transition-all duration-300 group-hover:w-2"
                        style={{ backgroundColor: "#F4B400" }}
                      />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4: Contact + Newsletter ── */}
            <div>
              <div className="mb-6">
                <h4
                  className="text-base font-black uppercase tracking-widest mb-1"
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Get in Touch
                </h4>
                <div className="flex items-center gap-1">
                  <div
                    className="h-[2px] w-10"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                  <div
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ backgroundColor: "#F4B400" }}
                  />
                </div>
              </div>

              <ul className="space-y-4">
                {/* Phone */}
                <li>
                  <a
                    href="tel:+918790806677"
                    className="group flex items-start gap-3 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: "rgba(192,57,43,0.15)" }}
                    >
                      <Phone size={14} style={{ color: "#C0392B" }} />
                    </div>
                    <div>
                      <span
                        className="block text-[10px] uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        Call Us
                      </span>
                      <span
                        className="text-sm font-medium transition-colors duration-300 group-hover:text-white"
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        +91 87908 06677
                      </span>
                    </div>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:info@tripurainfradevelopers.com"
                    className="group flex items-start gap-3 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: "rgba(192,57,43,0.15)" }}
                    >
                      <Mail size={14} style={{ color: "#C0392B" }} />
                    </div>
                    <div>
                      <span
                        className="block text-[10px] uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        Email Us
                      </span>
                      <span
                        className="text-sm font-medium transition-colors duration-300 group-hover:text-white"
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        info@tripurainfradevelopers.com
                      </span>
                    </div>
                  </a>
                </li>

                {/* Address */}
                <li className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(192,57,43,0.15)" }}
                  >
                    <MapPin size={14} style={{ color: "#C0392B" }} />
                  </div>
                  <div>
                    <span
                      className="block text-[10px] uppercase tracking-widest mb-0.5"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Location
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                    >
                      10-528/1/A/1, Road No. 11, Satyanarayana Colony,
                      Nagaram, Medchal–Malkajgiri Mandal,
                      Hyderabad – 500083
                    </span>
                  </div>
                </li>
              </ul>

              {/* Newsletter */}
              {/* <div
                className="mt-6 p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: "2px solid #C0392B",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <HardHat size={13} style={{ color: "#F4B400" }} />
                  <p
                    className="text-[10px] uppercase tracking-widest font-bold"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Project Updates
                  </p>
                </div>
                {subscribed ? (
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "#F4B400" }}
                  >
                    ✓ Subscribed successfully!
                  </p>
                ) : (
                  <form onSubmit={handleNewsletter} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-3 py-2 text-xs outline-none transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                        fontFamily: "'Open Sans', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#C0392B";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "#C0392B",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#F4B400";
                        (e.currentTarget as HTMLElement).style.color =
                          "#2C2C2C";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#C0392B";
                        (e.currentTarget as HTMLElement).style.color =
                          "#ffffff";
                      }}
                    >
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div> */}
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="mt-14 relative">
            {/* Divider */}
            <div
              className="w-full h-px mb-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(192,57,43,0.6), rgba(244,180,0,0.6), rgba(192,57,43,0.6), transparent)",
              }}
            />

            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              {/* Copyright */}
              <div className="flex items-center gap-2">
                <div
                  className="w-1 h-4"
                  style={{ backgroundColor: "#C0392B" }}
                />
                <p
                  className="text-xs"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  &copy; 2024{" "}
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>
                    Tripura Infra Developers.
                  </span>{" "}
                  All Rights Reserved.
                </p>
              </div>

              {/* Bottom Links */}
              {/* <div className="flex items-center gap-1">
                {["Privacy Policy", "Terms of Service", "Sitemap"].map(
                  (link, i, arr) => (
                    <span key={link} className="flex items-center">
                      <Link
                        href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                        className="text-xs px-3 transition-all duration-300"
                        style={{
                          color: "rgba(255,255,255,0.35)",
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#F4B400";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.35)";
                        }}
                      >
                        {link}
                      </Link>
                      {i < arr.length - 1 && (
                        <span
                          className="w-px h-3"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.15)",
                          }}
                        />
                      )}
                    </span>
                  )
                )}
              </div> */}
            </div>

            {/* Made with tag */}
            <p
              className="text-center text-[10px] mt-6 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              Crafted with precision ·{" "}
              <span style={{ color: "rgba(192,57,43,0.5)" }}>
                Tripura Infra Developers
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}