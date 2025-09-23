import { RegisteredBlockData } from "../types"
import { VideoBlock as Block } from "./payload"
import { VideoBlockFields } from "./types"
import { VideoBlockDefault } from "./ui/image-default"

export const Video: RegisteredBlockData = {
  blockType: "video",
  payload: Block,
  renderer: (data: VideoBlockFields) => {
    return <VideoBlockDefault fields={data} />
  },
}
