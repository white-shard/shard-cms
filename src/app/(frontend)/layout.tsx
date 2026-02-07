import config from "@/payload.config"
import { Roboto } from "next/font/google"
import localFont from "next/font/local"
import { getPayload } from "payload"
import React from "react"
import "./styles.css"

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
}

const itcConduit = localFont({
  src: "../../../public/itcconduitcyrillic.ttf",
  variable: "--font-itc-conduit",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
})

export const dynamic = 'force-dynamic' // Принудительный динамический рендеринг
export const revalidate = 60 // Кеширование на 60 секунд

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  
  let seoOptions = null
  try {
    const payload = await getPayload({ config })

    await payload.findGlobal({
      slug: "header-options",
    })

    seoOptions = await payload.findGlobal({
      slug: "seo-options",
    })
  } catch {
    // Если база данных недоступна, продолжаем без данных
  }

  return (
    <html lang="ru">
      <head>
        {seoOptions?.headScript && (
          <div dangerouslySetInnerHTML={{ __html: seoOptions.headScript }} />
        )}
      </head>
      <body
        className={`${itcConduit.variable} ${roboto.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
