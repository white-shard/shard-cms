import { RegisteredBlockData } from "../types"
import { InstallmentBlock as Block } from "./payload"
import { InstallmentBlockFields } from "./types"
import { InstallmentBlockDefault } from "./ui/installment-default"

export const Installment: RegisteredBlockData = {
  blockType: "installment",
  payload: Block,
  renderer: (data: InstallmentBlockFields) => {
    return <InstallmentBlockDefault fields={data} />
  },
}
