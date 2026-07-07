import React from 'react'
import Carrer from '@/Components/career'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Tripura Infra Developers | Join Our Team',
  description: 'Explore career and job opportunities with Tripura Infra Developers. Build a rewarding career in construction and infrastructure in Hyderabad. Apply today.',
  keywords: [
    'Careers at Tripura Infra Developers',
    'Construction jobs Hyderabad',
    'Civil engineer jobs Hyderabad',
    'Infrastructure job openings Hyderabad',
    'Join Tripura Infra Developers team'
  ],
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/career',
  }
}

const page = () => {
  return (
    <div><Carrer/></div>
  )
}

export default page