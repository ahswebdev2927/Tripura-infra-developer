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



// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Phone, Building, CheckCircle, Clock } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28 lg:pt-32">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Original dark overlay (keep as before) */}
//         <div className="hero-overlay absolute inset-0" />
//       </div>

//       <div className="container-custom relative z-10 text-center text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             Building Your Dream Spaces with{' '}
//             <span className="bg-gradient-to-r from-[#f5d97b] to-[#d4af37] bg-clip-text text-transparent">
//               Trust & Precision
//             </span>
//           </h1>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6"
//         >
//           20+ years of excellence | 100+ projects | On-time delivery guaranteed
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
//         >
//           <Link
//             href="/contact"
//             className="relative px-8 py-4 text-base font-semibold uppercase tracking-wider text-black rounded-md
//               bg-gradient-to-r from-[#f5d97b] to-[#d4af37]
//               shadow-[0_10px_30px_rgba(212,175,55,0.3)]
//               hover:scale-105 transition-all duration-300 group"
//           >
//             Get Free Consultation →
//             <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 whitespace-nowrap">
//               Limited slots this month
//             </span>
//           </Link>

//           <a
//             href="tel:+918790806677"
//             className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white rounded-md
//               border border-white/30 bg-white/10 backdrop-blur-sm
//               hover:bg-white/20 hover:border-[#d4af37] transition-all duration-300"
//           >
//             <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//             Call Now
//           </a>
//         </motion.div>

//         {/* Trust badges with icons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-16 flex flex-wrap gap-6 justify-center text-sm text-gray-300"
//         >
//           <div className="flex items-center gap-2">
//             <Building className="w-4 h-4 text-[#d4af37]" />
//             <span>20+ Years Experience</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-4 h-4 text-[#d4af37]" />
//             <span>100+ Projects</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="w-4 h-4 text-[#d4af37]" />
//             <span>100% Satisfaction</span>
//           </div>
//         </motion.div>

//         {/* Urgency text */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-8 text-xs text-gray-400"
//         >
//           ⚡ Limited Slots Available for Free Site Visit
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  User,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Star,
  Shield,
  Award,
  Clock,
} from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect, useRef } from 'react';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Enter your name').required('Name is required'),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Enter valid 10-digit number')
    .required('Phone is required'),
  location: Yup.string()
    .min(2, 'Enter your city')
    .required('Location is required'),
});

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=90',
    tag: 'Residential Construction',
    tagline: 'Homes Built with Heart',
    headline: ['We Build Homes', 'That Tell Your', 'Story'],
    location: 'Kompally, Hyderabad',
  },
  {
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=90',
    tag: 'Commercial Projects',
    tagline: 'Spaces That Inspire Growth',
    headline: ['Crafting Iconic', 'Commercial', 'Spaces'],
    location: 'Uppal, Hyderabad',
  },
  {
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=90',
    tag: 'Premium Interiors',
    tagline: 'Designed for the Way You Live',
    headline: ['Interiors Built', 'for the Way', 'You Live'],
    location: 'Nagaram, Hyderabad',
  },
];

const stats = [
  { icon: Award, number: '20+', label: 'Years' },
  { icon: Shield, number: '150+', label: 'Projects' },
  { icon: Star, number: '100%', label: 'Satisfaction' },
  { icon: Clock, number: '30min', label: 'Response' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [prevSlide, setPrevSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % slides.length;
      });
    }, 5500);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrevSlide(current);
    setCurrent(i);
    startInterval();
  };

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col mt-8">

      {/* ══════════════════════════════════════════
          BACKGROUND SLIDES
      ══════════════════════════════════════════ */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform, opacity',
          }}
        />
      </AnimatePresence>

      {/* ── Overlays ── */}
      {/* Main warm white wash */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(110deg, rgba(255,252,248,0.88) 0%, rgba(255,250,246,0.65) 45%, rgba(255,248,244,0.20) 75%, transparent 100%)',
        }}
      />
      {/* Top white fade for header breathing room */}
      <div
        className="absolute top-0 left-0 right-0 h-36 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 100%)',
        }}
      />
      {/* Bottom soft fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 z-[1]"
        style={{
          background:
            'linear-gradient(to top, rgba(255,252,248,0.75) 0%, transparent 100%)',
        }}
      />
      {/* Red warm glow — top left */}
      <div
        className="absolute top-0 left-0 w-[50%] h-[60%] z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 60%)',
        }}
      />
      {/* Gold glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-[50%] z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.06) 0%, transparent 60%)',
        }}
      />

      {/* ── Left accent bar ── */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-[5]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, #C0392B 20%, #F4B400 50%, #C0392B 80%, transparent 100%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-10 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-16 items-center">

            {/* ════════════════════════
                LEFT — Copy
            ════════════════════════ */}
            <div>

              {/* Tag pill */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tag-${current}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="inline-flex items-center gap-3 mb-7"
                >
                  {/* Tag badge */}
                  <div
                    className="flex items-center gap-2 px-3.5 py-1.5"
                    style={{
                      backgroundColor: 'rgba(192,57,43,0.09)',
                      border: '1px solid rgba(192,57,43,0.22)',
                      borderLeft: '3px solid #C0392B',
                    }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#C0392B' }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-[2.5px]"
                      style={{
                        color: '#C0392B',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {slide.tag}
                    </span>
                  </div>

                  {/* Tagline */}
                  <span
                    className="text-xs font-medium italic hidden sm:block"
                    style={{ color: 'rgba(28,28,28,0.45)' }}
                  >
                    {slide.tagline}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <div className="overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`headline-${current}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <h1 className="sr-only">
                      Hyderabad's Most Trusted Construction Company – Building Homes, Offices & Industrial Spaces Since 2004
                    </h1>
                    <h2
                      className="font-black leading-[1.05]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {slide.headline.map((line, i) => (
                        <span
                          key={i}
                          className="block"
                          style={{
                            fontSize: 'clamp(2.5rem, 5.8vw, 4.4rem)',
                            color: i === 2 ? '#C0392B' : '#1C1C1C',
                            textShadow:
                              i !== 2
                                ? '0 2px 24px rgba(255,255,255,0.6)'
                                : 'none',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {line}
                          {/* Red underline on last word */}
                          {i === 2 && (
                            <motion.span
                              className="block h-[4px] mt-1 origin-left"
                              style={{
                                background:
                                  'linear-gradient(90deg, #C0392B, #F4B400)',
                                width: '60%',
                              }}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.7, delay: 0.3 }}
                            />
                          )}
                        </span>
                      ))}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-[15px] leading-relaxed mb-9 max-w-[420px]"
                style={{
                  color: 'rgba(28,28,28,0.62)',
                  fontFamily: "'Open Sans', sans-serif",
                  textShadow: '0 1px 12px rgba(255,255,255,0.5)',
                }}
              >
                20+ years of trust — delivering{' '}
                <span
                  style={{ color: '#C0392B', fontWeight: 600 }}
                >
                  premium construction
                </span>{' '}
                across Hyderabad with precision, transparency, and zero
                compromise on quality.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                {/* Primary CTA */}
                <Link
                  href="/services#point"
                  className="group relative flex items-center gap-2.5 px-7 py-4 text-xs font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#C0392B',
                    color: '#ffffff',
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow:
                      '0 8px 28px rgba(192,57,43,0.35), 0 2px 8px rgba(192,57,43,0.2)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      '#a93226';
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 16px 40px rgba(192,57,43,0.5), 0 4px 12px rgba(192,57,43,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      '#C0392B';
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 8px 28px rgba(192,57,43,0.35), 0 2px 8px rgba(192,57,43,0.2)';
                  }}
                >
                  {/* Shine */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                  <span className="relative z-10">View Our Projects</span>
                  <ArrowRight
                    size={14}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>

                {/* Phone CTA */}
                <a
                  href="tel:+918790806677"
                  className="group flex items-center gap-3 px-5 py-3.5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(192,57,43,0.18)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      '#C0392B';
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      'rgba(255,255,255,0.92)';
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 8px 28px rgba(192,57,43,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(192,57,43,0.18)';
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      'rgba(255,255,255,0.75)';
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 4px 20px rgba(0,0,0,0.06)';
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(192,57,43,0.1)',
                    }}
                  >
                    <Phone size={14} style={{ color: '#C0392B' }} />
                  </div>
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-widest font-bold mb-0.5"
                      style={{ color: 'rgba(28,28,28,0.4)' }}
                    >
                      Call Us Anytime
                    </p>
                    <p
                      className="text-sm font-black leading-none"
                      style={{
                        color: '#1C1C1C',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      +91 87908 06677
                    </p>
                  </div>
                </a>
              </motion.div>

              {/* Stats — frosted glass pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-stretch mb-7"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.78)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(192,57,43,0.12)',
                  boxShadow:
                    '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(192,57,43,0.05)',
                }}
              >
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <motion.div
                      className="flex flex-col items-center justify-center px-5 py-3 gap-0.5"
                      whileHover={{ backgroundColor: 'rgba(192,57,43,0.04)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <s.icon
                        size={12}
                        style={{ color: '#C0392B', marginBottom: '2px' }}
                      />
                      <p
                        className="text-lg md:text-xl font-black leading-none"
                        style={{
                          color: '#C0392B',
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {s.number}
                      </p>
                      <p
                        className="text-[8px] uppercase tracking-widest"
                        style={{ color: 'rgba(28,28,28,0.42)' }}
                      >
                        {s.label}
                      </p>
                    </motion.div>
                    {i < stats.length - 1 && (
                      <div
                        className="w-px self-stretch my-2"
                        style={{ backgroundColor: 'rgba(192,57,43,0.12)' }}
                      />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Review strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.72 }}
              >
                <div
                  className="inline-flex items-center gap-4 px-5 py-3"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(244,180,0,0.2)',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Avatar stack */}
                  <div className="flex -space-x-2.5">
                    {[
                      { bg: '#C0392B', letter: 'R' },
                      { bg: '#E67E22', letter: 'A' },
                      { bg: '#F4B400', letter: 'M' },
                      { bg: '#27AE60', letter: 'S' },
                    ].map((av, i) => (
                      <motion.div
                        key={i}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white border-[2.5px] border-white"
                        style={{ backgroundColor: av.bg, zIndex: 4 - i }}
                        whileHover={{ y: -3, zIndex: 10 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        {av.letter}
                      </motion.div>
                    ))}
                  </div>

                  <div
                    className="w-px h-7 self-center"
                    style={{ backgroundColor: 'rgba(244,180,0,0.25)' }}
                  />

                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-[#F4B400] text-[#F4B400]"
                        />
                      ))}
                    </div>
                    <p
                      className="text-[11px]"
                      style={{ color: 'rgba(28,28,28,0.55)' }}
                    >
                      <strong style={{ color: '#1C1C1C' }}>4.9/5</strong>
                      {' · '}
                      <span>150+ happy families</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ════════════════════════
                RIGHT — Form Card
            ════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28 }}
              className="w-full"
            >
              {/* Glow behind card */}
              <div
                className="absolute -inset-3 pointer-events-none z-0"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(192,57,43,0.08) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              <div
                className="relative overflow-hidden z-10"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.96)',
                  backdropFilter: 'blur(28px)',
                  boxShadow:
                    '0 2px 4px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.09), 0 40px 80px rgba(192,57,43,0.07), 0 0 0 1px rgba(192,57,43,0.08)',
                }}
              >
                {/* Top gradient bar */}
                <div
                  className="h-[3px] w-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #C0392B 0%, #E8622A 35%, #F4B400 65%, #C0392B 100%)',
                  }}
                />

                {/* Decorative corner — top right */}
                <div
                  className="absolute top-3 right-3 w-16 h-16 pointer-events-none opacity-60"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(244,180,0,0.1) 0%, transparent 70%)',
                  }}
                />

                {/* Subtle grid texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.018]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(192,57,43,1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(192,57,43,1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative p-7">
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      >
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="h-4 w-[3px]"
                              style={{
                                background:
                                  'linear-gradient(to bottom, #C0392B, #F4B400)',
                              }}
                            />
                            <span
                              className="text-[10px] font-bold uppercase tracking-[3px]"
                              style={{ color: '#C0392B' }}
                            >
                              Free Consultation
                            </span>
                          </div>
                          <h3
                            className="text-[22px] font-black mb-1.5 leading-tight"
                            style={{
                              color: '#1C1C1C',
                              fontFamily: "'Montserrat', sans-serif",
                            }}
                          >
                            Get a Free{' '}
                            <span style={{ color: '#C0392B' }}>
                              Site Visit
                            </span>
                          </h3>
                          <p
                            className="text-xs leading-relaxed"
                            style={{
                              color: 'rgba(28,28,28,0.48)',
                              fontFamily: "'Open Sans', sans-serif",
                            }}
                          >
                            Our expert calls you within{' '}
                            <strong
                              style={{ color: '#C0392B', fontWeight: 700 }}
                            >
                              30 minutes
                            </strong>{' '}
                            — no obligations
                          </p>
                        </div>

                        {/* Formik */}
                        <Formik
                          initialValues={{
                            name: '',
                            phone: '',
                            location: '',
                          }}
                          validationSchema={validationSchema}
                          onSubmit={(values, { setSubmitting, resetForm }) => {
                            const messageText = `*New Free Site Visit Request*\n\n*Name:* ${values.name}\n*Phone:* +91 ${values.phone}\n*Location:* ${values.location}`;
                            const whatsappUrl = `https://wa.me/918790806677?text=${encodeURIComponent(messageText)}`;

                            window.open(whatsappUrl, '_blank');

                            setSubmitted(true);
                            setSubmitting(false);
                            resetForm();
                          }}
                        >
                          {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-3.5">

                              {/* ── Name ── */}
                              <div>
                                <div className="relative group">
                                  <div
                                    className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200"
                                    style={{
                                      background:
                                        touched.name && errors.name
                                          ? '#ef4444'
                                          : 'transparent',
                                    }}
                                  />
                                  <User
                                    size={13}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200"
                                    style={{
                                      color:
                                        touched.name && errors.name
                                          ? '#ef4444'
                                          : 'rgba(192,57,43,0.38)',
                                    }}
                                  />
                                  <Field
                                    name="name"
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full pl-10 pr-4 py-3.5 text-sm outline-none transition-all duration-200"
                                    style={{
                                      border: `1.5px solid ${touched.name && errors.name
                                          ? '#ef4444'
                                          : 'rgba(44,44,44,0.1)'
                                        }`,
                                      backgroundColor:
                                        touched.name && errors.name
                                          ? 'rgba(239,68,68,0.02)'
                                          : '#f9f9f9',
                                      color: '#1C1C1C',
                                      fontFamily: "'Open Sans', sans-serif",
                                    }}
                                    onFocus={(
                                      e: React.FocusEvent<HTMLInputElement>
                                    ) => {
                                      e.target.style.borderColor = '#C0392B';
                                      e.target.style.backgroundColor =
                                        '#ffffff';
                                      e.target.style.boxShadow =
                                        '0 0 0 3px rgba(192,57,43,0.07)';
                                    }}
                                    onBlur={(
                                      e: React.FocusEvent<HTMLInputElement>
                                    ) => {
                                      e.target.style.borderColor =
                                        touched.name && errors.name
                                          ? '#ef4444'
                                          : 'rgba(44,44,44,0.1)';
                                      e.target.style.boxShadow = 'none';
                                      e.target.style.backgroundColor =
                                        '#f9f9f9';
                                    }}
                                  />
                                </div>
                                <ErrorMessage name="name">
                                  {(msg) => (
                                    <motion.p
                                      initial={{ opacity: 0, y: -4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="text-[11px] mt-1.5 ml-1 flex items-center gap-1"
                                      style={{ color: '#ef4444' }}
                                    >
                                      ⚠ {msg}
                                    </motion.p>
                                  )}
                                </ErrorMessage>
                              </div>

                              {/* ── Phone ── */}
                              <div>
                                <div className="relative">
                                  <div
                                    className="absolute left-0 top-0 bottom-0 flex items-center px-3.5"
                                    style={{
                                      borderRight: `1.5px solid ${touched.phone && errors.phone
                                          ? 'rgba(239,68,68,0.35)'
                                          : 'rgba(44,44,44,0.09)'
                                        }`,
                                    }}
                                  >
                                    <span
                                      className="text-xs font-black select-none"
                                      style={{ color: '#C0392B' }}
                                    >
                                      +91
                                    </span>
                                  </div>
                                  <Field
                                    name="phone"
                                    type="tel"
                                    placeholder="98765 43210"
                                    maxLength={10}
                                    className="w-full pl-[52px] pr-4 py-3.5 text-sm outline-none transition-all duration-200"
                                    style={{
                                      border: `1.5px solid ${touched.phone && errors.phone
                                          ? '#ef4444'
                                          : 'rgba(44,44,44,0.1)'
                                        }`,
                                      backgroundColor:
                                        touched.phone && errors.phone
                                          ? 'rgba(239,68,68,0.02)'
                                          : '#f9f9f9',
                                      color: '#1C1C1C',
                                      fontFamily: "'Open Sans', sans-serif",
                                    }}
                                    onFocus={(
                                      e: React.FocusEvent<HTMLInputElement>
                                    ) => {
                                      e.target.style.borderColor = '#C0392B';
                                      e.target.style.backgroundColor =
                                        '#ffffff';
                                      e.target.style.boxShadow =
                                        '0 0 0 3px rgba(192,57,43,0.07)';
                                    }}
                                    onBlur={(
                                      e: React.FocusEvent<HTMLInputElement>
                                    ) => {
                                      e.target.style.borderColor =
                                        touched.phone && errors.phone
                                          ? '#ef4444'
                                          : 'rgba(44,44,44,0.1)';
                                      e.target.style.boxShadow = 'none';
                                      e.target.style.backgroundColor =
                                        '#f9f9f9';
                                    }}
                                  />
                                </div>
                                <ErrorMessage name="phone">
                                  {(msg) => (
                                    <motion.p
                                      initial={{ opacity: 0, y: -4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="text-[11px] mt-1.5 ml-1"
                                      style={{ color: '#ef4444' }}
                                    >
                                      ⚠ {msg}
                                    </motion.p>
                                  )}
                                </ErrorMessage>
                              </div>

                              {/* ── Location ── */}
                              <div>
                                <div className="relative">
                                  <MapPin
                                    size={13}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                    style={{
                                      color:
                                        touched.location && errors.location
                                          ? '#ef4444'
                                          : 'rgba(192,57,43,0.38)',
                                    }}
                                  />
                                  <Field
                                    name="location"
                                    type="text"
                                    placeholder="Your city / area"
                                    className="w-full pl-10 pr-4 py-3.5 text-sm outline-none transition-all duration-200"
                                    style={{
                                      border: `1.5px solid ${touched.location && errors.location
                                          ? '#ef4444'
                                          : 'rgba(44,44,44,0.1)'
                                        }`,
                                      backgroundColor:
                                        touched.location && errors.location
                                          ? 'rgba(239,68,68,0.02)'
                                          : '#f9f9f9',
                                      color: '#1C1C1C',
                                      fontFamily: "'Open Sans', sans-serif",
                                    }}
                                    onFocus={(
                                      e: React.FocusEvent<HTMLInputElement>
                                    ) => {
                                      e.target.style.borderColor = '#C0392B';
                                      e.target.style.backgroundColor =
                                        '#ffffff';
                                      e.target.style.boxShadow =
                                        '0 0 0 3px rgba(192,57,43,0.07)';
                                    }}
                                    onBlur={(
                                      e: React.FocusEvent<HTMLInputElement>
                                    ) => {
                                      e.target.style.borderColor =
                                        touched.location && errors.location
                                          ? '#ef4444'
                                          : 'rgba(44,44,44,0.1)';
                                      e.target.style.boxShadow = 'none';
                                      e.target.style.backgroundColor =
                                        '#f9f9f9';
                                    }}
                                  />
                                </div>
                                <ErrorMessage name="location">
                                  {(msg) => (
                                    <motion.p
                                      initial={{ opacity: 0, y: -4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="text-[11px] mt-1.5 ml-1"
                                      style={{ color: '#ef4444' }}
                                    >
                                      ⚠ {msg}
                                    </motion.p>
                                  )}
                                </ErrorMessage>
                              </div>

                              {/* ── Submit ── */}
                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full flex items-center justify-center gap-2.5 py-4 text-xs font-black uppercase tracking-widest relative overflow-hidden disabled:opacity-60 mt-1"
                                style={{
                                  backgroundColor: '#C0392B',
                                  color: '#ffffff',
                                  fontFamily: "'Montserrat', sans-serif",
                                  boxShadow:
                                    '0 6px 24px rgba(192,57,43,0.32), 0 2px 8px rgba(192,57,43,0.18)',
                                }}
                                whileHover={
                                  !isSubmitting
                                    ? { scale: 1.02, y: -1 }
                                    : {}
                                }
                                whileTap={
                                  !isSubmitting ? { scale: 0.98 } : {}
                                }
                                onMouseEnter={(e) => {
                                  if (!isSubmitting) {
                                    (
                                      e.currentTarget as HTMLElement
                                    ).style.backgroundColor = '#a93226';
                                    (
                                      e.currentTarget as HTMLElement
                                    ).style.boxShadow =
                                      '0 12px 36px rgba(192,57,43,0.48), 0 4px 12px rgba(192,57,43,0.28)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  (
                                    e.currentTarget as HTMLElement
                                  ).style.backgroundColor = '#C0392B';
                                  (
                                    e.currentTarget as HTMLElement
                                  ).style.boxShadow =
                                    '0 6px 24px rgba(192,57,43,0.32), 0 2px 8px rgba(192,57,43,0.18)';
                                }}
                              >
                                {/* Shine sweep */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

                                {isSubmitting ? (
                                  <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span className="relative z-10">
                                      Booking...
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span className="relative z-10">
                                      Book Free Site Visit
                                    </span>
                                    <ArrowRight
                                      size={13}
                                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                                    />
                                  </>
                                )}
                              </motion.button>

                              {/* Trust row */}
                              <div className="flex items-center justify-center gap-5 pt-1">
                                {[
                                  { icon: CheckCircle, text: '100% Free' },
                                  { icon: Shield, text: 'No Spam' },
                                  { icon: Clock, text: '30 min Reply' },
                                ].map((t) => (
                                  <div
                                    key={t.text}
                                    className="flex items-center gap-1"
                                  >
                                    <t.icon
                                      size={9}
                                      style={{ color: '#22c55e' }}
                                    />
                                    <span
                                      className="text-[10px] font-medium"
                                      style={{ color: 'rgba(28,28,28,0.42)' }}
                                    >
                                      {t.text}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </motion.div>
                    ) : (
                      /* ── Success ── */
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 280,
                          damping: 22,
                        }}
                        className="text-center py-8"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -15 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.12,
                            type: 'spring',
                            stiffness: 360,
                            damping: 20,
                          }}
                          className="w-16 h-16 mx-auto mb-5 flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgba(34,197,94,0.09)',
                            border: '2px solid rgba(34,197,94,0.2)',
                          }}
                        >
                          <CheckCircle
                            size={30}
                            style={{ color: '#22c55e' }}
                          />
                        </motion.div>

                        <h3
                          className="text-xl font-black mb-2"
                          style={{
                            color: '#1C1C1C',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          We'll Call You Soon!
                        </h3>
                        <p
                          className="text-sm mb-6"
                          style={{ color: 'rgba(28,28,28,0.52)' }}
                        >
                          Our team will reach you within{' '}
                          <strong style={{ color: '#C0392B' }}>
                            30 minutes
                          </strong>
                        </p>

                        <div className="space-y-2.5 text-left mb-7">
                          {[
                            'Expert calls you in 30 min',
                            'Free site visit scheduled',
                            'Detailed estimate — no cost',
                          ].map((step, i) => (
                            <motion.div
                              key={step}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.08 }}
                              className="flex items-center gap-3"
                            >
                              <div
                                className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white"
                                style={{ backgroundColor: '#C0392B' }}
                              >
                                {i + 1}
                              </div>
                              <p
                                className="text-xs"
                                style={{ color: 'rgba(28,28,28,0.62)' }}
                              >
                                {step}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        <a
                          href="tel:+918790806677"
                          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: '#C0392B',
                            color: '#ffffff',
                            fontFamily: "'Montserrat', sans-serif",
                            boxShadow: '0 6px 20px rgba(192,57,43,0.3)',
                          }}
                        >
                          <Phone size={12} />
                          Call Directly
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════ */}
      {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-8">
        <div className="flex items-center justify-between">

      
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.78)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(192,57,43,0.1)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}
          >
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group flex items-center gap-2 transition-all duration-300"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  animate={{
                    width: i === current ? '28px' : '6px',
                    backgroundColor:
                      i === current
                        ? '#C0392B'
                        : 'rgba(192,57,43,0.22)',
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ height: '6px' }}
                />
              </button>
            ))}

          
            <div
              className="relative h-[2px] overflow-hidden ml-1"
              style={{
                width: '48px',
                backgroundColor: 'rgba(192,57,43,0.1)',
              }}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  background:
                    'linear-gradient(90deg, #C0392B, #F4B400)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                key={current}
                transition={{ duration: 5.5, ease: 'linear' }}
              />
            </div>

          
            <span
              className="text-[11px] font-bold ml-1 tabular-nums"
              style={{ color: 'rgba(28,28,28,0.38)' }}
            >
              <span style={{ color: '#C0392B' }}>0{current + 1}</span>
              {' / '}0{slides.length}
            </span>
          </div>

          
          <motion.div
            className="flex flex-col items-center gap-1.5 px-4 py-2.5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(192,57,43,0.08)',
            }}
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span
              className="text-[9px] uppercase tracking-[3px] font-semibold"
              style={{ color: 'rgba(28,28,28,0.38)' }}
            >
              Scroll
            </span>
            <ChevronDown
              size={13}
              style={{ color: 'rgba(192,57,43,0.5)' }}
            />
          </motion.div>
        </div>
      </div> */}
    </section>
  );
}