import { MetadataRoute } from 'next'
import { SECTORS, SERVICE_PAGES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ctsom.com'

  const staticPages = [
    '',
    '/about',
    '/about/team',
    '/services',
    '/sectors',
    // '/media',
    '/locations',
    '/careers',
    '/contact',
    '/privacy',
    '/cookies',
    '/terms',
  ]

  const servicePages = SERVICE_PAGES.map((service) => `/services/${service.slug}`)
  const sectorPages = SECTORS.map((sector) => `/sectors/${sector.slug}`)

  const allPages = [...staticPages, ...servicePages, ...sectorPages]

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/') ? 0.7 : 0.8,
  }))
}
