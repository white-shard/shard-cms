import { RuFlag } from "@/components/icons/ru-flag"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn, parseLinks } from "@/lib/utils"
import { UseFormRegisterReturn } from "react-hook-form"
import { FormField } from "../types"

type Props = {
  options: FormField & {
    textOptions?: {
      defaultValue?: string
      validation: "off" | "phone" | "email"
      minLength?: number
      maxLength?: number
    }
  }
  error?: string
} & UseFormRegisterReturn

export const TextField = ({ options, error, ...registerProps }: Props) => {
  const inputType =
    options.textOptions?.validation === "email"
      ? "email"
      : options.textOptions?.validation === "phone"
        ? "tel"
        : "text"

  return (
    <div key={options.name} className="space-y-2 relative">
      {!!options.label?.length && (
        <Label
          htmlFor={options.id}
          className={cn("text-base sm:text-lg", !!error && "text-red-500")}
        >
          {parseLinks(options.label)}
        </Label>
      )}
      <div className="relative">
        <Input
          id={options.id}
          type={inputType}
          placeholder={options.placeholder}
          hidden={options.hidden}
          minLength={options.textOptions?.minLength}
          maxLength={options.textOptions?.maxLength}
          className={cn(
            "px-4 sm:px-6 py-4 lg:py-8 sm:py-6 text-lg sm:text-xl lg:text-2xl",
            inputType === "tel" && "pr-10",
            !!error && "border-red-500",
          )}
          {...registerProps}
        />
        {inputType === "tel" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <RuFlag />
          </div>
        )}
      </div>
      {!!error && <p className="text-sm text-red-500">❌ {error}</p>}
    </div>
  )
}
