import { RegisteredBlockData } from "../types"
import { HeroBlock as Block } from "./payload"
import { HeroBlockFields } from "./types"
import { HeroBlockDefault } from "./ui/hero-default"

export const Hero: RegisteredBlockData = {
  blockType: "hero",
  payload: Block,
  renderer: (data: HeroBlockFields) => {
    switch (data.variant) {
      default:
        return <HeroBlockDefault fields={data} />
    }
  },
}
