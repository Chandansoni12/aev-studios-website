import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/shared/SiteNav';
import SiteFooter from '@/components/shared/SiteFooter';
import { AEV_CONTENT } from '@/lib/content/aev-content';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About — AEV Studios · Intelligent Business Systems',
  description:
    'We believe better systems build better businesses. Learn about AEV Studios mission, team, and systems-first philosophy.',
};

export default function AboutPage() {
  const { team, philosophy } = AEV_CONTENT;

  return (
    <div className="min-h-screen bg-[#fefae7] text-[#3b001b] flex flex-col font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#c0ecbf] text-[#144d18] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Our Story & Approach
        </span>
        <h1 className="font-['Oswald'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#3b001b]">
          We Believe Better Systems<br />Build Better Businesses.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#3b001b]/70 max-w-3xl mx-auto leading-relaxed">
          AEV Studios was built around a simple idea: technology should create meaningful improvements in the way businesses operate.
        </p>
      </section>

      {/* Philosophy Card */}
      <section className="py-8 px-6 max-w-4xl mx-auto w-full mb-16">
        <div className="bg-white border-2 border-[#3b001b] rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#3b001b] space-y-4 text-base sm:text-lg leading-relaxed text-[#3b001b]/80">
          <h2 className="font-['Oswald'] text-3xl font-bold uppercase tracking-wide text-[#3b001b] mb-4">
            Systems Thinking in Action
          </h2>
          {philosophy.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="pt-4 flex flex-wrap gap-2">
            {philosophy.ecosystem.map((eco, i) => (
              <span
                key={i}
                className="bg-[#c0ecbf]/30 text-[#144d18] px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold"
              >
                ● {eco}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto w-full mb-24">
        <div className="text-center mb-12">
          <h2 className="font-['Oswald'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#3b001b]">
            {team.heading}
          </h2>
          <p className="mt-3 text-[#3b001b]/70 max-w-2xl mx-auto">{team.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member, i) => (
            <div
              key={i}
              className="bg-white border-2 border-[#3b001b] rounded-2xl p-6 shadow-[4px_4px_0px_#3b001b]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#dccbfa] flex items-center justify-center font-['Oswald'] text-xl font-bold text-[#4b1d7d] mb-4">
                0{i + 1}
              </div>
              <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wide text-[#3b001b]">
                {member.role}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3b001b]/70 leading-relaxed">
                {member.responsibility}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-['Oswald'] tracking-wide text-sm bg-[#3b001b] text-[#fefae7] px-8 py-4 rounded-full hover:bg-[#520025] transition"
          >
            Start a Conversation With AEV →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
