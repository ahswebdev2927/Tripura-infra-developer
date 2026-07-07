import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Construction Services in Hyderabad | Tripura Infra Developers',
  description: 'Build modern and high-quality commercial spaces with Tripura Infra Developers. Offices, IT parks, retail shops, and commercial complexes constructed by expert builders in Hyderabad.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/commercial-construction',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
