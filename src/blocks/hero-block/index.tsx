import { RegisteredBlockData } from "../types"
import { HeroBlock as Block } from "./payload"
import { HeroBlockFields } from "./types"
import { HeroBlockDefault } from "./ui/hero-default"
import { HeroBlockService } from "./ui/hero-service"
import { HeroBlockSpecial } from "./ui/hero-special"

export const Hero: RegisteredBlockData = {
  blockType: "hero",
  payload: Block,
  renderer: (data: HeroBlockFields) => {
    switch (data.variant) {
      case "service":
        return <HeroBlockService fields={data} />
      case "custom":
        return <HeroBlockSpecial fields={data} />
      default:
        return <HeroBlockDefault fields={data} />
    }
  },
}
