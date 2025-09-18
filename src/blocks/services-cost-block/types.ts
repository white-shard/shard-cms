import { Service } from "@/payload-types"

export interface ServicesCostBlockFields {
  heading: string
  description: string
  services: {
    item: Service
  }[]
}
