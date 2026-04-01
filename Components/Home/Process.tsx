'use client'
import { motion } from 'framer-motion'

const steps = [
  { step: '01', title: 'Consultation', desc: 'Understand your vision and requirements.' },
  { step: '02', title: 'Design & Planning', desc: 'Detailed blueprints and approvals.' },
  { step: '03', title: 'Execution', desc: 'Precision construction with regular updates.' },
  { step: '04', title: 'Handover', desc: 'Quality check and final delivery.' },
]

export function Process() {
  return (
    <section className="section-dark section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process</h2>
          <p className="text-gray-300 mt-2">Simple, transparent, and efficient.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-primary/30 mb-2">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}