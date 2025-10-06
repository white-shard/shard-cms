"use client"

import { useEffect } from "react"

interface ClientRedirectProps {
  targetUrl: string
}

export function ClientRedirect({ targetUrl }: ClientRedirectProps) {
  useEffect(() => {
    // Выполняем переадресацию на клиенте
    window.location.href = targetUrl
  }, [targetUrl])

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <p>Перенаправление...</p>
      <div className="mt-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto"></div>
      </div>
    </div>
  )
}
