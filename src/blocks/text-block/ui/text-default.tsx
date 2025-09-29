"use client"

import { RichTextView } from "@/components/ui/rich-text-view"
import { TextBlockFields } from "../types"

type Props = {
  fields: TextBlockFields
}

export function TextBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {!!fields.heading && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6">
            {fields.heading}
          </h2>
        )}
        {!!fields.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            {fields.description}
          </p>
        )}

        <RichTextView data={fields.text} />
      </div>
    </div>
  )
}
