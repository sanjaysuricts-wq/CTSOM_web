export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CTS Offshore and Marine Limited',
    url: 'https://www.ctsom.com',
    logo: 'https://www.ctsom.com/logos/cts-logo.png',
    description:
      'Global marine engineering company providing in-situ afloat asset integrity services to the offshore and marine industries worldwide.',
    foundingDate: '2004',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 99,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-20-7100-0000',
      contactType: 'customer service',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
    sameAs: [
      'https://www.linkedin.com/company/cts-offshore-marine',
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'Bulgaria' },
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Brazil' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marine Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generator Service & Mechanical Repairs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Steel & Pipe Fabrication & Installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Inspections & Surveys (NDT)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC EPC Solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Riding Teams & Manpower',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Spares & Equipment Supply',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema({
  name,
  city,
  country,
  telephone,
  email,
}: {
  name: string
  city: string
  country: string
  telephone: string
  email: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `CTS Offshore and Marine - ${city}`,
    parentOrganization: {
      '@type': 'Organization',
      name: 'CTS Offshore and Marine Limited',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: country,
    },
    telephone,
    email,
    url: 'https://www.ctsom.com',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
}: {
  name: string
  description: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'CTS Offshore and Marine Limited',
      url: 'https://www.ctsom.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
