/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      }
    ]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
