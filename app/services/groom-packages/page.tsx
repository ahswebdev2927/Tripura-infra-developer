// app/(routes)/services/groom-packages/page.tsx
'use client'

import { useMounted } from '@/app/hooks/useUI'
import { useServicePage } from '@/app/hooks/useServicePage'
import { groomPackages } from '@/app/lib/data/services-data'
import { ServiceCategoryNav } from '@/Components/services/ServiceCategoryNav'
import { ServicesHero } from '@/Components/services/ServicesHero'
import { PackageList } from '@/Components/services/PackageList'
import { ServiceInclusions } from '@/Components/services/ServiceInclusions'
import { ServiceFAQ } from '@/Components/services/ServiceFAQ'
import { ServiceCTA } from '@/Components/services/ServiceCTA'

export default function GroomPackagesPage() {
  const mounted = useMounted()
  const { serviceData, selectedService, setSelectedService } = useServicePage(groomPackages)

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
        title="Groom Packages"
        onPackageSelect={setSelectedService}
      />
      
      <ServiceInclusions 
        benefits={['Premium products', 'Expert team', 'Personalized service', 'Hygienic environment']}
      />
      
      <ServiceFAQ category="groom" />
      
      <ServiceCTA category="groom" />
    </>
  )
}