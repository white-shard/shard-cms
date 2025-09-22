import { ClipboardCheck, ClipboardList, Quote } from "lucide-react"
import Image from "next/image"
import { GbtHelloBlockFields } from "../types"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
  fields: GbtHelloBlockFields
}

export function GbtHelloBlockDefault({ fields }: Props) {
  const speciality = fields.staff.specialty.map((it) => it.name).join(", ")

  return (
    <div className="container mx-auto flex flex-col px-4 gap-16 px-32">
      <div className="flex gap-8 justify-around items-center">
        <Image
          className="rounded-xl w-full md:size-108"
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
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl w-full lg:w-128">
            {fields.staff.fullname}
          </h2>
          <p className="text-2xl text-accent">
            Стаж {fields.staff.experience} лет
          </p>
          <p>Стоматолог {speciality}</p>
          {fields.quote && (
            <div className="relative text-base lg:text-lg">
              <Quote className="size-6 text-accent absolute top-0 left-0" />
              <p className="lg:w-128 uppercase whitespace-pre-line pl-10">
                {fields.quote}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 text-accent my-4">
              <ClipboardList />
              <span>Записаться на прием</span>
            </p>
            <Link href={`/${fields.staff.staffPage.slug}`}>
              <Button className="w-64" size="lg">
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xl text-gray-400 whitespace-pre-line">
        {fields.description}
      </p>
    </div>
  )
}
