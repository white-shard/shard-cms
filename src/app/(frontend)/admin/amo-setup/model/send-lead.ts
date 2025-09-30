"use server"

import { RecordSchema } from "@/components/fields/form/schemas/record.schema"
import { Form } from "@/payload-types"
import config from "@/payload.config"
import { getPayload } from "payload"
import { getActualAccessToken } from "./refresh-tokens"

export async function sendLead(form: Form, data: RecordSchema) {
  const payload = await getPayload({ config })
  const crm = await payload.findGlobal({
    slug: "amo-crm",
  })
  const accessToken = await getActualAccessToken()

  console.log("Токен доступа:", accessToken)

  console.log("Формирую заявку...")

  const lead = {
    name: form.heading,
    custom_fields_values: [
      {
        field_id: form.fields.fullname,
        values: [{ value: data.fullname }],
      },
      {
        field_id: form.fields.phone,
        values: [{ value: data.phone }],
      },
      ...(form.fields?.hidden_fields?.map((field) => ({
        field_id: field.amo_id,
        values: [{ value: field.value }],
      })) || []),
    ],
  }

  console.log("Отправляю заявку...")

  const response = await fetch(
    `https://${crm.subdomain}.amocrm.ru/api/v4/leads`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify([lead]),
    },
  )

  if (response.ok) {
    const data = await response.json()
    console.log(data)
    console.log("Заявка отправлена!")
  } else {
    console.log(response.status)
    console.log("Заявка не отправлена!")
  }

  return response.ok
}
