"use client"

import { useEffect } from "react"
import { YMInitializer } from "react-yandex-metrika"

interface YandexMetrikaProps {
  counterId?: string
  enabled?: boolean
  webvisor?: boolean
  clickmap?: boolean
  trackLinks?: boolean
  accurateTrackBounce?: boolean
}

export function YandexMetrika({
  counterId,
  enabled = false,
  webvisor = true,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
}: YandexMetrikaProps) {
  useEffect(() => {
    if (!enabled || !counterId) return
  }, [enabled, counterId])

  if (!enabled || !counterId) return null

  return (
    <YMInitializer
      accounts={[parseInt(counterId)]}
      options={{
        webvisor,
        clickmap,
        trackLinks,
        accurateTrackBounce,
      }}
      version="2"
    />
  )
}
