import React from 'react'
import About from '../../Components/about/index'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Tripura Infra Developers | Infrastructure Development Company',
  description: "Tripura Infra Developers is an independent infrastructure development company established in 2024 under the proprietorship of Ms. Swapna Vendi. Leading construction company in Hyderabad.",
  keywords: [
    'Tripura Infra Developers',
    'Infrastructure Development Company',
    'Ms. Swapna Vendi',
    'Construction company Hyderabad',
    'Independent construction firm',
  ],
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/about-us',
  }
}

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tripura Infra Developers",
    "url": "https://tripurainfradevelopers.com",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Ms. Swapna Vendi"
    },
    "industry": "Infrastructure Development and Construction",
    "description": "Tripura Infra Developers is an independent infrastructure development company established in 2024 under the proprietorship of Ms. Swapna Vendi."
  };

  return (
    <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <About/>
    </div>
  )
}

export default page