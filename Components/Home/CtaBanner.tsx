'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-hover section-padding">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Get Your Free Quote Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-white/80 max-w-2xl mx-auto"
        >
          Limited slots available for this quarter. Contact us now for a personalized consultation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <Button className="btn-glass border-white text-white hover:bg-white hover:text-primary text-lg px-8">
            Request Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}