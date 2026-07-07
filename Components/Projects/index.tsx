// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import FAQAccordion from '@/Components/ui/FAQAccordion';

// const projectsData = [
//   {
//     id: 1,
//     title: 'Luxury Villas - Narsingi',
//     category: 'residential',
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
//     location: 'Narsingi, Hyderabad',
//   },
//   {
//     id: 2,
//     title: 'Corporate Tower - HITEC City',
//     category: 'commercial',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     location: 'HITEC City, Hyderabad',
//   },
//   {
//     id: 3,
//     title: 'Industrial Warehouse - Patancheru',
//     category: 'industrial',
//     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     location: 'Patancheru, Hyderabad',
//   },
//   {
//     id: 4,
//     title: 'Premium Apartments - Gachibowli',
//     category: 'residential',
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     location: 'Gachibowli, Hyderabad',
//   },
//   {
//     id: 5,
//     title: 'Multi-Speciality Hospital',
//     category: 'commercial',
//     image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     location: 'Kompally, Hyderabad',
//   },
//   {
//     id: 6,
//     title: 'Factory Shed - Cherlapally',
//     category: 'industrial',
//     image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     location: 'Cherlapally, Hyderabad',
//   },
// ];

// const projectsFAQs = [
//   {
//     question: "What major construction projects has Tripura Infra Developers completed?",
//     answer: "Tripura Infra Developers has completed a wide range of residential houses, luxury villas, commercial towers, multi-specialty hospitals, and industrial PEB sheds/warehouses across Telangana."
//   },
//   {
//     question: "Where are your ongoing projects located in Hyderabad?",
//     answer: "Our ongoing projects are located in key growth corridors of Hyderabad including Patancheru, Kompally, Uppal, Nagaram, and Medchal."
//   },
//   {
//     question: "Can I visit an active construction site?",
//     answer: "Yes, we arrange site visits for prospective clients to our active construction sites under strict safety guidelines. Please contact our office to schedule a visit."
//   },
//   {
//     question: "Do you handle approval documentation for projects?",
//     answer: "Yes, we offer complete support for building permissions and clearances, including TSRERA registration, HMDA approvals, and GHMC building plans."
//   },
//   {
//     question: "What is the typical completion timeframe for your commercial complexes?",
//     answer: "A standard commercial complex takes between 18 to 24 months to complete, depending on the built-up area, soil conditions, and structural design complexity."
//   }
// ];

// export default function ProjectsPage() {
//   const [filter, setFilter] = useState('all');

//   const filteredProjects = filter === 'all'
//     ? projectsData
//     : projectsData.filter(p => p.category === filter);

//   return (
//     <div>
//       {/* Hero Section – summer light gradient */}
//       <section
//         className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
//         style={{ backgroundColor: '#F5F5F5' }}
//       >
//         {/* Blueprint grid */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//           }}
//         />

//         {/* Red glow left */}
//         <div
//           className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)',
//           }}
//         />

//         {/* Gold glow right */}
//         <div
//           className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.07) 0%, transparent 65%)',
//           }}
//         />

//         {/* Top accent */}
//         <div
//           className="absolute top-0 left-0 right-0 h-[3px]"
//           style={{
//             background:
//               'linear-gradient(90deg, transparent, #C0392B 30%, #F4B400 70%, transparent)',
//           }}
//         />

//         {/* Left vertical bar */}
//         <div
//           className="absolute left-0 top-0 bottom-0 w-[3px]"
//           style={{
//             background:
//               'linear-gradient(to bottom, transparent, #C0392B 30%, #F4B400 70%, transparent)',
//           }}
//         />

//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 mb-6"
//             style={{
//               backgroundColor: '#ffffff',
//               border: '1px solid rgba(192,57,43,0.2)',
//               borderLeft: '3px solid #C0392B',
//               padding: '6px 16px',
//               boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
//             }}
//           >
//             <span
//               className="text-[10px] font-bold uppercase tracking-[3px]"
//               style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
//             >
//               Our Portfolio
//             </span>
//           </motion.div>

//           {/* <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-black mb-4 leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl"
//             style={{
//               // fontSize: 'clamp(2rem, 4vw, 3.5rem)',
//               color: '#1C1C1C',
//               fontFamily: "'Montserrat', sans-serif",
//             }}
//           >
//             Tripura Infra Developers – Ongoing & Completed Construction Projects in Hyderabad
//           </motion.h1> */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-black mb-4 leading-tight text-gray-900"
//             style={{
//               fontSize: 'clamp(2.0rem, 5vw, 3.5rem)',
//               fontFamily: "'Montserrat', sans-serif",
//             }}
//           >
//             <span style={{ color: '#C0392B' }}>Tripura Infra Developers</span> – Ongoing & Completed Construction Projects in Hyderabad
//           </motion.h1>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="mx-auto mb-6 h-[3px] w-20"
//             style={{
//               background: 'linear-gradient(90deg, #C0392B, #F4B400)',
//               transformOrigin: 'center',
//             }}
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-base md:text-lg max-w-2xl mx-auto"
//             style={{
//               color: 'rgba(44,44,44,0.58)',
//               fontFamily: "'Open Sans', sans-serif",
//             }}
//           >
//             A glimpse of our excellence – from dream homes to industrial landmarks.
//           </motion.p>
//         </div>

//         {/* Bottom accent */}
//         <div
//           className="absolute bottom-0 left-0 right-0 h-[2px]"
//           style={{
//             background:
//               'linear-gradient(90deg, transparent, rgba(192,57,43,0.2) 30%, rgba(244,180,0,0.2) 70%, transparent)',
//           }}
//         />
//       </section>

//       {/* Filters and Grid Section */}
//       <section className="relative overflow-hidden" style={{ backgroundColor: '#F9F9F9' }}>
//         {/* Subtle grid pattern overlay */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(192,57,43,0.12) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(192,57,43,0.12) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//           }}
//         />

//         <div className="relative z-10">
//           {/* Filter Buttons */}
//           <div className="container-custom py-8 flex flex-wrap justify-center gap-4">
//             {['all', 'residential', 'commercial', 'industrial'].map((cat) => (
//               <Button
//                 key={cat}
//                 variant={filter === cat ? 'default' : 'outline'}
//                 onClick={() => setFilter(cat)}
//                 className={filter === cat ? 'bg-[#C0392B] hover:bg-[#A93212] text-white' : 'text-gray-900 border-gray-300 hover:bg-gray-100'}
//               >
//                 {cat.charAt(0).toUpperCase() + cat.slice(1)}
//               </Button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="section-padding pt-0">
//             <div className="container-custom">
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredProjects.map((project, idx) => (
//                   <motion.div
//                     key={project.id}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.05 }}
//                     className="group relative rounded-lg overflow-hidden shadow-lg h-64 cursor-pointer"
//                   >
//                     <div className="relative h-full w-full">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity flex items-end p-6">
//                       <div>
//                         <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
//                         <p className="text-gray-300 text-sm font-medium">{project.location}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQs Section */}
//       <FAQAccordion items={projectsFAQs} title="Projects & Construction FAQ" />
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Calendar, X } from 'lucide-react';
import FAQAccordion from '@/Components/ui/FAQAccordion';



const projectsData = [
  // ========== RESIDENTIAL (3 dummy projects) ==========
  {
    id: 1,
    title: 'Sai Residency - Kondapur',
    category: 'residential',
    categoryLabel: 'Residential',
    image: '/Tripura_projects/Residential/11.jpeg',
    location: 'Hyderabad, Telangana',
    year: '2024',
    description: 'Modern gated community with 2 & 3 BHK apartments, landscaped gardens.',
  },
  {
    id: 2,
    title: 'Lotus Homes - Miyapur',
    category: 'residential',
    categoryLabel: 'Residential',
    image: '/Tripura_projects/Residential/12.jpeg',
    location: 'Hyderabad, Telangana',
    year: '2023',
    description: 'Premium independent houses with Vastu compliance and high-end finishes.',
  },
  {
    id: 3,
    title: 'Green Valley Villas - vanasthalipuram',
    category: 'residential',
    categoryLabel: 'Residential',
    image: '/Tripura_projects/Residential/13.jpeg',
    location: 'Hyderabad, Telangana',
    year: '2024',
    description: 'Luxury villas with private pools, smart home automation, and sustainable design.',
  },

  // ========== COMMERCIAL (your real projects) ==========
  {
    id: 4,
    title: 'Sri Venkateswara Restaurant',
    category: 'commercial',
    categoryLabel: 'Commercial',
    image: '/Tripura_projects/Commercial/1.jpeg',
    location: 'Nalgonda, Telangana',
    year: '2024',
    description: 'Fully constructed commercial restaurant space with modern kitchen, dining hall, and parking.',
  },
  {
    id: 5,
    title: 'Sri Anjireddy Gardens',
    category: 'commercial',
    categoryLabel: 'Commercial',
    image: '/Tripura_projects/Commercial/2.jpeg',
    location: 'Sangareddy District, Telangana',
    year: '2023',
    description: 'Commercial garden and event venue with banquet halls, landscaping, and ample parking.',
  },

  // ========== INDUSTRIAL (your 4 real projects) ==========
  {
    id: 6,
    title: 'Shankar Rice Mill',
    category: 'industrial',
    categoryLabel: 'Industrial',
    image: '/Tripura_projects/Industrial/1.jpeg',
    location: 'Chennor, Telangana',
    year: '2024',
    description: 'Complete rice mill construction including storage silos, parboiling unit, and godowns.',
  },
  {
    id: 7,
    title: 'Jagannadh Agro Ice Mills',
    category: 'industrial',
    categoryLabel: 'Industrial',
    image: '/Tripura_projects/Industrial/2.jpeg',
    location: 'Bhadrak, Odisha',
    year: '2023',
    description: 'Industrial ice manufacturing plant with cold storage facilities and modern machinery.',
  },
  {
    id: 8,
    title: 'Kubera Dall Mill',
    category: 'industrial',
    categoryLabel: 'Industrial',
    image: '/Tripura_projects/Industrial/3.jpeg',
    location: 'Tenali, Andhra Pradesh',
    year: '2024',
    description: 'Pulse/dal milling unit with automated processing lines and quality control lab.',
  },
  {
    id: 9,
    title: 'Thapashwi Lakshmi Balaji Industries',
    category: 'industrial',
    categoryLabel: 'Industrial',
    image: '/Tripura_projects/Industrial/4.jpeg',
    location: 'Macherla, Andhra Pradesh',
    year: '2024',
    description: 'Multi-purpose industrial shed for manufacturing and warehousing operations.',
  },

  // ========== INTERIOR (3 dummy projects) ==========
  {
    id: 10,
    title: 'Modern Office Interior - Gachibowli',
    category: 'interior',
    categoryLabel: 'Interior',
    image: '/Tripura_projects/projects/ModernOfficeInterior.jpg',
    location: 'Hyderabad, Telangana',
    year: '2024',
    description: 'Contemporary office design with glass partitions, ergonomic furniture, and smart lighting.',
  },
  {
    id: 11,
    title: 'Luxury Home Interior - Banjara Hills',
    category: 'interior',
    categoryLabel: 'Interior',
    image: '/Tripura_projects/projects/LuxuryHome.jpg',
    location: 'Hyderabad, Telangana',
    year: '2023',
    description: 'Elegant residential interior with modular kitchen, false ceilings, and custom furniture.',
  },
  {
    id: 12,
    title: 'Luxury Bedroom Interior Design',
    category: 'interior',
    categoryLabel: 'Interior',
    image: '/Tripura_projects/projects/bedroominterior.jpg',
    location: 'Hyderabad, Telangana',
    year: '2024',
    description: 'Elegant bedroom interior featuring custom wardrobes, premium finishes, ambient lighting, and a modern design focused on comfort and functionality.',
  },
];
const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  // { value: 'interior', label: 'Interior' },
];

const projectsFAQs = [
  {
    question: "What major construction projects has Tripura Infra Developers completed?",
    answer: "Tripura Infra Developers has completed a wide range of residential houses, luxury villas, commercial towers, multi-specialty hospitals, and industrial PEB sheds/warehouses across Telangana & Andhra Pradesh."
  },
  {
    question: "Can I visit an active construction site?",
    answer: "Yes, we arrange site visits for prospective clients to our active construction sites under strict safety guidelines. Please contact our office to schedule a visit."
  },
  {
    question: "Do you handle approval documentation for projects?",
    answer: "Yes, we offer complete support for building permissions and clearances, including TSRERA registration, HMDA approvals, and GHMC building plans."
  },
  {
    question: "What is the typical completion timeframe for your commercial complexes?",
    answer: "A standard commercial complex takes between 18 to 24 months to complete, depending on the built-up area, soil conditions, and structural design complexity."
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
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

        {/* Red glow left */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)',
          }}
        />

        {/* Gold glow right */}
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
            className="inline-flex items-center gap-2 mb-5"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(192,57,43,0.2)',
              borderLeft: '3px solid #C0392B',
              padding: '5px 14px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-[3px]"
              style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black mb-4 leading-tight text-gray-900"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span style={{ color: '#C0392B' }}>Tripura Infra Developers</span> – Ongoing & Completed Construction Projects in Hyderabad
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-5 h-[3px] w-16"
            style={{
              background: 'linear-gradient(90deg, #C0392B, #F4B400)',
              transformOrigin: 'center',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base max-w-2xl mx-auto"
            style={{
              color: 'rgba(44,44,44,0.58)',
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            A glimpse of our excellence – from dream homes to industrial landmarks.
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

      {/* ══════════════════════════════
          FILTER BAR
      ══════════════════════════════ */}
      <div
        className="sticky top-20 z-20 border-b"
        style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(192,57,43,0.1)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <motion.button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  whileTap={{ scale: 0.96 }}
                  className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#C0392B' : 'transparent',
                    color: isActive ? '#ffffff' : 'rgba(44,44,44,0.6)',
                    border: isActive
                      ? '1.5px solid #C0392B'
                      : '1.5px solid rgba(44,44,44,0.15)',
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: isActive
                      ? '0 4px 12px rgba(192,57,43,0.3)'
                      : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        '#C0392B';
                      (e.currentTarget as HTMLElement).style.color = '#C0392B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(44,44,44,0.15)';
                      (e.currentTarget as HTMLElement).style.color =
                        'rgba(44,44,44,0.6)';
                    }
                  }}
                >
                  {cat.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          PROJECTS GRID
      ══════════════════════════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="group relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 16px 40px rgba(192,57,43,0.15)',
                  }}
                >
                  {/* Image - reduced height */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      style={{
                        transform:
                          hoveredId === project.id
                            ? 'scale(1.07)'
                            : 'scale(1)',
                        transition: 'transform 0.7s ease',
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 transition-all duration-500"
                      style={{
                        background:
                          hoveredId === project.id
                            ? 'linear-gradient(to top, rgba(192,57,43,0.92) 0%, rgba(44,44,44,0.5) 60%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(28,28,28,0.82) 0%, rgba(28,28,28,0.3) 60%, transparent 100%)',
                      }}
                    />
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 z-10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[2px]"
                    style={{
                      backgroundColor: '#C0392B',
                      color: '#ffffff',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {project.categoryLabel}
                  </div>

                  {/* Year badge */}
                  {/* <div
                    className="absolute top-3 right-3 z-10 px-2.5 py-0.5 text-[10px] font-bold flex items-center gap-1"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      color: '#2C2C2C',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <Calendar size={10} style={{ color: '#C0392B' }} />
                    {project.year}
                  </div> */}

                  {/* Content - reduced padding */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <motion.div
                      animate={{ y: hoveredId === project.id ? -4 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="text-base font-black mb-1 text-white leading-tight"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <div
                        className="flex items-center gap-1.5 text-xs mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                      >
                        <MapPin size={11} style={{ color: '#F4B400' }} />
                        <span>{project.location}</span>
                      </div>

                      {/* Description on hover */}
                      <motion.p
                        animate={{
                          opacity: hoveredId === project.id ? 1 : 0,
                          y: hoveredId === project.id ? 0 : 8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-xs mb-2.5 line-clamp-2"
                        style={{
                          color: 'rgba(255,255,255,0.8)',
                          fontFamily: "'Open Sans', sans-serif",
                        }}
                      >
                        {project.description}
                      </motion.p>

                      {/* CTA on hover - now opens modal */}
                      <motion.div
                        animate={{
                          opacity: hoveredId === project.id ? 1 : 0,
                          y: hoveredId === project.id ? 0 : 8,
                        }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                      >
                        <button
                          onClick={() => openModal(project)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 transition-all duration-300 hover:gap-2.5"
                          style={{
                            backgroundColor: '#F4B400',
                            color: '#1C1C1C',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor =
                              '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor =
                              '#F4B400';
                          }}
                        >
                          View Project
                          <ArrowUpRight size={11} />
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Left red border on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20"
                    style={{
                      background:
                        'linear-gradient(to top, #C0392B, #F4B400)',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-base"
                style={{ color: 'rgba(44,44,44,0.45)' }}
              >
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ SECTION
      ══════════════════════════════ */}
      <FAQAccordion items={projectsFAQs} title="Projects & Construction FAQ" />

      {/* ══════════════════════════════
          PROJECT MODAL
      ══════════════════════════════ */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md"
                style={{ color: '#C0392B' }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section - Left Side */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Category badge overlay on image */}
                  <div
                    className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px]"
                    style={{
                      backgroundColor: '#C0392B',
                      color: '#ffffff',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {selectedProject.categoryLabel}
                  </div>
                  {/* Year badge overlay on image */}
                  <div
                    className="absolute top-4 right-16 z-10 px-3 py-1 text-[10px] font-bold flex items-center gap-1"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      color: '#2C2C2C',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <Calendar size={10} style={{ color: '#C0392B' }} />
                    {selectedProject.year}
                  </div>
                </div>

                {/* Details Section - Right Side */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  {/* Title */}
                  <h2
                    className="text-2xl md:text-3xl font-black mb-3"
                    style={{ color: '#1C1C1C', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {selectedProject.title}
                  </h2>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} style={{ color: '#C0392B' }} />
                    <span className="text-sm" style={{ color: 'rgba(44,44,44,0.7)' }}>
                      {selectedProject.location}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3
                      className="text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Project Description
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(44,44,44,0.8)' }}>
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Additional Info Placeholder */}
                  <div className="mb-8">
                    <h3
                      className="text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: '#C0392B', fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Key Features
                    </h3>
                    <ul className="text-sm space-y-1" style={{ color: 'rgba(44,44,44,0.7)' }}>
                      <li>✓ Premium quality construction</li>
                      <li>✓ Timely project delivery</li>
                      <li>✓ Expert craftsmanship</li>
                      <li>✓ Sustainable materials</li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px w-full my-2"
                    style={{ background: 'linear-gradient(90deg, #C0392B, #F4B400)' }}
                  />

                  {/* CTA Button - Redirects to Contact Page */}
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 group"
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
                      Get Quote for This Project
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <p className="text-xs text-center mt-3" style={{ color: 'rgba(44,44,44,0.5)' }}>
                      Contact us to discuss your requirements
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}