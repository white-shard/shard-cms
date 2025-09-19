import { RegisteredBlockData } from "../types"
import { WorksPhotosBlockFields } from "./types"
import { WorksPhotosBlockDefault } from "./ui/works-photos-default"
import { WorksPhotosBlock as Block } from "./payload"

export const WorksPhotos: RegisteredBlockData = {
  blockType: "works-photos",
  payload: Block,
  renderer: (data: WorksPhotosBlockFields) => {
    return <WorksPhotosBlockDefault fields={data} />
  },
}
