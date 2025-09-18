import { RegisteredBlockData } from "../types"
import { AdvantagesChallengesBlock as Block } from "./payload"
import { AdvantagesChallangesBlockFields } from "./types"
import { ACDefault } from "./ui/ac-default"

export const AdvantagesChallenges: RegisteredBlockData = {
  blockType: "advantages-challenges",
  payload: Block,
  renderer: (data: AdvantagesChallangesBlockFields) => {
    return <ACDefault fields={data} />
  },
}
