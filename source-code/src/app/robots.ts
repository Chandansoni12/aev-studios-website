import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Applebot-Extended',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.aevstudios.in/sitemap.xml',
    host: 'https://www.aevstudios.in',
  };
}
