"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Logo } from "@/components/ui/logo"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ActionButton } from "@/lib/actions/action-button"
import { HeaderOption } from "@/payload-types"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export type Props = {
  options: HeaderOption
  onHoverCardChange?: (isOpen: boolean) => void
}

export function DesktopHeader({ options, onHoverCardChange }: Props) {
  const [open, setOpen] = useState<number | false>(false)
  const [manualClick, setManualClick] = useState(false)

  const handleClose = () => {
    setOpen(false)
    setManualClick(false)
    onHoverCardChange?.(false)
  }

  const handleToggle = (index: number) => {
    const newOpen = open === index ? false : index
    setOpen(newOpen)
    setManualClick(newOpen !== false)

    // Если открываем новую категорию, сбрасываем ручной клик предыдущей
    if (newOpen !== false && open !== index) {
      setManualClick(true)
    }

    onHoverCardChange?.(newOpen !== false)
  }

  const handleMouseLeave = () => {
    // При уходе мыши закрываем только если не был ручной клик
    if (!manualClick) {
      setOpen(false)
      onHoverCardChange?.(false)
    }
  }

  const handleHoverCardChange = (isOpen: boolean, index: number) => {
    // Игнорируем попытки закрытия через hover если был ручной клик по этому элементу
    if (manualClick && open === index && !isOpen) {
      return
    }

    if (isOpen) {
      setOpen(index)
      // Если открываем новую категорию через hover, сбрасываем ручной клик
      if (open !== index) {
        setManualClick(false)
      }
      onHoverCardChange?.(true)
    } else {
      setOpen(false)
      setManualClick(false)
      onHoverCardChange?.(false)
    }
  }

  return (
    <div className="flex gap-2 xl:gap-4 2xl:gap-8 items-center justify-between container mx-auto px-4 xl:px-6">
      <Link href="/">
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2 xl:gap-4 2xl:gap-8 text-sm xl:text-base 2xl:text-lg">
          {options.navigation?.map((item, index) =>
            item.hasCategories && item.categories?.length ? (
              <HoverCard
                onOpenChange={(isOpen) => handleHoverCardChange(isOpen, index)}
                open={open === index}
                key={index}
              >
                <HoverCardTrigger
                  className="cursor-pointer hover:text-accent flex items-center gap-1 xl:gap-2"
                  onClick={() => handleToggle(index)}
                >
                  <span
                    className={item.color === "accent" ? "text-accent" : ""}
                  >
                    {item.label}
                  </span>
                  <ChevronDown
                    className={`size-3 xl:size-4 transition-transform ${open === index ? "rotate-180" : ""}`}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="mt-8 w-screen min-h-96 xl:min-h-128 rounded-none">
                  <div className="container mx-auto grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 2xl:gap-16 justify-start">
                    {item.categories.map((category, catIndex) => (
                      <div
                        key={catIndex}
                        className="space-y-2 flex flex-col gap-2"
                      >
                        <Link
                          className="cursor-pointer hover:text-accent text-lg xl:text-2xl 2xl:text-3xl text-primary"
                          onClick={handleClose}
                          href={category.url || "#"}
                        >
                          {category.label}
                        </Link>
                        {category.hasItems && category.items?.length ? (
                          <div className="space-y-1 text-sm xl:text-lg 2xl:text-xl text-secondary-foreground flex flex-col gap-1">
                            {category.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                onClick={handleClose}
                                className="hover:underline"
                                href={subItem.url || "#"}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link
                key={index}
                href={item.url || "#"}
                style={{
                  color:
                    item.color === "accent" ? "var(--color-accent)" : "auto",
                }}
                className="cursor-pointer hover:text-accent whitespace-nowrap"
              >
                {item.label}
              </Link>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-1 xl:gap-2 2xl:gap-4">
        {options.actionButtons?.map((button, index) => (
          <ActionButton
            key={index}
            data={{
              name: button.name,
              icon: button.icon || "1", // Default to cog icon (index 1)
              color: button.color || "primary",
              variant: button.variant || "icon",
              action: button.action || "link",
              url: button.url || undefined,
              form:
                typeof button.form === "number"
                  ? undefined
                  : button.form || undefined,
            }}
          />
        ))}
      </div>
    </div>
  )
}
