import { Button } from "@/components/ui/button"
import { Service } from "@/payload-types"
import { Check, ClipboardList, Microscope } from "lucide-react"

type Props = {
  service: Service
}

export function ServicesCard({ service }: Props) {
  return (
    <article className="flex-1 flex flex-col justify-between gap-3 sm:gap-4 bg-gray-100 rounded-xl p-4 sm:p-6 border-t-6 border-t-primary border-1 border-gray-200">
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="flex justify-between items-start">
          <Microscope className="size-8 sm:size-10 lg:size-12 text-primary flex-shrink-0" />

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {service.price && (
              <p className="text-2xl sm:text-3xl lg:text-4xl text-primary max-w-full lg:max-w-128">
                {service.price} ₽
              </p>
            )}
            {service.old_price && (
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-full lg:max-w-128">
                <span className="line-through">{service.old_price}</span> ₽
              </p>
            )}
          </div>
        </div>
        <span className="text-lg sm:text-xl lg:text-2xl text-primary leading-tight">
          {service.title}
        </span>
        <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base lg:text-xl text-gray-600 mt-3 sm:mt-4">
          {service.advantages?.map((advantage) => (
            <li key={advantage.id} className="flex items-center gap-2 sm:gap-3">
              <Check className="size-4 sm:size-5 lg:size-6 text-gray-600 flex-shrink-0" />
              <span className="leading-relaxed">{advantage.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:gap-4 mt-4 sm:mt-6">
        <Button
          className="flex-1 text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-3"
          size="lg"
          variant="primary"
        >
          <ClipboardList className="size-3 sm:size-4 lg:size-5" />
          <span className="ml-1 sm:ml-2">Записаться</span>
        </Button>
        <Button
          className="flex-1 text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-3"
          size="lg"
          variant="secondary"
        >
          Подробнее
        </Button>
      </div>
    </article>
  )
}
