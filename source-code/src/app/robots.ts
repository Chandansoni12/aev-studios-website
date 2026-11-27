import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['Googlebot', 'GPTBot', 'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://aevstudios.com/sitemap.xml',
  };
}
