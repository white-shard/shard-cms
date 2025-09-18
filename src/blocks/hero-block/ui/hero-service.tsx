import { Button } from "@/components/ui/button"
import { iconList } from "@/lib/icons"
import Image from "next/image"
import { HeroBlockFields } from "../types"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockService({ fields }: Props) {
  return (
    <div className="flex items-center py-32 mx-auto w-screen container">
      <div className="flex-1 flex flex-col">
        {fields.beforeHeading && (
          <h2 className="text-4xl text-gray-400 -mb-2">
            {fields.beforeHeading}
          </h2>
        )}
        <h1 className="text-primary text-5xl drop-shadow-lg md:drop-shadow-none">
          {fields.heading}
        </h1>
        {fields.thesis && (
          <p className="text-2xl text-gray-600 max-w-128 mt-6">
            {fields.thesis}
          </p>
        )}
        <div className="flex gap-4">
          {fields.price && (
            <p className="text-5xl text-accent max-w-128 mt-6">
              {fields.price} ₽
            </p>
          )}
          {fields.old_price && (
            <p className="text-4xl text-gray-400 max-w-128 mt-6">
              <span className="line-through">{fields.old_price}</span> ₽
            </p>
          )}
        </div>
        {!!fields.actions.length && (
          <div className="w-full flex flex-wrap flex-col md:flex-row gap-[20px] mt-8">
            {fields.actions.map((action, index) => {
              const Icon = iconList[action.icon as keyof typeof iconList]

              return (
                <Button
                  className="text-xl md:text-base"
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
          <p className="text-xl text-gray-400 max-w-120 mt-12 text-justify">
            {fields.description}
          </p>
        )}
      </div>
      <div className="flex-1 flex items-center">
        {fields.img?.url ? (
          <Image
            alt="service image"
            src={fields.img.url!}
            quality={100}
            width={640}
            height={512}
            style={{
              objectFit: "contain",
            }}
          />
        ) : null}
      </div>
    </div>
  )
}
