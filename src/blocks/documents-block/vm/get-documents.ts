"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getDocuments(folder: string) {
  const payload = await getPayload({ config })
  const documents = await payload.find({
    collection: "documents",
    where: {
      folder: {
        equals: folder,
      },
    },
  })
  return documents.docs
}
