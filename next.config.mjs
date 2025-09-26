import { withPayload } from "@payloadcms/next/withPayload"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      ".cjs": [".cts", ".cjs"],
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
    }

    return webpackConfig
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Настройка кеширования для динамических страниц
  experimental: {
    staleTimes: {
      dynamic: 60, // 60 секунд для динамических страниц
    },
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
