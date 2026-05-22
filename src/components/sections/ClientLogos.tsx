// 'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CLIENT_LOGOS } from '@/lib/constants'

// Split logos into two rows
const half = Math.ceil(CLIENT_LOGOS.length / 2)
const ROW_1 = CLIENT_LOGOS.slice(0, half)
const ROW_2 = CLIENT_LOGOS.slice(half)

function LogoItem({ logo }: { logo: (typeof CLIENT_LOGOS)[number] }) {
  return (
    <div className="flex h-24 w-60 shrink-0 items-center justify-center px-6">
      <Image
        src={logo.src}
        alt={logo.name}
        width={240}
        height={84}
        className="h-[4.5rem] w-auto max-w-[210px] object-contain opacity-70 transition-all duration-300 hover:opacity-100"
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent && !parent.querySelector('span')) {
            const span = document.createElement('span')
            span.className =
              'font-heading text-sm font-bold text-primary/40 text-center whitespace-nowrap'
            span.textContent = logo.name
            parent.appendChild(span)
          }
        }}
      />
    </div>
  )
}

function CarouselRow({
  logos,
  direction = 'left',
  duration = 40,
}: {
  logos: readonly (typeof CLIENT_LOGOS)[number][]
  direction?: 'left' | 'right'
  duration?: number
}) {
  // Duplicate the list so the scroll appears infinite
  const items = [...logos, ...logos]

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-50 to-transparent" />

      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === 'left'
            ? ['0%', '-50%']
            : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
      >
        {items.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </motion.div>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="bg-neutral-50 py-16 hidden sm:block">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="inline-block rounded-full bg-accent px-4 py-1 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted Worldwide
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary sm:text-3xl">
            Our Clients
          </h2>
        </motion.div>

        {/* Double-line carousel */}
        <div className="space-y-4">
          <CarouselRow logos={ROW_1} direction="left" duration={45} />
          <CarouselRow logos={ROW_2} direction="right" duration={50} />
        </div>
      </div>
    </section>
  )
}
