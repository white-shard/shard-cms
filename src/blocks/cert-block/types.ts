import { Media, Document } from "@/payload-types"

export interface CertListBlockFields {
  heading: string
  description: string
  certificates: { img: Media; doc: Document }[]
}
