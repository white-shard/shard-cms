import { Hero } from "./hero-block"
import { RegisteredBlockData } from "./types"

export const registeredBlocks: RegisteredBlockData[] = [Hero]

export function getBlockRenderer(blockType: string) {
  return registeredBlocks.find((block) => block.blockType === blockType)
    ?.renderer
}
