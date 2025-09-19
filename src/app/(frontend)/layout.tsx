import config from "@/payload.config"
import { Header } from "@/widgets/header"
import { Roboto } from "next/font/google"
import localFont from "next/font/local"
import { getPayload } from "payload"
import React from "react"
import "./styles.css"
import { Footer } from "@/widgets/footer"

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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })

  const navigation = await payload.findGlobal({
    slug: "navigation",
  })

  return (
    <html lang="ru">
      <body
        className={`${itcConduit.variable} ${roboto.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        <Header navigation={navigation} />
        <main className="flex flex-col gap-16">{children}</main>
        <Footer navigation={navigation} />
      </body>
    </html>
  )
}
