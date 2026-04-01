// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Phone } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-ultra">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="hero-overlay absolute inset-0" />
//       </div>

//       <div className="container-custom relative z-10 text-center text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="mb-6">
//             Building Your Dream Spaces with{' '}
//             <span className="text-primary-soft bg-gradient-to-r from-primary-soft to-accent bg-clip-text text-transparent">
//               Trust & Precision
//             </span>
//           </h1>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-xl text-gray-300 max-w-2xl mx-auto mt-6"
//         >
//           20+ years of excellence | 100+ projects | On-time delivery guaranteed
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
//         >
//           <Link href="/contact" className="btn-accent">
//             Get Free Consultation →
//           </Link>
//           <Link href="tel:+918790806677" className="btn-glass inline-flex items-center gap-2">
//             <Phone className="w-4 h-4" /> Call Now
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-16 flex gap-8 justify-center text-sm text-gray-400"
//         >
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-accent rounded-full" />
//             <span>20+ Years Experience</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-accent rounded-full" />
//             <span>100+ Projects</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-accent rounded-full" />
//             <span>100% Satisfaction</span>
//           </div>
//         </motion.div>

//         <div className="mt-8 text-xs text-gray-400">
//           ⚡ Limited Slots Available for Free Site Visit
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Building, CheckCircle, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28 lg:pt-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Original dark overlay (keep as before) */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building Your Dream Spaces with{' '}
            <span className="bg-gradient-to-r from-[#f5d97b] to-[#d4af37] bg-clip-text text-transparent">
              Trust & Precision
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6"
        >
          20+ years of excellence | 100+ projects | On-time delivery guaranteed
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
        >
          <Link
            href="/contact"
            className="relative px-8 py-4 text-base font-semibold uppercase tracking-wider text-black rounded-md
              bg-gradient-to-r from-[#f5d97b] to-[#d4af37]
              shadow-[0_10px_30px_rgba(212,175,55,0.3)]
              hover:scale-105 transition-all duration-300 group"
          >
            Get Free Consultation →
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 whitespace-nowrap">
              Limited slots this month
            </span>
          </Link>

          <a
            href="tel:+918790806677"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white rounded-md
              border border-white/30 bg-white/10 backdrop-blur-sm
              hover:bg-white/20 hover:border-[#d4af37] transition-all duration-300"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Call Now
          </a>
        </motion.div>

        {/* Trust badges with icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-6 justify-center text-sm text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-[#d4af37]" />
            <span>20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#d4af37]" />
            <span>100+ Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#d4af37]" />
            <span>100% Satisfaction</span>
          </div>
        </motion.div>

        {/* Urgency text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xs text-gray-400"
        >
          ⚡ Limited Slots Available for Free Site Visit
        </motion.div>
      </div>
    </section>
  );
}