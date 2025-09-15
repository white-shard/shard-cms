import { Advantages } from "./advantages-block"
import { Founder } from "./founder-block"
import { Hero } from "./hero-block"
import { Services } from "./services-block"
import { Statistic } from "./statistic-block"
import { RegisteredBlockData } from "./types"

export const registeredPageBlocks: RegisteredBlockData[] = [
  Hero,
  Statistic,
  Founder,
  Advantages,
  Services,
]

export function getBlockRenderer(blockType: string) {
  return registeredPageBlocks.find((block) => block.blockType === blockType)
    ?.renderer
}
