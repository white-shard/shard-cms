import { RegisteredBlockData } from "../types"
import { FounderBlock as Block } from "./payload"
import { FounderBlockFields } from "./types"
import { FounderBlockDefault } from "./ui/founder-default"

export const Founder: RegisteredBlockData = {
  blockType: "founder",
  payload: Block,
  renderer: (data: FounderBlockFields) => {
    return <FounderBlockDefault fields={data} />
  },
}
