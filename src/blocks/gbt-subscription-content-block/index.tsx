import { RegisteredBlockData } from "../types"
import { GbtSubscriptionContentBlock as Block } from "./payload"
import { GbtSubscriptionContentBlockFields } from "./types"
import { GbtSubscriptionContentBlockDefault } from "./ui/gbt-subscription-content-block.default"

export const GbtSubscriptionContentBlock: RegisteredBlockData = {
  blockType: "gbt-subscription-content",
  payload: Block,
  renderer: (data: GbtSubscriptionContentBlockFields) => {
    return <GbtSubscriptionContentBlockDefault fields={data} />
  },
}
