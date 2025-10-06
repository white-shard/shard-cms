import config from "@/payload.config"
import { NextRequest, NextResponse } from "next/server"
import { getPayload } from "payload"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Проверяем настройки переадресаций
    const redirectOptions = await payload.findGlobal({
      slug: "redirect-options",
    })

    if (!redirectOptions?.enabled) {
      return NextResponse.json(
        { error: "Redirects are disabled" },
        { status: 404 },
      )
    }

    // Ищем переадресацию по короткой ссылке
    const redirect = await payload.find({
      collection: "redirects",
      where: {
        and: [
          {
            shortUrl: {
              equals: slug,
            },
          },
          {
            active: {
              equals: true,
            },
          },
        ],
      },
      limit: 1,
    })

    if (!redirect.docs.length) {
      // Если переадресация не найдена, перенаправляем на страницу по умолчанию
      if (redirectOptions.defaultRedirect) {
        // defaultRedirect может быть объектом страницы или ID
        const defaultPage =
          typeof redirectOptions.defaultRedirect === "object"
            ? redirectOptions.defaultRedirect
            : await payload.findByID({
                collection: "pages",
                id: String(redirectOptions.defaultRedirect),
              })

        if (defaultPage?.slug) {
          return NextResponse.redirect(
            new URL(`/${defaultPage.slug}`, request.url),
          )
        }
      }

      return NextResponse.json({ error: "Redirect not found" }, { status: 404 })
    }

    const redirectDoc = redirect.docs[0]

    // Проверяем срок действия переадресации
    if (redirectDoc.expiresAt && new Date(redirectDoc.expiresAt) < new Date()) {
      return NextResponse.json(
        { error: "Redirect has expired" },
        { status: 410 },
      )
    }

    // Обновляем статистику переходов
    if (redirectOptions.trackClicks) {
      await payload.update({
        collection: "redirects",
        id: redirectDoc.id,
        data: {
          clicks: (redirectDoc.clicks || 0) + 1,
          lastClick: new Date().toISOString(),
        },
      })
    }

    // Формируем целевую ссылку с UTM параметрами
    let targetUrl = redirectDoc.targetUrl

    // Добавляем UTM параметры если они заданы
    const utmParams = new URLSearchParams()

    if (redirectDoc.utmSource) {
      utmParams.append("utm_source", redirectDoc.utmSource)
    }
    if (redirectDoc.utmMedium) {
      utmParams.append("utm_medium", redirectDoc.utmMedium)
    }
    if (redirectDoc.utmCampaign) {
      utmParams.append("utm_campaign", redirectDoc.utmCampaign)
    }

    // Добавляем UTM параметры к целевой ссылке
    if (utmParams.toString()) {
      const url = new URL(targetUrl)
      utmParams.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
      targetUrl = url.toString()
    }

    // Выполняем переадресацию
    return NextResponse.redirect(new URL(targetUrl), { status: 302 })
  } catch (error) {
    console.error("Redirect error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
