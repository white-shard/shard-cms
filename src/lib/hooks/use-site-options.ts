import { Option } from "@/payload-types"
import { useEffect, useState } from "react"
import { getSiteOptions } from "../api/get-site-options"

export function useSiteOptions() {
  const [options, setOptions] = useState<Option | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchSettings = async () => {
      const options = await getSiteOptions()
      setOptions(options)
      setLoading(true)
    }
    fetchSettings()
  }, [])

  return { options, isLoading }
}
