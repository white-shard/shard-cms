import { RegisteredBlockData } from "../types"
import { ExpertTeamBlockFields } from "./types"
import { ExpertTeamBlockDefault } from "./ui/expert-team-default"
import { ExpertTeamBlock as Block } from "./payload"

export const ExpertTeam: RegisteredBlockData = {
  blockType: "expert-team",
  payload: Block,
  renderer: (data: ExpertTeamBlockFields) => {
    return <ExpertTeamBlockDefault fields={data} />
  },
}
