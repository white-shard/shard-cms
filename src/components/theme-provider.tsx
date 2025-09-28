"use client"

import { useEffect } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Проверяем системную тему
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    // Устанавливаем начальную тему
    if (mediaQuery.matches) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Слушаем изменения системной темы
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return <>{children}</>
}
