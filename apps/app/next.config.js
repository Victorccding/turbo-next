/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'standalone',
  experimental: {
    transpilePackages: ['@acme/ui'],
  },
}

module.exports = nextConfig
