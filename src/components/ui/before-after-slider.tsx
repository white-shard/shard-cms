"use client"

import { useState, useRef, useEffect } from "react"
import { Media } from "@/payload-types"

interface BeforeAfterSliderProps {
  beforeImage: Media
  afterImage: Media
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full aspect-[5/3] rounded-lg overflow-hidden shadow-lg cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0 select-none">
          <img
            src={afterImage.url!}
            alt={afterImage.alt || "До"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* After Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage.url!}
            alt={beforeImage.alt || "После"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm font-medium">
          ДО
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm font-medium">
          ПОСЛЕ
        </div>
      </div>
    </div>
  )
}
