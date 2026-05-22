

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NewsCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
}

export default function NewsCard({
  title,
  excerpt,
  category,
  date,
  slug,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const categoryColor: Record<string, string> = {
    'Company News': 'bg-accent text-primary',
    'Industry News': 'bg-primary-100 text-primary',
    'Technical Articles': 'bg-accent-600 text-white',
  }

  return (
    <Link href={`/news/${slug}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg"
      >
        {/* Placeholder image area */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary to-primary-600">
          <div
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, rgba(220,249,83,0.6) 0%, transparent 70%)',
            }}
          />
          {/* Category badge */}
          <div className="absolute bottom-4 left-4">
            <span
              className={cn(
                'inline-block rounded-full px-3 py-1 text-xs font-semibold',
                categoryColor[category] || 'bg-accent text-primary'
              )}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Date */}
          <div className="mb-3 flex items-center gap-1.5 text-xs text-neutral-500">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <time dateTime={date}>{formattedDate}</time>
          </div>

          {/* Title */}
          <h3 className="mb-2 font-heading text-lg font-semibold text-primary transition-colors group-hover:text-primary-600">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
            {excerpt}
          </p>

          {/* Read more */}
          <div className="flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent-600">
            Read Article
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
