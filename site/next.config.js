/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'My own workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nandonov.github.io/personal-kasm-registry',
    contactUrl: 'https://nandonov.github.io/personal-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/personal-kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
