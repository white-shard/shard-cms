import { Service } from "@/payload-types"

export function ServicesCard({ service }: { service: Service }) {
  return <div>{service.title}</div>
}
