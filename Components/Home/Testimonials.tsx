'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  { name: 'Ramesh Gupta', role: 'Homeowner', text: 'Tripura Infra delivered my dream home ahead of schedule. Impeccable quality and professionalism.' },
  { name: 'Priya Reddy', role: 'Commercial Client', text: 'Their team handled our office complex with utmost precision. Highly recommended!' },
  { name: 'Suresh Kumar', role: 'Industrial Partner', text: 'The warehouse construction was flawless. Excellent project management and communication.' },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">Trust built on satisfaction.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <Quote className="h-10 w-10 text-primary/30 mx-auto mb-4" />
              <p className="text-gray-700 text-lg italic">"{testimonials[current].text}"</p>
              <h4 className="mt-6 font-bold text-text-dark">{testimonials[current].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={prev} variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button onClick={next} variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}