import { RegisteredBlockData } from "../types"
import { DocumentsBlockFields } from "./types"
import { DocumentsBlockDefault } from "./ui/documents-default"
import { DocumentsBlock as Block } from "./payload"

export const Documents: RegisteredBlockData = {
  blockType: "documents",
  payload: Block,
  renderer: (data: DocumentsBlockFields) => {
    return <DocumentsBlockDefault fields={data} />
  },
}
