import { Button } from "@/components/ui/button"
import { ClipboardList, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GbtHelloBlockFields } from "../types"

type Props = {
  fields: GbtHelloBlockFields
}

export function GbtHelloBlockDefault({ fields }: Props) {
  const speciality = fields.staff.specialty.map((it) => it.name).join(", ")

  return (
    <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-8 sm:gap-12 lg:gap-16">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 justify-around items-center">
        <Image
          className="rounded-xl w-full max-w-md lg:max-w-none lg:size-108 mx-auto lg:mx-0"
          src={fields.staff.img?.url || "/"}
          alt={fields.staff.img?.alt || "gbt"}
          width={432}
          height={432}
          quality={80}
          style={{
            objectFit: "cover",
            backgroundColor: "gray",
          }}
        />
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl w-full lg:w-128 leading-tight">
            {fields.staff.fullname}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-accent">
            Стаж {fields.staff.experience}
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            Стоматолог {speciality}
          </p>
          {fields.quote && (
            <div className="relative text-sm sm:text-base lg:text-lg">
              <Quote className="size-4 sm:size-5 lg:size-6 text-accent absolute top-0 left-0" />
              <p className="lg:w-128 uppercase whitespace-pre-line pl-6 sm:pl-8 lg:pl-10 leading-relaxed">
                {fields.quote}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6">
            <p className="flex gap-2 text-accent text-base sm:text-lg lg:text-xl">
              <ClipboardList className="size-4 sm:size-5 lg:size-6" />
              <span>Записаться на прием</span>
            </p>
            <Link href={`/${fields.staff.staffPage.slug}`}>
              <Button
                className="w-full sm:w-64 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3"
                size="lg"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-base sm:text-lg lg:text-xl text-gray-400 whitespace-pre-line leading-relaxed">
        {fields.description}
      </p>
    </div>
  )
}
