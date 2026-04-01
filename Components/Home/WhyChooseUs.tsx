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
    <section className="section-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">Building trust, one project at a time.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}