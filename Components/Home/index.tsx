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


import { Hero } from '@/Components/Home/Hero'
import { Stats } from '@/Components/Home/Stats'
import { Services } from '@/Components/Home/Services'
import { FeaturedProjects } from '@/Components/Home/FeaturedProjects'
import { WhyChooseUs } from '@/Components/Home/WhyChooseUs'
import { Process } from '@/Components/Home/Process'
import { Testimonials } from '@/Components/Home/Testimonials'
import { CtaBanner } from '@/Components/Home/CtaBanner'
import { ContactFormSection } from '@/Components/Home/ContactFormSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CtaBanner />
      <ContactFormSection />
    </>
  )
}