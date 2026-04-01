'use client';

import { motion } from 'framer-motion';
import { 
  Home, Building2, Warehouse, Palette, ClipboardList, Hammer 
} from 'lucide-react';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';

const servicesList = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Luxury villas, apartments, and individual houses with premium finishes and timely delivery.',
    features: ['Villas', 'Apartments', 'Independent Houses', 'Gated Communities'],
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Office spaces, hospitals, retail outlets, and corporate buildings designed for efficiency.',
    features: ['Offices', 'Hospitals', 'Retail Spaces', 'Hotels'],
  },
  {
    icon: Warehouse,
    title: 'Industrial Construction',
    description: 'Robust warehouses, factories, and industrial sheds built to withstand heavy usage.',
    features: ['Warehouses', 'Factory Sheds', 'Logistics Centers', 'Industrial Parks'],
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Modern, functional interiors that reflect your style and maximize space utilization.',
    features: ['Residential Interiors', 'Commercial Interiors', 'Modular Kitchen', 'False Ceilings'],
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'End-to-end project coordination, budgeting, and quality control for stress-free execution.',
    features: ['Planning', 'Budgeting', 'Quality Assurance', 'Vendor Management'],
  },
  {
    icon: Hammer,
    title: 'Renovation & Extensions',
    description: 'Revamp existing structures or add new floors/extensions with minimal disruption.',
    features: ['Home Renovation', 'Office Makeover', 'Structural Extensions', 'Facade Improvement'],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark text-light py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive construction solutions under one roof – from concept to completion.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition"
                  >
                    Get Quote →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <CTABanner /> */}
    </div>
  );
}