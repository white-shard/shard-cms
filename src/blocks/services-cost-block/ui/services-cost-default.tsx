import { ServicesCostBlockFields } from "../types"

type Props = {
  fields: ServicesCostBlockFields
}

export function ServicesCostBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <span className="text-3xl">{fields.heading}</span>
      {fields.description && (
        <p className="text-2xl text-gray-600 w-128 text-center">
          {fields.description}
        </p>
      )}
      <ul className="flex flex-col gap-4 w-full px-32">
        <li className="flex justify-between">
          <span className="text-2xl text-primary">
            Профессиональная гигиена <span className="text-accent">GBT</span>
          </span>
          <span className="text-2xl">13 500</span>
        </li>
        {fields.services.map((service) => (
          <li className="flex justify-between" key={service.item.id}>
            <span className="text-2xl text-primary">{service.item.title}</span>
            <div className="flex gap-2 items-center">
              {service.item.old_price && (
                <span className="text-xl text-gray-400 line-through">
                  {service.item.old_price}
                </span>
              )}
              <span className="text-2xl">{service.item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
