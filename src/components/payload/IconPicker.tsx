"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { iconList } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { useField, useForm } from "@payloadcms/ui"
import type { TextFieldClientComponent } from "payload"
import * as React from "react"
import { Button } from "../ui/button"

const IconPickerField: TextFieldClientComponent = ({
  field,
  path: pathFromProps,
}) => {
  const { path, value, setValue, showError, errorMessage } = useField<string>({
    path: pathFromProps || field?.name || "",
  })

  const [open, setOpen] = React.useState(false)

  // Get form state to check if saving
  const { disabled } = useForm()

  // Get icon names from iconList
  const iconNames = Object.keys(iconList)
  const selectedIndex = value && value !== "" ? Number.parseInt(value, 10) : -1
  const selectedIconName = selectedIndex >= 0 ? iconNames[selectedIndex] : null
  const SelectedIcon = selectedIconName
    ? iconList[selectedIconName as keyof typeof iconList]
    : null

  const handleSelect = (index: number) => {
    setValue(index.toString())
    setOpen(false)
  }

  const handleNoIcon = () => {
    setValue("")
    setOpen(false)
  }

  return (
    <div className="flex flex-col justify-end">
      {disabled}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={path}
            variant="outline"
            size="lg"
            aria-expanded={open}
            aria-label="Select icon"
            className="border-gray-300 bg-white shadow-xs"
            disabled={disabled}
          >
            <div className="flex items-center gap-2">
              {SelectedIcon ? (
                <SelectedIcon className="h-4 w-4" />
              ) : value === "" ? (
                <span className="text-muted-foreground">Нет иконки</span>
              ) : (
                <span className="text-muted-foreground">Иконка</span>
              )}
            </div>
            <svg
              className="h-4 w-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-fit max-w-84 p-4 bg-white"
          align="start"
          sideOffset={4}
        >
          <div className="space-y-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleNoIcon}
              disabled={disabled}
              className={cn(
                "w-full justify-start border-gray-300",
                value === "" && "bg-accent text-accent-foreground",
              )}
            >
              <span className="mr-2">×</span>
              Нет иконки
            </Button>
            <div className="grid grid-cols-6 gap-4 overflow-y-auto max-h-[300px]">
              {iconNames.map((iconName: string, index: number) => {
                const Icon = iconList[iconName as keyof typeof iconList]
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    onClick={() => handleSelect(index)}
                    disabled={disabled}
                    className="border-gray-300"
                    aria-label={`Icon ${index + 1}`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </Button>
                )
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {showError && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default IconPickerField
