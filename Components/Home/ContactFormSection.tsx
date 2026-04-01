'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactFormSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
    // Here you would integrate with an API endpoint
  }

  return (
    <section className="section-light section-padding">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Request a Callback</h2>
          <p className="text-gray-600 mt-2">Fill the form and our expert will get in touch.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" className="input-field" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" className="input-field" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="service">Service Required</Label>
              <Input id="service" className="input-field" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" className="input-field" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>
            <Button type="submit" className="btn-primary w-full">Send Message</Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}