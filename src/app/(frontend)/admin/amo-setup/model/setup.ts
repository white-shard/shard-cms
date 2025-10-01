"use server"

import { getAmoCRMService } from "@/lib/amocrm"
import config from "@/payload.config"
import { getPayload } from "payload"

export async function setupAmoCRM(code: string) {
  const payload = await getPayload({ config })
  const amoService = await getAmoCRMService()

  if (!amoService) {
    throw new Error("Не удалось создать AmoCRMService. Проверьте настройки.")
  }

  const tokens = await amoService.fetchTokens(code)

  await payload.updateGlobal({
    slug: "amo-crm",
    data: {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      server_time: tokens.server_time,
      expires_in: tokens.expires_in,
      status: "✅ CRM подключена",
    },
  })
}
