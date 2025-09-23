import { Media } from "@/payload-types"

export interface GalleryBlockFields {
  heading: string
  description: string
  images: { img: Media }[]
}
