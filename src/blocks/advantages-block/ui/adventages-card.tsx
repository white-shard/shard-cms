"use client"

import { Earth, MessageCircleQuestionMark } from "lucide-react"
import { Advantage } from "../types"

type Props = {
  advantage: Advantage
}

export function AdvantagesCard({ advantage }: Props) {
  return (
    <div className="flip-card flex-1 min-w-full md:min-w-1/3 lg:min-w-1/4 min-h-48">
      <div className="flip-card-inner">
        {/* Передняя сторона */}
        <div className="flip-card-front bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="size-12 rounded-full bg-black flex items-center justify-center">
              <Earth className="size-6 text-white" />
            </div>
            <span className="text-xl text-gray-600 w-72">
              {advantage.title}
            </span>
          </div>
        </div>

        {/* Задняя сторона */}
        <div className="flip-card-back rounded-xl bg-gray-200 flex flex-col gap-2 p-4">
          <MessageCircleQuestionMark className="size-12 text-gray-600" />
          <p className="text-left text-gray-600 drop-shadow-sm">
            {advantage.description}
          </p>
        </div>
      </div>
    </div>
  )
}
