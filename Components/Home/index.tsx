// 'use client';

// import Hero from '@/Components/Home/Hero';
// import Stats from '@/Components/Home/Stats';
// import ServicesSection from '@/Components/Home/ServicesSection';
// import ProjectsSection from '@/Components/Home/ProjectsSection';
// import WhyChooseUs from '@/Components/Home/WhyChooseUs';
// import ProcessSection from '@/Components/Home/ProcessSection';
// import Testimonials from '@/Components/Home/Testimonials';
// import CTABanner from '@/Components/Home/CTABanner';
// import ContactFormSection from '@/Components/Home/ContactFormSection';

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Stats />
//       {/* <ServicesSection />
//       <ProjectsSection />
//       <WhyChooseUs />
//       <ProcessSection />
//       <Testimonials />
//       <CTABanner />
//       <ContactFormSection /> */}
//     </>
//   );
// }


import Hero from '@/Components/Home/Hero'
import { Stats } from '@/Components/Home/Stats'
import { Welcome } from '@/Components/Home/Welcome'
import { Services } from '@/Components/Home/Services'
import { FeaturedProjects } from '@/Components/Home/FeaturedProjects'
import { WhyChooseUs } from '@/Components/Home/WhyChooseUs'
import { Process } from '@/Components/Home/Process'
import { Testimonials } from '@/Components/Home/Testimonials'
import { CtaBanner } from '@/Components/Home/CtaBanner'
import { ContactFormSection } from '@/Components/Home/ContactFormSection'
import Packages from '@/Components/services/package'
import FAQAccordion from '@/Components/ui/FAQAccordion'

const homeFAQs = [
  {
    question: "What services do Tripura Infra Developers offer in Hyderabad?",
    answer: "We provide end-to-end building services in Hyderabad, including residential construction (individual houses, luxury villas, and apartments), commercial construction (office buildings, complexes), and industrial construction (PEB warehouse sheds, factories). We also handle premium interior design, building renovations, and professional civil contracting services."
  },
  {
    question: "Where does Tripura Infra Developers construct in Hyderabad?",
    answer: "Based in Nagaram, we construct projects across all major areas of Hyderabad and Medchal-Malkajgiri districts. Our active project sites are located in Kompally, Uppal, Patancheru, Shamirpet, Ghatkesar, Alwal, Bolarum, Medchal, and surrounding Hyderabad Metropolitan Development Authority (HMDA) zones."
  },
  {
    question: "How much does residential house construction cost per square feet in Hyderabad?",
    answer: "Our residential house construction cost in Hyderabad starts from ₹1,790 per sq. ft. for basic packages and ranges up to ₹2,800+ per sq. ft. for premium finishes, depending on material selection, design complexity, and specific structural requirements. We offer 100% price transparency and a detailed estimate before beginning work."
  },
  {
    question: "Why should I choose Tripura Infra Developers over other building contractors in Hyderabad?",
    answer: "Tripura Infra Developers stands out for our 20+ years of local execution experience, absolute price transparency (no hidden costs), on-time delivery assurance, strict quality standards, and a committed in-house design and engineering team. We also offer a free initial site consultation to help you evaluate your design options."
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Welcome />
      <Services />
      <Packages />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CtaBanner />
      <FAQAccordion items={homeFAQs} title="Tripura Infra Developers - Home Page FAQs" />
      {/* <ContactFormSection /> */}
    </>
  )
}