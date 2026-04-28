import { RegisteredBlockData } from "../types"
import { GbtBlock as Block } from "./payload"
import { GbtBlockFields } from "./types"
import { GbtHelloBlockDefault } from "./ui/gbt-hello-default"

export const GbtHello: RegisteredBlockData = {
  blockType: "gbt",
  payload: Block,
  renderer: (data: GbtBlockFields) => {
    return <GbtHelloBlockDefault fields={data} />
  },
}
