import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Renovation & Extension Services in Hyderabad | Tripura Infra',
  description: 'Transform and upgrade your spaces with professional home renovation, remodeling, and extension solutions in Hyderabad. Trusted services by Tripura Infra Developers.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/renovation',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
