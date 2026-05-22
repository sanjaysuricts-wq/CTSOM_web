import { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  Users,
  Briefcase,
  Clock,
  MapPin,
  ChevronRight,
} from 'lucide-react'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Careers | ${COMPANY.shortName}`,
  description:
    'Join CTS Offshore and Marine. Explore career opportunities across 9 global locations in marine engineering, project management, welding, HVAC, and more.',
}

const benefits = [
  {
    icon: Globe,
    title: 'Global Opportunities',
    description:
      'Work across 8 countries and experience diverse cultures, projects, and environments. From the North Sea to the South China Sea, your career has no borders.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Learn from industry veterans with decades of hands-on experience in marine and offshore engineering. Our mentorship culture helps you grow every day.',
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description:
      'Develop your skills through challenging projects, professional training, and clear advancement pathways. We invest in our people because they are our greatest asset.',
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description:
      'Flexible working arrangements, competitive leave policies, and a genuine commitment to your wellbeing. We believe balanced professionals deliver the best results.',
  },
]

const jobListings = [
  {
    id: 1,
    title: 'Marine Engineer',
    location: 'Dubai, UAE',
    type: 'Full Time',
    description:
      'Oversee and execute marine engine overhauls, generator repairs, and mechanical maintenance on offshore and marine assets across the Middle East region.',
  },
  {
    id: 2,
    title: 'Project Manager',
    location: 'London, UK',
    type: 'Full Time',
    description:
      'Lead multi-disciplinary projects from planning through execution, managing client relationships, budgets, and cross-functional teams across 9 global locations.',
  },
  {
    id: 3,
    title: 'Coded Welder (6G)',
    location: 'Rotterdam, Netherlands',
    type: 'Contract',
    description:
      'Perform coded welding on structural steel, pipework, and pressure vessels aboard offshore installations and vessels in the North Sea and European waters.',
  },
  {
    id: 4,
    title: 'Technical Superintendent',
    location: 'Singapore',
    type: 'Full Time',
    description:
      'Provide technical oversight for vessel maintenance programs, coordinate riding team deployments, and ensure compliance with class and flag state requirements.',
  },
  {
    id: 5,
    title: 'HVAC Engineer',
    location: 'Multiple Locations',
    type: 'Full Time',
    description:
      'Design, commission, and maintain HVAC systems on offshore platforms and marine vessels. Conduct surveys, specify equipment, and oversee installation projects.',
  },
]

export default function CareersPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Careers at CTS"
        subtitle="Join a global team of marine engineering professionals"
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
        ]}
      />

      {/* Why Work at CTS */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Why Work at CTS"
            subtitle="Our People"
            description="We are a global family of marine engineering professionals united by a shared commitment to excellence. Here is what makes CTS a great place to build your career."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="group rounded-xl border border-neutral-100 bg-neutral-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 transition-colors duration-300 group-hover:bg-accent/25">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Current Openings"
            subtitle="Join Our Team"
            description="Explore our latest opportunities across the globe. We are always looking for talented professionals who share our passion for marine engineering excellence."
          />

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="group rounded-xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-xl font-bold text-primary">
                        {job.title}
                      </h3>
                      <span
                        className={
                          job.type === 'Contract'
                            ? 'inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-heading text-xs font-semibold text-primary'
                            : 'inline-flex items-center rounded-full bg-accent/20 px-3 py-1 font-heading text-xs font-semibold text-primary'
                        }
                      >
                        {job.type}
                      </span>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-neutral-600">
                      <MapPin className="h-4 w-4 text-accent-700" />
                      <span className="font-body text-sm">{job.location}</span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-neutral-600">
                      {job.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button
                      href={`/contact?subject=Career Application: ${encodeURIComponent(job.title)}`}
                      variant="accent"
                      size="sm"
                      className="group/btn gap-2"
                    >
                      Apply Now
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-8xl">
            <SectionHeading
              title="Our Culture"
              subtitle="Life at CTS"
              description="At CTS Offshore and Marine, we believe that our people are the foundation of our success."
            />

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-8">
                <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                  Safety First, Always
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-600">
                  Safety is not just a policy at CTS - it is a core value embedded in everything we
                  do. Our ISO 45001 certification reflects our unwavering commitment to the health
                  and safety of every team member, whether they are in the office or deployed on a
                  vessel thousands of miles from home.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-8">
                <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                  Diversity & Inclusion
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-600">
                  With team members from dozens of nationalities across eight countries, diversity is
                  at the heart of who we are. We celebrate different perspectives and backgrounds,
                  knowing that our diverse workforce drives innovation and delivers better outcomes
                  for our clients.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-8">
                <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                  Continuous Learning
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-600">
                  The marine and offshore industry is constantly evolving, and so are we. CTS
                  invests in ongoing training, professional development, and certification programs
                  to ensure our people stay at the forefront of industry best practices and emerging
                  technologies.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-8">
                <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                  Team Spirit
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-600">
                  Whether on a platform in the North Sea or in our London headquarters, the CTS
                  team spirit shines through. We work collaboratively, support one another through
                  challenging projects, and celebrate our successes together as one global family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Don't See the Right Role?"
        description="We are always interested in hearing from talented professionals. Send us your CV and our team will be in touch when a suitable opportunity arises."
        primaryCTA={{ label: 'Send Us Your CV', href: '/contact?subject=CV Submission' }}
        secondaryCTA={{ label: 'Call Us Now', href: `tel:${COMPANY.phone}` }}
      />
    </>
  )
}
