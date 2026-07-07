// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, Clock } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     service: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//     setFormData({ name: '', phone: '', service: '', message: '' });
//   };

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
//             Contact Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg text-gray-300 max-w-2xl mx-auto"
//           >
//             Let’s discuss your project. Get a free consultation today.
//           </motion.p>
//         </div>
//       </section>

//       <section className="section-padding">
//         <div className="container-custom grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <Phone className="w-6 h-6 text-primary mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Phone</h3>
//                   <p className="text-gray-600">
//                     <Link href="tel:+918790806677" className="hover:text-primary">
//                       +91 87908 06677
//                     </Link>
//                     <br />
//                     <Link href="tel:+918500833683" className="hover:text-primary">
//                       +91 85008 33683
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Mail className="w-6 h-6 text-primary mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Email</h3>
//                   <p className="text-gray-600">
//                     <Link href="mailto:info@tripurainfradevelopers.com">
//                       info@tripurainfradevelopers.com
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <MapPin className="w-6 h-6 text-primary mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Office Address</h3>
//                   <p className="text-gray-600">
//                     10-528/1/A/1, Road No 11, Satyanarayana Colony, Nagaram,
//                     <br />
//                     Medchal-Malkajgiri, Hyderabad - 500083
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Clock className="w-6 h-6 text-primary mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Working Hours</h3>
//                   <p className="text-gray-600">
//                     Mon – Sat: 9:00 AM – 7:00 PM
//                     <br />
//                     Sunday: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Google Map */}
//             <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.354303485176!2d78.6128128!3d17.4840404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sTripura%20Infra%20Developers!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Office Location"
//               ></iframe>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-gray-50 p-8 rounded-xl shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
//             {submitted && (
//               <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
//                 Thank you! We'll get back to you within 24 hours.
//               </div>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Full Name *</label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Phone Number *</label>
//                 <input
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Service Required</label>
//                 <select
//                   value={formData.service}
//                   onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 >
//                   <option value="">Select a service</option>
//                   <option value="residential">Residential Construction</option>
//                   <option value="commercial">Commercial Construction</option>
//                   <option value="industrial">Industrial Construction</option>
//                   <option value="interior">Interior Design</option>
//                   <option value="renovation">Renovation</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Message</label>
//                 <textarea
//                   rows={4}
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 ></textarea>
//               </div>
//               <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
//                 Send Message
//               </Button>
//               <p className="text-xs text-gray-500 text-center">
//                 We'll contact you within 24 hours. No spam, guaranteed.
//               </p>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// // Validation schema
// const contactSchema = Yup.object({
//   name: Yup.string()
//     .min(2, 'Name must be at least 2 characters')
//     .required('Full name is required'),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
//     .required('Phone number is required'),
//   service: Yup.string().required('Please select a service'),
//   message: Yup.string().min(10, 'Message must be at least 10 characters'),
// });

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       phone: '',
//       service: '',
//       message: '',
//     },
//     validationSchema: contactSchema,
//     onSubmit: async (values, { resetForm }) => {
//       console.log('Form submitted:', values);
//       // Here you would send to your API endpoint
//       setSubmitted(true);
//       setTimeout(() => setSubmitted(false), 4000);
//       resetForm();
//     },
//   });

//   return (
//     <div>
//       {/* Hero Section – matches about page and header */}
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

//         {/* Radial glows */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse at 20% 40%, rgba(216,67,21,0.12), transparent 60%),
//                          radial-gradient(ellipse at 80% 60%, rgba(251,191,36,0.08), transparent 60%)`,
//           }}
//         />

//         {/* Gold gradient line */}
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
//             Contact <span style={{ color: '#d84315' }}>Us</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg max-w-2xl mx-auto"
//             style={{ color: '#9ca3af' }}
//           >
//             Let’s discuss your project. Get a free consultation today.
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12">
//           {/* Left Column – Contact Info & Map */}
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
//               Get in Touch
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0f172a' }}>
//               Let’s Build <span style={{ color: '#d84315' }}>Together</span>
//             </h2>
//             <p className="mb-8" style={{ color: '#6b7280' }}>
//               Have a project in mind? Reach out to us – our team is ready to bring your vision to life.
//             </p>

//             <div className="space-y-6">
//               {/* Phone */}
//               <div className="flex items-start gap-4 group">
//                 <div
//                   className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
//                 >
//                   <Phone className="w-5 h-5" style={{ color: '#d84315' }} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Phone</h3>
//                   <div className="flex flex-col gap-1">
//                     <Link
//                       href="tel:+918790806677"
//                       className="transition-colors hover:text-[#d84315]"
//                       style={{ color: '#6b7280' }}
//                     >
//                       +91 87908 06677
//                     </Link>
//                     <Link
//                       href="tel:+918500833683"
//                       className="transition-colors hover:text-[#d84315]"
//                       style={{ color: '#6b7280' }}
//                     >
//                       +91 85008 33683
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4 group">
//                 <div
//                   className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
//                 >
//                   <Mail className="w-5 h-5" style={{ color: '#d84315' }} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Email</h3>
//                   <Link
//                     href="mailto:info@tripurainfradevelopers.com"
//                     className="transition-colors hover:text-[#d84315]"
//                     style={{ color: '#6b7280' }}
//                   >
//                     info@tripurainfradevelopers.com
//                   </Link>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-4 group">
//                 <div
//                   className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
//                 >
//                   <MapPin className="w-5 h-5" style={{ color: '#d84315' }} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Office Address</h3>
//                   <p style={{ color: '#6b7280' }}>
//                     10-528/1/A/1, Road No 11, Satyanarayana Colony, Nagaram,
//                     <br />
//                     Medchal-Malkajgiri, Hyderabad - 500083
//                   </p>
//                 </div>
//               </div>

//               {/* Hours */}
//               <div className="flex items-start gap-4 group">
//                 <div
//                   className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
//                 >
//                   <Clock className="w-5 h-5" style={{ color: '#d84315' }} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Working Hours</h3>
//                   <p style={{ color: '#6b7280' }}>
//                     Mon – Sat: 9:00 AM – 7:00 PM
//                     <br />
//                     Sunday: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Google Map */}
//             <div className="mt-8 h-64 rounded-xl overflow-hidden shadow-xl">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.354303485176!2d78.6128128!3d17.4840404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sTripura%20Infra%20Developers!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Office Location"
//               ></iframe>
//             </div>
//           </motion.div>

//           {/* Right Column – Form with Formik & Yup */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="rounded-2xl shadow-xl p-6 md:p-8"
//             style={{
//               backgroundColor: '#ffffff',
//               boxShadow: '0 20px 35px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(216,67,21,0.05)',
//             }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#0f172a' }}>
//               Request a <span style={{ color: '#d84315' }}>Free Quote</span>
//             </h2>
//             <p className="mb-6 text-sm" style={{ color: '#6b7280' }}>
//               Fill out the form and our expert will get back to you within 24 hours.
//             </p>

//             {submitted && (
//               <div
//                 className="mb-6 p-3 rounded-lg text-sm font-medium"
//                 style={{
//                   backgroundColor: '#f0fdf4',
//                   color: '#166534',
//                   border: '1px solid #bbf7d0',
//                 }}
//               >
//                 ✅ Thank you! We'll contact you shortly.
//               </div>
//             )}

//             <form onSubmit={formik.handleSubmit} className="space-y-5">
//               {/* Name Field */}
//               <div>
//                 <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
//                   Full Name <span style={{ color: '#d84315' }}>*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formik.values.name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none ${
//                     formik.touched.name && formik.errors.name
//                       ? 'border-red-500 focus:ring-red-500'
//                       : 'focus:ring-[#d84315]'
//                   }`}
//                   style={{
//                     border: '1px solid #e5e7eb',
//                     backgroundColor: '#ffffff',
//                     color: '#0f172a',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#d84315';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#e5e7eb';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//                 {formik.touched.name && formik.errors.name && (
//                   <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.name}</p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
//                   Phone Number <span style={{ color: '#d84315' }}>*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none ${
//                     formik.touched.phone && formik.errors.phone
//                       ? 'border-red-500 focus:ring-red-500'
//                       : 'focus:ring-[#d84315]'
//                   }`}
//                   style={{
//                     border: '1px solid #e5e7eb',
//                     backgroundColor: '#ffffff',
//                     color: '#0f172a',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#d84315';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#e5e7eb';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//                 {formik.touched.phone && formik.errors.phone && (
//                   <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.phone}</p>
//                 )}
//               </div>

//               {/* Service Dropdown */}
//               <div>
//                 <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
//                   Service Required <span style={{ color: '#d84315' }}>*</span>
//                 </label>
//                 <select
//                   name="service"
//                   value={formik.values.service}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className="w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none"
//                   style={{
//                     border: formik.touched.service && formik.errors.service ? '1px solid #ef4444' : '1px solid #e5e7eb',
//                     backgroundColor: '#ffffff',
//                     color: '#0f172a',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#d84315';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#e5e7eb';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 >
//                   <option value="">Select a service</option>
//                   <option value="residential">Residential Construction</option>
//                   <option value="commercial">Commercial Construction</option>
//                   <option value="industrial">Industrial Construction</option>
//                   <option value="interior">Interior Design</option>
//                   <option value="renovation">Renovation & Extension</option>
//                   <option value="management">Project Management</option>
//                 </select>
//                 {formik.touched.service && formik.errors.service && (
//                   <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.service}</p>
//                 )}
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   value={formik.values.message}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none resize-vertical ${
//                     formik.touched.message && formik.errors.message
//                       ? 'border-red-500 focus:ring-red-500'
//                       : 'focus:ring-[#d84315]'
//                   }`}
//                   style={{
//                     border: '1px solid #e5e7eb',
//                     backgroundColor: '#ffffff',
//                     color: '#0f172a',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#d84315';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#e5e7eb';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//                 {formik.touched.message && formik.errors.message && (
//                   <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={formik.isSubmitting}
//                 className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 style={{
//                   background: 'linear-gradient(135deg, #f4511e, #d84315)',
//                   boxShadow: '0 10px 20px rgba(216,67,21,0.3)',
//                 }}
//               >
//                 {formik.isSubmitting ? 'Sending...' : (
//                   <>
//                     Send Message <Send size={16} />
//                   </>
//                 )}
//               </button>

//               <p className="text-xs text-center mt-2" style={{ color: '#9ca3af' }}>
//                 We'll contact you within 24 hours. No spam, guaranteed.
//               </p>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Link from 'next/link';
import FAQAccordion from '@/Components/ui/FAQAccordion';

// Replace with your actual Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

// Validation schema (unchanged)
const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  service: Yup.string().required('Please select a service'),
  message: Yup.string().min(10, 'Message must be at least 10 characters'),
});

const contactFAQs = [
  {
    question: "How do I get a free quote for my construction project in Hyderabad?",
    answer: "You can get a free estimate by filling out our online request form, reaching out via phone at +91 87908 06677, or sending an email to info@tripurainfradevelopers.com."
  },
  {
    question: "What information should I provide for an accurate construction cost estimation?",
    answer: "To give you an accurate quote, we request details like your plot size, location in Hyderabad/Telangana, preferred construction category (residential, commercial, or industrial), and any specific design preferences."
  },
  {
    question: "Do you charge for initial consultations and site visits?",
    answer: "No, we offer completely free initial consultations, site assessments, and basic project estimations for all prospective clients in Hyderabad."
  },
  {
    question: "How soon can I expect a response after submitting the contact form?",
    answer: "Our engineering and customer support team typically reviews submissions and responds within 24 hours to schedule a detailed discussion."
  },
  {
    question: "Where is the Tripura Infra Developers corporate office located?",
    answer: "Our office is located at 10-528/1/A/1, Road No 11, Satyanarayana Colony, Nagaram, Medchal-Malkajgiri, Hyderabad - 500083. You are welcome to visit us during working hours (Mon–Sat: 9:00 AM – 7:00 PM)."
  }
];

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      service: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitStatus({ type: null, message: '' });

      // Generate WhatsApp message
      const serviceName = values.service === 'residential' ? 'Residential Construction'
        : values.service === 'commercial' ? 'Commercial Construction'
        : values.service === 'industrial' ? 'Industrial Construction'
        : values.service === 'interior' ? 'Interior Design'
        : values.service === 'renovation' ? 'Renovation & Extension'
        : values.service === 'management' ? 'Project Management'
        : values.service;

      const messageText = `*New Quote Request*\n\n*Name:* ${values.name}\n*Phone:* +91 ${values.phone}\n*Service:* ${serviceName}\n*Message:* ${values.message || 'N/A'}`;
      const whatsappUrl = `https://wa.me/918790806677?text=${encodeURIComponent(messageText)}`;

      // Open WhatsApp immediately in a new tab
      window.open(whatsappUrl, '_blank');

      // Submit to Google Sheets in background if URL is configured
      if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('YOUR_DEPLOYMENT_ID')) {
        try {
          fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });
        } catch (error) {
          console.error('Background submission error:', error);
        }
      }

      setSubmitStatus({
        type: 'success',
        message: '✅ Form submitted! Redirecting to WhatsApp...',
      });
      resetForm();
      setSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    },
  });

  return (
    <div>
      {/* Hero Section – unchanged */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-15"
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
              Get In Touch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black mb-4 leading-tight"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              color: '#1C1C1C',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Contact <span style={{ color: '#C0392B' }}>Our Team</span>
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
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{
              color: 'rgba(44,44,44,0.58)',
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Let's discuss your project. Get a free consultation today.
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

      {/* Main Content */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12">
          {/* Left Column – Contact Info & Map (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block font-semibold tracking-wider text-sm uppercase mb-3 border-l-3 pl-3"
              style={{ color: '#d84315', borderLeftColor: '#d84315' }}
            >
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0f172a' }}>
              Let’s Build <span style={{ color: '#d84315' }}>Together</span>
            </h2>
            <p className="mb-8" style={{ color: '#6b7280' }}>
              Have a project in mind? Reach out to us – our team is ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div
                  className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#d84315' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Phone</h3>
                  <div className="flex flex-col gap-1">
                    <Link
                      href="tel:+918790806677"
                      className="transition-colors hover:text-[#d84315]"
                      style={{ color: '#6b7280' }}
                    >
                      +91 87908 06677
                    </Link>
                    {/* <Link
                      href="tel:+918500833683"
                      className="transition-colors hover:text-[#d84315]"
                      style={{ color: '#6b7280' }}
                    >
                      +91 85008 33683
                    </Link> */}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div
                  className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#d84315' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Email</h3>
                  <Link
                    href="mailto:info@tripurainfradevelopers.com"
                    className="transition-colors hover:text-[#d84315]"
                    style={{ color: '#6b7280' }}
                  >
                    info@tripurainfradevelopers.com
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div
                  className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#d84315' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Office Address</h3>
                  <p style={{ color: '#6b7280' }}>
                    10-528/1/A/1, Road No 11, Satyanarayana Colony, Nagaram,
                    <br />
                    Medchal-Malkajgiri, Hyderabad - 500083
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div
                  className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(216,67,21,0.1)' }}
                >
                  <Clock className="w-5 h-5" style={{ color: '#d84315' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>Working Hours</h3>
                  <p style={{ color: '#6b7280' }}>
                    Mon – Sat: 9:00 AM – 7:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-64 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.522415894934!2d78.59427067487094!3d17.482558100057116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1ff8b58ac4d%3A0xaa6ff24b512f47f!2sTripura%20Infra%20Developers!5e0!3m2!1sen!2sin!4v1782374563208!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-xl p-6 md:p-8"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: '0 20px 35px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(216,67,21,0.05)',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#0f172a' }}>
              Request a <span style={{ color: '#d84315' }}>Free Quote</span>
            </h2>
            <p className="mb-6 text-sm" style={{ color: '#6b7280' }}>
              Fill out the form and our expert will get back to you within 24 hours.
            </p>

            {/* Dynamic Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-3 rounded-lg text-sm font-medium ${submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
                  Full Name <span style={{ color: '#d84315' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none ${formik.touched.name && formik.errors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'focus:ring-[#d84315]'
                    }`}
                  style={{
                    border: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#d84315';
                    e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
                  Phone Number <span style={{ color: '#d84315' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none ${formik.touched.phone && formik.errors.phone
                    ? 'border-red-500 focus:ring-red-500'
                    : 'focus:ring-[#d84315]'
                    }`}
                  style={{
                    border: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#d84315';
                    e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.phone}</p>
                )}
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
                  Service Required <span style={{ color: '#d84315' }}>*</span>
                </label>
                <select
                  name="service"
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none"
                  style={{
                    border: formik.touched.service && formik.errors.service ? '1px solid #ef4444' : '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#d84315';
                    e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="industrial">Industrial Construction</option>
                  <option value="interior">Interior Design</option>
                  <option value="renovation">Renovation & Extension</option>
                  <option value="management">Project Management</option>
                </select>
                {formik.touched.service && formik.errors.service && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.service}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 text-sm rounded-lg transition-all focus:outline-none resize-vertical ${formik.touched.message && formik.errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'focus:ring-[#d84315]'
                    }`}
                  style={{
                    border: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#d84315';
                    e.target.style.boxShadow = '0 0 0 2px rgba(216,67,21,0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #f4511e, #d84315)',
                  boxShadow: '0 10px 20px rgba(216,67,21,0.3)',
                }}
              >
                {formik.isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-xs text-center mt-2" style={{ color: '#9ca3af' }}>
                We'll contact you within 24 hours. No spam, guaranteed.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQAccordion items={contactFAQs} title="Contact & Estimation FAQs" />
    </div>
  );
}