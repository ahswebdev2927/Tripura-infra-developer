'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, Users } from 'lucide-react'

const reasons = [
  { icon: Shield, title: '20+ Years Expertise', desc: 'Proven track record of quality and trust.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect deadlines and keep commitments.' },
  { icon: Users, title: 'Customer First', desc: 'Personalized approach and transparent communication.' },
  { icon: CheckCircle, title: 'Modern Practices', desc: 'Latest technology and safety standards.' },
]

export function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: '#f8fafc' }} // Light background from theme
    >
      {/* Optional subtle industrial texture – very light version for light section */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #d84315 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
            style={{ color: '#d84315', borderLeftColor: '#d84315' }}
          >
            Why Trust Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: '#0f172a' }} // Text-dark
          >
            Why Choose <span style={{ color: '#d84315' }}>Us</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Building trust, one project at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group text-center p-6 rounded-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                boxShadow: '0 25px 40px -12px rgba(0,0,0,0.15)',
              }}
            >
              {/* Icon container with subtle gradient on hover */}
              <div
                className="inline-flex p-3 rounded-full mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: 'rgba(216, 67, 21, 0.1)',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }}
              >
                <reason.icon
                  className="h-8 w-8 transition-colors duration-300"
                  style={{ color: '#d84315' }}
                />
              </div>

              <h3
                className="text-xl font-bold mb-2 transition-colors duration-300"
                style={{ color: '#0f172a' }}
              >
                {reason.title}
              </h3>
              <p style={{ color: '#6b7280' }}>{reason.desc}</p>

              {/* Optional gold underline on hover */}
              <div
                className="w-0 h-0.5 mx-auto mt-4 transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: '#fbbf24' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}