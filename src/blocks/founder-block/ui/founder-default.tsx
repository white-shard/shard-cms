import { Heart, Medal, Quote, Shield } from "lucide-react"
import Image from "next/image"
import { FounderBlockFields } from "../types"

type Props = {
  fields: FounderBlockFields
}

export function FounderBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            className="rounded-xl w-full h-auto object-cover"
            src={fields.img?.url || "/"}
            alt={fields.img?.alt || "founder"}
            width={432}
            height={432}
            quality={80}
            style={{
              objectFit: "cover",
              backgroundColor: "gray",
            }}
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            {fields.heading}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 whitespace-pre-line leading-relaxed">
            {fields.description}
          </p>

          {fields.quote && (
            <div className="relative">
              <Quote className="size-5 sm:size-6 lg:size-7 text-accent absolute top-0 left-0" />
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl uppercase whitespace-pre-line pl-8 sm:pl-10 lg:pl-12 italic">
                {fields.quote}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6">
            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
              <div className="size-10 sm:size-12 lg:size-14 xl:size-16 rounded-full bg-secondary flex items-center justify-center">
                <Medal className="size-4 sm:size-5 lg:size-6 xl:size-7 text-primary" />
              </div>
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">
                Сертифицированный специалист
              </span>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
              <div className="size-10 sm:size-12 lg:size-14 xl:size-16 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="size-4 sm:size-5 lg:size-6 xl:size-7 text-primary" />
              </div>
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">
                Индивидуальный подход
              </span>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
              <div className="size-10 sm:size-12 lg:size-14 xl:size-16 rounded-full bg-secondary flex items-center justify-center">
                <Shield className="size-4 sm:size-5 lg:size-6 xl:size-7 text-primary" />
              </div>
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">
                Гарантия качества
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
