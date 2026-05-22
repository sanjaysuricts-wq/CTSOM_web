

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseStudyCardProps {
  title: string
  category: string
  industry: string
  location: string
  summary: string
  slug: string
}

export default function CaseStudyCard({
  title,
  category,
  industry,
  location,
  summary,
  slug,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg"
      >
        {/* Placeholder image area */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary to-primary-600">
          {/* Decorative accent circle */}
          <div
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, rgba(220,249,83,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Category badge */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Industry tag */}
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
            {industry}
          </p>

          {/* Title */}
          <h3 className="mb-2 font-heading text-lg font-semibold text-primary transition-colors group-hover:text-primary-600">
            {title}
          </h3>

          {/* Summary */}
          <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-3">
            {summary}
          </p>

          {/* Location */}
          <div className="mb-4 flex items-center gap-1.5 text-sm text-neutral-500">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{location}</span>
          </div>

          {/* Read more */}
          <div className="flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent-600">
            Read More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
