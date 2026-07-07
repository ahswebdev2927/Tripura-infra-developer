import React from 'react'
import Services from '../../Components/services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Services in Hyderabad | Tripura Infra Devs',
  description: "Explore Tripura Infra's full range of construction services in Hyderabad – residential, commercial, industrial, interior design, renovation & project management.",
  keywords: [
    'Residential construction services Hyderabad',
    'Commercial construction company Hyderabad',
    'Industrial shed construction Hyderabad',
    'Warehouse construction Hyderabad',
    'Interior design services Hyderabad',
    'Home renovation Hyderabad',
    'Building renovation contractors Hyderabad',
    'Project management construction Hyderabad',
    'Villa construction company Hyderabad',
    'Office construction Hyderabad'
  ],
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services',
  }
}

const page = () => {
  return (
    <div>
        <Services/>
    </div>
  )
}

export default page