// // import Link from 'next/link';
// // import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// // export default function Footer() {
// //   return (
// //     <footer className="bg-dark text-gray-300 pt-16 pb-8">
// //       <div className="container-custom">
// //         <div className="grid md:grid-cols-4 gap-8 mb-12">
// //           <div>
// //             <h3 className="text-2xl font-bold text-white mb-4">
// //               Tripura<span className="text-primary"> Infra</span>
// //             </h3>
// //             <p className="text-sm">
// //               Building Hyderabad's future with trust, quality, and on-time delivery since 2004.
// //             </p>
// //           </div>
// //           <div>
// //             <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
// //             <ul className="space-y-2">
// //               <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
// //               <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
// //               <li><Link href="/projects" className="hover:text-primary transition">Projects</Link></li>
// //               <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
// //             <ul className="space-y-2 text-sm">
// //               <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1" /> 10-528/1/A/1, Road No 11, Nagaram, Hyderabad - 500083</li>
// //               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <Link href="tel:+918790806677">+91 87908 06677</Link></li>
// //               <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> tripurainfradevelopers@gmail.com</li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
// //             <div className="flex gap-4">
// //               <Link href="#" className="hover:text-primary transition"><Facebook /></Link>
// //               <Link href="#" className="hover:text-primary transition"><Instagram /></Link>
// //               <Link href="#" className="hover:text-primary transition"><Linkedin /></Link>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="border-t border-gray-800 pt-8 text-center text-sm">
// //           © {new Date().getFullYear()} Tripura Infra Developers. All rights reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// import Link from "next/link";
// import { Phone, Mail, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="section-dark pt-20 pb-10">
      
//       {/* TOP CTA STRIP */}
//       <div className="container-custom mb-16">
//         <div className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <h3 className="text-2xl md:text-3xl font-semibold text-white">
//               Ready to Build Your Dream Project?
//             </h3>
//             <p className="text-white/80 mt-2">
//               Get a free consultation from our experts today.
//             </p>
//           </div>

//           <div className="flex gap-4">
//             <a href="tel:+918790806677" className="btn-accent">
//               Call Now
//             </a>
//             <a href="/contact" className="btn-glass">
//               Get Quote
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* BRAND */}
//         <div>
//           <h2 className="text-xl font-bold text-white">
//             Tripura Infra Developers
//           </h2>
//           <div className="divider-gold"></div>

//           <p className="text-gray-400 text-sm leading-relaxed">
//             With 20+ years of excellence in construction, we deliver high-quality
//             residential, commercial, and industrial projects with precision,
//             trust, and on-time completion.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//           <div className="flex flex-col gap-3 text-sm text-gray-400">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <Link href="/about" className="hover:text-white transition">About</Link>
//             <Link href="/services" className="hover:text-white transition">Services</Link>
//             <Link href="/projects" className="hover:text-white transition">Projects</Link>
//             <Link href="/contact" className="hover:text-white transition">Contact</Link>
//           </div>
//         </div>

//         {/* SERVICES */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Services</h4>
//           <div className="flex flex-col gap-3 text-sm text-gray-400">
//             <p>Residential Construction</p>
//             <p>Commercial Construction</p>
//             <p>Industrial Projects</p>
//             <p>Interior Design</p>
//             <p>Project Management</p>
//           </div>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Contact</h4>

//           <div className="flex flex-col gap-4 text-sm text-gray-400">

//             <a
//               href="tel:+918790806677"
//               className="flex items-start gap-3 hover:text-white transition"
//             >
//               <Phone size={16} className="mt-1" />
//               +91 87908 06677
//             </a>

//             <a
//               href="mailto:tripurainfradevelopers@gmail.com"
//               className="flex items-start gap-3 hover:text-white transition"
//             >
//               <Mail size={16} className="mt-1" />
//               tripurainfradevelopers@gmail.com
//             </a>

//             <a
//               href="https://www.google.com/maps?q=17.4840404,78.6154011"
//               target="_blank"
//               className="flex items-start gap-3 hover:text-white transition"
//             >
//               <MapPin size={16} className="mt-1" />
//               Nagaram, Hyderabad
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="container-custom mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
//         <p>
//           © {new Date().getFullYear()} Tripura Infra Developers. All rights reserved.
//         </p>

//         <div className="flex gap-6">
//           <Link href="#" className="hover:text-white">Privacy Policy</Link>
//           <Link href="#" className="hover:text-white">Terms</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button after scrolling down
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

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#d4af37] text-black rounded-full shadow-lg hover:bg-[#f5d97b] transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <footer className="bg-[#05070d] border-t border-white/10">
        {/* Gold Gradient Top Border */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        <div className="container-custom py-12 md:py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="group inline-block">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors">
                  Tripura Infra
                </h3>
                <span className="text-[10px] text-gray-400 tracking-[2px] uppercase block mt-1">
                  Developers
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building dreams with precision and excellence. Over 20 years of delivering premium construction solutions across India.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4af37]"></span>
              </h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4af37]"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  "Residential Construction",
                  "Commercial Buildings",
                  "Interior Design",
                  "Renovation & Remodeling",
                  "Project Management",
                  "Consultation"
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4af37]"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Phone size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
                  <a href="tel:+918790806677" className="hover:text-white transition-colors">
                    +91 87908 06677
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
                  <a href="mailto:info@tripurainfra.com" className="hover:text-white transition-colors">
                    info@tripurainfra.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    Tripura Infra Developers Pvt. Ltd.<br />
                    Agartala, Tripura, India
                  </span>
                </li>
              </ul>

              {/* Optional: Small CTA */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5d97b] text-sm font-medium transition-colors group"
                >
                  Get a Free Quote
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Tripura Infra Developers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-[#d4af37] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#d4af37] transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-[#d4af37] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}