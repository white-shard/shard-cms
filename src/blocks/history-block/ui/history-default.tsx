"use client"

import Image from "next/image"
import { HistoryBlockFields } from "../types"
import { Quote } from "lucide-react"
import { useState } from "react"

type Props = {
  fields: HistoryBlockFields
}

export function HistoryBlockDefault({ fields }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center lg:items-start">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0">
            <Image
              src={fields.img?.url || ""}
              alt={fields.img?.alt || ""}
              width={512}
              height={512}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {fields.heading}
            </h2>

            {fields.quote && (
              <div className="relative">
                <Quote className="size-5 sm:size-6 lg:size-7 text-accent absolute top-0 left-0" />
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl uppercase whitespace-pre-line pl-8 sm:pl-10 lg:pl-12 font-medium italic leading-relaxed">
                  {fields.quote}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-500 whitespace-pre-line leading-relaxed">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-screen" : "max-h-24 sm:max-h-28 lg:max-h-32"
            }`}
          >
            <p className="transition-all duration-500 ease-in-out">
              {fields.description}
            </p>
          </div>

          {fields.description.length > 512 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 sm:mt-6 uppercase text-accent hover:underline text-sm sm:text-base lg:text-lg xl:text-xl cursor-pointer transition-all duration-300 hover:scale-105 font-medium"
            >
              {isExpanded ? "Свернуть" : "Читать далее"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
