'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'


interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  variant?: 'home' | 'page'
  breadcrumbs?: { label: string; href: string }[]
  backgroundImage?: string
  backgroundVideo ?:string
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'home',
  breadcrumbs,
  backgroundImage,
  backgroundVideo,
}: HeroProps) {
  const ref = useRef<HTMLElement>(null)

  const isHome = variant === 'home'

  return (
    <section
      ref={ref}
      className={cn(
        'relative flex items-center md:items-center md:justify-center overflow-hidden bg-primary',
        isHome ? 'min-h-[70svh] md:min-h-screen' : 'py-20 md:py-35',
      )}
    >
      {/* Background image */}
      {backgroundImage && (  <Image
    src={backgroundImage}
    alt={title}
    fill
    priority
    fetchPriority="high"
    sizes="100vw"
    className="object-cover"
  />)}
        <div className="absolute inset-0 z-0">
         {backgroundVideo ? (
  <video
    className="absolute inset-0 h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={backgroundVideo} type="video/mp4" />
  </video>
) : (
  <Image
    src={backgroundImage || ''}
    alt={title}
    fill
    className="object-cover"
  />
)}







          {/* <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          /> */}
        </div>
      {/* )} */}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: backgroundImage
            ? 'linear-gradient(135deg, rgba(0,41,106,0.85) 0%, rgba(0,41,106,0.6) 100%)'
            : 'linear-gradient(135deg, rgba(0,41,106,0.85) 0%, rgba(0,41,106,0.65) 100%)',
        }}
      />

      {/* Decorative accent element */}
      <div
        className="absolute -right-32 -top-32 z-[2] h-[500px] w-[500px] rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(220,249,83,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 mx-auto w-full  px-6 lg:px-10 py-4 md:py-0">
        {/* Breadcrumbs for page variant - Hidden */}
        {/* {!isHome && breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3 text-white/40" />
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-accent">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )} */}

        <div className={cn('w-full', isHome && 'mx-auto text-center')}>
          {/* Subtitle / eyebrow */}
          {subtitle && (
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={cn(
                'mb-4 font-body text-sm font-semibold uppercase tracking-widest text-accent',
                isHome && 'text-base'
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={cn(
              'font-heading font-bold leading-tight text-white',
              isHome
                ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                : 'text-3xl sm:text-4xl md:text-5xl'
            )}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={cn(
                'mt-6 font-body text-lg leading-relaxed text-white/80',
                isHome && 'text-base md:text-xl'
              )}
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={cn(
                'mt-10 flex gap-4',
                isHome
                  ? 'flex-col items-center justify-center sm:flex-row'
                  : 'flex-wrap'
              )}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-primary transition-all duration-200 hover:bg-accent-200 hover:shadow-lg"
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {/* Scroll indicator for home variant */}
        {isHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' as const }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-body text-xs uppercase tracking-widest text-white/50">
                Scroll
              </span>
              <div className="h-10 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
