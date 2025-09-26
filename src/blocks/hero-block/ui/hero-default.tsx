import { Button } from "@/components/ui/button"
import { iconList } from "@/lib/icons"
import Image from "next/image"
import { HeroBlockFields } from "../types"
import { ActionButton } from "@/lib/actions/action-button"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockDefault({ fields }: Props) {
  return (
    <div className="flex justify-center w-full min-h-screen bg-white relative -mt-20 sm:-mt-24">
      <div className="w-full flex flex-col justify-center items-center min-h-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="mt-16 sm:mt-20 flex-col flex items-center w-full lg:w-auto">
          {fields.beforeHeading && (
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 -mb-2 sm:-mb-4 text-center">
              {fields.beforeHeading}
            </h2>
          )}
          <h1 className="text-primary lg:text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl drop-shadow-lg md:drop-shadow-none text-center leading-tight">
            {fields.heading}
          </h1>
        </div>

        <div className="flex-1 lg:flex-0 flex items-center justify-center py-8 sm:py-12">
          {fields.img?.url ? (
            <Image
              alt="background"
              className="block lg:hidden max-w-full h-auto"
              src={fields.img.url || ""}
              width={512}
              height={512}
              priority
            />
          ) : null}
        </div>

        <div className="flex w-full lg:w-auto flex-col gap-4 lg:gap-0 pb-8 sm:pb-12 lg:pb-16">
          {!!fields.actions.length && (
            <div className="w-full flex flex-wrap flex-col sm:flex-row justify-center gap-4 sm:gap-5 lg:gap-6 my-4 sm:my-6 lg:my-12 order-2 lg:order-0">
              {fields.actions.map((action, index) => (
                <ActionButton key={index} data={action} />
              ))}
            </div>
          )}

          {fields.description && (
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center text-secondary-foreground max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl order-1 lg:order-0 leading-relaxed">
              {fields.description}
            </p>
          )}
        </div>
      </div>

      <Image
        alt="background"
        src={fields.img?.url || "/"}
        className="absolute bg-white hidden lg:block"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
          backgroundColor: fields.img?.url ? "white" : "gray",
        }}
      />

      <div className="w-full bottom-0 h-1/2 absolute bg-gradient-to-t from-[#454545] to-[#ffffff00] hidden lg:block z-0" />
    </div>
  )
}
