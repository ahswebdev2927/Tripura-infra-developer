'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// const packages = [
//   {
//     name: 'Essential Home Package',
//     price: '₹1,790/sft',
//     tag: 'Budget Friendly',
//     features: [
//       'RCC frame structure',
//       'Cement plaster & basic flooring',
//       'Standard electrical & plumbing',
//       'Doors & windows — standard grade',
//       '12 months structural warranty',
//     ],
//     popular: false,
//   },
//   {
//     name: 'Value Plus Package',
//     price: '₹2,190/sft',
//     tag: 'Best Value',
//     features: [
//       'Everything in Essential',
//       'Vitrified tile flooring',
//       'Modular kitchen basic setup',
//       'Premium sanitary fittings',
//       'False ceiling in living area',
//       '18 months warranty',
//     ],
//     popular: false,
//   },
//   {
//     name: 'Smart Choice Package',
//     price: '₹2,490/sft',
//     tag: 'Most Popular',
//     features: [
//       'Everything in Value Plus',
//       'Earthquake-resistant design',
//       'Smart home pre-wiring',
//       'Premium tiles throughout',
//       'Landscaping & compound wall',
//       '24 months warranty',
//     ],
//     popular: true,
//   },
//   {
//     name: 'Elite Living Package',
//     price: '₹2,990/sft',
//     tag: 'Premium',
//     features: [
//       'Everything in Smart Choice',
//       'Italian marble / premium flooring',
//       'Full modular kitchen',
//       'Home automation system',
//       'Luxury sanitary ware',
//       '36 months warranty + interior consultation',
//     ],
//     popular: false,
//   },
// ];

const packages = [
  {
    name: 'Value Plus Package',
    price: '₹1,790/sft',
    tag: 'Value Meets Quality',
    features: [
      'Better tile selection',
      'Branded electricals and plumbing',
      'Improved doors & fittings',
      'Standard elevation finish',
      'Quality-focused specifications',
      "25 Years Structural Warranty",
      '3 Years Electrical & Plumbing Warranty'
    ],
    popular: false,
  },
  {
    name: 'Smart Choice Package',
    price: '₹1,990/sft',
    tag: 'Most Popular',
    features: [
      'Premium flooring options',
      'Better sanitary fittings',
      'Enhanced elevation design',
      'Improved finishes',
      'Built for modern living',
      "25 Years Structural Warranty",
      '3 Years Electrical & Plumbing Warranty'
    ],
    popular: true,
  },
  {
    name: 'Elite Living Package',
    price: '₹2,290/sft',
    tag: 'Premium',
    features: [
      'Premium branded materials',
      'Designer elevation concepts',
      'Enhanced lighting provisions',
      'Superior finish quality',
      'Style with durability',
      "25 Years Structural Warranty",
      '3 Years Electrical & Plumbing Warranty'
    ],
    popular: false,
  },
  {
    name: 'Signature Package',
    price: '₹2,590/sft',
    tag: 'Luxury',
    features: [
      'Fully customized specifications',
      'Premium brands and finishes',
      'Architect-supported design options',
      'End-to-end project support',
      'Tailored construction experience',
      "25 Years Structural Warranty",
      '3 Years Electrical & Plumbing Warranty'
    ],
    popular: false,
  },
];

const process = [
  { step: '01', title: 'A Divine Beginning', desc: 'Bhoomi Puja & site blessing to start on an auspicious note.' },
  { step: '02', title: 'Site Clearing', desc: 'Clearing the old, making way for something better.' },
  { step: '03', title: 'Foundation Work', desc: 'Building your future — brick by brick with precision.' },
  { step: '04', title: 'Structure & Finishing', desc: 'From slab to walls to final touches — we handle it all.' },
  { step: '05', title: 'Government Approvals', desc: 'Bore services, plan approvals & legal compliance handled.' },
  { step: '06', title: 'Handover', desc: 'Your dream home delivered on time, every time.' },
];

const whyUs = [
  'Trusted Process — end to end',
  'Premium Quality Work',
  '100% Transparent Journey',
  'On-Time Dream Home Delivery',
  'Bore Services included',
  'Government approvals handled',
];

export default function ResidentialConstructionPage() {
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
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.07) 0%, transparent 65%)' }} />
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
                <Home size={12} style={{ color: '#C0392B' }} />
                <span className="text-[10px] font-bold uppercase tracking-[3px]"
                  style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                  Residential Construction
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="font-black mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}
              >
                Turning Dreams into{' '}
                <span style={{ color: '#C0392B' }}>Concrete Reality</span>
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
                className="text-base leading-relaxed mb-6"
                style={{ color: 'rgba(44,44,44,0.62)', fontFamily: "'Open Sans', sans-serif" }}
              >
                Securing your dream with trust & commitment. From a divine beginning with blessings to final handover — we build your future brick by brick.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-sm font-bold mb-8 px-4 py-3"
                style={{
                  color: '#C0392B',
                  backgroundColor: 'rgba(192,57,43,0.07)',
                  borderLeft: '3px solid #C0392B',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Construction starts from just ₹1,790/Sft
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
                  Get Free Quote
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a href="tel:+918790806677"
                  className="flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1.5px solid rgba(192,57,43,0.3)',
                    color: '#C0392B',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#C0392B';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#C0392B';
                  }}
                >
                  <Phone size={13} />
                  Call Now
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
                src="/services/ResidentialConstruction.jpg"
                alt="Residential Construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(192,57,43,0.15) 0%, transparent 60%)' }} />

              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-3"
                style={{ backgroundColor: '#ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
              >
                <p className="text-xs uppercase tracking-widest mb-0.5"
                  style={{ color: 'rgba(44,44,44,0.45)', fontFamily: "'Montserrat', sans-serif" }}>
                  Starting from
                </p>
                <p className="text-xl font-black"
                  style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                  ₹1,790/Sft
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.2) 30%, rgba(244,180,0,0.2) 70%, transparent)' }} />
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-black mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}>
                Built on Trust &{' '}
                <span style={{ color: '#C0392B' }}>Commitment</span>
              </h2>
              <div className="h-[3px] w-16 mb-6"
                style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }} />
              <div className="grid grid-cols-1 gap-3">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{
                      backgroundColor: '#F5F5F5',
                      borderLeft: '3px solid #C0392B',
                    }}
                  >
                    <CheckCircle size={14} style={{ color: '#22c55e', flexShrink: 0 }} />
                    <span className="text-sm font-semibold"
                      style={{ color: '#2C2C2C', fontFamily: "'Open Sans', sans-serif" }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-black mb-6"
                style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif", fontSize: '1.3rem' }}>
                Our Construction Process
              </h3>
              <div className="space-y-4">
                {process.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 p-4 transition-all duration-300"
                    style={{
                      backgroundColor: '#F5F5F5',
                      border: '1px solid rgba(192,57,43,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,57,43,0.25)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(192,57,43,0.03)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,57,43,0.08)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#F5F5F5';
                    }}
                  >
                    <span className="text-2xl font-black flex-shrink-0"
                      style={{ color: 'rgba(192,57,43,0.2)', fontFamily: "'Montserrat', sans-serif" }}>
                      {p.step}
                    </span>
                    <div>
                      <p className="font-bold text-sm mb-0.5"
                        style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}>
                        {p.title}
                      </p>
                      <p className="text-xs"
                        style={{ color: 'rgba(44,44,44,0.55)', fontFamily: "'Open Sans', sans-serif" }}>
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-5"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(192,57,43,0.2)',
                borderLeft: '3px solid #C0392B',
                padding: '6px 16px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[3px]"
                style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                Residential Packages
              </span>
            </div>
            <h2 className="font-black mb-3 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}>
              Choose Your <span style={{ color: '#C0392B' }}>Package</span>
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
                  (e.currentTarget as HTMLElement).style.boxShadow = pkg.popular
                    ? '0 8px 32px rgba(192,57,43,0.15)'
                    : '0 2px 16px rgba(0,0,0,0.04)';
                }}
              >
                {/* Top bar */}
                <div className="h-[3px] w-full"
                  style={{ background: pkg.popular ? 'linear-gradient(90deg, #C0392B, #F4B400)' : 'rgba(192,57,43,0.15)' }} />

                <div className="p-5">
                  {pkg.popular && (
                    <div className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest mb-3"
                      style={{ backgroundColor: '#C0392B', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}>
                      {pkg.tag}
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
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, #F4B400, transparent)' }} />

        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-black mb-3 text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontFamily: "'Montserrat', sans-serif" }}>
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-sm mb-8"
              style={{ color: 'rgba(255,255,255,0.72)', fontFamily: "'Open Sans', sans-serif" }}>
              DM us today or call — we'll get back to you within 30 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#ffffff', color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#F4B400';
                  (e.currentTarget as HTMLElement).style.color = '#1C1C1C';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff';
                  (e.currentTarget as HTMLElement).style.color = '#C0392B';
                }}
              >
                Get Free Consultation <ArrowRight size={13} />
              </Link>
              <a href="tel:+918790806677"
                className="flex items-center gap-2 px-7 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <Phone size={13} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}