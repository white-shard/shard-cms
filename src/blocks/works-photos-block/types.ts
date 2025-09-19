import { Media } from "@/payload-types"

export interface WorksPhotosBlockFields {
  heading: string
  description: string
  photos: {
    beforeImg: Media
    afterImg: Media
    heading: string
  }[]
}
