import { Advantages } from "./advantages-block"
import { AdvantagesChallenges } from "./advantages-challenges-block"
import { Contact } from "./contact-block"
import { ExpertTeam } from "./expert-team-block"
import { Founder } from "./founder-block"
import { Gallery } from "./gallery-block"
import { GbtHello } from "./gbt-hello-block"
import { Hero } from "./hero-block"
import { History } from "./history-block"
import { IndicationsContraindications } from "./indications-contraindications-block"
import { Installment } from "./installment"
import { Methods } from "./methods-block"
import { Services } from "./services-block"
import { ServicesCost } from "./services-cost-block"
import { Staff } from "./staff-block"
import { Stages } from "./stages-block"
import { Team } from "./team-block"
import { RegisteredBlockData } from "./types"
import { WhatDoYourGet } from "./what-do-your-get-block"
import { WhyAreWe } from "./why-are-we-block"
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
  Staff,
  Team,
  ExpertTeam,
  Gallery,
  WhyAreWe,
  History,
  GbtHello,
  WhatDoYourGet,
]

export function getBlockRenderer(blockType: string) {
  return registeredPageBlocks.find((block) => block.blockType === blockType)
    ?.renderer
}
