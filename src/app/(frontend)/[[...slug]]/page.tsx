import { getBlockRenderer } from "@/blocks"
import { Page } from "@/payload-types"
import config from "@payload-config"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import { Fragment } from "react"
import "../styles.css"

type SitePageProps = {
  params: Promise<{ slug?: string[] }>
}

export async function generateMetadata(
  props: SitePageProps,
): Promise<Metadata> {
  const params = await props.params
  const slug = params?.slug?.join("/") || "index"
  const page = await getPageData(slug)

  if (!page) {
    return {
      title: "Страница не найдена",
    }
  }

  const metadata: Metadata = {
    title: page.title,
  }

  if (page.description) {
    metadata.description = page.description
  }

  if (page.keywords && page.keywords.length > 0) {
    metadata.keywords = page.keywords.join(", ")
  }

  return metadata
}

export const dynamic = 'force-dynamic' // Принудительный динамический рендеринг
export const revalidate = 60 // Кеширование на 60 секунд

export default async function SitePage(props: SitePageProps) {
  const params = await props.params
  const slug = params?.slug?.join("/") || "index"
  const page = await getPageData(slug)

  if (!page) return notFound()

  return page?.layout?.map((block, index) => {
    const renderer = getBlockRenderer(block.blockType)
    return (
      renderer && <Fragment key={index}>{renderer(block as never)}</Fragment>
    )
  })
}

// Удалено generateStaticParams для отключения статической генерации
// Страницы теперь рендерятся динамически с кешированием на 60 секунд

async function getPageData(slug: string): Promise<Page | undefined> {
  try {
    const payload = await getPayload({ config })
    const page = await payload.find({
      collection: "pages",
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return page.docs[0]
  } catch (error) {
    console.error("Error fetching page data:", error)
    return undefined
  }
}
