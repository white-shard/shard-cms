import { Button } from "@/components/ui/button"
import { Check, ClipboardList } from "lucide-react"
import Image from "next/image"
import { InstallmentBlockFields } from "../types"

type Props = {
  fields: InstallmentBlockFields
}

export function InstallmentBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4 flex flex-col">
      <span className="text-3xl md:text-8xl text-primary">РАССРОЧКА 0%</span>
      <div className="lg:hidden block">
        <p className="text-base md:text-xl md:w-1/2 text-accent">
          Здоровье не ждёт. Теперь и вам не придётся. В Dr. Koshakov — лечение в
          рассрочку БЕЗ ПРОЦЕНТОВ.
        </p>
      </div>
      <div className="flex justify-between items-center mb-4 md:text-2xl">
        <div className="md:max-w-148">
          <div className="hidden lg:block">
            <p className="text-base md:text-xl lg:text-2xl text-accent">
              Здоровье не ждёт. Теперь и вам не придётся. В Dr. Koshakov —
              лечение в рассрочку БЕЗ ПРОЦЕНТОВ.2
            </p>
          </div>
          <ul className="lg:my-8">
            <li className="flex items-center gap-2">
              <Check className="size-4 md:size-6 lg:size-8 text-accent" />
              Честно
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 md:size-6 lg:size-8 text-accent" />
              Премиально
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 md:size-6 lg:size-8 text-accent" />
              Для вашего комфорта
            </li>
          </ul>
          <div className="gap-4 hidden lg:grid">
            <div className="bg-accent rounded-r-full p-4 lg:py-6 text-white md:text-3xl max-w-96">
              на 6 месяцев до 750 000 ₽
            </div>
            <Button
              className="flex-1 md:flex-none md:w-48 md:py-6 lg:w-64 lg:py-8"
              size="default"
              variant="primary"
            >
              <ClipboardList className="size-5" />
              Подробнее
            </Button>
          </div>
        </div>
        <div className="w-1/2 relative lg:w-96 aspect-square rounded-lg">
          <Image
            src={fields?.img?.url || ""}
            alt={fields?.img?.alt || ""}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <div className="grid gap-4 lg:hidden">
        <div className="bg-accent rounded-r-full p-4 text-white md:text-3xl">
          на 6 месяцев до 750 000 ₽
        </div>
        <Button
          className="flex-1 md:flex-none md:w-48 md:py-6"
          size="default"
          variant="primary"
        >
          <ClipboardList className="size-5" />
          Подробнее
        </Button>
      </div>
    </div>
  )
}
