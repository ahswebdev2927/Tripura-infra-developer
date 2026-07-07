// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   Home, Building2, Warehouse, Palette, ClipboardList, Hammer 
// } from 'lucide-react';
// import Link from 'next/link';
// import CTABanner from '@/components/sections/CTABanner';

// const servicesList = [
//   {
//     icon: Home,
//     title: 'Residential Construction',
//     description: 'Luxury villas, apartments, and individual houses with premium finishes and timely delivery.',
//     features: ['Villas', 'Apartments', 'Independent Houses', 'Gated Communities'],
//   },
//   {
//     icon: Building2,
//     title: 'Commercial Construction',
//     description: 'Office spaces, hospitals, retail outlets, and corporate buildings designed for efficiency.',
//     features: ['Offices', 'Hospitals', 'Retail Spaces', 'Hotels'],
//   },
//   {
//     icon: Warehouse,
//     title: 'Industrial Construction',
//     description: 'Robust warehouses, factories, and industrial sheds built to withstand heavy usage.',
//     features: ['Warehouses', 'Factory Sheds', 'Logistics Centers', 'Industrial Parks'],
//   },
//   {
//     icon: Palette,
//     title: 'Interior Design',
//     description: 'Modern, functional interiors that reflect your style and maximize space utilization.',
//     features: ['Residential Interiors', 'Commercial Interiors', 'Modular Kitchen', 'False Ceilings'],
//   },
//   {
//     icon: ClipboardList,
//     title: 'Project Management',
//     description: 'End-to-end project coordination, budgeting, and quality control for stress-free execution.',
//     features: ['Planning', 'Budgeting', 'Quality Assurance', 'Vendor Management'],
//   },
//   {
//     icon: Hammer,
//     title: 'Renovation & Extensions',
//     description: 'Revamp existing structures or add new floors/extensions with minimal disruption.',
//     features: ['Home Renovation', 'Office Makeover', 'Structural Extensions', 'Facade Improvement'],
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="bg-dark text-light py-20">
//         <div className="container-custom text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Our Services
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg text-gray-300 max-w-2xl mx-auto"
//           >
//             Comprehensive construction solutions under one roof – from concept to completion.
//           </motion.p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {servicesList.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//               >
//                 <div className="p-6">
//                   <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
//                     <service.icon className="w-7 h-7 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <ul className="space-y-1 mb-6">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
//                         <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition"
//                   >
//                     Get Quote →
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <CTABanner /> */}
//     </div>
//   );
// }



// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   Home, Building2, Warehouse, Palette, ClipboardList, Hammer,
//   Sparkles, Shield, Clock, CheckCircle, ArrowRight
// } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const servicesList = [
//   {
//     icon: Home,
//     title: 'Residential Construction',
//     description: 'Luxury villas, apartments, and individual houses with premium finishes and timely delivery.',
//     features: ['Villas', 'Apartments', 'Independent Houses', 'Gated Communities'],
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Building2,
//     title: 'Commercial Construction',
//     description: 'Office spaces, hospitals, retail outlets, and corporate buildings designed for efficiency.',
//     features: ['Offices', 'Hospitals', 'Retail Spaces', 'Hotels'],
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Warehouse,
//     title: 'Industrial Construction',
//     description: 'Robust warehouses, factories, and industrial sheds built to withstand heavy usage.',
//     features: ['Warehouses', 'Factory Sheds', 'Logistics Centers', 'Industrial Parks'],
//     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Palette,
//     title: 'Interior Design',
//     description: 'Modern, functional interiors that reflect your style and maximize space utilization.',
//     features: ['Residential Interiors', 'Commercial Interiors', 'Modular Kitchen', 'False Ceilings'],
//     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: ClipboardList,
//     title: 'Project Management',
//     description: 'End-to-end project coordination, budgeting, and quality control for stress-free execution.',
//     features: ['Planning', 'Budgeting', 'Quality Assurance', 'Vendor Management'],
//     image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Hammer,
//     title: 'Renovation & Extensions',
//     description: 'Revamp existing structures or add new floors/extensions with minimal disruption.',
//     features: ['Home Renovation', 'Office Makeover', 'Structural Extensions', 'Facade Improvement'],
//     image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
// ];

// const packages = [
//   {
//     name: 'Essential Home Package',
//     price: 'Starts at ₹2,499/sq ft',
//     description: 'Perfect for budget-conscious homeowners wanting quality construction.',
//     features: [
//       'RCC frame structure',
//       'Basic finishing (cement plaster, flooring)',
//       'Standard electrical & plumbing',
//       '12 months warranty',
//       'Project management included'
//     ],
//     popular: false,
//     cta: 'Get Quote',
//     image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//   },
//   {
//     name: 'Premium Villa Package',
//     price: 'Starts at ₹4,999/sq ft',
//     description: 'Luxury finishes and premium materials for your dream villa.',
//     features: [
//       'Earthquake-resistant design',
//       'Premium tiles, modular kitchen, false ceiling',
//       'Smart home pre-wiring',
//       'Landscaping & compound wall',
//       '24 months warranty',
//       'Interior design consultation'
//     ],
//     popular: true,
//     cta: 'Get Quote',
//     image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//   },
//   {
//     name: 'Commercial Fit-out',
//     price: 'Custom Quote',
//     description: 'Tailored solutions for offices, retail, and hospitality spaces.',
//     features: [
//       'Space planning & approvals',
//       'High-end finishes & branding integration',
//       'HVAC, fire safety, IT cabling',
//       'Furniture & partition works',
//       'Fast-track execution',
//       'Post-handover support'
//     ],
//     popular: false,
//     cta: 'Request Quote',
//     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//   }
// ];

// export default function ServicesPage() {
//   return (
//     <div>
//       {/* Hero Section – matches header and about page */}
//       <section
//         className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
//         style={{
//           background: 'linear-gradient(135deg, #020617 0%, #05070d 100%)',
//         }}
//       >
//         {/* Industrial texture overlay */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-10"
//           style={{
//             backgroundImage: `radial-gradient(circle at center, #d84315 1px, transparent 1px)`,
//             backgroundSize: '32px 32px',
//           }}
//         />

//         {/* Radial glows */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse at 20% 40%, rgba(216,67,21,0.12), transparent 60%),
//                          radial-gradient(ellipse at 80% 60%, rgba(251,191,36,0.08), transparent 60%)`,
//           }}
//         />

//         {/* Gold gradient line */}
//         <div
//           className="absolute top-0 left-0 right-0 h-[2px]"
//           style={{
//             background: 'linear-gradient(90deg, transparent, #fbbf24, #d84315, #fbbf24, transparent)',
//           }}
//         />

//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
//             style={{ color: '#ffffff' }}
//           >
//             Our <span style={{ color: '#d84315' }}>Services</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg max-w-2xl mx-auto"
//             style={{ color: '#9ca3af' }}
//           >
//             Comprehensive construction solutions under one roof – from concept to completion.
//           </motion.p>
//         </div>
//       </section>

//       {/* Services Grid with Images */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {servicesList.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   boxShadow: '0 10px 30px -12px rgba(0,0,0,0.1)',
//                 }}
//                 whileHover={{
//                   boxShadow: '0 25px 35px -12px rgba(0,0,0,0.2)',
//                 }}
//               >
//                 {/* Service Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
//                   />
//                   {/* Dark overlay for better text contrast if any text overlays, but here text is below */}
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
//                     }}
//                   />
//                   {/* Icon overlay on image */}
//                   <div
//                     className="absolute bottom-4 left-4 p-2 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       backgroundColor: 'rgba(216,67,21,0.9)',
//                       color: '#ffffff',
//                     }}
//                   >
//                     <service.icon className="w-5 h-5" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#d84315]" style={{ color: '#0f172a' }}>
//                     {service.title}
//                   </h3>
//                   <p className="mb-4 text-sm" style={{ color: '#6b7280' }}>
//                     {service.description}
//                   </p>
//                   <ul className="space-y-1 mb-6">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="text-sm flex items-center gap-2" style={{ color: '#6b7280' }}>
//                         <span
//                           className="w-1.5 h-1.5 rounded-full"
//                           style={{ backgroundColor: '#fbbf24' }}
//                         />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
//                     style={{ color: '#d84315' }}
//                   >
//                     Get Quote →
//                   </Link>
//                 </div>

//                 {/* Gold accent line on hover */}
//                 <div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d84315] to-[#fbbf24] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#05070d' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <span
//               className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
//               style={{ color: '#fbbf24', borderLeftColor: '#fbbf24' }}
//             >
//               Affordable Plans
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#ffffff' }}>
//               Our <span style={{ color: '#d84315' }}>Packages</span>
//             </h2>
//             <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
//               Choose a package that fits your needs, or request a fully custom quote.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {packages.map((pkg, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
//                 style={{
//                   backgroundColor: '#111827',
//                   border: pkg.popular ? '1px solid rgba(251,191,36,0.4)' : '1px solid rgba(255,255,255,0.08)',
//                   boxShadow: pkg.popular ? '0 10px 30px -12px rgba(251,191,36,0.2)' : '0 10px 30px -12px rgba(0,0,0,0.3)',
//                 }}
//               >
//                 {/* Popular badge */}
//                 {pkg.popular && (
//                   <div
//                     className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-semibold rounded-full"
//                     style={{
//                       background: 'linear-gradient(135deg, #fde68a, #fbbf24)',
//                       color: '#000000',
//                     }}
//                   >
//                     Most Popular
//                   </div>
//                 )}

//                 {/* Package Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={pkg.image}
//                     alt={pkg.name}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))' }}
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
//                     {pkg.name}
//                   </h3>
//                   <p className="text-sm mb-3" style={{ color: '#fbbf24' }}>
//                     {pkg.price}
//                   </p>
//                   <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
//                     {pkg.description}
//                   </p>
//                   <ul className="space-y-2 mb-6">
//                     {pkg.features.map((feature, i) => (
//                       <li key={i} className="text-xs flex items-start gap-2" style={{ color: '#d1d5db' }}>
//                         <CheckCircle size={14} style={{ color: '#fbbf24' }} className="shrink-0 mt-0.5" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center justify-center w-full gap-2 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 group-hover:gap-3"
//                     style={{
//                       background: pkg.popular 
//                         ? 'linear-gradient(135deg, #fde68a, #fbbf24)'
//                         : 'linear-gradient(135deg, #f4511e, #d84315)',
//                       color: pkg.popular ? '#000000' : '#ffffff',
//                     }}
//                   >
//                     {pkg.cta} <ArrowRight size={16} />
//                   </Link>
//                 </div>

//                 {/* Gold glow on hover for popular card */}
//                 {pkg.popular && (
//                   <div
//                     className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     style={{ boxShadow: '0 0 30px rgba(251,191,36,0.3)' }}
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Note linking to detailed services */}
//           <div className="text-center mt-12 pt-6 border-t border-white/10">
//             <p className="text-sm" style={{ color: '#9ca3af' }}>
//               For more detailed service information, please{' '}
//               <Link href="/contact" className="text-[#fbbf24] hover:underline">
//                 contact our team
//               </Link>{' '}
//               or browse our{' '}
//               <Link href="/projects" className="text-[#fbbf24] hover:underline">
//                 project portfolio
//               </Link>.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   Home, Building2, Warehouse, Palette, ClipboardList, Hammer,
//   Sparkles, Shield, Clock, CheckCircle, ArrowRight
// } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const servicesList = [
//   {
//     icon: Home,
//     title: 'Residential Construction',
//     description: 'Luxury villas, apartments, and individual houses with premium finishes and timely delivery.',
//     features: ['Villas', 'Apartments', 'Independent Houses', 'Gated Communities'],
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Building2,
//     title: 'Commercial Construction',
//     description: 'Office spaces, hospitals, retail outlets, and corporate buildings designed for efficiency.',
//     features: ['Offices', 'Hospitals', 'Retail Spaces', 'Hotels'],
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Warehouse,
//     title: 'Industrial Construction',
//     description: 'Robust warehouses, factories, and industrial sheds built to withstand heavy usage.',
//     features: ['Warehouses', 'Factory Sheds', 'Logistics Centers', 'Industrial Parks'],
//     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Palette,
//     title: 'Interior Design',
//     description: 'Modern, functional interiors that reflect your style and maximize space utilization.',
//     features: ['Residential Interiors', 'Commercial Interiors', 'Modular Kitchen', 'False Ceilings'],
//     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: ClipboardList,
//     title: 'Project Management',
//     description: 'End-to-end project coordination, budgeting, and quality control for stress-free execution.',
//     features: ['Planning', 'Budgeting', 'Quality Assurance', 'Vendor Management'],
//     image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     icon: Hammer,
//     title: 'Renovation & Extensions',
//     description: 'Revamp existing structures or add new floors/extensions with minimal disruption.',
//     features: ['Home Renovation', 'Office Makeover', 'Structural Extensions', 'Facade Improvement'],
//     image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
// ];

// const packages = [
//   {
//     name: 'Essential Home Package',
//     price: 'Starts at ₹2,499/sq ft',
//     description: 'Perfect for budget-conscious homeowners wanting quality construction.',
//     features: [
//       'RCC frame structure',
//       'Basic finishing (cement plaster, flooring)',
//       'Standard electrical & plumbing',
//       '12 months warranty',
//       'Project management included'
//     ],
//     popular: false,
//     cta: 'Get Quote',
//     image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//   },
//   {
//     name: 'Premium Villa Package',
//     price: 'Starts at ₹4,999/sq ft',
//     description: 'Luxury finishes and premium materials for your dream villa.',
//     features: [
//       'Earthquake-resistant design',
//       'Premium tiles, modular kitchen, false ceiling',
//       'Smart home pre-wiring',
//       'Landscaping & compound wall',
//       '24 months warranty',
//       'Interior design consultation'
//     ],
//     popular: true,
//     cta: 'Get Quote',
//     image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//   },
//   {
//     name: 'Commercial Fit-out',
//     price: 'Custom Quote',
//     description: 'Tailored solutions for offices, retail, and hospitality spaces.',
//     features: [
//       'Space planning & approvals',
//       'High-end finishes & branding integration',
//       'HVAC, fire safety, IT cabling',
//       'Furniture & partition works',
//       'Fast-track execution',
//       'Post-handover support'
//     ],
//     popular: false,
//     cta: 'Request Quote',
//     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//   }
// ];

// export default function ServicesPage() {
//   return (
//     <div>
//       {/* Hero Section – summer light gradient */}
//       <section
//   className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-15"
//   style={{ backgroundColor: '#F5F5F5' }}
// >
//   {/* Blueprint grid */}
//   <div
//     className="absolute inset-0 pointer-events-none"
//     style={{
//       backgroundImage: `
//         linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
//         linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)
//       `,
//       backgroundSize: '40px 40px',
//     }}
//   />

//   {/* Red glow left */}
//   <div
//     className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
//     style={{
//       background:
//         'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)',
//     }}
//   />

//   {/* Gold glow right */}
//   <div
//     className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
//     style={{
//       background:
//         'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.07) 0%, transparent 65%)',
//     }}
//   />

//   {/* Top accent */}
//   <div
//     className="absolute top-0 left-0 right-0 h-[3px]"
//     style={{
//       background:
//         'linear-gradient(90deg, transparent, #C0392B 30%, #F4B400 70%, transparent)',
//     }}
//   />

//   {/* Left vertical bar */}
//   <div
//     className="absolute left-0 top-0 bottom-0 w-[3px]"
//     style={{
//       background:
//         'linear-gradient(to bottom, transparent, #C0392B 30%, #F4B400 70%, transparent)',
//     }}
//   />

//   <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="inline-flex items-center gap-2 mb-6"
//       style={{
//         backgroundColor: '#ffffff',
//         border: '1px solid rgba(192,57,43,0.2)',
//         borderLeft: '3px solid #C0392B',
//         padding: '6px 16px',
//         boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
//       }}
//     >
//       <span
//         className="text-[10px] font-bold uppercase tracking-[3px]"
//         style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
//       >
//         What We Offer
//       </span>
//     </motion.div>

//     <motion.h1
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.05 }}
//       className="font-black mb-4 leading-tight"
//       style={{
//         fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
//         color: '#1C1C1C',
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       Our <span style={{ color: '#C0392B' }}>Services</span>
//     </motion.h1>

//     <motion.div
//       initial={{ scaleX: 0 }}
//       animate={{ scaleX: 1 }}
//       transition={{ duration: 0.7, delay: 0.3 }}
//       className="mx-auto mb-6 h-[3px] w-20"
//       style={{
//         background: 'linear-gradient(90deg, #C0392B, #F4B400)',
//         transformOrigin: 'center',
//       }}
//     />

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 }}
//       className="text-base md:text-lg max-w-2xl mx-auto"
//       style={{
//         color: 'rgba(44,44,44,0.58)',
//         fontFamily: "'Open Sans', sans-serif",
//       }}
//     >
//       Comprehensive construction solutions under one roof — from concept
//       to completion.
//     </motion.p>
//   </div>

//   <div
//     className="absolute bottom-0 left-0 right-0 h-[2px]"
//     style={{
//       background:
//         'linear-gradient(90deg, transparent, rgba(192,57,43,0.2) 30%, rgba(244,180,0,0.2) 70%, transparent)',
//     }}
//   />
// </section>

//       {/* Services Grid with Images – light grey background */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {servicesList.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative overflow-hidden         transition-all duration-500 hover:-translate-y-2"
//                 style={{
//                   backgroundColor: '#FFFFFF',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02)',
//                   border: '1px solid rgba(0,0,0,0.03)',
//                 }}
//                 whileHover={{
//                   boxShadow: '0 20px 30px -12px rgba(0,0,0,0.08)',
//                 }}
//               >
//                 {/* Service Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
//                   />
//                   {/* Warm light overlay (not dark) */}
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       background: 'linear-gradient(to bottom, rgba(255,245,215,0.2), rgba(192,57,43,0.1))',
//                     }}
//                   />
//                   {/* Icon overlay on image */}
//                   <div
//                     className="absolute bottom-4 left-4 p-2 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       backgroundColor: '#C0392B',
//                       color: '#FFFFFF',
//                     }}
//                   >
//                     <service.icon className="w-5 h-5" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#C0392B]" style={{ color: '#2C2C2C' }}>
//                     {service.title}
//                   </h3>
//                   <p className="mb-4 text-sm" style={{ color: '#5a5a5a' }}>
//                     {service.description}
//                   </p>
//                   <ul className="space-y-1 mb-6">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="text-sm flex items-center gap-2" style={{ color: '#6c6c6c' }}>
//                         <span
//                           className="w-1.5 h-1.5 rounded-full"
//                           style={{ backgroundColor: '#F4B400' }}
//                         />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
//                     style={{ color: '#C0392B' }}
//                   >
//                     Get Quote →
//                   </Link>
//                 </div>

//                 {/* Gold-red accent line on hover */}
//                 <div
//                   className="absolute bottom-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
//                   style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Packages Section – light cream background with white cards */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <span
//               className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
//               style={{ color: '#C0392B', borderLeftColor: '#C0392B' }}
//             >
//               Affordable Plans
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#2C2C2C' }}>
//               Our <span style={{ color: '#C0392B' }}>Packages</span>
//             </h2>
//             <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#5a5a5a' }}>
//               Choose a package that fits your needs, or request a fully custom quote.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {packages.map((pkg, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
//                 style={{
//                   backgroundColor: '#FFFFFF',
//                   border: pkg.popular ? `2px solid #F4B400` : '1px solid rgba(0,0,0,0.05)',
//                   boxShadow: pkg.popular ? '0 10px 25px -12px rgba(244,180,0,0.15)' : '0 8px 20px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02)',
//                 }}
//               >
//                 {/* Popular badge */}
//                 {pkg.popular && (
//                   <div
//                     className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-semibold rounded-full"
//                     style={{
//                       background: 'linear-gradient(135deg, #F4B400, #E6A000)',
//                       color: '#2C2C2C',
//                     }}
//                   >
//                     Most Popular
//                   </div>
//                 )}

//                 {/* Package Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={pkg.image}
//                     alt={pkg.name}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: 'linear-gradient(to bottom, rgba(255,245,215,0.2), rgba(192,57,43,0.15))' }}
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-2" style={{ color: '#2C2C2C' }}>
//                     {pkg.name}
//                   </h3>
//                   <p className="text-sm mb-3 font-semibold" style={{ color: '#C0392B' }}>
//                     {pkg.price}
//                   </p>
//                   <p className="text-sm mb-4" style={{ color: '#5a5a5a' }}>
//                     {pkg.description}
//                   </p>
//                   <ul className="space-y-2 mb-6">
//                     {pkg.features.map((feature, i) => (
//                       <li key={i} className="text-xs flex items-start gap-2" style={{ color: '#6c6c6c' }}>
//                         <CheckCircle size={14} style={{ color: '#F4B400' }} className="shrink-0 mt-0.5" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center justify-center w-full gap-2 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 group-hover:gap-3"
//                     style={{
//                       background: pkg.popular 
//                         ? 'linear-gradient(135deg, #F4B400, #E6A000)'
//                         : '#C0392B',
//                       color: pkg.popular ? '#2C2C2C' : '#FFFFFF',
//                     }}
//                   >
//                     {pkg.cta} <ArrowRight size={16} />
//                   </Link>
//                 </div>

//                 {/* Soft gold glow for popular card on hover */}
//                 {pkg.popular && (
//                   <div
//                     className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     style={{ boxShadow: '0 0 30px rgba(244,180,0,0.2)' }}
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Note linking to detailed services */}
//           <div className="text-center mt-12 pt-6 border-t" style={{ borderColor: '#E5E7EB' }}>
//             <p className="text-sm" style={{ color: '#5a5a5a' }}>
//               For more detailed service information, please{' '}
//               <Link href="/contact" className="text-[#C0392B] hover:underline font-medium">
//                 contact our team
//               </Link>{' '}
//               or browse our{' '}
//               <Link href="/projects" className="text-[#C0392B] hover:underline font-medium">
//                 project portfolio
//               </Link>.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




'use client';

import { motion } from 'framer-motion';
import {
  Home, Building2, Warehouse, Palette, ClipboardList, Hammer,
  CheckCircle, ArrowRight, Cpu,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQAccordion from '@/Components/ui/FAQAccordion';
import Packages from '@/Components/services/package';

const servicesList = [
  {
    slug: 'residential-construction',
    icon: Home,
    title: 'Residential Construction',
    description: 'High-quality residential construction including luxury villas, apartments, and independent houses across Hyderabad starting at ₹1,790/sq ft.',
    features: ['Luxury Villas', 'Apartments', 'Independent Houses', 'Gated Communities'],
    image: '/services/ResidentialConstruction.jpg',
  },
  {
    slug: 'commercial-construction',
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Premium corporate offices, retail spaces, and clinics in prime Hyderabad zones starting at ₹2,290/sq ft.',
    features: ['Corporate Offices', 'Hospitals & Clinics', 'Retail Complexes', 'Boutique Hotels'],
    image: '/services/Commercial%20Construction.jpg',
  },
  {
    slug: 'industrial-construction',
    icon: Warehouse,
    title: 'Industrial Construction',
    description: 'Heavy-duty industrial warehouse sheds, factories, and PEB structures across Hyderabad starting at ₹1,450/sq ft.',
    features: ['PEB Steel Sheds', 'Factory Buildings', 'Logistics Warehouses', 'Manufacturing Units'],
    image: '/services/Industrial%20Construction.jpg',
  },
  {
    slug: 'interior-design',
    icon: Palette,
    title: 'Interior Design',
    description: 'Modern, functional interiors that reflect your style and maximize space utilization.',
    features: ['Residential Interiors', 'Commercial Interiors', 'Modular Kitchens', 'Aesthetic False Ceilings'],
    image: '/services/Interior%20Design.jpg',
  },
  {
    slug: 'project-management',
    icon: ClipboardList,
    title: 'Project Management',
    description: 'End-to-end project coordination, budgeting, and quality control for stress-free execution.',
    features: ['Feasibility Analysis', 'Precise Budgeting', 'Quality Assurance Checklists', 'Vendor Management'],
    image: '/services/Project%20Management.jpg',
  },
  {
    slug: 'renovation',
    icon: Hammer,
    title: 'Renovation & Extensions',
    description: 'Revamp existing structures or add new floors/extensions with minimal disruption.',
    features: ['Complete Home Remodeling', 'Office Makeovers', 'Structural Reinforcements', 'Facade Improvements'],
    image: '/services/Renovation%20%26%20Extensions.jpg',
  },
  {
    slug: 'home-automation',
    icon: Cpu,
    title: 'Home Automation',
    description: 'Intelligent home solutions starting at ₹150/sq ft. Elevate your living with app-controlled utilities, automated lighting, security locks, and seamless voice controls.',
    features: ['Smart touch switches', 'Voice assistant integration', 'Scene & curtain controls', 'Smart locks & cameras'],
    image: '/auto.jpg',
  },
];

const packages = [
  {
    name: 'Essential Home Package',
    price: 'Starts at ₹1,790/sq ft',
    description: 'Solid foundation and basic finishes using quality steel, cement, and standard materials.',
    features: [
      'RCC Frame Structure',
      'Basic Finishing (Cement plaster, vitrified tiles)',
      'Standard Electrical & Plumbing fixtures',
      '12 Months Structural Warranty',
      'Dedicated Project Management',
    ],
    popular: false,
    cta: 'Get Quote',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Smart Choice Package',
    price: 'Starts at ₹2,290/sq ft',
    description: 'Premium finishes, customized modular kitchen, false ceilings, and smart pre-wiring.',
    features: [
      'Earthquake-Resistant Design',
      'Double Vitrified Tiles & Granite Countertops',
      'Smart Home Pre-Wiring & Branded Fixtures',
      'Compound Wall & Front Gate Construction',
      '24 Months Structural Warranty',
      'Complimentary Interior Design Consultation',
    ],
    popular: true,
    cta: 'Get Quote',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Premium Villa Package',
    price: 'Starts at ₹2,800/sq ft',
    description: 'Luxury residential construction with high-end architecture, premium marble/granite, and landscape designs.',
    features: [
      'Architect-led Custom Design',
      'Premium Italian Marble & Teakwood Doors',
      'Fully Outfitted Modular Kitchen & Premium Wardrobes',
      'Landscaping & Professional Exterior Lighting',
      '36 Months Structural Warranty',
      'Full Turnkey Project Execution',
    ],
    popular: false,
    cta: 'Request Quote',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

const servicesFAQs = [
  {
    question: "What types of construction services do you provide in Hyderabad?",
    answer: "We provide end-to-end residential construction (luxury villas, apartments, gated communities), commercial construction (office buildings, retail stores, clinics), industrial construction (PEB sheds, factories, warehouse layouts), as well as home interior designing and structural renovation."
  },
  {
    question: "How much does commercial construction cost per square foot in Hyderabad?",
    answer: "Our commercial construction rates in Hyderabad range from ₹2,000 to ₹3,500 per sq. ft. depending on design requirements, utility installations (HVAC, fire-fighting systems), and selected materials."
  },
  {
    question: "What is the cost of building an industrial warehouse shed in Hyderabad?",
    answer: "Industrial PEB (Pre-Engineered Building) steel sheds and warehouses range between ₹1,400 and ₹1,800 per sq. ft. depending on structural steel span, column height, roofing sheets, and flooring thickness."
  },
  {
    question: "Are there any hidden charges in your house construction packages?",
    answer: "No. Tripura Infra Developers operates on a 100% price transparency model. Every package contract details the exact specifications, brands, and quantities of materials to be used, with zero hidden costs."
  },
  {
    question: "How long does it take to construct a 30x40 independent house in Hyderabad?",
    answer: "A typical G+1 independent house on a 30x40 site (1,200 sq. ft. plot area) takes approximately 8 to 10 months from excavation to handover, subject to timely municipal building approvals."
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: '#F5F5F5' }}
      >
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
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.07) 0%, transparent 65%)' }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, #C0392B 30%, #F4B400 70%, transparent)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: 'linear-gradient(to bottom, transparent, #C0392B 30%, #F4B400 70%, transparent)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(192,57,43,0.2)',
              borderLeft: '3px solid #C0392B',
              padding: '6px 16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[3px]"
              style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
              What We Offer
            </span>
          </motion.div>

          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-black mb-4 leading-tight text-gray-900"
            style={{ fontSize: 'clamp(2.0rem, 5vw, 3.5rem)', fontFamily: "'Montserrat', sans-serif" }}
          >
            Construction Services in Hyderabad
            <span className="block text-lg md:text-2xl font-bold mt-2 text-gray-600">
              Residential, Commercial & Industrial Projects
            </span>
          </motion.h1> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-black mb-4 leading-tight text-gray-900"
            style={{ fontSize: 'clamp(2.0rem, 5vw, 3.5rem)', fontFamily: "'Montserrat', sans-serif" }}
          >
            <span style={{ color: '#C0392B' }}>Construction Services </span> in Hyderabad
            <span className="block text-lg md:text-2xl font-bold mt-2 text-gray-600">
              Residential, Commercial & Industrial Projects
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-6 h-[3px] w-20"
            style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)', transformOrigin: 'center' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(44,44,44,0.58)', fontFamily: "'Open Sans', sans-serif" }}
          >
            Comprehensive construction solutions under one roof — from concept to completion.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.2) 30%, rgba(244,180,0,0.2) 70%, transparent)' }} />
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Top Building Contractors in Hyderabad: <span style={{ color: '#C0392B' }}>Our Specialized Services</span>
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-20 bg-[#C0392B]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(192,57,43,0.08)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(192,57,43,0.12)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,57,43,0.2)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,57,43,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  />
                  <div id='point' className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(28,28,28,0.5) 100%)' }} />
                  <div
                    className="absolute bottom-4 left-4 p-2 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#C0392B', color: '#ffffff' }}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg font-black mb-2 transition-colors duration-300 group-hover:text-[#C0392B]"
                    style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'rgba(44,44,44,0.6)', fontFamily: "'Open Sans', sans-serif" }}>
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs flex items-center gap-2"
                        style={{ color: 'rgba(44,44,44,0.6)', fontFamily: "'Open Sans', sans-serif" }}>
                        <span className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
                          style={{ backgroundColor: '#C0392B' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest px-4 py-2.5 transition-all duration-300 group/btn"
                    style={{
                      backgroundColor: '#C0392B',
                      color: '#ffffff',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#F4B400';
                      (e.currentTarget as HTMLElement).style.color = '#1C1C1C';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#C0392B';
                      (e.currentTarget as HTMLElement).style.color = '#ffffff';
                    }}
                  >
                    View Details
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages Section ── */}
      {/* <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                backgroundColor: 'rgba(192,57,43,0.07)',
                border: '1px solid rgba(192,57,43,0.2)',
                borderLeft: '3px solid #C0392B',
                padding: '6px 16px',
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[3px]"
                style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}>
                Affordable Plans
              </span>
            </div>
            <h2
              className="font-black mb-3 leading-tight text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontFamily: "'Montserrat', sans-serif" }}
            >
              Fixed Price Residential House Construction <span style={{ color: '#C0392B' }}>Packages in Hyderabad</span>
            </h2>
            <div className="mx-auto mb-4 h-[3px] w-16"
              style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }} />
            <p className="text-sm max-w-xl mx-auto"
              style={{ color: 'rgba(44,44,44,0.58)', fontFamily: "'Open Sans', sans-serif" }}>
              Choose a package that fits your needs, or request a fully custom quote.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#ffffff',
                  border: pkg.popular ? '2px solid #F4B400' : '1px solid rgba(192,57,43,0.08)',
                  boxShadow: pkg.popular
                    ? '0 8px 32px rgba(244,180,0,0.15)'
                    : '0 2px 16px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(192,57,43,0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = pkg.popular
                    ? '0 8px 32px rgba(244,180,0,0.15)'
                    : '0 2px 16px rgba(0,0,0,0.04)';
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute top-4 right-4 z-10 px-3 py-1 text-[10px] font-black uppercase tracking-widest"
                    style={{ backgroundColor: '#F4B400', color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(28,28,28,0.55) 100%)' }} />
                </div>

                <div className="p-6">
                  <h3 className="font-black mb-1"
                    style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-sm font-bold mb-2" style={{ color: '#C0392B' }}>
                    {pkg.price}
                  </p>
                  <p className="text-xs mb-4"
                    style={{ color: 'rgba(44,44,44,0.58)', fontFamily: "'Open Sans', sans-serif" }}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-xs flex items-start gap-2"
                        style={{ color: 'rgba(44,44,44,0.65)', fontFamily: "'Open Sans', sans-serif" }}>
                        <CheckCircle size={12} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full gap-2 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300"
                    style={{
                      backgroundColor: pkg.popular ? '#F4B400' : '#C0392B',
                      color: pkg.popular ? '#1C1C1C' : '#ffffff',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = pkg.popular ? '#C0392B' : '#F4B400';
                      (e.currentTarget as HTMLElement).style.color = pkg.popular ? '#ffffff' : '#1C1C1C';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = pkg.popular ? '#F4B400' : '#C0392B';
                      (e.currentTarget as HTMLElement).style.color = pkg.popular ? '#1C1C1C' : '#ffffff';
                    }}
                  >
                    {pkg.cta}
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 pt-8"
            style={{ borderTop: '1px solid rgba(192,57,43,0.1)' }}>
            <p className="text-sm" style={{ color: 'rgba(44,44,44,0.55)', fontFamily: "'Open Sans', sans-serif" }}>
              For more detailed information,{' '}
              <Link href="/contact" className="font-bold transition-colors duration-200"
                style={{ color: '#C0392B' }}>contact our team</Link>
              {' '}or browse our{' '}
              <Link href="/projects" className="font-bold transition-colors duration-200"
                style={{ color: '#C0392B' }}>project portfolio</Link>.
            </p>
          </div>
        </div>
      </section> */}

      <Packages />


      <FAQAccordion items={servicesFAQs} title="Tripura Infra Developers - Services Page FAQs" />
    </div>
  );
}