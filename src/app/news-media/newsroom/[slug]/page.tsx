import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import { COMPANY, NEWS_ITEMS } from '@/lib/constants'
import { PAGE_BANNERS } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = NEWS_ITEMS.find((n) => n.slug === slug)
  if (!item) return { title: `Newsroom | ${COMPANY.shortName}` }
  return {
    title: `${item.title} | ${COMPANY.shortName}`,
    description: item.summary,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function NewsItemPage({ params }: Props) {
  const { slug } = await params
  const item = NEWS_ITEMS.find((n) => n.slug === slug)

  if (!item) notFound()

  const related = NEWS_ITEMS.filter((n) => n.slug !== item.slug && n.category === item.category).slice(0, 3)
  const fallbackRelated = related.length > 0 ? related : NEWS_ITEMS.filter((n) => n.slug !== item.slug).slice(0, 3)

  return (
    <>
      <Hero
        variant="page"
        title="Newsroom"
        subtitle="LATEST UPDATES, EVENTS, AND INDUSTRY ACTIVITY."
        backgroundImage={PAGE_BANNERS.newsroom}
        breadcrumbs={[
          { label: 'News & Media', href: '/news-media' },
          { label: 'Newsroom', href: '/news-media/newsroom' },
          { label: item.title, href: `/news-media/newsroom/${item.slug}` },
        ]}
      />

      {/* Article — left content, right square image */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Back link */}
          <Link
            href="/news-media/newsroom"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Newsroom
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* LEFT — text content */}
            <div className="flex-1 min-w-0">
              {/* Meta */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                  <Tag className="h-3 w-3" />
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.date)}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-5 font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl">
                {item.title}
              </h1>

              {/* Summary */}
              <p className="mb-7 font-body text-lg leading-relaxed text-neutral-600 border-l-4 border-accent pl-5">
                {item.summary}
              </p>

              {/* Body paragraphs */}
              <div className="space-y-5">
                {item.body.map((paragraph, i) => (
                  <p key={i} className="font-body text-base leading-relaxed text-neutral-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT — square image */}
            <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related articles */}
      {fallbackRelated.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto w-full px-6 lg:px-12">
            <h2 className="mb-8 font-heading text-2xl font-bold text-primary">More from Newsroom</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {fallbackRelated.map((rel) => (
                <Link key={rel.slug} href={`/news-media/newsroom/${rel.slug}`} className="group block">
                  <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                          {rel.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="mb-2 text-xs text-neutral-500">{formatDate(rel.date)}</p>
                      <h3 className="font-heading text-base font-bold text-primary line-clamp-2 group-hover:text-primary-600">
                        {rel.title}
                      </h3>
                      <p className="mt-2 font-body text-sm text-neutral-600 line-clamp-2">{rel.summary}</p>
                      <div className="mt-3 text-sm font-semibold text-primary group-hover:text-accent-700">
                        Read More →
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
