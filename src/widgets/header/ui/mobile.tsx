import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { HeaderOption } from "@/payload-types"
import { ActionButton } from "@/lib/actions/action-button"

export type Props = {
  navigation: HeaderOption
}

export function MobileHeader({ navigation }: Props) {
  return (
    <div className="flex justify-between items-center px-3 sm:px-4 md:px-6">
      <Link href="/" className="flex-shrink-0">
        <Logo className="text-base sm:text-lg md:text-xl" />
      </Link>
      <div className="flex items-center gap-2">
        {navigation.actionButtons?.map((button, index) => (
          <ActionButton
            key={index}
            data={{
              name: button.name,
              icon: button.icon || "cog",
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Menu className="size-5 sm:size-6 md:size-8" />
            </Button>
          </SheetTrigger>
          <SheetContent className="max-w-screen w-full sm:w-96" side="right">
            <SheetHeader className="border-b pb-3 sm:pb-4 md:pb-5 w-full">
              <SheetTitle className="sr-only">Меню навигации</SheetTitle>
              <Link href="/">
                <Logo className="text-base sm:text-lg md:text-xl" />
              </Link>
            </SheetHeader>

            <nav className="flex items-start text-base sm:text-lg md:text-xl font-medium flex-col">
              {navigation.navigation?.map((item, index) =>
                item.hasCategories && item.categories?.length ? (
                  <Accordion
                    key={index}
                    className="w-full"
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl hover:bg-gray-100 rounded-none">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="border-l-1 border-gray-400 mx-2 sm:mx-3 md:mx-4 flex flex-col gap-2 sm:gap-4 md:gap-6">
                        {item.categories.map((category, catIndex) => (
                          <div
                            key={catIndex}
                            className="space-y-2 flex flex-col"
                          >
                            <Link
                              className="cursor-pointer hover:text-accent text-base sm:text-lg md:text-xl text-primary hover:bg-gray-100 py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4"
                              href={category.url || "#"}
                            >
                              {category.label}
                            </Link>
                            {category.hasItems && category.items?.length ? (
                              <div className="space-y-1 text-sm sm:text-base md:text-lg text-secondary-foreground flex flex-col gap-1">
                                {category.items.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    className="hover:underline hover:bg-gray-100 py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4"
                                    href={subItem.url || "#"}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <div
                    key={index}
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link href={item.url || "#"}>{item.label}</Link>
                  </div>
                ),
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
