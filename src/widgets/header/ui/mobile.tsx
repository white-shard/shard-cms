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
    <div className="flex justify-end items-center px-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="border-b pb-5">
            <Link href="/">
              <Logo />
            </Link>
          </SheetHeader>

          <nav className="flex items-start md:items-center text-2xl font-medium flex-col md:flex-row">
            {navigation.items.map((item) =>
              item.hasCategories && item.categories.length ? (
                <Accordion
                  key={item.id}
                  className="w-full"
                  type="single"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-4 py-4 text-2xl hover:bg-gray-100 rounded-none">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="border-l-1 border-gray-400 mx-4 flex flex-col gap-6">
                      {item.categories.map((category) => (
                        <div
                          key={category.id}
                          className="space-y-2 flex flex-col"
                        >
                          <Link
                            className="cursor-pointer hover:text-accent text-2xl text-primary hover:bg-gray-100 py-4 px-4"
                            href={category.url || "#"}
                          >
                            {category.label}
                          </Link>
                          {category.hasItems && category.items.length ? (
                            <div className="space-y-1 text-xl text-secondary-foreground flex flex-col gap-1">
                              {category.items.map((item) => (
                                <Link
                                  key={item.id}
                                  className="hover:underline hover:bg-gray-100 py-4 px-4"
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
                  className="w-full px-4 py-4 hover:bg-gray-100 cursor-pointer"
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
