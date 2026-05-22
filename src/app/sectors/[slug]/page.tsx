import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Anchor, Wrench, Settings, ShieldCheck, Users, Wind, Droplets, Trash2, Zap, HardHat, RotateCcw, PackageX, Layers } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { SECTORS, COMPANY } from '@/lib/constants'

interface SectorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SECTORS.map((sector) => ({
    slug: sector.slug,
  }))
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { slug } = await params
  const sector = SECTORS.find((s) => s.slug === slug)

  if (!sector) {
    return { title: `Sector Not Found | ${COMPANY.shortName}` }
  }

  return {
    title: `${sector.title} | ${COMPANY.shortName}`,
    description: sector.description,
  }
}

export default async function SectorDetailPage({ params }: SectorPageProps) {
  const { slug } = await params
  const sector = SECTORS.find((s) => s.slug === slug)

  if (!sector) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary">Sector Not Found</h1>
        <p className="mt-4 max-w-md font-body text-lg text-neutral-600">
          The sector page you are looking for does not exist or may have been moved.
        </p>
        <Button href="/sectors" variant="primary" size="lg" className="mt-8">
          View All Sectors
        </Button>
      </div>
    )
  }

  const otherSectors = SECTORS.filter((s) => s.slug !== sector.slug)

  return (
    <>
      <Hero
        variant="page"
        title={sector.title}
        subtitle={sector.description}
        backgroundImage={sector.bannerImage}
        backgroundVideo={sector.bannerVideo}
        breadcrumbs={[
          { label: 'Sectors', href: '/sectors' },
          { label: sector.title, href: `/sectors/${sector.slug}` },
        ]}
      />

      {/* Oil & Gas-specific: Global Engineering Partner (above services) */}
      {sector.slug === 'oil-and-gas' && (
        <section className="bg-white py-20">
          <div className=" mx-auto w-full  px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Your Global Oil &amp; Gas Engineering Partner
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                CTSOM stands as a trusted partner in the oil and gas industry, delivering
                solutions built on precision, safety, and cutting-edge technology. Our
                unwavering dedication ensures we not only meet but exceed the dynamic
                demands of upstream and downstream operations worldwide.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {/* Live Production Repairs */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/sectors_oil and gas_Live Production Repairs2.webp"
                    alt="Live Production Repairs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Live Production Repairs
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Our specialist teams carry out critical repairs on live production assets,
                    minimising downtime while maintaining the highest safety standards. Using
                    advanced habitat welding and hot work techniques, we deliver safe, effective
                    interventions on pressurised systems and active process equipment — keeping
                    your operations running without costly shutdowns.
                  </p>
                </div>
              </div>

              {/* Reactivation and Cold Stacking */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Reactivation &amp; Cold Stacking
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    We provide comprehensive reactivation and cold stacking services for
                    offshore rigs and platforms. Whether preparing assets for long-term
                    preservation or returning them to operational readiness, our experienced
                    teams manage the full scope of works — from structural inspections and
                    corrosion protection to mechanical and electrical system reinstatement.
                  </p>
                </div>
                <div className="relative order-1 h-72 overflow-hidden rounded-xl lg:order-2 lg:h-96">
                  <Image
                    src="/images/04-sectors-oil-gas--oil-gas-rig-reactivation-jackup.jpg"
                    alt="Reactivation and Cold Stacking"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Fabric Maintenance */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/04-sectors-oil-gas--oil-gas-fabric-maintenance-painting.jpg"
                    alt="Fabric Maintenance"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Fabric Maintenance
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Our fabric maintenance services protect and extend the life of your
                    offshore and onshore assets. From surface preparation and protective
                    coatings to structural steel repairs and passive fire protection, we
                    deliver planned and reactive maintenance programmes that safeguard
                    asset integrity and ensure regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Marine-specific: Global Engineering Partner (above services) */}
      {sector.slug === 'marine' && (
        <section className="bg-white py-20">
          <div className=" mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Your Global Marine Engineering Partner
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                CTSOM delivers a comprehensive suite of marine engineering solutions built on
                precision, safety, and advanced technology. From decarbonisation and mechanical
                repairs to riding squads and spare parts supply, we are your steadfast partner
                in achieving maritime engineering excellence.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {/* Retrofits */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/sectors_marine_retrofits.webp"
                    alt="Marine Retrofits"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Retrofits
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    solutions for marine vessels, from scrubber
                    and BWTS installations to complete system upgrades. Our experienced project
                    teams manage the full scope of works — engineering, procurement, fabrication,
                    and installation — ensuring minimal downtime and full regulatory compliance
                    across your fleet.
                  </p>
                </div>
              </div>

              {/* Riding Teams */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Riding Teams
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Our skilled riding teams are deployed globally to complete repairs and
                    maintenance while your vessel stays in operation — eliminating the need
                    for dry docking and minimising downtime. With certified engineers, welders,
                    and fitters on board, we deliver quality workmanship at sea, keeping your
                    fleet moving and your schedule on track.
                  </p>
                </div>
                <div className="relative order-1 h-72 overflow-hidden rounded-xl lg:order-2 lg:h-96">
                  <Image
                    src="/images/sectors_marine_riding teams.webp"
                    alt="Riding Teams"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Engine Overhauls */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/cts_engine.webp"
                    alt="Engine Overhauls"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Engine Overhauls
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    We deliver expert diesel engine overhauls, repair, and maintenance by skilled
                    engineers with extensive shipyard, OEM, and sea-going experience. Available
                    globally from our network of locations, our teams ensure improved fuel economy,
                    reduced breakdowns, and extended engine life — keeping your fleet operating
                    at peak performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Renewables-specific: Global Engineering Partner (above services) */}
      {sector.slug === 'renewables' && (
        <section className="bg-white py-20">
          <div className=" mx-auto w-full  px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Your Global Renewables Engineering Partner
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                In the dynamic landscape of renewable energy, ensuring seamless operations
                and maintenance is pivotal for sustained efficiency. At CTSOM, we stand as
                your global engineering partner dedicated to fuelling progress in the green
                energy sector — from project inception to ongoing maintenance.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {/* Hook-up & Commissioning */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/Sectors_Renewables_Hook-up & Commissioning.webp"
                    alt="Hook-up and Commissioning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Hook-up &amp; Commissioning
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    We provide meticulous hook-up and commissioning support during critical
                    phases of renewable project initiation. Our multidisciplinary team ensures
                    that every connection, system integration, and safety check is completed
                    to the highest standards — setting the foundation for reliable, long-term
                    energy generation.
                  </p>
                </div>
              </div>

              {/* Corrosion Management */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Corrosion Management
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    We offer state-of-the-art corrosion management solutions that safeguard
                    your renewable infrastructure against environmental impacts. Our proactive
                    approach protects critical assets, extends their operational life, and
                    ensures the safety and environmental responsibility of your renewable
                    energy investments.
                  </p>
                </div>
                <div className="relative order-1 h-72 overflow-hidden rounded-xl lg:order-2 lg:h-96">
                  <Image
                    src="/images/Sectors_Renewables_Corrosion Management.webp"
                    alt="Corrosion Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Technical Access */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/sectors_renewables_technical access.webp"
                    alt="Technical Access Solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Technical Access
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Specialist rope access and height safety services for wind turbines and
                    offshore platforms, enabling safe inspection, maintenance, and repair at
                    height in challenging environments. Our certified technicians deliver
                    efficient access solutions that reduce the need for costly scaffolding and
                    heavy lifting equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cruise-specific: Global Engineering Partner (above services) */}
      {sector.slug === 'cruise-lines' && (
        <section className="bg-white py-20">
          <div className=" mx-auto w-full  px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Your Global Cruise Engineering Partner
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                CTS Offshore and Marine specialises in providing comprehensive turnkey
                outfitting solutions tailored specifically for cruise ships. Whether you
                require careful refitting around onboard passengers or large-scale outfitting
                projects during drydock or in-service periods, we have the expertise and
                experience to deliver exceptional results with minimal disruption.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {/* In-Service Refits & Maintenance */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/40.1---in-service-refits-and-maintenance.jpg"
                    alt="In-Service Refits and Maintenance"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    In-Service Refits &amp; Maintenance
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Keep your cruise ships in optimum condition with our in-service refits and
                    maintenance services. We understand the importance of minimising downtime
                    while ensuring that your vessels remain in top-notch shape to meet
                    passenger expectations and regulatory standards.
                  </p>
                </div>
              </div>

              {/* Lighting Upgrades & Installations */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Lighting Upgrades &amp; Installations
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Transform your vessel&apos;s ambience and energy efficiency with our
                    specialist lighting upgrade services. From LED retrofits and architectural
                    feature lighting to emergency and navigation systems, our teams deliver
                    bespoke lighting solutions that enhance guest experience while reducing
                    operational costs and meeting maritime safety regulations.
                  </p>
                </div>
                <div className="relative order-1 h-72 overflow-hidden rounded-xl lg:order-2 lg:h-96">
                  <Image
                    src="/images/40.2---large-scale-outfitting-projects.jpg"
                    alt="Lighting Upgrades and Installations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Plumbing and HVAC */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-xl lg:h-96">
                  <Image
                    src="/images/sectors_cruiselines_plumbing_hvac.webp"
                    alt="Plumbing and HVAC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Plumbing &amp; HVAC
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                    Our comprehensive plumbing and HVAC services cover system surveys,
                    equipment upgrades, humidity controls, and custom-built air handling units
                    for cruise vessels. From new installations to refurbishments, we ensure
                    optimal climate control and water systems that meet the exacting standards
                    of passenger comfort and maritime compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="bg-neutral-50 py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title={`${sector.title} Services`}
            subtitle="Our Service Verticals"
            description={`Explore our comprehensive range of ${sector.title.toLowerCase()} services, each delivered by experienced professionals with deep sector knowledge.`}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sector.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {service.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 font-body text-sm font-semibold text-accent-700 transition-colors group-hover:text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marine-specific: Specialist Services */}
      {sector.slug === 'marine' && (
        <section className="bg-neutral-50 py-20">
          <div className=" mx-auto w-full px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Specialist Marine Services
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                Our comprehensive range of specialist services covers every aspect of marine
                vessel maintenance, repair, and compliance — delivered by skilled teams globally.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Wrench,
                  title: 'Engine Overhauls',
                  desc: 'Routine diesel engine overhauls, repair, and maintenance by skilled engineers with shipyard, OEM, and sea-going experience. Available globally from seven locations for improved fuel economy and reduced breakdowns.',
                },
                {
                  icon: Settings,
                  title: 'Generator Service',
                  desc: 'Expert generator services from teams trained by MAN B&W, Sulzer, Wartsila, Cummins, and Caterpillar. Comprehensive overhaul, repair, and crankshaft renewals to ensure reliable power generation.',
                },
                {
                  icon: ShieldCheck,
                  title: '3D Liner Scanning',
                  desc: 'Proprietary 3D liner scanning deployed through scavenger ports — a 20-minute scan per liner providing wear rates, ovality, and remaining life data without engine immobilisation or mounting removal.',
                },
                {
                  icon: Anchor,
                  title: 'Inspection & Survey',
                  desc: 'Comprehensive surveys, NDT inspections, ultrasonic thickness measurement, and hull inspection surveys. Cost-efficient rope access for visual inspections with minimal operational disruption.',
                },
                {
                  icon: Users,
                  title: 'Riding Teams',
                  desc: 'Skilled riding teams deployed globally to complete repairs while your asset stays in operation — eliminating dry docking and minimising downtime with certified engineers, welders, and fitters.',
                },
                {
                  icon: Wind,
                  title: 'HVAC EPC',
                  desc: 'Full HVAC engineering, procurement, and construction for marine applications including system surveys, equipment upgrades, humidity controls, and custom-built air handling units.',
                },
                {
                  icon: Droplets,
                  title: 'Ballast Water Treatment',
                  desc: 'Round-the-clock BWTS services covering feasibility studies, 3D laser scanning, system selection, procurement, installation, commissioning, and training — fully IMO compliant.',
                },
                {
                  icon: Trash2,
                  title: 'Tank Cleaning',
                  desc: 'Thorough marine fuel tank cleaning services essential for IMO Sulphur Cap compliance. Expert double bottom tank cleaning removing residues and sludge to ensure effective low-sulphur fuel switching.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">{service.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Oil & Gas-specific: Specialist Services */}
      {sector.slug === 'oil-and-gas' && (
        <section className="bg-neutral-50 py-20">
          <div className=" mx-auto w-full  px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Specialist Oil &amp; Gas Services
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-neutral-700">
                From live production interventions to end-of-life decommissioning, our specialist
                services ensure the safety, performance, and longevity of your oil and gas assets.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  icon: Zap,
                  title: 'Live Production Repairs',
                  desc: 'Rapid on-the-spot repairs to minimise downtime — our skilled professionals respond promptly to equipment malfunctions and operational disruptions, keeping your production running smoothly.',
                },
                {
                  icon: HardHat,
                  title: 'Asset Maintenance',
                  desc: 'Comprehensive strategies to assess, monitor, and maintain the integrity of pipelines, platforms, and equipment — extending asset life through proactive risk management and cutting-edge technology.',
                },
                {
                  icon: RotateCcw,
                  title: 'Retrofits',
                  desc: 'Enhancing performance, efficiency, and compliance of existing infrastructure through process optimisation, safety upgrades, and integration of the latest industry advancements.',
                },
                {
                  icon: PackageX,
                  title: 'Decommissioning Support',
                  desc: 'Guiding you through responsible infrastructure retirement — from planning and risk assessment to execution and environmental remediation, ensuring full regulatory compliance.',
                },
                {
                  icon: Layers,
                  title: 'Sandwich Plate System (SPS)',
                  desc: 'A cost-effective, time-saving solution for steel repairs — reducing maintenance costs, minimising disruption with no shutdown required, and extending structure service life with a lower carbon footprint.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">{service.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Sectors */}
      <section className="bg-white py-20">
        <div className=" mx-auto w-full  px-6 lg:px-12">
          <SectionHeading
            title="Explore Other Sectors"
            description="Discover how CTS Offshore supports other industries with our comprehensive range of services."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                href={`/sectors/${s.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={s.bannerImage || ''}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-primary">{s.title}</h3>
                  <p className="mt-1 font-body text-xs text-neutral-600 line-clamp-1">{s.description}</p>
                  <span className="mt-1 inline-flex items-center gap-1 font-body text-xs font-semibold text-accent-700 transition-colors group-hover:text-primary">
                    View <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need ${sector.title} Support?`}
        description={`Our experienced team is ready to discuss your ${sector.title.toLowerCase()} requirements. Get in touch for a tailored solution.`}
      />
    </>
  )
}
