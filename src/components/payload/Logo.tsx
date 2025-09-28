import logoDark from "@/assets/logo-dark.png"
import logoLight from "@/assets/logo-light.png"
import Image from "next/image"

export default function Logo() {
  return (
    <div className="relative">
      <Image
        className="h-20 object-contain block dark:hidden"
        src={logoLight}
        alt="Logo"
      />
      <Image
        className="h-20 object-contain hidden dark:block absolute top-0 left-0"
        src={logoDark}
        alt="Logo"
      />
    </div>
  )
}
