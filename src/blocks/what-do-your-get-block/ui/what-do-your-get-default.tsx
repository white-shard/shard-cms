import { WhatDoYoutGetFields } from "../types"

type Props = {
  fields: WhatDoYoutGetFields
}

export function WhatDoYourGetDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex flex-col gap-2 items-center px-4">
      <p className="text-4xl">
        ЧТО ВЫ ПОЛУЧАЕТЕ ВМЕСТЕ С <span className="text-accent">GBT?</span>
      </p>
      <p className="text-gray-600 text-xl">
        Выгоды, которые Вы почувствуете сразу
      </p>

      {/* Мобильная версия - все элементы в одном столбце по порядку */}
      <div className="flex lg:hidden flex-col gap-8 w-full">
        {fields.items.map((item, index) => (
          <div className="flex flex-col gap-4 w-full" key={index}>
            <div className="flex gap-4 items-center">
              <div className="size-12 aspect-square rounded-full bg-accent flex justify-center items-center text-white text-2xl">
                {index + 1}.
              </div>
              <div className="h-[2px] w-full bg-gradient-to-r from-accent to-transparent" />
            </div>
            <p className="text-3xl">{item.heading}</p>
            <p className="text-gray-600 text-xl">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Десктопная версия - два столбца */}
      <div className="hidden lg:flex gap-32 justify-around w-full">
        <div className="py-8 flex flex-col justify-center gap-8">
          {fields.items.map(
            (item, index) =>
              index % 2 === 0 && (
                <div className="flex flex-col gap-4 w-128" key={index}>
                  <div className="flex gap-4 items-center">
                    <div className="size-12 aspect-square rounded-full bg-accent flex justify-center items-center text-white text-2xl">
                      {index + 1}.
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-accent to-transparent" />
                  </div>
                  <p className="text-3xl">{item.heading}</p>
                  <p className="text-gray-600 text-xl">{item.description}</p>
                </div>
              ),
          )}
        </div>
        <div className="py-8 flex flex-col justify-center gap-8">
          {fields.items.map(
            (item, index) =>
              index % 2 !== 0 && (
                <div className="flex flex-col gap-4 w-128" key={index}>
                  <div className="flex gap-4 items-center">
                    <div className="size-12 aspect-square rounded-full bg-accent flex justify-center items-center text-white text-2xl">
                      {index + 1}.
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-accent to-transparent" />
                  </div>
                  <p className="text-3xl">{item.heading}</p>
                  <p className="text-gray-600 text-xl">{item.description}</p>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  )
}
