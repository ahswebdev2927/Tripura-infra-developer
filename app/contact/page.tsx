import React from 'react'
import Contact from'../../Components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Tripura Infra Developers | Hyderabad Builders',
  description: "Get in touch with Tripura Infra Developers in Hyderabad for residential, commercial or industrial construction. Call +91 87908 06677 for a free site consultation.",
  keywords: [
    'Contact construction company Hyderabad',
    'Construction company phone number Hyderabad',
    'Construction company near me Nagaram Hyderabad',
    'Builders contact Medchal Malkajgiri Hyderabad',
    'Free construction consultation Hyderabad',
    'Site visit construction Hyderabad',
    'Best builders contact Hyderabad',
    'Construction company address Hyderabad',
    'Get construction quote Hyderabad',
    'Building contractor enquiry Hyderabad'
  ],
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/contact',
  }
}

const page = () => {
  return (
    <div>
        <Contact/>
    </div>
  )
}

export default page


