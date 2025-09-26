export type HeaderOptions = {
  id: number
  navigation?:
    | {
        label: string
        color?: "default" | "accent" | null
        url?: string | null
        hasCategories?: boolean | null
        categories?:
          | {
              label: string
              url?: string | null
              hasItems?: boolean | null
              items?:
                | {
                    label: string
                    url?: string | null
                    id?: string | null
                  }[]
                | null
              id?: string | null
            }[]
          | null
        id?: string | null
      }[]
    | null
  actionButtons?:
    | {
        name: string
        icon: string
        color: string
        variant?: "default" | "icon" | "icon-text" | null
        action: "link" | "form"
        url?: string | null
        form?: number | null
        id?: string | null
      }[]
    | null
}

export type NavigationItem = {
  label: string
  color?: "default" | "accent" | null
  url?: string | null
  hasCategories?: boolean | null
  categories?: NavigationCategory[]
}

export type NavigationCategory = {
  label: string
  url?: string | null
  hasItems?: boolean | null
  items?: NavigationSubItem[]
}

export type NavigationSubItem = {
  label: string
  url?: string | null
}
