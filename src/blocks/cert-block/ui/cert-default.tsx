"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { CertListBlockFields } from "../types"

type Props = {
  fields: CertListBlockFields
}

export function CertListBlockDefault({ fields }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Количество элементов для отображения на разных экранах
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 5
    if (window.innerWidth < 640) return 1 // mobile
    if (window.innerWidth < 768) return 2 // tablet
    if (window.innerWidth < 1024) return 3 // laptop
    return 5 // desktop
  }

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())

  const goToPrevious = () => {
    const maxIndex = Math.max(0, fields.certificates.length - itemsPerView)
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  const goToNext = () => {
    const maxIndex = Math.max(0, fields.certificates.length - itemsPerView)
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

  const handleCertificateClick = (docUrl: string) => {
    if (docUrl) {
      window.open(docUrl, "_blank")
    }
  }

  // Обновляем количество элементов при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, fields.certificates.length - itemsPerView)
  const showNavigation = fields.certificates.length > itemsPerView

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      {(fields.heading || fields.description) && (
        <div className="mb-8 md:mb-12">
          {fields.heading && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-2 text-balance">
              {fields.heading}
            </h2>
          )}
          {fields.description && (
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {fields.description}
            </p>
          )}
        </div>
      )}

      {/* Certificates Slider */}
      <div className="relative">
        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full size-10 md:size-12"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full size-10 md:size-12"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </>
        )}

        {/* Certificates Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              width: `${(fields.certificates.length * 100) / itemsPerView}%`,
            }}
          >
            {fields.certificates.map((certificate) => (
              <div
                key={certificate.img.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / fields.certificates.length}%` }}
              >
                <button
                  className="w-full group cursor-pointer"
                  onClick={() =>
                    handleCertificateClick(certificate.doc.url || "")
                  }
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                    <Image
                      src={certificate.img.url || "/placeholder.svg"}
                      alt={certificate.img.alt || "Сертификат"}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Hover overlay with document icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        {showNavigation && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400",
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
