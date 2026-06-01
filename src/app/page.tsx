
'use client'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Testimonials from '@/components/sections/Testimonials'
import CertificationsBar from '@/components/sections/CertificationsBar'
import ClientLogos from '@/components/sections/ClientLogos'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY, HOME_IMAGES, SECTORS } from '@/lib/constants'
import { ArrowRight, Download } from 'lucide-react'
// import EntryPoints from '@/components/EntryPoints'
import dynamic from 'next/dynamic'

const EntryPoints = dynamic(() => import('@//components/EntryPoints'), {
  ssr: false
})


import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'


const sectorCards = [
  { title: 'Renewables', image: HOME_IMAGES.renewables, href: '/sectors/renewables', description: 'Supporting the energy transition with specialist services.' },
  { title: 'Oil & Gas', image: HOME_IMAGES.oilAndGas, href: '/sectors/oil-and-gas', description: 'In-situ asset integrity services for offshore installations.' },
  { title: 'Maritime', image: HOME_IMAGES.maritime, href: '/sectors/marine', description: 'Full-spectrum marine engineering and maintenance services.' },
  { title: 'Cruise Lines', image: HOME_IMAGES.cruise, href: '/sectors/cruise-lines', description: 'Turnkey outfitting solutions for the global cruise industry.' },
]

export default function HomePage() {
  const [openSector, setOpenSector] = useState<string | null>(null)

  return (
    <>
      {/* Download Button - Top Right */}
      <a
        href="/CTS_Brochure 2025.pdf"
         target="_blank"
           rel="noopener noreferrer"
            aria-label="Download CTS Offshore brochure PDF"
        className="fixed top-4 left-4 z-40 hidden sm:inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-heading text-sm font-bold text-primary shadow-lg transition-all hover:bg-accent-200 hover:-translate-y-0.5"
      >
        <Download className="h-4 w-4" />
         <span> Download Brochure</span>
        
      </a>


      {/* Hero Section */}
      <Hero
        variant="home"
        title="Asset Integrity Specialists"
        subtitle="Worldwide reach. 24/7/365 cost-effective local support."
        description="CTS Offshore provides comprehensive maintenance, repair, and technical services for offshore and marine assets worldwide. From live production repairs and fabric maintenance to wind turbine servicing and cruise ship outfitting, we deliver single-source solutions that keep your operations running safely and efficiently."
        primaryCTA={{ label: 'Get a Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Our Sectors', href: '/sectors' }}
        backgroundImage={HOME_IMAGES.oilAndGas}
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Sectors Section */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Our Sectors"
            subtitle="Industries We Serve"
            description="We deliver specialist services tailored to the unique demands of each sector, from offshore oil and gas through to cruise ship outfitting."
          />

          {/* Mobile */}
<div className="space-y-2 md:hidden">
<div className="space-y-2 md:hidden">
  {sectorCards.map((sector) => {
    const isOpen = openSector === sector.title

    return (
      <div
        key={sector.title}
        className="overflow-hidden rounded-xl border border-gray-200"
      >
        <button
          onClick={() =>
            setOpenSector(isOpen ? null : sector.title)
          }
          className="flex w-full items-center justify-between p-4"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-base font-bold text-primary">
              {sector.title}
            </h3>
          </div>

          {isOpen ? (
            <Minus className="h-5 w-5 text-primary" />
          ) : (
            <Plus className="h-5 w-5 text-primary" />
          )}
        </button>

        {isOpen && (
          <div className="px-4 pb-4">
            <p className="font-body text-sm leading-relaxed text-gray-600">
              {sector.description}
            </p>

            <Link
              href={sector.href}
              className="mt-4 inline-flex items-center gap-2 font-semibold text-accent"
            >
              Explore Sector
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    )
  })}
</div>

</div>


{/* Desktop */}
          <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
            {sectorCards.map((sector) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="group block overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {sector.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-white/80 line-clamp-2">
                      {sector.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 font-body text-sm font-semibold text-white transition-colors">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Charter Tonnage Section */}
<section className="bg-primary py-15">
  <div className="mx-auto w-full px-6 lg:px-12">
    <EntryPoints />
  </div>
</section>
  {/* Engineering Section */}
      <section className=" bg-neutral-50 py-15">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Hook-Up Support Services
              </h2>
              <p className="hidden md:block mt-6 font-body text-lg leading-relaxed text-primary-300">
                CTS Offshore specialises in comprehensive hook-up support for
                offshore platforms, ensuring safe and efficient installation and
                commissioning. Our expert teams secure and prepare platforms for
                operational readiness through structural welding, painting, and
                major system connections.
              </p>
              <p className="hidden md:block mt-4 font-body text-base leading-relaxed text-neutral-600">
                From cable pulling and power system integration to HVAC, fire
                safety, and SCADA connections, we deliver end-to-end hook-up
                services that bring platforms from construction to full
                operational status on schedule.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Structural welding, painting & corrosion protection',
                  'Cable pulling, power & communication connections',
                  'HVAC, fire safety, rescue & inert gas systems',
                  'SCADA, transformers & navigation aid installation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/30">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-bold text-white transition-all hover:bg-primary-600"
              >
                View Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative hidden sm:block h-80 overflow-hidden rounded-xl sm:h-[28rem]">
              <Image
                src="/images/10-media--media-borwin-gamma-platform-transport.webp"
                alt="BorWin Gamma platform transport"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Teams Section */}
      <section className="relative overflow-hidden py-10">
        <div className="absolute inset-0 z-0">
          <Image
            src={HOME_IMAGES.bespokeTeams}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white sm:text-4xl">
              Bespoke Teams
            </h2>
            <p className=" hidden md:block mt-6 font-body text-lg leading-relaxed text-white/80">
              We assemble dedicated teams tailored to your specific project requirements.
              Whether you need a small riding squad for routine maintenance or a full
              multi-discipline project team for a major campaign, CTS Offshore provides the
              right people with the right skills, deployed anywhere in the world at short notice.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { title: 'Riding Squads', desc: 'Multi-skilled maintenance teams for ongoing vessel support.' },
                { title: 'Project Teams', desc: 'Dedicated teams for planned maintenance and modification campaigns.' },
                { title: 'Emergency Response', desc: '24/7/365 rapid deployment for breakdown and emergency situations.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="font-heading text-lg font-bold text-accent">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/services/bespoke-manpower-solutions"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-primary transition-all hover:bg-accent-200"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {/* <section className="bg-white py-20 hidden sm:block"> */}
        {/* <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive Solutions"
            description="From manpower solutions and live production repairs to wind turbine maintenance and cruise ship outfitting, we cover every discipline."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((sector) => (
              <div
                key={sector.slug}
                className="group relative overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Accent top bar */}
                {/* <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />

                <div className="p-6">
                  {/* Sector icon badge */}
                  {/* <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <span className="font-heading text-lg font-bold text-primary">
                      {sector.shortTitle.charAt(0)}
                    </span>
                  // </div> */} 

                  {/* <h3 className="mb-1 font-heading text-lg font-bold text-primary">
                    {sector.title}
                  </h3>
                  <p className="mb-4 font-body text-xs text-neutral-500">
                    {sector.services.length} services
                  </p> */}

                  {/* <ul className="space-y-2.5">
                    {sector.services.slice(0, 5).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/link flex items-center gap-2.5 font-body text-sm text-neutral-700 transition-colors hover:text-primary"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 transition-colors group-hover/link:bg-accent/40">
                            <ArrowRight className="h-3 w-3 text-primary transition-transform group-hover/link:translate-x-0.5" />
                          </div>
                          {service.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
{/* 
                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <Link
                      href={`/sectors/${sector.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2 font-heading text-sm font-semibold text-primary transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
                    >
                      View Sector
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
        //         </div> */}
        {/* //       </div> */}
        {/* //     ))} */}
        {/* //   </div> */}
        {/* // </div> */} 
      {/* </section> */}

     
   

   

      {/* Client Logos */}
      <ClientLogos />
               {/* Testimonials */}
      <Testimonials />

          {/* Certifications */}
      <CertificationsBar />


      {/* CTA Section */}
      <div className="hidden sm:block"> 
        
       
      <CTASection 
        title="Starting Your Next Project?"
        description={`Contact our team for a consultation. Available ${COMPANY.availability} to support your operations worldwide.`}
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us Now', href: `tel:${COMPANY.phone}` }}
        backgroundImage="/images/lower_banners_home.webp"
      />
       </div>
    </>
  )
}
