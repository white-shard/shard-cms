import { RegisteredBlockData } from "../types"
import { AdvantagesBlock as Block } from "./payload"
import { AdvantagesBlockFields } from "./types"
import { AdvantagesBlockDefault } from "./ui/advantages-default"

export const Advantages: RegisteredBlockData = {
  blockType: "advantages",
  payload: Block,
  renderer: (data: AdvantagesBlockFields) => {
    return <AdvantagesBlockDefault fields={data} />
  },
}
