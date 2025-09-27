import { useQuery } from "@tanstack/react-query"
import config from "@/payload.config"
import { getPayload } from "payload"

export function useSEOOptions() {
  return useQuery({
    queryKey: ["seo-options"],
    queryFn: async () => {
      const payload = await getPayload({ config })
      return await payload.findGlobal({
        slug: "seo-options",
      })
    },
    staleTime: 5 * 60 * 1000, // 5 минут
  })
}
