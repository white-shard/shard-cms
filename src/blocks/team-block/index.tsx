import { RegisteredBlockData } from "../types"
import { TeamBlockFields } from "./types"
import { TeamBlock as Block } from "./payload"
import { TeamBlockDefault } from "./ui/team-default"

export const Team: RegisteredBlockData = {
  blockType: "team",
  payload: Block,
  renderer: (data: TeamBlockFields) => {
    return <TeamBlockDefault fields={data} />
  },
}
