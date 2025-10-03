import { Button } from "@/components/ui/button"
import { Check, ClipboardList } from "lucide-react"
import Link from "next/link"
import { StaffBlockFields } from "../types"

type Props = {
  fields: StaffBlockFields
}

export function StaffBlockDefault({ fields }: Props) {
  const fullname = fields.staff.fullname.split(" ")

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-1 flex-col order-2 lg:order-1">
        <span className="text-4xl sm:text-5xl lg:text-6xl">{fullname[0]}</span>
        <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600">
          {fullname[1]} {fullname[2]}
        </span>
        <ul className="py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl text-gray-600 grid gap-3 sm:gap-4">
          {fields.staff.features?.map((feature, index) => (
            <li key={index} className="flex gap-2 sm:gap-3">
              <Check className="text-accent size-6 sm:size-7 lg:size-8 flex-shrink-0 mt-1" />
              <span className="leading-relaxed">{feature.item}</span>
            </li>
          ))}
          <li className="flex gap-2 sm:gap-3">
            <Check className="text-accent size-6 sm:size-7 lg:size-8 flex-shrink-0 mt-1" />
            <span className="leading-relaxed">Более 15 лет опыта</span>
          </li>
        </ul>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-full lg:max-w-2/3 leading-relaxed">
          {fields.staff.description}
        </p>
        <div className="mt-6 sm:mt-8">
          <Link href={fields.staff.bookingLink}>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg lg:text-xl md:text-base px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6"
            >
              <ClipboardList className="size-4 sm:size-5 lg:size-6" />
              <span className="ml-2">Записаться на консультацию</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 order-1 lg:order-2">
        <div
          style={{
            backgroundImage: `url(${fields.staff.img.url!})`,
          }}
          className="w-full h-64 sm:h-80 lg:h-96 xl:h-128 aspect-square bg-cover bg-center rounded-lg mx-auto max-w-md lg:max-w-none"
        />
      </div>
    </div>
  )
}
