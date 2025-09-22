"use server"

import { getPayload } from "payload"
import config from "@/payload.config"

export async function getSiteOptions() {
  const payload = await getPayload({ config })
  const options = await payload.findGlobal({
    slug: "options",
  })

  return options
}
