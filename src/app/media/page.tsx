import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY, PAGE_BANNERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Media | ${COMPANY.shortName}`,
  description: 'Latest news, updates, and media resources from CTS Offshore and Marine. Stay informed about our projects, industry insights, and company developments.',
}

const newsItems = [
  {
    date: '2025-12-15',
    title: 'CTS Offshore Expands Operations in Southeast Asia',
    summary: 'New project contracts in Singapore and Indonesia mark continued growth in the Asia Pacific region.',
    category: 'Company News',
  },
  {
    date: '2025-11-20',
    title: 'Wind Turbine Maintenance Programme Completed Ahead of Schedule',
    summary: 'Major offshore wind farm maintenance campaign delivered two weeks ahead of schedule with zero incidents.',
    category: 'Project Update',
  },
  {
    date: '2025-10-05',
    title: 'ISO Recertification Achieved Across All Standards',
    summary: 'CTS Offshore successfully recertified to ISO 9001, ISO 14001, and ISO 45001, reaffirming our commitment to quality, environment, and safety.',
    category: 'Certification',
  },
  {
    date: '2025-09-12',
    title: 'Decarbonisation Solutions: Supporting the Energy Transition',
    summary: 'CTS Offshore invests in new green technology capabilities to support vessel owners in reducing their carbon footprint.',
    category: 'Industry Insight',
  },
  {
    date: '2025-08-01',
    title: 'FPSO Live Production Repair Campaign - West Africa',
    summary: 'Successful completion of a complex live production repair campaign on an operational FPSO, saving the client significant downtime costs.',
    category: 'Project Update',
  },
  {
    date: '2025-07-15',
    title: 'Cruise Ship Outfitting Project Delivered On Time',
    summary: 'Major cruise vessel interior refurbishment completed during scheduled dry dock, meeting all quality and schedule targets.',
    category: 'Project Update',
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function MediaPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Media"
        subtitle="News, Updates & Insights"
        backgroundImage={PAGE_BANNERS.media}
        breadcrumbs={[{ label: 'Media', href: '/media' }]}
      />

      {/* News Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Latest News"
            subtitle="Stay Informed"
            description="Keep up to date with the latest news, project updates, and industry insights from CTS Offshore."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Colored top bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-accent/20 px-3 py-1 font-body text-xs font-semibold text-primary">
                      {item.category}
                    </span>
                    <span className="font-body text-xs text-neutral-500">
                      {formatDate(item.date)}
                    </span>
                  </div>

                  <h3 className="mb-3 font-heading text-lg font-bold text-primary line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-neutral-600 line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-primary">Press & Media Enquiries</h2>
            <p className="mt-4 font-body text-base text-neutral-600">
              For press enquiries, media resources, or interview requests, please contact our
              communications team.
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-bold text-white transition-all hover:bg-primary-600"
            >
              Contact Media Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
