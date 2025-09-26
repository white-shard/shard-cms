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
      className={
        data.variant === "icon"
          ? "h-10 w-10 p-0 border-0 bg-transparent hover:bg-transparent hover:opacity-70 transition-opacity"
          : data.variant === "icon-text"
            ? "h-10 px-3 py-2 border-0 bg-transparent hover:bg-transparent hover:opacity-70 transition-opacity"
            : "w-full sm:w-auto text-base sm:text-lg lg:text-base px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 min-w-48 sm:min-w-56 lg:min-w-64"
      }
      variant={
        data.variant === "icon" || data.variant === "icon-text"
          ? "ghost"
          : (data.color as never)
      }
      style={
        data.variant === "icon" || data.variant === "icon-text"
          ? {
              color:
                data.color === "accent"
                  ? "var(--color-accent)"
                  : data.color === "primary"
                    ? "var(--color-primary)"
                    : data.color === "secondary"
                      ? "var(--color-secondary)"
                      : data.color === "white"
                        ? "white"
                        : "inherit",
            }
          : undefined
      }
      size={data.variant === "icon" ? "icon" : "lg"}
    >
      {!!data.icon && (
        <Icon
          className={
            data.variant === "icon" || data.variant === "icon-text"
              ? "size-6"
              : "size-5 sm:size-6 lg:size-7"
          }
        />
      )}
      {(data.variant === "default" || data.variant === "icon-text") && (
        <span
          className={data.variant === "icon-text" ? "ml-2 text-base" : "ml-2"}
        >
          {data.name}
        </span>
      )}
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
