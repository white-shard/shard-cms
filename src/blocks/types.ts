import { Block } from "payload"

export type RegisteredBlockData = {
  blockType: string
  payload: Block
  renderer: (data: never) => React.ReactNode
}
