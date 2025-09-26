import { iconList } from "@/lib/icons"
import { GbtSubscribeBlockFields } from "../types"
import { Button } from "@/components/ui/button"
import { Check, ClipboardList } from "lucide-react"

type Props = {
  fields: GbtSubscribeBlockFields
}

export function GbtSubscribeDefault({ fields }: Props) {
  return (
    <div
      id="subscribe"
      className="container mx-auto flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <p className="text-2xl sm:text-3xl lg:text-4xl text-center leading-tight">
        Годовая подписка на <span className="text-accent">GBT</span>
      </p>
      <p className="text-base sm:text-lg lg:text-xl text-center max-w-full lg:max-w-screen-sm leading-relaxed">
        {fields.description}
      </p>
      <div className="flex flex-col lg:flex-row justify-around gap-8 sm:gap-12 lg:gap-16 mt-6 sm:mt-8 w-full">
        <div className="max-w-full lg:max-w-screen-sm">
          <div className="text-xl sm:text-2xl lg:text-3xl pb-4 sm:pb-6 lg:pb-8">
            Что включено:
          </div>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {fields.included.map((item, index) => {
              const Icon = iconList[item.icon as keyof typeof iconList]
              return (
                <div className="flex gap-3 sm:gap-4" key={index}>
                  <div className="size-12 sm:size-14 lg:size-16 aspect-square rounded-lg bg-accent text-white grid justify-center items-center flex-shrink-0">
                    {!!item.icon && (
                      <Icon className="size-4 sm:size-5 lg:size-6" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <p className="text-lg sm:text-xl lg:text-2xl leading-tight">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="max-w-full lg:max-w-screen-sm">
          <div className="text-xl sm:text-2xl lg:text-3xl pb-4 sm:pb-6 lg:pb-8">
            Стоимость подписки
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {fields.price && (
              <p className="text-3xl sm:text-4xl lg:text-5xl text-accent max-w-full lg:max-w-128">
                {fields.price} ₽
              </p>
            )}
            {fields.old_price && (
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-full lg:max-w-128">
                <span className="line-through">{fields.old_price}</span> ₽
              </p>
            )}
          </div>
          <p className="text-sm sm:text-base lg:text-lg">за год</p>
          <p className="text-gray-400 text-base sm:text-lg lg:text-2xl max-w-full lg:max-w-screen-sm leading-relaxed">
            {fields.motivation}
          </p>
          <Button
            className="flex gap-2 text-white w-full sm:w-64 my-4 sm:my-6 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3"
            variant="accent"
            size="lg"
          >
            <ClipboardList className="size-4 sm:size-5" /> Купить подписку
          </Button>
          <ul className="flex flex-col gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6">
            {fields.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 sm:gap-3">
                <Check className="size-4 sm:size-5 lg:size-6 text-gray-600 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
