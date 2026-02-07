import { ClientCookieConsent } from "@/components/client-cookie-consent"
import config from "@/payload.config"
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { getPayload } from "payload"
import React from "react"

export const dynamic = 'force-dynamic' // Принудительный динамический рендеринг

export default async function Layout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })

  const headerOptions = await payload.findGlobal({
    slug: "header-options",
  })

  return (
    <>
      <Header options={headerOptions} />
      <main className="flex flex-col gap-0 lg:gap-16 pt-16 md:pt-24">
        {children}
      </main>
      <Footer />
      <ClientCookieConsent />
    </>
  )
}
