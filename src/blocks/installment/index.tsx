import { RegisteredBlockData } from "../types"
import { InstallmentBlock as Block } from "./payload"
import { InstallmentBlockDefault } from "./ui/installment-default"

export const Installment: RegisteredBlockData = {
  blockType: "installment",
  payload: Block,
  renderer: () => {
    return <InstallmentBlockDefault />
  },
}
