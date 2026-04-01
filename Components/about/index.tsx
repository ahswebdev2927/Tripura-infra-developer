'use client';

import { motion } from 'framer-motion';
import { Building2, Clock, Award, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
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
            About Tripura Infra Developers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Building Hyderabad's future with integrity, innovation, and excellence for over two decades.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2004, Tripura Infra Developers has grown from a small team of passionate engineers to one of Hyderabad’s most trusted construction firms. With over 20 years of experience, we have delivered 100+ successful projects ranging from luxurious villas to massive industrial warehouses.
            </p>
            <p className="text-gray-600 mb-4">
              Our philosophy is simple: deliver quality, maintain transparency, and exceed deadlines. We believe that a construction project is not just about bricks and mortar—it’s about building dreams, relationships, and a better tomorrow.
            </p>
            <p className="text-gray-600">
              Today, we are proud to be recognized for our engineering excellence, customer-first approach, and commitment to sustainable practices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Construction site"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver world-class construction solutions that combine innovation, quality, and cost-efficiency, while ensuring complete client satisfaction and on-time project delivery.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become Hyderabad’s most preferred construction partner, known for transparency, engineering excellence, and creating landmarks that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2004', title: 'Humble Beginnings', desc: 'Started as a small construction firm with 5 employees.' },
              { year: '2012', title: 'Expansion to Commercial', desc: 'Completed first commercial complex in Gachibowli.' },
              { year: '2024', title: '100+ Projects Delivered', desc: 'Recognized as top builder in Hyderabad.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-l-4 border-primary pl-6"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <CTABanner /> */}
    </div>
  );
}