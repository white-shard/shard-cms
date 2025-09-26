"use client"

import { Button } from "@/components/ui/button"
import { iconList } from "../icons"
import { IActionButton } from "./types"
import { useDialogWithForm } from "../hooks/use-dialog"
import Link from "next/link"

type Props = {
  data: IActionButton
}

export function ActionButton({ data }: Props) {
  const Icon = iconList[data.icon as keyof typeof iconList]

  const formDialog = useDialogWithForm(data.form)

  const button = (
    <Button
      className="w-full sm:w-auto text-base sm:text-lg lg:text-base px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 min-w-48 sm:min-w-56 lg:min-w-64"
      variant={data.color as never}
      size="lg"
    >
      {!!data.icon && <Icon className="size-5 sm:size-6 lg:size-7" />}
      <span className="ml-2">{data.name}</span>
    </Button>
  )

  switch (data.action) {
    case "link":
      return <Link href={data.url || "#"}>{button}</Link>
    case "form":
      if (!data.form) return button

      return (
        <>
          <div onClick={formDialog.openDialog} className="cursor-pointer">
            {button}
          </div>
          {formDialog.dialog}
        </>
      )
  }

  return button
}
