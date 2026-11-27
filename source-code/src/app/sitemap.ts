import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aevstudios.in';
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number; freq: 'weekly' | 'monthly' }> = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/services', priority: 0.9, freq: 'monthly' },
    { path: '/solutions', priority: 0.9, freq: 'monthly' },
    { path: '/contact', priority: 0.9, freq: 'monthly' },
    { path: '/work', priority: 0.8, freq: 'monthly' },
    { path: '/about', priority: 0.7, freq: 'monthly' },
    { path: '/process', priority: 0.6, freq: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
