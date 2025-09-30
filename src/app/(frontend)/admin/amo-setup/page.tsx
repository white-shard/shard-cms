import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { ClientAmoSetup } from "./client"

export default async function AmoSetupPage() {
  const cookieStore = await cookies()
  const payloadSession = cookieStore.get("payload-token")

  if (!payloadSession) notFound()

  return (
    <Suspense fallback={<div>Подключаем AmoCRM...</div>}>
      <ClientAmoSetup />
    </Suspense>
  )
}
