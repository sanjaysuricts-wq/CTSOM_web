'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu as MenuIcon, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/lib/constants'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white',
          scrolled ? 'shadow-lg shadow-primary-900/5' : 'shadow-none'
        )}
      >
        {/* Top Bar */}
        <div
          className={cn(
            'bg-primary text-white transition-all duration-300 overflow-hidden',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-xs">
              <span className="hidden sm:inline text-primary-200">
                {COMPANY.tagline}
              </span>
              <div className="flex items-center gap-4 ml-auto">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-1.5 text-primary-200 hover:text-white transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300',
            scrolled ? 'py-2' : 'py-4'
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              <Image
                src="/images/CTS Logo Long(Blue).png"
                alt="CTS Offshore & Marine"
                width={280}
                height={40}
                priority
                className={cn(
                  'transition-all duration-300',
                  scrolled ? 'h-10 w-auto' : 'h-13 w-auto'
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <Navigation variant="dark" />

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 -mr-2 text-primary-600 hover:text-primary hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from jumping under fixed header */}
      <div className={cn('transition-all duration-300', scrolled ? 'h-[60px]' : 'h-[112px] sm:h-[120px]')} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
