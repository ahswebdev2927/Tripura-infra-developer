'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Building2, Factory, Palette, BarChart, RefreshCw } from 'lucide-react'

const services = [
  { icon: Home, title: 'Residential', desc: 'Villas, apartments, and custom homes with modern design.' },
  { icon: Building2, title: 'Commercial', desc: 'Offices, hospitals, and retail spaces built to scale.' },
  { icon: Factory, title: 'Industrial', desc: 'Warehouses and industrial sheds with robust engineering.' },
  { icon: Palette, title: 'Interior Design', desc: 'Aesthetic and functional interiors tailored to your taste.' },
  { icon: BarChart, title: 'Project Management', desc: 'End-to-end supervision ensuring timely delivery.' },
  { icon: RefreshCw, title: 'Renovation', desc: 'Extensions and remodeling for existing structures.' },
]

export function Services() {
  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Our Services</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Comprehensive construction solutions for every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="hover-lift"
            >
              <Card className="card-premium h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}