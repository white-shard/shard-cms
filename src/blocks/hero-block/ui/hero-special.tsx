import { MediaRenderer } from "@/components/media-renderer"
import { ActionButton } from "@/lib/actions/action-button"
import Image from "next/image"
import { HeroBlockFields } from "../types"

// Функция для определения типа медиа
const isVideo = (media: { mimeType?: string | null }) => {
  return media?.mimeType?.startsWith("video/")
}

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockSpecial({ fields }: Props) {
  return (
    <div className="flex justify-center w-full min-h-screen bg-white relative -mt-20 sm:-mt-24">
      <div className="w-full flex flex-col justify-center items-center min-h-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="mt-16 sm:mt-20 flex-col flex gap-4 sm:gap-6 items-center w-full lg:w-auto">
          {fields.logo?.url ? (
            <Image
              alt="logo"
              className="size-32 sm:size-40 lg:size-48"
              src={fields.logo?.url || ""}
              width={256}
              height={256}
              priority
            />
          ) : null}

          {fields.beforeHeading && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-primary -mb-2 sm:-mb-4 text-center max-w-full lg:max-w-screen-sm">
              <span className="text-accent">GBT</span> - это мы!
            </h2>
          )}
          <h1 className="text-primary lg:text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg md:drop-shadow-none text-center max-w-full lg:max-w-screen-sm leading-tight">
            {fields.heading}
          </h1>
        </div>

        <div className="flex-1 w-full lg:flex-0 flex items-center justify-center py-8 sm:py-12">
          <div className="relative flex-1 w-full aspect-video block lg:hidden">
            {fields.img?.url ? <MediaRenderer media={fields.img} /> : null}
          </div>
        </div>

        <div className="flex w-full lg:w-auto flex-col gap-4 lg:gap-0 pb-8 sm:pb-12 lg:pb-16">
          {fields.description && (
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center text-secondary-foreground max-w-full lg:max-w-screen-md order-1 lg:order-0 my-4 sm:my-6 leading-relaxed">
              Мы поняли: <span className="text-accent">GBT</span> должен
              попробовать каждый!
            </p>
          )}

          <div className="flex flex-col sm:flex-row mx-auto gap-2 sm:gap-4 justify-center items-center">
            {fields.price && (
              <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-accent">
                {fields.price} ₽
              </p>
            )}
            {fields.old_price && (
              <p className="text-3xl sm:text-4xl lg:text-5xl text-gray-400">
                <span className="line-through">{fields.old_price}</span> ₽
              </p>
            )}
          </div>

          {!!fields.actions.length && (
            <div className="w-full flex flex-wrap flex-col sm:flex-row justify-center gap-4 sm:gap-5 lg:gap-6 my-4 sm:my-6 lg:my-12 order-2 lg:order-0">
              {fields.actions.map((action, index) => (
                <ActionButton key={index} data={action} />
              ))}
            </div>
          )}
        </div>
      </div>

      {fields.img?.url ? (
        <div className="absolute w-screen h-screen lg:block hidden">
          <MediaRenderer media={fields.img} />
        </div>
      ) : null}

      <div className="w-full bottom-0 h-full absolute bg-secondary/65 hidden lg:block z-0" />
    </div>
  )
}
