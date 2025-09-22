"use client"

import { iconList } from "@/lib/icons"
import { WhyAreWeBlockFields } from "../types"

type Props = {
  fields: WhyAreWeBlockFields
}

export function WhyAreWeBlockDefault({ fields }: Props) {
  // Разбиваем элементы на группы по 4
  const groupedItems = []
  for (let i = 0; i < fields.items.length; i += 4) {
    groupedItems.push(fields.items.slice(i, i + 4))
  }

  return (
    <div className="container mx-auto text-center">
      <span className="text-4xl block mb-8">{fields.heading}</span>
      {groupedItems.map((group, groupIndex) => (
        <div key={groupIndex} className="relative grid grid-cols-4 gap-8">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line
              x1="1%"
              y1="128"
              x2="99%"
              y2="128"
              stroke="#e91e63"
              strokeWidth="4"
              strokeDasharray="8,8"
              fill="none"
            />

            {groupIndex === 0 ? null : groupIndex % 2 === 0 ? (
              <line
                x1="0.1%"
                y1="0"
                x2="1%"
                y2="128"
                stroke="#e91e63"
                strokeWidth="4"
                strokeDasharray="8,8"
                fill="none"
              />
            ) : (
              <line
                x1="1%"
                y1="128"
                x2="0.1%"
                y2="256"
                stroke="#e91e63"
                strokeWidth="4"
                strokeDasharray="8,8"
                fill="none"
              />
            )}

            {groupIndex === groupedItems.length - 1 ? null : groupIndex % 2 ===
              0 ? (
              <line
                x1="99%"
                y1="128"
                x2="99.9%"
                y2="256"
                stroke="#e91e63"
                strokeWidth="4"
                strokeDasharray="8,8"
                fill="none"
              />
            ) : (
              <line
                x1="99.9%"
                y1="0"
                x2="99%"
                y2="128"
                stroke="#e91e63"
                strokeWidth="4"
                strokeDasharray="8,8"
                fill="none"
              />
            )}
          </svg>

          {group.map((item, index) => {
            const Icon = iconList[item.icon as keyof typeof iconList]

            return (
              <div
                key={`${groupIndex}-${index}`}
                className="flex flex-col relative h-64 p-4 items-center hover:items-start justify-center flex-1 gap-4 hover:gap-0 group hover:border-4 border-accent/50 hover:bg-white rounded-lg border-dashed"
              >
                <div className="absolute top-1/2 -translate-y-1/2 size-16 bg-accent rounded-full flex items-center justify-center group-hover:hidden">
                  <Icon className="size-6 md:size-5 text-white" />
                </div>
                <span className="text-lg group-hover:text-accent mt-32 group-hover:mt-0 group-hover:text-left">
                  {item.heading}
                </span>
                <p className="text-lg group-hover:block hidden text-gray-400 text-left">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
