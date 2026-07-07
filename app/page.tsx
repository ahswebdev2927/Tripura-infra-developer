import React from 'react'
import Home from '@/Components/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Construction Company in Hyderabad | Tripura Infra Developers',
  description: "Tripura Infra Developers – Hyderabad's trusted builders for residential, commercial & industrial construction. 20+ years, 100+ projects. Call for free consultation.",
  keywords: [
    'Best construction company in Hyderabad',
    'Construction company near me Hyderabad',
    'Residential builders in Hyderabad',
    'Commercial construction Hyderabad',
    'Industrial construction company Hyderabad',
    'Best builders in Hyderabad for villa',
    'Building contractors near me Hyderabad',
    'Real estate construction company Hyderabad',
    'Top construction company Nagaram Hyderabad',
    'House construction services Hyderabad'
  ],
  verification: {
    google: 'gabvMASfnl4xrX1rn-i_8JEoCCCY-4fpcayqnv3bak0',
  },
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/',
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
      <Home />
    </div>
  )
}

export default page