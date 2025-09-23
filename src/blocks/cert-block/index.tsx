import { RegisteredBlockData } from "../types"
import { GalleryBlockFields } from "./types"
import { GalleryBlockDefault } from "./ui/cert-default"
import { GalleryBlock as Block } from "./payload"

export const Gallery: RegisteredBlockData = {
  blockType: "gallery",
  payload: Block,
  renderer: (data: GalleryBlockFields) => {
    return <GalleryBlockDefault fields={data} />
  },
}
