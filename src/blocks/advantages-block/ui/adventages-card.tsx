"use client"

import { Earth, MessageCircleQuestionMark } from "lucide-react"
import { Advantage } from "../types"

type Props = {
  advantage: Advantage
}

export function AdvantagesCard({ advantage }: Props) {
  return (
    <div className="flip-card w-full min-h-40 sm:min-h-48 lg:min-h-52">
      <div className="flip-card-inner">
        {/* Передняя сторона */}
        <div className="flip-card-front bg-gray-100 rounded-xl flex items-center justify-center p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <div className="size-10 sm:size-12 lg:size-14 rounded-full bg-black flex items-center justify-center">
              <Earth className="size-5 sm:size-6 lg:size-7 text-white" />
            </div>
            <span className="text-base sm:text-lg lg:text-xl text-gray-600 text-center leading-tight">
              {advantage.title}
            </span>
          </div>
        </div>

        {/* Задняя сторона */}
        <div className="flip-card-back rounded-xl bg-gray-200 flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
          <MessageCircleQuestionMark className="size-10 sm:size-12 lg:size-14 text-gray-600 mx-auto" />
          <p className="text-left text-sm sm:text-base lg:text-lg text-gray-600 drop-shadow-sm leading-relaxed">
            {advantage.description}
          </p>
        </div>
      </div>
    </div>
  )
}
