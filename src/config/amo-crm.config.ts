import { AmoCRMService } from "@/lib/amocrm/amocrm.service"
import config from "@/payload.config"
import { getPayload } from "payload"

export async function createAmoCRMService(): Promise<AmoCRMService | null> {
  try {
    const payload = await getPayload({ config })
    const options = await payload.findGlobal({
      slug: "amo-crm",
    })

    if (
      !options.subdomain ||
      !options.integrationId ||
      !options.integrationSecret
    ) {
      return null
    }

    return new AmoCRMService(
      options.subdomain,
      options.integrationId,
      options.integrationSecret,
      options.status === "✅ CRM подключена",
    )
  } catch (error) {
    console.error("Ошибка создания AmoCRMService:", error)
    return null
  }
}

export async function getAmoCRMAuth() {
  try {
    const payload = await getPayload({ config })
    const options = await payload.findGlobal({
      slug: "amo-crm",
      showHiddenFields: true,
    })

    if (!options.access_token || !options.refresh_token) {
      return null
    }

    return {
      access_token: options.access_token,
      refresh_token: options.refresh_token,
      server_time: options.server_time || 0,
      expires_in: options.expires_in || 0,
    }
  } catch (error) {
    console.error("Ошибка получения AmoCRM auth:", error)
    return null
  }
}
