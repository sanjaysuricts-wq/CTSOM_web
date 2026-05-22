import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { SERVICE_PAGES, SECTORS, COMPANY } from '@/lib/constants'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICE_PAGES.find((s) => s.slug === slug)

  if (!service) {
    return { title: `Service Not Found | ${COMPANY.shortName}` }
  }

  return {
    title: `${service.title} | ${COMPANY.shortName}`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICE_PAGES.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary">Service Not Found</h1>
        <p className="mt-4 max-w-md font-body text-lg text-neutral-600">
          The service you are looking for does not exist or may have been moved.
        </p>
        <Button href="/services" variant="primary" size="lg" className="mt-8">
          View All Services
        </Button>
      </div>
    )
  }

  const parentSector = SECTORS.find((s) => s.slug === service.sector)
  const relatedServices = parentSector
    ? parentSector.services.filter((s) => s.slug !== service.slug)
    : []

  return (
    <>
      <Hero
        variant="page"
        title={service.title}
        subtitle={parentSector?.title}
        backgroundImage={service.bannerImage}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          ...(parentSector ? [{ label: parentSector.title, href: `/sectors/${parentSector.slug}` }] : []),
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Content (2/3) */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  Overview
                </h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
                <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                  {service.description}
                </p>
              </div>

              {/* Service Sections */}
              {service.sections.map((section, idx) => (
                <div key={section.title} className={idx > 0 ? 'mt-16' : 'mt-12'}>
                  <h2 className="font-heading text-2xl font-bold text-primary">
                    {section.title}
                  </h2>
                  <div className="mt-2 h-1 w-12 rounded-full bg-accent" />

                  <div className={section.image ? 'mt-6 grid gap-8 lg:grid-cols-2' : 'mt-6'}>
                    <div>
                      <p className="font-body text-base leading-relaxed text-neutral-700">
                        {section.description}
                      </p>

                      {section.items && section.items.length > 0 && (
                        <ul className="mt-6 space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/30">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="font-body text-sm text-primary-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {section.image && (
                      <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto lg:min-h-[250px]">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                            unoptimized
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Why Choose CTS */}
              <div className="mt-16 rounded-xl bg-primary p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold text-white">
                  Why Choose {COMPANY.shortName} for {service.shortTitle}?
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    `${COMPANY.yearsExperience} years of industry experience delivering proven results across the globe.`,
                    'In-situ delivery reduces costly dry dock time and keeps your assets operational.',
                    'ISO 9001, ISO 14001, and ISO 45001 certified quality management systems.',
                    `${COMPANY.availability} emergency response and availability across 9 global locations.`,
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="font-body text-sm leading-relaxed text-white/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Sidebar (1/3) */}
            <div className="lg:col-span-1">
              {/* Get a Quote CTA Card */}
              <div className="mb-8 rounded-xl bg-accent p-6">
                <h3 className="font-heading text-lg font-bold text-primary">Get a Quote</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-primary-700">
                  Need {service.shortTitle.toLowerCase()} services? Contact our team for a
                  free, no-obligation quotation.
                </p>
                <Button href="/contact?type=quote" variant="primary" size="md" className="mt-4 w-full">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="mt-3 text-center font-body text-xs text-primary-600">
                  Or call us:{' '}
                  <a href={`tel:${COMPANY.phone}`} className="font-semibold text-primary hover:underline">
                    {COMPANY.phone}
                  </a>
                </p>
              </div>

              {/* Parent Sector */}
              {parentSector && (
                <div className="mb-8 rounded-xl border border-neutral-100 bg-neutral-50 p-6">
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {parentSector.title} Sector
                  </h3>
                  <div className="mt-1 h-1 w-8 rounded-full bg-accent" />
                  <p className="mt-3 font-body text-sm text-neutral-600">{parentSector.description}</p>
                  <Link
                    href={`/sectors/${parentSector.slug}`}
                    className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:text-accent-700"
                  >
                    View Sector <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="mb-8 rounded-xl border border-neutral-100 bg-neutral-50 p-6">
                  <h3 className="font-heading text-lg font-bold text-primary">Related Services</h3>
                  <div className="mt-1 h-1 w-8 rounded-full bg-accent" />
                  <ul className="mt-4 space-y-1">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}`}
                          className="group flex items-center gap-2 rounded-lg px-3 py-2.5 font-body text-sm text-neutral-700 transition-colors duration-200 hover:bg-white hover:text-primary"
                        >
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-accent-600" />
                          {related.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Availability Badge */}
              <div className="rounded-xl border border-primary-100 bg-primary/5 p-6 text-center">
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-400">
                  Availability
                </p>
                <p className="mt-1 font-heading text-2xl font-bold text-primary">
                  {COMPANY.availability}
                </p>
                <p className="mt-2 font-body text-xs text-neutral-600">Emergency response worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
