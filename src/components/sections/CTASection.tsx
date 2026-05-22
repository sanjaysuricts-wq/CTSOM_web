'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  backgroundImage?: string
}

export default function CTASection({
  title = 'Ready to Get Started?',
  description = `Contact our team for a consultation. Available ${COMPANY.availability} to support your operations worldwide.`,
  primaryCTA = { label: 'Contact Us', href: '/contact' },
  secondaryCTA = { label: 'Call Us Now', href: `tel:${COMPANY.phone}` },
  backgroundImage = '/images/lower_banners_home.webp',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        quality={80}
        priority={false}
      />

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,41,106,0.92) 0%, rgba(51,83,135,0.88) 100%)',
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(220,249,83,0.5) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(220,249,83,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/80"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={primaryCTA.href}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-primary transition-all duration-200 hover:bg-accent-200 hover:shadow-lg"
            >
              <ArrowRight className="h-4 w-4" />
              {primaryCTA.label}
            </Link>

          </motion.div>

          {/* Contact info teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-8 sm:flex-row"
          >
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-body text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {COMPANY.email}
            </a>
            <span className="hidden h-4 w-[1px] bg-white/20 sm:block" />
            <a
              href={`tel:${COMPANY.phone}`}
              className="font-body text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {COMPANY.phone}
            </a>
            <span className="hidden h-4 w-[1px] bg-white/20 sm:block" />
            <span className="font-body text-sm text-white/60">
              {COMPANY.availability} Global Support
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
