import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AEV Studios — AI Automation & Growth Systems',
  description:
    'AEV Studios designs and builds intelligent growth systems, AI workflows, and digital infrastructure that move businesses forward.',
  metadataBase: new URL('https://aevstudios.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'AEV Studios — AI Automation & Growth Systems',
    description:
      'We don’t just build digital solutions. We engineer the systems that move businesses forward.',
    type: 'website',
    url: 'https://aevstudios.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEV Studios — AI Automation & Growth Systems',
    description:
      'We don’t just build digital solutions. We engineer the systems that move businesses forward.',
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
    <html lang="en-US" className="lenis">
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
      </head>
      <body>{children}</body>
    </html>
  );
}
