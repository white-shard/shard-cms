"use client"

import { HeaderOption } from "@/payload-types"
import { useEffect, useState } from "react"
import { DesktopHeader } from "./ui/desktop"
import { MobileHeader } from "./ui/mobile"

export type Props = {
  options: HeaderOption
}

export function Header({ options }: Props) {
  const data = options
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHoverCardOpen, setIsHoverCardOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 0)
    }

    // Проверяем позицию скролла при инициализации
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const shouldShowBackground = isScrolled || isHoverCardOpen

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300 py-3 sm:py-4 md:py-6 lg:py-8 ${
        shouldShowBackground
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="hidden xl:block">
        <DesktopHeader options={data} onHoverCardChange={setIsHoverCardOpen} />
      </div>
      <div className="block xl:hidden">
        <MobileHeader navigation={data} />
      </div>
    </header>
  )
}
