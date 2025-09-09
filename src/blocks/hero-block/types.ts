import { Media } from "@/payload-types"

export interface HeroBlockFields {
  variant: "default" | "service1" | "service2"
  img: Media
  beforeHeading?: string
  heading: string
  description?: string
  actions: {
    name: string
    icon: string
    color: string
  }[]
}
