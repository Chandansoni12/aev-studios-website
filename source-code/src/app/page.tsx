import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Section0 from '@/components/home-section-0';
import { HOMEPAGE_FAQS, SeoSchemaBuilder } from '@/lib/seo/SeoSchemaBuilder';

const faqSchema = new SeoSchemaBuilder().buildFaqSchema();

const EXPLORE_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Industry Solutions' },
  { href: '/work', label: 'Work & Prototypes' },
  { href: '/process', label: 'Our Process' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
] as const;

export const metadata: Metadata = {
  title: 'AEV Studios — Website & AI Automation Agency in Jagdalpur',
  description:
    'AEV Studios designs, builds and integrates intelligent business systems that help companies automate operations and scale. Website design & AI automation agency in Jagdalpur, India.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Script id="scroll-reset" strategy="beforeInteractive">
        {`if('scrollRestoration' in history){history.scrollRestoration='manual';}if(!location.hash){window.scrollTo(0,0);}`}
      </Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Section0 />

      {/* AEO Summary, Visible FAQ & Internal Page Links */}
      <section
        aria-label="About AEV Studios & Frequently Asked Questions"
        className="bg-[#fefae7] text-[#3b001b] border-t border-[#3b001b]/15 px-6 py-16"
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="bg-white/80 border-2 border-[#3b001b]/15 rounded-3xl p-6 sm:p-10 space-y-4">
            <span className="inline-block bg-[#c0ecbf] text-[#144d18] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Jagdalpur · Chhattisgarh · India
            </span>
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#3b001b]">
              AEV Studios — Website &amp; AI Automation Agency in Jagdalpur
            </h2>
            <p className="text-sm sm:text-base text-[#3b001b]/80 leading-relaxed">
              Founded by Chandan Soni in Jagdalpur (494001), Chhattisgarh, AEV Studios builds
              custom Next.js websites, AI workflows (n8n, Make), Growth Operating Systems, and
              automated CRM &amp; lead infrastructure for ambitious businesses across India and globally.
            </p>
            <nav aria-label="Explore AEV Studios" className="pt-2 flex flex-wrap gap-2.5">
              {EXPLORE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[#3b001b]/25 bg-[#fefae7] text-xs font-['Oswald'] font-bold uppercase tracking-wider text-[#3b001b] hover:bg-[#3b001b] hover:text-[#fefae7] transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#3b001b]">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HOMEPAGE_FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="bg-white/70 border border-[#3b001b]/15 rounded-2xl p-5 space-y-2"
                >
                  <h4 className="font-['Oswald'] text-lg font-bold text-[#3b001b]">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-[#3b001b]/80 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Script id="framer-init" src="/framer-init.js" strategy="afterInteractive" />
      <Script
        id="framer-main-bundle"
        type="module"
        src="/assets/framerusercontent.com/sites/2ahsPHtXbFg9KR4CjZFu7u/script_main.Cn_PMwWs.mjs"
        strategy="afterInteractive"
      />
    </>
  );
}
