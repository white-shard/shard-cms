import { Media } from "@/payload-types"

export interface AdvantagesChallangesBlockFields {
  advantages: {
    img: Media
    heading: string
    description?: string
    advantages: ACItem[]
  }
  challenges: {
    img: Media
    heading: string
    description?: string
    challenges: ACItem[]
  }
}

export interface ACItem {
  heading: string
  description?: string
}
