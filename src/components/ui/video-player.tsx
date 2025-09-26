"use client"

import { useRef } from "react"

interface VideoPlayerProps {
  src: string
  className?: string
  poster?: string
}

export function VideoPlayer({ src, className = "", poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ objectFit: "cover" }}
    />
  )
}
