import { Heart, Medal, Quote, Shield } from "lucide-react"
import Image from "next/image"
import { FounderBlockFields } from "../types"

type Props = {
  fields: FounderBlockFields
}

export function FounderBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:flex-row justify-around items-center gap-8">
      <Image
        className="rounded-xl w-full md:size-108"
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
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl lg:text-4xl w-full lg:w-128">
          {fields.heading}
        </h2>
        <p className="w-full lg:w-128 text-base text-gray-600 whitespace-pre-line mb-4">
          {fields.description}
        </p>
        {fields.quote && (
          <div className="relative text-base lg:text-lg">
            <Quote className="size-6 text-accent absolute top-0 left-0" />
            <p className="lg:w-128 uppercase whitespace-pre-line pl-10">
              {fields.quote}
            </p>
          </div>
        )}
        <div className="flex gap-8 lg:gap-2 justify-around mt-4 text-sm flex-wrap">
          <div className="flex flex-col gap-2 items-center">
            <div className="size-8 lg:size-12 rounded-full bg-secondary flex items-center justify-center">
              <Medal className="size-3 lg:size-5 text-primary" />
            </div>
            <span className="max-w-2/3 lg:w-32 text-gray-600 text-center">
              Сертифицированный специалист
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="size-8 lg:size-12 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="size-3 lg:size-5 text-primary" />
            </div>
            <span className="max-w-2/3 lg:w-32 text-gray-600 text-center">
              Индивидуальный подход
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="size-8 lg:size-12 rounded-full bg-secondary flex items-center justify-center">
              <Shield className="size-3 lg:size-5 text-primary" />
            </div>
            <span className="max-w-2/3 lg:w-32 text-gray-600 text-center">
              Гарантия качества
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
