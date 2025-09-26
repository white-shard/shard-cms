import { Document, Page } from "@/payload-types"
import { useEffect, useState } from "react"
import { getFooterOptions } from "../api/get-footer-options"
import { IActionButton } from "../actions/types"

export function useFooterOptions() {
  const [footerOptions, setOptions] = useState<IFooterOptions | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchSettings = async () => {
      const options = await getFooterOptions()
      setOptions(options as never as IFooterOptions)
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
  actionButtons: IActionButton[]
  footerLinks: {
    label: string
    url: string
  }[]
  documentLinks: {
    document: Document
  }[]
  rights?: string
}
