import { Form } from "@/payload-types"

export interface IActionButton {
  name: string
  icon: string
  color: string
  variant?: "default" | "icon" | "icon-text"
  action: "link" | "form"
  url?: string
  form?: Form
}
