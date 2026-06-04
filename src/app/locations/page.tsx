import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import dynamic from 'next/dynamic'
// import CTASection from '@/components/sections/CTASection'
// import SectionHeading from '@/components/ui/SectionHeading'
// import TimezoneMap from '@/components/sections/TimezoneMap'
// import LocationCard from '@/components/ui/LocationCard'
import { LOCATIONS, COMPANY, PAGE_BANNERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Our Global Locations | ${COMPANY.shortName}`,
  description:
    'CTS Offshore and Marine operates from 9 offices worldwide, delivering local expertise with global reach across the UK, UAE, Singapore, India, Netherlands, Bulgaria, Romania, Brazil, and Malaysia.',
}

const CTASection = dynamic(
  () => import('@/components/sections/CTASection')
)

const TimezoneMap = dynamic(
  () => import('@/components/sections/TimezoneMap')
)
const SectionHeading = dynamic(
  () => import('@/components/ui/SectionHeading')
)
const LocationCard = dynamic(
  () => import('@/components/ui/LocationCard')
)


export default function LocationsPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Our Global Locations"
        subtitle="9 offices across the world, delivering local expertise with global reach"
        backgroundImage={PAGE_BANNERS.locations}
        breadcrumbs={[
          { label: 'Locations', href: '/locations' },
        ]}
      />

      {/* Global Presence Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Global Presence, Local Expertise"
              subtitle="Our Network"
              description={`${COMPANY.shortName} maintains a worldwide network of offices strategically positioned to serve the marine and offshore industry wherever you operate. Our local teams combine in-depth regional knowledge with the full backing of a global organisation, ensuring you receive consistent quality and rapid response no matter the location.`}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="font-heading text-4xl font-bold text-primary">9</span>
              <span className="mt-1 font-body text-sm text-neutral-600">Global Offices</span>
            </div>
            <div className="h-10 w-px bg-neutral-200" />
            <div className="flex flex-col items-center">
              <span className="font-heading text-4xl font-bold text-primary">6</span>
              <span className="mt-1 font-body text-sm text-neutral-600">Continents Covered</span>
            </div>
            <div className="h-10 w-px bg-neutral-200" />
            <div className="flex flex-col items-center">
              <span className="font-heading text-4xl font-bold text-primary">24/7</span>
              <span className="mt-1 font-body text-sm text-neutral-600">Availability</span>
            </div>
            <div className="h-10 w-px bg-neutral-200" />
            <div className="flex flex-col items-center">
              <span className="font-heading text-4xl font-bold text-primary">20+</span>
              <span className="mt-1 font-body text-sm text-neutral-600">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Our Offices Worldwide"
            subtitle="Find Us"
            description="Each of our offices is staffed with experienced professionals ready to support your operations with local knowledge and global standards."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {LOCATIONS.map((location) => (
              <LocationCard
                key={location.city}
                city={location.city}
                country={location.country}
                isHQ={location.isHQ}
                phone={location.phone}
                email={location.email}
                address={location.address}
                services={location.services}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 24/7/365 Global Coverage – Interactive Timezone Map */}
      <TimezoneMap />

      {/* CTA */}
      <CTASection
        title="Contact Your Nearest Office"
        description="Get in touch with our local team to discuss your requirements. Our regional experts are ready to provide tailored solutions for your marine and offshore needs."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us Now', href: `tel:${COMPANY.phone}` }}
        backgroundImage='/images/lower banners_location.webp'
      />
    </>
  )
}
