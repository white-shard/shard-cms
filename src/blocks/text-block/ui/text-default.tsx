"use client"

import { TextBlockFields } from "../types"
import { RichText } from "@payloadcms/richtext-lexical/react"

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

        <div className="prose prose-lg sm:prose-xl lg:prose-2xl max-w-none text-gray-700 leading-relaxed [&_p]:mb-4 [&_p]:sm:mb-6 [&_p]:text-base [&_p]:sm:text-lg [&_p]:lg:text-xl [&_p]:leading-relaxed [&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:lg:text-4xl [&_h1]:text-gray-900 [&_h1]:mb-4 [&_h1]:sm:mb-6 [&_h1]:mt-8 [&_h1]:sm:mt-12 [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:lg:text-3xl [&_h2]:text-gray-900 [&_h2]:mb-3 [&_h2]:sm:mb-5 [&_h2]:mt-6 [&_h2]:sm:mt-8 [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:lg:text-2xl [&_h3]:text-gray-900 [&_h3]:mb-2 [&_h3]:sm:mb-4 [&_h3]:mt-4 [&_h3]:sm:mt-6 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ul]:sm:mb-6 [&_ul]:space-y-2 [&_ul]:text-base [&_ul]:sm:text-lg [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_ol]:sm:mb-6 [&_ol]:space-y-2 [&_ol]:text-base [&_ol]:sm:text-lg [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline [&_a]:transition-colors [&_a]:duration-200">
          <RichText className="rich-text" data={fields.text} />
        </div>
      </div>
    </div>
  )
}
