import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Construction Services in Hyderabad | Tripura Infra Developers',
  description: 'Construct your dream home with Tripura Infra Developers in Hyderabad. High-quality construction, transparent estimates, 25 years structural warranty, and hassle-free handover.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/residential-construction',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
