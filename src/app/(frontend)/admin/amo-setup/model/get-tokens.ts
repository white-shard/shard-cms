"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getAmoTokens(code: string) {
  try {
    const payload = await getPayload({ config })
    const crm = await payload.findGlobal({
      slug: "amo-crm",
    })

    if (!crm) {
      throw new Error("AmoCRM конфигурация не найдена")
    }

    if (!crm.subdomain || !crm.integrationId || !crm.integrationSecret) {
      throw new Error(
        "Неполная конфигурация AmoCRM: отсутствуют subdomain, integrationId или integrationSecret",
      )
    }

    const response = await fetch(
      `https://${crm.subdomain}.amocrm.ru/oauth2/access_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          client_id: crm.integrationId,
          client_secret: crm.integrationSecret,
          grant_type: "authorization_code",
          redirect_uri: `http://localhost:3000/admin/amo-setup`,
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Ошибка AmoCRM API (${response.status}): ${errorText}`)
    }

    const data = await response.json()

    if (data.error) {
      throw new Error(
        `Ошибка AmoCRM: ${data.error} - ${data.error_description || "Неизвестная ошибка"}`,
      )
    }

    if (!data.access_token) {
      throw new Error("Не получен access_token от AmoCRM")
    }

    await payload.updateGlobal({
      slug: "amo-crm",
      data: {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        server_time: data.server_time,
        expires_in: data.expires_in,
        status: "✅ CRM подключена",
      },
    })

    return { success: true, message: "Токены успешно получены и сохранены" }
  } catch (error) {
    console.error("Ошибка получения токенов AmoCRM:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Неизвестная ошибка",
    }
  }
}
