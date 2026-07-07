import React from 'react'
import Projects from '@/Components/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Construction Projects in Hyderabad | Tripura Infra',
  description: "Browse Tripura Infra Developers' portfolio of 100+ completed residential, commercial & industrial construction projects across Hyderabad. Real work. Real results.",
  keywords: [
    'Construction projects Hyderabad portfolio',
    'Completed projects construction company Hyderabad',
    'Villa construction projects Hyderabad',
    'Industrial projects Hyderabad',
    'Warehouse construction projects near Hyderabad',
    'Commercial building portfolio Hyderabad',
    'Residential construction showcase Hyderabad',
    'Best builders portfolio Hyderabad',
    'Construction case studies Hyderabad',
    'Real estate projects Medchal Hyderabad'
  ],
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/projects',
  }
}

const page = () => {
  return (
    <div><Projects/></div>
  )
}

export default page