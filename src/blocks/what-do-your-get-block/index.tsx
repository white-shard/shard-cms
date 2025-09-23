import { RegisteredBlockData } from "../types"
import { WhatDoYoutGetBlock as Block } from "./payload"
import { WhatDoYoutGetFields } from "./types"
import { WhatDoYourGetDefault } from "./ui/what-do-your-get-default"

export const WhatDoYourGet: RegisteredBlockData = {
  blockType: "what-do-your-get",
  payload: Block,
  renderer: (data: WhatDoYoutGetFields) => {
    return <WhatDoYourGetDefault fields={data} />
  },
}
