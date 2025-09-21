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
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-around items-center">
          <Image
            src={fields.img?.url || ""}
            alt={fields.img?.alt || ""}
            width={512}
            height={512}
            className="rounded-lg float-left mr-6 mb-4"
          />

          <div>
            <h2 className="text-6xl w-128 mb-4">{fields.heading}</h2>
            {fields.quote && (
              <div className="relative text-base lg:text-lg">
                <Quote className="size-6 text-accent absolute top-0 left-0" />
                <p className="lg:w-128 text-2xl uppercase whitespace-pre-line pl-10">
                  {fields.quote}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="text-2xl text-gray-500 whitespace-pre-line">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-screen" : "max-h-32"
            }`}
          >
            <p className="transition-all duration-500 ease-in-out">
              {fields.description}
            </p>
          </div>
          {fields.description.length > 512 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 uppercase text-accent hover:underline text-2xl cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {isExpanded ? "Свернуть" : "Читать далее"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
