import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Villa Construction in Hyderabad | Tripura Infra Developers',
  description: 'Design and build your dream custom luxury villa in Hyderabad. Premium finishes, modern architecture, and elegant designs by Tripura Infra Developers.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/luxury-villas',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
