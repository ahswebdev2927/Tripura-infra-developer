'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-dark py-16">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="stat-number text-5xl md:text-6xl font-bold mb-3">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg font-medium tracking-wide">
                {stat.label}
              </div>
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}