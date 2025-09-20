import { Media } from "@/payload-types"

export interface StaffBlockFields {
  staff: {
    img: Media
    fullname: string
    expirience: number
    description: string
    features: { item: string }[]
  }
}
