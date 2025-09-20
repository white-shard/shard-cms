import { Media, Specialty } from "@/payload-types"

export interface TeamBlockFields {
  blockHeading?: string | null
  img?: Media
  heading: string
  description: string
}

export interface StaffListFields {
  staffList: {
    id: number
    img: Media
    fullname: string
    experience: number
    description: string
    specialty: Specialty[]
    alternativeSpecialty: string
    features: { item: string }[]
  }[]
}
