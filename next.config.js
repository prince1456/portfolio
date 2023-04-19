/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    webUrl: process.env.URL 
  },
  images: {
    domains: ['howtocrackit.com', 'www.howtocrackit.com', 'howtocrackit.com/wp-content/uploads/2020/12'],
  }
}

module.exports = nextConfig
