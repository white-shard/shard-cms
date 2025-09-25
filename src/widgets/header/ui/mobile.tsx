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
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Navigation } from "../types"

export type Props = {
  navigation: Navigation
}

export function MobileHeader({ navigation }: Props) {
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex-shrink-0">
        <Logo className="text-lg sm:text-xl" />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            <Menu className="size-6 sm:size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent className="max-w-screen w-full sm:w-96" side="right">
          <SheetHeader className="border-b pb-4 sm:pb-5 w-full">
            <Link href="/">
              <Logo className="text-lg sm:text-xl" />
            </Link>
          </SheetHeader>

          <nav className="flex items-start text-lg sm:text-2xl font-medium flex-col">
            {navigation.items.map((item) =>
              item.hasCategories && item.categories.length ? (
                <Accordion
                  key={item.id}
                  className="w-full"
                  type="single"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-3 sm:px-4 py-3 sm:py-4 text-lg sm:text-2xl hover:bg-gray-100 rounded-none">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="border-l-1 border-gray-400 mx-3 sm:mx-4 flex flex-col gap-4 sm:gap-6">
                      {item.categories.map((category) => (
                        <div
                          key={category.id}
                          className="space-y-2 flex flex-col"
                        >
                          <Link
                            className="cursor-pointer hover:text-accent text-lg sm:text-2xl text-primary hover:bg-gray-100 py-3 sm:py-4 px-3 sm:px-4"
                            href={category.url || "#"}
                          >
                            {category.label}
                          </Link>
                          {category.hasItems && category.items.length ? (
                            <div className="space-y-1 text-base sm:text-xl text-secondary-foreground flex flex-col gap-1">
                              {category.items.map((item) => (
                                <Link
                                  key={item.id}
                                  className="hover:underline hover:bg-gray-100 py-3 sm:py-4 px-3 sm:px-4"
                                  href={item.url || "#"}
                                >
                                  {item.label}
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
                  key={item.id}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 hover:bg-gray-100 cursor-pointer"
                >
                  <Link href={item.url || "#"}>{item.label}</Link>
                </div>
              ),
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
