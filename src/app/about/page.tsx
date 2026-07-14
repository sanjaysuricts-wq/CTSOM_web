import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import dynamic from 'next/dynamic'

// import CertificationsBar from '@/components/sections/CertificationsBar'
// import CTASection from '@/components/sections/CTASection'
// import SectionHeading from '@/components/ui/SectionHeading'
import { ABOUT_IMAGES, COMPANY } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY.name} -- our story, commitment, values, core pillars, our people, and our products.`,
}
const CertificationsBar = dynamic(
  () => import('@/components/sections/CertificationsBar')
)
const CTASection = dynamic(
  () => import('@/components/sections/CTASection')
)
const SectionHeading = dynamic(
  () => import('@/components/ui/SectionHeading')
)
export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="page"
        title="About CTS Offshore"
        subtitle="Global Integrity. Local Reach."
        backgroundImage={ABOUT_IMAGES.teamWelding}
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />

      {/* Our Commitment */}
      <section className="bg-white py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-accent ml-4 mr-4 " />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl ml-4 mr-4">
                Our Commitment
              </h2>
              <p className="mt-6 ml-4 mr-4 font-body text-lg leading-relaxed text-primary-300">
                CTS Offshore is committed to delivering safe, reliable, and cost-effective
                technical services to the marine, offshore, renewables, and cruise
                industries worldwide. With over 20 years of experience, we have built
                a reputation for technical excellence, rapid response, and unwavering
                dedication to our clients.
              </p>
              <p className="mt-4 ml-4 mr-4 font-body text-base leading-relaxed text-primary-300">
                Our commitment extends beyond service delivery. We invest in our people,
                maintain the highest safety standards, and continuously innovate to meet
                the evolving needs of the industries we serve. From our headquarters in
                London to our offices across 9 countries, every member of the CTS team
                shares a common purpose: to keep your assets operating safely and efficiently.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl lg:h-[400px]">
              <Image
                src={ABOUT_IMAGES.ourCommitment}
                alt="Our Commitment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-neutral-50 py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-xl lg:order-first lg:h-[400px]">
              <Image
                src={ABOUT_IMAGES.ourValues}
                alt="Our Values"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl ml-4 mr-4">
                Our Values
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-primary-300 ">
                Our values define who we are and guide every decision we make. They are
                the foundation upon which CTS Offshore has built lasting partnerships with
                clients across the globe.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Safety', desc: 'Non-negotiable commitment to the highest health and safety standards.' },
                  { title: 'Quality', desc: 'ISO certified operations delivering work that exceeds expectations.' },
                  { title: 'Integrity', desc: 'Transparent, honest, and ethical conduct in every interaction.' },
                  { title: 'Innovation', desc: 'Continuously seeking smarter, more efficient solutions.' },
                  { title: 'Teamwork', desc: 'Collaborative culture where skilled professionals work together.' },
                  { title: 'Sustainability', desc: 'Committed to minimising environmental impact.' },
                ].map((value) => (
                  <div key={value.title} className="rounded-lg border border-neutral-200 bg-white p-4">
                    <h3 className="font-heading text-sm font-bold text-primary">{value.title}</h3>
                    <p className="mt-1 font-body text-xs leading-relaxed text-neutral-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={ABOUT_IMAGES.corePillars}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-8xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Our Core Pillars
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-white/80">
              CTS Offshore is built on core pillars that define our approach to
              delivering world-class technical services across the marine and offshore
              industries.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Global Integrity', desc: 'We prioritise ethical practices, transparency, and respect for stakeholders across borders — driving sustainable engineering projects with a positive global impact.' },
              { title: 'Communication', desc: 'We foster a client-centric culture built on open, honest communication — ensuring clients are well-informed and integral partners at every stage of their projects.' },
              { title: 'Local Reach', desc: 'With team members worldwide, we combine international expertise with deep knowledge of local regulations, environments, and cultures to deliver projects that positively impact the communities they serve.' },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="font-heading text-lg font-bold text-accent">{pillar.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/70">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="bg-white py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Our People"
            subtitle="The CTS Team"
            description="Our strength lies in our people. With 99+ skilled professionals across 9 global offices, we bring together the expertise and experience needed to deliver exceptional results."
          />

          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src={ABOUT_IMAGES.ourPeople2}
                alt="Our People"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src={ABOUT_IMAGES.ourPeople3}
                alt="Our Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-primary">
                Skilled Professionals
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-primary-300">
                From coded welders and mechanical fitters to electrical engineers and
                project managers, our diverse team brings together the full spectrum of
                skills needed for complex offshore and marine projects.
              </p>
              <p className="mt-3 font-body text-base leading-relaxed text-primary-300">
                Every CTS team member undergoes rigorous training and holds the
                certifications required for their specific discipline and operating
                environment.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-bold text-white transition-all hover:bg-primary-600"
              >
                Join Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-neutral-50 py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl ml-4 mr-4">
                Our Products
              </h2>
              <p className="mt-6 ml-4 mr-4 font-body text-lg leading-relaxed text-primary-300">
                As an ISO 9001:2008 certified company with over 10 years of dedicated
                spare parts expertise, CTS Offshore supplies a comprehensive range of
                parts and equipment for the marine and offshore industries worldwide —
                from main engine spares and compressors to pumps, hydraulics, electrical
                systems, and galley equipment.
              </p>
              <p className="mt-4 ml-4 mr-4 font-body text-base leading-relaxed text-primary-300">
                We deliver high-quality, genuine parts from reputable manufacturers at
                competitive prices. Our experienced technical team is available 24/7,
                ensuring efficient sourcing, accurate order fulfilment, and rapid
                delivery through our global supply network  wherever you operate.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex ml-4 mr-4 items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-heading text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Enquire About Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl lg:h-[400px]">
              <Image
                src={ABOUT_IMAGES.ourProducts}
                alt="Our Products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsBar />

      {/* CTA Section */}
      <CTASection
        title="Partner with CTS Offshore"
        description="Whether you need a single riding team or a full-scope maintenance campaign, we have the expertise and global reach to deliver. Get in touch today."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
          backgroundImage = '/images/lower banners_about.webp'
      />
    </>
  )
}
