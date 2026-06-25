import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  midImage?:string
  align?: 'left' | 'center' | 'right'
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left'
      )}
    >
      {/* Accent bar */}
      <div
        className={cn(
          'mb-2 h-1 w-12 rounded-full bg-accent',
          align === 'center' && 'mx-auto'
        )}
      />

      {/* Subtitle / eyebrow */}
      {subtitle && (
        <p
          className={cn(
            'mb-2 font-body text-sm font-semibold uppercase tracking-widest text-accent',
            light ? 'text-accent' : 'text-accent-700'
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2
        className={cn(
          'font-heading text-3xl font-bold md:text-4xl',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn( 'hidden sm:block',
            'mx-auto mt-4 max-w-4xl text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-neutral-600',
            align === 'left' && 'mx-0' 
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
