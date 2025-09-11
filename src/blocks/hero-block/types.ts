import { Media } from "@/payload-types"

export interface HeroBlockFields {
  variant: "default" | "service" | "custom"
  img: Media
  beforeHeading?: string
  heading: string
  thesis?: string
  price?: string
  old_price?: string
  description?: string
  actions: {
    name: string
    icon: string
    color: string
  }[]
}
