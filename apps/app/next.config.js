/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  distDir: 'build',
  experimental: {
    transpilePackages: ['@acme/ui'],
  },
}

module.exports = nextConfig
