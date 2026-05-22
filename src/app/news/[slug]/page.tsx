import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
// import NewsCard from '@/components/shared/NewsCard'
import { COMPANY } from '@/lib/constants'
import { cn } from '@/lib/utils'

const NEWS_ARTICLES = [
  {
    slug: 'cts-expands-operations-to-brazil',
    title: 'CTS Expands Operations to Brazil',
    excerpt:
      'CTS Offshore and Marine has officially opened its new office in Rio de Janeiro, Brazil, strengthening our presence in one of the world\'s most dynamic offshore energy markets.',
    category: 'Company News',
    date: '2024-01-15',
    content: [
      'CTS Offshore and Marine is pleased to announce the official opening of our new operational base in Rio de Janeiro, Brazil. This strategic expansion marks a significant milestone in our global growth strategy, positioning us at the heart of one of the world\'s most active offshore energy regions. The new office will serve as our hub for operations across South America, enabling us to deliver faster response times and dedicated local support to clients operating in the pre-salt fields of the Santos Basin and beyond.',
      'Brazil\'s offshore oil and gas sector continues to see substantial investment, with major operators expanding their FPSO fleets and deepwater production capabilities. Our new presence in Rio de Janeiro allows us to provide comprehensive in-situ asset integrity services, including generator overhauls, steel and pipe fabrication, NDT inspections, and riding team deployments, directly to clients in the region without the logistical challenges of mobilising from overseas.',
      'The Rio de Janeiro office is staffed by a team of experienced local engineers and project managers, supported by our global network of technical specialists. This combination of local expertise and international best practices ensures that our clients in Brazil receive the same world-class service that CTS is known for across our nine global locations.',
      'As part of our commitment to the Brazilian market, we have also established partnerships with local suppliers and training institutions, ensuring a robust supply chain and a pipeline of skilled technicians for the years ahead. We look forward to supporting our existing and new clients as they develop Brazil\'s vast offshore resources.',
    ],
  },
  {
    slug: 'future-of-offshore-wind-vessel-maintenance',
    title: 'The Future of Offshore Wind Vessel Maintenance',
    excerpt:
      'As the offshore wind sector continues its rapid growth, vessel maintenance strategies are evolving to meet new challenges.',
    category: 'Industry News',
    date: '2024-01-10',
    content: [
      'The offshore wind industry is experiencing unprecedented growth, with new wind farms being planned and constructed across Europe, Asia, and increasingly in North America. This expansion is driving significant demand for Service Operation Vessels (SOVs), Crew Transfer Vessels (CTVs), and specialised installation vessels, all of which require robust maintenance programmes to ensure operational availability and safety.',
      'Traditional maintenance approaches, often borrowed from the oil and gas sector, are being adapted and enhanced to meet the unique demands of wind farm operations. Vessels operating in the offshore wind sector face distinct challenges: high utilisation rates, exposure to harsh weather conditions, and the need for rapid turnaround between campaigns. As a result, maintenance strategies are shifting towards more predictive and condition-based approaches, leveraging data analytics and sensor technology to anticipate failures before they occur.',
      'Riding teams play a crucial role in this evolving landscape. Skilled multi-discipline technicians who can perform mechanical, electrical, and structural maintenance while vessels remain operational are in high demand. At CTS Offshore and Marine, we have developed specialised riding team programmes tailored to the offshore wind sector, providing clients with flexible, highly skilled personnel who understand the unique operational requirements of wind farm support vessels.',
      'Looking ahead, we expect to see further integration of digital technologies into vessel maintenance programmes, including the use of augmented reality for remote technical support, drone-based inspections, and AI-powered predictive maintenance systems. These innovations, combined with the hands-on expertise of experienced marine engineers, will define the future of offshore wind vessel maintenance.',
    ],
  },
  {
    slug: 'understanding-ndt-inspection-requirements-fpso',
    title: 'Understanding NDT Inspection Requirements for FPSO Vessels',
    excerpt:
      'Non-destructive testing is a critical component of FPSO asset integrity management. This article examines the key NDT inspection requirements.',
    category: 'Technical Articles',
    date: '2024-01-05',
    content: [
      'Floating Production Storage and Offloading (FPSO) vessels are among the most complex and valuable assets in the offshore oil and gas industry. Maintaining the structural and mechanical integrity of these vessels is paramount to ensuring safe, uninterrupted production. Non-destructive testing (NDT) plays a central role in FPSO asset integrity management, providing the means to assess the condition of critical components without causing damage or requiring costly shutdowns.',
      'The primary NDT techniques employed on FPSO vessels include Ultrasonic Thickness Measurement (UTM) for assessing hull and structural steel thickness, Magnetic Particle Inspection (MPI) for detecting surface and near-surface cracks in welds and structural members, and Liquid Penetrant Testing (LPT) for identifying surface-breaking defects in non-ferromagnetic materials. Each technique serves a specific purpose within the overall inspection programme, and selecting the appropriate method depends on factors such as the material being inspected, the type of defect being sought, and the accessibility of the inspection area.',
      'Class society requirements, such as those set by Lloyd\'s Register, DNV, Bureau Veritas, and ABS, define the minimum inspection scope and frequency for FPSO vessels. These requirements typically include periodic hull thickness surveys, structural member inspections, and weld integrity assessments. However, best practice dictates going beyond minimum class requirements by implementing risk-based inspection (RBI) programmes that prioritise inspection efforts based on the likelihood and consequence of failure.',
      'CTS Offshore and Marine provides comprehensive NDT inspection services for FPSO vessels, delivered by qualified and certified NDT technicians with extensive offshore experience. Our inspection teams are equipped with the latest digital equipment, including phased array ultrasonics and time-of-flight diffraction (TOFD) systems, enabling accurate, efficient inspections that minimise operational disruption while maximising the value of the data collected.',
    ],
  },
  {
    slug: 'cts-achieves-iso-45001-recertification',
    title: 'CTS Achieves ISO 45001:2018 Recertification',
    excerpt:
      'We are proud to announce the successful recertification of our ISO 45001:2018 Occupational Health and Safety Management System.',
    category: 'Company News',
    date: '2023-12-20',
    content: [
      'CTS Offshore and Marine is delighted to confirm the successful recertification of our ISO 45001:2018 Occupational Health and Safety Management System following a comprehensive audit conducted by our accredited certification body. This recertification demonstrates our ongoing commitment to providing a safe and healthy working environment for all our employees, contractors, and stakeholders across our global operations.',
      'The ISO 45001:2018 standard represents the international benchmark for occupational health and safety management. Achieving and maintaining this certification requires organisations to demonstrate a systematic approach to identifying hazards, assessing risks, and implementing effective controls to prevent work-related injury and ill health. The recertification audit assessed all aspects of our OH&S management system, including leadership commitment, worker participation, risk management processes, and continual improvement mechanisms.',
      'Safety is not just a compliance requirement at CTS — it is a core value that underpins everything we do. Working in the offshore and marine environment presents inherent hazards, from working at height and in confined spaces to handling heavy machinery and operating in remote locations. Our ISO 45001:2018 certified management system ensures that these risks are systematically identified, assessed, and managed through robust procedures, comprehensive training, and a strong safety culture that empowers every team member to speak up and stop work if they identify unsafe conditions.',
      'This recertification complements our existing ISO 9001:2015 (Quality Management) and ISO 14001:2015 (Environmental Management) certifications, providing our clients with the assurance that CTS operates to the highest international standards across all aspects of our business. We remain committed to continuous improvement and to achieving our ultimate goal of zero harm across all our operations worldwide.',
    ],
  },
  {
    slug: 'caterpillar-marine-engine-overhaul-best-practices',
    title: 'Caterpillar Marine Engine Overhaul Best Practices',
    excerpt:
      'Caterpillar marine engines are the workhorses of the offshore and marine industry. In this technical guide, we share best practices for engine overhauls.',
    category: 'Technical Articles',
    date: '2023-12-15',
    content: [
      'Caterpillar marine engines are renowned for their reliability, power, and durability, making them the preferred choice for a wide range of offshore and marine applications, from FPSO power generation to vessel main propulsion and auxiliary systems. However, even the most robust engines require periodic overhauls to maintain peak performance, extend service life, and prevent unplanned breakdowns that can result in costly operational disruptions.',
      'A well-planned engine overhaul begins long before the first bolt is turned. Pre-overhaul preparations should include a comprehensive review of the engine\'s maintenance history, analysis of oil and coolant samples, assessment of running parameters and performance trends, and a detailed scope of work that identifies all components requiring inspection, repair, or replacement. This planning phase is critical to ensuring that the correct parts, tools, and specialist equipment are available on-site when the overhaul commences, minimising downtime and avoiding costly delays.',
      'During the overhaul itself, adherence to Caterpillar\'s recommended procedures and torque specifications is essential. Key areas of focus include cylinder liner and piston inspection, bearing clearance measurements, fuel injector testing and calibration, turbocharger inspection and balancing, and crankshaft deflection readings. All components should be meticulously cleaned, inspected, and measured against factory specifications, with any items falling outside tolerance limits being replaced with genuine Caterpillar parts to ensure optimal performance and reliability.',
      'Post-overhaul commissioning and testing are equally important. A structured start-up procedure, including pre-lubrication, controlled initial running at reduced load, and progressive load application, protects freshly assembled components and allows early identification of any issues. Performance testing at full load, combined with vibration analysis and exhaust gas temperature monitoring, confirms that the engine is operating within specification. At CTS, our experienced Caterpillar-trained engineers follow these best practices on every overhaul, delivering reliable results that our clients can depend on.',
    ],
  },
  {
    slug: 'renewable-energy-sector-growth-marine-services',
    title: 'Renewable Energy Sector Growth and Marine Services',
    excerpt:
      'The renewable energy sector is creating significant demand for marine support services. We examine how offshore wind is reshaping the marine services landscape.',
    category: 'Industry News',
    date: '2023-12-10',
    content: [
      'The global transition to renewable energy is gathering pace, with offshore wind energy leading the charge. Governments worldwide have set ambitious targets for offshore wind capacity, and the pipeline of planned projects is substantial. This growth trajectory is having a profound impact on the marine services sector, creating new opportunities and driving demand for skilled personnel, specialised vessels, and comprehensive maintenance solutions.',
      'The offshore wind sector requires a diverse fleet of vessels to support the construction, installation, operation, and maintenance of wind farms. From heavy-lift installation vessels and cable-laying ships to SOVs and CTVs, each vessel type has specific maintenance requirements that must be met to ensure safe and efficient operations. For marine service providers like CTS Offshore and Marine, this expanding fleet represents a significant growth opportunity, particularly for companies with the technical expertise and global reach to support operations across multiple geographies.',
      'One of the key challenges facing the offshore wind sector is the availability of skilled marine engineers and technicians. As the fleet grows, so does the demand for personnel with the experience and qualifications to maintain and repair complex marine systems. CTS is actively investing in training and development programmes to build the workforce of the future, combining traditional marine engineering skills with the specialist knowledge required for wind farm support operations.',
      'Looking ahead, the convergence of offshore wind with emerging technologies such as floating wind platforms, green hydrogen production, and offshore energy hubs will further expand the scope and complexity of marine support requirements. CTS Offshore and Marine is well positioned to support this evolution, with a proven track record in offshore asset integrity services, a global network of offices, and a commitment to innovation and continuous improvement that ensures we remain at the forefront of the marine services industry.',
    ],
  },
]

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: `Article Not Found | ${COMPANY.shortName}`,
    }
  }

  return {
    title: `${article.title} | ${COMPANY.shortName}`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-primary">
            Article Not Found
          </h1>
          <p className="mt-4 text-neutral-600">
            The article you are looking for could not be found.
          </p>
          <Link
            href="/news"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const relatedArticles = NEWS_ARTICLES.filter(
    (a) => a.slug !== article.slug
  ).slice(0, 2)

  const categoryColor: Record<string, string> = {
    'Company News': 'bg-accent text-primary',
    'Industry News': 'bg-primary-100 text-primary',
    'Technical Articles': 'bg-accent-600 text-white',
  }

  return (
    <>
      <Hero
        variant="page"
        title={article.title}
        breadcrumbs={[
          { label: 'News & Insights', href: '/news' },
          { label: article.title, href: `/news/${article.slug}` },
        ]}
      />

      {/* Article Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Back Link */}
            <Link
              href="/news"
              className="mb-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors hover:text-accent-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Insights
            </Link>

            {/* Meta info */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                <Calendar className="h-4 w-4 shrink-0" />
                <time dateTime={article.date}>{formattedDate}</time>
              </div>
              <span
                className={cn(
                  'inline-block rounded-full px-3 py-1 text-xs font-semibold',
                  categoryColor[article.category] || 'bg-accent text-primary'
                )}
              >
                {article.category}
              </span>
            </div>

            {/* Divider */}
            <div className="mb-10 h-px w-full bg-neutral-200" />

            {/* Article Body */}
            <div className="space-y-6">
              {article.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base leading-relaxed text-neutral-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags / Share area */}
            <div className="mt-12 flex items-center gap-2 border-t border-neutral-200 pt-8">
              <Tag className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-500">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-primary">
            Related Articles
          </h2>
          {/* <div className="mx-auto grid max-w-8xl gap-8 sm:grid-cols-2">
            {relatedArticles.map((related) => (
              <NewsCard
                key={related.slug}
                title={related.title}
                excerpt={related.excerpt}
                category={related.category}
                date={related.date}
                slug={related.slug}
              />
            ))}
          </div> */}
          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-3 font-heading text-sm font-bold uppercase tracking-wide text-primary transition-all duration-200 hover:bg-primary hover:text-white"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
