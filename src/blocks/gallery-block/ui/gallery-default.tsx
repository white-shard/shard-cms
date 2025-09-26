"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { GalleryBlockFields } from "../types"
import Image from "next/image"

type Props = {
  fields: GalleryBlockFields
}

export function GalleryBlockDefault({ fields }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? fields.images.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === fields.images.length - 1 ? 0 : currentIndex + 1,
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getThumbnails = () => {
    const otherImages = fields.images.filter(
      (_, index) => index !== currentIndex,
    )
    return otherImages.slice(0, 3)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4 lg:mb-6 text-balance">
          Пространство, где приятно лечиться
        </h1>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Мы создали пространство, в котором каждая деталь продумана для вашего
          удобства и спокойствие — от мягкого освещения до изысканных деталей
          интерьера.
        </p>
      </div>

      {/* Main Slider */}
      <div className="relative bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
        {/* Main Image Container */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {fields.images.map((image) => (
              <div
                key={image.img.id}
                className="w-full h-full flex-shrink-0 relative"
              >
                <Image
                  src={image.img.url || "/"}
                  alt={image.img.alt || ""}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {image.img.alt && (
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6">
                    <h3 className="text-white text-sm sm:text-base lg:text-lg xl:text-xl drop-shadow-lg">
                      {image.img.alt}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/40 hover:bg-white/50 text-foreground hover:text-primary rounded-full backdrop-blur-sm size-8 sm:size-10 lg:size-12"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="bg-white/40 hover:bg-white/50 text-foreground hover:text-primary rounded-full backdrop-blur-sm size-8 sm:size-10 lg:size-12"
              onClick={goToNext}
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-8 flex space-x-2 sm:space-x-3">
            {fields.images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-accent shadow-lg"
                    : "bg-white/50 hover:bg-white/70",
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto">
        {getThumbnails().map((image) => {
          const originalIndex = fields.images.findIndex(
            (img) => img.img.id === image.img.id,
          )
          return (
            <button
              key={image.img.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100"
              onClick={() => goToSlide(originalIndex)}
            >
              <Image
                src={image.img.url || "/placeholder.svg"}
                fill
                alt={image.img.alt || ""}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
