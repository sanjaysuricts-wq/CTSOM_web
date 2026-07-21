// 'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'



export default function EntryPoints() {

  const [activeOption, setActiveOption] = useState<string | null>(null)
  const [selectedHref, setSelectedHref] = useState<string>('')
  const [selectedText, setSelectedText] = useState({
    line1: 'Mobilise a',
    line2: 'riding team',
    line3: 'Skilled riding crews offshore or in-yard, mobilised within 24 hours',
    line4: 'Bespoke Manpower Solutions',

  })
  const router = useRouter()

  const options = [
    { number: '01', shortText: '01 Mobilise a riding ...', line1: 'Mobilise a ', line2: 'riding team', line3: 'Skilled riding crews offshore or in-yard, mobilised within 24 hours', line4: 'Bespoke Manpower Solutions', href: '/services/bespoke-manpower-solutions' },
    { number: '02', shortText: '02 Overhaul a main...', line1: 'Overhaul a ', line2: 'main engine', line3: 'Main engine maintenance and overhauls, afloat or in drydock. Cat, Cummins, Wärtsilä, and MAN specialists', line4: 'Engine Maintenance Services', href: '/services/engine-maintenance-services' },
    { number: '03', shortText: '03 Support a new ..', line1: 'Support a', line2: 'new build', line3: 'Systems commissioned and brought online for new builds, upgrades, and integrations', line4: 'New Build Support', href: '/services/commissioning-support' },
    { number: '04', shortText: '04 Map liner wear ...', line1: 'Map  ', line2: 'liner wear', line3: 'Precise bore mapping and wear diagnostics for engines and cylinders', line4: '3D Liner Scanning', href: '/services/3d-liner-scanning' },
    { number: '05', shortText: '05 Source OEM spar..', line1: 'Source OEM spares ', line2: 'for a vessel', line3: 'Genuine OEM spares delivered in transit, in port, or offshore', line4: 'Spares Supply', href: '/services/spares-supply' },
    { number: '06', shortText: '06 Monitor asset ...', line1: 'Monitor asset  ', line2: 'condition', line3: 'Predictive monitoring that catches faults before they fail', line4: 'Thermography & Vibration Analysis', href: '/services/thermography-vibration-analysis' },
    { number: '07', shortText: '07 Cut emission and...', line1: 'Cut emissions and', line2: 'improve efficiency', line3: 'Emissions reduction and compliance across vessels and port operations', line4: 'Decarbonisation', href: '/services/decarbonisation' },
    { number: '08', shortText: '08 Green my port ..', line1: 'Green my ', line2: 'port operations', line3: 'Shore power and hydrogen infrastructure to cut port emissions and enable clean energy', line4: 'Shore Power & Hydrogen', href: '/services/Shore-Power-Hydrogen-Derivative' },
    { number: '09', shortText: '09 Future-proof my  ...', line1: 'Future-proof my', line2: 'piping systems', line3: 'Non-metal piping for seawater, HVAC, potable water, and fluid systems. Lighter, corrosion-free, built to last', line4: 'GF+ Piping Solutions', href: '/services/gf-piping-solutions' },
    { number: '10', shortText: '10 Stop the corross ...', line1: 'Stop the ', line2: 'corrosion', line3: 'Corrosion control, steel renewal, and protective coatings for marine and offshore assets', line4: 'Fabric Maintenance', href: '/services/fabric-maintenance' },
    { number: '11', shortText: '11 Repair without ...', line1: 'Repair without', line2: ' hot work shutdown', line3: 'for leak sealing, pipe repairs, and structural fixes in live production environments', line4: 'Cold Work Repairs', href: '/services/cold-work-repair-solutions' },
    { number: '12', shortText: '12 Deliver a turnkey ...', line1: 'Deliver a', line2: 'turnkey hook-up ', line3: 'End-to-end design, modification, hook-up, and commissioning', line4: 'Turnkey Engineering', href: '/services/engineering-support' },

    // components/EntryPoints.tsx
  ]
  return (

    <section className="w-full bg-primary">
      <div className="mx-auto w-full px-6 lg:px-12">



        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-[1.1]">
          <span className="block text-white/50 mb-1 font-normal tracking-wide text-5xl">
            <span className={` mr-6`}>I</span>

            <span className={` mr-6`}>NEED</span>

            <span>TO</span>
          </span>
          <span className=" mt-3 block text-accent mb-1 font-semi-bold tracking-tight text-accent sm:text-7xl lg:text-8xl">
            {selectedText.line1}
          </span>
          <span className="block text-white font-semi-bold tracking-tight text-accent sm:text-6xl lg:text-7xl mt-4">
            {selectedText.line2}
          </span>
          <span className="block text-white/50 mb-1 text-sm sm:text-base lg:text-lg font-normal leading-relaxed mt-4">
            {selectedText.line3}
          </span>
          <div className="mt-4 h-[1px] w-full max-w-[3900px] bg-white/50" />
        </h2>

        {/* LEFT SIDE */}

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-16 gap-y-10 mt-1 items-start">


          <div className="lg:col-span-8">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-2"

            // onMouseLeave={() =>
            //     setSelectedText({
            //         line1: 'mobilise a',
            //         line2: 'riding team',
            //         line3: 'Skilled riding crews offshore or in-yard, mobilised within 24 hours'
            //     })
            // }
            >
              {options.map((option) => (
                <button
                  key={option.number}
                  onClick={() => {
                    setSelectedText({
                      line1: option.line1,
                      line2: option.line2,
                      line3: option.line3,
                      line4: option.line4,

                    })

                    setActiveOption(option.number)
                    setSelectedHref(option.href)
                  }}
                  className={`group px-5 py-3.5 max-w-[390px] min-h-[50px] rounded-[40px] text-left text-sm transition-colors
    ${activeOption === option.number
                      ? 'bg-accent text-primary'
                      : 'bg-white/5 text-white/50'
                    }
    hover:bg-accent hover:text-primary
  `}
                >
                  {option.shortText}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="xl:col-span-4 lg:mt-10 xl:mt-0 flex flex-col justify-start text-left lg:pl-10 xl:pl-14">


            <div className="flex flex-col items-start text-left shrink-0 w-full ">
              <span className="text-sm uppercase tracking-[0.2em] text-accent mb-2">

                YOU’LL WANT
              </span>
              <h3 className="text-3xl font-semibold text-white leading-tight mb-2">
                <span className="block">
                  {selectedText.line4}
                </span>


              </h3>

              <div className="mt-2">
                <button
                  onClick={() => selectedHref && router.push(selectedHref)}
                  disabled={!selectedHref}
                  className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary transition-all hover:opacity-90 disabled:opacity-40 flex"
                >
                  Start a Brief
                </button>
              </div>
            </div>
          </div>
        </div>




        {/* <div className="mt-1 flex justify-end">
          <button
            onClick={() => selectedHref && router.push(selectedHref)}
            disabled={!selectedHref}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Start a Brief
          </button>
        </div> */}
      </div>
    </section>

  )
}

