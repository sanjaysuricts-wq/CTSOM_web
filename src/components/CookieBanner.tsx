'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent')
    if (!saved) setVisible(true)
  }, [])

  const saveConsent = (data: any) => {
    localStorage.setItem('cookie-consent', JSON.stringify(data))
    setVisible(false)
  }

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const closeAsReject = () => {
    rejectAll()
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-5 left-1/2 z-[9999] w-[97%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/40 bg-primary/95 p-5 shadow-2xl backdrop-blur-xl">

      {/* CLOSE BUTTON */}
{/* <button
  onClick={closeAsReject}
  className="absolute right-200 top-4 z-10 rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
>
  <X size={18} />
</button> */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

        <div className="max-w-xxl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Cookie Settings
          </p>

          <p className="mt-2 text-sm text-white/70">
            We use cookies to enhance your experience, analyse site usage, and support marketing. You can manage your preferences by category. Some cookies are essential ; others are optional.
          </p>

          {/* CUSTOMIZE PANEL */}
          {showCustomize && (
            <div className="mt-4 space-y-3 text-sm text-white/80">

              <div className="flex justify-between">
                <span>Necessary</span>
                <input type="checkbox" checked disabled />
              </div>

              <div className="flex justify-between">
                <span>Analytics & Perfomance </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
              </div>

              <div className="flex justify-between">
                <span>Marketing</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
              </div>

              <button
                onClick={() =>
                  saveConsent({
                    necessary: true,
                    analytics,
                    marketing,
                  })
                }
                className="mt-3 rounded-full bg-white px-6 py-2 text-sm font-semibold text-primary"
              >
                Save Preferences
              </button>
            </div>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">

          <button
            onClick={acceptAll}
            className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-primary"
          >
            Accept All
          </button>

          <button
            onClick={rejectAll}
            className="rounded-full border border-white/20 px-6 py-2 text-sm text-white"
          >
            Reject All
          </button>

          <button
            onClick={() => setShowCustomize(!showCustomize)}
            className="rounded-full border border-white/30 px-6 py-2 text-sm text-white"
          >
            Customize
          </button>

        </div>
      </div>
    </div>
  )
}