'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react'

export function Welcome() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <span
              className="inline-block font-semibold tracking-wider text-sm uppercase mb-1 border-l-[3px] pl-3"
              style={{ color: '#d84315', borderLeftColor: '#d84315' }}
            >
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#0f172a' }}>
              Turning Blueprints into <span style={{ color: '#d84315' }}>High-Quality Realities</span> Across Hyderabad
            </h2>
            <div className="h-[3px] w-20 bg-[#d84315]" />
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">
              Established in <strong>2024</strong> under the proprietorship of <strong>Ms. Swapna Vendi</strong>, Tripura Infra Developers is a Government Registered Business operationally led by Co-Founder <strong>Mr. Venkat Reddy</strong>, a Civil Engineering professional with over <strong>20 years</strong> of experience. His hands-on leadership ensures every project meets the highest standards of engineering, safety, and compliance.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              Whether building dream homes, modern offices, or industrial warehouses in Hyderabad, we are <strong>trusted engineering partners</strong> committed to transforming your vision into durable realities on time and within budget.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-50 p-8 border border-slate-100 relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#d84315]" />
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <ShieldCheck className="text-[#d84315]" size={22} />
              Our Construction Promise
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="text-[#fbbf24] shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-600 font-medium">100% Price Transparency (No Hidden Charges)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-[#fbbf24] shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-600 font-medium">On-Time Project Delivery Guarantee</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-[#fbbf24] shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-600 font-medium">Uncompromising Quality & Engineering Standards</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-[#fbbf24] shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-600 font-medium">Expert In-House Architectural & Design Team</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
                <MapPin size={12} className="text-[#d84315]" />
                Headquarters Address
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                10-528/1/A/1, Road No. 11, Satyanarayana Colony, Nagaram, Medchal-Malkajgiri Mandal, Hyderabad, Telangana - 500083
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
