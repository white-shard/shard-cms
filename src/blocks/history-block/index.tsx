import { RegisteredBlockData } from "../types"
import { HistoryBlockFields } from "./types"
import { HistoryBlockDefault } from "./ui/history-default"
import { HistoryBlock as Block } from "./payload"

export const History: RegisteredBlockData = {
  blockType: "history",
  payload: Block,
  renderer: (data: HistoryBlockFields) => {
    return <HistoryBlockDefault fields={data} />
  },
}
