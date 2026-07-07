'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// const testimonials = [
//   { name: 'Ramesh Gupta', role: 'Homeowner', text: 'Tripura Infra delivered my dream home ahead of schedule. Impeccable quality and professionalism.' },
//   { name: 'Priya Reddy', role: 'Commercial Client', text: 'Their team handled our office complex with utmost precision. Highly recommended!' },
//   { name: 'Suresh Kumar', role: 'Industrial Partner', text: 'The warehouse construction was flawless. Excellent project management and communication.' },
// ]

const testimonials = [
  {
    name: 'Anil Kumar Manchala',
    role: 'Homeowner',
    text: 'Our experience with Tripura Infra Developers has been smooth and stress-free. Whenever we had doubts about materials or design, their engineers patiently explained everything. Venkat Reddy personally ensured the work was done properly. Highly recommended!'
  },
  {
    name: 'Praveen Kumar',
    role: 'Homeowner',
    text: 'Very positive experience with good workmanship and friendly staff. They delivered our house as promised. My family appreciated the finishing. Strongly recommend Tripura Infra Developers for quality construction.'
  },
  {
    name: 'Renuka Vallapu',
    role: 'Homeowner',
    text: 'I felt very comfortable throughout the construction. The on-site team was responsible and easy to communicate with. They always provided polite explanations and updates. A trustworthy team led by Mr. Venkat Reddy focused on client satisfaction.'
  },
  {
    name: 'Ravi Raja',
    role: 'Homeowner',
    text: 'We wanted a reliable team for our house construction, and after meeting Venkat Reddy from Tripura Infra Developers, we felt confident. The process was handled step by step with clarity and support throughout.'
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Optional subtle industrial texture (very light) */}
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
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: '#0f172a' }}
          >
            What Our <span style={{ color: '#d84315' }}>Clients Say</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Trust built on satisfaction.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.2, 0.9, 0.4, 1] }}
              className="relative p-8 md:p-10 rounded-2xl shadow-xl text-center"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 20px 35px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(216,67,21,0.05)',
              }}
            >
              {/* Decorative top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: 'linear-gradient(90deg, #d84315, #fbbf24, #d84315)',
                  opacity: 0.6,
                }}
              />

              <Quote
                className="h-10 w-10 mx-auto mb-4"
                style={{ color: 'rgba(216, 67, 21, 0.3)' }}
              />

              <p
                className="text-lg md:text-xl leading-relaxed italic"
                style={{ color: '#1f2937' }}
              >
                "{testimonials[current].text}"
              </p>

              <div className="mt-6">
                <h4
                  className="font-bold text-lg"
                  style={{ color: '#0f172a' }}
                >
                  {testimonials[current].name}
                </h4>
                <p className="text-sm" style={{ color: '#d84315' }}>
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid rgba(216,67,21,0.2)',
                color: '#d84315',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid rgba(216,67,21,0.2)',
                color: '#d84315',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: current === idx ? '24px' : '8px',
                  backgroundColor: current === idx ? '#d84315' : '#e5e7eb',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}