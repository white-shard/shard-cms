import { RegisteredBlockData } from "../types"
import { FounderBlock as Block } from "./payload"
import { GbtHelloBlockFields } from "./types"
import { GbtHelloBlockDefault } from "./ui/gbt-hello-default"

export const GbtHello: RegisteredBlockData = {
  blockType: "gbt-hello",
  payload: Block,
  renderer: (data: GbtHelloBlockFields) => {
    return <GbtHelloBlockDefault fields={data} />
  },
}
