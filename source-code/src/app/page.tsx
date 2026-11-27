import type { Metadata } from 'next';
import Script from 'next/script';
import Section0 from '@/components/home-section-0';

export const metadata: Metadata = {
  title: 'AEV Studios — Website & AI Automation Agency in Jagdalpur',
  alternates: { canonical: '/' },
  description:
    'AEV Studios designs, builds and integrates intelligent business systems that help companies automate operations and scale.',
};

export default function HomePage() {
  return (
    <>
      <Script id="scroll-reset" strategy="beforeInteractive">
        {`if('scrollRestoration' in history){history.scrollRestoration='manual';}if(!location.hash){window.scrollTo(0,0);}`}
      </Script>
      <Section0 />
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
