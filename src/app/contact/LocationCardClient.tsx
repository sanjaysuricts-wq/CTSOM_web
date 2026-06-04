'use client'

import { useState } from 'react'
import { MapPin, Plus, X } from 'lucide-react'

type Location = {
    city: string
    country: string
    email: string
    address: string
    isHQ: boolean
    services: readonly string[]
    workshopAddress?: string

}
type Props={
    location: Location
  isOpen: boolean
  onToggle: () => void  
    


}

export default function LocationCardClient({
    location, isOpen, onToggle
}: Props) 
   
 {
    // const [open, setOpen] = useState(false)

    return (
        <div className="relative rounded-xl border border-neutral-100 bg-white p-6 transition-all duration-200 hover:shadow-md self-start">

            {/* PLUS BUTTON (top right) */}
            <button
                onClick={onToggle}
                className="absolute right-3 top-3 rounded-full p-1 hover:bg-neutral-100"
            >
                {isOpen ? <X size={16} /> : <Plus size={16} />}
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-600" />
                <h3 className="font-heading text-base font-bold text-primary">
                    {location.city}
                </h3>

                {location.isHQ && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase">
                        HQ
                    </span>
                )}
            </div>

            <p className="mt-1 text-sm text-neutral-500">{location.country}</p>

            <a
                href={`mailto:${location.email}`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent-700"
            >
                {location.email}
            </a>

            {/* EXPANDABLE CONTENT */}
            {isOpen && (
                <div className="mt-4 border-t pt-3 space-y-3">
                    <div>
                        <p className="text-xs text-neutral-500">Office Address</p>
                        <p className="text-sm">{location.address}</p>
                    </div>

                    {location.workshopAddress && (
                        <div className="border-t pt-3">
                            <p className="text-xs text-neutral-500">Workshop Address</p>
                            <p className="text-sm">{location.workshopAddress}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}