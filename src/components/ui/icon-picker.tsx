"use client"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import * as React from "react"

export interface IconPickerProps {
  icons: React.ComponentType<{ className?: string }>[]
  value?: number
  onValueChange?: (index: number) => void
  className?: string
}

export function IconPicker({
  icons,
  value,
  onValueChange,
  className,
}: IconPickerProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(value ?? 0)

  const SelectedIcon = icons[selectedIndex]

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    onValueChange?.(index)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "size-12 justify-center p-0 hover:bg-accent",
            className,
          )}
        >
          {SelectedIcon && <SelectedIcon className="h-6 w-6" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-3 bg-white" align="start">
        <div className="grid grid-cols-6 gap-2">
          {icons.map((Icon, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={cn(
                "flex items-center justify-center h-10 w-10 rounded-md transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selectedIndex === index && "bg-accent text-accent-foreground",
              )}
            >
              <Icon className="h-5 w-5 text-black" />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
