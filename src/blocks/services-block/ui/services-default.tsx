import { ServicesBlockFields } from "../types"
import { ServicesCard } from "./services-card"
import { ServicesBlockMain } from "./services-main"

type Props = {
  fields: ServicesBlockFields
}

export function ServicesBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      {fields.main && <ServicesBlockMain service={fields.main} />}
      <div className="container my-6 sm:my-8 lg:my-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {fields.services.map(
          (service) =>
            service.service.id !== fields.main?.id && (
              <ServicesCard
                key={service.service.id}
                service={service.service}
              />
            ),
        )}
      </div>
    </div>
  )
}
