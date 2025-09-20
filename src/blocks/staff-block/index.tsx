import { RegisteredBlockData } from "../types"
import { StaffBlockFields } from "./types"
import { StaffBlock as Block } from "./payload"
import { StaffBlockDefault } from "./ui/staff-default"

export const Staff: RegisteredBlockData = {
  blockType: "staff",
  payload: Block,
  renderer: (data: StaffBlockFields) => {
    return <StaffBlockDefault fields={data} />
  },
}
