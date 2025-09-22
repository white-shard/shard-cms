import { Document, Page } from "@/payload-types"
import { useEffect, useState } from "react"
import { getFooterOptions } from "../api/get-footer-options"

export function useFooterOptions() {
  const [footerOptions, setOptions] = useState<IFooterOptions | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchSettings = async () => {
      const options = await getFooterOptions()
      setOptions(options as IFooterOptions)
      setLoading(true)
    }
    fetchSettings()
  }, [])

  return { footerOptions, isLoading }
}

type IFooterOptions = {
  thesis?: string
  links: {
    icon: string
    url: string
  }[]
  services: {
    page: Page
    title?: string
  }[]
  warning?: string
  documentLinks: {
    document: Document
  }[]
  rights?: string
}
