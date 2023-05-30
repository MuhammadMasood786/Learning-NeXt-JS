/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["pbs.twimg.com"],
    },
    experimental: {
      appDir: true,
    },
}

module.exports = nextConfig
