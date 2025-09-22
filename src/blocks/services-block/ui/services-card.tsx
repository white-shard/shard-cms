import { Button } from "@/components/ui/button"
import { Service } from "@/payload-types"
import { Check, ClipboardList, Microscope } from "lucide-react"

type Props = {
  service: Service
}

export function ServicesCard({ service }: Props) {
  return (
    <article className="flex-1 flex flex-col justify-between gap-2 bg-gray-100 rounded-xl p-4 border-t-6 border-t-primary border-1 border-gray-200">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Microscope className="size-12 text-primary" />

          <div className="flex gap-4">
            {service.price && (
              <p className="text-4xl text-primary max-w-128 mt-6">
                {service.price} ₽
              </p>
            )}
            {service.old_price && (
              <p className="text-2xl text-gray-400 max-w-128 mt-6">
                <span className="line-through">{service.old_price}</span> ₽
              </p>
            )}
          </div>
        </div>
        <span className="text-2xl text-primary">{service.title}</span>
        <ul className="flex flex-col gap-2 text-xl text-gray-600 mt-4">
          {service.advantages?.map((advantage) => (
            <li key={advantage.id} className="flex items-center gap-2">
              <Check className="size-6 text-gray-600" />
              {advantage.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 mt-4">
        <Button className="flex-1" size="lg" variant="primary">
          <ClipboardList className="size-5" />
          Записаться
        </Button>
        <Button className="flex-1" size="lg" variant="secondary">
          Подробнее
        </Button>
      </div>
    </article>
  )
}
