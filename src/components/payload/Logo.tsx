import logoDark from "@/assets/logo-dark.png"
import logoLight from "@/assets/logo-light.png"
import Image from "next/image"

export default function Logo() {
  return (
    <div>
      <Image
        className="h-20 object-contain dark:hidden"
        src={logoLight}
        alt="Logo"
      />
      <Image
        className="h-20 object-contain hidden dark:block"
        src={logoDark}
        alt="Logo"
      />
    </div>
  )
}
