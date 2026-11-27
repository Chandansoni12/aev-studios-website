export class SeoSchemaBuilder {
  private readonly baseUrl = 'https://aevstudios.com';
  private readonly brandName = 'AEV Studios';

  public buildGraph(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        this.buildLocalBusinessSchema(),
        this.buildWebsiteSchema(),
        this.buildFaqSchema(),
      ],
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
        '@type': 'Person',
        name: 'Chandan Soni',
        jobTitle: 'Founder & AI Systems Architect',
        sameAs: 'https://www.linkedin.com/in/chandan-soni-4917012b6/',
      },
      sameAs: [
        'https://www.linkedin.com/in/chandan-soni-4917012b6/',
        'https://www.instagram.com/aevstudios',
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

  private buildFaqSchema(): Record<string, unknown> {
    return {
      '@type': 'FAQPage',
      '@id': `${this.baseUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AEV Studios?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEV Studios is an AI growth systems and website agency based in Jagdalpur, Chhattisgarh, India, founded by Chandan Soni. It specializes in custom websites, AI workflows, Growth Operating Systems, and CRM automation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is AEV Studios located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEV Studios is located in Jagdalpur, Chhattisgarh, India, serving businesses in Jagdalpur, across India, and globally.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does AEV Studios offer as a website and automation agency in Jagdalpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEV Studios offers Custom Web Experiences (Next.js, React, SEO), AI Workflows & Automation, Growth Operating Systems, and CRM & Lead Infrastructure starting at ₹24,999.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact AEV Studios?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact AEV Studios by phone at +91 82530-14500, by email at aevstudio.mail9@gmail.com, or via the project enquiry form at aevstudios.com/contact.',
          },
        },
      ],
    };
  }
}
