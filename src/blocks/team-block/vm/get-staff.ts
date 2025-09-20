"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getStaff() {
  const payload = await getPayload({ config })
  const staff = await payload.find({
    collection: "staff",
  })
  return staff.docs
}
