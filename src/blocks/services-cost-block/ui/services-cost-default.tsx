import { ServicesCostBlockFields } from "../types"

type Props = {
  fields: ServicesCostBlockFields
}

export function ServicesCostBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <span className="text-3xl">{fields.heading}</span>
      {fields.description && (
        <p className="text-2xl text-gray-600 w-full sm:w-128 sm:text-center">
          {fields.description}
        </p>
      )}
      <ul className="flex flex-col gap-4 mt-4 w-full max-w-4xl">
        <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 p-4 bg-gray-100 sm:bg-none md:p-0 rounded-lg">
          <span className="text-2xl text-primary">
            Профессиональная гигиена <span className="text-accent">GBT</span>
          </span>
          <span className="text-2xl">13 500</span>
        </li>
        {fields.services.map((service) => (
          <li
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 p-4 bg-gray-100 sm:bg-none md:p-0 rounded-lg"
            key={service.item.id}
          >
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
