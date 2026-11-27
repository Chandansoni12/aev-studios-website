import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.aevstudios.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: 'weekly' | 'monthly';
  }> = [
    { path: '',           priority: 1.0, changeFrequency: 'weekly'  },
    { path: '/services',  priority: 0.9, changeFrequency: 'monthly' },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact',   priority: 0.9, changeFrequency: 'monthly' },
    { path: '/work',      priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about',     priority: 0.7, changeFrequency: 'monthly' },
    { path: '/process',   priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
