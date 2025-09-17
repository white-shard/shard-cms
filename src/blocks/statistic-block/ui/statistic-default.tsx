import { ChartNoAxesColumn, MessageSquare, Star, User } from "lucide-react"
import { StatisticBlockFields } from "../types"

type Props = {
  fields: StatisticBlockFields
}

export function StatisticBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-8 md:flex justify-between text-center leading-4">
      <div className="flex flex-col items-center">
        <div className="size-12 rounded-full bg-black flex justify-center items-center mb-1">
          <ChartNoAxesColumn className="size-6 text-white" />
        </div>
        <span className="text-2xl text-primary">{fields.expirience}+</span>
        <p className="text-gray-600 max-w-2/3">Лет опыта</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="size-12 rounded-full bg-black flex justify-center items-center mb-1">
          <User className="size-6 text-white" />
        </div>
        <span className="text-2xl text-primary">{fields.patients}+</span>
        <p className="text-gray-600 max-w-2/3">Довольных пациентов</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="size-12 rounded-full bg-black flex justify-center items-center mb-1">
          <Star className="size-6 text-white" />
        </div>
        <span className="text-2xl text-primary">{fields.reviews}%</span>
        <p className="text-gray-600 max-w-2/3">Положительных отзывов</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="size-12 rounded-full bg-black flex justify-center items-center mb-1">
          <MessageSquare className="size-6 text-white" />
        </div>
        <span className="text-2xl text-primary">{fields.support}</span>
        <p className="text-gray-600 max-w-2/3">Поддержка и консультация</p>
      </div>
    </div>
  )
}
