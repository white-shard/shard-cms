import { MediaRenderer } from "@/components/media-renderer"
import { ActionButton } from "@/lib/actions/action-button"
import { HeroBlockFields } from "../types"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockDefault({ fields }: Props) {
  return (
    <div className="w-screen min-h-screen h-fit -mt-16 md:-mt-24">
      <div className="w-full h-full relative lg:absolute flex flex-col items-center justify-between lg:justify-center z-10 lg:gap-y-4">
        <div className="mb-4 my-16 sm:my-32 lg:my-0">
          {fields.beforeHeading && (
            <h2 className="text-xl lg:text-2xl text-gray-400 -mb-2 sm:-mb-4 text-center">
              {fields.beforeHeading}
            </h2>
          )}
          <h1 className="text-primary lg:text-white text-4xl sm:text-6xl lg:text-8xl drop-shadow-lg md:drop-shadow-none text-center leading-tight">
            {fields.heading}
          </h1>
        </div>
        <div className="flex-1 w-full lg:flex-0 flex items-center justify-center py-8 sm:py-12 lg:hidden">
          <div className="relative flex-1 md:flex-none w-full md:w-[640px] md:max-h-96 aspect-video">
            {fields.img?.url ? <MediaRenderer media={fields.img} /> : null}
          </div>
        </div>
        <div className="flex flex-col mb-4 sm:mb-8 lg:mb-0 px-4">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 sm:gap-4 lg:max-w-screen-md md:mx-auto order-2 lg:order-0 w-full md:w-auto">
            {fields.actions.map((action, index) => (
              <ActionButton key={index} data={action} />
            ))}
          </div>
          <p className="text-lg sm:text-2xl md:text-4xl text-primary lg:text-white max-w-screen-md mx-auto text-center my-2 sm:my-12 drop-shadow-xl order-1 lg:order-0">
            {fields.description}
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute hidden lg:block">
        <div className="relative w-full h-full overflow-hidden ">
          <MediaRenderer media={fields.img} className="w-full" />
        </div>
      </div>
      <div className="w-full bottom-0 h-1/2 absolute bg-gradient-to-t from-[#454545] to-[#ffffff00] hidden lg:block z-0" />
    </div>
  )
}
