import { Heart, Medal, Quote, Shield } from "lucide-react"
import Image from "next/image"
import { FounderBlockFields } from "../types"

type Props = {
  fields: FounderBlockFields
}

export function FounderBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex justify-around items-center">
      <Image
        className="rounded-xl size-108"
        src={fields.img.url!}
        alt={fields.img.alt!}
        width={432}
        height={432}
        quality={80}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl w-128">{fields.heading}</h2>
        <p className="w-128 text-gray-600 whitespace-pre-line mb-4">
          {fields.description}
        </p>
        {fields.quote && (
          <div className="relative">
            <Quote className="size-6 text-accent absolute top-0 left-0" />
            <p className="text-lg w-128 uppercase whitespace-pre-line pl-10">
              {fields.quote}
            </p>
          </div>
        )}
        <div className="flex gap-2 justify-around mt-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="size-12 rounded-full bg-secondary flex items-center justify-center">
              <Medal className="size-5 text-primary" />
            </div>
            <span className="w-32 text-gray-600 text-center">
              Сертифицированный специалист
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="size-12 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="size-5 text-primary" />
            </div>
            <span className="w-32 text-gray-600 text-center">
              Индивидуальный подход
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="size-12 rounded-full bg-secondary flex items-center justify-center">
              <Shield className="size-5 text-primary" />
            </div>
            <span className="w-32 text-gray-600 text-center">
              Гарантия качества
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
