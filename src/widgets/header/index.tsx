import { Navigation as PayloadNavigation } from "@/payload-types"
import { type Navigation } from "./types"
import { DesktopHeader } from "./ui/desktop"
import { MobileHeader } from "./ui/mobile"

export type Props = {
  navigation: PayloadNavigation
}

export function Header({ navigation }: Props) {
  const data = navigation as Navigation

  return (
    <header className="fixed top-0 w-screen z-20 py-8 md:bg-white">
      <div className="hidden md:block">
        <DesktopHeader navigation={data} />
      </div>
      <div className="block md:hidden">
        <MobileHeader navigation={data} />
      </div>
    </header>
  )
}
