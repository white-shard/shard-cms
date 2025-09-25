import { Button } from "@/components/ui/button"
import { iconList } from "@/lib/icons"
import Image from "next/image"
import { HeroBlockFields } from "../types"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockService({ fields }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center py-16 sm:py-24 lg:py-32 mx-auto w-full container px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        {fields.beforeHeading && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 -mb-2 sm:-mb-4">
            {fields.beforeHeading}
          </h2>
        )}
        <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg md:drop-shadow-none leading-tight">
          {fields.heading}
        </h1>
        {fields.thesis && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-full lg:max-w-128 mt-4 sm:mt-6 leading-relaxed">
            {fields.thesis}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
          {fields.price && (
            <p className="text-3xl sm:text-4xl lg:text-5xl text-accent font-bold">
              {fields.price} ₽
            </p>
          )}
          {fields.old_price && (
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400">
              <span className="line-through">{fields.old_price}</span> ₽
            </p>
          )}
        </div>
        {!!fields.actions.length && (
          <div className="w-full flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8">
            {fields.actions.map((action, index) => {
              const Icon = iconList[action.icon as keyof typeof iconList]

              return (
                <Button
                  className="w-full sm:w-auto text-base sm:text-lg lg:text-base px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 min-w-48 sm:min-w-56 lg:min-w-64"
                  variant={action.color as never}
                  size="lg"
                  key={index}
                >
                  {!!action.icon && (
                    <Icon className="size-5 sm:size-6 lg:size-7" />
                  )}
                  <span className="ml-2">{action.name}</span>
                </Button>
              )
            })}
          </div>
        )}
        {fields.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-full lg:max-w-120 mt-8 sm:mt-12 text-justify leading-relaxed">
            {fields.description}
          </p>
        )}
      </div>
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0 w-full lg:w-auto">
        {fields.img?.url ? (
          <Image
            alt="service image"
            src={fields.img.url!}
            quality={100}
            width={640}
            height={512}
            className="max-w-full h-auto"
            style={{
              objectFit: "contain",
            }}
          />
        ) : null}
      </div>
    </div>
  )
}
