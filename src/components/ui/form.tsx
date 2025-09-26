"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Form } from "@/payload-types"
import { useState } from "react"

interface FormComponentProps {
  form: Form
  onSubmit?: (data: FormData) => void
  onClose?: () => void
}

export function FormComponent({ form, onSubmit, onClose }: FormComponentProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateField = (field: any, value: string) => {
    if (field.required && !value.trim()) {
      return "Поле обязательно для заполнения"
    }

    if (field.textOptions?.validation === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return "Введите корректный email"
      }
    }

    if (field.textOptions?.validation === "phone" && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
        return "Введите корректный номер телефона"
      }
    }

    if (field.textOptions?.validation === "url" && value) {
      try {
        new URL(value)
      } catch {
        return "Введите корректный URL"
      }
    }

    if (
      field.textOptions?.minLength &&
      value.length < field.textOptions.minLength
    ) {
      return `Минимум ${field.textOptions.minLength} символов`
    }

    if (
      field.textOptions?.maxLength &&
      value.length > field.textOptions.maxLength
    ) {
      return `Максимум ${field.textOptions.maxLength} символов`
    }

    if (field.numberOptions?.min && Number(value) < field.numberOptions.min) {
      return `Минимальное значение: ${field.numberOptions.min}`
    }

    if (field.numberOptions?.max && Number(value) > field.numberOptions.max) {
      return `Максимальное значение: ${field.numberOptions.max}`
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    // Валидация полей
    form.fields?.forEach((field) => {
      const value = formData.get(field.name) as string
      const error = validateField(field, value || "")
      if (error) {
        newErrors[field.name] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      if (form.webhook) {
        const response = await fetch(form.webhook, {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error("Ошибка отправки формы")
        }
      }

      if (onSubmit) {
        onSubmit(formData)
      }

      // Закрыть форму после успешной отправки
      if (onClose) {
        onClose()
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error)
      setErrors({ submit: "Произошла ошибка при отправке формы" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderField = (field: any) => {
    const fieldError = errors[field.name]
    const fieldId = `field-${field.name}`

    switch (field.type) {
      case "text":
        return (
          <div key={field.name} className="space-y-2 relative">
            <Label htmlFor={fieldId} className="text-base sm:text-lg">
              {field.label}
            </Label>
            <Input
              id={fieldId}
              name={field.name}
              type="text"
              placeholder={`${field.placeholder} ${field.required ? "*" : ""}`}
              required={field.required}
              className={cn(
                "px-4 sm:px-6 py-4 lg:py-8 sm:py-6 text-lg sm:text-xl lg:text-2xl",
                fieldError ? "border-red-500" : "",
              )}
            />
            {fieldError && <p className="text-sm text-red-500">{fieldError}</p>}
          </div>
        )

      case "textarea":
        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={fieldId} className="text-base sm:text-lg">
              {field.label || field.name}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <textarea
              id={fieldId}
              name={field.name}
              placeholder={`${field.placeholder} ${field.required ? "*" : ""}`}
              required={field.required}
              className={`flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-input bg-background px-4 sm:px-6 py-4 sm:py-6 text-lg sm:text-2xl ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                fieldError ? "border-red-500" : ""
              }`}
            />
            {fieldError && <p className="text-sm text-red-500">{fieldError}</p>}
          </div>
        )

      case "number":
        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={fieldId} className="text-base sm:text-lg">
              {field.label || field.name}
              {field.required && <span className="text-gray-400 ml-1">*</span>}
            </Label>
            <Input
              id={fieldId}
              name={field.name}
              type="number"
              placeholder={field.placeholder}
              required={field.required}
              min={field.numberOptions?.min}
              max={field.numberOptions?.max}
              className={cn(
                "px-4 sm:px-6 py-4 sm:py-6 text-lg sm:text-2xl lg:text-4xl",
                fieldError ? "border-red-500" : "",
              )}
            />
            {fieldError && <p className="text-sm text-red-500">{fieldError}</p>}
          </div>
        )

      case "checkbox":
        return (
          <div key={field.name} className="flex items-center space-x-3">
            <div className="relative">
              <input
                id={fieldId}
                name={field.name}
                type="checkbox"
                className="sr-only peer"
              />
              <label
                htmlFor={fieldId}
                className="h-6 w-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-accent peer-checked:border-primary transition-all duration-200 cursor-pointer flex items-center justify-center p-1"
              >
                <svg
                  className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <Label
              htmlFor={fieldId}
              className="text-base sm:text-lg leading-none peer-disabled:cursor-not-allowed text-gray-600 peer-disabled:opacity-70 cursor-pointer"
            >
              {field.label || field.name}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
          </div>
        )

      case "select":
        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={fieldId} className="text-base sm:text-lg">
              {field.label || field.name}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <select
              id={fieldId}
              name={field.name}
              required={field.required}
              className={`flex h-12 sm:h-14 w-full rounded-md border border-input bg-background px-4 sm:px-6 py-4 sm:py-6 text-lg sm:text-2xl ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                fieldError ? "border-red-500" : ""
              }`}
            >
              <option value="">Выберите...</option>
              {field.selectOptions?.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldError && <p className="text-sm text-red-500">{fieldError}</p>}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {form.fields?.map(renderField)}

      {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 lg:py-8 text-base sm:text-lg py-3 sm:py-4"
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
      </div>
    </form>
  )
}
