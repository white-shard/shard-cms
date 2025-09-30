import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Преобразует markdown-ссылки [URL](текст) в HTML теги <a>
 * @param text - текст с markdown-ссылками
 * @returns JSX элемент с преобразованными ссылками
 */
export function parseLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    // Добавляем текст до ссылки
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    // Добавляем ссылку
    const url = match[1]
    const linkText = match[2]
    parts.push(
      <a key={match.index} href={url} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>,
    )

    lastIndex = match.index + match[0].length
  }

  // Добавляем оставшийся текст
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 1 ? <>{parts}</> : text
}
