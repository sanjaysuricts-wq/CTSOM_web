// 'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LOCATIONS } from '@/lib/constants'

const countryFlags: Record<string, string> = {
  'United Kingdom': '\uD83C\uDDEC\uD83C\uDDE7',
  'United Arab Emirates': '\uD83C\uDDE6\uD83C\uDDEA',
  Singapore: '\uD83C\uDDF8\uD83C\uDDEC',
  India: '\uD83C\uDDEE\uD83C\uDDF3',
  Netherlands: '\uD83C\uDDF3\uD83C\uDDF1',
  Bulgaria: '\uD83C\uDDE7\uD83C\uDDEC',
  Romania: '\uD83C\uDDF7\uD83C\uDDF4',
  Brazil: '\uD83C\uDDE7\uD83C\uDDF7',
  Malaysia: '\uD83C\uDDF2\uD83C\uDDFE',
}

/**
 * Converts lat/lng coordinates to approximate SVG positions
 * on a simple equirectangular world map projection.
 * SVG viewBox is 1000 x 500. Longitude -180..180 maps to x 0..1000,
 * Latitude -90..90 maps to y 500..0.
 */
function coordsToSvg(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180) / 360) * 1000
  const y = ((90 - lat) / 180) * 500
  return { x, y }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function GlobalMap() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto w-full  px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <Globe className="h-8 w-8 text-accent-700" />
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Our Global Presence
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl font-body text-lg text-primary-300"
          >
            Strategically positioned across {LOCATIONS.length} locations to
            deliver rapid response and local expertise worldwide.
          </motion.p>
        </div>

        {/* SVG World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16 hidden overflow-hidden rounded-2xl bg-primary/5 p-8 md:block"
        >
          <svg
            viewBox="0 0 1000 500"
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified world outline paths */}
            <g fill="none" stroke="var(--color-primary, #00296A)" strokeWidth="0.8" opacity="0.15">
              {/* North America */}
              <path d="M120,120 L150,100 L180,95 L210,100 L240,110 L260,130 L270,160 L265,190 L250,210 L230,230 L210,240 L190,235 L170,240 L155,250 L140,260 L130,240 L125,220 L135,200 L130,180 L120,160 Z" />
              {/* South America */}
              <path d="M220,270 L240,260 L260,265 L275,280 L280,310 L285,340 L280,370 L270,395 L255,410 L240,400 L230,380 L225,350 L220,320 L215,290 Z" />
              {/* Europe */}
              <path d="M440,100 L460,95 L480,100 L500,105 L510,115 L520,130 L515,145 L505,155 L490,165 L475,170 L460,165 L445,155 L440,140 L435,120 Z" />
              {/* Africa */}
              <path d="M440,180 L460,175 L480,180 L500,195 L510,220 L515,250 L510,280 L500,310 L485,340 L470,355 L455,350 L445,330 L440,300 L435,270 L430,240 L435,210 Z" />
              {/* Asia */}
              <path d="M530,80 L570,75 L620,80 L670,90 L720,100 L760,110 L790,125 L800,145 L790,165 L770,180 L740,185 L710,180 L680,170 L650,160 L620,155 L590,150 L560,140 L540,130 L530,110 Z" />
              {/* Southeast Asia / Indonesia */}
              <path d="M700,200 L720,195 L745,200 L770,210 L780,225 L775,240 L760,250 L740,245 L720,240 L710,225 L705,210 Z" />
              {/* Australia */}
              <path d="M750,310 L780,300 L810,305 L835,315 L845,335 L840,355 L825,370 L800,375 L775,370 L760,355 L755,335 Z" />
            </g>

            {/* Grid lines */}
            <g stroke="var(--color-primary, #00296A)" strokeWidth="0.3" opacity="0.06">
              {[0, 100, 200, 300, 400, 500].map((y) => (
                <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} />
              ))}
              {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(
                (x) => (
                  <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="500" />
                )
              )}
            </g>

            {/* Location markers */}
            {LOCATIONS.map((loc, idx) => {
              const { x, y } = coordsToSvg(loc.lat, loc.lng)
              return (
                <g key={loc.city}>
                  {/* Pulse ring */}
                  <circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill={loc.isHQ ? 'var(--color-accent, #DCF953)' : 'var(--color-primary, #00296A)'}
                    opacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      values="8;18;8"
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${idx * 0.4}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.2;0.05;0.2"
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${idx * 0.4}s`}
                    />
                  </circle>

                  {/* Dot */}
                  <circle
                    cx={x}
                    cy={y}
                    r={loc.isHQ ? 6 : 4.5}
                    fill={loc.isHQ ? 'var(--color-accent, #DCF953)' : 'var(--color-primary, #00296A)'}
                    stroke="white"
                    strokeWidth="2"
                  />

                  {/* Label */}
                  <text
                    x={x}
                    y={y - 14}
                    textAnchor="middle"
                    fill="var(--color-primary, #00296A)"
                    fontSize="11"
                    fontWeight="600"
                    className="font-heading"
                  >
                    {loc.city}
                    {loc.isHQ ? ' (HQ)' : ''}
                  </text>
                </g>
              )
            })}
          </svg>
        </motion.div>

        {/* Location cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LOCATIONS.map((loc) => (
            <motion.div
              key={loc.city}
              variants={cardVariants}
              className={cn(
                'group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                loc.isHQ
                  ? 'border-accent/30 bg-primary text-white'
                  : 'border-neutral-100 bg-white'
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label={loc.country}>
                  {countryFlags[loc.country] || '\uD83C\uDF0D'}
                </span>
                <div>
                  <h3
                    className={cn(
                      'font-heading text-lg font-bold',
                      loc.isHQ ? 'text-white' : 'text-primary'
                    )}
                  >
                    {loc.city}
                  </h3>
                  <p
                    className={cn(
                      'font-body text-xs',
                      loc.isHQ ? 'text-white/70' : 'text-primary-300'
                    )}
                  >
                    {loc.country}
                  </p>
                </div>
                {loc.isHQ && (
                  <span className="ml-auto rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold uppercase text-primary">
                    HQ
                  </span>
                )}
              </div>

              <div className="flex items-start gap-2">
                <MapPin
                  className={cn(
                    'mt-0.5 h-4 w-4 flex-shrink-0',
                    loc.isHQ ? 'text-accent' : 'text-accent-700'
                  )}
                />
                <div className="flex flex-wrap gap-1">
                  {loc.services.map((service) => (
                    <span
                      key={service}
                      className={cn(
                        'rounded-full px-2 py-0.5 font-body text-xs',
                        loc.isHQ
                          ? 'bg-white/10 text-white/80'
                          : 'bg-primary/5 text-primary-300'
                      )}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
