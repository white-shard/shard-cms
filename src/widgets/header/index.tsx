"use client"

import { Navigation as PayloadNavigation } from "@/payload-types"
import { type Navigation } from "./types"
import { DesktopHeader } from "./ui/desktop"
import { MobileHeader } from "./ui/mobile"
import { useEffect, useState } from "react"

export type Props = {
  navigation: PayloadNavigation
}

export function Header({ navigation }: Props) {
  const data = navigation as Navigation
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2 sm:py-3 md:py-4"
          : "bg-transparent py-3 sm:py-4 md:py-6 lg:py-8"
      }`}
    >
      <div className="hidden xl:block">
        <DesktopHeader navigation={data} />
      </div>
      <div className="block xl:hidden">
        <MobileHeader navigation={data} />
      </div>
    </header>
  )
}
