import { RegisteredBlockData } from "../types"
import { GbtSubscribeBlock as Block } from "./payload"
import { GbtSubscribeBlockFields } from "./types"
import { GbtSubscribeDefault } from "./ui/gbt-subscribe-default"

export const GbtSubscribe: RegisteredBlockData = {
  blockType: "gbt-subscribe",
  payload: Block,
  renderer: (data: GbtSubscribeBlockFields) => {
    return <GbtSubscribeDefault fields={data} />
  },
}
