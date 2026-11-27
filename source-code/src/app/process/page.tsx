import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/shared/SiteNav';
import SiteFooter from '@/components/shared/SiteFooter';

export const metadata: Metadata = {
  alternates: { canonical: '/process' },
  title: 'Our Process — AEV Studios · Delivery Framework',
  description:
    'From business challenges to intelligent solutions. Explore AEV Studios six-stage engineering delivery process.',
};

const STAGES = [
  {
    number: '01',
    name: 'Discover',
    summary: 'Understand business goals, existing systems, requirements and constraints.',
    deliverables: ['Discovery audit', 'Tool stack assessment', 'Initial constraint mapping'],
  },
  {
    number: '02',
    name: 'Diagnose',
    summary: 'Identify bottlenecks, repetitive operations and opportunities for automated leverage.',
    deliverables: ['Operational bottleneck map', 'Automation ROI calculation', 'System dependency tree'],
  },
  {
    number: '03',
    name: 'Architect',
    summary: 'Define the solution architecture, integrations, data workflows and technical stack.',
    deliverables: ['Workflow blueprints', 'Data model schema', 'Security & API specs'],
  },
  {
    number: '04',
    name: 'Develop',
    summary: 'Design, build, integrate and rigorously test the customized systems.',
    deliverables: ['Production code & web app', 'n8n workflow instances', 'AI agent prompts & tools'],
  },
  {
    number: '05',
    name: 'Deploy',
    summary: 'Launch, document, train your team, and hand over the fully operational ecosystem.',
    deliverables: ['Live rollout', 'Loom training video walkthroughs', 'SOP documentation'],
  },
  {
    number: '06',
    name: 'Optimize',
    summary: 'Monitor reliability, improve workflows, and support future system evolution.',
    deliverables: ['Performance monitoring', 'Failure alert webhooks', 'Ongoing feature scaling'],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#fefae7] text-[#3b001b] flex flex-col font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#f15a24]/10 text-[#f15a24] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Structured Execution
        </span>
        <h1 className="font-['Oswald'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#3b001b]">
          From Business Challenges<br />To Intelligent Solutions.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#3b001b]/70 max-w-2xl mx-auto leading-relaxed">
          We use a disciplined, six-stage delivery model that ensures every workflow, integration, and platform is built for durability and measurable ROI.
        </p>
      </section>

      {/* Process Stages */}
      <section className="py-12 px-6 max-w-5xl mx-auto w-full space-y-6 mb-24">
        {STAGES.map((stg, i) => (
          <div
            key={i}
            className="bg-white border-2 border-[#3b001b] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#3b001b] flex flex-col sm:flex-row gap-6 sm:items-center justify-between"
          >
            <div className="sm:w-1/3">
              <span className="font-['Oswald'] text-5xl font-bold text-[#f15a24]">
                {stg.number}
              </span>
              <h2 className="font-['Oswald'] text-3xl font-bold uppercase tracking-wide text-[#3b001b] mt-1">
                {stg.name}
              </h2>
            </div>

            <div className="sm:w-2/3">
              <p className="text-base text-[#3b001b]/80 leading-relaxed mb-4">
                {stg.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {stg.deliverables.map((d, idx) => (
                  <span
                    key={idx}
                    className="bg-[#fefae7] text-[#3b001b] text-xs px-3 py-1 rounded-full font-mono border border-[#3b001b]/15"
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-['Oswald'] tracking-wide text-sm bg-[#3b001b] text-[#fefae7] px-8 py-4 rounded-full hover:bg-[#520025] transition"
          >
            Start Stage 01: Discover Your System →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
