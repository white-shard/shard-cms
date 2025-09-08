import { getBlockRenderer } from "@/blocks"
import { Page } from "@/payload-types"
import config from "@payload-config"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import { Fragment } from "react"
import "../styles.css"

type SitePageProps = {
  params: Promise<{ slug?: string[] }>
}

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

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: "pages",
  })

  return pages.docs.map((page) => ({
    slug: page.slug !== "index" ? page.slug.split("/") : [],
  }))
}

async function getPageData(slug: string): Promise<Page | undefined> {
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
}
