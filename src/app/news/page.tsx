import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
// import NewsCard from '@/components/shared/NewsCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `News & Insights | ${COMPANY.shortName}`,
  description:
    'Latest news, industry insights, and technical articles from CTS Offshore and Marine. Stay informed about offshore and marine engineering developments.',
}

const NEWS_ARTICLES = [
  {
    slug: 'cts-expands-operations-to-brazil',
    title: 'CTS Expands Operations to Brazil',
    excerpt:
      'CTS Offshore and Marine has officially opened its new office in Rio de Janeiro, Brazil, strengthening our presence in one of the world\'s most dynamic offshore energy markets. This expansion enables us to provide faster response times and dedicated local support to clients operating in the Santos Basin and beyond.',
    category: 'Company News',
    date: '2024-01-15',
  },
  {
    slug: 'future-of-offshore-wind-vessel-maintenance',
    title: 'The Future of Offshore Wind Vessel Maintenance',
    excerpt:
      'As the offshore wind sector continues its rapid growth, vessel maintenance strategies are evolving to meet new challenges. From SOVs to CTVs, we explore the emerging trends in maintenance planning, predictive analytics, and the role of skilled riding teams in keeping the fleet operational.',
    category: 'Industry News',
    date: '2024-01-10',
  },
  {
    slug: 'understanding-ndt-inspection-requirements-fpso',
    title: 'Understanding NDT Inspection Requirements for FPSO Vessels',
    excerpt:
      'Non-destructive testing is a critical component of FPSO asset integrity management. This article examines the key NDT inspection requirements, from ultrasonic thickness measurement to magnetic particle inspection, and explains how operators can develop comprehensive inspection programmes that meet class society requirements.',
    category: 'Technical Articles',
    date: '2024-01-05',
  },
  {
    slug: 'cts-achieves-iso-45001-recertification',
    title: 'CTS Achieves ISO 45001:2018 Recertification',
    excerpt:
      'We are proud to announce the successful recertification of our ISO 45001:2018 Occupational Health and Safety Management System. This achievement reflects our unwavering commitment to maintaining the highest safety standards across all our global operations and project sites.',
    category: 'Company News',
    date: '2023-12-20',
  },
  {
    slug: 'caterpillar-marine-engine-overhaul-best-practices',
    title: 'Caterpillar Marine Engine Overhaul Best Practices',
    excerpt:
      'Caterpillar marine engines are the workhorses of the offshore and marine industry. In this technical guide, we share best practices for planning and executing engine overhauls, covering everything from pre-overhaul inspections and parts procurement to testing and recommissioning procedures.',
    category: 'Technical Articles',
    date: '2023-12-15',
  },
  {
    slug: 'renewable-energy-sector-growth-marine-services',
    title: 'Renewable Energy Sector Growth and Marine Services',
    excerpt:
      'The renewable energy sector is creating significant demand for marine support services. We examine how the growth of offshore wind farms is reshaping the marine services landscape and what this means for vessel operators, maintenance providers, and skilled maritime professionals.',
    category: 'Industry News',
    date: '2023-12-10',
  },
]

const CATEGORIES = ['All', 'Company News', 'Industry News', 'Technical Articles']

export default function NewsPage() {
  return (
    <>
      <Hero
        variant="page"
        title="News & Insights"
        subtitle="Latest updates from CTS Offshore and Marine"
        breadcrumbs={[
          { label: 'News & Insights', href: '/news' },
        ]}
      />

      {/* Articles Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Latest Articles"
            subtitle="Stay Informed"
            description="News, insights, and technical knowledge from our team of offshore and marine engineering experts."
          />

          {/* Category Filter Pills */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={
                  category === 'All'
                    ? 'rounded-full bg-primary px-5 py-2 font-heading text-sm font-semibold text-white transition-all duration-200'
                    : 'rounded-full border border-neutral-300 bg-white px-5 py-2 font-heading text-sm font-semibold text-primary transition-all duration-200 hover:border-primary hover:bg-primary-100'
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ARTICLES.map((article) => (
              <NewsCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have a Story or Enquiry?"
        description="Whether you have a media enquiry, want to discuss a project, or would like to learn more about our services, our team is here to help."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  )
}
