"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getAmoOptions() {
  const payload = await getPayload({ config })
  const options = await payload.findGlobal({
    slug: "amo-crm",
  })

  return options
}
