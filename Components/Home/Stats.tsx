// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const stats = [
//   { value: '20+', label: 'Years Experience' },
//   { value: '100+', label: 'Projects Completed' },
//   { value: '100%', label: 'Client Satisfaction' },
// ];

// export default function Stats() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section className="section-dark py-16">
//       <div className="container-custom">
//         <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//               className="relative"
//             >
//               <div className="stat-number text-5xl md:text-6xl font-bold mb-3">
//                 {stat.value}
//               </div>
//               <div className="text-gray-300 text-lg font-medium tracking-wide">
//                 {stat.label}
//               </div>
//               {idx < stats.length - 1 && (
//                 <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'

// const stats = [
//   { value: '20+', label: 'Years Experience' },
//   { value: '100+', label: 'Projects Completed' },
//   { value: '100%', label: 'Client Satisfaction' },
// ]

// export function Stats() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-dark-bg py-24"
//     >
//       {/* Industrial texture overlay – uses primary red at low opacity */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle at center, var(--primary) 0.5px, transparent 0.5px)`,
//           backgroundSize: '24px 24px',
//           opacity: 0.08,
//         }}
//       />

//       {/* Optional subtle gradient to lift the section */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse at 70% 30%, rgba(216, 67, 21, 0.05), transparent 70%)',
//         }}
//       />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="text-center group"
//             >
//               <div className="relative inline-block">
//                 <span
//                   className="text-5xl md:text-6xl font-bold transition-colors duration-300"
//                   style={{ color: 'var(--primary)' }}
//                 >
//                   {stat.value}
//                 </span>
//                 {/* Underline that grows from left to right on hover – uses primary with accent glow */}
//                 <div
//                   className="absolute -bottom-2 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
//                   style={{ backgroundColor: 'var(--primary)' }}
//                 />
//                 {/* Subtle gold glow effect on hover – adds premium feel */}
//                 <div
//                   className="absolute inset-0 -z-10 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
//                   style={{ background: 'var(--accent-glow)' }}
//                 />
//               </div>
//               <p
//                 className="text-lg mt-4 tracking-wide"
//                 style={{ color: 'var(--muted-text)' }}
//               >
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { value: '20+', label: 'Years Industry Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
]

const parseStatValue = (value: string): { numeric: number; suffix: string } => {
  const match = value.match(/^(\d+)([+%]?)$/)
  if (match) {
    return { numeric: parseInt(match[1], 10), suffix: match[2] || '' }
  }
  return { numeric: 0, suffix: '' }
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counts, setCounts] = useState(stats.map(() => 0))
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true

      const targets = stats.map(stat => parseStatValue(stat.value).numeric)
      const duration = 2000
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(1, elapsed / duration)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const newCounts = targets.map(target => Math.floor(target * easeOutQuart))
        setCounts(newCounts)
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCounts(targets)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Red glow — left */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Gold glow — right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, #C0392B 30%, #F4B400 70%, transparent)',
        }}
      />

      {/* Left vertical bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #C0392B 30%, #F4B400 70%, transparent)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const suffix = parseStatValue(stat.value).suffix
            const currentCount = counts[idx]

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group text-center"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(192,57,43,0.1)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                  padding: '40px 32px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(192,57,43,0.25)'
                    ; (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 8px 32px rgba(192,57,43,0.1)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(192,57,43,0.1)'
                    ; (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 2px 16px rgba(0,0,0,0.04)'
                }}
              >
                {/* Top bar on hover */}
                {/* <div
                  className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    background: 'linear-gradient(90deg, #C0392B, #F4B400)',
                  }}
                /> */}

                <div className="relative inline-block">
                  <span
                    className="text-5xl md:text-6xl font-black transition-colors duration-300"
                    style={{
                      color: '#C0392B',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {currentCount}{suffix}
                  </span>

                  {/* Underline on hover */}
                  <div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, #C0392B, #F4B400)',
                    }}
                  />

                  {/* Gold glow on hover */}
                  <div
                    className="absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(244,180,0,0.6), transparent)',
                    }}
                  />
                </div>

                <p
                  className="text-sm mt-4 tracking-widest uppercase font-semibold"
                  style={{
                    color: 'rgba(44,44,44,0.55)',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(192,57,43,0.2) 30%, rgba(244,180,0,0.2) 70%, transparent)',
        }}
      />
    </section>
  )
}