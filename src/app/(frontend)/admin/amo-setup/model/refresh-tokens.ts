"use server"

import config from "@/payload.config"
import { getPayload } from "payload"

export async function getActualAccessToken() {
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

  if (!crm.refresh_token) {
    throw new Error("Refresh token не найден. Необходимо переподключить AmoCRM")
  }

  const currentTime = Math.floor(Date.now() / 1000)
  const tokenExpiryTime = (crm.server_time || 0) + (crm.expires_in || 0)

  console.log("Токен устарел?")
  if (currentTime < tokenExpiryTime && crm.access_token) {
    console.log("Токен действителен")
    return crm.access_token
  }
  console.log("Токен устарел!")

  console.log("Обновляю токен...")
  const response = await fetch(
    `https://${crm.subdomain}.amocrm.ru/oauth2/access_token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: crm.refresh_token,
        client_id: crm.integrationId,
        client_secret: crm.integrationSecret,
        grant_type: "refresh_token",
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
    },
  })

  console.log("Токен обновлен успешно")
  return data.access_token
}
