/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    transpilePackages: ['@acme/ui'],
  },
}

module.exports = nextConfig
