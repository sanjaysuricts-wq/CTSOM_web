import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import dynamic from 'next/dynamic'

// import CTASection from '@/components/sections/CTASection'
// import CertificationsBar from '@/components/sections/CertificationsBar'
import { SECTORS, SERVICE_PAGES, COMPANY, PAGE_BANNERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Our Services | ${COMPANY.shortName}`,
  description: 'Comprehensive marine, offshore, renewables, and cruise technical services. CTS Offshore provides a true single-source solution worldwide.',
}

const CTASection = dynamic(
  () => import('@/components/sections/CTASection')
)

const CertificationsBar = dynamic(
  () => import('@/components/sections/CertificationsBar')
)
// Vary font sizes for a word-cloud feel
const SIZES = [
  'text-lg sm:text-xl',
  'text-base sm:text-lg',
  'text-xl sm:text-2xl',
  'text-base sm:text-lg',
  'text-lg sm:text-xl',
  'text-xl sm:text-2xl',
  'text-base sm:text-lg',
  'text-lg sm:text-xl',
  'text-base sm:text-lg',
  'text-xl sm:text-2xl',
]

export default function ServicesPage() {
  const seen = new Set<string>()
  const allServices = SERVICE_PAGES.filter((sp) => {
    if (seen.has(sp.slug)) return false
    seen.add(sp.slug)
    return true
  })

  return (
    <>
      <Hero
        variant="page"
        title="Our Services"
        subtitle="Comprehensive Technical Solutions"
        description="From bespoke manpower solutions and live production repairs to wind turbine maintenance and turnkey cruise outfitting, CTS Offshore delivers single-source solutions worldwide."
        backgroundImage={PAGE_BANNERS.services}
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
      />

      {/* Word Cloud */}
      <section className="bg-white py-24">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 font-body text-lg text-neutral-600">
              Tap any service to learn more.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3">
            {allServices.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative font-heading font-bold text-primary/30 transition-all duration-300 hover:text-primary ${SIZES[i % SIZES.length]}`}
              >
                {service.title}
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Sector links */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-neutral-100 pt-10">
            {SECTORS.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="font-heading text-sm font-semibold text-primary/50 transition-colors hover:text-primary"
              >
                {sector.title} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CertificationsBar />
      <CTASection />
    </>
  )
}
