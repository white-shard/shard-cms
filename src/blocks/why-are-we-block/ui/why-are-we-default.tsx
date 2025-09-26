"use client"

import { iconList } from "@/lib/icons"
import { WhyAreWeBlockFields } from "../types"

type Props = {
  fields: WhyAreWeBlockFields
}

export function WhyAreWeBlockDefault({ fields }: Props) {
  // Разбиваем элементы на группы по 4 для больших экранов, по 2 для средних, по 1 для мобильных
  const groupedItems = []
  for (let i = 0; i < fields.items.length; i += 4) {
    groupedItems.push(fields.items.slice(i, i + 4))
  }

  return (
    <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 lg:mb-12">
        {fields.heading}
      </h2>

      {/* Мобильная версия - одна колонка */}
      <div className="block sm:hidden space-y-4">
        {fields.items.map((item, index) => {
          const Icon = iconList[item.icon as keyof typeof iconList]
          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg border-2 border-dashed border-accent/30 hover:border-accent/70 transition-all duration-300"
            >
              <div className="size-12 bg-accent rounded-full flex items-center justify-center mb-3">
                <Icon className="size-6 text-white" />
              </div>
              <h3 className="text-base text-accent mb-2">{item.heading}</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Планшетная версия - две колонки */}
      <div className="hidden sm:block lg:hidden">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {fields.items.map((item, index) => {
            const Icon = iconList[item.icon as keyof typeof iconList]
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg border-2 border-dashed border-accent/30 hover:border-accent/70 transition-all duration-300 min-h-[200px]"
              >
                <div className="size-14 sm:size-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon className="size-6 sm:size-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-accent mb-3 text-center">
                  {item.heading}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Десктопная версия - четыре колонки с линиями */}
      <div className="hidden lg:block">
        {groupedItems.map((group, groupIndex) => (
          <div key={groupIndex} className="relative grid grid-cols-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <line
                x1="1.1%"
                y1="156"
                x2="99.9%"
                y2="156"
                stroke="#e91e63"
                strokeWidth="3"
                strokeDasharray="8,8"
                fill="none"
              />

              {groupIndex === 0 ? null : groupIndex % 2 === 0 ? (
                <line
                  x1="0.1%"
                  y1="0"
                  x2="0.1%"
                  y2="156"
                  stroke="#e91e63"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
              ) : (
                <line
                  x1="0.1%"
                  y1="156"
                  x2="0.1%"
                  y2="364"
                  stroke="#e91e63"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
              )}

              {groupIndex === groupedItems.length - 1 ? null : groupIndex %
                  2 ===
                0 ? (
                <line
                  x1="99.9%"
                  y1="156"
                  x2="99.9%"
                  y2="364"
                  stroke="#e91e63"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                />
              ) : (
                <line
                  x1="99.9%"
                  y1="0"
                  x2="99.9%"
                  y2="156"
                  stroke="#e91e63"
                  strokeWidth="3"
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
                  className="flex flex-col relative h-64 lg:h-72 xl:h-80 p-4 lg:p-6 items-center hover:items-start justify-center flex-1 gap-4 hover:gap-0 group hover:border-4 border-accent/50 hover:bg-white rounded-lg border-dashed transition-all duration-300"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 size-16 lg:size-18 xl:size-20 bg-accent rounded-full flex items-center justify-center group-hover:hidden">
                    <Icon className="size-6 lg:size-7 xl:size-8 text-white" />
                  </div>
                  <span className="text-base lg:text-lg xl:text-xl group-hover:text-accent mt-32 group-hover:mt-0 group-hover:text-left">
                    {item.heading}
                  </span>
                  <p className="text-sm lg:text-base xl:text-lg group-hover:block hidden text-gray-400 text-left leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
