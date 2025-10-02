"use client"

import { useEffect } from "react"

type ReviewsWidgetProps = {
  uuid: string
  name: string
  additionalFrame?: string
  lang?: string
  widgetId?: string
}

export function ReviewsWidget({
  uuid,
  name,
  additionalFrame = "none",
  lang = "ru",
  widgetId = "1",
}: ReviewsWidgetProps) {
  useEffect(() => {
    // Проверяем, не добавлен ли скрипт уже
    const existingScript = document.querySelector(
      'script[src="https://myreviews.dev/widget/dist/index.js"]',
    )

    if (existingScript) {
      // Если скрипт уже есть, сразу инициализируем
      initializeWidget()
      return
    }

    // Добавляем скрипт MyReviews
    const script = document.createElement("script")
    script.src = "https://myreviews.dev/widget/dist/index.js"
    script.defer = true

    script.onload = () => {
      console.log("MyReviews script loaded")
      initializeWidget()
    }

    script.onerror = () => {
      console.error("Failed to load MyReviews script")
    }

    document.head.appendChild(script)

    function initializeWidget() {
      const myReviewsInit = function () {
        if (window.myReviews && window.myReviews.BlockWidget) {
          try {
            new window.myReviews.BlockWidget({
              uuid,
              name,
              additionalFrame,
              lang,
              widgetId,
            }).init()
            console.log("MyReviews widget initialized successfully")
          } catch (error) {
            console.error("Error initializing MyReviews widget:", error)
          }
        } else {
          console.error("MyReviews library not available")
        }
      }

      // Ждем готовности DOM или инициализируем сразу
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", myReviewsInit)
      } else {
        myReviewsInit()
      }
    }

    return () => {
      // Очистка при размонтировании компонента
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [uuid, name, additionalFrame, lang, widgetId])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        borderRadius: "20px",
      }}
    >
      <iframe
        title="Виджет с отзывами «Карусель» от MyReviews"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1170px",
          border: "none",
          outline: "none",
          padding: "0",
          margin: "0",
        }}
        id="myReviews__block-widget"
        loading="lazy"
      />
    </div>
  )
}
