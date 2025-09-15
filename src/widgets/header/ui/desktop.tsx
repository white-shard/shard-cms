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
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Navigation } from "../types"

export type Props = {
  navigation: Navigation
}

export function DesktopHeader({ navigation }: Props) {
  return (
    <div className="flex gap-8 items-center container mx-auto">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8 text-lg">
          {navigation.items.map((item) =>
            item.hasCategories && item.categories.length ? (
              <HoverCard key={item.id}>
                <HoverCardTrigger className="cursor-pointer hover:text-accent flex items-center gap-2">
                  <span>{item.label}</span>
                  <ChevronDown className="size-4" />
                </HoverCardTrigger>
                <HoverCardContent className="mt-8 w-screen h-128 rounded-none">
                  <div className="container mx-auto flex flex-wrap gap-16 justify-start">
                    {item.categories.map((category) => (
                      <div
                        key={category.id}
                        className="space-y-2 flex flex-col gap-2"
                      >
                        <Link
                          className="cursor-pointer hover:text-accent text-3xl text-primary"
                          href={category.url || "#"}
                        >
                          {category.label}
                        </Link>
                        {category.hasItems && category.items.length ? (
                          <div className="space-y-1 text-xl text-secondary-foreground flex flex-col gap-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.id}
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
                className="cursor-pointer hover:text-accent"
              >
                {item.label}
              </Link>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
