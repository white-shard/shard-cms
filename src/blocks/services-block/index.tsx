import { RegisteredBlockData } from "../types"
import { ServicesBlock as Block } from "./payload"
import { ServicesBlockFields } from "./types"
import { ServicesBlockDefault } from "./ui/services-default"

export const Services: RegisteredBlockData = {
  blockType: "services",
  payload: Block,
  renderer: (data: ServicesBlockFields) => {
    return <ServicesBlockDefault fields={data} />
  },
}
