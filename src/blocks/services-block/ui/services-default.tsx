import { ServicesBlockFields } from "../types"
import { ServicesCard } from "./services-card"
import { ServicesBlockMain } from "./services-main"

type Props = {
  fields: ServicesBlockFields
}

export function ServicesBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {fields.main && <ServicesBlockMain service={fields.main} />}
      <div className="container my-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
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
