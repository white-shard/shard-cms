"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getServices(count: number) {
  const payload = await getPayload({ config })
  const services = await payload.find({
    collection: "services",
    limit: count,
  })
  return services.docs
}
