import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Construction Services in Hyderabad | Tripura Infra Developers',
  description: 'Durable, safe, and custom industrial construction services by Tripura Infra Developers. Warehouses, factories, industrial sheds, and cold storage units in Hyderabad.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/industrial-construction',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
