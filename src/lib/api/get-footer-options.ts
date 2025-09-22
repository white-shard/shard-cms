"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getFooterOptions() {
  const payload = await getPayload({ config })
  const options = await payload.findGlobal({
    slug: "footer-options",
  })

  return options
}
