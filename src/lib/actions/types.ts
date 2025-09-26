import { Form } from "@/payload-types"

export interface IActionButton {
  name: string
  icon: string
  color: string
  action: "link" | "form"
  url?: string
  form?: Form
}
