"use client"

import { redirect, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { setupAmoCRM } from "./model/setup"

export function ClientAmoSetup() {
  const [status, setStatus] = useState<string>("Запрашиваем токены...")

  const searchParams = useSearchParams()
  const code = searchParams.get("code") || null

  useEffect(() => {
    if (code) {
      setupAmoCRM(code)
        .then(() => {
          setStatus("Токены получены")
          redirect("/admin/globals/amo-crm")
        })
        .catch(() => {
          redirect("/admin/globals/amo-crm")
        })
    }
  }, [code])

  return <div>{status}</div>
}
