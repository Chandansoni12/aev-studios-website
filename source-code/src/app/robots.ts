import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.aevstudios.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Search + AI/LLM crawlers explicitly allowed so pages can be
        // indexed and cited in AI Overviews, ChatGPT, Perplexity, Claude.
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
