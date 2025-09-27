"use client"

import { cn } from "@/lib/utils"
import { Media } from "@/payload-types"

type Props = {
  source: Media
  className?: string
}

export function Video({ source, className }: Props) {
  const isBackground = className?.includes("absolute")

  if (isBackground) {
    return (
      <video
        src={source.url || "/"}
        className={cn("w-full h-full", className)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={source.sizes?.md?.url || source.sizes?.sm?.url || undefined}
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <source src={source.url || "/"} type={source.mimeType || "video/mp4"} />
        Ваш браузер не поддерживает видео.
      </video>
    )
  }

  return (
    <div className="relative">
      <video
        src={source.url || "/"}
        className={cn("w-full h-auto", className)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={source.sizes?.md?.url || source.sizes?.sm?.url || undefined}
        style={{
          filter: "brightness(1.05) contrast(1.05)",
          boxShadow:
            "0 0 35px rgba(255, 255, 255, 0.55), 0 0 70px rgba(255, 255, 255, 0.35), 0 0 110px rgba(255, 255, 255, 0.2), inset 0 0 22px rgba(255, 255, 255, 0.22)",
          objectFit: "contain",
        }}
      >
        <source src={source.url || "/"} type={source.mimeType || "video/mp4"} />
        Ваш браузер не поддерживает видео.
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 38%, rgba(255, 255, 255, 0.06) 58%, rgba(255, 255, 255, 0.16) 78%, rgba(255, 255, 255, 0.28) 100%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  )
}
