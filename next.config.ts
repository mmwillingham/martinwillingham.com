import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.join(__dirname),
  },
  output: 'export',          // <--- Forces Next.js to generate static HTML/CSS/JS files
  images: {
    unoptimized: true,       // <--- Disables dynamic image optimization API (required for static hosting)
  },
}

export default nextConfig
