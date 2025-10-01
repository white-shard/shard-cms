"use client"

import { sendLead } from "@/app/(frontend)/admin/amo-setup/model/send-lead"
import { RuFlag } from "@/components/icons/ru-flag"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAmoOptions } from "@/lib/hooks/use-amo-options"
import { Form as FormOptions } from "@/payload-types"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { recordSchema, RecordSchema } from "./schemas/record.schema"

type Props = {
  options: FormOptions
  onSuccess: () => void
}

export function ServiceRecordForm({ options, onSuccess }: Props) {
  const [isPending, setIsPending] = useState(false)
  const { options: amoOptions } = useAmoOptions()

  const form = useForm<RecordSchema>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      agreement: false,
    },
  })

  const onSubmit: SubmitHandler<RecordSchema> = (data) => {
    // Получаем UTM метки из URL
    const urlParams = new URLSearchParams(window.location.search)
    const utmSource = urlParams.get("utm_source") || ""
    const utmMedium = urlParams.get("utm_medium") || ""
    const utmContent = urlParams.get("utm_content") || ""
    const utmTerm = urlParams.get("utm_term") || ""
    const utmCampaign = urlParams.get("utm_campaign") || ""

    // Получаем Google Analytics ID из cookies
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(";").shift()
      return ""
    }

    const gaId = getCookie("_ga") || ""
    const ymId = getCookie("_ym_uid") || ""

    // Добавляем скрытые поля к существующим
    const additionalFields = [
      ...(options.hidden_fields || []),
      {
        name: "utm_source",
        amo_id: amoOptions?.utm_source || 0,
        value: utmSource,
      },
      {
        name: "utm_medium",
        amo_id: amoOptions?.utm_medium || 0,
        value: utmMedium,
      },
      {
        name: "utm_content",
        amo_id: amoOptions?.utm_content || 0,
        value: utmContent,
      },
      { name: "utm_term", amo_id: amoOptions?.utm_term || 0, value: utmTerm },
      {
        name: "utm_campaign",
        amo_id: amoOptions?.utm_campaign || 0,
        value: utmCampaign,
      },
      { name: "_ga", amo_id: amoOptions?._ga || 0, value: gaId },
      { name: "_ym_uid", amo_id: amoOptions?._ym_uid || 0, value: ymId },
    ].filter((field) => field.amo_id > 0) // Фильтруем только поля с настроенными ID

    setIsPending(true)
    sendLead(options, data)
      .then(() => {
        onSuccess()
      })
      .finally(() => {
        setIsPending(false)
      })
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullname"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-12 px-4 text-lg font-roboto"
                  placeholder="Имя"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    className="h-12 pl-14 text-lg font-roboto"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                    {...field}
                  />
                </FormControl>
                <RuFlag className="absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreement"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    id="agreement"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel htmlFor="agreement" className="text-sm inline">
                  Даю согласие на обработку{" "}
                  <Link className="hover:underline text-accent" href="/privacy">
                    персональных данных
                  </Link>
                   в соответствии с{" "}
                  <Link
                    className="hover:underline text-accent"
                    href="/personal"
                  >
                    политикой обработки персональных данных
                  </Link>
                  , а также получение{" "}
                  <Link className="hover:underline text-accent" href="/reklam">
                    новостных и рекламных рассылок
                  </Link>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full h-12 mt-4 uppercase text-sm font-roboto"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Отправка..." : options.submitText || "Отправить"}
        </Button>
      </form>
    </Form>
  )
}
