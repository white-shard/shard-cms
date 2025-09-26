import { NextResponse } from "next/server"

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://example.com"

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
