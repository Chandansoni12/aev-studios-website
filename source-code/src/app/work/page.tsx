import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/shared/SiteNav';
import SiteFooter from '@/components/shared/SiteFooter';
import { AEV_CONTENT } from '@/lib/content/aev-content';

export const metadata: Metadata = {
  title: 'Work & Prototypes — AEV Studios',
  description:
    'Explore AEV Studios showcased prototypes and digital growth systems: Intelligent Lead Engine, Web Experiences, Growth OS, and AI Operations Assistant.',
};

export default function WorkPage() {
  const { portfolio } = AEV_CONTENT;

  return (
    <div className="min-h-screen bg-[#fefae7] text-[#3b001b] flex flex-col font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#dccbfa] text-[#4b1d7d] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Showcases & Prototypes
        </span>
        <h1 className="font-['Oswald'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#3b001b]">
          Ideas Turned Into<br />Intelligent Systems.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#3b001b]/70 max-w-2xl mx-auto leading-relaxed">
          {portfolio.description}
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {portfolio.projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white border-2 border-[#3b001b] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#3b001b] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#3b001b]/10 pb-4 mb-6">
                <span className="font-['Oswald'] text-4xl font-bold text-[#f15a24]">
                  {proj.number}
                </span>
                <span className="bg-[#fefae7] text-[#3b001b] text-xs px-3 py-1 rounded-full font-mono font-semibold border border-[#3b001b]/20">
                  {proj.category}
                </span>
              </div>

              <h2 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#3b001b]">
                {proj.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#3b001b]/75 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3b001b]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#3b001b]/60">
                {proj.stack}
              </span>
              <Link
                href="/contact"
                className="font-['Oswald'] text-sm tracking-wider uppercase text-[#3b001b] hover:text-[#f15a24] font-bold flex items-center gap-1 transition"
              >
                Request Architecture ↗
              </Link>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
