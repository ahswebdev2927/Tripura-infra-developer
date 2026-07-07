'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MapPin } from 'lucide-react';

export default function CompanyProfilePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
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
            <span
              className="text-[10px] font-bold uppercase tracking-[3px]"
              style={{
                color: '#C0392B',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Company Profile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black mb-4 leading-tight text-gray-900"
            style={{
              fontSize: 'clamp(2.0rem, 5vw, 3.5rem)',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Tripura Infra Developers
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-6 h-[3px] w-24"
            style={{
              background: 'linear-gradient(90deg, #C0392B, #F4B400)',
              transformOrigin: 'center',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg max-w-3xl mx-auto"
            style={{
              color: 'rgba(44,44,44,0.58)',
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            An independent, government-registered infrastructure development company established in 2024.
          </motion.p>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif", borderBottom: '2px solid #E5E7EB', paddingBottom: '16px' }}>
              Business Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Company Name</h3>
                  <p className="text-lg font-bold text-gray-900">Tripura Infra Developers</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Year Established</h3>
                  <p className="text-lg font-bold text-gray-900">2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Founder & Proprietor</h3>
                  <p className="text-lg font-bold text-gray-900">Ms. Swapna Vendi</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Industry</h3>
                  <p className="text-lg font-bold text-gray-900">Infrastructure Development and Construction</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Business Type</h3>
                  <p className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <ShieldCheck className="text-[#C0392B]" size={20} />
                    Government Registered Proprietorship
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Headquarters</h3>
                  <p className="text-base text-gray-900 flex items-start gap-2">
                    <MapPin className="text-[#C0392B] shrink-0 mt-1" size={20} />
                    <span>10-528/1/A/1, Road No. 11, Satyanarayana Colony, Nagaram, Medchal–Malkajgiri Mandal, Hyderabad – 500083</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF8F8] rounded-2xl p-8 md:p-12 border-l-4 border-[#C0392B] shadow-sm">
             <h2 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Identity Clarification Statement
            </h2>
            <p className="text-base leading-relaxed text-gray-800 font-medium italic">
              "Tripura Infra Developers is an independent infrastructure development company established in 2024 under the proprietorship of Ms. Swapna Vendi. The company is not affiliated with or associated with any other business operating under similar names."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
