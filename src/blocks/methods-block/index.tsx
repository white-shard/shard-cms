import { RegisteredBlockData } from "../types"
import { MethodsBlockFields } from "./types"
import { MethodsBlockDefault } from "./ui/methods-default"
import { MethodsBlock as Block } from "./payload"

export const Methods: RegisteredBlockData = {
  blockType: "methods",
  payload: Block,
  renderer: (data: MethodsBlockFields) => {
    return <MethodsBlockDefault fields={data} />
  },
}
