"use client"

import { iconList } from "@/lib/icons"
import { Earth, MessageCircleQuestionMark } from "lucide-react"
import { Advantage } from "../types"

type Props = {
  advantage: Advantage
}

export function AdvantagesCard({ advantage }: Props) {
  const getIcon = () => {
    if (!advantage.icon) return null

    // If it's a number (index), get icon name from the list
    const iconIndex = Number.parseInt(advantage.icon, 10)
    if (!isNaN(iconIndex)) {
      const iconNames = Object.keys(iconList)
      const iconName = iconNames[iconIndex]
      return iconName ? iconList[iconName as keyof typeof iconList] : null
    }

    // If it's a string (icon name), use it directly
    return iconList[advantage.icon as keyof typeof iconList]
  }

  const Icon = getIcon()

  return (
    <div className="flip-card w-full min-h-48 sm:min-h-56 lg:min-h-64">
      <div className="flip-card-inner">
        {/* Передняя сторона */}
        <div className="flip-card-front bg-gray-100 rounded-xl flex items-center justify-center p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <div className="size-12 sm:size-14 lg:size-16 rounded-full bg-black flex items-center justify-center">
              {!!advantage.icon && !!Icon ? (
                <Icon className="size-6 lg:size-8 text-white" />
              ) : (
                <Earth className="size-6 lg:size-8 text-white" />
              )}
            </div>
            <span className="text-sm sm:text-base lg:text-lg text-gray-600 text-center leading-tight px-2">
              {advantage.title}
            </span>
          </div>
        </div>

        {/* Задняя сторона */}
        <div className="flip-card-back h-full rounded-xl bg-gray-200 flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
          <MessageCircleQuestionMark className="size-6 sm:size-8 lg:size-10 text-gray-600 mx-auto flex-shrink-0" />
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <p className="text-left text-sm lg:text-base text-gray-600 drop-shadow-sm leading-relaxed">
              {advantage.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
