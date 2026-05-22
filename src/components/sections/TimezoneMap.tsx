'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from 'react-simple-maps'
import { LOCATIONS } from '@/lib/constants'

/* ── Natural Earth 110m countries ── */
const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

/* ── Brand palette ── */
const PRIMARY = '#00296A'
const ACCENT = '#DCF953'

/* ── Timezone definitions ── */
const TIMEZONE_REGIONS = [
  {
    region: 'Americas',
    tz: 'GMT-5 to GMT-3',
    offices: 'Rio de Janeiro',
    lngStart: -90,
    lngEnd: -30,
  },
  {
    region: 'Europe & Africa',
    tz: 'GMT to GMT+3',
    offices: 'London, Barendrecht, Varna, Galati',
    lngStart: -15,
    lngEnd: 45,
  },
  {
    region: 'Middle East & India',
    tz: 'GMT+4 to GMT+5:30',
    offices: 'Dubai, Mumbai',
    lngStart: 45,
    lngEnd: 82.5,
  },
  {
    region: 'Asia Pacific',
    tz: 'GMT+7 to GMT+8',
    offices: 'Singapore, Johor Bahru',
    lngStart: 97.5,
    lngEnd: 120,
  },
]

/*
 * Per-city label offsets (dx, dy from the dot) so labels don't overlap.
 * Positive dx = right, negative = left.  Positive dy = down, negative = up.
 */
const LABEL_OFFSETS: Record<string, { dx: number; dy: number }> = {
  London:          { dx: -55, dy: -40 },
  Barendrecht:     { dx: 50,  dy: -18 },
  Varna:           { dx: 45,  dy: 10 },
  Galati:          { dx: -50, dy: 18 },
  Dubai:           { dx: -45, dy: -20 },
  Mumbai:          { dx: 50,  dy: -10 },
  Singapore:       { dx: -60, dy: -30 },
  'Johor Bahru':   { dx: 55,  dy: 18 },
  'Rio de Janeiro':{ dx: 55,  dy: -25 },
}

/* ── Location marker with leader line ── */
const LocationMarker = memo(function LocationMarker({
  lat,
  lng,
  city,
  isHQ,
}: {
  lat: number
  lng: number
  city: string
  isHQ: boolean
}) {
  const offset = LABEL_OFFSETS[city] || { dx: 0, dy: -30 }
  const label = city + (isHQ ? ' (HQ)' : '')
  const labelW = label.length * 6.5 + 14

  return (
    <Marker coordinates={[lng, lat]}>
      {/* Pulse ring */}
      <circle r={isHQ ? 14 : 10} fill={ACCENT} opacity={0.25}>
        <animate
          attributeName="r"
          values={isHQ ? '10;22;10' : '8;16;8'}
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Dot */}
      <circle
        r={isHQ ? 6 : 4.5}
        fill={ACCENT}
        stroke={PRIMARY}
        strokeWidth={2}
      />

      {/* Leader line from dot to label */}
      <line
        x1={0}
        y1={0}
        x2={offset.dx}
        y2={offset.dy}
        stroke={ACCENT}
        strokeWidth={1}
        opacity={0.5}
      />

      {/* Small circle at line end */}
      <circle
        cx={offset.dx}
        cy={offset.dy}
        r={2}
        fill={ACCENT}
        opacity={0.5}
      />

      {/* Label background */}
      <rect
        x={offset.dx - labelW / 2}
        y={offset.dy - 9}
        width={labelW}
        height={18}
        rx={4}
        fill={PRIMARY}
        stroke={ACCENT}
        strokeWidth={0.5}
        opacity={0.95}
      />

      {/* Label text */}
      <text
        x={offset.dx}
        y={offset.dy + 4}
        textAnchor="middle"
        fill={ACCENT}
        fontSize={9}
        fontWeight={700}
        fontFamily="'DM Sans', sans-serif"
      >
        {label}
      </text>
    </Marker>
  )
})

/* ── Main component ── */
export default function TimezoneMap() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="inline-block rounded-full bg-accent px-4 py-1 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Timezone Coverage
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
            24/7/365 Global Coverage
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-sm leading-relaxed text-white/60">
            Our offices span every major timezone, ensuring there is always a
            CTS team awake, operational, and ready to respond.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Timezone band overlays (positioned absolutely over the map) */}
          <div className="pointer-events-none absolute inset-0 z-10">
            {TIMEZONE_REGIONS.map((zone) => {
              const left = ((zone.lngStart + 180) / 360) * 100
              const right = ((zone.lngEnd + 180) / 360) * 100
              const width = right - left
              return (
                <div
                  key={zone.region}
                  className="absolute top-0 h-full"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    background:
                      'linear-gradient(180deg, rgba(220,249,83,0.22) 0%, rgba(220,249,83,0.08) 50%, rgba(220,249,83,0.22) 100%)',
                    borderLeft: '1.5px dashed rgba(220,249,83,0.5)',
                    borderRight: '1.5px dashed rgba(220,249,83,0.5)',
                  }}
                >
                  {/* Timezone label at top */}
                  <div className="flex justify-center pt-2">
                    <span
                      className="rounded px-2 py-0.5 font-heading text-[10px] font-bold backdrop-blur-sm"
                      style={{ backgroundColor: PRIMARY, color: ACCENT }}
                    >
                      {zone.tz}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{
              center: [15, 10],
              scale: 160,
            }}
            style={{ backgroundColor: 'transparent' }}
            width={980}
            height={500}
          >
            {/* Graticule grid lines */}
            <Graticule stroke="rgba(255,255,255,0.08)" strokeWidth={0.3} />

            {/* Countries – white land masses floating on blue bg */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.15)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: 'rgba(255,255,255,0.25)' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Location markers */}
            {LOCATIONS.map((loc) => (
              <LocationMarker
                key={loc.city}
                lat={loc.lat}
                lng={loc.lng}
                city={loc.city}
                isHQ={loc.isHQ}
              />
            ))}
          </ComposableMap>
        </motion.div>

        {/* Timezone legend cards below map */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIMEZONE_REGIONS.map((zone) => (
            <motion.div
              key={zone.region}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="font-heading text-xs font-bold text-accent">
                  {zone.tz}
                </span>
              </div>
              <h3 className="font-heading text-sm font-bold text-white">
                {zone.region}
              </h3>
              <p className="mt-1 font-body text-xs text-white/50">
                {zone.offices}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
