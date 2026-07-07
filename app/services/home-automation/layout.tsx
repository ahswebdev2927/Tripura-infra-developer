import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Automation Services in Hyderabad | Tripura Infra Developers',
  description: 'Upgrade your living space with intelligent home automation in Hyderabad. Premium touch panels, automated curtains, voice integration, and high-security smart locks.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/home-automation',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
