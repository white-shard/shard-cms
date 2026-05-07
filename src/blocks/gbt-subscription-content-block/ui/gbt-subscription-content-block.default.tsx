import { PlusIcon } from "lucide-react"
import Image from "next/image"
import { GbtSubscriptionContentBlockFields } from "../types"
import { GbtVector } from "./gbt-vector"

type Props = {
  fields: GbtSubscriptionContentBlockFields
}

export function GbtSubscriptionContentBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex justify-center gap-8 flex-col lg:flex-row">
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-8 sm:gap-12 lg:gap-16">
        <span className="text-accent text-2xl sm:text-3xl lg:text-5xl leading-tight whitespace-pre-line text-center">
          ЧТО ВХОДИТ{"\n"}В ПОДПИСКУ?
        </span>
        <div className="flex flex-col items-center">
          <GbtVector className="w-96" />
          <Image
            width={400}
            height={400}
            className="-mt-8"
            src={fields.img?.url ?? "/"}
            alt={fields.img?.alt ?? "Image"}
          />
        </div>
      </div>
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <span className="text-accent text-2xl sm:text-3xl lg:text-5xl text-center leading-tight whitespace-pre-line">
          ПРЕИМУЩЕСТВА{"\n"}ГОДОВОЙ ПОДПИСКИ:
        </span>
        <ul className="text-2xl mt-8 sm:mt-12 lg:mt-16">
          <li className="flex gap-2 items-center border-b py-2 border-primary">
            <PlusIcon className="size-6" />
            <span>Оплата через сервис «Долями»</span>
          </li>
          <li className="flex gap-2 items-center border-b py-2 border-primary">
            <PlusIcon className="size-6" />
            <span>Онлайн консультации врача (по телефону)</span>
          </li>
          <li className="flex gap-2 items-center border-b py-2 border-primary">
            <PlusIcon className="size-6" />
            <span>Товары Curaprox по себестоимости</span>
          </li>
          <li className="flex gap-2 items-center border-b py-2 border-primary">
            <PlusIcon className="size-6" />
            <span>Закрытый клуб для подписчиков</span>
          </li>
        </ul>
        <div className="text-secondary-foreground mt-4">
          <p>
            *встречи, ивенты, уникальные предложения только для обладателей
            подписки
          </p>
          <p>
            **Обратитесь к администратору, чтобы оформить подписку через сервис
            «Долями»
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image
            width={400}
            height={320}
            src={fields.imgRight?.url ?? "/"}
            alt={fields.imgRight?.alt ?? "Image"}
          />
        </div>
      </div>
    </div>
  )
}
