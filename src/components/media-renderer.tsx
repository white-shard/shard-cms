"use client"

import { Media } from "@/payload-types"
import Image from "next/image"

interface MediaRendererProps {
  media: Media
  className?: string
}

export function MediaRenderer({ media, className }: MediaRendererProps) {
  if (!media.url) {
    return null
  }

  const isVideo = media.mimeType?.startsWith("video/")
  const isImage = media.mimeType?.startsWith("image/")

  if (isVideo) {
    return (
      <video
        className={className}
        autoPlay
        muted
        loop
        preload="metadata"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <source src={media.url} type={media.mimeType || undefined} />
        Ваш браузер не поддерживает видео.
      </video>
    )
  }

  if (isImage) {
    return (
      <Image
        src={media.url}
        alt={media.alt || media.filename || ""}
        className={className}
        fill
      />
    )
  }

  return null
}
