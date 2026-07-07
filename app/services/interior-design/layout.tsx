import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Services in Hyderabad | Tripura Infra Developers',
  description: 'Elevate your living or working space with professional interior designers at Tripura Infra Developers. Modern residential and commercial interior design services in Hyderabad.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/interior-design',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
