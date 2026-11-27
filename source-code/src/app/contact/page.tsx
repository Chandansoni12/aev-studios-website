import type { Metadata } from 'next';
import ContactPageClient from '@/components/contact/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — AEV Studios · Start a Website or AI Automation Project',
  description:
    'Start a custom website, AI workflow, Growth OS, or CRM automation project with AEV Studios in Jagdalpur, Chhattisgarh. Call +91 82530-14500 or send an enquiry.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
