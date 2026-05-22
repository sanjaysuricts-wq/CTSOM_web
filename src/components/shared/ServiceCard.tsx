

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import * as icons from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LucideProps } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  slug: string
  features?: string[]
  variant?: 'grid' | 'detail'
}

function getIcon(name: string): ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>> | null {
  const Icon = (icons as Record<string, unknown>)[name] as
    | ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    | undefined
  return Icon ?? null
}

export default function ServiceCard({
  title,
  description,
  icon,
  slug,
  features = [],
  variant = 'grid',
}: ServiceCardProps) {
  const Icon = getIcon(icon)

  return (
    <Link href={`/services/${slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'flex h-full flex-col rounded-xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg',
          variant === 'grid' ? 'p-6' : 'p-8'
        )}
      >
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-heading font-semibold text-primary',
            variant === 'grid' ? 'mb-2 text-lg' : 'mb-3 text-xl'
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            'font-body leading-relaxed text-neutral-600',
            variant === 'grid' ? 'line-clamp-3 text-sm' : 'text-base'
          )}
        >
          {description}
        </p>

        {/* Feature list for detail variant */}
        {variant === 'detail' && features.length > 0 && (
          <ul className="mt-6 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Read more indicator */}
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent-600">
            Learn more
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
