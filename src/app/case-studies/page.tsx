import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY, CASE_STUDIES, PAGE_BANNERS } from '@/lib/constants'
import { MapPin, ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: `Case Studies | ${COMPANY.shortName}`,
  description: 'Explore real-world projects where CTS Offshore delivered proven results for offshore, renewable energy, cruise, and maritime clients worldwide.',
}

const categories = ['All', ...Array.from(new Set(CASE_STUDIES.map((cs) => cs.sector)))]

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Case Studies"
        subtitle="Real-world projects delivering real results"
        backgroundImage={PAGE_BANNERS.caseStudies}
        breadcrumbs={[
          { label: 'Case Studies', href: '/case-studies' },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Our Project Portfolio"
            subtitle="Proven Results"
            description={`From FPSO life extension projects to LNG fleet surveys, explore how ${COMPANY.shortName} delivers measurable outcomes for clients across the globe. Over 20 FPSO/Rigs and hundreds of vessels worldwide.`}
          />

          {/* Category Tags */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                        {study.sector}
                      </span>
                      <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {study.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {study.date}
                      </span>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-bold text-primary transition-colors group-hover:text-primary-600">
                      {study.title}
                    </h3>
                    <p className="mb-1 text-xs font-medium text-accent-700">
                      {study.client}{study.vessel ? ` — ${study.vessel}` : ''}
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600 line-clamp-3">
                      {study.summary}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent-700">
                      Read Case Study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="grid gap-8 text-center sm:grid-cols-4">
            <div>
              <p className="font-heading text-4xl font-bold text-accent">20+</p>
              <p className="mt-2 font-body text-sm text-white/70">FPSO/Rigs Worldwide</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-accent">{COMPANY.yearsExperience}</p>
              <p className="mt-2 font-body text-sm text-white/70">Years of Experience</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-accent">9</p>
              <p className="mt-2 font-body text-sm text-white/70">Global Locations</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-accent">24/7/365</p>
              <p className="mt-2 font-body text-sm text-white/70">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-body text-lg italic leading-relaxed text-primary-700">
              &ldquo;CTS have performed up to our expectation each time and the quality of personnel they have provided so far have been excellent. Their processes are well defined and their approach to each of our requests has been proactive and pragmatic.&rdquo;
            </blockquote>
            <p className="mt-6 font-heading text-sm font-semibold text-primary">
              Head of Project Management Services
            </p>
            <p className="font-body text-sm text-neutral-500">DNV GL</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="Our team is ready to discuss your requirements and provide a tailored solution. Get in touch today."
      />
    </>
  )
}
