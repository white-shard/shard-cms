import { Media, Page } from "@/payload-types"

export interface TeamBlockFields {
  blockHeading?: string | null
  img?: Media
  heading: string
  description: string
}

export interface StaffFields {
  id: number
  img: Media
  fullname: string
  experience: number
  description: string
  bookingLink?: string
  specialty: SpecialtyFields[]
  staffPage: Page
  alternativeSpecialty: string
  features: { item: string }[]
}

export interface SpecialtyFields {
  id: number
  name: string
}
