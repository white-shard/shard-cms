import { RegisteredBlockData } from "../types"
import { TextBlockFields } from "./types"
import { TextBlockDefault } from "./ui/text-default"
import { TextBlock as Block } from "./payload"

export const Text: RegisteredBlockData = {
  blockType: "text",
  payload: Block,
  renderer: (data: TextBlockFields) => {
    return <TextBlockDefault fields={data} />
  },
}
