export interface ReviewsBlockFields {
  heading: string
  description: string
  showOnlyPositive: boolean
  yandexIframeCode?: string
  twoGisIframeCode?: string
  videoReviews: VideoReview[]
}

export interface VideoReview {
  id: string
  title: string
  videoUrl: string
  thumbnail?: string
  author?: string
  avatar?: string
  rating?: number
  procedure?: string
}
