// app/(routes)/services/hair/page.tsx
'use client'

import { useMounted } from '@/app/hooks/useUI'
import { useServicePage } from '@/app/hooks/useServicePage'
import { hairServices } from '@/app/lib/data/services-data'
import { ServiceCategoryNav } from '@/Components/services/ServiceCategoryNav'
import { ServicesHero } from '@/Components/services/ServicesHero'
import { ServiceList } from '@/Components/services/ServiceList'
import { ServiceInclusions } from '@/Components/services/ServiceInclusions'
import { ServiceFAQ } from '@/Components/services/ServiceFAQ'
import { ServiceCTA } from '@/Components/services/ServiceCTA'

export default function HairServicesPage() {
  const mounted = useMounted()
  const { serviceData, selectedService, setSelectedService } = useServicePage(hairServices)

  if (!mounted) return null

  return (
    <>
      <ServicesHero 
        title={serviceData.name}
        description={serviceData.description}
        longDescription={serviceData.longDescription}
        icon={serviceData.icon}
      />
      
      <ServiceCategoryNav />
      
      <ServiceList 
        services={serviceData.services}
        title="Our Hair Services"
        onServiceSelect={setSelectedService}
      />
      
      <ServiceInclusions 
        benefits={serviceData.benefits}
      />
      
      <ServiceFAQ category="hair" />
      
      <ServiceCTA category="hair" />
    </>
  )
}