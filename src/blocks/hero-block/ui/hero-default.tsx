import { Button } from "@/components/ui/button"
import { iconList } from "@/lib/icons"
import Image from "next/image"
import { HeroBlockFields } from "../types"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockDefault({ fields }: Props) {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white relative">
      <div className="flex flex-col justify-between md:justify-center items-center min-h-full pt-16 z-10">
        <div className="flex-col flex lg:items-center w-full lg:w-auto px-4">
          {fields.beforeHeading && (
            <h2 className="text-[40px] text-gray-400 -mb-4">
              {fields.beforeHeading}
            </h2>
          )}
          <h1 className="text-primary lg:text-white text-7xl md:text-8xl drop-shadow-lg md:drop-shadow-none">
            {fields.heading}
          </h1>
        </div>

        <div className="flex-1 lg:flex-0 flex items-center">
          <Image
            alt="background"
            className="block md:hidden"
            src={fields.img.url!}
            width={512}
            height={512}
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-0">
          {!!fields.actions.length && (
            <div className="w-full flex flex-wrap flex-col md:flex-row justify-center gap-[20px] my-4 lg:my-12 order-2 lg:order-0">
              {fields.actions.map((action, index) => {
                const Icon = iconList[action.icon as keyof typeof iconList]

                return (
                  <Button
                    className="flex-1 text-xl md:text-base"
                    variant={action.color as never}
                    size="lg"
                    key={index}
                  >
                    {!!action.icon && <Icon className="size-6 md:size-5" />}
                    {action.name}
                  </Button>
                )
              })}
            </div>
          )}

          {fields.description && (
            <p className="text-2xl lg:text-3xl text-center text-secondary-foreground max-w-[480px] order-1 lg:order-0">
              {fields.description}
            </p>
          )}
        </div>
      </div>

      <Image
        alt="background"
        src={fields.img.url!}
        className="absolute hidden md:block"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
        }}
      />

      <div className="w-full bottom-0 h-1/2 absolute bg-gradient-to-t from-[#454545] to-[#ffffff00] hidden lg:block z-0" />
    </div>
  )
}
