import { AmoCrm } from "@/payload-types"
import { useEffect, useState } from "react"
import { getAmoOptions } from "../api/get-amo-options"

export function useAmoOptions() {
  const [options, setOptions] = useState<AmoCrm | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchSettings = async () => {
      const options = await getAmoOptions()
      setOptions(options)
      setLoading(true)
    }
    fetchSettings()
  }, [])

  return { options, isLoading }
}
