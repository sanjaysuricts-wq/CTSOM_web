import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { OrganizationSchema } from '@/components/shared/StructuredData'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import WhatsAppButton from '@/components/WhatsAppButton'
// import EmergencyChat from '@/components/ui/EmergencyChat' // Hidden temporarily


export const metadata: Metadata = {
  title: {
    template: '%s | CTS Offshore and Marine',
    default:
      'CTS Offshore and Marine | In-Situ Afloat Asset Integrity Services',
  },
  description:
    'CTS Offshore and Marine delivers worldwide in-situ afloat asset integrity services including generator repairs, steel fabrication, inspections, HVAC, riding teams, and spares supply. ISO certified, 24/7/365 support across 9 global locations.',
  metadataBase: new URL('https://www.ctsom.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.ctsom.com',
    siteName: 'CTS Offshore and Marine',
    title: 'CTS Offshore and Marine | In-Situ Afloat Asset Integrity Services',
    description:
      'Global marine engineering company providing 24/7/365 in-situ afloat asset integrity services across 8 countries worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTS Offshore and Marine',
    description:
      'Global marine engineering company providing 24/7/365 in-situ afloat asset integrity services.',
  },
    icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/android-chrome-512512.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OrganizationSchema />

        {/* Skip to content link for accessibility */}
        {/* <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to content
        </a> */}
        <GoogleAnalytics />

        <Header />

        <main id="main-content" className="min-h-screen">
          {children}
          <WhatsAppButton />

        </main>
        <CookieBanner />
        <Footer />
        {/* <EmergencyChat /> */} {/* Hidden temporarily */}

        {/* Zoho SalesIQ Chat Widget */}


      </body>
    </html>
  )
}
