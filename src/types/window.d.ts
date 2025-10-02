declare global {
  interface Window {
    myReviews: {
      BlockWidget: new (config: {
        uuid: string
        name: string
        additionalFrame?: string
        lang?: string
        widgetId?: string
      }) => {
        init: () => void
      }
    }
  }
}

export {}
