import React from 'react'
import CompanyProfile from '../../Components/company-profile/index'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Profile | Tripura Infra Developers',
  description: "Official company profile of Tripura Infra Developers. An independent infrastructure development company established in 2024 under the proprietorship of Ms. Swapna Vendi.",
  keywords: [
    'Tripura Infra Developers Profile',
    'Company Profile',
    'Infrastructure Development Company',
    'Ms. Swapna Vendi',
    'Construction company Hyderabad',
  ],
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/company-profile',
  }
}

const page = () => {
  return (
    <div>
        <CompanyProfile/>
    </div>
  )
}

export default page
