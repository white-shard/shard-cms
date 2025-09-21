import { RegisteredBlockData } from "../types"
import { WhyAreWeBlockFields } from "./types"
import { WhyAreWeBlockDefault } from "./ui/why-are-we-default"
import { WhyAreWeBlock as Block } from "./payload"

export const WhyAreWe: RegisteredBlockData = {
  blockType: "why-are-we",
  payload: Block,
  renderer: (data: WhyAreWeBlockFields) => {
    return <WhyAreWeBlockDefault fields={data} />
  },
}
