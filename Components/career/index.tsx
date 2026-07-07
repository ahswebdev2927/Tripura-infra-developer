// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Briefcase,
//   MapPin,
//   Clock,
//   Users,
//   ArrowRight,
//   CheckCircle,
//   Upload,
//   X,
//   ChevronDown,
//   Building2,
//   Award,
//   TrendingUp,
//   Heart,
//   Star,
//   Phone,
//   Mail,
//   FileText,
//   Search,
//   Filter,
//   Shield,
// } from 'lucide-react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useState, useRef, useCallback } from 'react';

// // ─── Types ───────────────────────────────────────────────
// interface Job {
//   id: number;
//   title: string;
//   department: string;
//   location: string;
//   type: string;
//   experience: string;
//   salary: string;
//   description: string;
//   responsibilities: string[];
//   requirements: string[];
//   badge?: string;
// }

// // ─── Design Tokens ────────────────────────────────────────
// const RED = '#C0392B';
// const RED_DARK = '#a93226';
// const RED_LIGHT = 'rgba(192,57,43,0.08)';
// const RED_BORDER = 'rgba(192,57,43,0.2)';
// const RED_BORDER_MED = 'rgba(192,57,43,0.35)';

// // ─── Data ────────────────────────────────────────────────
// const jobs: Job[] = [
//   {
//     id: 1,
//     title: 'Senior Civil Engineer',
//     department: 'Engineering',
//     location: 'Agartala, Tripura',
//     type: 'Full Time',
//     experience: '5–8 Years',
//     salary: '₹8L – ₹14L / year',
//     badge: 'Urgent',
//     description:
//       'Lead structural design and execution of large-scale residential and commercial projects across Tripura.',
//     responsibilities: [
//       'Oversee structural design and site execution',
//       'Coordinate with architects and contractors',
//       'Ensure compliance with safety & quality norms',
//       'Prepare project reports and technical documentation',
//     ],
//     requirements: [
//       'B.Tech / M.Tech in Civil Engineering',
//       'Proficient in AutoCAD, STAAD Pro',
//       'Strong leadership and communication skills',
//       'Experience in RCC and steel structures',
//     ],
//   },
//   {
//     id: 2,
//     title: 'Interior Design Lead',
//     department: 'Design',
//     location: 'Agartala, Tripura',
//     type: 'Full Time',
//     experience: '3–6 Years',
//     salary: '₹6L – ₹10L / year',
//     badge: 'New',
//     description:
//       'Drive interior design concepts for premium residential projects from ideation to final delivery.',
//     responsibilities: [
//       'Create detailed interior design concepts',
//       'Client consultation and mood board presentations',
//       'Manage vendor relationships and material sourcing',
//       'Supervise on-site implementation',
//     ],
//     requirements: [
//       'Degree in Interior Design or Architecture',
//       'Proficient in SketchUp, AutoCAD, Photoshop',
//       'Strong portfolio of residential projects',
//       'Excellent client-facing communication',
//     ],
//   },
//   {
//     id: 3,
//     title: 'Project Manager – Construction',
//     department: 'Operations',
//     location: 'Tripura (Multiple Sites)',
//     type: 'Full Time',
//     experience: '6–10 Years',
//     salary: '₹10L – ₹18L / year',
//     description:
//       'End-to-end management of construction projects ensuring timely delivery, quality, and budget adherence.',
//     responsibilities: [
//       'Plan and manage project timelines and budgets',
//       'Lead cross-functional teams of 20–50 members',
//       'Liaise with clients, consultants, and authorities',
//       'Risk assessment and mitigation planning',
//     ],
//     requirements: [
//       'B.Tech Civil + MBA preferred',
//       'PMP or PRINCE2 certification is a plus',
//       'Proficient in MS Project / Primavera',
//       'Proven track record of on-time delivery',
//     ],
//   },
//   {
//     id: 4,
//     title: 'Site Supervisor',
//     department: 'Site Operations',
//     location: 'Agartala, Tripura',
//     type: 'Full Time',
//     experience: '2–4 Years',
//     salary: '₹3.5L – ₹6L / year',
//     description:
//       'Supervise day-to-day construction activities on site ensuring quality and safety standards are met.',
//     responsibilities: [
//       'Monitor daily construction progress',
//       'Coordinate labor and material deployment',
//       'Maintain site safety protocols',
//       'Report progress to project manager',
//     ],
//     requirements: [
//       'Diploma or B.Tech in Civil Engineering',
//       'Knowledge of construction methodologies',
//       'Good problem-solving skills',
//       'Ability to work in field conditions',
//     ],
//   },
//   {
//     id: 5,
//     title: 'Business Development Executive',
//     department: 'Sales & BD',
//     location: 'Agartala, Tripura',
//     type: 'Full Time',
//     experience: '1–3 Years',
//     salary: '₹3L – ₹5L + Incentives',
//     badge: 'New',
//     description:
//       'Identify and develop new business opportunities in the residential and commercial construction segment.',
//     responsibilities: [
//       'Generate leads through field visits and networking',
//       'Conduct client meetings and project presentations',
//       'Maintain CRM and pipeline records',
//       'Collaborate with design and technical teams',
//     ],
//     requirements: [
//       "Bachelor's degree in Business or related field",
//       'Strong communication and negotiation skills',
//       'Experience in real estate / construction preferred',
//       'Self-motivated with target-oriented approach',
//     ],
//   },
//   {
//     id: 6,
//     title: 'AutoCAD Draftsman',
//     department: 'Design',
//     location: 'Agartala, Tripura',
//     type: 'Full Time',
//     experience: '1–3 Years',
//     salary: '₹2.5L – ₹4.5L / year',
//     description:
//       'Prepare detailed architectural and structural drawings using AutoCAD for ongoing projects.',
//     responsibilities: [
//       'Prepare 2D/3D drawings as per specifications',
//       'Revise drawings based on engineer feedback',
//       'Maintain drawing register and version control',
//       'Coordinate with design and site teams',
//     ],
//     requirements: [
//       'Diploma in Civil / Architecture or equivalent',
//       'Expert in AutoCAD 2D and 3D',
//       'Basic knowledge of structural drawings',
//       'Attention to detail and accuracy',
//     ],
//   },
// ];

// const departments = [
//   'All',
//   'Engineering',
//   'Design',
//   'Operations',
//   'Site Operations',
//   'Sales & BD',
// ];

// const perks = [
//   {
//     icon: TrendingUp,
//     title: 'Career Growth',
//     desc: 'Structured appraisals, promotions & skill development programs every 6 months',
//   },
//   {
//     icon: Heart,
//     title: 'Health & Wellness',
//     desc: 'Comprehensive medical insurance for you and your entire family',
//   },
//   {
//     icon: Award,
//     title: 'Performance Bonuses',
//     desc: 'Attractive incentives tied to project delivery and client satisfaction scores',
//   },
//   {
//     icon: Users,
//     title: 'Collaborative Culture',
//     desc: 'Work alongside experienced professionals in a people-first environment',
//   },
//   {
//     icon: Building2,
//     title: 'Landmark Projects',
//     desc: 'Be part of iconic infrastructure and residential projects across Tripura',
//   },
//   {
//     icon: Star,
//     title: 'Recognition',
//     desc: 'Monthly employee spotlights and annual awards for outstanding contributors',
//   },
// ];

// // ─── Validation ───────────────────────────────────────────
// const applicationSchema = Yup.object({
//   fullName: Yup.string()
//     .min(2, 'Enter at least 2 characters')
//     .max(60, 'Name too long')
//     .required('Full name is required'),
//   email: Yup.string()
//     .email('Enter a valid email address')
//     .required('Email is required'),
//   phone: Yup.string()
//     .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
//     .required('Phone number is required'),
//   position: Yup.string().required('Please select a position'),
//   experience: Yup.string().required('Please select your experience'),
//   currentCompany: Yup.string().max(80, 'Too long'),
//   currentCTC: Yup.string(),
//   expectedCTC: Yup.string(),
//   noticePeriod: Yup.string().required('Please select notice period'),
//   location: Yup.string()
//     .min(2, 'Enter your current city')
//     .required('Current location is required'),
//   coverLetter: Yup.string()
//     .min(50, 'Please write at least 50 characters')
//     .max(1000, 'Keep it under 1000 characters')
//     .required('A brief cover note is required'),
//   resume: Yup.mixed()
//     .required('Please upload your resume')
//     .test('fileSize', 'File must be under 5MB', (value) => {
//       if (!value) return false;
//       return (value as File).size <= 5 * 1024 * 1024;
//     })
//     .test('fileType', 'Only PDF, DOC, DOCX allowed', (value) => {
//       if (!value) return false;
//       const allowed = [
//         'application/pdf',
//         'application/msword',
//         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//       ];
//       return allowed.includes((value as File).type);
//     }),
//   linkedIn: Yup.string().url('Enter a valid URL (include https://)'),
//   portfolio: Yup.string().url('Enter a valid URL (include https://)'),
//   agreeToTerms: Yup.boolean()
//     .oneOf([true], 'You must agree to continue')
//     .required(),
// });

// type ApplicationValues = {
//   fullName: string;
//   email: string;
//   phone: string;
//   position: string;
//   experience: string;
//   currentCompany: string;
//   currentCTC: string;
//   expectedCTC: string;
//   noticePeriod: string;
//   location: string;
//   coverLetter: string;
//   resume: File | null;
//   linkedIn: string;
//   portfolio: string;
//   agreeToTerms: boolean;
// };

// const initialValues: ApplicationValues = {
//   fullName: '',
//   email: '',
//   phone: '',
//   position: '',
//   experience: '',
//   currentCompany: '',
//   currentCTC: '',
//   expectedCTC: '',
//   noticePeriod: '',
//   location: '',
//   coverLetter: '',
//   resume: null,
//   linkedIn: '',
//   portfolio: '',
//   agreeToTerms: false,
// };

// // ─── Reusable UI ──────────────────────────────────────────

// function SectionLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex items-center gap-3 mb-10">
//       <div
//         className="h-px flex-1 max-w-[40px]"
//         style={{
//           background: `linear-gradient(to right, ${RED}, transparent)`,
//         }}
//       />
//       <span
//         className="text-[10px] font-bold uppercase tracking-[3.5px]"
//         style={{ color: RED, fontFamily: "'Montserrat', sans-serif" }}
//       >
//         {children}
//       </span>
//       <div
//         className="h-px flex-1"
//         style={{
//           background: `linear-gradient(to left, transparent, ${RED_BORDER})`,
//         }}
//       />
//     </div>
//   );
// }

// function BadgePill({ text }: { text: string }) {
//   const isUrgent = text === 'Urgent';
//   return (
//     <span
//       className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1"
//       style={{
//         backgroundColor: isUrgent ? RED_LIGHT : 'rgba(192,57,43,0.05)',
//         border: `1px solid ${isUrgent ? RED_BORDER_MED : RED_BORDER}`,
//         color: RED,
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       {text}
//     </span>
//   );
// }

// function StepHeading({ number, label }: { number: string; label: string }) {
//   return (
//     <div className="flex items-center gap-3 mb-5">
//       <div
//         className="w-6 h-6 flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
//         style={{ backgroundColor: RED, fontFamily: "'Montserrat', sans-serif" }}
//       >
//         {number}
//       </div>
//       <span
//         className="text-[11px] font-bold uppercase tracking-[2.5px]"
//         style={{
//           color: 'rgba(28,28,28,0.45)',
//           fontFamily: "'Montserrat', sans-serif",
//         }}
//       >
//         {label}
//       </span>
//       <div
//         className="flex-1 h-px"
//         style={{ backgroundColor: 'rgba(192,57,43,0.1)' }}
//       />
//     </div>
//   );
// }

// const getInputStyle = (hasError: boolean): React.CSSProperties => ({
//   backgroundColor: hasError ? 'rgba(239,68,68,0.03)' : '#f8f8f8',
//   border: `1.5px solid ${hasError ? 'rgba(239,68,68,0.5)' : 'rgba(28,28,28,0.1)'}`,
//   color: '#1C1C1C',
//   fontFamily: "'Open Sans', sans-serif",
//   width: '100%',
//   padding: '12px 16px',
//   fontSize: '14px',
//   outline: 'none',
//   transition: 'all 0.2s',
// });

// function StyledInput({
//   name,
//   type = 'text',
//   placeholder,
//   errors,
//   touched,
// }: {
//   name: string;
//   type?: string;
//   placeholder?: string;
//   errors: Record<string, string>;
//   touched: Record<string, boolean>;
// }) {
//   const hasError = !!(touched[name] && errors[name]);
//   return (
//     <Field
//       id={name}
//       name={name}
//       type={type}
//       placeholder={placeholder}
//       style={getInputStyle(hasError)}
//       className="placeholder:text-black/25"
//       onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
//         e.target.style.borderColor = RED;
//         e.target.style.backgroundColor = '#fff';
//         e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
//       }}
//       onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
//         e.target.style.borderColor = hasError
//           ? 'rgba(239,68,68,0.5)'
//           : 'rgba(28,28,28,0.1)';
//         e.target.style.boxShadow = 'none';
//         e.target.style.backgroundColor = '#f8f8f8';
//       }}
//     />
//   );
// }

// function StyledSelect({
//   name,
//   children,
//   errors,
//   touched,
// }: {
//   name: string;
//   children: React.ReactNode;
//   errors: Record<string, string>;
//   touched: Record<string, boolean>;
// }) {
//   const hasError = !!(touched[name] && errors[name]);
//   return (
//     <div className="relative">
//       <Field
//         as="select"
//         id={name}
//         name={name}
//         style={{
//           ...getInputStyle(hasError),
//           appearance: 'none',
//           cursor: 'pointer',
//         }}
//         className="[&>option]:bg-white [&>option]:text-[#1C1C1C]"
//         onFocus={(e: React.FocusEvent<HTMLSelectElement>) => {
//           e.target.style.borderColor = RED;
//           e.target.style.backgroundColor = '#fff';
//           e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
//         }}
//         onBlur={(e: React.FocusEvent<HTMLSelectElement>) => {
//           e.target.style.borderColor = hasError
//             ? 'rgba(239,68,68,0.5)'
//             : 'rgba(28,28,28,0.1)';
//           e.target.style.boxShadow = 'none';
//           e.target.style.backgroundColor = '#f8f8f8';
//         }}
//       >
//         {children}
//       </Field>
//       <ChevronDown
//         size={13}
//         className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
//         style={{ color: 'rgba(28,28,28,0.35)' }}
//       />
//     </div>
//   );
// }

// function FormField({
//   label,
//   name,
//   required,
//   children,
// }: {
//   label: string;
//   name: string;
//   required?: boolean;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="block text-[10px] font-bold uppercase tracking-[2px] mb-2"
//         style={{
//           color: 'rgba(28,28,28,0.45)',
//           fontFamily: "'Montserrat', sans-serif",
//         }}
//       >
//         {label}
//         {required && <span style={{ color: RED }}> *</span>}
//       </label>
//       {children}
//       <ErrorMessage name={name}>
//         {(msg) => (
//           <motion.p
//             initial={{ opacity: 0, y: -4 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-[11px] mt-1.5 ml-0.5 flex items-center gap-1"
//             style={{ color: '#ef4444', fontFamily: "'Open Sans', sans-serif" }}
//           >
//             ⚠ {msg}
//           </motion.p>
//         )}
//       </ErrorMessage>
//     </div>
//   );
// }

// // ─── Main Page ────────────────────────────────────────────
// export default function CareersPage() {
//   const [selectedDept, setSelectedDept] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [expandedJob, setExpandedJob] = useState<number | null>(null);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [dragOver, setDragOver] = useState(false);
//   const formRef = useRef<HTMLDivElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const filteredJobs = jobs.filter((j) => {
//     const matchDept =
//       selectedDept === 'All' || j.department === selectedDept;
//     const matchSearch =
//       j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       j.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       j.location.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchDept && matchSearch;
//   });

//   const handleApply = (job: Job) => {
//     setSelectedJob(job);
//     setSubmitted(false);
//     setTimeout(() => {
//       formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 100);
//   };

//   const handleDrop = useCallback(
//     (
//       e: React.DragEvent,
//       setFieldValue: (field: string, value: unknown) => void
//     ) => {
//       e.preventDefault();
//       setDragOver(false);
//       const file = e.dataTransfer.files[0];
//       if (file) setFieldValue('resume', file);
//     },
//     []
//   );

//   return (
//     <main
//       className="min-h-screen"
//       style={{
//         backgroundColor: '#ffffff',
//         fontFamily: "'Open Sans', sans-serif",
//       }}
//     >
//       {/* Fixed left red accent bar */}
//       <div
//         className="fixed left-0 top-0 bottom-0 w-[3px] z-50 pointer-events-none"
//         style={{
//           background: `linear-gradient(to bottom, transparent, ${RED} 20%, ${RED} 80%, transparent)`,
//         }}
//       />

//       {/* ══════════════════════════════════════
//           HERO — blueprint grid style
//       ══════════════════════════════════════ */}
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

//         {/* Red glow — left */}
//         <div
//           className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse at top left, rgba(192,57,43,0.07) 0%, transparent 65%)',
//           }}
//         />

//         {/* Gold glow — right */}
//         <div
//           className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse at bottom right, rgba(244,180,0,0.07) 0%, transparent 65%)',
//           }}
//         />

//         {/* Top accent bar */}
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

//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

//             {/* ── Left: Text ── */}
//             <div className="flex-1 text-center lg:text-left">
//               {/* Badge */}
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 mb-6"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   border: `1px solid ${RED_BORDER}`,
//                   borderLeft: `3px solid ${RED}`,
//                   padding: '6px 16px',
//                   boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
//                 }}
//               >
//                 <motion.div
//                   className="w-1.5 h-1.5 rounded-full"
//                   style={{ backgroundColor: RED }}
//                   animate={{ opacity: [1, 0.3, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 />
//                 <span
//                   className="text-[10px] font-bold uppercase tracking-[3px]"
//                   style={{
//                     color: RED,
//                     fontFamily: "'Montserrat', sans-serif",
//                   }}
//                 >
//                   We&apos;re Hiring
//                 </span>
//               </motion.div>

//               {/* Headline */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.08 }}
//                 className="font-black mb-4 leading-[1.05]"
//                 style={{
//                   fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
//                   color: '#1C1C1C',
//                   fontFamily: "'Montserrat', sans-serif",
//                   letterSpacing: '-0.03em',
//                 }}
//               >
//                 Build Your Career
//                 <br />
//                 <span style={{ color: RED }}>While Building</span>
//                 <br />
//                 Tripura.
//               </motion.h1>

//               {/* Animated underline */}
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//                 className="mb-6 h-[3px] w-24 lg:mx-0 mx-auto"
//                 style={{
//                   background: 'linear-gradient(90deg, #C0392B, #F4B400)',
//                   transformOrigin: 'left center',
//                 }}
//               />

//               {/* Sub-copy */}
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.15 }}
//                 className="text-sm md:text-base leading-relaxed mb-8 max-w-lg lg:mx-0 mx-auto"
//                 style={{
//                   color: 'rgba(28,28,28,0.52)',
//                   fontFamily: "'Open Sans', sans-serif",
//                 }}
//               >
//                 Join a 20-year legacy of excellence. We are looking for
//                 passionate engineers, designers, and builders to shape the
//                 future of infrastructure across Northeast India.
//               </motion.p>

//               {/* CTA row */}
//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.22 }}
//                 className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10"
//               >
//                 <button
//                   onClick={() =>
//                     formRef.current?.scrollIntoView({
//                       behavior: 'smooth',
//                       block: 'start',
//                     })
//                   }
//                   className="group relative flex items-center gap-2.5 px-7 py-4 text-xs font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
//                   style={{
//                     backgroundColor: RED,
//                     color: '#ffffff',
//                     fontFamily: "'Montserrat', sans-serif",
//                     boxShadow: `0 8px 28px rgba(192,57,43,0.35)`,
//                   }}
//                   onMouseEnter={(e) => {
//                     (e.currentTarget as HTMLElement).style.backgroundColor =
//                       RED_DARK;
//                   }}
//                   onMouseLeave={(e) => {
//                     (e.currentTarget as HTMLElement).style.backgroundColor =
//                       RED;
//                   }}
//                 >
//                   <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//                   <span className="relative z-10">Apply Now</span>
//                   <ArrowRight
//                     size={13}
//                     className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
//                   />
//                 </button>

//                 <a
//                   href="tel:+918790806677"
//                   className="flex items-center gap-2.5 px-5 py-3.5 text-xs font-bold transition-all duration-300 hover:scale-105"
//                   style={{
//                     backgroundColor: '#ffffff',
//                     border: `1.5px solid ${RED_BORDER_MED}`,
//                     color: '#1C1C1C',
//                     fontFamily: "'Montserrat', sans-serif",
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
//                   }}
//                   onMouseEnter={(e) => {
//                     (e.currentTarget as HTMLElement).style.borderColor = RED;
//                     (e.currentTarget as HTMLElement).style.backgroundColor =
//                       RED_LIGHT;
//                   }}
//                   onMouseLeave={(e) => {
//                     (e.currentTarget as HTMLElement).style.borderColor =
//                       RED_BORDER_MED;
//                     (e.currentTarget as HTMLElement).style.backgroundColor =
//                       '#ffffff';
//                   }}
//                 >
//                   <Phone size={13} style={{ color: RED }} />
//                   <span>+91 87908 06677</span>
//                 </a>
//               </motion.div>

//               {/* Quick info pills */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="flex flex-wrap gap-3 justify-center lg:justify-start"
//               >
//                 {[
//                   { icon: Briefcase, text: `${jobs.length} Open Roles` },
//                   { icon: MapPin, text: 'Agartala, Tripura' },
//                   { icon: Clock, text: 'Full Time Positions' },
//                 ].map((pill) => (
//                   <div
//                     key={pill.text}
//                     className="flex items-center gap-2 px-3.5 py-2"
//                     style={{
//                       backgroundColor: '#ffffff',
//                       border: `1px solid ${RED_BORDER}`,
//                       boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
//                     }}
//                   >
//                     <pill.icon size={11} style={{ color: RED }} />
//                     <span
//                       className="text-[11px] font-medium"
//                       style={{ color: 'rgba(28,28,28,0.6)' }}
//                     >
//                       {pill.text}
//                     </span>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* ── Right: Stats card cluster ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="flex-shrink-0 w-full lg:w-auto"
//             >
//               {/* Main stats card */}
//               <div
//                 className="relative p-8 mb-4"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   border: `1.5px solid ${RED_BORDER}`,
//                   boxShadow:
//                     '0 4px 32px rgba(192,57,43,0.08), 0 1px 4px rgba(0,0,0,0.04)',
//                 }}
//               >
//                 {/* Corner accent */}
//                 <div
//                   className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
//                   style={{
//                     background:
//                       'radial-gradient(circle at top right, rgba(192,57,43,0.07) 0%, transparent 70%)',
//                   }}
//                 />
//                 {/* Card top bar */}
//                 <div
//                   className="absolute top-0 left-0 right-0 h-[3px]"
//                   style={{ background: `linear-gradient(90deg, ${RED}, #F4B400)` }}
//                 />

//                 <p
//                   className="text-[10px] font-bold uppercase tracking-[3px] mb-5"
//                   style={{
//                     color: 'rgba(28,28,28,0.38)',
//                     fontFamily: "'Montserrat', sans-serif",
//                   }}
//                 >
//                   Company at a glance
//                 </p>

//                 <div className="grid grid-cols-2 gap-px"
//                   style={{ backgroundColor: RED_BORDER }}>
//                   {[
//                     { number: '20+', label: 'Years of Trust' },
//                     { number: '500+', label: 'Projects Done' },
//                     { number: '200+', label: 'Team Members' },
//                     { number: '₹18L', label: 'Max Package' },
//                   ].map((s) => (
//                     <div
//                       key={s.label}
//                       className="flex flex-col items-center justify-center py-5 px-4"
//                       style={{ backgroundColor: '#ffffff' }}
//                     >
//                       <span
//                         className="text-2xl font-black leading-none mb-1"
//                         style={{
//                           color: RED,
//                           fontFamily: "'Montserrat', sans-serif",
//                         }}
//                       >
//                         {s.number}
//                       </span>
//                       <span
//                         className="text-[9px] uppercase tracking-widest text-center"
//                         style={{ color: 'rgba(28,28,28,0.4)' }}
//                       >
//                         {s.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Mini cards row */}
//               <div className="grid grid-cols-2 gap-3">
//                 {/* Perks */}
//                 <div
//                   className="p-4"
//                   style={{
//                     backgroundColor: RED_LIGHT,
//                     border: `1px solid ${RED_BORDER}`,
//                     borderLeft: `3px solid ${RED}`,
//                   }}
//                 >
//                   <Award size={16} style={{ color: RED, marginBottom: 8 }} />
//                   <p
//                     className="text-xs font-black mb-1"
//                     style={{
//                       color: '#1C1C1C',
//                       fontFamily: "'Montserrat', sans-serif",
//                     }}
//                   >
//                     Great Perks
//                   </p>
//                   <p
//                     className="text-[10px] leading-relaxed"
//                     style={{ color: 'rgba(28,28,28,0.48)' }}
//                   >
//                     Health insurance, bonuses & more
//                   </p>
//                 </div>

//                 {/* Response time */}
//                 <div
//                   className="p-4"
//                   style={{
//                     backgroundColor: '#ffffff',
//                     border: `1px solid ${RED_BORDER}`,
//                     borderLeft: `3px solid #F4B400`,
//                   }}
//                 >
//                   <Clock
//                     size={16}
//                     style={{ color: '#F4B400', marginBottom: 8 }}
//                   />
//                   <p
//                     className="text-xs font-black mb-1"
//                     style={{
//                       color: '#1C1C1C',
//                       fontFamily: "'Montserrat', sans-serif",
//                     }}
//                   >
//                     Fast Response
//                   </p>
//                   <p
//                     className="text-[10px] leading-relaxed"
//                     style={{ color: 'rgba(28,28,28,0.48)' }}
//                   >
//                     We reply within 3 business days
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
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

//       {/* ══════════════════════════════════════
//           WHY JOIN US
//       ══════════════════════════════════════ */}
//       {/* <section
//         className="py-20"
//         style={{ borderTop: `1px solid ${RED_BORDER}` }}
//       >
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
//           <SectionLabel>Why Join Us</SectionLabel>

//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
//             style={{ backgroundColor: RED_BORDER }}
//           >
//             {perks.map((perk, i) => (
//               <motion.div
//                 key={perk.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08, duration: 0.5 }}
//                 className="group p-8 cursor-default transition-all duration-300"
//                 style={{ backgroundColor: '#ffffff' }}
//                 whileHover={{ backgroundColor: RED_LIGHT } as never}
//               >
//                 <div className="flex items-start gap-4">
//                   <div
//                     className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       backgroundColor: RED_LIGHT,
//                       border: `1px solid ${RED_BORDER}`,
//                     }}
//                   >
//                     <perk.icon size={16} style={{ color: RED }} />
//                   </div>
//                   <div>
//                     <h3
//                       className="font-black text-sm mb-2"
//                       style={{
//                         color: '#1C1C1C',
//                         fontFamily: "'Montserrat', sans-serif",
//                       }}
//                     >
//                       {perk.title}
//                     </h3>
//                     <p
//                       className="text-xs leading-relaxed"
//                       style={{ color: 'rgba(28,28,28,0.5)' }}
//                     >
//                       {perk.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* ══════════════════════════════════════
//           JOB LISTINGS
//       ══════════════════════════════════════ */}
//       {/* <section
//         className="py-20"
//         style={{
//           borderTop: `1px solid ${RED_BORDER}`,
//           backgroundColor: '#fafafa',
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
//           <SectionLabel>Open Positions</SectionLabel>

//         \
//           <div className="flex flex-col sm:flex-row gap-3 mb-8">
//             <div className="relative flex-1 max-w-sm">
//               <Search
//                 size={13}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
//                 style={{ color: 'rgba(28,28,28,0.3)' }}
//               />
//               <input
//                 type="text"
//                 placeholder="Search roles, departments..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 text-sm outline-none placeholder:text-black/25"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   border: '1.5px solid rgba(28,28,28,0.1)',
//                   color: '#1C1C1C',
//                   fontFamily: "'Open Sans', sans-serif",
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.borderColor = RED;
//                   e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.borderColor = 'rgba(28,28,28,0.1)';
//                   e.target.style.boxShadow = 'none';
//                 }}
//               />
//             </div>

//             <div className="flex items-center flex-wrap gap-0">
//               <div
//                 className="flex items-center gap-2 px-3 py-3 mr-2"
//                 style={{
//                   border: '1.5px solid rgba(28,28,28,0.1)',
//                   backgroundColor: '#fff',
//                 }}
//               >
//                 <Filter size={11} style={{ color: 'rgba(28,28,28,0.35)' }} />
//                 <span
//                   className="text-[9px] uppercase tracking-widest"
//                   style={{
//                     color: 'rgba(28,28,28,0.35)',
//                     fontFamily: "'Montserrat', sans-serif",
//                   }}
//                 >
//                   Filter
//                 </span>
//               </div>

//               {departments.map((dept, i) => (
//                 <button
//                   key={dept}
//                   onClick={() => setSelectedDept(dept)}
//                   className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-200"
//                   style={{
//                     fontFamily: "'Montserrat', sans-serif",
//                     backgroundColor: selectedDept === dept ? RED : '#ffffff',
//                     border: '1.5px solid',
//                     borderColor:
//                       selectedDept === dept ? RED : 'rgba(28,28,28,0.1)',
//                     borderLeft: i === 0 ? undefined : 'none',
//                     color:
//                       selectedDept === dept
//                         ? '#ffffff'
//                         : 'rgba(28,28,28,0.45)',
//                   }}
//                 >
//                   {dept}
//                 </button>
//               ))}
//             </div>
//           </div>

          
//           <p className="text-xs mb-6" style={{ color: 'rgba(28,28,28,0.38)' }}>
//             Showing{' '}
//             <span style={{ color: RED, fontWeight: 700 }}>
//               {filteredJobs.length}
//             </span>{' '}
//             position{filteredJobs.length !== 1 ? 's' : ''}
//             {selectedDept !== 'All' && ` in ${selectedDept}`}
//           </p>

          
//           <div className="space-y-px">
//             <AnimatePresence>
//               {filteredJobs.length === 0 ? (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center py-20"
//                   style={{
//                     backgroundColor: '#fff',
//                     border: `1.5px solid ${RED_BORDER}`,
//                   }}
//                 >
//                   <Briefcase
//                     size={32}
//                     style={{
//                       color: 'rgba(192,57,43,0.2)',
//                       margin: '0 auto 12px',
//                     }}
//                   />
//                   <p
//                     className="text-sm"
//                     style={{ color: 'rgba(28,28,28,0.38)' }}
//                   >
//                     No positions found. Try a different filter.
//                   </p>
//                 </motion.div>
//               ) : (
//                 filteredJobs.map((job, idx) => (
//                   <motion.div
//                     key={job.id}
//                     layout
//                     initial={{ opacity: 0, y: 16 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -8 }}
//                     transition={{ delay: idx * 0.05 }}
//                     style={{
//                       backgroundColor:
//                         expandedJob === job.id ? RED_LIGHT : '#ffffff',
//                       border: '1.5px solid',
//                       borderColor:
//                         expandedJob === job.id
//                           ? RED_BORDER_MED
//                           : 'rgba(28,28,28,0.08)',
//                       borderLeft:
//                         expandedJob === job.id
//                           ? `4px solid ${RED}`
//                           : '4px solid transparent',
//                       transition: 'all 0.3s',
//                     }}
//                   >
//                     <button
//                       className="w-full text-left p-6 transition-all duration-200"
//                       onClick={() =>
//                         setExpandedJob(
//                           expandedJob === job.id ? null : job.id
//                         )
//                       }
//                     >
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                         <div className="flex items-start gap-4">
//                           <div
//                             className="w-10 h-10 flex items-center justify-center flex-shrink-0"
//                             style={{
//                               backgroundColor: RED_LIGHT,
//                               border: `1px solid ${RED_BORDER}`,
//                             }}
//                           >
//                             <Briefcase size={14} style={{ color: RED }} />
//                           </div>
//                           <div>
//                             <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
//                               <h3
//                                 className="text-base font-black"
//                                 style={{
//                                   color: '#1C1C1C',
//                                   fontFamily: "'Montserrat', sans-serif",
//                                 }}
//                               >
//                                 {job.title}
//                               </h3>
//                               {job.badge && <BadgePill text={job.badge} />}
//                             </div>
//                             <div className="flex flex-wrap gap-4">
//                               {[
//                                 { icon: Building2, text: job.department },
//                                 { icon: MapPin, text: job.location },
//                                 { icon: Clock, text: job.type },
//                                 { icon: Users, text: job.experience },
//                               ].map((meta) => (
//                                 <span
//                                   key={meta.text}
//                                   className="flex items-center gap-1.5 text-[11px]"
//                                   style={{ color: 'rgba(28,28,28,0.42)' }}
//                                 >
//                                   <meta.icon
//                                     size={10}
//                                     style={{ color: RED }}
//                                   />
//                                   {meta.text}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-4 flex-shrink-0 ml-14 sm:ml-0">
//                           <div className="text-right">
//                             <p
//                               className="text-[9px] uppercase tracking-widest mb-0.5"
//                               style={{
//                                 color: 'rgba(28,28,28,0.32)',
//                                 fontFamily: "'Montserrat', sans-serif",
//                               }}
//                             >
//                               CTC Range
//                             </p>
//                             <p
//                               className="text-sm font-black"
//                               style={{
//                                 color: RED,
//                                 fontFamily: "'Montserrat', sans-serif",
//                               }}
//                             >
//                               {job.salary}
//                             </p>
//                           </div>
//                           <motion.div
//                             animate={{
//                               rotate: expandedJob === job.id ? 180 : 0,
//                             }}
//                             transition={{ duration: 0.3 }}
//                           >
//                             <ChevronDown
//                               size={16}
//                               style={{ color: 'rgba(28,28,28,0.3)' }}
//                             />
//                           </motion.div>
//                         </div>
//                       </div>
//                     </button>

//                     <AnimatePresence>
//                       {expandedJob === job.id && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{
//                             duration: 0.4,
//                             ease: [0.22, 1, 0.36, 1],
//                           }}
//                           className="overflow-hidden"
//                         >
//                           <div
//                             className="px-6 pb-7 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6"
//                             style={{ borderTop: `1px solid ${RED_BORDER}` }}
//                           >
//                             <div className="md:col-span-3">
//                               <p
//                                 className="text-sm leading-relaxed"
//                                 style={{ color: 'rgba(28,28,28,0.55)' }}
//                               >
//                                 {job.description}
//                               </p>
//                             </div>

//                             <div>
//                               <h4
//                                 className="text-[10px] font-bold uppercase tracking-[2.5px] mb-3"
//                                 style={{
//                                   color: RED,
//                                   fontFamily: "'Montserrat', sans-serif",
//                                 }}
//                               >
//                                 Responsibilities
//                               </h4>
//                               <ul className="space-y-2">
//                                 {job.responsibilities.map((r) => (
//                                   <li
//                                     key={r}
//                                     className="flex items-start gap-2.5 text-xs"
//                                     style={{ color: 'rgba(28,28,28,0.55)' }}
//                                   >
//                                     <div
//                                       className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
//                                       style={{ backgroundColor: RED }}
//                                     />
//                                     {r}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             <div>
//                               <h4
//                                 className="text-[10px] font-bold uppercase tracking-[2.5px] mb-3"
//                                 style={{
//                                   color: '#1C1C1C',
//                                   fontFamily: "'Montserrat', sans-serif",
//                                 }}
//                               >
//                                 Requirements
//                               </h4>
//                               <ul className="space-y-2">
//                                 {job.requirements.map((r) => (
//                                   <li
//                                     key={r}
//                                     className="flex items-start gap-2.5 text-xs"
//                                     style={{ color: 'rgba(28,28,28,0.55)' }}
//                                   >
//                                     <CheckCircle
//                                       size={11}
//                                       className="mt-0.5 flex-shrink-0"
//                                       style={{ color: RED }}
//                                     />
//                                     {r}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             <div className="flex flex-col justify-end gap-3">
//                               <motion.button
//                                 onClick={() => handleApply(job)}
//                                 className="group flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-widest relative overflow-hidden"
//                                 style={{
//                                   backgroundColor: RED,
//                                   color: '#ffffff',
//                                   fontFamily: "'Montserrat', sans-serif",
//                                   boxShadow: `0 4px 20px rgba(192,57,43,0.3)`,
//                                 }}
//                                 whileHover={{ scale: 1.02, y: -1 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onMouseEnter={(e) => {
//                                   (
//                                     e.currentTarget as HTMLElement
//                                   ).style.backgroundColor = RED_DARK;
//                                 }}
//                                 onMouseLeave={(e) => {
//                                   (
//                                     e.currentTarget as HTMLElement
//                                   ).style.backgroundColor = RED;
//                                 }}
//                               >
//                                 <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//                                 <span className="relative z-10">
//                                   Apply for this Role
//                                 </span>
//                                 <ArrowRight
//                                   size={12}
//                                   className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
//                                 />
//                               </motion.button>
//                               <p
//                                 className="text-[10px] text-center"
//                                 style={{ color: 'rgba(28,28,28,0.32)' }}
//                               >
//                                 Or email:{' '}
//                                 <span style={{ color: RED }}>
//                                   info@tripurainfradevelopers.com
//                                 </span>
//                               </p>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 ))
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section> */}

//       {/* ══════════════════════════════════════
//           APPLICATION FORM
//       ══════════════════════════════════════ */}
//       <section
//         ref={formRef}
//         className="py-20 scroll-mt-10"
//         style={{ borderTop: `1px solid ${RED_BORDER}` }}
//       >
//         <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
//           <SectionLabel>Apply Now</SectionLabel>

//           <div className="mb-10">
//             <h2
//               className="text-3xl md:text-4xl font-black mb-3"
//               style={{
//                 color: '#1C1C1C',
//                 fontFamily: "'Montserrat', sans-serif",
//                 letterSpacing: '-0.02em',
//               }}
//             >
//               {selectedJob ? (
//                 <>
//                   Applying for{' '}
//                   <span style={{ color: RED }}>{selectedJob.title}</span>
//                 </>
//               ) : (
//                 <>
//                   Send Us Your{' '}
//                   <span style={{ color: RED }}>Application</span>
//                 </>
//               )}
//             </h2>
//             <p className="text-sm" style={{ color: 'rgba(28,28,28,0.45)' }}>
//               Fill in your details below. We review every application and
//               respond within{' '}
//               <strong style={{ color: RED }}>3 business days</strong>.
//             </p>
//           </div>

//           {selectedJob && (
//             <motion.div
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-center justify-between px-4 py-3 mb-6"
//               style={{
//                 backgroundColor: RED_LIGHT,
//                 border: `1.5px solid ${RED_BORDER_MED}`,
//                 borderLeft: `4px solid ${RED}`,
//               }}
//             >
//               <div className="flex items-center gap-3">
//                 <Briefcase size={13} style={{ color: RED }} />
//                 <div>
//                   <p
//                     className="text-xs font-bold"
//                     style={{
//                       color: '#1C1C1C',
//                       fontFamily: "'Montserrat', sans-serif",
//                     }}
//                   >
//                     {selectedJob.title}
//                   </p>
//                   <p
//                     className="text-[10px]"
//                     style={{ color: 'rgba(28,28,28,0.45)' }}
//                   >
//                     {selectedJob.department} · {selectedJob.location}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelectedJob(null)}
//                 className="p-1.5 transition-all hover:scale-110"
//                 style={{
//                   backgroundColor: RED_LIGHT,
//                   border: `1px solid ${RED_BORDER}`,
//                 }}
//               >
//                 <X size={12} style={{ color: RED }} />
//               </button>
//             </motion.div>
//           )}

//           {/* Form Card */}
//           <div
//             className="relative overflow-hidden"
//             style={{
//               backgroundColor: '#ffffff',
//               border: `1.5px solid ${RED_BORDER}`,
//               boxShadow: `0 4px 40px rgba(192,57,43,0.06), 0 1px 4px rgba(0,0,0,0.04)`,
//             }}
//           >
//             <div
//               className="h-[3px] w-full"
//               style={{
//                 background: `linear-gradient(90deg, ${RED} 0%, #E8622A 50%, ${RED} 100%)`,
//               }}
//             />

//             <div
//               className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
//               style={{
//                 background:
//                   'radial-gradient(circle at top right, rgba(192,57,43,0.04) 0%, transparent 70%)',
//               }}
//             />

//             <div className="relative p-8 md:p-10">
//               <AnimatePresence mode="wait">
//                 {submitted ? (
//                   /* ── Success ── */
//                   <motion.div
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.97 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ type: 'spring', stiffness: 280, damping: 22 }}
//                     className="text-center py-12"
//                   >
//                     <motion.div
//                       initial={{ scale: 0, rotate: -20 }}
//                       animate={{ scale: 1, rotate: 0 }}
//                       transition={{
//                         delay: 0.1,
//                         type: 'spring',
//                         stiffness: 360,
//                         damping: 20,
//                       }}
//                       className="relative w-24 h-24 mx-auto mb-8"
//                     >
//                       <motion.div
//                         className="absolute inset-0"
//                         style={{
//                           border: `2px solid ${RED_BORDER_MED}`,
//                           backgroundColor: RED_LIGHT,
//                         }}
//                         animate={{ rotate: 360 }}
//                         transition={{
//                           duration: 10,
//                           repeat: Infinity,
//                           ease: 'linear',
//                         }}
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <CheckCircle size={40} style={{ color: RED }} />
//                       </div>
//                     </motion.div>

//                     <h3
//                       className="text-2xl font-black mb-2"
//                       style={{
//                         color: '#1C1C1C',
//                         fontFamily: "'Montserrat', sans-serif",
//                       }}
//                     >
//                       Application Submitted!
//                     </h3>
//                     <p
//                       className="text-sm mb-8 max-w-sm mx-auto"
//                       style={{ color: 'rgba(28,28,28,0.5)' }}
//                     >
//                       Our HR team will review your profile and get back to you
//                       within{' '}
//                       <strong style={{ color: RED }}>3 business days</strong>.
//                     </p>

//                     <div
//                       className="grid grid-cols-1 sm:grid-cols-3 gap-px max-w-lg mx-auto mb-10"
//                       style={{ backgroundColor: RED_BORDER }}
//                     >
//                       {[
//                         { icon: Mail, text: 'Check inbox for confirmation' },
//                         { icon: Phone, text: 'We may call for screening' },
//                         { icon: FileText, text: 'Keep documents ready' },
//                       ].map((item) => (
//                         <div
//                           key={item.text}
//                           className="flex flex-col items-center gap-3 p-5"
//                           style={{ backgroundColor: '#fff' }}
//                         >
//                           <item.icon size={18} style={{ color: RED }} />
//                           <p
//                             className="text-[11px] text-center leading-relaxed"
//                             style={{ color: 'rgba(28,28,28,0.5)' }}
//                           >
//                             {item.text}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                       <button
//                         onClick={() => {
//                           setSubmitted(false);
//                           setSelectedJob(null);
//                         }}
//                         className="px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
//                         style={{
//                           backgroundColor: RED,
//                           color: '#ffffff',
//                           fontFamily: "'Montserrat', sans-serif",
//                           boxShadow: `0 6px 24px rgba(192,57,43,0.3)`,
//                         }}
//                       >
//                         Apply for Another Role
//                       </button>
//                       <a
//                         href="mailto:info@tripurainfradevelopers.com"
//                         className="px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 text-center"
//                         style={{
//                           backgroundColor: '#ffffff',
//                           border: `1.5px solid ${RED_BORDER_MED}`,
//                           color: RED,
//                           fontFamily: "'Montserrat', sans-serif",
//                         }}
//                       >
//                         Email Us Directly
//                       </a>
//                     </div>
//                   </motion.div>
//                 ) : (
//                   /* ── Form ── */
//                   <motion.div
//                     key="form"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Formik
//                       initialValues={{
//                         ...initialValues,
//                         position: selectedJob?.title ?? '',
//                       }}
//                       enableReinitialize
//                       validationSchema={applicationSchema}
//                       onSubmit={(_, { setSubmitting }) => {
//                         setTimeout(() => {
//                           setSubmitting(false);
//                           setSubmitted(true);
//                           window.scrollTo({
//                             top: formRef.current?.offsetTop ?? 0,
//                             behavior: 'smooth',
//                           });
//                         }, 1200);
//                       }}
//                     >
//                       {({ isSubmitting, errors, touched, setFieldValue, values }) => (
//                         <Form className="space-y-10">

//                           {/* 1. Personal */}
//                           <div>
//                             <StepHeading number="1" label="Personal Information" />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                               <FormField label="Full Name" name="fullName" required>
//                                 <StyledInput
//                                   name="fullName"
//                                   placeholder="Rajesh Kumar Das"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>

//                               <FormField label="Email Address" name="email" required>
//                                 <StyledInput
//                                   name="email"
//                                   type="email"
//                                   placeholder="you@example.com"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>

//                               <FormField label="Phone Number" name="phone" required>
//                                 <div className="relative">
//                                   <div
//                                     className="absolute left-0 top-0 bottom-0 flex items-center px-3.5"
//                                     style={{
//                                       borderRight: '1.5px solid rgba(28,28,28,0.1)',
//                                     }}
//                                   >
//                                     <span
//                                       className="text-xs font-black"
//                                       style={{
//                                         color: RED,
//                                         fontFamily: "'Montserrat', sans-serif",
//                                       }}
//                                     >
//                                       +91
//                                     </span>
//                                   </div>
//                                   <Field
//                                     name="phone"
//                                     type="tel"
//                                     maxLength={10}
//                                     placeholder="98765 43210"
//                                     className="w-full pr-4 text-sm outline-none placeholder:text-black/25"
//                                     style={{
//                                       ...getInputStyle(
//                                         !!(touched.phone && errors.phone)
//                                       ),
//                                       paddingLeft: '56px',
//                                     }}
//                                     onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
//                                       e.target.style.borderColor = RED;
//                                       e.target.style.backgroundColor = '#fff';
//                                       e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
//                                     }}
//                                     onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
//                                       e.target.style.borderColor =
//                                         touched.phone && errors.phone
//                                           ? 'rgba(239,68,68,0.5)'
//                                           : 'rgba(28,28,28,0.1)';
//                                       e.target.style.boxShadow = 'none';
//                                       e.target.style.backgroundColor = '#f8f8f8';
//                                     }}
//                                   />
//                                 </div>
//                                 <ErrorMessage name="phone">
//                                   {(msg) => (
//                                     <motion.p
//                                       initial={{ opacity: 0, y: -4 }}
//                                       animate={{ opacity: 1, y: 0 }}
//                                       className="text-[11px] mt-1.5 ml-0.5"
//                                       style={{ color: '#ef4444' }}
//                                     >
//                                       ⚠ {msg}
//                                     </motion.p>
//                                   )}
//                                 </ErrorMessage>
//                               </FormField>

//                               <FormField label="Current City / Location" name="location" required>
//                                 <div className="relative">
//                                   <MapPin
//                                     size={13}
//                                     className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
//                                     style={{ color: RED }}
//                                   />
//                                   <Field
//                                     name="location"
//                                     type="text"
//                                     placeholder="Agartala, Tripura"
//                                     className="w-full pl-10 pr-4 text-sm outline-none placeholder:text-black/25"
//                                     style={getInputStyle(
//                                       !!(touched.location && errors.location)
//                                     )}
//                                     onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
//                                       e.target.style.borderColor = RED;
//                                       e.target.style.backgroundColor = '#fff';
//                                       e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
//                                     }}
//                                     onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
//                                       e.target.style.borderColor =
//                                         touched.location && errors.location
//                                           ? 'rgba(239,68,68,0.5)'
//                                           : 'rgba(28,28,28,0.1)';
//                                       e.target.style.boxShadow = 'none';
//                                       e.target.style.backgroundColor = '#f8f8f8';
//                                     }}
//                                   />
//                                 </div>
//                                 <ErrorMessage name="location">
//                                   {(msg) => (
//                                     <motion.p
//                                       initial={{ opacity: 0, y: -4 }}
//                                       animate={{ opacity: 1, y: 0 }}
//                                       className="text-[11px] mt-1.5 ml-0.5"
//                                       style={{ color: '#ef4444' }}
//                                     >
//                                       ⚠ {msg}
//                                     </motion.p>
//                                   )}
//                                 </ErrorMessage>
//                               </FormField>
//                             </div>
//                           </div>

//                           {/* 2. Professional */}
//                           <div>
//                             <StepHeading number="2" label="Professional Details" />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                               <FormField label="Position Applying For" name="position" required>
//                                 <StyledSelect
//                                   name="position"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 >
//                                   <option value="">Select a position...</option>
//                                   {jobs.map((j) => (
//                                     <option key={j.id} value={j.title}>
//                                       {j.title}
//                                     </option>
//                                   ))}
//                                   <option value="Other / General Application">
//                                     Other / General Application
//                                   </option>
//                                 </StyledSelect>
//                               </FormField>

//                               <FormField label="Years of Experience" name="experience" required>
//                                 <StyledSelect
//                                   name="experience"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 >
//                                   <option value="">Select experience...</option>
//                                   <option value="Fresher (0–1 yr)">Fresher (0–1 yr)</option>
//                                   <option value="1–2 Years">1–2 Years</option>
//                                   <option value="2–4 Years">2–4 Years</option>
//                                   <option value="4–6 Years">4–6 Years</option>
//                                   <option value="6–10 Years">6–10 Years</option>
//                                   <option value="10+ Years">10+ Years</option>
//                                 </StyledSelect>
//                               </FormField>

//                               <FormField label="Current Company" name="currentCompany">
//                                 <StyledInput
//                                   name="currentCompany"
//                                   placeholder="Company name (if employed)"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>

//                               <FormField label="Notice Period" name="noticePeriod" required>
//                                 <StyledSelect
//                                   name="noticePeriod"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 >
//                                   <option value="">Select notice period...</option>
//                                   <option value="Immediate">Immediate Joiner</option>
//                                   <option value="15 Days">15 Days</option>
//                                   <option value="30 Days">30 Days</option>
//                                   <option value="45 Days">45 Days</option>
//                                   <option value="60 Days">60 Days</option>
//                                   <option value="90 Days">90 Days</option>
//                                 </StyledSelect>
//                               </FormField>

//                               <FormField label="Current CTC (₹ per annum)" name="currentCTC">
//                                 <StyledInput
//                                   name="currentCTC"
//                                   placeholder="e.g. ₹4,50,000"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>

//                               <FormField label="Expected CTC (₹ per annum)" name="expectedCTC">
//                                 <StyledInput
//                                   name="expectedCTC"
//                                   placeholder="e.g. ₹7,00,000"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>
//                             </div>
//                           </div>

//                           {/* 3. Links */}
//                           <div>
//                             <StepHeading number="3" label="Links & Portfolio" />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                               <FormField label="LinkedIn Profile URL" name="linkedIn">
//                                 <StyledInput
//                                   name="linkedIn"
//                                   type="url"
//                                   placeholder="https://linkedin.com/in/yourprofile"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>

//                               <FormField label="Portfolio / Website URL" name="portfolio">
//                                 <StyledInput
//                                   name="portfolio"
//                                   type="url"
//                                   placeholder="https://yourportfolio.com"
//                                   errors={errors as Record<string, string>}
//                                   touched={touched as Record<string, boolean>}
//                                 />
//                               </FormField>
//                             </div>
//                           </div>

//                           {/* 4. Resume */}
//                           <div>
//                             <StepHeading number="4" label="Resume Upload" />
//                             <FormField label="Resume / CV" name="resume" required>
//                               {values.resume ? (
//                                 <motion.div
//                                   initial={{ opacity: 0, y: -4 }}
//                                   animate={{ opacity: 1, y: 0 }}
//                                   className="flex items-center justify-between px-5 py-4"
//                                   style={{
//                                     backgroundColor: RED_LIGHT,
//                                     border: `1.5px solid ${RED_BORDER_MED}`,
//                                     borderLeft: `4px solid ${RED}`,
//                                   }}
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <FileText size={20} style={{ color: RED }} />
//                                     <div>
//                                       <p
//                                         className="text-sm font-bold"
//                                         style={{
//                                           color: '#1C1C1C',
//                                           fontFamily: "'Montserrat', sans-serif",
//                                         }}
//                                       >
//                                         {(values.resume as File).name}
//                                       </p>
//                                       <p
//                                         className="text-[11px]"
//                                         style={{ color: 'rgba(28,28,28,0.45)' }}
//                                       >
//                                         {(
//                                           (values.resume as File).size /
//                                           1024 /
//                                           1024
//                                         ).toFixed(2)}{' '}
//                                         MB
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <button
//                                     type="button"
//                                     onClick={() => setFieldValue('resume', null)}
//                                     className="p-1.5 transition-all hover:scale-110"
//                                     style={{
//                                       backgroundColor: 'rgba(239,68,68,0.08)',
//                                       border: '1px solid rgba(239,68,68,0.2)',
//                                     }}
//                                   >
//                                     <X size={12} style={{ color: '#ef4444' }} />
//                                   </button>
//                                 </motion.div>
//                               ) : (
//                                 <div
//                                   className="relative cursor-pointer transition-all duration-300"
//                                   style={{
//                                     backgroundColor: dragOver ? RED_LIGHT : '#fafafa',
//                                     border: `2px dashed ${
//                                       dragOver
//                                         ? RED
//                                         : touched.resume && errors.resume
//                                         ? 'rgba(239,68,68,0.4)'
//                                         : RED_BORDER
//                                     }`,
//                                   }}
//                                   onDragOver={(e) => {
//                                     e.preventDefault();
//                                     setDragOver(true);
//                                   }}
//                                   onDragLeave={() => setDragOver(false)}
//                                   onDrop={(e) => handleDrop(e, setFieldValue)}
//                                   onClick={() => fileInputRef.current?.click()}
//                                 >
//                                   <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
//                                     <div
//                                       className="w-14 h-14 flex items-center justify-center mb-4"
//                                       style={{
//                                         backgroundColor: RED_LIGHT,
//                                         border: `1px solid ${RED_BORDER}`,
//                                       }}
//                                     >
//                                       <Upload size={22} style={{ color: RED }} />
//                                     </div>
//                                     <p
//                                       className="text-sm font-bold mb-1.5"
//                                       style={{
//                                         color: '#1C1C1C',
//                                         fontFamily: "'Montserrat', sans-serif",
//                                       }}
//                                     >
//                                       Drop your resume here
//                                     </p>
//                                     <p
//                                       className="text-xs mb-4"
//                                       style={{ color: 'rgba(28,28,28,0.4)' }}
//                                     >
//                                       or{' '}
//                                       <span
//                                         style={{
//                                           color: RED,
//                                           textDecoration: 'underline',
//                                         }}
//                                       >
//                                         click to browse
//                                       </span>
//                                     </p>
//                                     <p
//                                       className="text-[10px] uppercase tracking-widest"
//                                       style={{
//                                         color: 'rgba(28,28,28,0.3)',
//                                         fontFamily: "'Montserrat', sans-serif",
//                                       }}
//                                     >
//                                       PDF, DOC, DOCX · Max 5MB
//                                     </p>
//                                   </div>
//                                   <input
//                                     ref={fileInputRef}
//                                     type="file"
//                                     accept=".pdf,.doc,.docx"
//                                     className="hidden"
//                                     onChange={(e) => {
//                                       const file = e.target.files?.[0];
//                                       if (file) setFieldValue('resume', file);
//                                     }}
//                                   />
//                                 </div>
//                               )}
//                             </FormField>
//                           </div>

//                           {/* 5. Cover Note */}
//                           <div>
//                             <StepHeading number="5" label="Cover Note" />
//                             <FormField
//                               label="Why should we hire you? (min 50 characters)"
//                               name="coverLetter"
//                               required
//                             >
//                               <div className="relative">
//                                 <Field
//                                   as="textarea"
//                                   name="coverLetter"
//                                   rows={5}
//                                   placeholder="Briefly describe your relevant experience, key skills, and why you want to join our team..."
//                                   className="w-full px-4 py-3.5 text-sm outline-none placeholder:text-black/25 resize-none"
//                                   style={getInputStyle(
//                                     !!(touched.coverLetter && errors.coverLetter)
//                                   )}
//                                   onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
//                                     e.target.style.borderColor = RED;
//                                     e.target.style.backgroundColor = '#fff';
//                                     e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
//                                   }}
//                                   onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
//                                     e.target.style.borderColor =
//                                       touched.coverLetter && errors.coverLetter
//                                         ? 'rgba(239,68,68,0.5)'
//                                         : 'rgba(28,28,28,0.1)';
//                                     e.target.style.boxShadow = 'none';
//                                     e.target.style.backgroundColor = '#f8f8f8';
//                                   }}
//                                 />
//                                 <div className="absolute bottom-3 right-3">
//                                   <span
//                                     className="text-[10px]"
//                                     style={{
//                                       color:
//                                         values.coverLetter.length > 900
//                                           ? '#ef4444'
//                                           : 'rgba(28,28,28,0.28)',
//                                     }}
//                                   >
//                                     {values.coverLetter.length}/1000
//                                   </span>
//                                 </div>
//                               </div>
//                             </FormField>
//                           </div>

//                           {/* Agree + Submit */}
//                           <div
//                             className="space-y-6 pt-2"
//                             style={{ borderTop: `1px solid ${RED_BORDER}` }}
//                           >
//                             <div>
//                               <label className="flex items-start gap-3 cursor-pointer">
//                                 <div className="relative flex-shrink-0 mt-0.5">
//                                   <Field
//                                     type="checkbox"
//                                     name="agreeToTerms"
//                                     className="sr-only"
//                                   />
//                                   <div
//                                     className="w-5 h-5 flex items-center justify-center transition-all duration-200"
//                                     style={{
//                                       backgroundColor: values.agreeToTerms
//                                         ? RED
//                                         : '#ffffff',
//                                       border: `1.5px solid ${
//                                         values.agreeToTerms
//                                           ? RED
//                                           : touched.agreeToTerms &&
//                                             errors.agreeToTerms
//                                           ? 'rgba(239,68,68,0.5)'
//                                           : 'rgba(28,28,28,0.2)'
//                                       }`,
//                                     }}
//                                     onClick={() =>
//                                       setFieldValue(
//                                         'agreeToTerms',
//                                         !values.agreeToTerms
//                                       )
//                                     }
//                                   >
//                                     {values.agreeToTerms && (
//                                       <motion.div
//                                         initial={{ scale: 0 }}
//                                         animate={{ scale: 1 }}
//                                       >
//                                         <CheckCircle size={12} color="white" />
//                                       </motion.div>
//                                     )}
//                                   </div>
//                                 </div>
//                                 <span
//                                   className="text-xs leading-relaxed"
//                                   style={{ color: 'rgba(28,28,28,0.5)' }}
//                                 >
//                                   I confirm all information is accurate and
//                                   consent to Infra Co. storing my data for
//                                   recruitment purposes.{' '}
//                                   <span
//                                     style={{
//                                       color: RED,
//                                       textDecoration: 'underline',
//                                       cursor: 'pointer',
//                                     }}
//                                   >
//                                     Privacy Policy
//                                   </span>
//                                 </span>
//                               </label>
//                               <ErrorMessage name="agreeToTerms">
//                                 {(msg) => (
//                                   <motion.p
//                                     initial={{ opacity: 0, y: -4 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     className="text-[11px] mt-2 ml-8"
//                                     style={{ color: '#ef4444' }}
//                                   >
//                                     ⚠ {msg}
//                                   </motion.p>
//                                 )}
//                               </ErrorMessage>
//                             </div>

//                             <motion.button
//                               type="submit"
//                               disabled={isSubmitting}
//                               className="group w-full flex items-center justify-center gap-3 py-5 text-xs font-black uppercase tracking-widest relative overflow-hidden disabled:opacity-50"
//                               style={{
//                                 backgroundColor: RED,
//                                 color: '#ffffff',
//                                 fontFamily: "'Montserrat', sans-serif",
//                                 boxShadow: `0 4px 24px rgba(192,57,43,0.35)`,
//                               }}
//                               whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
//                               whileTap={!isSubmitting ? { scale: 0.99 } : {}}
//                               onMouseEnter={(e) => {
//                                 if (!isSubmitting)
//                                   (e.currentTarget as HTMLElement).style.backgroundColor =
//                                     RED_DARK;
//                               }}
//                               onMouseLeave={(e) => {
//                                 (e.currentTarget as HTMLElement).style.backgroundColor =
//                                   RED;
//                               }}
//                             >
//                               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//                               {isSubmitting ? (
//                                 <>
//                                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                                   <span className="relative z-10">
//                                     Submitting Application...
//                                   </span>
//                                 </>
//                               ) : (
//                                 <>
//                                   <span className="relative z-10">
//                                     Submit Application
//                                   </span>
//                                   <ArrowRight
//                                     size={14}
//                                     className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
//                                   />
//                                 </>
//                               )}
//                             </motion.button>

//                             <div className="flex flex-wrap items-center justify-center gap-6">
//                               {[
//                                 { icon: Shield, text: 'Data is 100% secure' },
//                                 { icon: CheckCircle, text: 'Reviewed within 3 days' },
//                                 { icon: Mail, text: 'Confirmation email sent' },
//                               ].map((t) => (
//                                 <div key={t.text} className="flex items-center gap-1.5">
//                                   <t.icon size={10} style={{ color: RED }} />
//                                   <span
//                                     className="text-[10px]"
//                                     style={{ color: 'rgba(28,28,28,0.38)' }}
//                                   >
//                                     {t.text}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </Form>
//                       )}
//                     </Formik>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════
//           CONTACT STRIP
//       ══════════════════════════════════════ */}
//       <section
//         className="py-14"
//         style={{
//           borderTop: `1px solid ${RED_BORDER}`,
//           backgroundColor: RED_LIGHT,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div>
//               <p
//                 className="text-[10px] uppercase tracking-[3px] mb-2"
//                 style={{
//                   color: 'rgba(28,28,28,0.4)',
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Can&apos;t find the right role?
//               </p>
//               <h3
//                 className="text-xl font-black"
//                 style={{
//                   color: '#1C1C1C',
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Send us a general application anytime.
//               </h3>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <a
//                 href="mailto:info@tripurainfradevelopers.com"
//                 className="group flex items-center gap-3 px-6 py-3.5 transition-all duration-300 hover:scale-105"
//                 style={{
//                   backgroundColor: '#ffffff',
//                   border: `1.5px solid ${RED_BORDER_MED}`,
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor =
//                     RED_LIGHT;
//                   (e.currentTarget as HTMLElement).style.borderColor = RED;
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor =
//                     '#ffffff';
//                   (e.currentTarget as HTMLElement).style.borderColor =
//                     RED_BORDER_MED;
//                 }}
//               >
//                 <Mail size={14} style={{ color: RED }} />
//                 <span
//                   className="text-xs font-bold"
//                   style={{
//                     color: '#1C1C1C',
//                     fontFamily: "'Montserrat', sans-serif",
//                   }}
//                 >
//                   info@tripurainfradevelopers.com
//                 </span>
//               </a>

//               <a
//                 href="tel:+918790806677"
//                 className="group flex items-center gap-3 px-6 py-3.5 transition-all duration-300 hover:scale-105"
//                 style={{
//                   backgroundColor: RED,
//                   border: `1.5px solid ${RED}`,
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor =
//                     RED_DARK;
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = RED;
//                 }}
//               >
//                 <Phone size={14} color="white" />
//                 <span
//                   className="text-xs font-bold text-white"
//                   style={{ fontFamily: "'Montserrat', sans-serif" }}
//                 >
//                   +91 87908 06677
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Upload,
  X,
  ChevronDown,
  Building2,
  Award,
  TrendingUp,
  Heart,
  Star,
  Phone,
  Mail,
  FileText,
  Search,
  Filter,
  Shield,
  AlertCircle,
} from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useRef, useCallback } from 'react';

// ─── Types ───────────────────────────────────────────────
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  badge?: string;
}

// ─── Design Tokens ────────────────────────────────────────
const RED = '#C0392B';
const RED_DARK = '#a93226';
const RED_LIGHT = 'rgba(192,57,43,0.08)';
const RED_BORDER = 'rgba(192,57,43,0.2)';
const RED_BORDER_MED = 'rgba(192,57,43,0.35)';



// ─── Data ────────────────────────────────────────────────
const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Civil Engineer',
    department: 'Engineering',
    location: 'Hyderabad, Telangana',
    type: 'Full Time',
    experience: '5–8 Years',
    salary: '₹8L – ₹14L / year',
    badge: 'Urgent',
    description:
      'Lead structural design and execution of large-scale residential and commercial projects across Hyderabad.',
    responsibilities: [
      'Oversee structural design and site execution',
      'Coordinate with architects and contractors',
      'Ensure compliance with safety & quality norms',
      'Prepare project reports and technical documentation',
    ],
    requirements: [
      'B.Tech / M.Tech in Civil Engineering',
      'Proficient in AutoCAD, STAAD Pro',
      'Strong leadership and communication skills',
      'Experience in RCC and steel structures',
    ],
  },
  {
    id: 2,
    title: 'Interior Design Lead',
    department: 'Design',
    location: 'Hyderabad, Telangana',
    type: 'Full Time',
    experience: '3–6 Years',
    salary: '₹6L – ₹10L / year',
    badge: 'New',
    description:
      'Drive interior design concepts for premium residential projects from ideation to final delivery.',
    responsibilities: [
      'Create detailed interior design concepts',
      'Client consultation and mood board presentations',
      'Manage vendor relationships and material sourcing',
      'Supervise on-site implementation',
    ],
    requirements: [
      'Degree in Interior Design or Architecture',
      'Proficient in SketchUp, AutoCAD, Photoshop',
      'Strong portfolio of residential projects',
      'Excellent client-facing communication',
    ],
  },
  {
    id: 3,
    title: 'Project Manager – Construction',
    department: 'Operations',
    location: 'Hyderabad (Multiple Sites)',
    type: 'Full Time',
    experience: '6–10 Years',
    salary: '₹10L – ₹18L / year',
    description:
      'End-to-end management of construction projects ensuring timely delivery, quality, and budget adherence.',
    responsibilities: [
      'Plan and manage project timelines and budgets',
      'Lead cross-functional teams of 20–50 members',
      'Liaise with clients, consultants, and authorities',
      'Risk assessment and mitigation planning',
    ],
    requirements: [
      'B.Tech Civil + MBA preferred',
      'PMP or PRINCE2 certification is a plus',
      'Proficient in MS Project / Primavera',
      'Proven track record of on-time delivery',
    ],
  },
  {
    id: 4,
    title: 'Site Supervisor',
    department: 'Site Operations',
    location: 'Hyderabad, Telangana',
    type: 'Full Time',
    experience: '2–4 Years',
    salary: '₹3.5L – ₹6L / year',
    description:
      'Supervise day-to-day construction activities on site ensuring quality and safety standards are met.',
    responsibilities: [
      'Monitor daily construction progress',
      'Coordinate labor and material deployment',
      'Maintain site safety protocols',
      'Report progress to project manager',
    ],
    requirements: [
      'Diploma or B.Tech in Civil Engineering',
      'Knowledge of construction methodologies',
      'Good problem-solving skills',
      'Ability to work in field conditions',
    ],
  },
  {
    id: 5,
    title: 'Business Development Executive',
    department: 'Sales & BD',
    location: 'Hyderabad, Telangana',
    type: 'Full Time',
    experience: '1–3 Years',
    salary: '₹3L – ₹5L + Incentives',
    badge: 'New',
    description:
      'Identify and develop new business opportunities in the residential and commercial construction segment.',
    responsibilities: [
      'Generate leads through field visits and networking',
      'Conduct client meetings and project presentations',
      'Maintain CRM and pipeline records',
      'Collaborate with design and technical teams',
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      'Strong communication and negotiation skills',
      'Experience in real estate / construction preferred',
      'Self-motivated with target-oriented approach',
    ],
  },
  {
    id: 6,
    title: 'AutoCAD Draftsman',
    department: 'Design',
    location: 'Hyderabad, Telangana',
    type: 'Full Time',
    experience: '1–3 Years',
    salary: '₹2.5L – ₹4.5L / year',
    description:
      'Prepare detailed architectural and structural drawings using AutoCAD for ongoing projects.',
    responsibilities: [
      'Prepare 2D/3D drawings as per specifications',
      'Revise drawings based on engineer feedback',
      'Maintain drawing register and version control',
      'Coordinate with design and site teams',
    ],
    requirements: [
      'Diploma in Civil / Architecture or equivalent',
      'Expert in AutoCAD 2D and 3D',
      'Basic knowledge of structural drawings',
      'Attention to detail and accuracy',
    ],
  },
];

const departments = [
  'All',
  'Engineering',
  'Design',
  'Operations',
  'Site Operations',
  'Sales & BD',
];

const perks = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: 'Structured appraisals, promotions & skill development programs every 6 months',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    desc: 'Comprehensive medical insurance for you and your entire family',
  },
  {
    icon: Award,
    title: 'Performance Bonuses',
    desc: 'Attractive incentives tied to project delivery and client satisfaction scores',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    desc: 'Work alongside experienced professionals in a people-first environment',
  },
  {
    icon: Building2,
    title: 'Landmark Projects',
    desc: 'Be part of iconic infrastructure and residential projects across Hyderabad',
  },
  {
    icon: Star,
    title: 'Recognition',
    desc: 'Monthly employee spotlights and annual awards for outstanding contributors',
  },
];

// ─── Validation ───────────────────────────────────────────
const applicationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Enter at least 2 characters')
    .max(60, 'Name too long')
    .required('Full name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
    .required('Phone number is required'),
  position: Yup.string().required('Please select a position'),
  experience: Yup.string().required('Please select your experience'),
  currentCompany: Yup.string().max(80, 'Too long'),
  currentCTC: Yup.string(),
  expectedCTC: Yup.string(),
  noticePeriod: Yup.string().required('Please select notice period'),
  location: Yup.string()
    .min(2, 'Enter your current city')
    .required('Current location is required'),
  coverLetter: Yup.string()
    .min(50, 'Please write at least 50 characters')
    .max(1000, 'Keep it under 1000 characters')
    .required('A brief cover note is required'),
  resume: Yup.mixed()
    .required('Please upload your resume')
    .test('fileSize', 'File must be under 5MB', (value) => {
      if (!value) return false;
      return (value as File).size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'Only PDF, DOC, DOCX allowed', (value) => {
      if (!value) return false;
      const allowed = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      return allowed.includes((value as File).type);
    }),
  linkedIn: Yup.string().url('Enter a valid URL (include https://)'),
  portfolio: Yup.string().url('Enter a valid URL (include https://)'),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to continue')
    .required(),
});

type ApplicationValues = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  currentCompany: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  location: string;
  coverLetter: string;
  resume: File | null;
  linkedIn: string;
  portfolio: string;
  agreeToTerms: boolean;
};

const initialValues: ApplicationValues = {
  fullName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  currentCompany: '',
  currentCTC: '',
  expectedCTC: '',
  noticePeriod: '',
  location: '',
  coverLetter: '',
  resume: null,
  linkedIn: '',
  portfolio: '',
  agreeToTerms: false,
};

// ─── Reusable UI ──────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div
        className="h-px flex-1 max-w-[40px]"
        style={{
          background: `linear-gradient(to right, ${RED}, transparent)`,
        }}
      />
      <span
        className="text-[10px] font-bold uppercase tracking-[3.5px]"
        style={{ color: RED, fontFamily: "'Montserrat', sans-serif" }}
      >
        {children}
      </span>
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to left, transparent, ${RED_BORDER})`,
        }}
      />
    </div>
  );
}

function BadgePill({ text }: { text: string }) {
  const isUrgent = text === 'Urgent';
  return (
    <span
      className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1"
      style={{
        backgroundColor: isUrgent ? RED_LIGHT : 'rgba(192,57,43,0.05)',
        border: `1px solid ${isUrgent ? RED_BORDER_MED : RED_BORDER}`,
        color: RED,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {text}
    </span>
  );
}

function StepHeading({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-6 h-6 flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
        style={{ backgroundColor: RED, fontFamily: "'Montserrat', sans-serif" }}
      >
        {number}
      </div>
      <span
        className="text-[11px] font-bold uppercase tracking-[2.5px]"
        style={{
          color: 'rgba(28,28,28,0.45)',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: 'rgba(192,57,43,0.1)' }}
      />
    </div>
  );
}

const getInputStyle = (hasError: boolean): React.CSSProperties => ({
  backgroundColor: hasError ? 'rgba(239,68,68,0.03)' : '#f8f8f8',
  border: `1.5px solid ${hasError ? 'rgba(239,68,68,0.5)' : 'rgba(28,28,28,0.1)'}`,
  color: '#1C1C1C',
  fontFamily: "'Open Sans', sans-serif",
  width: '100%',
  padding: '12px 16px',
  fontSize: '14px',
  outline: 'none',
  transition: 'all 0.2s',
});

function StyledInput({
  name,
  type = 'text',
  placeholder,
  errors,
  touched,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}) {
  const hasError = !!(touched[name] && errors[name]);
  return (
    <Field
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      style={getInputStyle(hasError)}
      className="placeholder:text-black/25"
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
        e.target.style.borderColor = RED;
        e.target.style.backgroundColor = '#fff';
        e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
      }}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        e.target.style.borderColor = hasError
          ? 'rgba(239,68,68,0.5)'
          : 'rgba(28,28,28,0.1)';
        e.target.style.boxShadow = 'none';
        e.target.style.backgroundColor = '#f8f8f8';
      }}
    />
  );
}

function StyledSelect({
  name,
  children,
  errors,
  touched,
}: {
  name: string;
  children: React.ReactNode;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}) {
  const hasError = !!(touched[name] && errors[name]);
  return (
    <div className="relative">
      <Field
        as="select"
        id={name}
        name={name}
        style={{
          ...getInputStyle(hasError),
          appearance: 'none',
          cursor: 'pointer',
        }}
        className="[&>option]:bg-white [&>option]:text-[#1C1C1C]"
        onFocus={(e: React.FocusEvent<HTMLSelectElement>) => {
          e.target.style.borderColor = RED;
          e.target.style.backgroundColor = '#fff';
          e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
        }}
        onBlur={(e: React.FocusEvent<HTMLSelectElement>) => {
          e.target.style.borderColor = hasError
            ? 'rgba(239,68,68,0.5)'
            : 'rgba(28,28,28,0.1)';
          e.target.style.boxShadow = 'none';
          e.target.style.backgroundColor = '#f8f8f8';
        }}
      >
        {children}
      </Field>
      <ChevronDown
        size={13}
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: 'rgba(28,28,28,0.35)' }}
      />
    </div>
  );
}

function FormField({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] font-bold uppercase tracking-[2px] mb-2"
        style={{
          color: 'rgba(28,28,28,0.45)',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {label}
        {required && <span style={{ color: RED }}> *</span>}
      </label>
      {children}
      <ErrorMessage name={name}>
        {(msg) => (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] mt-1.5 ml-0.5 flex items-center gap-1"
            style={{ color: '#ef4444', fontFamily: "'Open Sans', sans-serif" }}
          >
            ⚠ {msg}
          </motion.p>
        )}
      </ErrorMessage>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────
export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredJobs = jobs.filter((j) => {
    const matchDept =
      selectedDept === 'All' || j.department === selectedDept;
    const matchSearch =
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDept && matchSearch;
  });

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setSubmitError(null);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleDrop = useCallback(
    (
      e: React.DragEvent,
      setFieldValue: (field: string, value: unknown) => void
    ) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) setFieldValue('resume', file);
    },
    []
  );

// ─── Google Sheets Webhook URL (your deployed Apps Script URL) ───
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwiu8_0ZG0zym9yBoHCW8eTZOiu6abb9HxMim4e3DT38mNi_aLIJ7QNxKRLdcjGyuye/exec";

// ─── Google Sheets submission handler (multipart/form-data with file upload) ───
const submitToGoogleSheets = async (values: ApplicationValues) => {
  const webhookUrl = GOOGLE_SHEETS_WEBHOOK_URL;
  
  // Safety check: if URL is missing or still the placeholder, skip submission
  if (!webhookUrl || webhookUrl === "YOUR_APPS_SCRIPT_URL_HERE") {
    console.warn("Google Sheets webhook URL not configured. Submission skipped.");
    return;
  }

  // Create FormData to send both text fields and the resume file
  const formData = new FormData();
  formData.append("fullName", values.fullName);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("position", values.position);
  formData.append("experience", values.experience);
  formData.append("currentCompany", values.currentCompany);
  formData.append("currentCTC", values.currentCTC);
  formData.append("expectedCTC", values.expectedCTC);
  formData.append("noticePeriod", values.noticePeriod);
  formData.append("location", values.location);
  formData.append("coverLetter", values.coverLetter);
  
  // Append the actual resume file if it exists
  if (values.resume) {
    formData.append("resume", values.resume);
  }
  
  formData.append("linkedIn", values.linkedIn);
  formData.append("portfolio", values.portfolio);
  formData.append("agreeToTerms", values.agreeToTerms.toString());

  // Send POST request with multipart/form-data
  const response = await fetch(webhookUrl, {
    method: "POST",
    body: formData, // Browser sets correct Content-Type with boundary
  });

  // Check for HTTP errors
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  // Parse JSON response from Apps Script
  const result = await response.json();
  
  // Verify success flag from the script
  if (result.result !== "success") {
    throw new Error(result.error || "Submission failed");
  }

  // Optional: return the resumeUrl if you need it
  return result;
};
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: '#ffffff',
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      {/* Fixed left red accent bar */}
      <div
        className="fixed left-0 top-0 bottom-0 w-[3px] z-50 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${RED} 20%, ${RED} 80%, transparent)`,
        }}
      />

      {/* ══════════════════════════════════════
          HERO — blueprint grid style
      ══════════════════════════════════════ */}
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

        {/* Top accent bar */}
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

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* ── Left: Text ── */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  backgroundColor: '#ffffff',
                  border: `1px solid ${RED_BORDER}`,
                  borderLeft: `3px solid ${RED}`,
                  padding: '6px 16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: RED }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[3px]"
                  style={{
                    color: RED,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  We&apos;re Hiring
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="font-black mb-4 leading-[1.05]"
                style={{
                  fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                  color: '#1C1C1C',
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: '-0.03em',
                }}
              >
                Build Your Career
                <br />
                <span style={{ color: RED }}>While Building</span>
                <br />
                Tripura.
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-6 h-[3px] w-24 lg:mx-0 mx-auto"
                style={{
                  background: 'linear-gradient(90deg, #C0392B, #F4B400)',
                  transformOrigin: 'left center',
                }}
              />

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-sm md:text-base leading-relaxed mb-8 max-w-lg lg:mx-0 mx-auto"
                style={{
                  color: 'rgba(28,28,28,0.52)',
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Join a 20-year legacy of excellence. We are looking for
                passionate engineers, designers, and builders to shape the
                future of infrastructure across Northeast India.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10"
              >
                <button
                  onClick={() =>
                    formRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }
                  className="group relative flex items-center gap-2.5 px-7 py-4 text-xs font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: RED,
                    color: '#ffffff',
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: `0 8px 28px rgba(192,57,43,0.35)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      RED_DARK;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      RED;
                  }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  <span className="relative z-10">Apply Now</span>
                  <ArrowRight
                    size={13}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>

                <a
                  href="tel:+918790806677"
                  className="flex items-center gap-2.5 px-5 py-3.5 text-xs font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#ffffff',
                    border: `1.5px solid ${RED_BORDER_MED}`,
                    color: '#1C1C1C',
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = RED;
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      RED_LIGHT;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      RED_BORDER_MED;
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      '#ffffff';
                  }}
                >
                  <Phone size={13} style={{ color: RED }} />
                  <span>+91 87908 06677</span>
                </a>
              </motion.div>

              {/* Quick info pills */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { icon: Briefcase, text: `${jobs.length} Open Roles` },
                  { icon: MapPin, text: 'Hyderabad, Telangana' },
                  { icon: Clock, text: 'Full Time Positions' },
                ].map((pill) => (
                  <div
                    key={pill.text}
                    className="flex items-center gap-2 px-3.5 py-2"
                    style={{
                      backgroundColor: '#ffffff',
                      border: `1px solid ${RED_BORDER}`,
                      boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                    }}
                  >
                    <pill.icon size={11} style={{ color: RED }} />
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: 'rgba(28,28,28,0.6)' }}
                    >
                      {pill.text}
                    </span>
                  </div>
                ))}
              </motion.div> */}
            </div>

            {/* ── Right: Stats card cluster ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              {/* Main stats card */}
              <div
                className="relative p-8 mb-4"
                style={{
                  backgroundColor: '#ffffff',
                  border: `1.5px solid ${RED_BORDER}`,
                  boxShadow:
                    '0 4px 32px rgba(192,57,43,0.08), 0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(192,57,43,0.07) 0%, transparent 70%)',
                  }}
                />
                {/* Card top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${RED}, #F4B400)` }}
                />

                <p
                  className="text-[10px] font-bold uppercase tracking-[3px] mb-5"
                  style={{
                    color: 'rgba(28,28,28,0.38)',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Company at a glance
                </p>

                <div className="grid grid-cols-2 gap-px"
                  style={{ backgroundColor: RED_BORDER }}>
                  {[
                    { number: '20+', label: 'Years of Trust' },
                    { number: '500+', label: 'Projects Done' },
                    { number: '200+', label: 'Team Members' },
                    { number: '₹18L', label: 'Max Package' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center justify-center py-5 px-4"
                      style={{ backgroundColor: '#ffffff' }}
                    >
                      <span
                        className="text-2xl font-black leading-none mb-1"
                        style={{
                          color: RED,
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {s.number}
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-widest text-center"
                        style={{ color: 'rgba(28,28,28,0.4)' }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini cards row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Perks */}
                <div
                  className="p-4"
                  style={{
                    backgroundColor: RED_LIGHT,
                    border: `1px solid ${RED_BORDER}`,
                    borderLeft: `3px solid ${RED}`,
                  }}
                >
                  <Award size={16} style={{ color: RED, marginBottom: 8 }} />
                  <p
                    className="text-xs font-black mb-1"
                    style={{
                      color: '#1C1C1C',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Great Perks
                  </p>
                  <p
                    className="text-[10px] leading-relaxed"
                    style={{ color: 'rgba(28,28,28,0.48)' }}
                  >
                    Health insurance, bonuses & more
                  </p>
                </div>

                {/* Response time */}
                <div
                  className="p-4"
                  style={{
                    backgroundColor: '#ffffff',
                    border: `1px solid ${RED_BORDER}`,
                    borderLeft: `3px solid #F4B400`,
                  }}
                >
                  <Clock
                    size={16}
                    style={{ color: '#F4B400', marginBottom: 8 }}
                  />
                  <p
                    className="text-xs font-black mb-1"
                    style={{
                      color: '#1C1C1C',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Fast Response
                  </p>
                  <p
                    className="text-[10px] leading-relaxed"
                    style={{ color: 'rgba(28,28,28,0.48)' }}
                  >
                    We reply within 3 business days
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* ══════════════════════════════════════
          APPLICATION FORM (with Google Sheets)
      ══════════════════════════════════════ */}
      <section
        ref={formRef}
        className="py-20 scroll-mt-10"
        style={{ borderTop: `1px solid ${RED_BORDER}` }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
          <SectionLabel>Apply Now</SectionLabel>

          <div className="mb-10">
            <h2
              className="text-3xl md:text-4xl font-black mb-3"
              style={{
                color: '#1C1C1C',
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              {selectedJob ? (
                <>
                  Applying for{' '}
                  <span style={{ color: RED }}>{selectedJob.title}</span>
                </>
              ) : (
                <>
                  Send Us Your{' '}
                  <span style={{ color: RED }}>Application</span>
                </>
              )}
            </h2>
            <p className="text-sm" style={{ color: 'rgba(28,28,28,0.45)' }}>
              Fill in your details below. We review every application and
              respond within{' '}
              <strong style={{ color: RED }}>3 business days</strong>.
            </p>
          </div>

          {selectedJob && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between px-4 py-3 mb-6"
              style={{
                backgroundColor: RED_LIGHT,
                border: `1.5px solid ${RED_BORDER_MED}`,
                borderLeft: `4px solid ${RED}`,
              }}
            >
              <div className="flex items-center gap-3">
                <Briefcase size={13} style={{ color: RED }} />
                <div>
                  <p
                    className="text-xs font-bold"
                    style={{
                      color: '#1C1C1C',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {selectedJob.title}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: 'rgba(28,28,28,0.45)' }}
                  >
                    {selectedJob.department} · {selectedJob.location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-1.5 transition-all hover:scale-110"
                style={{
                  backgroundColor: RED_LIGHT,
                  border: `1px solid ${RED_BORDER}`,
                }}
              >
                <X size={12} style={{ color: RED }} />
              </button>
            </motion.div>
          )}

          {/* Form Card */}
          <div
            className="relative overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              border: `1.5px solid ${RED_BORDER}`,
              boxShadow: `0 4px 40px rgba(192,57,43,0.06), 0 1px 4px rgba(0,0,0,0.04)`,
            }}
          >
            <div
              className="h-[3px] w-full"
              style={{
                background: `linear-gradient(90deg, ${RED} 0%, #E8622A 50%, ${RED} 100%)`,
              }}
            />

            <div
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(192,57,43,0.04) 0%, transparent 70%)',
              }}
            />

            <div className="relative p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.1,
                        type: 'spring',
                        stiffness: 360,
                        damping: 20,
                      }}
                      className="relative w-24 h-24 mx-auto mb-8"
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          border: `2px solid ${RED_BORDER_MED}`,
                          backgroundColor: RED_LIGHT,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CheckCircle size={40} style={{ color: RED }} />
                      </div>
                    </motion.div>

                    <h3
                      className="text-2xl font-black mb-2"
                      style={{
                        color: '#1C1C1C',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      Application Submitted!
                    </h3>
                    <p
                      className="text-sm mb-8 max-w-sm mx-auto"
                      style={{ color: 'rgba(28,28,28,0.5)' }}
                    >
                      Our HR team will review your profile and get back to you
                      within{' '}
                      <strong style={{ color: RED }}>3 business days</strong>.
                    </p>

                    <div
                      className="grid grid-cols-1 sm:grid-cols-3 gap-px max-w-lg mx-auto mb-10"
                      style={{ backgroundColor: RED_BORDER }}
                    >
                      {[
                        { icon: Mail, text: 'Check inbox for confirmation' },
                        { icon: Phone, text: 'We may call for screening' },
                        { icon: FileText, text: 'Keep documents ready' },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex flex-col items-center gap-3 p-5"
                          style={{ backgroundColor: '#fff' }}
                        >
                          <item.icon size={18} style={{ color: RED }} />
                          <p
                            className="text-[11px] text-center leading-relaxed"
                            style={{ color: 'rgba(28,28,28,0.5)' }}
                          >
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setSelectedJob(null);
                          setSubmitError(null);
                        }}
                        className="px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: RED,
                          color: '#ffffff',
                          fontFamily: "'Montserrat', sans-serif",
                          boxShadow: `0 6px 24px rgba(192,57,43,0.3)`,
                        }}
                      >
                        Apply for Another Role
                      </button>
                      <a
                        href="mailto:info@tripurainfradevelopers.com"
                        className="px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 text-center"
                        style={{
                          backgroundColor: '#ffffff',
                          border: `1.5px solid ${RED_BORDER_MED}`,
                          color: RED,
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Email Us Directly
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Formik
                      initialValues={{
                        ...initialValues,
                        position: selectedJob?.title ?? '',
                      }}
                      enableReinitialize
                      validationSchema={applicationSchema}
                      onSubmit={async (values, { setSubmitting, setFieldError }) => {
                        try {
                          setSubmitError(null);
                          // Send data to Google Sheets
                          await submitToGoogleSheets(values);
                          // If we reach here, assume success (with no-cors mode it's optimistic)
                          setSubmitted(true);
                          // Scroll to top of form
                          window.scrollTo({
                            top: formRef.current?.offsetTop ?? 0,
                            behavior: 'smooth',
                          });
                        } catch (err) {
                          console.error("Submission error:", err);
                          setSubmitError(
                            "Failed to submit application. Please try again or email us directly."
                          );
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                    >
                      {({ isSubmitting, errors, touched, setFieldValue, values }) => (
                        <Form className="space-y-10">
                          {/* Show error banner if present */}
                          {submitError && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-3 px-4 py-3 mb-4"
                              style={{
                                backgroundColor: 'rgba(239,68,68,0.1)',
                                borderLeft: `4px solid #ef4444`,
                                borderRadius: '4px',
                              }}
                            >
                              <AlertCircle size={18} style={{ color: '#ef4444' }} />
                              <span className="text-sm" style={{ color: '#b91c1c' }}>
                                {submitError}
                              </span>
                            </motion.div>
                          )}

                          {/* 1. Personal */}
                          <div>
                            <StepHeading number="1" label="Personal Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <FormField label="Full Name" name="fullName" required>
                                <StyledInput
                                  name="fullName"
                                  placeholder="Rajesh Kumar Das"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>

                              <FormField label="Email Address" name="email" required>
                                <StyledInput
                                  name="email"
                                  type="email"
                                  placeholder="you@example.com"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>

                              <FormField label="Phone Number" name="phone" required>
                                <div className="relative">
                                  <div
                                    className="absolute left-0 top-0 bottom-0 flex items-center px-3.5"
                                    style={{
                                      borderRight: '1.5px solid rgba(28,28,28,0.1)',
                                    }}
                                  >
                                    <span
                                      className="text-xs font-black"
                                      style={{
                                        color: RED,
                                        fontFamily: "'Montserrat', sans-serif",
                                      }}
                                    >
                                      +91
                                    </span>
                                  </div>
                                  <Field
                                    name="phone"
                                    type="tel"
                                    maxLength={10}
                                    placeholder="98765 43210"
                                    className="w-full pr-4 text-sm outline-none placeholder:text-black/25"
                                    style={{
                                      ...getInputStyle(
                                        !!(touched.phone && errors.phone)
                                      ),
                                      paddingLeft: '56px',
                                    }}
                                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                                      e.target.style.borderColor = RED;
                                      e.target.style.backgroundColor = '#fff';
                                      e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
                                    }}
                                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                      e.target.style.borderColor =
                                        touched.phone && errors.phone
                                          ? 'rgba(239,68,68,0.5)'
                                          : 'rgba(28,28,28,0.1)';
                                      e.target.style.boxShadow = 'none';
                                      e.target.style.backgroundColor = '#f8f8f8';
                                    }}
                                  />
                                </div>
                                <ErrorMessage name="phone">
                                  {(msg) => (
                                    <motion.p
                                      initial={{ opacity: 0, y: -4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="text-[11px] mt-1.5 ml-0.5"
                                      style={{ color: '#ef4444' }}
                                    >
                                      ⚠ {msg}
                                    </motion.p>
                                  )}
                                </ErrorMessage>
                              </FormField>

                              <FormField label="Current City / Location" name="location" required>
                                <div className="relative">
                                  <MapPin
                                    size={13}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                    style={{ color: RED }}
                                  />
                                  <Field
                                    name="location"
                                    type="text"
                                    placeholder="Hyderabad, Telangana"
                                    className="w-full pl-10 pr-4 text-sm outline-none placeholder:text-black/25"
                                    style={getInputStyle(
                                      !!(touched.location && errors.location)
                                    )}
                                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                                      e.target.style.borderColor = RED;
                                      e.target.style.backgroundColor = '#fff';
                                      e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
                                    }}
                                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                      e.target.style.borderColor =
                                        touched.location && errors.location
                                          ? 'rgba(239,68,68,0.5)'
                                          : 'rgba(28,28,28,0.1)';
                                      e.target.style.boxShadow = 'none';
                                      e.target.style.backgroundColor = '#f8f8f8';
                                    }}
                                  />
                                </div>
                                <ErrorMessage name="location">
                                  {(msg) => (
                                    <motion.p
                                      initial={{ opacity: 0, y: -4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="text-[11px] mt-1.5 ml-0.5"
                                      style={{ color: '#ef4444' }}
                                    >
                                      ⚠ {msg}
                                    </motion.p>
                                  )}
                                </ErrorMessage>
                              </FormField>
                            </div>
                          </div>

                          {/* 2. Professional */}
                          <div>
                            <StepHeading number="2" label="Professional Details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <FormField label="Position Applying For" name="position" required>
                                <StyledSelect
                                  name="position"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                >
                                  <option value="">Select a position...</option>
                                  {jobs.map((j) => (
                                    <option key={j.id} value={j.title}>
                                      {j.title}
                                    </option>
                                  ))}
                                  <option value="Other / General Application">
                                    Other / General Application
                                  </option>
                                </StyledSelect>
                              </FormField>

                              <FormField label="Years of Experience" name="experience" required>
                                <StyledSelect
                                  name="experience"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                >
                                  <option value="">Select experience...</option>
                                  <option value="Fresher (0–1 yr)">Fresher (0–1 yr)</option>
                                  <option value="1–2 Years">1–2 Years</option>
                                  <option value="2–4 Years">2–4 Years</option>
                                  <option value="4–6 Years">4–6 Years</option>
                                  <option value="6–10 Years">6–10 Years</option>
                                  <option value="10+ Years">10+ Years</option>
                                </StyledSelect>
                              </FormField>

                              <FormField label="Current Company" name="currentCompany">
                                <StyledInput
                                  name="currentCompany"
                                  placeholder="Company name (if employed)"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>

                              <FormField label="Notice Period" name="noticePeriod" required>
                                <StyledSelect
                                  name="noticePeriod"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                >
                                  <option value="">Select notice period...</option>
                                  <option value="Immediate">Immediate Joiner</option>
                                  <option value="15 Days">15 Days</option>
                                  <option value="30 Days">30 Days</option>
                                  <option value="45 Days">45 Days</option>
                                  <option value="60 Days">60 Days</option>
                                  <option value="90 Days">90 Days</option>
                                </StyledSelect>
                              </FormField>

                              <FormField label="Current CTC (₹ per annum)" name="currentCTC">
                                <StyledInput
                                  name="currentCTC"
                                  placeholder="e.g. ₹4,50,000"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>

                              <FormField label="Expected CTC (₹ per annum)" name="expectedCTC">
                                <StyledInput
                                  name="expectedCTC"
                                  placeholder="e.g. ₹7,00,000"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>
                            </div>
                          </div>

                          {/* 3. Links */}
                          <div>
                            <StepHeading number="3" label="Links & Portfolio" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <FormField label="LinkedIn Profile URL" name="linkedIn">
                                <StyledInput
                                  name="linkedIn"
                                  type="url"
                                  placeholder="https://linkedin.com/in/yourprofile"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>

                              <FormField label="Portfolio / Website URL" name="portfolio">
                                <StyledInput
                                  name="portfolio"
                                  type="url"
                                  placeholder="https://yourportfolio.com"
                                  errors={errors as Record<string, string>}
                                  touched={touched as Record<string, boolean>}
                                />
                              </FormField>
                            </div>
                          </div>

                          {/* 4. Resume */}
                          <div>
                            <StepHeading number="4" label="Resume Upload" />
                            <FormField label="Resume / CV" name="resume" required>
                              {values.resume ? (
                                <motion.div
                                  initial={{ opacity: 0, y: -4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="flex items-center justify-between px-5 py-4"
                                  style={{
                                    backgroundColor: RED_LIGHT,
                                    border: `1.5px solid ${RED_BORDER_MED}`,
                                    borderLeft: `4px solid ${RED}`,
                                  }}
                                >
                                  <div className="flex items-center gap-3">
                                    <FileText size={20} style={{ color: RED }} />
                                    <div>
                                      <p
                                        className="text-sm font-bold"
                                        style={{
                                          color: '#1C1C1C',
                                          fontFamily: "'Montserrat', sans-serif",
                                        }}
                                      >
                                        {(values.resume as File).name}
                                      </p>
                                      <p
                                        className="text-[11px]"
                                        style={{ color: 'rgba(28,28,28,0.45)' }}
                                      >
                                        {(
                                          (values.resume as File).size /
                                          1024 /
                                          1024
                                        ).toFixed(2)}{' '}
                                        MB
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setFieldValue('resume', null)}
                                    className="p-1.5 transition-all hover:scale-110"
                                    style={{
                                      backgroundColor: 'rgba(239,68,68,0.08)',
                                      border: '1px solid rgba(239,68,68,0.2)',
                                    }}
                                  >
                                    <X size={12} style={{ color: '#ef4444' }} />
                                  </button>
                                </motion.div>
                              ) : (
                                <div
                                  className="relative cursor-pointer transition-all duration-300"
                                  style={{
                                    backgroundColor: dragOver ? RED_LIGHT : '#fafafa',
                                    border: `2px dashed ${
                                      dragOver
                                        ? RED
                                        : touched.resume && errors.resume
                                        ? 'rgba(239,68,68,0.4)'
                                        : RED_BORDER
                                    }`,
                                  }}
                                  onDragOver={(e) => {
                                    e.preventDefault();
                                    setDragOver(true);
                                  }}
                                  onDragLeave={() => setDragOver(false)}
                                  onDrop={(e) => handleDrop(e, setFieldValue)}
                                  onClick={() => fileInputRef.current?.click()}
                                >
                                  <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                                    <div
                                      className="w-14 h-14 flex items-center justify-center mb-4"
                                      style={{
                                        backgroundColor: RED_LIGHT,
                                        border: `1px solid ${RED_BORDER}`,
                                      }}
                                    >
                                      <Upload size={22} style={{ color: RED }} />
                                    </div>
                                    <p
                                      className="text-sm font-bold mb-1.5"
                                      style={{
                                        color: '#1C1C1C',
                                        fontFamily: "'Montserrat', sans-serif",
                                      }}
                                    >
                                      Drop your resume here
                                    </p>
                                    <p
                                      className="text-xs mb-4"
                                      style={{ color: 'rgba(28,28,28,0.4)' }}
                                    >
                                      or{' '}
                                      <span
                                        style={{
                                          color: RED,
                                          textDecoration: 'underline',
                                        }}
                                      >
                                        click to browse
                                      </span>
                                    </p>
                                    <p
                                      className="text-[10px] uppercase tracking-widest"
                                      style={{
                                        color: 'rgba(28,28,28,0.3)',
                                        fontFamily: "'Montserrat', sans-serif",
                                      }}
                                    >
                                      PDF, DOC, DOCX · Max 5MB
                                    </p>
                                  </div>
                                  <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) setFieldValue('resume', file);
                                    }}
                                  />
                                </div>
                              )}
                            </FormField>
                          </div>

                          {/* 5. Cover Note */}
                          <div>
                            <StepHeading number="5" label="Cover Note" />
                            <FormField
                              label="Why should we hire you? (min 50 characters)"
                              name="coverLetter"
                              required
                            >
                              <div className="relative">
                                <Field
                                  as="textarea"
                                  name="coverLetter"
                                  rows={5}
                                  placeholder="Briefly describe your relevant experience, key skills, and why you want to join our team..."
                                  className="w-full px-4 py-3.5 text-sm outline-none placeholder:text-black/25 resize-none"
                                  style={getInputStyle(
                                    !!(touched.coverLetter && errors.coverLetter)
                                  )}
                                  onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                                    e.target.style.borderColor = RED;
                                    e.target.style.backgroundColor = '#fff';
                                    e.target.style.boxShadow = `0 0 0 3px ${RED_LIGHT}`;
                                  }}
                                  onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                                    e.target.style.borderColor =
                                      touched.coverLetter && errors.coverLetter
                                        ? 'rgba(239,68,68,0.5)'
                                        : 'rgba(28,28,28,0.1)';
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.backgroundColor = '#f8f8f8';
                                  }}
                                />
                                <div className="absolute bottom-3 right-3">
                                  <span
                                    className="text-[10px]"
                                    style={{
                                      color:
                                        values.coverLetter.length > 900
                                          ? '#ef4444'
                                          : 'rgba(28,28,28,0.28)',
                                    }}
                                  >
                                    {values.coverLetter.length}/1000
                                  </span>
                                </div>
                              </div>
                            </FormField>
                          </div>

                          {/* Agree + Submit */}
                          <div
                            className="space-y-6 pt-2"
                            style={{ borderTop: `1px solid ${RED_BORDER}` }}
                          >
                            <div>
                              <label className="flex items-start gap-3 cursor-pointer">
                                <div className="relative flex-shrink-0 mt-0.5">
                                  <Field
                                    type="checkbox"
                                    name="agreeToTerms"
                                    className="sr-only"
                                  />
                                  <div
                                    className="w-5 h-5 flex items-center justify-center transition-all duration-200"
                                    style={{
                                      backgroundColor: values.agreeToTerms
                                        ? RED
                                        : '#ffffff',
                                      border: `1.5px solid ${
                                        values.agreeToTerms
                                          ? RED
                                          : touched.agreeToTerms &&
                                            errors.agreeToTerms
                                          ? 'rgba(239,68,68,0.5)'
                                          : 'rgba(28,28,28,0.2)'
                                      }`,
                                    }}
                                    onClick={() =>
                                      setFieldValue(
                                        'agreeToTerms',
                                        !values.agreeToTerms
                                      )
                                    }
                                  >
                                    {values.agreeToTerms && (
                                      <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                      >
                                        <CheckCircle size={12} color="white" />
                                      </motion.div>
                                    )}
                                  </div>
                                </div>
                                <span
                                  className="text-xs leading-relaxed"
                                  style={{ color: 'rgba(28,28,28,0.5)' }}
                                >
                                  I confirm all information is accurate and
                                  consent to Infra Co. storing my data for
                                  recruitment purposes.{' '}
                                  <span
                                    style={{
                                      color: RED,
                                      textDecoration: 'underline',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    Privacy Policy
                                  </span>
                                </span>
                              </label>
                              <ErrorMessage name="agreeToTerms">
                                {(msg) => (
                                  <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[11px] mt-2 ml-8"
                                    style={{ color: '#ef4444' }}
                                  >
                                    ⚠ {msg}
                                  </motion.p>
                                )}
                              </ErrorMessage>
                            </div>

                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              className="group w-full flex items-center justify-center gap-3 py-5 text-xs font-black uppercase tracking-widest relative overflow-hidden disabled:opacity-50"
                              style={{
                                backgroundColor: RED,
                                color: '#ffffff',
                                fontFamily: "'Montserrat', sans-serif",
                                boxShadow: `0 4px 24px rgba(192,57,43,0.35)`,
                              }}
                              whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
                              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                              onMouseEnter={(e) => {
                                if (!isSubmitting)
                                  (e.currentTarget as HTMLElement).style.backgroundColor =
                                    RED_DARK;
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor =
                                  RED;
                              }}
                            >
                              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                              {isSubmitting ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  <span className="relative z-10">
                                    Submitting Application...
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="relative z-10">
                                    Submit Application
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                                  />
                                </>
                              )}
                            </motion.button>

                            <div className="flex flex-wrap items-center justify-center gap-6">
                              {[
                                { icon: Shield, text: 'Data is 100% secure' },
                                { icon: CheckCircle, text: 'Reviewed within 3 days' },
                                { icon: Mail, text: 'Confirmation email sent' },
                              ].map((t) => (
                                <div key={t.text} className="flex items-center gap-1.5">
                                  <t.icon size={10} style={{ color: RED }} />
                                  <span
                                    className="text-[10px]"
                                    style={{ color: 'rgba(28,28,28,0.38)' }}
                                  >
                                    {t.text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════ */}
      <section
        className="py-14"
        style={{
          borderTop: `1px solid ${RED_BORDER}`,
          backgroundColor: RED_LIGHT,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p
                className="text-[10px] uppercase tracking-[3px] mb-2"
                style={{
                  color: 'rgba(28,28,28,0.4)',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Can&apos;t find the right role?
              </p>
              <h3
                className="text-xl font-black"
                style={{
                  color: '#1C1C1C',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Send us a general application anytime.
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@tripurainfradevelopers.com"
                className="group flex items-center gap-3 px-6 py-3.5 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#ffffff',
                  border: `1.5px solid ${RED_BORDER_MED}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    RED_LIGHT;
                  (e.currentTarget as HTMLElement).style.borderColor = RED;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    '#ffffff';
                  (e.currentTarget as HTMLElement).style.borderColor =
                    RED_BORDER_MED;
                }}
              >
                <Mail size={14} style={{ color: RED }} />
                <span
                  className="text-xs font-bold"
                  style={{
                    color: '#1C1C1C',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  info@tripurainfradevelopers.com
                </span>
              </a>

              <a
                href="tel:+918790806677"
                className="group flex items-center gap-3 px-6 py-3.5 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: RED,
                  border: `1.5px solid ${RED}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    RED_DARK;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = RED;
                }}
              >
                <Phone size={14} color="white" />
                <span
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +91 87908 06677
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}