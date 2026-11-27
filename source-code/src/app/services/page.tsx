import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/shared/SiteNav';
import SiteFooter from '@/components/shared/SiteFooter';
import { AEV_CONTENT } from '@/lib/content/aev-content';

export const metadata: Metadata = {
  title: 'Services — AEV Studios · AI Automation & Growth Systems',
  description:
    'Explore our five core capabilities: AI Workflows, Growth OS, Web Experiences, CRM Infrastructure, and AI Agents.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const { services } = AEV_CONTENT;

  return (
    <div className="min-h-screen bg-[#fefae7] text-[#3b001b] flex flex-col font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#c0ecbf] text-[#144d18] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Capabilities & Solutions
        </span>
        <h1 className="font-['Oswald'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#3b001b]">
          Intelligent Solutions.<br />Built Around Your Business.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#3b001b]/70 max-w-2xl mx-auto leading-relaxed">
          We bring strategy, technology and automation together to create connected business systems that solve real operational challenges.
        </p>
      </section>

      {/* Services List */}
      <section className="py-12 px-6 max-w-6xl mx-auto w-full space-y-12 mb-24">
        {services.pillars.map((pillar) => (
          <div
            key={pillar.id}
            id={pillar.id}
            className="bg-white border-2 border-[#3b001b] rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#3b001b] transition hover:translate-x-1 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3b001b]/10 pb-6 mb-6">
              <span className="font-['Oswald'] text-5xl font-bold text-[#f15a24]">
                {pillar.number}
              </span>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#fefae7] text-[#3b001b] border border-[#3b001b]/20 px-3 py-1 rounded-full text-xs font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[#3b001b]">
              {pillar.name}
            </h3>
            <p className="mt-4 text-[#3b001b]/80 text-base sm:text-lg leading-relaxed max-w-3xl">
              {pillar.description}
            </p>

            <div className="mt-8 pt-6 flex items-center justify-between">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-['Oswald'] tracking-wide text-sm bg-[#3b001b] text-[#fefae7] px-6 py-3 rounded-full hover:bg-[#520025] transition"
              >
                Inquire About {pillar.name} →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
