import { Clock, MapPin } from "lucide-react"
import { ContactBlockFields } from "../types"

type Props = {
  fields: ContactBlockFields
}

export function ContactBlockDefault({ fields }: Props) {
  return (
    <div
      id="contacts"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Контактная информация */}
        <div className="flex flex-col lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 block">
              {fields.beforeHeading}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              {fields.heading}
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 text-gray-400">
            <div className="flex gap-2 sm:gap-3 items-start">
              <MapPin className="text-primary size-4 sm:size-5 md:size-6 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Екатеринбург, Олимпийская набережная, 9/1
              </span>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <Clock className="text-primary size-4 sm:size-5 md:size-6 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Ежедневно: 9:00-21:00
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10">
            <a
              href="tel:+73432877789"
              className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:underline transition-colors duration-200"
            >
              +7 (343) 287-77-89
            </a>
            <a
              href="tel:+79617711774"
              className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:underline transition-colors duration-200"
            >
              +7 (961) 771-17-74
            </a>
          </div>
        </div>

        {/* Карта/изображение */}
        <div className="w-full aspect-square bg-gray-400 rounded-lg sm:rounded-xl lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]" />
      </div>
    </div>
  )
}
