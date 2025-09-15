"use client"

import { Service } from "@/payload-types"
import { useEffect, useState } from "react"
import { ServicesBlockFields } from "../types"
import { getServices } from "../vm/get-services"
import { ServicesCard } from "./services-card"
import { ServicesBlockMain } from "./services-main"

type Props = {
  fields: ServicesBlockFields
}

export function ServicesBlockDefault({ fields }: Props) {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    getServices(fields.count).then((services) => {
      setServices(services)
    })
  }, [fields.count])

  return (
    <div className="flex flex-col gap-4">
      {fields.main && <ServicesBlockMain service={fields.main} />}
      <div className="container my-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {services?.map(
          (service) =>
            service.id !== fields.main?.id && (
              <ServicesCard key={service.id} service={service} />
            ),
        )}
      </div>
    </div>
  )
}
