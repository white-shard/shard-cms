"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)

    // Перезагружаем страницу для инициализации Яндекс.Метрики
    window.location.reload()
  }

  const handleReject = () => {
    window.location.href = "https://google.com"
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl text-gray-900 mb-2">
              Использование файлов cookie
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Мы используем файлы cookie и Яндекс.Метрику для улучшения работы
              сайта и анализа посещений. Продолжая использование сайта, вы
              соглашаетесь с обработкой ваших данных.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              onClick={handleReject}
              variant="secondary"
              className="hover:opacity-75"
            >
              Покинуть сайт
            </Button>
            <Button
              onClick={handleAccept}
              variant="accent"
              className="hover:opacity-75"
            >
              Согласиться
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
