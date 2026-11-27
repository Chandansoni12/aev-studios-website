import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SeoSchemaBuilder } from '@/lib/seo/SeoSchemaBuilder';

const seoGraph = new SeoSchemaBuilder().buildGraph();

export const metadata: Metadata = {
  title: {
    default: 'AEV Studios — Website & AI Automation Agency in Jagdalpur, India',
    template: '%s | AEV Studios',
  },
  description:
    'AEV Studios is a leading website agency and AI automation studio in Jagdalpur, Chhattisgarh, founded by Chandan Soni. We build custom websites, AI workflows, Growth OS, and CRM systems.',
  keywords: [
    'AEV Studios',
    'AEV Studio',
    'About AEV Studios',
    'agency in Jagdalpur',
    'website agency in Jagdalpur',
    'web design agency Jagdalpur',
    'digital agency Jagdalpur',
    'AI automation agency Jagdalpur',
    'website developer in Jagdalpur',
    'Chhattisgarh web agency',
    'Chandan Soni AEV Studios',
    'AI Growth Systems',
    'Custom Web Experiences',
    'CRM & Lead Infrastructure',
  ],
  authors: [{ name: 'Chandan Soni', url: 'https://www.linkedin.com/in/chandan-soni-4917012b6/' }],
  creator: 'AEV Studios',
  publisher: 'AEV Studios',
  metadataBase: new URL('https://www.aevstudios.in'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'AEV Studios — Website & AI Automation Agency in Jagdalpur',
    description:
      'We don’t just build digital solutions. We engineer custom websites, AI workflows, and growth systems that move businesses forward.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'AEV Studios',
    url: 'https://www.aevstudios.in',
    images: [{ url: '/images/aev-logo-dark.png', alt: 'AEV Studios Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEV Studios — Website & AI Automation Agency in Jagdalpur',
    description:
      'Custom websites, AI workflows, and CRM infrastructure by Chandan Soni — Jagdalpur, Chhattisgarh.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="lenis">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preload" as="video" href="/videos/AEV_Studios_final.mp4" type="video/mp4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Geist+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/framer-fonts.css" />
        <link rel="stylesheet" href="/framer.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoGraph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
