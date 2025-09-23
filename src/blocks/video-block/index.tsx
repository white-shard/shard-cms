import { RegisteredBlockData } from "../types"
import { ImageBlock as Block } from "./payload"
import { ImageBlockFields } from "./types"
import { ImageDefault } from "./ui/image-default"

export const Image: RegisteredBlockData = {
  blockType: "image",
  payload: Block,
  renderer: (data: ImageBlockFields) => {
    return <ImageDefault fields={data} />
  },
}
