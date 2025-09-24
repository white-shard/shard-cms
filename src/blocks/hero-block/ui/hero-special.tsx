import Image from "next/image"
import { HeroBlockFields } from "../types"
import { Button } from "@/components/ui/button"
import { iconList } from "@/lib/icons"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockSpecial({ fields }: Props) {
  return (
    <div className="flex justify-center w-screen h-screen bg-white relative -mt-24">
      <div className="w-full flex flex-col justify-center items-center min-h-full z-10">
        <div className="mt-16 flex-col flex gap-4 items-center w-full lg:w-auto px-4">
          {fields.logo?.url ? (
            <Image
              alt="logo"
              className="size-48"
              src={fields.logo?.url || ""}
              width={256}
              height={256}
            />
          ) : null}

          {fields.beforeHeading && (
            <h2 className="text-5xl text-primary -mb-2 md:-mb-4 text-center max-w-screen-sm">
              {/* {fields.beforeHeading} */}
              <span className="text-accent">GBT</span> - это мы!
            </h2>
          )}
          <h1 className="text-primary lg:text-primary text-2xl md:text-5xl drop-shadow-lg md:drop-shadow-none text-center max-w-screen-sm">
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
          {fields.description && (
            <p className="text-2xl lg:text-3xl text-center text-secondary-foreground max-w-screen-md order-1 lg:order-0 my-4">
              {/* {fields.description} */}
              Мы поняли: <span className="text-accent">GBT</span> должен
              попробовать каждый!
            </p>
          )}

          <div className="flex mx-auto gap-4">
            {fields.price && (
              <p className="text-7xl text-accent max-w-128 mt-6">
                {fields.price} ₽
              </p>
            )}
            {fields.old_price && (
              <p className="text-5xl text-gray-400 max-w-128 mt-6">
                <span className="line-through">{fields.old_price}</span> ₽
              </p>
            )}
          </div>

          {!!fields.actions.length && (
            <div className="w-full flex flex-wrap flex-col px-4 md:flex-row justify-center gap-[20px] my-4 lg:my-12 order-2 lg:order-0">
              {fields.actions.map((action, index) => {
                const Icon = iconList[action.icon as keyof typeof iconList]

                return (
                  <Button
                    className="text-xl md:text-base min-w-64"
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
          objectFit: "cover",
          backgroundColor: fields.img?.url ? "white" : "gray",
        }}
      />

      <div className="w-full bottom-0 h-full absolute bg-secondary/65 hidden lg:block z-0" />
    </div>
  )
}
