// 'use client'
// import { motion } from 'framer-motion'

// const steps = [
//   { step: '01', title: 'Consultation', desc: 'Understand your vision and requirements.' },
//   { step: '02', title: 'Design & Planning', desc: 'Detailed blueprints and approvals.' },
//   { step: '03', title: 'Execution', desc: 'Precision construction with regular updates.' },
//   { step: '04', title: 'Handover', desc: 'Quality check and final delivery.' },
// ]

// export function Process() {
//   return (
//     <section
//       className="relative overflow-hidden py-20 md:py-32"
//       style={{
//         background: 'linear-gradient(180deg, #020617 0%, #05070d 100%)',
//         color: '#ffffff',
//       }}
//     >
//       {/* Industrial texture overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-10"
//         style={{
//           backgroundImage: `radial-gradient(circle at center, #d84315 1px, transparent 1px)`,
//           backgroundSize: '32px 32px',
//         }}
//       />

//       {/* Subtle radial glows */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `radial-gradient(ellipse at 70% 30%, rgba(216, 67, 21, 0.08), transparent 70%),
//                        radial-gradient(ellipse at 30% 70%, rgba(251, 191, 36, 0.05), transparent 60%)`,
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span
//             className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
//             style={{ color: '#d84315', borderLeftColor: '#d84315' }}
//           >
//             Our Workflow
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Simple <span style={{ color: '#d84315' }}>Process</span>
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
//             Simple, transparent, and efficient.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="group relative p-6 rounded-xl transition-all duration-500"
//               style={{
//                 background: 'rgba(2, 6, 23, 0.4)',
//                 backdropFilter: 'blur(0px)',
//                 transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
//               }}
//               whileHover={{
//                 y: -6,
//                 background: 'rgba(17, 24, 39, 0.8)',
//                 boxShadow: '0 20px 35px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(216,67,21,0.2)',
//               }}
//             >
//               {/* Step number with dynamic styling on hover */}
//               <div className="relative">
//                 <div
//                   className="text-6xl md:text-7xl font-bold mb-3 transition-all duration-500 group-hover:opacity-100"
//                   style={{
//                     color: 'rgba(216, 67, 21, 0.35)',
//                     textShadow: '0 2px 10px rgba(0,0,0,0.3)',
//                   }}
//                 >
//                   {step.step}
//                 </div>
//                 {/* Optional subtle glow on hover */}
//                 <div
//                   className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
//                   style={{ background: 'radial-gradient(circle, rgba(216,67,21,0.4), transparent 70%)' }}
//                 />
//               </div>

//               <h3
//                 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-primary"
//                 style={{ color: '#ffffff' }}
//               >
//                 {step.title}
//               </h3>

//               <p style={{ color: '#9ca3af' }}>{step.desc}</p>

//               {/* Underline accent that grows on hover */}
//               <div
//                 className="w-10 h-0.5 mt-4 transition-all duration-500 group-hover:w-16"
//                 style={{
//                   background: 'linear-gradient(90deg, #d84315, #fbbf24)',
//                   opacity: 0.6,
//                 }}
//               />

//               {/* Connecting line between steps (desktop) */}
//               {idx < steps.length - 1 && (
//                 <div
//                   className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 transition-opacity duration-300 group-hover:opacity-100"
//                   style={{
//                     background: 'linear-gradient(90deg, #d84315, rgba(216,67,21,0.3))',
//                     opacity: 0.5,
//                   }}
//                 />
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


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
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FEF9E6 100%)',
        color: '#2C2C2C',
      }}
    >
      {/* Summer blueprint pattern overlay (light grid) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #C0392B10 0px, #C0392B10 2px, transparent 2px, transparent 40px),
                            repeating-linear-gradient(0deg, #C0392B10 0px, #C0392B10 2px, transparent 2px, transparent 40px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Sunlight glow accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 30%, rgba(244, 180, 0, 0.08), transparent 60%),
                       radial-gradient(ellipse at 85% 70%, rgba(192, 57, 43, 0.05), transparent 70%)`,
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
            style={{ color: '#C0392B', borderLeftColor: '#C0392B' }}
          >
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2C2C2C' }}>
            Simple <span style={{ color: '#C0392B' }}>Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#5a5a5a' }}>
            Simple, transparent, and efficient — from blueprint to handover.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02)',
              }}
            >
              {/* Step number */}
              <div className="relative">
                <div
                  className="text-6xl md:text-7xl font-bold mb-3 transition-all duration-300"
                  style={{
                    color: 'rgba(192, 57, 43, 0.15)',
                  }}
                >
                  {step.step}
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#C0392B]"
                style={{ color: '#2C2C2C' }}
              >
                {step.title}
              </h3>

              <p style={{ color: '#6c6c6c' }}>{step.desc}</p>

              {/* Gold underline that grows on hover */}
              <div
                className="w-10 h-0.5 mt-5 transition-all duration-500 group-hover:w-16"
                style={{
                  background: 'linear-gradient(90deg, #C0392B, #F4B400)',
                }}
              />

              {/* Optional connecting dash between cards (visible on large screens) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-20 -right-5 w-6 h-px transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #C0392B40, transparent)',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}