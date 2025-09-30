"use client"

import { redirect, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getAmoTokens } from "./model/get-tokens"

export function ClientAmoSetup() {
  const [status, setStatus] = useState<string>("Запрашиваем токены...")

  const searchParams = useSearchParams()
  const code = searchParams.get("code") || null

  useEffect(() => {
    if (code) {
      getAmoTokens(code)
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
