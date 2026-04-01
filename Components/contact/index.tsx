'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Let’s discuss your project. Get a free consultation today.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">
                    <Link href="tel:+918790806677" className="hover:text-primary">
                      +91 87908 06677
                    </Link>
                    <br />
                    <Link href="tel:+918500833683" className="hover:text-primary">
                      +91 85008 33683
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">
                    <Link href="mailto:tripurainfradevelopers@gmail.com">
                      tripurainfradevelopers@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Office Address</h3>
                  <p className="text-gray-600">
                    10-528/1/A/1, Road No 11, Satyanarayana Colony, Nagaram,
                    <br />
                    Medchal-Malkajgiri, Hyderabad - 500083
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>
                  <p className="text-gray-600">
                    Mon – Sat: 9:00 AM – 7:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.354303485176!2d78.6128128!3d17.4840404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sTripura%20Infra%20Developers!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="industrial">Industrial Construction</option>
                  <option value="interior">Interior Design</option>
                  <option value="renovation">Renovation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We'll contact you within 24 hours. No spam, guaranteed.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}