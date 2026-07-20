import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { COMPANY,  } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { MapPin, Calendar, Building2, Ship, ArrowRight, CheckCircle2 } from 'lucide-react'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

// export async function generateStaticParams() {
//   return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
// }

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  // const study = CASE_STUDIES.find((cs) => cs.slug === slug)

  const { data: study, error } = await supabase
    .from("casestudies")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !study) notFound();


  if (!study) return { title: `Case Study | ${COMPANY.shortName}` }
  return {
    title: `${study.title} | ${COMPANY.shortName}`,
    description: study.summary,
  }
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  // const study = CASE_STUDIES.find((cs) => cs.slug === slug)

  const { data: study, error } = await supabase
    .from("casestudies")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !study) notFound();

  if (!study) {
    notFound()
  }

  // const relatedStudies = CASE_STUDIES.filter(
  //   (cs) => cs.slug !== study.slug && (cs.sector === study.sector || cs.category === study.category)
  // ).slice(0, 3)
  const { data: relatedStudiesRaw } = await supabase
    .from("casestudies")
    .select("*")
    .neq("slug", slug)
    .limit(3);

  const relatedStudies = relatedStudiesRaw ?? [];


  return (
    <>
      <Hero
        variant="page"
        title={study.title}
        subtitle={`${study.client}${study.vessel ? ` — ${study.vessel}` : ''}`}
        breadcrumbs={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: study.title, href: `/case-studies/${study.slug}` },
        ]}
      />

      {/* Hero Image */}
      <section className="bg-white">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="relative -mt-8 h-64 overflow-hidden rounded-xl sm:h-80 lg:h-96">
            <Image
              src={study.image_url}
              alt={study.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Meta Info Bar */}
      <section className="bg-white py-8">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-6 rounded-xl border border-neutral-100 bg-neutral-50 px-6 py-4 sm:gap-10">
            <div className="flex items-center gap-2 text-sm text-primary-700">
              <Building2 className="h-4 w-4 text-primary-400" />
              <span className="font-semibold">Client:</span> {study.client}
            </div>
            {study.vessel && (
              <div className="flex items-center gap-2 text-sm text-primary-700">
                <Ship className="h-4 w-4 text-primary-400" />
                <span className="font-semibold">Vessel:</span> {study.vessel}
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-primary-700">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span className="font-semibold">Location:</span> {study.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-700">
              <Calendar className="h-4 w-4 text-primary-400" />
              <span className="font-semibold">Date:</span> {study.date}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-3">
            <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
              {study.sector}
            </span>
            <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-primary">
              {study.category}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-8xl">
            {/* Overview */}
            {/* <div className="mb-12"> */}
              {/* <p className="font-body text-lg leading-relaxed text-neutral-700">
                {study.summary}
              </p> */}
            {/* </div> */}

            {/* Challenge */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                The Challenge
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-600">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Our Solution
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-600">
                {study.solution}
              </p>
            </div>

            {/* Result */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                The Result
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-600">
                {study.result}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
              <h3 className="mb-6 font-heading text-xl font-bold text-primary">
                Key Highlights
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {(study.highlights?.split(",") ?? []).map((highlight: string) => (
                  <div key={highlight.trim()} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" />
                    <span className="font-body text-sm font-medium text-primary-700">
                      {highlight.trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto w-full  px-6 lg:px-12">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
              Related Case Studies
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/case-studies/${related.slug}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={related.image_url}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                          {related.sector}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 font-heading text-base font-bold text-primary line-clamp-2 transition-colors group-hover:text-primary-600">
                        {related.title}
                      </h3>
                      <p className="text-xs text-neutral-500">{related.client} — {related.location}</p>
                      <div className="mt-3 flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent-700">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/case-studies" variant="outline" size="lg">
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Have a Similar Project?"
        description="Our team of experienced engineers and project managers is available 24/7/365 to discuss your requirements and provide a tailored solution."
      />
    </>
  )
}
