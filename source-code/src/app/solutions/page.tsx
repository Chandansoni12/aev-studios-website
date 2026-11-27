import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/shared/SiteNav';
import SiteFooter from '@/components/shared/SiteFooter';

export const metadata: Metadata = {
  alternates: { canonical: '/solutions' },
  title: 'Industry Solutions — AEV Studios',
  description:
    'Connected automation solutions for Real Estate, Hospitality, Coaching, and E-commerce businesses.',
};

const INDUSTRIES = [
  {
    title: 'Real Estate & Property',
    headline: 'Turn Property Enquiries Into Organized Opportunities.',
    problem:
      'Property businesses often receive enquiries from multiple channels. When those enquiries are not organized, follow-ups become inconsistent and opportunities can be missed.',
    solution:
      'AEV builds connected lead management systems that capture enquiries, organize customer information, route leads, and support timely automated follow-ups.',
    workflow: [
      { step: '01', title: 'Lead Capture', detail: 'Website · WhatsApp · Portals' },
      { step: '02', title: 'Lead Qualification', detail: 'Defined criteria & AI assistance' },
      { step: '03', title: 'CRM Management', detail: 'Organized records & pipeline' },
      { step: '04', title: 'Follow-up Automation', detail: 'Instant SMS & email reminders' },
      { step: '05', title: 'Performance Tracking', detail: 'Pipeline & agent reporting' },
    ],
  },
  {
    title: 'Hospitality & Dining',
    headline: 'Seamless Bookings, Guest Communication & Operations.',
    problem:
      'Reservation management across phones, booking apps, and walk-ins creates scheduling friction and delays guest responses.',
    solution:
      'Integrated reservation routing and instant AI guest concierge workflows that handle FAQs, dietary preferences, and confirmations.',
    workflow: [
      { step: '01', title: 'Omnichannel Inquiries', detail: 'Website · Google · Instagram' },
      { step: '02', title: 'Smart Booking Engine', detail: 'Real-time table/room sync' },
      { step: '03', title: 'Guest Concierge', detail: 'AI assistance for menus & FAQs' },
      { step: '04', title: 'Automated Reminders', detail: '24h prior confirmation notices' },
      { step: '05', title: 'Feedback Loop', detail: 'Post-visit reviews & loyalty sync' },
    ],
  },
  {
    title: 'Coaching & Education',
    headline: 'Scale Student Inquiries & Automated Learning Journeys.',
    problem:
      'Admissions teams spend hours answering repetitive course questions and manually managing student follow-ups.',
    solution:
      'Automated qualification funnels that guide prospective students from initial interest to enrollment with self-service discovery.',
    workflow: [
      { step: '01', title: 'Curriculum Discovery', detail: 'Interactive program selector' },
      { step: '02', title: 'Application Intake', detail: 'Validated applicant scoring' },
      { step: '03', title: 'Automated Nurture', detail: 'Personalized email sequences' },
      { step: '04', title: 'Calendar Scheduling', detail: 'Direct consultation booking' },
      { step: '05', title: 'Onboarding Sync', detail: 'LMS & student portal provisioning' },
    ],
  },
  {
    title: 'E-commerce & Retail',
    headline: 'Unified Order Workflows & Customer Support Intelligence.',
    problem:
      'High ticket support volumes, order status questions, and inventory discrepancies overwhelm lean operational teams.',
    solution:
      'Automated order tracking, intelligent ticket categorization, and post-purchase customer re-engagement pipelines.',
    workflow: [
      { step: '01', title: 'Order Events', detail: 'Shopify / Stripe webhook triggers' },
      { step: '02', title: 'Tracking Dispatch', detail: 'Real-time logistics notifications' },
      { step: '03', title: 'Support Bot', detail: 'Instant order status retrieval' },
      { step: '04', title: 'Inventory Sync', detail: 'Warehouse & multichannel balance' },
      { step: '05', title: 'Retention System', detail: 'Automated review & replenishment' },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#fefae7] text-[#3b001b] flex flex-col font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#f15a24]/10 text-[#f15a24] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Tailored Architectures
        </span>
        <h1 className="font-['Oswald'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#3b001b]">
          Different Businesses.<br />Connected Solutions.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#3b001b]/70 max-w-2xl mx-auto leading-relaxed">
          We don't simply list industries. We diagnose the operational friction unique to your sector and engineer systems to eliminate it.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto w-full space-y-16 mb-24">
        {INDUSTRIES.map((ind, i) => (
          <div
            key={i}
            className="bg-white border-2 border-[#3b001b] rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#3b001b]"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f15a24]">
              {ind.title}
            </span>
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[#3b001b] mt-2">
              {ind.headline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-sm sm:text-base leading-relaxed">
              <div className="bg-[#fefae7] p-6 rounded-2xl border border-[#3b001b]/15">
                <span className="font-['Oswald'] uppercase font-bold text-xs tracking-wider text-[#3b001b]/60 block mb-2">
                  The Problem
                </span>
                <p className="text-[#3b001b]/80">{ind.problem}</p>
              </div>
              <div className="bg-[#c0ecbf]/20 p-6 rounded-2xl border border-[#3b001b]/15">
                <span className="font-['Oswald'] uppercase font-bold text-xs tracking-wider text-[#144d18] block mb-2">
                  The AEV System
                </span>
                <p className="text-[#3b001b]/80">{ind.solution}</p>
              </div>
            </div>

            {/* Workflow steps */}
            <div className="border-t border-[#3b001b]/10 pt-6">
              <h4 className="font-['Oswald'] text-xs uppercase tracking-widest text-[#3b001b]/60 mb-4 font-bold">
                Automated System Architecture
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {ind.workflow.map((w, idx) => (
                  <div key={idx} className="bg-[#fefae7]/60 p-4 rounded-xl border border-[#3b001b]/10">
                    <span className="font-['Oswald'] text-lg font-bold text-[#f15a24] block">
                      {w.step}
                    </span>
                    <strong className="text-xs font-bold block text-[#3b001b] mt-1">{w.title}</strong>
                    <span className="text-[11px] text-[#3b001b]/60 block mt-0.5">{w.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-['Oswald'] tracking-wide text-sm bg-[#3b001b] text-[#fefae7] px-6 py-3 rounded-full hover:bg-[#520025] transition"
              >
                Deploy for {ind.title} →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
