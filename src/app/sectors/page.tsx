import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import dynamic from 'next/dynamic'
// import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import { SECTORS, COMPANY, HOME_IMAGES, PAGE_BANNERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Our Sectors | ${COMPANY.shortName}`,
  description: 'CTS Offshore serves the Oil & Gas, Marine, Renewables, and Cruise industries with comprehensive in-situ asset integrity and technical services worldwide.',
}

const sectorBannerMap: Record<string, string> = {
  'oil-and-gas': HOME_IMAGES.oilAndGas,
  'marine': HOME_IMAGES.maritime,
  'renewables': HOME_IMAGES.renewables,
  'cruise-lines': HOME_IMAGES.cruise,
}

const CTASection = dynamic(
  () => import('@/components/sections/CTASection')
)

// newly added nd commented
// const bannerVideoMap: Record<string, string> = {
//   'oil-and-gas': HOME_IMAGES.oilAndGasVideo,
//   'marine': HOME_IMAGES.maritimeVideo,
//   'renewables': HOME_IMAGES.renewablesVideo,
//   'cruise-lines': HOME_IMAGES.cruiseVideo,
// }

export default function SectorsPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Our Sectors"
        subtitle="Industries We Serve"
        description="We deliver specialist services tailored to the unique demands of each sector."
        backgroundImage={PAGE_BANNERS.sectorsOverview}
        breadcrumbs={[{ label: 'Sectors', href: '/sectors' }]}
      />

      {/* Sectors Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Explore Our Sectors"
            description="From deepwater oil and gas operations to cruise ship outfitting, CTS Offshore delivers specialist services across four key sectors."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {SECTORS.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group block overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">


                  {sector.bannerVideo ? (
                    <video className="h-full w-full object-cover" src={sector.bannerVideo} autoPlay muted loop playsInline >   </video>
                  ) : (
                    <Image
                      src={sectorBannerMap[sector.slug] || sector.bannerImage || ''}
                      alt={sector.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  {/* <Image
                    src={sectorBannerMap[sector.slug] || sector.bannerImage || ''}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {sector.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-white/80 line-clamp-2">
                      {sector.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sector.services.slice(0, 3).map((s) => (
                        <span key={s.slug} className="rounded-full bg-white/15 px-3 py-1 font-body text-xs text-white/90 backdrop-blur-sm">
                          {s.shortTitle}
                        </span>
                      ))}
                      {sector.services.length > 3 && (
                        <span className="rounded-full bg-accent/30 px-3 py-1 font-body text-xs font-semibold text-accent backdrop-blur-sm">
                          +{sector.services.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-2 font-body text-sm font-semibold text-accent transition-colors">
                      Explore Sector
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Industry-Specific Support?"
        description="Our team understands the unique requirements of your sector. Contact us to discuss how we can support your operations."
        backgroundImage = '/images/lower banners_sectors.webp'
      />
    </>
  )
}
