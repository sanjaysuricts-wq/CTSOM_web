import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, LinkedinIcon, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import { COMPANY, SECTORS, LOCATIONS } from '@/lib/constants'

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Services', href: '/services' },
  // { label: 'Case Studies', href: '/case-studies' },
  // { label: 'Media', href: '/media' }, // Hidden temporarily
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cts-offshore-and-marine', icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/_ctsom/', icon: Instagram },
  { label: 'Twitter', href: 'https://x.com/_ctsom', icon: Twitter },
  { label: 'Facebook', href: 'https://www.facebook.com/CTSOffshoreandMarine', icon: Facebook },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const hqLocation = LOCATIONS.find((loc) => loc.isHQ)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center group">
              <Image
                src="/images/30.9.4--CTS Logo Short(White).png"
                alt="CTS Offshore & Marine"
                width={300}
                height={120}
                className="h-10 sm:h-14 w-auto"
              />
            </Link>

            <p className="mt-4 text-sm text-primary-200 font-body leading-relaxed max-w-xs">
              {COMPANY.tagline}
            </p>
            <p className="mt-2 text-sm text-primary-300 font-body leading-relaxed max-w-xs">
              Delivering technical services to the marine, offshore, renewables, and cruise industries across {LOCATIONS.length} global locations.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-primary-300 hover:text-accent hover:bg-primary-600 rounded-lg transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="hidden md:block">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-primary-200 hover:text-accent transition-colors duration-200 font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div className="hidden md:block">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Sectors
            </h4>
            <ul className="mt-4 space-y-3">
              {SECTORS.map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="text-sm text-primary-200 hover:text-accent transition-colors duration-200 font-body"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-300 transition-colors duration-200 font-body font-medium"
                >
                  View All Services
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={" hidden md:block"}>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-sm text-primary-200 hover:text-accent transition-colors duration-200 font-body group"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-400 group-hover:text-accent transition-colors" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-primary-200 hover:text-accent transition-colors duration-200 font-body group"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-400 group-hover:text-accent transition-colors" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              {hqLocation && (
                <li>
                  <div className="flex items-start gap-3 text-sm text-primary-200 font-body">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-400" />
                    <span>{hqLocation.address}</span>
                  </div>
                </li>
              )}
              <li className={"pt-2 hidden md:block"}>
                <span className="block text-xs text-primary-400 uppercase tracking-wider font-heading mb-2">
                  Availability
                </span>
                <span className="text-sm text-accent font-semibold font-heading">
                  {COMPANY.availability}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-400/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-300 font-body">
            <p>
              &copy; {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="hover:text-primary-100 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
