import { Button } from "@/components/ui/button"
import { iconList } from "@/lib/icons"
import Image from "next/image"
import { HeroBlockFields } from "../types"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockDefault({ fields }: Props) {
  return (
    <div className="flex justify-center w-screen h-[calc(100vh-100px)] bg-white relative">
      <div className="w-full flex flex-col justify-center items-center min-h-full z-10">
        <div className="mt-16 flex-col flex items-center w-full lg:w-auto px-4">
          {fields.beforeHeading && (
            <h2 className="text-2xl text-gray-400 -mb-2 md:-mb-4">
              {fields.beforeHeading}
            </h2>
          )}
          <h1 className="text-primary lg:text-white text-4xl md:text-8xl drop-shadow-lg md:drop-shadow-none">
            {fields.heading}
          </h1>
        </div>

        <div className="flex-1 lg:flex-0 flex items-center">
          {fields.img?.url ? (
            <Image
              alt="background"
              className="block md:hidden"
              src={fields.img.url || ""}
              width={512}
              height={512}
            />
          ) : null}
        </div>

        <div className="flex w-full md:w-auto flex-col gap-4 lg:gap-0">
          {!!fields.actions.length && (
            <div className="w-full flex flex-wrap flex-col px-4 md:flex-row justify-center gap-[20px] my-4 lg:my-12 order-2 lg:order-0">
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
        src={fields.img?.url || "/"}
        className="absolute bg-white hidden md:block"
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
