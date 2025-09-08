export interface HeroBlockFields {
  variant: "default" | "service1" | "service2"
  beforeHeading?: string
  heading: string
  description?: string
  actions: {
    name: string
    icon: string
    color: string
  }[]
}
