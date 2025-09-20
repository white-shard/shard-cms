import { Check, ClipboardList } from "lucide-react"
import { StaffBlockFields } from "../types"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Props = {
  fields: StaffBlockFields
}

export function StaffBlockDefault({ fields }: Props) {
  const fullname = fields.staff.fullname.split(" ")

  return (
    <div className="container mx-auto flex justify-between gap-8 px-4">
      <div className="flex flex-1 flex-col">
        <span className="text-6xl">{fullname[0]}</span>
        <span className="text-4xl text-gray-600">
          {fullname[1]} {fullname[2]}
        </span>
        <ul className="py-8 text-2xl text-gray-600 grid gap-4">
          {fields.staff.features?.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <Check className="text-accent size-8" />
              {feature.item}
            </li>
          ))}
          <li className="flex gap-2">
            <Check className="text-accent size-8" />
            Более 15 лет опыта
          </li>
        </ul>
        <p className="text-gray-400 text-xl max-w-2/3">
          {fields.staff.description}
        </p>
        <div className="mt-8">
          <Button size="lg" className="flex-1 text-xl md:text-base">
            <ClipboardList />
            Записаться на консультацию
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <div
          style={{
            backgroundImage: `url(${fields.staff.img.url!})`,
          }}
          className="size-128 aspect-square bg-cover bg-center rounded-lg"
        />
      </div>
    </div>
  )
}
