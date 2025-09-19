import { Clock, MapPin } from "lucide-react"
import { ContactBlockFields } from "../types"

type Props = {
  fields: ContactBlockFields
}

export function ContactBlockDefault({ fields }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:gap-32 items-center container mx-auto">
      <div className="flex flex-col lg:order-2">
        <span className="text-lg md:text-4xl text-gray-400 -mb-2">
          {fields.beforeHeading}
        </span>
        <span className="text-2xl md:text-6xl">{fields.heading}</span>
        <div className="flex flex-col gap-4 my-4 text-gray-400">
          <div className="flex gap-2 items-center">
            <MapPin className="text-primary size-4 md:size-6" />
            <span className="flex-1 md:text-xl">
              Екатеринбург, Олимпийская набережная, 9/1
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Clock className="text-primary size-4  md:size-6" />
            <span className="flex-1 md:text-xl">Ежедневно: 9:00-21:00</span>
          </div>
          <div className="flex flex-col gap-4 my-8">
            <span className="text-primary text-2xl md:text-4xl">
              +7 (343) 287-77-89
            </span>
            <span className="text-primary text-2xl md:text-4xl">
              +7 (961) 771-17-74
            </span>
          </div>
        </div>
      </div>
      <div className="size-full aspect-square bg-gray-400 rounded-lg mt-4 lg:order-1" />
    </div>
  )
}
