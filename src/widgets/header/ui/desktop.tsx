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
import { ChevronDown, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "../types"
import { useState } from "react"
import { cn } from "@/lib/utils"

export type Props = {
  navigation: Navigation
}

export function DesktopHeader({ navigation }: Props) {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <div className="flex gap-4 lg:gap-8 items-center justify-between container mx-auto px-4 lg:px-6">
      <Link href="/">
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4 lg:gap-8 text-base lg:text-lg">
          {navigation.items.map((item) =>
            item.hasCategories && item.categories.length ? (
              <HoverCard onOpenChange={setOpen} open={open} key={item.id}>
                <HoverCardTrigger className="cursor-pointer hover:text-accent flex items-center gap-1 lg:gap-2">
                  <span
                    className={item.color === "accent" ? "text-accent" : ""}
                  >
                    {item.label}
                  </span>
                  <ChevronDown className="size-3 lg:size-4" />
                </HoverCardTrigger>
                <HoverCardContent className="mt-8 w-screen min-h-96 lg:min-h-128 rounded-none">
                  <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 justify-start">
                    {item.categories.map((category) => (
                      <div
                        key={category.id}
                        className="space-y-2 flex flex-col gap-2"
                      >
                        <Link
                          className="cursor-pointer hover:text-accent text-xl lg:text-3xl text-primary"
                          onClick={handleClose}
                          href={category.url || "#"}
                        >
                          {category.label}
                        </Link>
                        {category.hasItems && category.items.length ? (
                          <div className="space-y-1 text-base lg:text-xl text-secondary-foreground flex flex-col gap-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.id}
                                onClick={handleClose}
                                className="hover:underline"
                                href={item.url || "#"}
                              >
                                {item.label}
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
                key={item.id}
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
      <div className="flex gap-4 lg:gap-8">
        <Instagram className="size-5 lg:size-6" />
        <div className="flex items-center gap-1 lg:gap-2">
          <MessageCircle className="text-accent size-5 lg:size-6" />
          <span className="text-accent text-sm lg:text-base hidden sm:inline">
            Чат заботы
          </span>
        </div>
      </div>
    </div>
  )
}
