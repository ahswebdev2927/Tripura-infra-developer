// // 'use client'
// // import Image from 'next/image'
// // import { motion } from 'framer-motion'

// // const projects = [
// //   { title: 'Luxury Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
// //   { title: 'Tech Park', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
// //   { title: 'Warehouse Hub', category: 'Industrial', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
// // ]

// // export function FeaturedProjects() {
// //   return (
// //     <section className="section-dark section-padding">
// //       <div className="container-custom">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="text-center mb-12"
// //         >
// //           <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
// //           <p className="text-gray-300 mt-2">Excellence delivered across every domain.</p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {projects.map((project, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5, delay: idx * 0.1 }}
// //               className="image-premium rounded-lg overflow-hidden"
// //             >
// //               <Image
// //                 src={project.image}
// //                 alt={project.title}
// //                 width={600}
// //                 height={400}
// //                 className="w-full h-64 object-cover"
// //               />
// //               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
// //                 <h3 className="text-white font-bold text-xl">{project.title}</h3>
// //                 <p className="text-primary">{project.category}</p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// 'use client'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { ArrowUpRight } from 'lucide-react'

// const projects = [
//   { title: 'Luxury Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
//   { title: 'Tech Park', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
//   { title: 'Warehouse Hub', category: 'Industrial', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
// ]

// export function FeaturedProjects() {
//   return (
//     <section className="section-dark section-padding">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block text-primary font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 border-primary pl-3">
//             Our Portfolio
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Featured <span className="text-primary">Projects</span>
//           </h2>
//           <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
//             Excellence delivered across every domain.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="group relative overflow-hidden rounded-xl shadow-2xl"
//             >
//               <div className="relative h-80 w-full overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
//                 <div className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full mb-2">
//                   {project.category}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
//                 <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-sm font-medium">View Project</span>
//                   <ArrowUpRight className="h-4 w-4" />
//                 </div>
//               </div>
//               {/* Gold accent line at bottom */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { ArrowUpRight } from 'lucide-react'

// const projects = [
//   {
//     title: 'Luxury Villa',
//     category: 'Residential',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     title: 'Tech Park',
//     category: 'Commercial',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     title: 'Warehouse Hub',
//     category: 'Industrial',
//     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
// ]

// export function FeaturedProjects() {
//   return (
//     <section
//       className="relative overflow-hidden py-20 md:py-32"
//       style={{
//         background: 'linear-gradient(180deg, #020617, #05070d)',
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
//             Our Portfolio
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Featured <span style={{ color: '#d84315' }}>Projects</span>
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
//             Excellence delivered across every domain.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500"
//               style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
//             >
//               <div className="relative h-80 w-full overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
//                 />
//                 {/* Darker gradient overlay – ensures text readability */}
//                 <div
//                   className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
//                   style={{
//                     background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)',
//                   }}
//                 />
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
//                 {/* Category badge – solid primary with shadow */}
//                 <div
//                   className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full mb-2 shadow-md"
//                   style={{ backgroundColor: '#d84315' }}
//                 >
//                   {project.category}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
//                   {project.title}
//                 </h3>
//                 <Link
//                   href='/projects'
//                   className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ color: '#fbbf24' }}
//                 >
//                   <span  className="text-sm font-medium drop-shadow">View Project</span>
//                   <ArrowUpRight className="h-4 w-4 drop-shadow" />
//                 </Link>
//               </div>

//               {/* Gold accent line */}
//               <div
//                 className="absolute bottom-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
//                 style={{ background: 'linear-gradient(to right, #d84315, #fbbf24)' }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// const projects = [
//   {
//     title: 'Luxury Villa',
//     category: 'Residential',
//     // image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//      image: '/villas.jpg',
//   },
//   {
//     title: 'Tech Park',
//     category: 'Commercial',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
//   {
//     title: 'Warehouse Hub',
//     category: 'Industrial',
//     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   },
// ]

const projects = [
  {
    title: 'Luxury Villa',
    category: 'Villa',
    image: '/Tripura_projects/projects/villa 2.jpg',
    description: 'Premium villa construction with modern design, spacious layout, and high-quality finishes.',
  },
  {
    title: 'Sri Venkateswara Restaurant',
    category: 'Commercial',
    image: 'Tripura_projects/Commercial/1.jpeg',
    description: 'Fully constructed commercial restaurant with modern kitchen, dining space, and parking.',
  },
  {
    title: 'Shankar Rice Mill',
    category: 'Industrial',
    image: '/Tripura_projects/Industrial/1.jpeg',
    description: 'Complete industrial rice mill setup with storage, processing units, and infrastructure.',
  },
];

export function FeaturedProjects() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FEF9E6 100%)',
        color: '#2C2C2C',
      }}
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
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2C2C2C' }}>
            Featured <span style={{ color: '#C0392B' }}>Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#5a5a5a' }}>
            Excellence delivered across every domain — built with summer-ready precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white  overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.02)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {/* Image container - fixed height, no text overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                {/* Very subtle warm tint overlay (barely visible, adds summer feel) */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Category badge */}
                <div
                  className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full mb-3"
                  style={{ backgroundColor: '#C0392B' }}
                >
                  {project.category}
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>
                  {project.title}
                </h3>

                <p className="text-sm mb-4" style={{ color: '#6c6c6c' }}>
                  {project.category === 'Residential' && 'Modern luxury living with premium finishes.'}
                  {project.category === 'Commercial' && 'State-of-the-art workspace for innovation.'}
                  {project.category === 'Industrial' && 'High-capacity logistics and storage solutions.'}
                </p>

                <Link
                  href='/projects'
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: '#F4B400' }}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Gold accent line that appears on hover */}
                <div
                  className="mt-4 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#F4B400' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}