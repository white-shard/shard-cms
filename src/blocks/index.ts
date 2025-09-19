import { Advantages } from "./advantages-block"
import { AdvantagesChallenges } from "./advantages-challenges-block"
import { Contact } from "./contact-block"
import { Founder } from "./founder-block"
import { Hero } from "./hero-block"
import { IndicationsContraindications } from "./indications-contraindications-block"
import { Installment } from "./installment"
import { Methods } from "./methods-block"
import { Services } from "./services-block"
import { ServicesCost } from "./services-cost-block"
import { Stages } from "./stages-block"
import { RegisteredBlockData } from "./types"
import { WorksPhotos } from "./works-photos-block"

export const registeredPageBlocks: RegisteredBlockData[] = [
  Hero,
  Founder,
  Advantages,
  Services,
  Contact,
  Installment,
  AdvantagesChallenges,
  IndicationsContraindications,
  Methods,
  Stages,
  ServicesCost,
  WorksPhotos,
]

export function getBlockRenderer(blockType: string) {
  return registeredPageBlocks.find((block) => block.blockType === blockType)
    ?.renderer
}
