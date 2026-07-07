import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Project Management Services in Hyderabad | Tripura Infra',
  description: 'End-to-end project management services for seamless construction. Quality planning, government approvals, vendor management, and strict inspection by Tripura Infra Developers.',
  alternates: {
    canonical: 'https://tripurainfradevelopers.com/services/project-management',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
