'use client'

import { useState } from 'react'
import LocationCardClient from './LocationCardClient'
import { LOCATIONS } from '@/lib/constants'

export default function LocationGridClient() {
  const [openCity, setOpenCity] = useState<string | null>(null)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {LOCATIONS.map((location) => (
        <LocationCardClient
          key={location.city}
          location={location}
          isOpen={openCity === location.city}
          onToggle={() =>
            setOpenCity(openCity === location.city ? null : location.city)
          }
        />
      ))}
    </div>
  )
}