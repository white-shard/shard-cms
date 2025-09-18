export interface AdvantagesChallangesBlockFields {
  advantages: {
    heading: string
    description?: string
    advantages: ACItem[]
  }
  challenges: {
    heading: string
    description?: string
    challenges: ACItem[]
  }
}

export interface ACItem {
  heading: string
  description?: string
}
