'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// const packages = [
//   {
//     name: 'Core Bare Shell',
//     price: '₹1,290/sft',
//     features: [
//       'Basic RCC structure',
//       'Bare shell without finishing',
//       'Electrical conduits & plumbing rough-in',
//       'Government approvals included',
//     ],
//     popular: false,
//   },
//   {
//     name: 'Flex',
//     price: '₹1,690/sft',
//     features: [
//       'Everything in Core',
//       'Basic flooring & plaster',
//       'Restroom finishing',
//       'Main door & windows',
//       'Electrical points installed',
//     ],
//     popular: false,
//   },
//   {
//     name: 'Edge',
//     price: '₹2,190/sft',
//     features: [
//       'Everything in Flex',
//       'Premium flooring',
//       'False ceiling in common areas',
//       'HVAC rough-in',
//       'Fire safety provisions',
//     ],
//     popular: true,
//   },
//   {
//     name: 'Prime Edge',
//     price: '₹2,390/sft',
//     features: [
//       'Everything in Edge',
//       'Full interior fit-out',
//       'Branding & signage integration',
//       'IT & data cabling',
//       'Premium façade work',
//     ],
//     popular: false,
//   },
// ];

const packages = [
  {
    name: 'Flex Commercial',
    price: '₹1,890/sft',
    features: [
      'RCC framed structure',
      'Standard steel & cement',
      'Standard flooring',
      'Electrical conduits & wiring',
      'Plumbing piping',
      'UPVC windows',
      'Basic painting',
      'Staircase finishing',
    ],
    popular: false,
  },
  {
    name: 'Edge',
    price: '₹2,190/sft',
    features: [
      'Everything in Flex Commercial',
      'Better flooring specifications',
      'Premium paint finish',
      'Enhanced elevation',
      'Improved fittings',
    ],
    popular: false,
  },
  {
    name: 'Prime Edge',
    price: '₹2,690/sft',
    features: [
      'Everything in Edge',
      'Premium construction materials',
      'Premium façade design',
      'Better common areas',
      'Fire safety provisions',
      'Commercial-grade finishes',
    ],
    popular: true,
  },
  {
    name: 'Commercial Signature',
    price: '₹4,500/sft',
    features: [
      'Premium construction',
      'Premium façade systems',
      'Smart building provisions',
      'Premium lobbies',
      'Turnkey construction execution',
    ],
    popular: false,
  },
];

export default function CommercialConstructionPage() {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, #C0392B 30%, #F4B400 70%, transparent)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: 'linear-gradient(to bottom, transparent, #C0392B 30%, #F4B400 70%, transparent)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(192,57,43,0.2)',
                  borderLeft: '3px solid #C0392B',
                  padding: '6px 16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <Building2 size={12} style={{ color: '#C0392B' }} />
                <span className="text-[10px] font-bold uppercase tracking-[3px]"
                  style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                  Commercial Construction
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="font-black mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}
              >
                Spaces Built for{' '}
                <span style={{ color: '#C0392B' }}>Business Growth</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-5 h-[3px] w-20 origin-left"
                style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base leading-relaxed mb-8"
                style={{ color: 'rgba(44,44,44,0.62)', fontFamily: "'Open Sans', sans-serif" }}
              >
                From office towers to hospitals, retail spaces to hotels — we deliver commercial construction that meets global standards with local expertise. End-to-end execution including bore services and government approvals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link href="/contact"
                  className="group flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#C0392B', color: '#ffffff', fontFamily: "'Montserrat', sans-serif", boxShadow: '0 8px 24px rgba(192,57,43,0.3)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#a93226'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C0392B'; }}
                >
                  Get Free Quote <ArrowRight size={13} />
                </Link>
                <a href="tel:+918790806677"
                  className="flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300"
                  style={{ border: '1.5px solid rgba(192,57,43,0.3)', color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#C0392B';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#C0392B';
                  }}
                >
                  <Phone size={13} /> Call Now
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[420px] overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
            >
              <Image
                src="/services/Commercial%20Construction.jpg"
                alt="Commercial Construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(192,57,43,0.12) 0%, transparent 60%)' }} />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.2) 30%, rgba(244,180,0,0.2) 70%, transparent)' }} />
      </section>

      {/* ── Packages ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-5"
              style={{
                backgroundColor: 'rgba(192,57,43,0.07)',
                border: '1px solid rgba(192,57,43,0.2)',
                borderLeft: '3px solid #C0392B',
                padding: '6px 16px',
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[3px]"
                style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                Commercial Packages
              </span>
            </div>
            <h2 className="font-black mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}>
              Choose Your <span style={{ color: '#C0392B' }}>Plan</span>
            </h2>
            <div className="mx-auto mb-4 h-[3px] w-16"
              style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#ffffff',
                  border: pkg.popular ? '2px solid #C0392B' : '1px solid rgba(192,57,43,0.1)',
                  boxShadow: pkg.popular ? '0 8px 32px rgba(192,57,43,0.15)' : '0 2px 16px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(192,57,43,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = pkg.popular ? '0 8px 32px rgba(192,57,43,0.15)' : '0 2px 16px rgba(0,0,0,0.04)';
                }}
              >
                <div className="h-[3px] w-full"
                  style={{ background: pkg.popular ? 'linear-gradient(90deg, #C0392B, #F4B400)' : 'rgba(192,57,43,0.12)' }} />
                <div className="p-5">
                  {pkg.popular && (
                    <div className="inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest mb-3"
                      style={{ backgroundColor: '#C0392B', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-black mb-1 text-sm"
                    style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}>
                    {pkg.name}
                  </h3>
                  <p className="text-xl font-black mb-4"
                    style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                    {pkg.price}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs"
                        style={{ color: 'rgba(44,44,44,0.65)', fontFamily: "'Open Sans', sans-serif" }}>
                        <CheckCircle size={11} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300"
                    style={{
                      backgroundColor: pkg.popular ? '#C0392B' : 'transparent',
                      color: pkg.popular ? '#ffffff' : '#C0392B',
                      border: pkg.popular ? 'none' : '1.5px solid #C0392B',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#C0392B';
                      (e.currentTarget as HTMLElement).style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = pkg.popular ? '#C0392B' : 'transparent';
                      (e.currentTarget as HTMLElement).style.color = pkg.popular ? '#ffffff' : '#C0392B';
                    }}
                  >
                    Get Quote <ArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#C0392B' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, #F4B400, transparent)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-black mb-3 text-white"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontFamily: "'Montserrat', sans-serif" }}>
              Ready to Start Your Commercial Project?
            </h2>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.72)', fontFamily: "'Open Sans', sans-serif" }}>
              Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#ffffff', color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#F4B400'; (e.currentTarget as HTMLElement).style.color = '#1C1C1C'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff'; (e.currentTarget as HTMLElement).style.color = '#C0392B'; }}
              >
                Get Free Consultation <ArrowRight size={13} />
              </Link>
              <a href="tel:+918790806677"
                className="flex items-center gap-2 px-7 py-3.5 text-xs font-black uppercase tracking-widest"
                style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}>
                <Phone size={13} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}