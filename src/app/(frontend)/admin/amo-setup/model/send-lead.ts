"use server"

import { RecordSchema } from "@/components/fields/form/schemas/record.schema"
import { getAmoCRMAuthData, getAmoCRMService } from "@/lib/amocrm"
import { Form } from "@/payload-types"
import config from "@/payload.config"
import { getPayload } from "payload"

export async function sendLead(formOptions: Form, data: RecordSchema) {
  const payload = await getPayload({ config })
  const options = await payload.findGlobal({
    slug: "amo-crm",
  })

  const amoService = await getAmoCRMService()
  const auth = await getAmoCRMAuthData()

  if (!amoService || !auth) {
    console.error("AmoCRM не настроен или токены отсутствуют")
    return
  }

  const contact = await amoService.addContact(auth, {
    name: formOptions.adminTitle || data.fullname,
    fields: [
      {
        field_id: options.contactPhoneField || 0,
        values: [{ value: data.phone }],
      },
    ],
  })

  await amoService.addLead(
    auth,
    {
      name: data.fullname,
      fields:
        formOptions?.hidden_fields?.map((field) => ({
          field_id: field.amo_id,
          values: [{ value: field.value }],
        })) || [],
    },
    contact || -1,
  )
}
