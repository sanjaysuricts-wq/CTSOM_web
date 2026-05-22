import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
// import TeamMemberCard from '@/components/shared/TeamMemberCard'
// import { COMPANY, TEAM_MEMBERS } from '@/lib/constants'

// export const metadata: Metadata = {
//   title: 'Our Leadership Team',
//   description: `Meet the experienced leadership team behind ${COMPANY.name}. With decades of combined offshore and marine expertise, our leaders drive excellence across 9 global locations.`,
// }

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      {/* <Hero
        variant="page"
        title="Our Leadership Team"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Our Team', href: '/about/team' },
        ]}
      /> */}

      {/* Full Team Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Meet Our Leaders"
            subtitle="The experienced professionals driving CTS Offshore and Marine forward across the globe."
          />

          {/* <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} name={member.name} role={member.role} bio={member.bio} initials={member.initials} />
            ))}
          </div> */}
        </div>
      </section>

      {/* Company Culture */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-8xl">
            <SectionHeading
              title="Our Culture"
              subtitle="What it means to be part of the CTS team."
            />

            <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-primary-300">
              <p>
                At CTS Offshore and Marine, our people are our greatest asset.
                We have built a culture that values technical expertise,
                collaborative teamwork, and personal development -- creating an
                environment where talented professionals thrive and deliver
                exceptional results for our clients.
              </p>
              <p>
                Our team members come from diverse backgrounds and bring a
                wealth of experience from across the offshore, marine, and
                energy sectors. What unites us is a shared commitment to
                safety, quality, and going the extra mile to solve our
                clients&apos; most challenging problems.
              </p>
              <p>
                We invest in our people through continuous training,
                professional development programmes, and clear career
                progression pathways. Whether you are a coded welder, a marine
                engineer, or a project manager, CTS provides opportunities to
                grow your skills and advance your career while working on some
                of the most interesting projects in the industry.
              </p>
            </div>

            {/* Culture Highlights Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-100 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-primary">
                  Continuous Learning
                </h3>
                <p className="font-body text-sm leading-relaxed text-primary-300">
                  Ongoing training, certifications, and professional development
                  ensure our teams stay at the forefront of industry best
                  practice and emerging technologies.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-100 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.73-3.558"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-primary">
                  Global Opportunities
                </h3>
                <p className="font-body text-sm leading-relaxed text-primary-300">
                  With operations spanning 8 countries, our team members have the
                  opportunity to work on diverse projects across the world and
                  gain invaluable international experience.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-100 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-primary">
                  Safety-First Mindset
                </h3>
                <p className="font-body text-sm leading-relaxed text-primary-300">
                  Every team member is empowered and expected to prioritise
                  safety. Our zero-harm culture means everyone goes home safely
                  at the end of every shift.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-100 bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-primary">
                  Diverse & Inclusive
                </h3>
                <p className="font-body text-sm leading-relaxed text-primary-300">
                  We celebrate the diversity of our global workforce. Our
                  inclusive culture draws on different perspectives and
                  experiences to drive innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Careers */}
      <CTASection
        title="Join Our Team"
        description="We are always looking for skilled professionals to join our growing global team. If you are passionate about offshore and marine engineering, we would love to hear from you."
        primaryCTA={{ label: 'View Open Positions', href: '/careers' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
