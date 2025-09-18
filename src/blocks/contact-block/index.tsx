import { RegisteredBlockData } from "../types"
import { ContactBlockFields } from "./types"
import { ContactBlockDefault } from "./ui/contact-default"
import { ContactBlock as Block } from "./payload"

export const Contact: RegisteredBlockData = {
  blockType: "contact",
  payload: Block,
  renderer: (data: ContactBlockFields) => {
    return <ContactBlockDefault fields={data} />
  },
}
