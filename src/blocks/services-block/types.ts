import { Service } from "@/payload-types"

export interface ServicesBlockFields {
  main: Service
  services: {
    service: Service
  }[]
}
