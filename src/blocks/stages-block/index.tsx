import { RegisteredBlockData } from "../types"
import { StagesBlockFields } from "./types"
import { StagesBlock as Block } from "./payload"
import { StagesBlockDefault } from "./ui/stages-default"

export const Stages: RegisteredBlockData = {
  blockType: "stages",
  payload: Block,
  renderer: (data: StagesBlockFields) => {
    return <StagesBlockDefault fields={data} />
  },
}
