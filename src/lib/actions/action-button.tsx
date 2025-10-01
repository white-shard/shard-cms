"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useDialogWithForm } from "../hooks/use-dialog"
import { iconList } from "../icons"
import { cn } from "../utils"
import { IActionButton } from "./types"

type Props = {
  data: IActionButton
}

export function ActionButton({ data }: Props) {
  // Handle both icon name (string) and icon index (number as string)
  const getIcon = () => {
    if (!data.icon) return null

    // If it's a number (index), get icon name from the list
    const iconIndex = Number.parseInt(data.icon, 10)
    if (!isNaN(iconIndex)) {
      const iconNames = Object.keys(iconList)
      const iconName = iconNames[iconIndex]
      return iconName ? iconList[iconName as keyof typeof iconList] : null
    }

    // If it's a string (icon name), use it directly
    return iconList[data.icon as keyof typeof iconList]
  }

  const Icon = getIcon()

  const formDialog = useDialogWithForm(data.form)

  const button = (
    <Button
      className={cn(
        data.variant === "icon"
          ? "h-10 w-10 p-0 border-0 hover:bg-transparent"
          : data.variant === "icon-text"
            ? "h-10 px-3 py-2 border-0 hover:bg-transparent transition-opacity"
            : "w-full md:w-auto text-base sm:text-lg lg:text-base px-6 py-6 max-w-full",
      )}
      variant={
        data.variant === "icon" || data.variant === "icon-text"
          ? "ghost"
          : (data.color as never)
      }
      style={
        data.variant === "icon" || data.variant === "icon-text"
          ? {
              color: (() => {
                switch (data.color) {
                  case "accent":
                    return "var(--color-accent)"
                  case "primary":
                    return "var(--color-primary)"
                  case "secondary":
                    return "var(--color-secondary)"
                  case "white":
                    return "white"
                  case "red":
                    return "#D81921"
                  default:
                    return "inherit"
                }
              })(),
            }
          : undefined
      }
      size={data.variant === "icon" ? "icon" : "lg"}
    >
      {!!data.icon && !!Icon && (
        <Icon
          className={
            data.variant === "icon"
              ? "size-5"
              : "size-5 hover:opacity-75 transition-opacity cursor-pointer"
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
