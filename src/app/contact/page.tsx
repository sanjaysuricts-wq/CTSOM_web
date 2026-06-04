import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import dynamic from 'next/dynamic'
import LocationCardClient from './LocationCardClient'
import LocationGridClient from './LocationGridClient'
// import CTASection from '@/components/sections/CTASection'
import ContactForm from '@/components/shared/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY, LOCATIONS, PAGE_BANNERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY.shortName}`,
  description: `Get in touch with ${COMPANY.shortName}. We are available ${COMPANY.availability} for emergency support and project enquiries across 9 global locations.`,
}

const CTASection = dynamic(
  () => import('@/components/sections/CTASection')
)

const faqs = [
  {
    question: 'What areas do you operate in?',
    answer:
      'CTS Offshore & Marine operates globally with offices in the United Kingdom, UAE, Singapore, India, Netherlands, Bulgaria, Indonesia, and Brazil. We can deploy teams to virtually any location worldwide, covering all major offshore basins and shipping routes.',
  },
  {
    question: 'Do you provide 24/7 emergency support?',
    answer:
      'Yes. We operate on a 24/7/365 basis. Our emergency response teams are always on standby and can be mobilised at short notice to any location. Simply call our emergency line or submit an urgent request through our contact form.',
  },
  {
    question: 'What certifications do you hold?',
    answer:
      'CTS Offshore & Marine is certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety). We are also FPAL Verified through First Point Assessment, demonstrating our commitment to industry-leading standards.',
  },
  {
    question: 'Can you provide a single-source solution?',
    answer:
      'Absolutely. We offer a comprehensive range of services under one roof, including generator and mechanical repairs, steel and pipe fabrication, inspections and NDT, HVAC EPC, riding teams, spares supply, blasting and coating, and electrical and instrumentation services. This single-source approach simplifies project management and reduces overall costs.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can request a quote by filling out the contact form on this page, emailing us at info@ctsom.com, or calling our main line. Please provide as much detail as possible about your requirements, including vessel or asset type, location, scope of work, and preferred timeline. Our team will respond with a tailored quotation promptly.',
  },
  {
    question: 'Do you perform work in-situ or only in dry dock?',
    answer:
      'We specialise in in-situ services — that means we perform work alongside, at anchor, at berth, or even while the vessel is operational. This approach eliminates costly dry dock time and significantly reduces downtime for your assets.',
  },
]

const contactCards = [
  {
    icon: Phone,
    title: '24/7 Emergency Line',
    detail: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    description: 'Immediate response for urgent requirements',
  },
  {
    icon: Mail,
    title: 'General Enquiries',
    detail: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: 'For quotes, information, and general questions',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    detail: 'London, United Kingdom',
    href: undefined,
    description: `${COMPANY.name}`,
  },
  {
    icon: Clock,
    title: '24/7/365 Availability',
    detail: 'Always On',
    href: undefined,
    description: 'Global operations support around the clock',
  },
]

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Contact Us"
        subtitle="Get in touch with our team"
        backgroundImage={PAGE_BANNERS.contact}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Form & Info Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                Send Us a Message
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
              <p className="mt-4 font-body text-base leading-relaxed text-neutral-600">
                Fill out the form below and a member of our team will get back to
                you as soon as possible. For urgent enquiries, please call our
                24/7 emergency line.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Right Column - Contact Information Cards */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                Contact Information
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
              <p className="mt-4 font-body text-base leading-relaxed text-neutral-600">
                Reach us through any of the channels below. Our team is available
                around the clock to support your operations.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon
                  const content = (
                    <div className="flex h-full flex-col rounded-xl border border-neutral-100 bg-neutral-50 p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-md">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-sm font-bold text-primary">
                        {card.title}
                      </h3>
                      <p className="mt-1 font-heading text-base font-semibold text-primary-600">
                        {card.detail}
                      </p>
                      <p className="mt-2 font-body text-xs leading-relaxed text-neutral-500">
                        {card.description}
                      </p>
                    </div>
                  )

                  if (card.href) {
                    return (
                      <a
                        key={card.title}
                        href={card.href}
                        className="group block"
                      >
                        {content}
                      </a>
                    )
                  }

                  return (
                    <div key={card.title}>
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="bg-neutral-50 py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Our Global Offices"
            subtitle="Locations"
            description="With offices strategically positioned across 9 countries, we provide local expertise with global reach."
          />

          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.city}
                className="rounded-xl border border-neutral-100 bg-white p-6 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-600" />
                  <h3 className="font-heading text-base font-bold text-primary">
                    {location.city}
                  </h3>
                  {location.isHQ && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-primary">
                      HQ
                    </span>
                  )}
                </div>

                <p className="mt-1 font-body text-sm text-neutral-500">
                  {location.country}
                </p>
                <a
                  href={`mailto:${location.email}`}
                  className="mt-3 inline-flex items-center gap-1 font-body text-sm font-medium text-primary hover:text-accent-700 transition-colors duration-200"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {location.email}
                </a>
                <div className="mt-3 flex flex-wrap gap-1">
                  {location.services.slice(0, 5).map((svc) => (
                    <span
                      key={svc}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 font-body text-[10px] text-neutral-600"
                    >
                      {svc}
                    </span>
                  ))}
                  {location.services.length > 5 && (
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-body text-[10px] text-neutral-600">
                      +{location.services.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div> */}

          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {LOCATIONS.map((location) => (
    <LocationCardClient
      key={location.city}
      location={location}
    />
  ))}
</div> */}
<LocationGridClient />

        </div>
      </section>

      {/* FAQ Section */}
      {<section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="FAQs"
            description="Find answers to common questions about our services, availability, and how we work."
          />

          <div className="mx-auto max-w-3xl">
            <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-heading text-base font-semibold text-primary transition-colors duration-200 hover:text-primary-600 [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-500 transition-transform duration-200 group-open:rotate-45 group-open:bg-accent/30 group-open:text-primary">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="font-body text-sm leading-relaxed text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-neutral-500">
              Still have questions?{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-semibold text-primary hover:text-accent-700 transition-colors duration-200"
              >
                Email us directly
              </a>{' '}
              or call{' '}
              <a
                href={`tel:${COMPANY.phone}`}
                className="font-semibold text-primary hover:text-accent-700 transition-colors duration-200"
              >
                {COMPANY.phone}
              </a>
            </p>
          </div>
        </div>
      </section>}

    </>
  )
}
