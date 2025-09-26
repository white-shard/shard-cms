import { Button } from "@/components/ui/button"
import { Media, Service } from "@/payload-types"
import { Check, ClipboardList } from "lucide-react"
import Image from "next/image"

type Props = {
  service: Service
}

export function ServicesBlockMain({ service }: Props) {
  const img = service.img as Media

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {service.img && (
        <Image
          className="rounded-lg w-full max-w-md lg:max-w-none"
          src={img.url || ""}
          alt={img.alt || ""}
          width={640}
          height={480}
        />
      )}
      <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-accent leading-tight">
          {service.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-full lg:max-w-96 leading-relaxed">
          {service.description}
        </p>
        <ul className="flex flex-col gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl text-primary mt-6 sm:mt-8">
          {service.advantages?.map((advantage) => (
            <li key={advantage.id} className="flex items-center gap-2 sm:gap-3">
              <Check className="size-5 sm:size-6 text-accent flex-shrink-0" />
              <span className="leading-relaxed">{advantage.title}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
          {service.price && (
            <p className="text-3xl sm:text-4xl lg:text-5xl text-accent max-w-full lg:max-w-128">
              {service.price} ₽
            </p>
          )}
          {service.old_price && (
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-full lg:max-w-128">
              <span className="line-through">{service.old_price}</span> ₽
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
          <Button
            className="flex-1 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3"
            size="lg"
            variant="accent"
          >
            <ClipboardList className="size-4 sm:size-5" />
            <span className="ml-2">Записаться</span>
          </Button>
          <Button
            className="flex-1 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3"
            size="lg"
            variant="secondary"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}
