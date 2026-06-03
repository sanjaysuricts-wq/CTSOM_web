'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Building2, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const countryFlags: Record<string, string> = {
  'United Kingdom': '\u{1F1EC}\u{1F1E7}',
  'United Arab Emirates': '\u{1F1E6}\u{1F1EA}',
  Singapore: '\u{1F1F8}\u{1F1EC}',
  India: '\u{1F1EE}\u{1F1F3}',
  Netherlands: '\u{1F1F3}\u{1F1F1}',
  Bulgaria: '\u{1F1E7}\u{1F1EC}',
  Romania: '\u{1F1F7}\u{1F1F4}',
  Brazil: '\u{1F1E7}\u{1F1F7}',
  Malaysia: '\u{1F1F2}\u{1F1FE}',
}

interface LocationCardProps {
  city: string
  country: string
  isHQ: boolean
  phone: string
  email: string
  address: string
  services: readonly string[]
}

export default function LocationCard({
  city,
  country,
  isHQ,
  phone,
  email,
  address,
  services,
}: LocationCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="group relative rounded-xl border border-neutral-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* HQ Badge */}
      {isHQ && (
        <div className="absolute -top-3 right-4 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
            <Building2 className="h-3 w-3" />
            HQ
          </span>
        </div>
      )}

      {/* Header – always visible, blue background */}
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          'flex cursor-pointer items-center gap-3 rounded-t-xl px-5 py-4 transition-colors duration-200',
          isHQ ? 'bg-primary' : 'bg-primary'
        )}
      >
        <span
          className="text-3xl"
          role="img"
          aria-label={`${country} flag`}
        >
          {countryFlags[country] || '\u{1F30D}'}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold text-white">
            {city}
          </h3>
          <p className="font-body text-xs text-white/60">{country}</p>
        </div>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-white/60 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </div>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-4 px-5 py-5">
              {/* Contact Details */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 font-body text-sm text-neutral-700 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-700" />
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 font-body text-sm text-neutral-700 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-700" />
                  {email}
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-accent-700" />
                  <span className="font-body text-sm text-neutral-700">
                    {address}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-neutral-100" />

              {/* Services */}
              <div>
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Services Available
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-1 font-body text-xs text-primary-400"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
