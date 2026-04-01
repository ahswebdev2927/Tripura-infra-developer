// app/(routes)/services/bridal-makeup/page.tsx
'use client'

import { useMounted } from '@/app/hooks/useUI'
import { useServicePage } from '@/app/hooks/useServicePage'
import { bridalMakeup } from '@/app/lib/data/services-data'
import { ServiceCategoryNav } from '@/Components/services/ServiceCategoryNav'
import { ServicesHero } from '@/Components/services/ServicesHero'
import { PackageList } from '@/Components/services/PackageList'
import { ServiceInclusions } from '@/Components/services/ServiceInclusions'
import { ServiceFAQ } from '@/Components/services/ServiceFAQ'
import { ServiceCTA } from '@/Components/services/ServiceCTA'

export default function BridalMakeupPage() {
  const mounted = useMounted()
  const { serviceData, selectedService, setSelectedService } = useServicePage(bridalMakeup)

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
        title="Bridal Makeup Packages"
        onPackageSelect={setSelectedService}
      />
      
      <ServiceInclusions 
        benefits={[
          'Professional makeup artists',
          'Premium brands (MAC, Krylon, Lakme)',
          'Trial session included',
          'Hygienic applicators'
        ]}
        outdoorNote={serviceData.outdoorNote}
      />
      
      <ServiceFAQ category="bridal" />
      
      <ServiceCTA category="bridal" />
    </>
  )
}