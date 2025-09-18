import { Advantages } from "./advantages-block"
import { AdvantagesChallenges } from "./advantages-challenges-block"
import { Contact } from "./contact-block"
import { Founder } from "./founder-block"
import { Hero } from "./hero-block"
import { IndicationsContraindications } from "./indications-contraindications-block"
import { Installment } from "./installment"
import { Services } from "./services-block"
import { RegisteredBlockData } from "./types"

export const registeredPageBlocks: RegisteredBlockData[] = [
  Hero,
  Founder,
  Advantages,
  Services,
  Contact,
  Installment,
  AdvantagesChallenges,
  IndicationsContraindications,
]

export function getBlockRenderer(blockType: string) {
  return registeredPageBlocks.find((block) => block.blockType === blockType)
    ?.renderer
}
