import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Start a Project with AEV Studios',
  description:
    'Talk to AEV Studios about a website, AI automation or CRM project. Based in Jagdalpur, Chhattisgarh. Call +91 82530-14500 or send a project enquiry.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
