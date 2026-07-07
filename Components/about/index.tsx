// 'use client';

// import { motion } from 'framer-motion';
// import { Building2, Clock, Award, Users } from 'lucide-react';
// import Image from 'next/image';

// export default function AboutPage() {
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
//             About Tripura Infra Developers
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg text-gray-300 max-w-3xl mx-auto"
//           >
//             Building Hyderabad's future with integrity, innovation, and excellence for over two decades.
//           </motion.p>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="section-padding">
//         <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
//             <p className="text-gray-600 mb-4">
//               Founded in 2004, Tripura Infra Developers has grown from a small team of passionate engineers to one of Hyderabad’s most trusted construction firms. With over 20 years of experience, we have delivered 100+ successful projects ranging from luxurious villas to massive industrial warehouses.
//             </p>
//             <p className="text-gray-600 mb-4">
//               Our philosophy is simple: deliver quality, maintain transparency, and exceed deadlines. We believe that a construction project is not just about bricks and mortar—it’s about building dreams, relationships, and a better tomorrow.
//             </p>
//             <p className="text-gray-600">
//               Today, we are proud to be recognized for our engineering excellence, customer-first approach, and commitment to sustainable practices.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//               alt="Construction site"
//               fill
//               className="object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="bg-gray-50 section-padding">
//         <div className="container-custom grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-lg shadow-md"
//           >
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
//               <Award className="w-8 h-8 text-primary" />
//             </div>
//             <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//             <p className="text-gray-600">
//               To deliver world-class construction solutions that combine innovation, quality, and cost-efficiency, while ensuring complete client satisfaction and on-time project delivery.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="bg-white p-8 rounded-lg shadow-md"
//           >
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
//               <Users className="w-8 h-8 text-primary" />
//             </div>
//             <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//             <p className="text-gray-600">
//               To become Hyderabad’s most preferred construction partner, known for transparency, engineering excellence, and creating landmarks that stand the test of time.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Timeline / Experience */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { year: '2004', title: 'Humble Beginnings', desc: 'Started as a small construction firm with 5 employees.' },
//               { year: '2012', title: 'Expansion to Commercial', desc: 'Completed first commercial complex in Gachibowli.' },
//               { year: '2024', title: '100+ Projects Delivered', desc: 'Recognized as top builder in Hyderabad.' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="border-l-4 border-primary pl-6"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       {/* <CTABanner /> */}
//     </div>
//   );
// }





















// 'use client';

// import { motion } from 'framer-motion';
// import { Building2, Clock, Award, Users, Target, Eye } from 'lucide-react';
// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div>
//       {/* Hero Section – matches header style */}
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

//         {/* Radial glow from primary and accent */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse at 20% 40%, rgba(216,67,21,0.12), transparent 60%),
//                          radial-gradient(ellipse at 80% 60%, rgba(251,191,36,0.08), transparent 60%)`,
//           }}
//         />

//         {/* Gold gradient line (like header) */}
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
//             About <span style={{ color: '#d84315' }}>Tripura Infra</span> Developers
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg max-w-3xl mx-auto"
//             style={{ color: '#9ca3af' }}
//           >
//             Building Hyderabad's future with integrity, innovation, and excellence for over two decades.
//           </motion.p>
//         </div>
//       </section>

//       {/* Story Section – modern split layout */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span
//               className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
//               style={{ color: '#d84315', borderLeftColor: '#d84315' }}
//             >
//               Our Story
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0f172a' }}>
//               Building Dreams Since <span style={{ color: '#d84315' }}>2004</span>
//             </h2>
//             <p className="mb-4" style={{ color: '#6b7280' }}>
//               Founded in 2004, Tripura Infra Developers has grown from a small team of passionate engineers to one of Hyderabad’s most trusted construction firms. With over 20 years of experience, we have delivered 100+ successful projects ranging from luxurious villas to massive industrial warehouses.
//             </p>
//             <p className="mb-4" style={{ color: '#6b7280' }}>
//               Our philosophy is simple: deliver quality, maintain transparency, and exceed deadlines. We believe that a construction project is not just about bricks and mortar—it’s about building dreams, relationships, and a better tomorrow.
//             </p>
//             <p style={{ color: '#6b7280' }}>
//               Today, we are proud to be recognized for our engineering excellence, customer-first approach, and commitment to sustainable practices.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group"
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//               alt="Construction site"
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay with gradient */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: 'linear-gradient(45deg, rgba(216,67,21,0.2), transparent 70%)',
//               }}
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission & Vision – premium cards */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#05070d' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
//             style={{
//               backgroundColor: 'rgba(17, 24, 39, 0.8)',
//               border: '1px solid rgba(255,255,255,0.06)',
//               boxShadow: '0 20px 35px -12px rgba(0,0,0,0.5)',
//             }}
//             whileHover={{
//               boxShadow: '0 25px 40px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(216,67,21,0.2)',
//             }}
//           >
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
//               style={{ backgroundColor: 'rgba(216,67,21,0.15)' }}
//             >
//               <Target className="w-8 h-8" style={{ color: '#fbbf24' }} />
//             </div>
//             <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Our Mission</h3>
//             <p style={{ color: '#9ca3af' }}>
//               To deliver world-class construction solutions that combine innovation, quality, and cost-efficiency, while ensuring complete client satisfaction and on-time project delivery.
//             </p>
//             {/* Gold underline on hover */}
//             <div
//               className="w-12 h-0.5 mt-6 transition-all duration-500 group-hover:w-24"
//               style={{ backgroundColor: '#fbbf24' }}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
//             style={{
//               backgroundColor: 'rgba(17, 24, 39, 0.8)',
//               border: '1px solid rgba(255,255,255,0.06)',
//               boxShadow: '0 20px 35px -12px rgba(0,0,0,0.5)',
//             }}
//             whileHover={{
//               boxShadow: '0 25px 40px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(216,67,21,0.2)',
//             }}
//           >
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
//               style={{ backgroundColor: 'rgba(216,67,21,0.15)' }}
//             >
//               <Eye className="w-8 h-8" style={{ color: '#fbbf24' }} />
//             </div>
//             <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Our Vision</h3>
//             <p style={{ color: '#9ca3af' }}>
//               To become Hyderabad’s most preferred construction partner, known for transparency, engineering excellence, and creating landmarks that stand the test of time.
//             </p>
//             <div
//               className="w-12 h-0.5 mt-6 transition-all duration-500 group-hover:w-24"
//               style={{ backgroundColor: '#fbbf24' }}
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Journey Timeline – modern with gold accents */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//           <div className="text-center mb-12">
//             <span
//               className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
//               style={{ color: '#d84315', borderLeftColor: '#d84315' }}
//             >
//               Milestones
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0f172a' }}>
//               Our <span style={{ color: '#d84315' }}>Journey</span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { year: '2004', title: 'Humble Beginnings', desc: 'Started as a small construction firm with 5 employees.' },
//               { year: '2012', title: 'Expansion to Commercial', desc: 'Completed first commercial complex in Gachibowli.' },
//               { year: '2024', title: '100+ Projects Delivered', desc: 'Recognized as top builder in Hyderabad.' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
//                   borderLeft: `4px solid #d84315`,
//                 }}
//                 whileHover={{
//                   boxShadow: '0 20px 30px -12px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 <div className="text-4xl font-bold mb-2" style={{ color: '#d84315' }}>
//                   {item.year}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2" style={{ color: '#0f172a' }}>
//                   {item.title}
//                 </h3>
//                 <p style={{ color: '#6b7280' }}>{item.desc}</p>
//                 {/* Gold dot accent */}
//                 <div
//                   className="absolute -left-2 top-6 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ backgroundColor: '#fbbf24' }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats / Key Numbers – optional, to reinforce credibility */}
//       <section className="py-16" style={{ backgroundColor: '#05070d' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { value: '20+', label: 'Years Experience', icon: Clock },
//               { value: '100+', label: 'Projects Completed', icon: Building2 },
//               { value: '100%', label: 'Client Satisfaction', icon: Users },
//               { value: '50+', label: 'Expert Team', icon: Award },
//             ].map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group"
//               >
//                 <stat.icon className="w-8 h-8 mx-auto mb-3 transition-all duration-300 group-hover:scale-110" style={{ color: '#fbbf24' }} />
//                 <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#ffffff' }}>
//                   {stat.value}
//                 </div>
//                 <div style={{ color: '#9ca3af' }}>{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




'use client';

import { motion } from 'framer-motion';
import { Building2, Clock, Award, Users, Target, Eye, HardHat } from 'lucide-react';
import Image from 'next/image';
import FAQAccordion from '@/Components/ui/FAQAccordion';

const aboutFAQs = [
  {
    question: "What is the experience of Tripura Infra Developers in Hyderabad's construction sector?",
    answer: "Tripura Infra Developers has over 20+ years of active experience in Hyderabad, building residential, commercial, and industrial infrastructure. We have successfully completed more than 150+ projects since 2004."
  },
  {
    question: "What makes Tripura Infra Developers different from other builders in Telangana?",
    answer: "We are committed to three pillars: 100% price transparency (zero hidden costs), an in-house design and engineering squad that eliminates middlemen, and a strict compliance record (all projects adhere to TSRERA and HMDA building norms)."
  },
  {
    question: "Does Tripura Infra Developers provide custom architectural design services?",
    answer: "Yes. We have an in-house design team that creates 2D floor plans, 3D structural designs, elevation rendering, and complete interior layouts customized to our clients' specifications and budgets."
  },
  {
    question: "What types of construction contracts do you offer?",
    answer: "We offer complete turnkey construction solutions (material + labor contracts + interiors) as well as general civil contracting. Most clients prefer our turnkey services as they include end-to-end management, procurement, and execution."
  },
  {
    question: "How do you ensure construction quality?",
    answer: "We use certified Grade-A construction materials (TMT steel, premium concrete, branded plumbing/electrical fittings), carry out standard soil and structural tests at every stage, and conduct rigorous quality checking at the site."
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section – light summer gradient */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
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
          className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)',
          }}
        />

        {/* Gold glow — right */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
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

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">

          {/* Badge */}
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
            <span
              className="text-[10px] font-bold uppercase tracking-[3px]"
              style={{
                color: '#C0392B',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Who We Are
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black mb-4 leading-tight text-gray-900"
            style={{
              fontSize: 'clamp(2.0rem, 5vw, 3.5rem)',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            About <span style={{ color: '#C0392B' }}>Tripura Infra Developers</span>
            <span className="block text-lg md:text-2xl font-bold mt-2 text-gray-600">
              Leading Construction Company in Hyderabad
            </span>
          </motion.h1>

          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-6 h-[3px] w-24"
            style={{
              background: 'linear-gradient(90deg, #C0392B, #F4B400)',
              transformOrigin: 'center',
            }}
          />

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg max-w-3xl mx-auto"
            style={{
              color: 'rgba(44,44,44,0.58)',
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            An independent, government-registered infrastructure development company established in 2024 under the proprietorship of Ms. Swapna Vendi.
          </motion.p>
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

      {/* Story Section – modern split layout (light grey background) */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
              style={{ color: '#C0392B', borderLeftColor: '#C0392B' }}
            >
              Company Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Independent Infrastructure Development Company
            </h2>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: '#5a5a5a' }}>
              Established in 2024, Tripura Infra Developers is an independent infrastructure development company operating under the proprietorship of Ms. Swapna Vendi and co-founded by Mr. Venkat Reddy. We are a Government Registered Business dedicated to building premium spaces with absolute precision.
            </p>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: '#5a5a5a' }}>
              Led by Mr. Venkat Reddy's extensive 20+ years of civil engineering and operational execution expertise, we specialize in a diverse range of projects in Hyderabad, including luxury apartments, independent residential villas, commercial office spaces, and industrial construction. Our commitment to quality, reliability, compliance, and customer satisfaction forms the foundation of every project we deliver.
            </p>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(192,57,43,0.05)', borderLeft: '4px solid #C0392B' }}>
              <p className="text-sm leading-relaxed font-semibold" style={{ color: '#2C2C2C' }}>
                "Tripura Infra Developers is an independent infrastructure development company established in 2024 under the proprietorship of Ms. Swapna Vendi. The company is not affiliated with or associated with any other business operating under similar names."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Construction site"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Warm gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, rgba(192,57,43,0.15), transparent 70%)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision – white cards with soft shadow */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Our Core Values: <span style={{ color: '#C0392B' }}>Quality, Transparency, and Timely Delivery</span>
          </h2>
          <div className="h-[3px] w-20 bg-[#C0392B] mx-auto mt-4" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'rgba(192,57,43,0.1)' }}
            >
              <Target className="w-8 h-8" style={{ color: '#F4B400' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Our Mission</h3>
            <p style={{ color: '#5a5a5a' }}>
              To deliver world-class construction solutions that combine innovation, quality, and cost-efficiency, while ensuring complete client satisfaction and on-time project delivery.
            </p>
            {/* Gold underline on hover */}
            <div
              className="w-12 h-0.5 mt-6 transition-all duration-500 group-hover:w-24"
              style={{ backgroundColor: '#F4B400' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'rgba(192,57,43,0.1)' }}
            >
              <Eye className="w-8 h-8" style={{ color: '#F4B400' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Our Vision</h3>
            <p style={{ color: '#5a5a5a' }}>
              To become Hyderabad’s most preferred construction partner, known for transparency, engineering excellence, and creating landmarks that stand the test of time.
            </p>
            <div
              className="w-12 h-0.5 mt-6 transition-all duration-500 group-hover:w-24"
              style={{ backgroundColor: '#F4B400' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Founder & Leadership Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span
              className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-[3px] pl-3"
              style={{ color: '#C0392B', borderLeftColor: '#C0392B' }}
            >
              Leadership & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Our Leadership Team
            </h2>
            <div className="h-[3px] w-20 bg-[#C0392B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Ms. Swapna Vendi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image/Avatar Box */}
              <div
                className="w-full h-64 rounded-xl overflow-hidden relative mb-6 flex flex-col items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
              >
                <Users size={48} style={{ color: '#C0392B', marginBottom: '12px' }} />
                <span className="text-xl font-bold text-slate-800">Ms. Swapna Vendi</span>
                <span className="text-xs uppercase tracking-widest font-semibold mt-1" style={{ color: '#C0392B' }}>Founder & Proprietor</span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-1 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Ms. Swapna Vendi
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#C0392B' }}>
                  Founder & Proprietor
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Ms. Swapna Vendi established Tripura Infra Developers in 2024 with a clear vision: to create an infrastructure development company built on the pillars of absolute transparency, unwavering quality, and strict compliance with government standards.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Under her leadership, the company focuses on delivering premium residential, commercial, and industrial spaces that exceed client expectations. Her purpose is to drive a customer-centric approach in the construction industry, ensuring that every project reflects reliability and excellence.
                </p>
              </div>
            </motion.div>

            {/* Mr. Venkat Reddy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image Box */}
              <div className="w-full h-64 rounded-xl overflow-hidden relative mb-6 shrink-0 shadow-inner group">
                <Image
                  src="/Venkat Reddy.jpeg"
                  alt="Mr. Venkat Reddy"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-1 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Mr. Venkat Reddy
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#C0392B' }}>
                  Co-Founder & Head of Operations
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Mr. Venkat Reddy is a Civil Engineering professional with over 20 years of extensive experience in the construction and industrial sectors. He manages and operationally leads the business under a strong foundation of engineering and project execution.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  He oversees every aspect of the business—from client consultation and project planning to execution, quality control, and timely delivery. His hands-on leadership ensures that every project is completed to the highest standards of quality, safety, and compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registrations & Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <HardHat className="text-[#C0392B] shrink-0" size={24} />
                  <div>
                    <strong className="block text-gray-900">Professional Engineering Leadership</strong>
                    <span className="text-sm text-gray-600">Every process is managed and executed end-to-end by highly experienced engineers and qualified professionals.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Award className="text-[#C0392B] shrink-0" size={24} />
                  <div>
                    <strong className="block text-gray-900">Uncompromising Quality</strong>
                    <span className="text-sm text-gray-600">We use only the highest grade materials for all our infrastructure projects.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-[#C0392B] shrink-0" size={24} />
                  <div>
                    <strong className="block text-gray-900">Timely Delivery</strong>
                    <span className="text-sm text-gray-600">Strict adherence to project timelines and milestones.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="text-[#C0392B] shrink-0" size={24} />
                  <div>
                    <strong className="block text-gray-900">Customer Satisfaction</strong>
                    <span className="text-sm text-gray-600">A customer-first approach tailored to individual client needs.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Registrations & Certifications</h3>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#F5F5F5', border: '1px solid rgba(0,0,0,0.05)' }}>
                <p className="text-sm text-gray-600 mb-4">
                  Tripura Infra Developers is a fully compliant and Government Registered Business. We adhere strictly to local building codes, safety regulations, and infrastructure standards.
                </p>
                <ul className="space-y-2 text-sm font-semibold" style={{ color: '#2C2C2C' }}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                    Government Registered Proprietorship
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                    Established in 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                    Fully Compliant Operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                    ISO Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                    Trademark Registered
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={aboutFAQs} title="Tripura Infra Developers - About Page FAQs" />
    </div>
  );
}