"use client"

import { useEffect, useState } from "react"
import { MethodsBlockFields } from "../types"
import { Button } from "@/components/ui/button"
import { it } from "node:test"
import Image from "next/image"

type Props = {
  fields: MethodsBlockFields
}

export function MethodsBlockDefault({ fields }: Props) {
  const [method, setMethod] = useState<string>()
  const current = fields.methods.find((it) => it.heading === method)

  useEffect(() => {
    if (fields.methods.length) {
      setMethod(fields.methods[0].heading)
    }
  }, [fields.methods])

  return (
    <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-6 sm:gap-8">
      <div className="grid gap-3 sm:gap-4">
        <span className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {fields.heading}
        </span>
        {fields.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-full lg:max-w-128 leading-relaxed">
            {fields.description}
          </p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {fields.methods.map((item, index) => (
          <Button
            key={index}
            size="lg"
            className="flex-1 py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg px-4 sm:px-6"
            variant={method === item.heading ? "accent" : "secondary"}
            onClick={() => {
              setMethod(item.heading)
            }}
          >
            {item.heading}
          </Button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 flex-1 whitespace-pre-line leading-relaxed">
          {current?.description}
        </p>
        {current?.img ? (
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Image
              src={current.img.url!}
              alt={current.img.alt || ""}
              width={512}
              height={512}
              className="rounded-lg w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
