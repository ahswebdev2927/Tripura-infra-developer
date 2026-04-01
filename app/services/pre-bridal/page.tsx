// app/(routes)/services/pre-bridal/page.tsx
'use client'

import { useMounted } from '@/app/hooks/useUI'
import { useServicePage } from '@/app/hooks/useServicePage'
import { preBridalPackages } from '@/app/lib/data/services-data'
import { ServiceCategoryNav } from '@/Components/services/ServiceCategoryNav'
import { ServicesHero } from '@/Components/services/ServicesHero'
import { PackageList } from '@/Components/services/PackageList'
import { ServiceInclusions } from '@/Components/services/ServiceInclusions'
import { ServiceFAQ } from '@/Components/services/ServiceFAQ'
import { ServiceCTA } from '@/Components/services/ServiceCTA'

export default function PreBridalPackagesPage() {
  const mounted = useMounted()
  const { serviceData, selectedService, setSelectedService } = useServicePage(preBridalPackages)

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
      
      <PackageList 
        packages={serviceData.packages}
        title="Pre-Bridal Packages"
        onPackageSelect={setSelectedService}
      />
      
      <ServiceInclusions 
        benefits={[
          'Complete pre-wedding preparation',
          'Expert team of specialists',
          'Flexible scheduling',
          'All services in one package'
        ]}
        outdoorNote={serviceData.outdoorNote}
      />
      
      <ServiceFAQ category="pre-bridal" />
      
      <ServiceCTA category="pre-bridal" />
    </>
  )
}