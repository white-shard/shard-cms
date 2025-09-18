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
    <div className="flex flex-col container mx-auto gap-4">
      <div className="grid gap-2">
        <span className="text-4xl">{fields.heading}</span>
        {fields.description && (
          <p className="text-xl text-gray-600 w-128">{fields.description}</p>
        )}
      </div>
      <div className="flex gap-4">
        {fields.methods.map((item, index) => (
          <Button
            key={index}
            size="lg"
            className="flex-1 py-8 text-lg"
            variant={method === item.heading ? "accent" : "secondary"}
            onClick={() => {
              setMethod(item.heading)
            }}
          >
            {item.heading}
          </Button>
        ))}
      </div>
      <div className="flex justify-between gap-8">
        <p className="text-2xl text-gray-400 flex-1 whitespace-pre-line">
          {current?.description}
        </p>
        {current?.img ? (
          <Image
            src={current.img.url!}
            alt={current.img.alt || ""}
            width={512}
            height={512}
            className="rounded-lg"
          />
        ) : null}
      </div>
    </div>
  )
}
