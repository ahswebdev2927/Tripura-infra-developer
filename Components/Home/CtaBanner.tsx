'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

export function CtaBanner() {
    const router = useRouter();


    const handlebutton=()=>{
        router.push('/contact')
    }
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'linear-gradient(135deg, #f4511e, #d84315)',
      }}
    >
      {/* Industrial texture overlay (subtle) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial glow from accent (gold) for premium touch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(251,191,36,0.15), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          Get Your Free Quote Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-white/90 text-base md:text-lg"
        >
          Limited slots available for this quarter. Contact us now for a personalized consultation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <button
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '9999px',
              color: '#ffffff',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}
            whileHover={{
              scale: 1.05,
              background: '#ffffff',
              color: '#d84315',
              borderColor: '#ffffff',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            onClick={handlebutton}
          >
            <span className="relative z-10">Request Consultation</span>
            {/* Gold accent glow on hover (sparingly) */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.3), transparent 70%)',
              }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
}