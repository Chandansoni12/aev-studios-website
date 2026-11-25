import type { Metadata } from 'next';

import Section0 from '@/components/404-section-0';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFoundPage() {
  return (
    <>
      <Section0 />

    </>
  );
}
