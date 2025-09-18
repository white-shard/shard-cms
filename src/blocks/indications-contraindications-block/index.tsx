import { IndicationsContraindicationsDefault } from "./ui/indications-contraindications-default"
import { RegisteredBlockData } from "../types"
import { IndicationsContraindicationsBlockFields } from "./types"
import { IndicationsContraindicationsBlock as Block } from "./payload"

export const IndicationsContraindications: RegisteredBlockData = {
  blockType: "indications-contraindications",
  payload: Block,
  renderer: (data: IndicationsContraindicationsBlockFields) => {
    return <IndicationsContraindicationsDefault fields={data} />
  },
}
