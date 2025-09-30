"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { iconList } from "@/lib/icons"
import { useField, useForm } from "@payloadcms/ui"
import type { TextFieldClientComponent } from "payload"
import * as React from "react"
import "./IconPicker.css"

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
    <div className="icon-picker-container">
      {disabled}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={path}
            aria-expanded={open}
            aria-label="Select icon"
            className="icon-picker-button"
            disabled={disabled}
          >
            <div className="icon-picker-button-content">
              {SelectedIcon ? (
                <SelectedIcon className="icon-picker-icon" />
              ) : value === "" ? (
                <span className="icon-picker-no-icon-text">Нет иконки</span>
              ) : (
                <span className="icon-picker-no-icon-text">Иконка</span>
              )}
            </div>
            <svg
              className="icon-picker-arrow"
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
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="icon-picker-popover"
          align="start"
          sideOffset={4}
        >
          <div className="icon-picker-popover-content">
            <button
              onClick={handleNoIcon}
              disabled={disabled}
              className={`icon-picker-no-icon-button ${value === "" ? "selected" : ""}`}
            >
              <span className="icon-picker-no-icon-symbol">×</span>
              Нет иконки
            </button>
            <div className="icon-picker-grid">
              {iconNames.map((iconName: string, index: number) => {
                const Icon = iconList[iconName as keyof typeof iconList]
                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={disabled}
                    className="icon-picker-grid-item"
                    aria-label={`Icon ${index + 1}`}
                  >
                    {Icon && <Icon className="icon-picker-grid-icon" />}
                  </button>
                )
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {showError && <p className="icon-picker-error">{errorMessage}</p>}
    </div>
  )
}

export default IconPickerField
