import { NextRequest, NextResponse } from "next/server"
import { getPayload } from "payload"
import config from "@payload-config"

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const formData = await request.formData()

    // Получаем ID формы из данных
    const formId = formData.get("form_id") as string
    if (!formId) {
      return NextResponse.json(
        { error: "Form ID is required" },
        { status: 400 },
      )
    }

    // Получаем форму из базы данных
    const form = await payload.findByID({
      collection: "forms",
      id: formId,
    })

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 })
    }

    // Если у формы есть webhook, отправляем данные туда
    if (form.webhook) {
      try {
        const webhookResponse = await fetch(form.webhook, {
          method: "POST",
          body: formData,
        })

        if (!webhookResponse.ok) {
          throw new Error(`Webhook request failed: ${webhookResponse.status}`)
        }

        console.log("Webhook sent successfully to:", form.webhook)
      } catch (webhookError) {
        console.error("Webhook error:", webhookError)
        return NextResponse.json(
          { error: "Failed to send webhook" },
          { status: 500 },
        )
      }
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
