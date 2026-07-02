const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jchplqfeqobfiuoihfat.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};
