import { MetadataRoute } from "next"
import { getPayload } from "payload"
import config from "@/payload.config"

export const revalidate = 60 // Кеширование на 60 секунд

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  // Получаем все страницы
  const pages = await payload.find({
    collection: "pages",
    limit: 1000,
  })

  // Базовый URL сайта
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://example.com"

  // Статические маршруты
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Динамические маршруты из страниц
  const dynamicRoutes: MetadataRoute.Sitemap = pages.docs.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: "weekly" as const,
    priority: page.slug === "index" ? 1 : 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
