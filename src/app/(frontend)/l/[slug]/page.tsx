import config from "@/payload.config"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import { ClientRedirect } from "./client-redirect"

type RedirectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  props: RedirectPageProps,
): Promise<Metadata> {
  const params = await props.params
  const slug = params?.slug

  return {
    title: "Перенаправление...",
    description: "Выполняется перенаправление по короткой ссылке",
  }
}

export const revalidate = 0 // Не кешируем переадресации

export default async function RedirectPage(props: RedirectPageProps) {
  const params = await props.params
  const slug = params?.slug

  if (!slug) {
    return notFound()
  }

  try {
    const payload = await getPayload({ config })

    // Проверяем настройки переадресаций
    const redirectOptions = await payload.findGlobal({
      slug: "redirect-options",
    })

    if (!redirectOptions?.enabled) {
      return notFound()
    }

    // Ищем переадресацию по короткой ссылке
    const redirectDoc = await payload.find({
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

    if (!redirectDoc.docs.length) {
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
          return <ClientRedirect targetUrl={`/${defaultPage.slug}`} />
        }
      }

      return notFound()
    }

    const redirectData = redirectDoc.docs[0]

    // Проверяем срок действия переадресации
    if (
      redirectData.expiresAt &&
      new Date(redirectData.expiresAt) < new Date()
    ) {
      return notFound()
    }

    // Обновляем статистику переходов
    if (redirectOptions.trackClicks) {
      await payload.update({
        collection: "redirects",
        id: redirectData.id,
        data: {
          clicks: (redirectData.clicks || 0) + 1,
          lastClick: new Date().toISOString(),
        },
      })
    }

    // Формируем целевую ссылку с UTM параметрами
    let targetUrl = redirectData.targetUrl

    // Добавляем UTM параметры если они заданы
    const utmParams = new URLSearchParams()

    if (redirectData.utmSource) {
      utmParams.append("utm_source", redirectData.utmSource)
    }
    if (redirectData.utmMedium) {
      utmParams.append("utm_medium", redirectData.utmMedium)
    }
    if (redirectData.utmCampaign) {
      utmParams.append("utm_campaign", redirectData.utmCampaign)
    }

    // Добавляем UTM параметры к целевой ссылке
    if (utmParams.toString()) {
      const url = new URL(targetUrl)
      utmParams.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
      targetUrl = url.toString()
    }

    // Выполняем переадресацию через клиентский компонент
    return <ClientRedirect targetUrl={targetUrl} />
  } catch (error) {
    console.error("Redirect error:", error)
    return notFound()
  }
}
