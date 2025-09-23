import { iconList } from "@/lib/icons"
import { GbtSubscribeBlockFields } from "../types"
import { Button } from "@/components/ui/button"
import { Check, ClipboardList } from "lucide-react"

type Props = {
  fields: GbtSubscribeBlockFields
}

export function GbtSubscribeDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
      <p className="text-4xl text-center">
        Годовая подписка на <span className="text-accent">GBT</span>
      </p>
      <p className="text-xl text-center max-w-screen-sm">
        {fields.description}
      </p>
      <div className="flex justify-around gap-16 mt-8">
        <div className="max-w-screen-sm">
          <div className="text-3xl pb-8">Что включено:</div>
          <ul className="flex flex-col gap-4 ">
            {fields.included.map((item, index) => {
              const Icon = iconList[item.icon as keyof typeof iconList]
              return (
                <div className="flex gap-4" key={index}>
                  <div className="size-16 aspect-square rounded-lg bg-accent text-white grid justify-center items-center">
                    {!!item.icon && <Icon className="size-6" />}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl">{item.title}</p>
                    <p className="text-gray-600 text-xl">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="max-w-screen-sm">
          <div className="text-3xl pb-8">Стоимость подписки</div>
          <div className="flex gap-4">
            {fields.price && (
              <p className="text-5xl text-accent max-w-128">{fields.price} ₽</p>
            )}
            {fields.old_price && (
              <p className="text-4xl text-gray-400 max-w-128">
                <span className="line-through">{fields.old_price}</span> ₽
              </p>
            )}
          </div>
          <p>за год</p>
          <p className="text-gray-400 text-2xl max-w-screen-sm">
            {fields.motivation}
          </p>
          <Button
            className="flex gap-2 text-white w-64 my-4"
            variant="accent"
            size="lg"
          >
            <ClipboardList className="size-5" /> Купить подписку
          </Button>
          <ul className="flex flex-col gap-2 text-xl text-gray-600 mt-4">
            {fields.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="size-6 text-gray-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
