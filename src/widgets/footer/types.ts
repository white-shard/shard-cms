import { Service } from "@/payload-types"

export type Navigation = {
  items: {
    id: string
    label: string
    url?: string
    hasCategories: boolean
    categories: NavigationCategory[]
  }[]
}

export type NavigationCategory = {
  id: string
  label: string
  url?: string
  hasItems: boolean
  items: NavigationItem[]
}

export type NavigationItem = {
  id: string
  label: string
  url?: string
}

export type FooterSettings = {
  services: {
    item: Service
  }[]
}
