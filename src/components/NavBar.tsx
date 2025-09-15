"use client"

import { Navigation } from "@/payload-types"
import { useState } from "react"
import { DropdownMenu } from "./DropdownMenu"
import { Logo } from "./ui/logo"

type Props = {
  navigation: Navigation
}

export function NavBar({ navigation }: Props) {
  const [selected, setSelected] = useState<Omit<
    Navigation["items"],
    "categories"
  > | null>(null)

  return (
    <div className="fixed top-0 z-10 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <header className="container mx-auto flex justify-between items-center gap-8 py-4">
        <Logo />
        <nav className="z-10 flex-1 flex items-center gap-8">
          {navigation.items?.map((item) => (
            <span
              key={item.id}
              className="cursor-pointer hover:text-accent"
              onMouseEnter={() => setSelected(item)}
            >
              {item.label}
            </span>
          ))}

          {selected && (
            <div>
              <DropdownMenu items={selected.categories || []} />
            </div>
          )}
        </nav>
        <div>Actions</div>
      </header>
    </div>
  )
}
