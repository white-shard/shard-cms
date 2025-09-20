"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getSpecialties() {
  const payload = await getPayload({ config })
  const specialties = await payload.find({
    collection: "specialties",
  })
  return specialties.docs
}
