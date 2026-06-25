import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY, NEWS_ITEMS } from '@/lib/constants'
import { PAGE_BANNERS } from "@/lib/constants";

const galleryHighlights = [
  {
    title: 'NOR Shipping 2025',
    location: 'Oslo, Norway',
    tag: 'Events',
    image: '/images/nor_shipping_2025_1.webp',
    description:
      "A great few days at Nor-Shipping 2025 meeting industry professionals, sharing ideas, and exploring what's next for the maritime industry.",
  },
  {
    title: 'Seatrade Maritime Logistics Middle East',
    location: 'Dubai, UAE',
    tag: 'Events',
    image: '/images/Newsroom_EventsNpress_SMLmeCover.webp',
    description:
      'Engaging with industry professionals and exploring key developments shaping the future of maritime and logistics operations across the region.',
  },
  {
    title: 'GF+ Piping Partnership Meeting',
    location: 'Dubai, UAE',
    tag: 'Partnerships',
    image: '/images/1761909239111 copy.webp',
    description:
      'Productive discussions with GF Piping Systems in Dubai, exploring technical requirements and collaboration opportunities across upcoming projects.',
  },
]

export const metadata: Metadata = {
  title: `Newsroom | ${COMPANY.shortName}`,
  description: 'Latest news, press releases, and company updates from CTS Offshore and Marine.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsroomPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Newsroom"
        subtitle="LATEST UPDATES, EVENTS, AND INDUSTRY ACTIVITY."
        backgroundImage={PAGE_BANNERS.newsroom}
        breadcrumbs={[
          { label: 'News & Media', href: '/news-media' },
          { label: 'Newsroom', href: '/news-media/newsroom' },
        ]}
      />

      {/* News Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full px-2 lg:px-2">
          <SectionHeading
            title="Latest News"
            subtitle="Stay Informed"
            description="Keep up to date with the latest news, project updates, and industry insights from CTS Offshore."
            align="left"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((item) => (
              <Link
                key={item.slug}
                href={`/news-media/newsroom/${item.slug}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Cover image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>

                  {/* Accent bar */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-accent/20 px-3 py-1 font-body text-xs font-semibold text-primary">
                        {item.category}
                      </span>
                      <span className="font-body text-xs text-neutral-500">
                        {formatDate(item.date)}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-lg font-bold text-primary line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm leading-relaxed text-neutral-600 line-clamp-3">
                      {item.summary}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-primary group-hover:text-accent-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Press */}
      <section className="bg-primary  py-20">
        <div className="container mx-auto w-full px-2 lg:px-2">
          <SectionHeading
            title="Events & Press"
            subtitle=""
            description="A visual archive of exihibitions, conferences,and industry events we take part in, including recaps and highlights"
            align="left"
            light
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryHighlights.map((item) => (
              <Link
                key={item.title}
                href={`/news-media/gallery?story=${encodeURIComponent(item.title)}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                        {item.tag}
                      </span>
                      <span className="font-body text-xs text-neutral-500">{item.location}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-primary-600 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-body text-sm text-neutral-600 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-primary group-hover:text-accent-700">
                      View Gallery →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto w-full px-2 lg:px-2">
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

// Made with Bob
