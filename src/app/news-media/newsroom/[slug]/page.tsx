import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import { COMPANY } from '@/lib/constants'
import { PAGE_BANNERS } from '@/lib/constants'
import { supabase } from "@/lib/supabase"

interface Props {
  params: { slug: string }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ── Metadata (dynamic from Supabase)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const { data: item } = await supabase
    .from("newsroom")
    .select("Title, summary")
    .eq("slug", slug)
    .single()

  if (!item) {
    return {
      title: `Newsroom | ${COMPANY.shortName}`,
    }
  }

  return {
    title: `${item.Title} | ${COMPANY.shortName}`,
    description: item.summary,
  }
}


// ── Page
export default async function NewsItemPage({ params }: Props) {
  const { slug } = params

  // MAIN ARTICLE
  const { data: item, error } = await supabase
    .from("newsroom")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !item) {
    notFound()
  }

  // RELATED ARTICLES
  const { data: related } = await supabase
    .from("newsroom")
    .select("*")
    .eq("category", item.category)
    .neq("slug", slug)
    .limit(3)

  const { data: fallbackRelated } = await supabase
    .from("newsroom")
    .select("*")
    .neq("slug", slug)
    .limit(3)

  const finalRelated: any[] =
    (related && related.length > 0 ? related : fallbackRelated) || []

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

      {/* ARTICLE */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6 lg:px-12">

          <Link
            href="/news-media/newsroom"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Newsroom
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* LEFT */}
            <div className="flex-1 min-w-0">

              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                  <Tag className="h-3 w-3" />
                  {item.Category}
                </span>

                <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.Date)}
                </span>
              </div>

              <h1 className="mb-5 text-3xl font-bold text-primary sm:text-4xl">
                {item.title}
              </h1>

              <p className="mb-7 text-lg text-neutral-600 border-l-4 border-accent pl-5">
                {item.summary}
              </p>

              {/* BODY (FIXED → string not array) */}
              <div className="space-y-5 text-neutral-700 leading-relaxed">
                {item.body?.split("\n").map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-[380px] xl:w-[420px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={item.image_url}
                  alt={item.Title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED */}
      {finalRelated?.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="mb-8 text-2xl font-bold text-primary">
              More from Newsroom
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {finalRelated.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/news-media/newsroom/${rel.slug}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={rel.image_url}
                        alt={rel.Title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-5">
                      <p className=" mb-1 text-xs text-neutral-500">
                        {formatDate(rel.Date)}
                      </p>

                      <h3 className="font-heading text-base font-bold text-primary line-clamp-2 group-hover:text-primary-600">
                        {rel.Title}
                      </h3>

                      <p className="text-sm text-neutral-600 line-clamp-2 mt-2">
                        {rel.summary}
                      </p>
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