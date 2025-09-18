import { RegisteredBlockData } from "../types"
import { ServicesCostBlockFields } from "./types"
import { ServicesCostBlock as Block } from "./payload"
import { ServicesCostBlockDefault } from "./ui/services-cost-default"

export const ServicesCost: RegisteredBlockData = {
  blockType: "services-cost",
  payload: Block,
  renderer: (data: ServicesCostBlockFields) => {
    return <ServicesCostBlockDefault fields={data} />
  },
}
