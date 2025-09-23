import { RegisteredBlockData } from "../types"
import { CertListBlockFields } from "./types"
import { CertListBlockDefault } from "./ui/cert-default"
import { CertListBlock as Block } from "./payload"

export const CertList: RegisteredBlockData = {
  blockType: "cert-list",
  payload: Block,
  renderer: (data: CertListBlockFields) => {
    return <CertListBlockDefault fields={data} />
  },
}
