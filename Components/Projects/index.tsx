'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    id: 1,
    title: 'Luxury Villas - Narsingi',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    location: 'Hyderabad',
  },
  {
    id: 2,
    title: 'Corporate Tower - HITEC City',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    location: 'Hyderabad',
  },
  {
    id: 3,
    title: 'Industrial Warehouse - Patancheru',
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    location: 'Hyderabad',
  },
  {
    id: 4,
    title: 'Premium Apartments - Gachibowli',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    location: 'Hyderabad',
  },
  {
    id: 5,
    title: 'Multi-Speciality Hospital',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    location: 'Hyderabad',
  },
  {
    id: 6,
    title: 'Factory Shed - Cherlapally',
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    location: 'Hyderabad',
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            A glimpse of our excellence – from dream homes to industrial landmarks.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="container-custom py-8 flex flex-wrap justify-center gap-4">
        {['all', 'residential', 'commercial', 'industrial'].map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? 'default' : 'outline'}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'bg-primary hover:bg-primary/90' : ''}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}