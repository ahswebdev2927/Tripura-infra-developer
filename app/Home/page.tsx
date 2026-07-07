import React from 'react'
import Home from '@/Components/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Construction Company in Hyderabad | Tripura Infra Developers',
  description: "Tripura Infra Developers – Hyderabad's trusted builders for residential, commercial & industrial construction. 20+ years, 100+ projects. Call for free consultation.",
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/Home',
  }
}

const page = () => {
  return (
    <div>
        <Home/>
    </div>
  )
}

export default page