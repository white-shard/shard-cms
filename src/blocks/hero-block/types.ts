import { IActionButton } from "@/lib/actions/types"
import { Media } from "@/payload-types"

export interface HeroBlockFields {
  variant: "default" | "service" | "custom"
  img: Media
  logo: Media
  beforeHeading?: string
  heading: string
  thesis?: string
  price?: string
  old_price?: string
  description?: string
  actions: IActionButton[]
}
