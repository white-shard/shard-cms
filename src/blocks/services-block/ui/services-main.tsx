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
    <div className="container mx-auto flex justify-around">
      {service.img && (
        <Image
          className="rounded-lg"
          src={img.url || ""}
          alt={img.alt || ""}
          width={640}
          height={480}
        />
      )}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl text-accent">{service.title}</h2>
        <p className="text-xl text-gray-600 max-w-96">{service.description}</p>
        <ul className="flex flex-col gap-2 text-2xl text-primary mt-8">
          {service.advantages?.map((advantage) => (
            <li key={advantage.id} className="flex items-center gap-2">
              <Check className="size-6 text-accent" />
              {advantage.title}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {service.price && (
            <p className="text-5xl text-accent max-w-128 mt-6">
              {service.price} ₽
            </p>
          )}
          {service.old_price && (
            <p className="text-4xl text-gray-400 max-w-128 mt-6">
              <span className="line-through">{service.old_price}</span> ₽
            </p>
          )}
        </div>
        <div className="flex gap-4 mt-4">
          <Button className="flex-1" size="lg" variant="accent">
            <ClipboardList className="size-5" />
            Записаться
          </Button>
          <Button className="flex-1" size="lg" variant="secondary">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}
