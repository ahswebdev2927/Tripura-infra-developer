'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ 
  items, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services, pricing, and construction process." 
}: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      className="relative overflow-hidden py-20 px-5 sm:px-8 lg:px-12"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FEF9E6 100%)',
        color: '#2C2C2C',
      }}
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      {/* Summer blueprint pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #C0392B10 0px, #C0392B10 2px, transparent 2px, transparent 40px),
                            repeating-linear-gradient(0deg, #C0392B10 0px, #C0392B10 2px, transparent 2px, transparent 40px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Sunlight glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 30%, rgba(244, 180, 0, 0.08), transparent 60%),
                       radial-gradient(ellipse at 85% 70%, rgba(192, 57, 43, 0.05), transparent 70%)`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(192,57,43,0.2)',
              borderLeft: '3px solid #C0392B',
              padding: '6px 16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-[3px]"
              style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
            >
              Got Questions?
            </span>
          </div>

          <h2 
            className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4"
            style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}
          >
            {title}
          </h2>

          <div
            className="mx-auto mb-6 h-[3px] w-20"
            style={{
              background: 'linear-gradient(90deg, #C0392B, #F4B400)',
              transformOrigin: 'center',
            }}
          />

          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(44,44,44,0.65)', fontFamily: "'Open Sans', sans-serif" }}>
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
                className="bg-white border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden rounded-xl"
                style={{
                  borderLeft: isOpen ? '4px solid #C0392B' : '4px solid transparent',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.01)',
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle 
                      size={18} 
                      className="shrink-0 mt-0.5 transition-colors duration-200"
                      style={{ color: isOpen ? '#C0392B' : '#9ca3af' }}
                    />
                    <span 
                      itemProp="name"
                      className="text-sm md:text-base font-bold text-gray-800 leading-snug"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: isOpen ? 'rgba(192,57,43,0.1)' : 'rgba(0,0,0,0.03)',
                      color: isOpen ? '#C0392B' : '#9ca3af',
                    }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div 
                        itemProp="acceptedAnswer"
                        itemScope
                        itemType="https://schema.org/Answer"
                        className="px-5 pb-6 pl-[50px] border-t border-gray-50 pt-3"
                      >
                        <div 
                          itemProp="text"
                          className="text-sm text-gray-600 leading-relaxed font-normal"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
