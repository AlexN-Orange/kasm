/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'My own workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://alexn-orange.github.io/kasm',
    contactUrl: 'https://alexn-orange.github.io/kasm/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
