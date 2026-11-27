export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const HOMEPAGE_FAQS: readonly FaqItem[] = [
  {
    question: 'What is AEV Studios?',
    answer:
      'AEV Studios is an AI growth systems and website agency based in Jagdalpur, Chhattisgarh, India, founded by Chandan Soni. It specializes in custom Next.js and React websites, AI workflows, Growth Operating Systems, and CRM automation.',
  },
  {
    question: 'Where is AEV Studios located?',
    answer:
      'AEV Studios is located in Jagdalpur (494001), Chhattisgarh, India, serving businesses in Jagdalpur, across Chhattisgarh and India, as well as global clients.',
  },
  {
    question: 'What services does AEV Studios offer as a website and automation agency in Jagdalpur?',
    answer:
      'AEV Studios offers Custom Web Experiences (Next.js, React, technical SEO), AI Workflows & Automation (n8n, Make, API integrations), Growth Operating Systems, and CRM & Lead Infrastructure starting at ₹24,999.',
  },
  {
    question: 'How can I contact AEV Studios?',
    answer:
      'You can contact AEV Studios by phone at +91 82530-14500, by email at aevstudio.mail9@gmail.com, or via the project enquiry form at https://www.aevstudios.in/contact.',
  },
] as const;

export class SeoSchemaBuilder {
  private readonly baseUrl = 'https://www.aevstudios.in';
  private readonly brandName = 'AEV Studios';

  public buildGraph(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        this.buildLocalBusinessSchema(),
        this.buildPersonSchema(),
        this.buildWebsiteSchema(),
      ],
    };
  }

  public buildFaqSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${this.baseUrl}/#faq`,
      mainEntity: HOMEPAGE_FAQS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  private buildLocalBusinessSchema(): Record<string, unknown> {
    return {
      '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
      '@id': `${this.baseUrl}/#organization`,
      name: this.brandName,
      alternateName: ['AEV Studio', 'AEV Studios Jagdalpur'],
      url: this.baseUrl,
      logo: `${this.baseUrl}/images/aev-logo-dark.png`,
      image: `${this.baseUrl}/images/chandan-founder.jpg`,
      description:
        'AEV Studios is a premier website agency and AI automation studio in Jagdalpur, Chhattisgarh, India, founded by Chandan Soni. We design and build custom websites, AI workflows, Growth Operating Systems, and CRM infrastructure.',
      telephone: '+91-82530-14500',
      email: 'aevstudio.mail9@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jagdalpur',
        addressRegion: 'Chhattisgarh',
        postalCode: '494001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0748,
        longitude: 82.0085,
      },
      areaServed: [
        { '@type': 'City', name: 'Jagdalpur' },
        { '@type': 'State', name: 'Chhattisgarh' },
        { '@type': 'Country', name: 'India' },
      ],
      founder: {
        '@id': `${this.baseUrl}/#founder`,
      },
      sameAs: [
        'https://www.linkedin.com/in/chandan-soni-4917012b6/',
        'https://github.com/Chandansoni12',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AEV Studios Services & Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Launch — Custom Web Experiences',
              description: 'High-converting websites, Next.js & React apps, and technical SEO.',
            },
            price: '24999',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automate — AI Workflows & CRM Infrastructure',
              description: 'AI workflows, n8n/Make automation, and automated lead routing.',
            },
            price: '49999',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Scale — Growth Operating Systems',
              description: 'Connected Growth OS, AI agents, and executive dashboards.',
            },
            price: '99999',
            priceCurrency: 'INR',
          },
        ],
      },
    };
  }

  private buildPersonSchema(): Record<string, unknown> {
    return {
      '@type': 'Person',
      '@id': `${this.baseUrl}/#founder`,
      name: 'Chandan Soni',
      jobTitle: 'Founder & AI Systems Architect',
      worksFor: {
        '@id': `${this.baseUrl}/#organization`,
      },
      url: `${this.baseUrl}/about`,
      image: `${this.baseUrl}/images/chandan-founder.jpg`,
      sameAs: [
        'https://www.linkedin.com/in/chandan-soni-4917012b6/',
        'https://github.com/Chandansoni12',
      ],
    };
  }

  private buildWebsiteSchema(): Record<string, unknown> {
    return {
      '@type': 'WebSite',
      '@id': `${this.baseUrl}/#website`,
      url: this.baseUrl,
      name: `${this.brandName} — Website & AI Automation Agency in Jagdalpur`,
      publisher: { '@id': `${this.baseUrl}/#organization` },
      inLanguage: 'en-IN',
    };
  }
}
