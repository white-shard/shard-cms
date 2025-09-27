"use client"

import { YandexMetrika } from "@/components/yandex-metrika"

interface ClientYandexMetrikaProps {
  seoOptions: any
}

export function ClientYandexMetrika({ seoOptions }: ClientYandexMetrikaProps) {
  const yandexMetrika = seoOptions?.yandexMetrika

  if (!yandexMetrika?.enabled || !yandexMetrika?.counterId) {
    return null
  }

  return (
    <YandexMetrika
      counterId={yandexMetrika.counterId}
      enabled={yandexMetrika.enabled}
      webvisor={yandexMetrika.webvisor}
      clickmap={yandexMetrika.clickmap}
      trackLinks={yandexMetrika.trackLinks}
      accurateTrackBounce={yandexMetrika.accurateTrackBounce}
    />
  )
}
