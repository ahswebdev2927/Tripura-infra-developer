// 'use client'

// import { motion } from 'framer-motion'
// import { Home, Building2, Factory, Palette, BarChart, RefreshCw } from 'lucide-react'

// const services = [
//   { icon: Home, title: 'Residential', desc: 'Villas, apartments, and custom homes with modern design.' },
//   { icon: Building2, title: 'Commercial', desc: 'Offices, hospitals, and retail spaces built to scale.' },
//   { icon: Factory, title: 'Industrial', desc: 'Warehouses and industrial sheds with robust engineering.' },
//   { icon: Palette, title: 'Interior Design', desc: 'Aesthetic and functional interiors tailored to your taste.' },
//   { icon: BarChart, title: 'Project Management', desc: 'End-to-end supervision ensuring timely delivery.' },
//   { icon: RefreshCw, title: 'Renovation', desc: 'Extensions and remodeling for existing structures.' },
// ]

// export function Services() {
//   return (
//     <section className="section-light section-padding relative overflow-hidden">
//       {/* Subtle background pattern for industrial texture */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,var(--primary)_0px,var(--primary)_2px,transparent_2px,transparent_8px)]" />
//       </div>

//       <div className="container-custom relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block text-primary font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 border-primary pl-3">
//             What We Offer
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-text-dark">
//             Our <span className="text-primary">Services</span>
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
//             Comprehensive construction solutions tailored to your every need.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               {/* Custom Card – No ShadCN dependency */}
//               <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
//                 {/* Gold accent line at top */}
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

//                 <div className="p-8 flex flex-col items-center text-center">
//                   {/* Icon Container with premium styling */}
//                   <div className="relative mb-6">
//                     <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//                     <div className="relative bg-white rounded-full p-4 shadow-md border border-gray-100 group-hover:border-primary/30 transition-colors duration-300">
//                       <service.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
//                     </div>
//                   </div>

//                   <h3 className="text-2xl font-bold text-text-dark mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   {/* Optional subtle CTA – appears on hover */}
//                   <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <button className="text-primary font-medium text-sm inline-flex items-center gap-1 group/btn">
//                       Learn More
//                       <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




// 'use client'

// import { motion } from 'framer-motion'
// import { Home, Building2, Factory, Palette, BarChart, RefreshCw } from 'lucide-react'
// import Link from 'next/link'

// const services = [
//   { 
//     icon: Home, 
//     title: 'Residential', 
//     desc: 'Villas, apartments, and custom homes with modern design.',
//     href: '/services#residential'
//   },
//   { 
//     icon: Building2, 
//     title: 'Commercial', 
//     desc: 'Offices, hospitals, and retail spaces built to scale.',
//     href: '/services#commercial'
//   },
//   { 
//     icon: Factory, 
//     title: 'Industrial', 
//     desc: 'Warehouses and industrial sheds with robust engineering.',
//     href: '/services#industrial'
//   },
//   { 
//     icon: Palette, 
//     title: 'Interior Design', 
//     desc: 'Aesthetic and functional interiors tailored to your taste.',
//     href: '/services#interior'
//   },
//   { 
//     icon: BarChart, 
//     title: 'Project Management', 
//     desc: 'End-to-end supervision ensuring timely delivery.',
//     href: '/services#management'
//   },
//   { 
//     icon: RefreshCw, 
//     title: 'Renovation', 
//     desc: 'Extensions and remodeling for existing structures.',
//     href: '/services#renovation'
//   },
// ]

// export function Services() {
//   return (
//     <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
//       {/* Industrial texture overlay – subtle */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.02]"
//         style={{
//           backgroundImage: `radial-gradient(circle at center, #d84315 1px, transparent 1px)`,
//           backgroundSize: '32px 32px',
//         }}
//       />

//       {/* Subtle radial glow from primary */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse at 70% 20%, rgba(216,67,21,0.05), transparent 70%)',
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
//         {/* Section Header */}
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
//             What We Offer
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0f172a' }}>
//             Our <span style={{ color: '#d84315' }}>Services</span>
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: '#6b7280' }}>
//             Comprehensive construction solutions tailored to your every need.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               <div
//                 className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   boxShadow: '0 10px 30px -12px rgba(0,0,0,0.08)',
//                 }}
//                 whileHover={{
//                   boxShadow: '0 25px 35px -12px rgba(0,0,0,0.15)',
//                 }}
//               >
//                 {/* Gold gradient top line that expands on hover */}
//                 <div
//                   className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d84315] to-[#fbbf24] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
//                 />

//                 <div className="p-8 flex flex-col items-center text-center">
//                   {/* Icon container with premium hover scaling */}
//                   <div className="relative mb-6">
//                     <div
//                       className="absolute inset-0 rounded-full blur-xl transition-all duration-500 group-hover:blur-2xl"
//                       style={{ backgroundColor: 'rgba(216,67,21,0.15)' }}
//                     />
//                     <div
//                       className="relative rounded-full p-4 transition-all duration-300 group-hover:scale-110"
//                       style={{
//                         backgroundColor: '#ffffff',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
//                         border: '1px solid rgba(216,67,21,0.1)',
//                       }}
//                     >
//                       <service.icon className="h-12 w-12 transition-transform duration-300" style={{ color: '#d84315' }} />
//                     </div>
//                   </div>

//                   <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#d84315]" style={{ color: '#0f172a' }}>
//                     {service.title}
//                   </h3>
//                   <p className="leading-relaxed" style={{ color: '#6b7280' }}>
//                     {service.desc}
//                   </p>

//                   {/* CTA link – appears on hover */}
//                   <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <Link
//                       href={service.href}
//                       className="text-sm font-medium inline-flex items-center gap-1 transition-all group-hover:gap-2"
//                       style={{ color: '#d84315' }}
//                     >
//                       Learn More
//                       <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Subtle border glow on hover (gold) */}
//                 <div
//                   className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ boxShadow: '0 0 0 1px rgba(251,191,36,0.2)' }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const servicesList = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    description: 'Luxury villas, apartments, and individual houses with premium finishes and timely delivery.',
    features: ['Villas', 'Apartments', 'Independent Houses', 'Gated Communities'],
    // image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    image: '/services/ResidentialConstruction.jpg',
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    description: 'Office spaces, hospitals, retail outlets, and corporate buildings designed for efficiency.',
    features: ['Offices', 'Hospitals', 'Retail Spaces', 'Hotels'],
    // image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    image: '/services/Commercial%20Construction.jpg',
  },
  {
    slug: 'industrial-construction',
    title: 'Industrial Construction',
    description: 'Robust warehouses, factories, and industrial sheds built to withstand heavy usage.',
    features: ['Warehouses', 'Factory Sheds', 'Logistics Centers', 'Industrial Parks'],
    // image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=90', 
    image: '/services/Industrial%20Construction.jpg',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    description: 'Modern, functional interiors that reflect your style and maximize space utilization.',
    features: ['Residential Interiors', 'Commercial Interiors', 'Modular Kitchen', 'False Ceilings'],
    // image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    image: '/services/Interior%20Design.jpg',
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'End-to-end project coordination, budgeting, and quality control for stress-free execution.',
    features: ['Planning', 'Budgeting', 'Quality Assurance', 'Vendor Management'],
    // image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    image: '/services/Project%20Management.jpg',
  },
  {
    slug: 'renovation',
    title: 'Renovation & Extensions',
    description: 'Revamp existing structures or add new floors/extensions with minimal disruption.',
    features: ['Home Renovation', 'Office Makeover', 'Structural Extensions', 'Facade Improvement'],
    // image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    image: '/services/Renovation%20%26%20Extensions.jpg',
  },
  {
    slug: 'home-automation',
    title: 'Home Automation',
    description: 'Transform your living space with state-of-the-art smart systems, app-controlled lighting, climate control, and advanced security integrations.',
    features: ['Smart touch switches', 'Voice assistant integration', 'App & climate control', 'Intelligent security locks'],
    image: '/auto.jpg',
  },
]

export function Services() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
      {/* Industrial texture overlay – subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #d84315 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle radial glow from primary */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, rgba(216,67,21,0.05), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
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
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0f172a' }}>
            Our <span style={{ color: '#d84315' }}>Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: '#6b7280' }}>
            Comprehensive construction solutions tailored to your every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div
                className="relative transition-all duration-500 hover:-translate-y-2 bg-white h-full flex flex-col"
                style={{
                  boxShadow: '0 10px 30px -12px rgba(0,0,0,0.08)',
                }}
              >
                {/* Top accent line (sharp, expands on hover) */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d84315] to-[#fbbf24] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"
                />

                {/* Fixed height image - sharp edges */}
                <div className="relative w-full h-56 flex-shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#d84315]" style={{ color: '#0f172a' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description with line clamp */}
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#6b7280' }}>
                    {service.description}
                  </p>

                  {/* Features chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 transition-colors group-hover:bg-orange-50 group-hover:text-[#d84315]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA pushed to bottom */}
                  <div className="mt-auto pt-2">
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-sm font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-2"
                      style={{ color: '#d84315' }}
                    >
                      Learn More
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>

                {/* Subtle border glow (sharp) */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: '0 0 0 1px rgba(251,191,36,0.2)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}