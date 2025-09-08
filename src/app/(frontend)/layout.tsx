import { Roboto } from "next/font/google"
import localFont from "next/font/local"
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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ru">
      <body className={`${itcConduit.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
