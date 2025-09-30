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

  const form = useForm<RecordSchema>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      agreement: false,
    },
  })

  const onSubmit: SubmitHandler<RecordSchema> = (data) => {
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
          className="w-full h-12 uppercase text-sm font-roboto"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Отправка..." : options.submitText || "Отправить"}
        </Button>
      </form>
    </Form>
  )
}
