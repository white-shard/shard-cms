import { Media } from "@/payload-types"

export interface MethodsBlockFields {
  heading: string
  description: string
  methods: Method[]
}

export interface Method {
  img: Media
  heading: string
  description: string
}
