'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Luxury Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { title: 'Tech Park', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { title: 'Warehouse Hub', category: 'Industrial', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
]

export function FeaturedProjects() {
  return (
    <section className="section-dark section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-300 mt-2">Excellence delivered across every domain.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="image-premium rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <p className="text-primary">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}